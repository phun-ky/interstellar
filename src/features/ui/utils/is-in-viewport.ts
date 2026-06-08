import { isOffScreen } from '../../arrows/utils/is-off-screen';

/**
 * Determines whether a given point is inside the visible canvas area.
 *
 * The function checks if the point `(xPX, yPX)` lies inside the boundaries
 * defined by `canvasWidth` and `canvasHeight`. If the point is inside any of
 * the edges (left, right, top, or bottom), the function returns `true`.
 *
 * @param {number} xPX - The x-coordinate of the point in pixels.
 * @param {number} yPX - The y-coordinate of the point in pixels.
 * @param {number} canvasWidth - The width of the canvas in pixels.
 * @param {number} canvasHeight - The height of the canvas in pixels.
 * @returns {boolean} `true` if the point is inside the canvas boundaries, otherwise `false`.
 *
 * @example
 * ```ts
 * const isInside = isInViewport(10, 50, 800, 600);
 * console.log(isInside); // Output: true
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
 */
export const isInViewport = (
  xPX: number,
  yPX: number,
  canvasWidth: number,
  canvasHeight: number
): boolean => !isOffScreen(xPX, yPX, canvasWidth, canvasHeight);
