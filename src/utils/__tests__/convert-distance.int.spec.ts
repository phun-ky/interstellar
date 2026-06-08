import assert from 'node:assert/strict';
import test, { describe } from 'node:test';

import { AU_IN_KM, AU_IN_LY, LY_IN_AU } from '../../config/constants';
import { DistanceInterface, UnitType } from '../../types/distance';
import { convertDistance } from '../distance/convert-distance';

describe('convertDistance', () => {
  // Test cases for convertDistance
  const distanceTestCases = [
    { input: { value: 1, unit: 'au' }, target: 'AU', expected: 1 },
    { input: { value: AU_IN_KM, unit: 'km' }, target: 'AU', expected: 1 },
    { input: { value: AU_IN_KM * 1000, unit: 'm' }, target: 'AU', expected: 1 },
    { input: { value: 1, unit: 'ly' }, target: 'AU', expected: LY_IN_AU },
    { input: { value: 1, unit: 'au' }, target: 'km', expected: AU_IN_KM },
    { input: { value: 1, unit: 'au' }, target: 'm', expected: AU_IN_KM * 1000 },
    { input: { value: 1, unit: 'au' }, target: 'ly', expected: AU_IN_LY },
    { input: { value: LY_IN_AU, unit: 'au' }, target: 'ly', expected: 1 }
  ];

  test('convertDistance correctly converts distances', () => {
    distanceTestCases.forEach(({ input, target, expected }) => {
      const result = convertDistance(
        input as DistanceInterface,
        target as UnitType
      );

      assert.ok(
        Math.abs(result.value - expected) < 1e-6,
        `Expected ${expected} ${target}, but got ${result.value}`
      );
    });
  });

  test('convertDistance throws error on unsupported input units', () => {
    assert.throws(
      () => convertDistance({ value: 1, unit: 'miles' as UnitType }, 'AU'),
      /Unsupported unit: miles/
    );
    assert.throws(
      () => convertDistance({ value: 1, unit: 'parsec' as UnitType }, 'AU'),
      /Unsupported unit: parsec/
    );
  });

  test('convertDistance throws error on unsupported target units', () => {
    assert.throws(
      () => convertDistance({ value: 1, unit: 'au' }, 'miles' as UnitType),
      /Unsupported target unit: miles/
    );
    assert.throws(
      () => convertDistance({ value: 1, unit: 'au' }, 'parsec' as UnitType),
      /Unsupported target unit: parsec/
    );
  });
});
