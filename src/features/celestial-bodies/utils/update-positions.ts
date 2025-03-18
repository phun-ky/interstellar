import { CelestialBodiesType } from '../../../types/celestial-bodies';
import { TimeStepInterface } from '../../../types/temporal';

import { updatePosition } from './update-position';

/**
 * Updates the **orbital positions** of all celestial bodies based on the given time step.
 *
 * ## **Mathematical Explanation:**
 * Each celestial body follows an **elliptical orbit** with its position evolving over time according to:
 * $$
 * V(t) = V_0 + \Delta V
 * $$
 * where:
 * - $V_0$ is the **current true anomaly**.
 * - $\Delta V$ is the **change in anomaly** over the time step ($\Delta t$).
 *
 * The **updatePosition** function ensures periodicity by wrapping the **true anomaly** within $[0, 2\pi]$.
 *
 * @param {CelestialBodiesType} celestialBodies - An array of celestial bodies whose positions will be updated.
 * @param {TimeStepInterface} timeStep - The time step ($\Delta t$) used to compute orbital progression.
 * @returns {void} This function does not return a value; it updates each body's angle in place.
 *
 * @example
 * ```ts
 * const celestialBodies: CelestialBodiesType = [
 *   { name: 'Earth', angle: 1.5, ...otherProps },
 *   { name: 'Mars', angle: 2.1, ...otherProps }
 * ];
 *
 * const timeStep = { value: 1, unit: 'day' };
 * updatePositions(celestialBodies, timeStep);
 * console.log(celestialBodies[0].angle); // Updated angle in radians, wrapped within [0, 2π]
 * ```
 *
 * @see [Kepler's Laws](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion)
 */
export const updatePositions = (
  celestialBodies: CelestialBodiesType,
  timeStep: TimeStepInterface
) => celestialBodies.forEach(updatePosition(timeStep));
