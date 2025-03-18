import { ValueInterface } from '../../types/distance';

import { generateStarfieldBitmap } from './generate-starfield-bitmap';

/**
 * Initializes or updates the starfield when the window resizes.
 *
 * ## **Initialization Logic:**
 * - If `globalThis.STARFIELD_BITMAP` **does not exist**, a new starfield is generated.
 * - If the **canvas size has changed**, the starfield is regenerated.
 * - The last known canvas size is stored in `globalThis.LAST_CANVAS_SIZE` to detect changes.
 *
 * @async
 * @param {number} canvasWidth - The width of the canvas in pixels.
 * @param {number} canvasHeight - The height of the canvas in pixels.
 * @param {ValueInterface} scale - The scale factor affecting star sizes.
 * @returns {Promise<void>} A promise that resolves once the starfield bitmap is created.
 *
 * @example
 * ```ts
 * await initializeStarfield(1920, 1080, { value: 1 });
 * console.log(globalThis.STARFIELD_BITMAP); // Outputs the updated starfield bitmap
 * ```
 *
 * @see [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
 */
export const initializeStarfield = async (
  canvasWidth: number,
  canvasHeight: number,
  scale: ValueInterface
): Promise<void> => {
  if (
    !globalThis.STARFIELD_BITMAP ||
    globalThis.LAST_CANVAS_SIZE.width !== canvasWidth ||
    globalThis.LAST_CANVAS_SIZE.height !== canvasHeight
  ) {
    globalThis.LAST_CANVAS_SIZE = { width: canvasWidth, height: canvasHeight };
    await generateStarfieldBitmap(canvasWidth, canvasHeight, scale);
  }
};
