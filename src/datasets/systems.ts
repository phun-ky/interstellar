/* eslint-disable import/no-unused-modules */
import { SystemsType } from '../types/systems';

/**
 * Predefined star systems in the galaxy.
 *
 * Uses {@link SystemsType}.
 *
 * {@includeCode ../datasets/systems.ts#datasetSystems}
 *
 * @example
 * ```ts
 * console.log(SYSTEMS[0].name); // "Solar System"
 * ```
 *
 * @see https://en.wikipedia.org/wiki/Alpha_Centauri
 */
// #region datasetSystems
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
// #endregion datasetSystems
