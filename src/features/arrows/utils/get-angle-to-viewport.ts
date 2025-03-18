/**
 * Computes the angle from a reference point to a given point in the viewport.
 *
 * The function calculates the angle in radians using the `atan2` function,
 * which returns the angle between the positive x-axis and the point `(xPX, yPX)`
 * relative to the reference point `(referenceX, referenceY)`. The computed
 * angle follows the standard mathematical convention where:
 * - Positive angles indicate counter-clockwise rotation.
 * - Negative angles indicate clockwise rotation.
 *
 * The formula used is:
 * $$ \theta = \tan^{-1}\left(\frac{y_{PX} - \text{referenceY}}{x_{PX} - \text{referenceX}}\right) $$
 *
 * @param {number} xPX - The x-coordinate of the target point in pixels.
 * @param {number} yPX - The y-coordinate of the target point in pixels.
 * @param {number} referenceX - The x-coordinate of the reference point.
 * @param {number} referenceY - The y-coordinate of the reference point.
 * @returns {number} The angle in radians between the reference point and the target point.
 *
 * @example
 * ```ts
 * const angle = getAngleToViewport(100, 150, 50, 50);
 * console.log(angle); // Output: angle in radians
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
 */
export const getAngleToViewport = (
  xPX: number,
  yPX: number,
  referenceX: number,
  referenceY: number
): number => {
  return Math.atan2(yPX - referenceY, xPX - referenceX);
};
