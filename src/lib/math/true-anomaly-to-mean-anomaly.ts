/**
 * Converts true anomaly ($\nu$) to mean anomaly ($M$) using Kepler's equation.
 *
 * ## **Mathematical Explanation:**
 * In orbital mechanics, the **true anomaly** ($\nu$), the **eccentric anomaly** ($E$),
 * and the **mean anomaly** ($M$) are related through Kepler's equation.
 *
 * ### **Step 1: Convert True Anomaly ($\nu$) to Eccentric Anomaly ($E$)**
 * $$
 * E = 2 \tan^{-1} \left( \sqrt{\frac{1 - e}{1 + e}} \tan\left(\frac{\nu}{2}\right) \right)
 * $$
 *
 * ### **Step 2: Convert Eccentric Anomaly ($E$) to Mean Anomaly ($M$)**
 * Kepler’s equation states:
 * $$
 * M = E - e \sin(E)
 * $$
 *
 * Where:
 * - $\nu$ is the **true anomaly** in radians.
 * - $E$ is the **eccentric anomaly** in radians.
 * - $M$ is the **mean anomaly** in radians.
 * - $e$ is the **orbital eccentricity**, constrained to $0 \leq e < 1$ for elliptical orbits.
 *
 * This function calculates $M$ using these formulas.
 *
 * @param {number} V - True anomaly ($\nu$) in radians.
 * @param {number} e - Eccentricity of the orbit ($0 \leq e < 1$).
 * @returns {number} Mean anomaly ($M$) in radians.
 *
 * @throws {RangeError} If the eccentricity $e$ is outside the valid range $0 \leq e < 1$.
 *
 * @example
 * ```ts
 * const V = Math.PI / 3; // 60 degrees in radians
 * const e = 0.1; // Eccentricity
 * console.log(trueAnomalyToMeanAnomaly(V, e)); // Output: Mean anomaly in radians
 * ```
 *
 * @see [Kepler's Equation (Wikipedia)](https://en.wikipedia.org/wiki/Kepler%27s_equation)
 * @see [True Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/True_anomaly)
 * @see [Mean Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/Mean_anomaly)
 * @see [Orbital Eccentricity (Wikipedia)](https://en.wikipedia.org/wiki/Orbital_eccentricity)
 */
export const trueAnomalyToMeanAnomaly = (V: number, e: number): number => {
  if (e < 0 || e >= 1) {
    throw new RangeError(
      'Eccentricity (e) must be in the range 0 ≤ e < 1 for elliptical orbits.'
    );
  }

  // Convert true anomaly (V) to eccentric anomaly (E)
  const E =
    2 *
    Math.atan2(
      Math.sqrt(1 - e) * Math.sin(V / 2),
      Math.sqrt(1 + e) * Math.cos(V / 2)
    );
  // Convert eccentric anomaly (E) to mean anomaly (M) using Kepler's equation
  const M = E - e * Math.sin(E);

  return M;
};
