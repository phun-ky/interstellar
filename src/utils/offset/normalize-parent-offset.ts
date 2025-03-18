/**
 * Normalizes the **parent body's offset** to ensure consistent positional adjustments.
 *
 * ## **Calculation Logic:**
 * - If the **parent offset is `0`**, the function simply **multiplies `px` by `modifier`**.
 * - Otherwise, it **adds the parent offset to `px`** before applying the **modifier**:
 *   $$ \text{normalized} = \text{modifier} \times (\text{parentOffset} + \text{px} \mid\mid \text{px}) $$
 *
 * ## **Usage in Orbit Calculations:**
 * - Ensures **correct relative positioning** of moons, planets, and other celestial bodies.
 * - Helps maintain **smooth transitions** in simulations with nested orbits.
 *
 * @param {number} px - The pixel-based offset to normalize.
 * @param {number} parentOffset - The offset of the parent body.
 * @param {number} [modifier=-1] - A multiplier to adjust the direction of the offset.
 * @returns {number} The normalized offset value.
 *
 * @example
 * ```ts
 * const adjustedOffset = normalizeParentOffset(100, 50);
 * console.log(adjustedOffset); // Output: -150
 * ```
 */
export const normalizeParentOffset = (
  px: number,
  parentOffset: number,
  modifier = -1
): number => {
  if (parentOffset === 0) {
    return modifier * px;
  } else {
    return modifier * (parentOffset + px || px);
  }
};
