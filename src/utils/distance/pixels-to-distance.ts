import { AU_IN_PX } from '../../config/constants';
import { DistanceInterface, ValueInterface } from '../../types/distance';

/**
 * Converts a **pixel-based distance** back into **Astronomical Units (AU)**.
 *
 * ## **Conversion Logic:**
 * 1. Divides the pixel distance by **AU_IN_PX** (pixels per AU).
 * 2. Adjusts the result based on the **scale factor**.
 *
 * ## **Usage in Visualization:**
 * - Used to map **rendered pixel distances** back into **real-world AU measurements**.
 * - Supports scaled rendering where **1 AU ≠ fixed pixel value**.
 *
 * @param {number} pixels - The distance in pixels.
 * @param {ValueInterface} scale - The scaling factor for rendering.
 * @returns {DistanceInterface} The converted distance in AU.
 *
 * @example
 * ```ts
 * const distance = pixelsToDistance(500, { value: 50 });
 * console.log(distance); // Output: { value: 0.2, unit: 'AU' }
 * ```
 */
export const pixelsToDistance = (
  pixels: number,
  scale: ValueInterface
): DistanceInterface => {
  const value = pixels / (AU_IN_PX * scale.value);

  return { value, unit: 'AU' };
};
