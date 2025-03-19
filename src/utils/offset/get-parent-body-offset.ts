import { getBodyPosition } from '../../features/celestial-bodies/utils/get-body-position';
import { CelestialBodiesType } from '../../types/celestial-bodies';
import { ValueInterface } from '../../types/distance';
import { distanceToPixels } from '../distance/distance-to-pixels';

/**
 * Computes the **parent body's offset** in pixels for celestial objects.
 *
 * **Offset Calculation Logic:**
 * - **Stars**: Use the **galactic center** as their reference, so their offset is `(0,0)`.
 * - **Planets, Moons, and Comets**:
 *   1. Finds the **parent body** (e.g., planet for a moon, star for a planet).
 *   2. Retrieves the **parent body's position**.
 *   3. Converts the **position into pixels** using `distanceToPixels`.
 *
 * **Usage in Visualization:**
 * - Ensures **moons orbit their planets** correctly by applying the parent's offset.
 * - Allows **nested orbital structures** (e.g., exomoons orbiting exoplanets).
 *
 * @param {string} system - The name of the **parent system** (e.g., "Jupiter" for its moons).
 * @param {string} category - The category of the celestial body (**star, planet, moon, comet**).
 * @param {CelestialBodiesType} bodies - The collection of celestial bodies.
 * @param {ValueInterface} scale - The scaling factor for rendering.
 * @returns {{ parentOffsetX: number; parentOffsetY: number }} The computed **x** and **y** offsets for the parent body in pixels.
 *
 * @example
 * ```ts
 * const offset = getParentBodyOffset('Jupiter', 'moon', celestialBodies, { value: 50 });
 * console.log(offset); // Output: { parentOffsetX: 320, parentOffsetY: 150 }
 * ```
 */
export const getParentBodyOffset = (
  system: string,
  category: string,
  bodies: CelestialBodiesType,
  scale: ValueInterface
): {
  parentOffsetX: number;
  parentOffsetY: number;
} => {
  let parentOffsetX = 0;
  let parentOffsetY = 0;

  // Do not calculate offsets for stars, they already use the galactic center
  if (category === 'star') {
    return {
      parentOffsetX,
      parentOffsetY
    };
  }

  const foundBody = bodies.find(
    (body) => body.name.toLowerCase() === system.toLowerCase()
  );

  if (foundBody) {
    const { x, y } = getBodyPosition(foundBody);

    if (x && y) {
      parentOffsetX = distanceToPixels(x, scale);
      parentOffsetY = distanceToPixels(y, scale);
    }
  }

  return {
    parentOffsetX,
    parentOffsetY
  };
};
