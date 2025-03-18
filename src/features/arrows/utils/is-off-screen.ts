/**
 * Determines whether a given point is outside the visible canvas area.
 *
 * The function checks if the point `(xPX, yPX)` lies outside the boundaries
 * defined by `canvasWidth` and `canvasHeight`. If the point is beyond any of
 * the edges (left, right, top, or bottom), the function returns `true`.
 *
 * @param {number} xPX - The x-coordinate of the point in pixels.
 * @param {number} yPX - The y-coordinate of the point in pixels.
 * @param {number} canvasWidth - The width of the canvas in pixels.
 * @param {number} canvasHeight - The height of the canvas in pixels.
 * @returns {boolean} `true` if the point is outside the canvas boundaries, otherwise `false`.
 *
 * @example
 * ```ts
 * const isOutside = isOffScreen(-10, 50, 800, 600);
 * console.log(isOutside); // Output: true
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
 */
export const isOffScreen = (
  xPX: number,
  yPX: number,
  canvasWidth: number,
  canvasHeight: number
): boolean => {
  return xPX < 0 || xPX > canvasWidth || yPX < 0 || yPX > canvasHeight;
};
