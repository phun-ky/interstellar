import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { THRESHOLD_MOON_RENDER } from '../../../config/constants';
import { needsMoonZoom } from '../utils/needs-moon-zoom';

describe('needsMoonZoom', () => {
  test('zooms in on a planet with moons when they are too far out to draw', () => {
    // The scale locking on Jupiter with Moons off zooms to (#75)
    assert.equal(needsMoonZoom('jupiter', 1.8), true);
    assert.equal(needsMoonZoom('jupiter', THRESHOLD_MOON_RENDER), true);
  });

  test('leaves a view already close enough to draw the moons', () => {
    assert.equal(needsMoonZoom('jupiter', THRESHOLD_MOON_RENDER * 1.25), false);
  });

  test('leaves a planet without moons', () => {
    assert.equal(needsMoonZoom('venus', 1.8), false);
  });

  test('leaves bodies that are not planets, and no lock', () => {
    assert.equal(needsMoonZoom('sun', 1.8), false);
    assert.equal(needsMoonZoom('io', 1.8), false);
    assert.equal(needsMoonZoom(undefined, 1.8), false);
  });
});
