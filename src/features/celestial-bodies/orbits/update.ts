import { CometsType } from '../../../types/comets';
import { MoonsType } from '../../../types/moons';
import { PlanetsType } from '../../../types/planets';
import { StarsType } from '../../../types/stars';

import { computeOrbits } from './compute';

/**
 * Updates the **orbital paths** for all celestial bodies in the simulation.
 *
 * This function recalculates the orbits for stars, planets, moons, and comets,
 * ensuring that their paths are updated based on their latest orbital parameters.
 *
 * It calls `computeOrbits` on each category of celestial bodies, applying Keplerian
 * orbital mechanics to determine their elliptical trajectories.
 *
 * @param {StarsType} stars - Array of stars whose orbits need to be updated.
 * @param {PlanetsType} planets - Array of planets whose orbits need recalculating.
 * @param {MoonsType} moons - Array of moons for orbital updates.
 * @param {CometsType} comets - Array of comets, which typically have highly eccentric orbits.
 * @returns {void} This function does not return a value; it updates the orbits in place.
 *
 * @example
 * ```ts
 * updateOrbits(starsArray, planetsArray, moonsArray, cometsArray);
 * ```
 *
 * @see [Kepler's Laws](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion)
 */
export const updateOrbits = (
  stars: StarsType,
  planets: PlanetsType,
  moons: MoonsType,
  comets: CometsType
): void => {
  computeOrbits(stars);
  computeOrbits(planets);
  computeOrbits(moons);
  computeOrbits(comets);
};
