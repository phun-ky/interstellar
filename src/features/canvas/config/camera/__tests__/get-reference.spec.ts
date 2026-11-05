import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { getReference } from '../get-reference';

/** A canvas as setupCanvas() leaves it on a screen with devicePixelRatio 2. */
const hiDpiCanvas = {
  width: 2880,
  height: 1672,
  clientWidth: 1440,
  clientHeight: 836
} as HTMLCanvasElement;

describe('getReference', () => {
  test('centres on the CSS size, not the device-pixel size', () => {
    const { referenceX, referenceY } = getReference(hiDpiCanvas);

    assert.equal(referenceX, 720);
    assert.equal(referenceY, 418);
  });
});
