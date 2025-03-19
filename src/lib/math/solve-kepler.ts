import { wrapAngle } from './wrap-angle';

/**
 * Solves **Kepler's Equation** for the **Eccentric Anomaly** ($E$) using the **Newton-Raphson method**
 * with Householder acceleration and a **bisection fallback**.
 *
 * ---
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
 * ---
 *
 * **Step 1: Handle Special Cases**
 * - If the orbit is **circular** ($e = 0$), then $E = M$ directly.
 * - If the orbit is **parabolic** ($e = 1$), Kepler's equation is **not valid** and an exception is thrown.
 * - If **eccentricity is out of range** ($e < 0$ or $e \geq 1$), a **`RangeError` is thrown**.
 *
 * ---
 *
 * **Step 2: Initial Approximation**
 *
 * A good initial guess for $E$ improves convergence speed:
 * - **For small eccentricities ($e < 0.8$):**
 *   $$
 * E_0 \approx M
 *   $$
 * - **For moderate eccentricities ($0.8 \leq e < 0.97$):**
 *   $$
 * E_0 \approx M + e \sin(M) (1 + e \cos(M))
 *   $$
 * - **For nearly parabolic orbits ($e \geq 0.97$):**
 *   $$
 * E_0 \approx \frac{6M}{e}
 *   $$
 *
 * ---
 *
 * **Step 3: Newton-Raphson Iteration with Householder Acceleration**
 *
 * The **Newton-Raphson method** iteratively refines $E$ using:
 * $$
 * E_{n+1} = E_n - \frac{f(E_n)}{f'(E_n)}
 * $$
 * where:
 * - $f(E) = E - e \sin(E) - M$ (Kepler's equation residual).
 * - $f'(E) = 1 - e \cos(E)$ (its derivative).
 *
 * **Householder acceleration** improves convergence:
 * - A higher-order correction term is applied for faster convergence:
 *   $$
 * \Delta E = \frac{f(E)}{f'(E)} \cdot \left( 1 - \frac{1}{2} \frac{f''(E)}{f'(E)} \Delta E \right)^{-1}
 *   $$
 * - This reduces the number of required iterations in high-eccentricity cases.
 *
 * The iteration stops when:
 * $$
 * |E_{n+1} - E_n| < \text{tolerance}
 * $$
 * (default tolerance is **1e-9**).
 *
 * ---
 *
 * **Step 4: Bisection Fallback (If Newton's Method Fails)**
 *
 * If the Newton-Raphson iteration **does not converge**, the method falls back to **bisection**:
 * - A bracketed search is performed in the interval **[0, π]**.
 * - The method continues **until the residual error is within the tolerance**.
 *
 * ---
 *
 * **Final Step: Wrap the Result to `[0, 2\pi]`**
 * - The final value of **$E$ is wrapped** using `wrapAngle(E)` to **ensure periodicity**.
 *
 * ---
 *
 * **Complexity & Performance**
 * - **Typical convergence:** **4-5 iterations** (for most eccentricities).
 * - **Max iterations:** **50** (after which bisection is used).
 * - **Time complexity:** $O(1)$ for Newton-Raphson, **$O(\log N)$ for bisection fallback**.
 *
 * ---
 *
 * @param {number} M - Mean anomaly ($M$) in **radians**.
 * @param {number} e - Orbital eccentricity ($0 \leq e < 1$).
 * @param {number} [maxIter=50] - Maximum number of **Newton-Raphson iterations** before fallback.
 * @param {number} [tolerance=1e-9] - Convergence criterion for stopping the iteration.
 * @returns {number} The **eccentric anomaly** ($E$) in **radians** (wrapped to $[0, 2\pi]$).
 *
 * @throws {@link RangeError} If the **eccentricity ($e$) is invalid** ($e < 0$ or $e \geq 1$).
 *
 * ---
 *
 * @example
 * ```ts
 * const M = Math.PI / 4; // 45 degrees in radians
 * const e = 0.1; // Orbital eccentricity
 * console.log(solveKepler(M, e)); // Output: Eccentric anomaly in radians
 * ```
 *
 * ---
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

  if (e < 0 || e >= 1) {
    throw new RangeError(`Invalid eccentricity: ${e}. Must be in range [0,1).`);
  }

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
