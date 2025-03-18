import { J2000, MS_1_DAY } from '../../../config/constants';
import { computeAngle } from '../../../lib/math/compute-angle';
import {
  CelestialBodiesType,
  CelestialBodyType
} from '../../../types/celestial-bodies';

/**
 * Precomputes the initial **orbital angles** for celestial bodies relative to the J2000 epoch.
 *
 * The function determines the number of days elapsed since **J2000 (January 1, 2000, 12:00 TT)**
 * and uses this to compute the **initial orbital angles** ($\theta_0$) of celestial bodies.
 *
 * ## **Mathematical Explanation:**
 * The elapsed time $\Delta T$ is calculated as:
 * $$
 * \Delta T = \frac{t - t_{J2000}}{1\text{ day}}
 * $$
 * where:
 * - $t$ is the provided date in milliseconds.
 * - $t_{J2000}$ is the timestamp for J2000.
 * - $1$ day is the number of milliseconds in a day ($86,400,000$ ms).
 *
 * The initial orbital angle is then computed using Keplerian motion equations via `computeAngle`.
 *
 * @param {CelestialBodiesType} bodies - The array of celestial bodies whose angles need to be computed.
 * @param {Date} date - The date from which to compute the initial angles.
 * @returns {void} This function does not return a value; it updates the `angle` property of each body.
 *
 * @example
 * ```ts
 * const currentDate = new Date();
 * precomputeInitialAngles(celestialBodies, currentDate);
 * console.log(celestialBodies[0].angle); // Output: Computed initial angle in radians
 * ```
 *
 * @see [J2000 Epoch](https://en.wikipedia.org/wiki/Epoch_(astronomy)#Julian_years_and_J2000)
 */
export const precomputeInitialAngles = (
  bodies: CelestialBodiesType,
  date: Date
): void => {
  const deltaT = (date.getTime() - J2000.getTime()) / MS_1_DAY; // Days since J2000

  bodies.forEach((body: CelestialBodyType) => {
    body.angle = computeAngle(body, { value: deltaT, unit: 'day' }); // Set initial angle
  });
};
