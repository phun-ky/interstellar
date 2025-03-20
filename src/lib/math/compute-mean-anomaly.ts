import { TWO_PI } from '../../config/constants';
import { CelestialBodyType, Radian } from '../../types/celestial-bodies';
import { TemporalInterface } from '../../types/temporal';
import { convertTemporalUnit } from '../../utils/temporal/convert-temporal-unit';

import { trueAnomalyToMeanAnomaly } from './true-anomaly-to-mean-anomaly';
import { wrapAngle } from './wrap-angle';

const EPSILON = 1e-15; // Increased tolerance for high eccentricity
/**
 * Compares two floating-point numbers for equality within a tolerance.
 *
 * @param {number} a - First number to compare.
 * @param {number} b - Second number to compare.
 * @param {number} [epsilon=EPSILON] - Tolerance for floating-point precision.
 * @returns {boolean} `true` if values are approximately equal.
 */
const areEqual = (a: number, b: number, epsilon: number = EPSILON): boolean => {
  return Math.abs(a - b) < epsilon * Math.max(1, Math.abs(a), Math.abs(b));
};

/**
 * Computes the **mean anomaly** ($M$) of a celestial body for a given time step.
 *
 * **Mathematical Explanation:**
 *
 * The **mean anomaly** is a measure of the position of an orbiting body as if it moved
 * with uniform angular motion along a circular orbit with the same period as the actual
 * elliptical orbit. It is computed as:
 *
 * $$ M = M_0 + n \cdot \Delta T $$
 *
 * where:
 * - $M_0$ is the **initial mean anomaly** (converted from true anomaly if necessary).
 * - $n$ is the **mean motion**, given by:
 *   $$ n = \frac{2\pi}{P} $$
 *   where $P$ is the orbital period in days.
 * - $\Delta T$ is the time step.
 *
 * @param {CelestialBodyType} body - The celestial body for which to compute the mean anomaly.
 * @param {TemporalInterface} timeStep - The time step over which to compute the change.
 * @returns {Radian} The computed mean anomaly in radians.
 *
 * @throws {RangeError} If the body's eccentricity is outside the range $0 \leq e < 1$.
 *
 * @example
 * ```ts
 * import { computeMeanAnomaly } from './compute-mean-anomaly';
 *
 * const mars: CelestialBodyType = {
 *   name: 'Mars',
 *   e: 0.0934, // Eccentricity of Mars' orbit
 *   angle: 1.047, // Initial true anomaly (in radians)
 *   period: { value: 687, unit: 'day' }, // Orbital period in days
 * };
 *
 * const timeStep: TemporalInterface = { value: 1, unit: 'day' }; // 1-day step
 * const meanAnomaly = computeMeanAnomaly(mars, timeStep);
 * console.log(meanAnomaly); // Output: Computed mean anomaly in radians
 * ```
 *
 * @see [Mean Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/Mean_anomaly)
 * @see [Orbital Mechanics (NASA)](https://solarsystem.nasa.gov/basics/chapter2-2/)
 */
export const computeMeanAnomaly = (
  body: CelestialBodyType,
  timeStep: TemporalInterface
): Radian => {
  const { e, angle, period } = body;

  if (e < 0 || e >= 1) {
    throw new RangeError(
      `Invalid eccentricity: ${e}. Eccentricity must be in the range [0, 1].`
    );
  }

  // Convert period to days and compute mean motion
  const periodInDays = convertTemporalUnit(period, 'day').value;
  const meanMotion = TWO_PI / Math.abs(periodInDays);
  // Convert true anomaly (V) to mean anomaly (M0) if necessary
  const M0 = e === 0 ? angle : trueAnomalyToMeanAnomaly(angle, e);

  if (timeStep.value === 0) {
    return M0;
  }

  // Clamping small time steps to prevent unnecessary updates
  const minTimeStep = 1e-5; // Minimum allowed time step
  const maxTimeStepFactor = e >= 0.9 ? 1 : 10; // Stricter limit for highly eccentric orbits
  const clampedDeltaT = Math.max(
    minTimeStep,
    Math.min(timeStep.value, maxTimeStepFactor * Math.abs(periodInDays))
  );
  // Compute new mean anomaly with hysteresis filter and sign preservation
  const prevM = M0;

  let newM = wrapAngle(M0 + meanMotion * clampedDeltaT);

  if (areEqual(newM, prevM)) {
    newM = prevM;
  }

  return newM;
};
