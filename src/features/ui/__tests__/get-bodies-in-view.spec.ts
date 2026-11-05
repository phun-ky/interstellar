import assert from 'node:assert/strict';
import { beforeEach, describe, test } from 'node:test';

import { MOONS, PLANETS } from '@interstellar-tools/constants';

import { getBodiesInView, MAX_BODIES_IN_VIEW } from '../get-bodies-in-view';
import { getInViewRows } from '../get-in-view-rows';

const WIDTH = 800;
const HEIGHT = 600;
const jupiter = PLANETS.find(({ id }) => id === 'jupiter')!;
const track = (
  id: string,
  x: number,
  y: number,
  category: string,
  parent?: string
) => ({ id, x, y, category, parent });

describe('getBodiesInView', () => {
  test('lists on-screen planets by id, nearest to the centre first', () => {
    const ids = getBodiesInView({
      tracked: {
        mars: track('mars', 500, 300, 'planet'),
        earth: track('earth', 410, 300, 'planet'),
        pluto: track('pluto', 2000, 300, 'planetoid')
      },
      width: WIDTH,
      height: HEIGHT,
      scale: { value: 1 },
      locked: null
    });

    assert.deepEqual(ids, ['earth', 'mars']);
  });

  test('drops a body that is no longer drawn', () => {
    const withMoon = {
      jupiter: track('jupiter', 400, 300, 'planet'),
      io: track('io', 420, 300, 'natural satellite', 'jupiter')
    };
    const props = {
      width: WIDTH,
      height: HEIGHT,
      scale: { value: 10 },
      locked: jupiter
    };

    assert.deepEqual(getBodiesInView({ ...props, tracked: withMoon }), [
      'jupiter',
      'io'
    ]);

    // Zoomed out: moons are not drawn any more, so Io is not tracked
    assert.deepEqual(
      getBodiesInView({
        ...props,
        scale: { value: 0.01 },
        tracked: { jupiter: withMoon.jupiter }
      }),
      ['jupiter']
    );
  });

  test(`lists at most ${MAX_BODIES_IN_VIEW} bodies`, () => {
    const tracked = Object.fromEntries(
      Array.from({ length: 10 }, (_, i) => [
        `p${i}`,
        track(`p${i}`, 400 + i * 10, 300, 'planet')
      ])
    );

    assert.equal(
      getBodiesInView({
        tracked,
        width: WIDTH,
        height: HEIGHT,
        scale: { value: 1 },
        locked: null
      }).length,
      MAX_BODIES_IN_VIEW
    );
  });
});

describe('getInViewRows', () => {
  beforeEach(() => {
    globalThis.LOCKED_CELESTIAL_BODY = null;
  });

  test('keeps bodies that share a name apart', () => {
    const [moon, asteroid] = getInViewRows(['europa', '52-europa']);
    const moonA = MOONS.find(({ id }) => id === 'europa')!.orbit.a.value;

    assert.equal(moon.name, 'Europa');
    assert.equal(asteroid.name, 'Europa');
    // The moon is about 0.0045 au from Jupiter; the asteroid about 3 au from the Sun
    assert.ok(Number(moon.distance) < moonA * 2);
    assert.ok(Number(asteroid.distance) > 2);
  });

  test('marks the locked body', () => {
    globalThis.LOCKED_CELESTIAL_BODY = jupiter;

    const [row] = getInViewRows(['jupiter']);

    assert.equal(row.distance, 'Lock');
    assert.equal(row.isLocked, true);
  });

  test('shows moon distances with significant digits', () => {
    const [io] = getInViewRows(['io']);

    assert.notEqual(Number(io.distance), 0);
    assert.match(io.distance, /^0\.00\d+$/);
  });

  test('skips unknown ids', () => {
    assert.deepEqual(getInViewRows(['no-such-body']), []);
  });
});
