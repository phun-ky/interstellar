import assert from 'node:assert/strict';
import { beforeEach, describe, test } from 'node:test';

import { drawDirectionalArrows, forgetArrowLabels } from '../draw-arrowheads';

const WIDTH = 800;
const HEIGHT = 600;

type DrawnLabelType = { text: string; x: number; y: number };

/** A minimal canvas context that records the arrow labels drawn. */
const createContext = () => {
  const labels: DrawnLabelType[] = [];
  const noop = () => {};
  const space = {
    save: noop,
    restore: noop,
    beginPath: noop,
    moveTo: noop,
    lineTo: noop,
    stroke: noop,
    fillRect: noop,
    strokeRect: noop,
    measureText: (text: string) => ({ width: text.length * 8 }),
    fillText: (text: string, x: number, y: number) =>
      labels.push({ text, x, y })
  } as unknown as CanvasRenderingContext2D;

  return { space, labels };
};
const addBody = (id: string, x: number, y: number, name = id) => {
  globalThis.NEAREST_BODIES[id] = {
    id,
    size: 4,
    x,
    y,
    name,
    category: 'planet',
    parent: undefined
  };
};

describe('drawDirectionalArrows', () => {
  beforeEach(() => {
    globalThis.NEAREST_BODIES = {};
    forgetArrowLabels();
  });

  test('ignores bodies that are on screen', () => {
    const { space, labels } = createContext();

    addBody('earth', 400, 300);
    addBody('mars', 10, 10);
    drawDirectionalArrows({ space, canvasWidth: WIDTH, canvasHeight: HEIGHT });

    assert.deepEqual(labels, []);
  });

  test('only points to the nearest off-screen bodies', () => {
    const { space, labels } = createContext();

    // 12 bodies spread around the viewport, each further away than the last
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * 2 * Math.PI;
      const distance = 1000 + i * 100;

      addBody(
        `body-${i}`,
        WIDTH / 2 + Math.cos(angle) * distance,
        HEIGHT / 2 + Math.sin(angle) * distance
      );
    }

    drawDirectionalArrows({
      space,
      canvasWidth: WIDTH,
      canvasHeight: HEIGHT,
      count: 10
    });

    assert.deepEqual(
      labels.map(({ text }) => text).sort(),
      Array.from({ length: 10 }, (_, i) => `BODY-${i}`).sort()
    );
  });

  test('points from the center of the viewport', () => {
    const { space, labels } = createContext();

    // Straight to the right of the center, far away
    addBody('vega', WIDTH / 2 + 1e6, HEIGHT / 2, 'Vega');
    drawDirectionalArrows({ space, canvasWidth: WIDTH, canvasHeight: HEIGHT });

    assert.equal(labels.length, 1);
    assert.equal(labels[0].text, 'VEGA');
    assert.ok(labels[0].x > WIDTH / 2, 'label is on the right side');
    assert.equal(labels[0].y, HEIGHT / 2);
  });

  test('merges bodies in the same direction into one arrow', () => {
    const { space, labels } = createContext();

    addBody('alpha-centauri-a', WIDTH + 5000, 300, 'Alpha Centauri A');
    addBody('alpha-centauri-b', WIDTH + 5001, 300, 'Alpha Centauri B');
    addBody('proxima-centauri', WIDTH + 5200, 301, 'Proxima Centauri');
    addBody('deneb', -5000, 300, 'Deneb');
    drawDirectionalArrows({ space, canvasWidth: WIDTH, canvasHeight: HEIGHT });

    assert.deepEqual(labels.map(({ text }) => text).sort(), [
      'ALPHA CENTAURI A +2',
      'DENEB'
    ]);
  });

  test('keeps a merged arrow named after the same body when the nearer one changes', () => {
    /** Draws a frame with Spica A and B about as far away, and returns the labels. */
    const frame = (aX: number, bX: number) => {
      const { space, labels } = createContext();

      globalThis.NEAREST_BODIES = {};
      addBody('spica-a', aX, -3000, 'Spica A');
      addBody('spica-b', bX, -3000, 'Spica B');
      drawDirectionalArrows({
        space,
        canvasWidth: WIDTH,
        canvasHeight: HEIGHT
      });

      return labels;
    };
    const first = frame(400, 420);

    assert.deepEqual(
      first.map(({ text }) => text),
      ['SPICA A +1']
    );

    // Spica B is now the nearer of the two, then A again
    for (const [aX, bX] of [
      [420, 400],
      [400, 420],
      [420, 400]
    ]) {
      const [label, ...rest] = frame(aX, bX);

      assert.deepEqual(rest, []);
      assert.equal(label.text, 'SPICA A +1');
      // The arrow points at Spica A: further right when A is
      assert.equal(label.x > first[0].x, aX > 400);
    }
  });

  test('moves labels apart instead of drawing them on top of each other', () => {
    const { space, labels } = createContext();

    // Two bodies below the viewport whose arrows are close, but not close enough to merge
    addBody('mars', 400 + 1000, HEIGHT + 4000, 'Planet Mars');
    addBody('sun', 400 + 1500, HEIGHT + 4000, 'Our Sun');
    drawDirectionalArrows({ space, canvasWidth: WIDTH, canvasHeight: HEIGHT });

    assert.equal(labels.length, 2);
    assert.notEqual(labels[0].y, labels[1].y);
  });

  test('keeps each label on its row when the bodies swap which is nearer', () => {
    /** Draws a frame with Left and Right above the viewport, and returns each label's height. */
    const frame = (leftY: number, rightY: number) => {
      const { space, labels } = createContext();

      // Their arrows are close enough on the top edge for the labels to overlap,
      // but too far apart to merge
      addBody('left', 90, leftY, 'Left');
      addBody('right', 710, rightY, 'Right');
      drawDirectionalArrows({
        space,
        canvasWidth: WIDTH,
        canvasHeight: HEIGHT
      });

      return Object.fromEntries(labels.map(({ text, y }) => [text, y]));
    };
    // Right is nearer, so its label is placed first and Left's moves aside
    const first = frame(-4000, -3990);

    assert.ok(first.LEFT > first.RIGHT, 'Left moved below Right');

    // Left becomes the nearer one, as bodies do when they move
    for (const [leftY, rightY] of [
      [-3980, -3990],
      [-4000, -3990],
      [-3980, -3990]
    ]) {
      assert.deepEqual(frame(leftY, rightY), first);
    }
  });

  test('puts a moved label back once the way is clear', () => {
    const { space, labels } = createContext();

    addBody('left', 90, -4000, 'Left');
    addBody('right', 710, -3990, 'Right');
    drawDirectionalArrows({ space, canvasWidth: WIDTH, canvasHeight: HEIGHT });

    const moved = labels.find(({ text }) => text === 'LEFT')?.y;

    // Right is back on screen, so Left has the top row to itself
    globalThis.NEAREST_BODIES = {};
    labels.length = 0;
    addBody('left', 90, -4000, 'Left');
    drawDirectionalArrows({ space, canvasWidth: WIDTH, canvasHeight: HEIGHT });

    assert.ok(labels[0].y < (moved ?? 0), 'Left moved back up');
  });

  test("keeps a moved label on its line while it can't go home", () => {
    /** Draws Vega straight above, with a panel beside its arrow, and returns its label's height. */
    const frame = (panelBottom: number) => {
      const { space, labels } = createContext();

      addBody('vega', WIDTH / 2, -4000, 'Vega, far away');
      drawDirectionalArrows({
        space,
        canvasWidth: WIDTH,
        canvasHeight: HEIGHT,
        // Clear of the arrow's path, but under its label
        obstacles: [{ left: 430, top: 40, right: 600, bottom: panelBottom }]
      });

      return labels[0].y;
    };
    // The panel covers the label's first two lines, so it is moved to the third
    const moved = frame(90);

    // The second line clears, the first doesn't: the label stays where it is
    assert.equal(frame(70), moved);
    // The first line clears: the label goes home
    assert.ok(frame(30) < moved);
  });

  test('treats bodies behind a panel as off screen, and only those', () => {
    const { space, labels } = createContext();
    // A panel on the right, from y = 0 to 400
    const panel = { left: 600, top: 0, right: WIDTH, bottom: 400 };

    // Behind the panel
    addBody('vega', 700, HEIGHT / 2, 'Vega');
    // Beside the panel, below it, in plain view
    addBody('neptune', 700, 500, 'Neptune');
    drawDirectionalArrows({
      space,
      canvasWidth: WIDTH,
      canvasHeight: HEIGHT,
      obstacles: [panel]
    });

    assert.deepEqual(
      labels.map(({ text }) => text),
      ['VEGA']
    );
    assert.ok(labels[0].x < panel.left, 'label stays clear of the panel');
  });
});
