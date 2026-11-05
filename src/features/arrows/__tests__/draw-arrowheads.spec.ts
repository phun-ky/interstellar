import assert from 'node:assert/strict';
import { beforeEach, describe, test } from 'node:test';

import { drawDirectionalArrows } from '../draw-arrowheads';

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

  test('moves labels apart instead of drawing them on top of each other', () => {
    const { space, labels } = createContext();

    // Two bodies below the viewport whose arrows are close, but not close enough to merge
    addBody('mars', 400 + 1000, HEIGHT + 4000, 'Planet Mars');
    addBody('sun', 400 + 1500, HEIGHT + 4000, 'Our Sun');
    drawDirectionalArrows({ space, canvasWidth: WIDTH, canvasHeight: HEIGHT });

    assert.equal(labels.length, 2);
    assert.notEqual(labels[0].y, labels[1].y);
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
