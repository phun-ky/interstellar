import assert from 'node:assert';
import { describe, test } from 'node:test';

import { wrapAngle } from '../wrap-angle';

const EPSILON = 1e-10; // Small tolerance for floating-point comparisons
const assertApproxEqual = (actual: number, expected: number) => {
  assert.ok(
    Math.abs(actual - expected) < EPSILON,
    `Expected ~${expected}, got ${actual}`
  );
};

describe('wrapAngle', () => {
  test('angles already in range [-π, π]', () => {
    assertApproxEqual(wrapAngle(0), 0);
    assertApproxEqual(wrapAngle(Math.PI / 2), Math.PI / 2);
    assertApproxEqual(wrapAngle(-Math.PI / 2), -Math.PI / 2);
    assertApproxEqual(wrapAngle(Math.PI - 0.1), Math.PI - 0.1);
    assertApproxEqual(wrapAngle(-Math.PI + 0.1), -Math.PI + 0.1);
  });

  test('negative and retrograde angles', () => {
    assertApproxEqual(wrapAngle(-Math.PI), -Math.PI);
    assertApproxEqual(wrapAngle((-3 * Math.PI) / 2), Math.PI / 2);
    assertApproxEqual(wrapAngle(-2 * Math.PI), 0);
    assertApproxEqual(wrapAngle(-3 * Math.PI), -Math.PI);
    assertApproxEqual(wrapAngle((-5 * Math.PI) / 2), -Math.PI / 2);
  });

  test('angles greater than π', () => {
    assertApproxEqual(wrapAngle(2 * Math.PI), 0);
    assertApproxEqual(wrapAngle(3 * Math.PI), Math.PI);
    assertApproxEqual(wrapAngle(4 * Math.PI), 0);
    assertApproxEqual(wrapAngle((5 * Math.PI) / 2), Math.PI / 2);
    assertApproxEqual(wrapAngle(7 * Math.PI), Math.PI);
  });

  test('extreme values', () => {
    assertApproxEqual(wrapAngle(100 * Math.PI), 0);
    assertApproxEqual(wrapAngle(-100 * Math.PI), 0);
    assertApproxEqual(wrapAngle(1000), wrapAngle(1000 % (2 * Math.PI)));
    assertApproxEqual(wrapAngle(-1000), wrapAngle(-1000 % (2 * Math.PI)));
  });
});
