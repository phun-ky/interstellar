/* eslint-disable import/no-unused-modules */
/**
 * Represents a star system within the space visualization.
 */
export interface SystemInterface {
  /** Name of the star system. */
  name: string;
  /** List of star names in the system. */
  stars: string[];
  /** Distance from the Sun in light-years. */
  distance: number;
}

/**
 * Type alias for a collection of star systems.
 */
export type SystemsType = SystemInterface[];

/**
 * Predefined star systems in the galaxy.
 *
 * @example
 * ```ts
 * console.log(SYSTEMS[0].name); // "Solar System"
 * ```
 *
 * @see https://en.wikipedia.org/wiki/Alpha_Centauri
 */
export const SYSTEMS: SystemsType = [
  {
    name: 'Solar System',
    stars: ['Sun'],
    distance: 0
  },
  {
    name: 'Alpha Centauri',
    stars: ['Alpha Centauri A', 'Alpha Centauri B', 'Proxima Centauri'],
    distance: 4.37
  }
];
