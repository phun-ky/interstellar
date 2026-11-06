import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { getSwitchTones } from '../utils/get-switch-tones';

describe('getSwitchTones', () => {
  test('rises when switched on and falls when switched off', () => {
    const [onFirst, onSecond] = getSwitchTones(true);
    const [offFirst, offSecond] = getSwitchTones(false);

    assert.ok(onSecond.frequency > onFirst.frequency);
    assert.ok(offSecond.frequency < offFirst.frequency);
  });

  test('plays the notes one after the other, in under a fifth of a second', () => {
    for (const on of [true, false]) {
      const [first, second] = getSwitchTones(on);

      assert.equal(first.start, 0);
      assert.ok(second.start >= first.start + first.duration);
      assert.ok(second.start + second.duration < 0.2);
    }
  });
});
