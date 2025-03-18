import assert from 'node:assert/strict';
import test, { describe } from 'node:test';

import { solveKepler } from '../solve-kepler';

describe('solveKepler', () => {
  // Test cases for solveKepler
  const testCases = [
    { M: 0, e: 0.5, expected: 0.0 }, // M = 0 should give E = 0
    { M: Math.PI / 4, e: 0.1, expected: 0.861265 }, // Approximate expected value
    { M: Math.PI / 2, e: 0.3, expected: 1.858468 }, // Approximate expected value
    { M: Math.PI, e: 0.2, expected: Math.PI }, // M = π should give E = π
    { M: (3 * Math.PI) / 2, e: 0.4, expected: 4.339829 } // Approximate expected value
  ];

  test('computes correct eccentric anomaly', () => {
    testCases.forEach(({ M, e, expected }) => {
      const result = solveKepler(M, e);

      assert.ok(
        Math.abs(result - expected) < 1e-4,
        `Expected E ≈ ${expected} for M=${M}, e=${e}, but got ${result}`
      );
    });
  });

  test('handles special cases', () => {
    assert.strictEqual(solveKepler(0, 0), 0); // Circular orbit (e = 0) should return M
    assert.strictEqual(solveKepler(Math.PI, 0), Math.PI); // Circular case with M = π
  });

  test('throws on invalid eccentricity', () => {
    assert.throws(
      () => solveKepler(Math.PI / 3, 1),
      Error,
      // eslint-disable-next-line @stylistic/quotes
      "Kepler's equation is not valid for e = 1"
    );
    assert.throws(
      () => solveKepler(Math.PI / 3, -0.1),
      RangeError,
      'Eccentricity must be in the range [0, 1]'
    );
  });
});
