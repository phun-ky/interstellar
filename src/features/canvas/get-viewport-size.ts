/**
 * The canvas size in CSS pixels: the coordinate space everything is drawn in.
 *
 * `setupCanvas()` sizes the canvas buffer in device pixels (`canvas.width` is
 * twice the CSS width at `devicePixelRatio` 2) and scales the context, so
 * drawing uses CSS pixels. Centring and bounds must use this size, never
 * `canvas.width` and `canvas.height`.
 *
 * @param {HTMLCanvasElement} canvas - The simulation canvas.
 * @returns {{ width: number; height: number }} The size in CSS pixels.
 *
 * @example
 * ```ts
 * const { width, height } = getViewportSize(canvas);
 * ```
 */
export const getViewportSize = (
  canvas: HTMLCanvasElement
): { width: number; height: number } => ({
  width: canvas.clientWidth || canvas.width,
  height: canvas.clientHeight || canvas.height
});
