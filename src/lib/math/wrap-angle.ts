/**
 * Wraps an angle to the range $[0, 2\pi]$.
 *
 * **Mathematical Explanation:**
 *
 * This function ensures that an angle $x$ is always in the standard range:
 * $$
 * 0 \leq x < 2\pi
 * $$
 * using the modulo operation:
 * $$
 * x_{wrapped} = (x \mod 2\pi + 2\pi) \mod 2\pi
 * $$
 *
 * This is useful in orbital mechanics and trigonometry, where angles should remain within one full revolution.
 *
 * @param {number} x - The input angle in radians.
 * @returns {number} The angle wrapped into the range $[0, 2\pi]$.
 *
 * @example
 * ```ts
 * console.log(wrapAngle(-3)); // Output: Value wrapped in [0, 2π]
 * console.log(wrapAngle(7 * Math.PI)); // Output: Wrapped angle within [0, 2π]
 * ```
 */
export const wrapAngle = (x: number): number =>
  ((x % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
