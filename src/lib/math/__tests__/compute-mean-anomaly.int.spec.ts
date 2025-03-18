import assert from 'node:assert/strict';
import test, { describe } from 'node:test';

import { wrapAngle } from '../wrap-angle';

describe('computeMeanAnomaly', () => {
  // Test cases for computeMeanAnomaly
  // const testCases = [
  //   {
  //     celestialBody: {
  //       e: 0,
  //       angle: Math.PI / 3,
  //       period: { value: 365, unit: 'day' }
  //     },
  //     deltaT: 100,
  //     expected: (Math.PI / 3 + ((2 * Math.PI) / 365) * 100) % (2 * Math.PI)
  //   },
  //   {
  //     celestialBody: {
  //       e: 0.2,
  //       angle: Math.PI / 4,
  //       period: { value: 687, unit: 'day' }
  //     },
  //     deltaT: 200,
  //     expected: wrapAngle(
  //       trueAnomalyToMeanAnomaly(Math.PI / 4, 0.2) + ((2 * Math.PI) / 687) * 200
  //     )
  //   },
  //   {
  //     celestialBody: {
  //       e: 0.5,
  //       angle: Math.PI,
  //       period: { value: 500, unit: 'day' }
  //     },
  //     deltaT: 50,
  //     expected: wrapAngle(
  //       trueAnomalyToMeanAnomaly(Math.PI, 0.5) + ((2 * Math.PI) / 500) * 50
  //     )
  //   }
  // ];

  // test('computeMeanAnomaly computes correct values', () => {
  //   testCases.forEach(({ celestialBody, deltaT, expected }) => {
  //     const result = computeMeanAnomaly(
  //       celestialBody as CelestialBodyType,
  //       deltaT
  //     );

  //     assert.ok(
  //       Math.abs(result - expected) < 1e-4,
  //       `Expected M ≈ ${expected} for body=${JSON.stringify(celestialBody)}, deltaT=${deltaT}, but got ${result}`
  //     );
  //   });
  // });

  // test('computeMeanAnomaly throws on invalid eccentricity', () => {
  //   assert.throws(
  //     () =>
  //       computeMeanAnomaly(
  //         {
  //           e: -0.1,
  //           angle: 0,
  //           period: { value: 365, unit: 'day' }
  //         } as CelestialBodyType,
  //         10
  //       ),
  //     RangeError
  //   );
  //   assert.throws(
  //     () =>
  //       computeMeanAnomaly(
  //         {
  //           e: 1.2,
  //           angle: 0,
  //           period: { value: 365, unit: 'day' }
  //         } as CelestialBodyType,
  //         10
  //       ),
  //     RangeError
  //   );
  // });

  test('mod function wraps values correctly', () => {
    assert.strictEqual(wrapAngle(-3), 2 * Math.PI - 3);
    assert.strictEqual(wrapAngle(10), 10 % (2 * Math.PI));
  });
});
