import assert from 'node:assert/strict';
import test, { describe } from 'node:test';

import { AU_IN_PX } from '../../config/constants';
import { DistanceInterface } from '../../types/distance';
import { distanceToPixels } from '../distance/distance-to-pixels';

describe('distanceToPixels', () => {
  // Test cases for distanceToPixels
  const distanceToPixelsTestCases = [
    {
      distance: { value: 1, unit: 'AU' },
      scale: { value: 1 },
      expected: AU_IN_PX
    },
    {
      distance: { value: 2, unit: 'AU' },
      scale: { value: 1 },
      expected: 2 * AU_IN_PX
    },
    {
      distance: { value: 1, unit: 'AU' },
      scale: { value: 2 },
      expected: 2 * AU_IN_PX
    },
    {
      distance: { value: 0.5, unit: 'AU' },
      scale: { value: 1 },
      expected: 0.5 * AU_IN_PX
    }
  ];

  test('distanceToPixels correctly converts AU to pixels', () => {
    distanceToPixelsTestCases.forEach(({ distance, scale, expected }) => {
      const result = distanceToPixels(distance as DistanceInterface, scale);

      assert.ok(
        Math.abs(result - expected) < 1e-6,
        `Expected ${expected} px, but got ${result}`
      );
    });
  });
});
