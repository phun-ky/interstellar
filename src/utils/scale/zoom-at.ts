import { MAX_SCALE, MIN_SCALE } from '../../config/constants';

/**
 * The camera offset that keeps the point under the pointer (or between two
 * fingers) fixed while the scale changes, so zooming happens around it.
 *
 * A point on the canvas shows the world position
 * `(point - center - offset) / scale`; the new offset makes that the same
 * before and after the zoom.
 *
 * @param {number} offset - The offset on one axis, in CSS pixels.
 * @param {number} point - The pointer on that axis, relative to the canvas.
 * @param {number} center - The canvas centre on that axis.
 * @param {number} prevScale - The scale before zooming.
 * @param {number} nextScale - The scale after zooming.
 * @returns {number} The new offset on that axis.
 *
 * @example
 * ```ts
 * offsetX.value = getZoomOffset(offsetX.value, mouseX, width / 2, 1, 2);
 * ```
 */
export const getZoomOffset = (
  offset: number,
  point: number,
  center: number,
  prevScale: number,
  nextScale: number
): number => offset + (point - center - offset) * (1 - nextScale / prevScale);

/**
 * The scale a pinch zooms to: the scale when the fingers touched down, times
 * how much farther apart they are now, within the allowed range.
 *
 * @param {number} startScale - The scale when the pinch started.
 * @param {number} startDistance - The distance between the fingers then, in pixels.
 * @param {number} distance - The distance between them now, in pixels.
 * @returns {number} The scale to zoom to.
 *
 * @example
 * ```ts
 * getPinchScale(2, 100, 200); // 4: the fingers moved twice as far apart
 * ```
 */
export const getPinchScale = (
  startScale: number,
  startDistance: number,
  distance: number
): number => {
  if (startDistance <= 0 || distance <= 0) return startScale;

  return Math.min(
    Math.max(startScale * (distance / startDistance), MIN_SCALE),
    MAX_SCALE
  );
};
