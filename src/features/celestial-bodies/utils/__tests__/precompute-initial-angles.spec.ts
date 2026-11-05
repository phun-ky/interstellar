import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { OrbitInterface, Radians } from '@interstellar-tools/types';

import { precomputeInitialAngles } from '../precompute-initial-angles';

const makeBody = () => ({
  id: 'test-planet',
  name: 'Test planet',
  kind: 'planetary' as const,
  orbit: {
    a: { value: 1, unit: 'au' },
    e: 0.1,
    period: { value: 365.25, unit: 'd' },
    angle: 0.5 as Radians
  } as OrbitInterface
});

describe('precomputeInitialAngles', () => {
  test('gives the same angle when called again for the same date', () => {
    const body = makeBody();
    const date = new Date('2026-11-05T12:00:00Z');

    precomputeInitialAngles([body], date);

    const first = body.orbit.angle;

    // The simulation moves the angle on …
    body.orbit.angle = 2 as Radians;
    // … and resetting to the same date puts it back
    precomputeInitialAngles([body], date);

    assert.equal(body.orbit.angle, first);
  });

  test('a date one period later gives the same angle', () => {
    const body = makeBody();

    precomputeInitialAngles([body], new Date('2026-01-01T00:00:00Z'));

    const first = body.orbit.angle;

    precomputeInitialAngles(
      [body],
      new Date(Date.parse('2026-01-01T00:00:00Z') + 365.25 * 86400000)
    );

    assert.ok(Math.abs(body.orbit.angle - first) < 1e-9);
  });
});
