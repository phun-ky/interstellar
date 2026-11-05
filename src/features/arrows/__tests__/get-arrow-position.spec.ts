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

  test('ignores a panel close to the centre', () => {
    // A panel just below the centre, where an arrow would land on the focused body
    const panel = { left: 300, top: HEIGHT / 2 + 30, right: 500, bottom: 500 };
    const down = getArrowPosition(Math.PI / 2, WIDTH, HEIGHT, [panel]);

    close(down.y, HEIGHT - ARROW_EDGE_PADDING);
    assert.equal(down.edge, 'bottom');
  });
});
