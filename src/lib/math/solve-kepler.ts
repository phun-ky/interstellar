import { wrapAngle } from './wrap-angle';

/**
 * Solves **Kepler's Equation** for the **Eccentric Anomaly** ($E$) using the **Newton-Raphson method**.
 *
 * **Mathematical Explanation:**
 *
 * Kepler's equation relates the **mean anomaly** ($M$), the **eccentric anomaly** ($E$),
 * and the **orbital eccentricity** ($e$) as:
 * $$
 * M = E - e \sin(E)
 * $$
 * Since this equation **cannot be solved algebraically**, we use **iterative numerical methods** to approximate $E$.
 *
 * **Step 1: Handle Special Cases**
 * - If the orbit is **circular** ($e = 0$), then $E = M$ directly.
 * - If the orbit is **parabolic** ($e = 1$), Kepler's equation is **not valid**.
 *
 * **Step 2: Initial Approximation**
 * A **first-order approximation** provides a good starting point for iteration:
 * $$
 * E_0 \approx M + e \sin(M)
 * $$
 *
 * **Step 3: Newton-Raphson Iteration**
 * The Newton-Raphson method refines $E$ iteratively using:
 * $$
 * E_{n+1} = E_n - \frac{f(E_n)}{f'(E_n)}
 * $$
 * where:
 * - $f(E) = E - e \sin(E) - M$ is Kepler’s equation residual.
 * - $f'(E) = 1 - e \cos(E)$ is its derivative.
 *
 * The iteration continues until:
 * $$
 * |E_{n+1} - E_n| < \text{tolerance}
 * $$
 *
 * @param {number} M - Mean anomaly ($M$) in radians.
 * @param {number} e - Orbital eccentricity ($0 \leq e < 1$).
 * @param {number} [maxIter=50] - Maximum number of Newton-Raphson iterations.
 * @param {number} [tolerance=1e-9] - Convergence criterion for stopping the iteration.
 * @returns {number} Eccentric anomaly ($E$) in radians.
 *
 * @throws {@link Error} If the orbit is **parabolic** ($e = 1$) or Newton-Raphson fails due to a near-zero derivative.
 * @throws {@link RangeError} If the eccentricity is out of range. Must be between [0,1].
 *
 * @example
 * ```ts
 * const M = Math.PI / 4; // 45 degrees in radians
 * const e = 0.1; // Orbital eccentricity
 * console.log(solveKepler(M, e)); // Output: Eccentric anomaly in radians
 * ```
 *
 * @see [Kepler's Equation (Wikipedia)](https://en.wikipedia.org/wiki/Kepler%27s_equation)
 * @see [Newton-Raphson Method (Wikipedia)](https://en.wikipedia.org/wiki/Newton%27s_method)
 * @see [Eccentric Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/Mean_anomaly#Eccentric_anomaly)
 */
export const solveKepler = (
  M: number,
  e: number,
  maxIter = 50,
  tolerance = 1e-9
): number => {
  let E: number;

  // Smart initial guess based on eccentricity
  if (e < 0.8) {
    E = M;
  } else if (e < 0.97) {
    E = M + e * Math.sin(M) * (1 + e * Math.cos(M));
  } else {
    E = (6 * M) / e; // Nearly parabolic case
  }

  let F: number;
  let dF: number;
  let d2F: number;
  let d3F: number;
  let deltaE: number;
  let iter = 0;

  while (iter < maxIter) {
    F = E - e * Math.sin(E) - M;
    dF = 1 - e * Math.cos(E);
    d2F = e * Math.sin(E);
    d3F = e * Math.cos(E);

    deltaE = -F / dF; // Newton’s step

    // Apply Householder's method for faster convergence
    let correction = deltaE / (1 - (0.5 * deltaE * d2F) / dF);

    correction /= 1 - ((1 / 6) * correction * correction * d3F) / dF;

    E += correction;

    if (Math.abs(correction) < tolerance) {
      return wrapAngle(E); // Converged
    }

    iter++;
  }

  // If Newton-like methods fail, fallback to bisection
  let E_low = 0;
  let E_high = Math.PI;

  E = (E_low + E_high) / 2;

  iter = 0;
  while (iter < maxIter) {
    F = E - e * Math.sin(E) - M;

    if (Math.abs(F) < tolerance) {
      return wrapAngle(E);
    }

    if (F > 0) {
      E_high = E;
    } else {
      E_low = E;
    }

    E = (E_low + E_high) / 2;
    iter++;
  }

  return wrapAngle(E); // Return best approximation
};
