import {
  SCALE,
  THRESHOLD_ASTEROID_BELT_RENDER,
  THRESHOLD_COMET_RENDER,
  THRESHOLD_MOON_RENDER,
  THRESHOLD_PLANET_RENDER
} from '../../../config/constants';
import { AsteroidsType } from '../../../types/celestial-bodies/asteroids';
import { CometsType } from '../../../types/celestial-bodies/comets';
import { MoonsType } from '../../../types/celestial-bodies/moons';
import { PlanetsType } from '../../../types/celestial-bodies/planets';
import { StarsType } from '../../../types/celestial-bodies/stars';
import { OPTIONS_UI } from '../../canvas/config/hud';

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
 * We only compute the orbits of celestial bodies that is rendering, except for in
 * the setup. Forced computation is active with the `force` parameter.
 *
 * @param {StarsType} stars - Array of stars whose orbits need to be updated.
 * @param {PlanetsType} planets - Array of planets whose orbits need recalculating.
 * @param {MoonsType} moons - Array of moons for orbital updates.
 * @param {CometsType} comets - Array of comets, which typically have highly eccentric orbits.
 * @param {AsteroidsType} asteroids - Array of asteroids whose orbits need recalculating.
 * @param {boolean} [force=false] - Force computation, used on setup.
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
  comets: CometsType,
  asteroids: AsteroidsType,
  force = false
): void => {
  computeOrbits(stars);

  if (force || SCALE.value > THRESHOLD_PLANET_RENDER) {
    computeOrbits(planets);
  }

  if (force || (SCALE.value > THRESHOLD_MOON_RENDER && OPTIONS_UI.moons)) {
    computeOrbits(moons);
  }

  if (force || (SCALE.value > THRESHOLD_COMET_RENDER && OPTIONS_UI.comets)) {
    computeOrbits(comets);
  }

  if (
    force ||
    (SCALE.value > THRESHOLD_ASTEROID_BELT_RENDER && OPTIONS_UI.asteroidBelts)
  ) {
    computeOrbits(asteroids);
  }
};
