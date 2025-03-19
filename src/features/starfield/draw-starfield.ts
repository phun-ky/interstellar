/**
 * Renders the pre-generated starfield onto the canvas.
 *
 * **Rendering Process:**
 * - If `globalThis.STARFIELD_BITMAP` exists, it is drawn onto the canvas.
 * - The bitmap is stretched to fit the entire canvas area.
 *
 * @param {CanvasRenderingContext2D} space - The 2D rendering context of the canvas.
 * @param {number} canvasWidth - The width of the canvas in pixels.
 * @param {number} canvasHeight - The height of the canvas in pixels.
 * @returns {void} This function does not return a value; it draws the starfield onto the canvas.
 *
 * @example
 * ```ts
 * drawStarfield(ctx, 800, 600);
 * ```
 */
export const drawStarfield = (
  space: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number
) => {
  if (globalThis.STARFIELD_BITMAP) {
    space.drawImage(
      globalThis.STARFIELD_BITMAP,
      0,
      0,
      canvasWidth,
      canvasHeight
    );
  }
};
