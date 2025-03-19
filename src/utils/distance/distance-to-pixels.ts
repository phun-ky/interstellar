import { AU_IN_PX } from '../../config/constants';
import { DistanceInterface, ValueInterface } from '../../types/distance';

import { convertDistance } from './convert-distance';

/**
 * Converts a **distance measurement** to **pixels** based on a given scale.
 *
 * **Conversion Logic:**
 * 1. Converts the input distance to **Astronomical Units (AU)**.
 * 2. Multiplies the AU value by **AU_IN_PX** (pixels per AU) and the provided **scale**.
 *
 * **Usage in Visualization:**
 * - Used to map **real-world distances** into **pixel-based rendering**.
 * - Supports unit conversions before scaling.
 *
 * @param {DistanceInterface} distance - The distance value and its unit.
 * @param {ValueInterface} scale - The scaling factor for rendering.
 * @returns {number} The equivalent distance in pixels.
 *
 * @example
 * ```ts
 * const pixelDistance = distanceToPixels({ value: 1, unit: 'AU' }, { value: 50 });
 * console.log(pixelDistance); // Output: Pixels equivalent of 1 AU at scale 50
 * ```
 *
 * @see {@link convertDistance} for unit conversions.
 */
export const distanceToPixels = (
  distance: DistanceInterface,
  scale: ValueInterface
): number => {
  const converted = convertDistance(distance, 'AU');
  const { value } = converted;

  return value * AU_IN_PX * scale.value;
};
