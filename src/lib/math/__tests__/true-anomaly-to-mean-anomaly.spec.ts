import assert from 'node:assert/strict';
import test, { describe } from 'node:test';

import { trueAnomalyToMeanAnomaly } from '../true-anomaly-to-mean-anomaly';

describe('trueAnomalyToMeanAnomaly', () => {
  // Test cases
  const testCases = [
    { V: 0, e: 0.5, expected: 0.0 },
    { V: Math.PI / 2, e: 0.1, expected: 1.37113 },
    { V: Math.PI, e: 0.3, expected: Math.PI },
    { V: (3 * Math.PI) / 2, e: 0.2, expected: 5.109706 },
    { V: 2 * Math.PI, e: 0.6, expected: 2 * Math.PI }
  ];

  test('computes correct values', () => {
    testCases.forEach(({ V, e, expected }) => {
      const result = trueAnomalyToMeanAnomaly(V, e);

      assert.ok(
        Math.abs(result - expected) < 1e-4,
        `Expected M ≈ ${expected} for V=${V}, e=${e}, but got ${result}`
      );
    });
  });

  test('throws on invalid eccentricity', () => {
    assert.throws(
      () => trueAnomalyToMeanAnomaly(Math.PI / 3, -0.1),
      RangeError
    );
    assert.throws(() => trueAnomalyToMeanAnomaly(Math.PI / 3, 1.2), RangeError);
  });
});
