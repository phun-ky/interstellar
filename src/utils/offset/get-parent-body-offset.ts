import { ValueInterface } from '@interstellar-tools/types';

import { findBodyById } from '../../features/celestial-bodies/utils/body-catalog';
import { getAbsolutePosition } from '../../features/celestial-bodies/utils/get-absolute-position';
import { distanceToPixels } from '../distance/distance-to-pixels';

/**
 * Computes the **parent body's offset** in pixels for celestial objects.
 *
 * **Offset Calculation Logic:**
 * 1. Finds the **parent** by its id (e.g., `earth` for the Moon, `sun` for a planet,
 *    `solar-system` for the Sun).
 * 2. Retrieves the parent's **position relative to the galactic center**, following its own parents.
 * 3. Converts the **position into pixels** using `distanceToPixels`.
 *
 * Bodies whose parent is the galaxy itself (like most stars) have no parent offset: `(0,0)`.
 *
 * **Usage in Visualization:**
 * - Ensures **moons orbit their planets** correctly by applying the parent's offset.
 * - Allows **nested orbital structures** (e.g., stars in binary or multiple star systems).
 *
 * @param {string | undefined} parent - The id of the **parent** (e.g., `jupiter` for its moons).
 * @param {ValueInterface} scale - The scaling factor for rendering.
 * @returns {{ parentOffsetX: number; parentOffsetY: number }} The computed **x** and **y** offsets for the parent body in pixels.
 *
 * @example
 * ```ts
 * const offset = getParentBodyOffset('jupiter', { value: 50 });
 * console.log(offset); // Output: { parentOffsetX: 320, parentOffsetY: 150 }
 * ```
 */
export const getParentBodyOffset = (
  parent: string | undefined,
  scale: ValueInterface
): {
  parentOffsetX: number;
  parentOffsetY: number;
} => {
  const parentBody = findBodyById(parent);

  if (!parentBody) {
    return { parentOffsetX: 0, parentOffsetY: 0 };
  }

  const { x, y } = getAbsolutePosition(parentBody);

  return {
    parentOffsetX: distanceToPixels(x, scale),
    parentOffsetY: distanceToPixels(y, scale)
  };
};
