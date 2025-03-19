import { TWO_PI } from '../../config/constants';

/**
 * Wraps an angle to the range \([0, 2\pi]\), ensuring it remains within one full revolution.
 *
 * **Mathematical Explanation:**
 *
 * This function ensures that an angle \( x \) is always in the standard range:
 * \[
 * 0 \leq x < 2\pi
 * \]
 * using the modulo operation:
 * \[
 * x_{\text{wrapped}} = (x \mod 2\pi + 2\pi) \mod 2\pi
 * \]
 *
 * Additionally, due to floating-point precision errors, when the wrapped value is **very close** to \( 2\pi \),
 * it is explicitly set to `0` to maintain numerical consistency.
 *
 * This function is useful in orbital mechanics and trigonometry, where angles should remain within one full revolution.
 *
 * @param {number} x - The input angle in radians.
 * @returns {number} The angle wrapped into the range \([0, 2\pi]\), with corrections for floating-point precision.
 *
 * @example
 * ```ts
 * console.log(wrapAngle(-3)); // Output: Value wrapped in [0, 2π]
 * console.log(wrapAngle(7 * Math.PI)); // Output: Wrapped angle within [0, 2π]
 * console.log(wrapAngle(100 * Math.PI)); // Output: 0 (due to floating-point correction)
 * ```
 */
export const wrapAngle = (x: number): number => {
  const wrapped = ((x % TWO_PI) + TWO_PI) % TWO_PI;

  // Correct floating-point precision error when the result is very close to 2π
  return Math.abs(wrapped - TWO_PI) < 1e-10 ? 0 : wrapped;
};
