import assert from 'node:assert/strict';
import test, { describe } from 'node:test';

import { TWO_PI } from '../../../config/constants';
import { CelestialBodyType } from '../../../types/celestial-bodies';
import { TemporalInterface } from '../../../types/temporal';
import { computeMeanAnomaly } from '../compute-mean-anomaly';
import { trueAnomalyToMeanAnomaly } from '../true-anomaly-to-mean-anomaly';
import { wrapAngle } from '../wrap-angle';

const EPSILON = 1e-10; // Small tolerance for floating-point comparisons
const assertApproxEqual = (actual: number, expected: number) => {
  assert.ok(
    Math.abs(actual - expected) < EPSILON,
    `Expected ~${expected}, got ${actual}`
  );
};

describe('computeMeanAnomaly', () => {
  test('Circular Orbit (e=0)', () => {
    const body: CelestialBodyType = {
      e: 0,
      angle: Math.PI / 2,
      period: { value: 365, unit: 'day' }
    } as CelestialBodyType;
    const timeStep: TemporalInterface = { value: 100, unit: 'day' };
    const periodInDays = body.period.value;
    const meanMotion = TWO_PI / periodInDays;
    const expectedM = wrapAngle(Math.PI / 2 + meanMotion * 100);
    const result = computeMeanAnomaly(body, timeStep);

    assertApproxEqual(result, expectedM);
  });

  test('Elliptical Orbit (e > 0)', () => {
    const body: CelestialBodyType = {
      e: 0.5,
      angle: Math.PI / 2,
      period: { value: 200, unit: 'day' }
    } as CelestialBodyType;
    const timeStep: TemporalInterface = { value: 50, unit: 'day' };
    const periodInDays = body.period.value;
    const meanMotion = TWO_PI / periodInDays;
    // Compute M0 using actual function
    const M0 =
      body.e === 0 ? body.angle : trueAnomalyToMeanAnomaly(body.angle, body.e);
    const expectedM = wrapAngle(M0 + meanMotion * 50);
    const result = computeMeanAnomaly(body, timeStep);

    assertApproxEqual(result, expectedM);
  });

  test('Large Time Step Clamping (Max 10 Orbits)', () => {
    const body: CelestialBodyType = {
      e: 0.1,
      angle: 1.0,
      period: { value: 100, unit: 'day' }
    } as CelestialBodyType;
    const timeStep: TemporalInterface = { value: 2000, unit: 'day' };
    const periodInDays = body.period.value;
    const meanMotion = TWO_PI / periodInDays;
    const maxAllowedTimeStep = 10 * periodInDays;
    // Fix: Compute M0 using trueAnomalyToMeanAnomaly
    const M0 = trueAnomalyToMeanAnomaly(body.angle, body.e);
    const expectedM = wrapAngle(M0 + meanMotion * maxAllowedTimeStep);
    const result = computeMeanAnomaly(body, timeStep);

    assertApproxEqual(result, expectedM);
  });

  test('Eccentricity Out of Bounds Throws Error', () => {
    const invalidBodies: CelestialBodyType[] = [
      { e: -0.1, angle: 0, period: { value: 365, unit: 'day' } },
      { e: 1.1, angle: 0, period: { value: 365, unit: 'day' } }
    ] as CelestialBodyType[];
    const timeStep: TemporalInterface = { value: 10, unit: 'day' };

    for (const body of invalidBodies) {
      assert.throws(() => computeMeanAnomaly(body, timeStep), RangeError);
    }
  });

  test('Zero Time Step Returns Initial Mean Anomaly', () => {
    const body: CelestialBodyType = {
      e: 0.3,
      angle: 2.0,
      period: { value: 400, unit: 'day' }
    } as CelestialBodyType;
    const timeStep: TemporalInterface = { value: 0, unit: 'day' };
    const M0 =
      body.e === 0 ? body.angle : trueAnomalyToMeanAnomaly(body.angle, body.e);
    const result = computeMeanAnomaly(body, timeStep);

    assertApproxEqual(result, M0);
  });
});
