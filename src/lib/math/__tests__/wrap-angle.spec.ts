import assert from 'node:assert';
import { describe, test } from 'node:test';

import { TWO_PI } from '../../../config/constants';
import { wrapAngle } from '../wrap-angle';

const EPSILON = 1e-10; // Small tolerance for floating-point comparisons
const assertApproxEqual = (actual: number, expected: number) => {
  assert.ok(
    Math.abs(actual - expected) < EPSILON,
    `Expected ~${expected}, got ${actual}`
  );
};

describe('wrapAngle', () => {
  test('wrapAngle - angles already in range [0, 2π]', () => {
    assertApproxEqual(wrapAngle(0), 0);
    assertApproxEqual(wrapAngle(Math.PI / 2), Math.PI / 2);
    assertApproxEqual(wrapAngle(Math.PI), Math.PI);
    assertApproxEqual(wrapAngle((3 * Math.PI) / 2), (3 * Math.PI) / 2);
    assertApproxEqual(wrapAngle(TWO_PI - 0.1), TWO_PI - 0.1);
  });

  test('wrapAngle - negative angles', () => {
    assertApproxEqual(wrapAngle(-Math.PI), Math.PI);
    assertApproxEqual(wrapAngle(-Math.PI / 2), (3 * Math.PI) / 2);
    assertApproxEqual(wrapAngle(-TWO_PI), 0);
    assertApproxEqual(wrapAngle(-3 * Math.PI), Math.PI);
    assertApproxEqual(wrapAngle((-5 * Math.PI) / 2), (3 * Math.PI) / 2); // Fixed expectation
  });

  test('wrapAngle - angles greater than 2π', () => {
    assertApproxEqual(wrapAngle(TWO_PI), 0);
    assertApproxEqual(wrapAngle(3 * Math.PI), Math.PI);
    assertApproxEqual(wrapAngle(4 * Math.PI), 0);
    assertApproxEqual(wrapAngle((5 * Math.PI) / 2), Math.PI / 2);
    assertApproxEqual(wrapAngle(7 * Math.PI), Math.PI);
  });

  test('wrapAngle - extreme values', () => {
    assertApproxEqual(wrapAngle(100 * TWO_PI), 0);
    assertApproxEqual(wrapAngle(-100 * TWO_PI), 0);
    assertApproxEqual(wrapAngle(1000), wrapAngle(1000 % TWO_PI));
    assertApproxEqual(wrapAngle(-1000), wrapAngle((-1000 % TWO_PI) + TWO_PI));
  });
});
