import type {
  CelestialBodyType,
  SystemInterface
} from '@interstellar-tools/types';

/**
 * Anything that can take part in the orbital hierarchy: celestial bodies and
 * the star systems they belong to. Each entry may have an `orbit` around its
 * `parent`.
 */
export type OrbitingBodyType = CelestialBodyType | SystemInterface;

export type OrbitingBodiesType = OrbitingBodyType[];
