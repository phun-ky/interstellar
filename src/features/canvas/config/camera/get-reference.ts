import { offsetX, offsetY } from '.';

/**
 * Computes the reference point at the center of the canvas, adjusted by offsets.
 *
 * This function calculates the central coordinates of the canvas and applies
 * additional offsets (`offsetX` and `offsetY`). The reference point can be used
 * as a central position for positioning objects, aligning with the galaxy center.
 *
 * The formula used is:
 * $$ \text{referenceX} = \frac{\text{canvas width}}{2} + \text{offsetX} $$
 * $$ \text{referenceY} = \frac{\text{canvas height}}{2} + \text{offsetY} $$
 *
 * @param {HTMLCanvasElement} canvas - The canvas element.
 * @returns {{ referenceX: number; referenceY: number }} The computed reference coordinates.
 *
 * @example
 * ```ts
 * const canvas = document.getElementById('canvas') as HTMLCanvasElement;
 * const { referenceX, referenceY } = getReference(canvas);
 * console.log(referenceX, referenceY);
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
 */
export const getReference = (
  canvas: HTMLCanvasElement
): { referenceX: number; referenceY: number } => {
  const referenceX = canvas.width / 2 + offsetX.value;
  const referenceY = canvas.height / 2 + offsetY.value;

  return {
    referenceX,
    referenceY
  };
};
