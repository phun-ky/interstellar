const EPSILON = 1e-10; // Floating-point tolerance

/**
 * Wraps an angle to the range \([-\pi, \pi]\), ensuring it remains within a single revolution while preserving retrograde motion.
 *
 * **Mathematical Explanation:**
 *
 * This function ensures that an angle \( x \) is always in the standard range:
 * \[
 * -\pi \leq x < \pi
 * \]
 * using the trigonometric identity:
 * \[
 * x_{\text{wrapped}} = \text{atan2}(\sin(x), \cos(x))
 * \]
 *
 * This method is preferred over modulo operations (`% 2\pi`), as it avoids floating-point precision errors and ensures numerical stability.
 *
 * **Floating-Point Precision Handling:**
 * - Floating-point calculations can cause small rounding errors, resulting in angles slightly exceeding \( \pi \) or \( -\pi \).
 * - Using `atan2` inherently corrects these errors by normalizing the input angle.
 * - If necessary, a small epsilon correction can be applied to further prevent issues.
 * - Ensures that \( \pi \) remains \( -\pi \) when the original angle was negative, maintaining correct retrograde motion.
 *
 * This function is particularly useful in orbital mechanics and physics simulations where **negative angles must be preserved**, such as retrograde motion calculations.
 *
 * @param {number} angle - The input angle in radians.
 * @returns {number} The angle wrapped into the range \([-\pi, \pi]\), with floating-point correction.
 *
 * @example
 * ```ts
 * console.log(wrapAngle(-3)); // Output: Value wrapped in [-π, π]
 * console.log(wrapAngle(7 * Math.PI)); // Output: Wrapped angle within [-π, π]
 * console.log(wrapAngle(100 * Math.PI)); // Output: Small corrected angle due to floating-point precision
 * ```
 */
export const wrapAngle = (angle: number): number => {
  let wrapped = Math.atan2(Math.sin(angle), Math.cos(angle));

  // Ensure π remains -π when angle was originally negative
  if (Math.abs(wrapped - Math.PI) < EPSILON && angle < 0) {
    wrapped = -Math.PI;
  }

  return wrapped;
};
