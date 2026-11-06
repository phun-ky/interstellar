import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { MAX_SCALE, MIN_SCALE } from '../../config/constants';
import { getPinchScale, getZoomOffset } from '../scale/zoom-at';

describe('getZoomOffset', () => {
  test('keeps the world position under the pointer where it was', () => {
    const center = 400;
    const point = 650;
    const offset = -120;
    const next = getZoomOffset(offset, point, center, 1.5, 4.2);
    const worldBefore = (point - center - offset) / 1.5;
    const worldAfter = (point - center - next) / 4.2;

    assert.ok(Math.abs(worldBefore - worldAfter) < 1e-9);
  });

  test('leaves the offset alone when zooming at the point it shows centred', () => {
    // The centre of the view, after the offset, is `center + offset`
    assert.equal(getZoomOffset(30, 430, 400, 1, 3), 30);
  });

  test('changes nothing when the scale does not change', () => {
    assert.equal(getZoomOffset(30, 100, 400, 2, 2), 30);
  });
});

describe('getPinchScale', () => {
  test('zooms by how much farther apart the fingers are', () => {
    assert.equal(getPinchScale(2, 100, 200), 4);
    assert.equal(getPinchScale(2, 200, 100), 1);
  });

  test('stays within the allowed scales', () => {
    assert.equal(getPinchScale(MAX_SCALE, 100, 1000), MAX_SCALE);
    assert.equal(getPinchScale(MIN_SCALE, 1000, 100), MIN_SCALE);
  });

  test('keeps the scale when a distance is zero', () => {
    assert.equal(getPinchScale(2, 0, 100), 2);
    assert.equal(getPinchScale(2, 100, 0), 2);
  });
});
