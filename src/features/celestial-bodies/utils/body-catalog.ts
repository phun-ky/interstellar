import {
  ASTEROIDS,
  COMETS,
  MOONS,
  PLANETS,
  STARS,
  SYSTEMS
} from '@interstellar-tools/constants';
import { CelestialBodyType } from '@interstellar-tools/types';

import { OrbitingBodyType } from '../../../types/orbiting-bodies';

/** The kind of a body, from the dataset it belongs to. */
type BodyKindType =
  'system' | 'star' | 'planet' | 'moon' | 'comet' | 'asteroid';

const BODIES_BY_ID = new Map<string, OrbitingBodyType>(
  [...SYSTEMS, ...STARS, ...PLANETS, ...MOONS, ...COMETS, ...ASTEROIDS].map(
    (body) => [body.id, body]
  )
);
const KIND_BY_ID = new Map<string, BodyKindType>([
  ...SYSTEMS.map(({ id }) => [id, 'system'] as const),
  ...STARS.map(({ id }) => [id, 'star'] as const),
  ...PLANETS.map(({ id }) => [id, 'planet'] as const),
  ...MOONS.map(({ id }) => [id, 'moon'] as const),
  ...COMETS.map(({ id }) => [id, 'comet'] as const),
  ...ASTEROIDS.map(({ id }) => [id, 'asteroid'] as const)
]);

/**
 * Looks up a system or celestial body by its `id`.
 *
 * Ids that are not in the datasets (like the galaxy, `milky-way`) return `undefined`.
 *
 * @param {string} [id] - The id to look up, typically a body's `parent`.
 * @returns {OrbitingBodyType | undefined} The matching system or body.
 *
 * @example
 * ```ts
 * findBodyById('earth')?.name; // "Earth"
 * findBodyById('milky-way'); // undefined
 * ```
 */
export const findBodyById = (id?: string): OrbitingBodyType | undefined =>
  id ? BODIES_BY_ID.get(id) : undefined;

/**
 * Tells what kind of body an id belongs to, from the dataset it is in.
 *
 * @param {string} id - The body's id.
 * @returns {BodyKindType | undefined} The kind, or `undefined` for an unknown id.
 *
 * @example
 * ```ts
 * getBodyKind('io'); // "moon"
 * ```
 */
export const getBodyKind = (id: string): BodyKindType | undefined =>
  KIND_BY_ID.get(id);

/**
 * Lists the stars, planets and moons that orbit a body (or sit in a system).
 *
 * Comets and asteroids are left out: they are many, and their wide orbits would
 * dwarf a star's planetary system.
 *
 * @param {string} id - The parent's id.
 * @returns {CelestialBodyType[]} The bodies whose `parent` is `id`.
 *
 * @example
 * ```ts
 * getChildBodies('earth').map(({ name }) => name); // ["Moon"]
 * ```
 */
export const getChildBodies = (id: string): CelestialBodyType[] =>
  [...STARS, ...PLANETS, ...MOONS].filter((body) => body.parent === id);
