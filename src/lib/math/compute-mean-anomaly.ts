import { CelestialBodyType } from '../../types/celestial-bodies';
import { TemporalInterface } from '../../types/temporal';
import { convertTemporalUnit } from '../../utils/temporal/convert-temporal-unit';

import { trueAnomalyToMeanAnomaly } from './true-anomaly-to-mean-anomaly';
import { wrapAngle } from './wrap-angle';

/**
 * Computes the **Mean Anomaly** ($M$) for a celestial body after a given time interval $\Delta t$.
 *
 * **Mathematical Explanation:**
 *
 * The **mean anomaly** ($M$) is related to the **true anomaly** ($V$) and **eccentric anomaly** ($E$).
 * The mean anomaly progresses uniformly over time, defined as:
 * $$
 * M = M_0 + n \cdot \Delta t
 * $$
 * where:
 * - $M_0$ is the **initial mean anomaly** at $t=0$.
 * - $n$ is the **mean motion**, given by:
 *   $$
 *   n = \frac{2\pi}{T}
 *   $$
 *   where $T$ is the **orbital period**.
 * - $\Delta t$ is the **time elapsed** (in days).
 *
 * Since anomalies are periodic ($0 \leq M < 2\pi$), a **custom modulo function** is used to wrap values within this range.
 *
 * **Handling Extreme Time Steps**
 * - The function **caps the time step** to **10 full orbits** to prevent excessive jumps.
 * - This ensures numerical stability and prevents unrealistic position updates.
 *
 * @param {CelestialBodyType} body - The celestial body with its orbital parameters.
 * @param {TemporalInterface} timeStep - The time step over which to compute the new mean anomaly.
 * @returns {number} The **mean anomaly** ($M$) in radians within the range $[0, 2\pi)$.
 *
 * @throws {RangeError} If the **eccentricity** ($e$) is out of the valid range $0 \leq e < 1$.
 *
 * @example
 * ```ts
 * const planet: CelestialBodyType = { e: 0.2, angle: 1.0, period: { value: 365, unit: 'day' } };
 * const timeStep: TemporalInterface = { value: 100, unit: 'days' };
 * console.log(computeMeanAnomaly(planet, timeStep)); // Output: Mean anomaly in radians
 * ```
 *
 * @see [Kepler's Equation (Wikipedia)](https://en.wikipedia.org/wiki/Kepler%27s_equation)
 */
export const computeMeanAnomaly = (
  body: CelestialBodyType,
  timeStep: TemporalInterface
): number => {
  const { e, angle, period } = body;

  if (e < 0 || e >= 1) {
    throw new RangeError(
      `Invalid eccentricity: ${e}. Eccentricity must be in the range [0, 1).`
    );
  }

  // Convert period to days and compute mean motion
  const periodInDays = convertTemporalUnit(period, 'day').value;
  const meanMotion = (2 * Math.PI) / periodInDays;
  // Convert true anomaly (V) to mean anomaly (M0) if necessary
  const M0 = e === 0 ? angle : trueAnomalyToMeanAnomaly(angle, e);
  // Clamping deltaT to avoid excessive jumps
  const maxAllowedOrbits = 10; // Prevents extreme jumps
  const maxDeltaT = maxAllowedOrbits * periodInDays;
  const clampedDeltaT = Math.min(timeStep.value, maxDeltaT);
  // Compute new mean anomaly
  const M = wrapAngle(M0 + meanMotion * clampedDeltaT);

  return M;
};
