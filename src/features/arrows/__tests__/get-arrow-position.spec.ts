import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import {
  ARROW_EDGE_PADDING,
  getArrowPosition
} from '../utils/get-arrow-position';

const WIDTH = 800;
const HEIGHT = 600;
const close = (actual: number, expected: number) =>
  assert.ok(Math.abs(actual - expected) < 1e-9, `${actual} is not ${expected}`);

describe('getArrowPosition', () => {
  test('places arrows on each padded edge', () => {
    const right = getArrowPosition(0, WIDTH, HEIGHT);
    const bottom = getArrowPosition(Math.PI / 2, WIDTH, HEIGHT);
    const left = getArrowPosition(Math.PI, WIDTH, HEIGHT);
    const top = getArrowPosition(-Math.PI / 2, WIDTH, HEIGHT);

    assert.equal(right.edge, 'right');
    close(right.x, WIDTH - ARROW_EDGE_PADDING);
    close(right.y, HEIGHT / 2);

    assert.equal(bottom.edge, 'bottom');
    close(bottom.x, WIDTH / 2);
    close(bottom.y, HEIGHT - ARROW_EDGE_PADDING);

    assert.equal(left.edge, 'left');
    close(left.x, ARROW_EDGE_PADDING);

    assert.equal(top.edge, 'top');
    close(top.y, ARROW_EDGE_PADDING);
  });

  test('keeps the arrow on the line from the center towards the target', () => {
    // A target far away down and to the right of the center
    const angle = Math.atan2(5000, 9000);
    const { x, y } = getArrowPosition(angle, WIDTH, HEIGHT);

    close(Math.atan2(y - HEIGHT / 2, x - WIDTH / 2), angle);
  });

  test('stays inside the padded viewport near the corners', () => {
    for (let angle = -Math.PI; angle <= Math.PI; angle += 0.05) {
      const { x, y } = getArrowPosition(angle, WIDTH, HEIGHT);

      assert.ok(x >= ARROW_EDGE_PADDING - 1e-9);
      assert.ok(x <= WIDTH - ARROW_EDGE_PADDING + 1e-9);
      assert.ok(y >= ARROW_EDGE_PADDING - 1e-9);
      assert.ok(y <= HEIGHT - ARROW_EDGE_PADDING + 1e-9);
    }
  });

  test('stops outside a panel in the way', () => {
    // A panel on the right, from y = 100 to 400
    const panel = { left: 600, top: 100, right: WIDTH, bottom: 400 };
    const right = getArrowPosition(0, WIDTH, HEIGHT, [panel]);

    close(right.x, panel.left - ARROW_EDGE_PADDING);
    close(right.y, HEIGHT / 2);
    assert.equal(right.edge, 'right');
  });

  test('ignores a panel the ray passes', () => {
    // Below the panel: the ray towards the bottom right corner misses it
    const panel = { left: 600, top: 0, right: WIDTH, bottom: 200 };
    const angle = Math.atan2(HEIGHT / 2, WIDTH / 2);
    const corner = getArrowPosition(angle, WIDTH, HEIGHT, [panel]);
    const free = getArrowPosition(angle, WIDTH, HEIGHT);

    close(corner.x, free.x);
    close(corner.y, free.y);
  });

  test('ignores a panel over the centre', () => {
    // A panel the centre sits inside can't be stepped around
    const panel = { left: 300, top: 200, right: 500, bottom: 400 };
    const right = getArrowPosition(0, WIDTH, HEIGHT, [panel]);
    const free = getArrowPosition(0, WIDTH, HEIGHT);

    close(right.x, free.x);
    close(right.y, free.y);
    assert.equal(right.edge, 'right');
  });

  test('a horizontal ray passes a panel above its row', () => {
    // The ray to the right runs along y = 300, below the panel
    const panel = { left: 600, top: 0, right: WIDTH, bottom: 200 };
    const right = getArrowPosition(0, WIDTH, HEIGHT, [panel]);

    close(right.x, WIDTH - ARROW_EDGE_PADDING);
    close(right.y, HEIGHT / 2);
    assert.equal(right.edge, 'right');
  });

  test('a ray to the left stops outside a panel on the left', () => {
    // The telemetry column on the left, from y = 100 to 500
    const panel = { left: 0, top: 100, right: 200, bottom: 500 };
    const left = getArrowPosition(Math.PI, WIDTH, HEIGHT, [panel]);

    close(left.x, panel.right + ARROW_EDGE_PADDING);
    close(left.y, HEIGHT / 2);
    assert.equal(left.edge, 'left');
  });

  test('ignores a panel that would put the arrow on the focused body', () => {
    // A panel just below the centre, inside a focused body 40 px in radius
    const panel = { left: 300, top: HEIGHT / 2 + 30, right: 500, bottom: 500 };
    const down = getArrowPosition(Math.PI / 2, WIDTH, HEIGHT, [panel], 40);

    close(down.y, HEIGHT - ARROW_EDGE_PADDING);
    assert.equal(down.edge, 'bottom');
  });

  test('stops above the info popup when the focused body is small', () => {
    // The layout measured in #47: a 1440 × 836 canvas, the popup's top 142 px
    // below the centre, a focused body 10 px in radius (keep-out 10 + 32)
    const width = 1440;
    const height = 836;
    const popup = {
      left: 380,
      top: height / 2 + 142,
      right: 1060,
      bottom: 812
    };
    const down = getArrowPosition(Math.PI / 2, width, height, [popup], 42);

    close(down.y, popup.top - ARROW_EDGE_PADDING);
    assert.equal(down.edge, 'bottom');
  });
});
