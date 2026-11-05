import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { OrbitInterface, Radians } from '@interstellar-tools/types';

import { getBodyPosition } from '../get-body-position';

const A = 2;
const E = 0.5;
const bodyAt = (angle: number, retrograde = false) => ({
  id: 'test-body',
  name: 'Test body',
  kind: 'planetary' as const,
  orbit: {
    a: { value: A, unit: 'au' },
    e: E,
    period: { value: 365.25, unit: 'd' },
    angle: angle as Radians,
    retrograde
  } as OrbitInterface
});
const close = (actual: number, expected: number) =>
  assert.ok(
    Math.abs(actual - expected) < 1e-12,
    `${actual} is not ${expected}`
  );

describe('getBodyPosition', () => {
  test('is r = a(1 - e²) / (1 + e cos ν) from the focus, at the true anomaly', () => {
    for (let nu = 0; nu < 2 * Math.PI; nu += 0.1) {
      const { x, y } = getBodyPosition(bodyAt(nu));
      const r = (A * (1 - E ** 2)) / (1 + E * Math.cos(nu));

      close(Math.hypot(x.value, y.value), r);
      close(
        Math.atan2(-y.value, x.value),
        Math.atan2(Math.sin(nu), Math.cos(nu))
      );
    }
  });

  test('lies on the ellipse that traceOrbit() draws', () => {
    const b = A * Math.sqrt(1 - E ** 2);

    for (let nu = 0; nu < 2 * Math.PI; nu += 0.1) {
      const { x, y } = getBodyPosition(bodyAt(nu));

      close(((x.value + A * E) / A) ** 2 + (y.value / b) ** 2, 1);
    }
  });

  test('a quarter orbit past perihelion is at the semi-latus rectum', () => {
    const { x, y } = getBodyPosition(bodyAt(Math.PI / 2));

    close(x.value, 0);
    close(Math.abs(y.value), A * (1 - E ** 2));
  });

  test('retrograde orbits mirror the prograde position', () => {
    const prograde = getBodyPosition(bodyAt(1));
    const retrograde = getBodyPosition(bodyAt(1, true));

    close(retrograde.x.value, prograde.x.value);
    close(retrograde.y.value, -prograde.y.value);
  });
});
