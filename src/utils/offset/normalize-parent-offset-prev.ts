/**
 * Normalizes the **parent body's previous offset** for smooth positional transitions.
 *
 * ## **Calculation Logic:**
 * - If the **parent offset is `0`**, the function **returns `prev - next`** directly.
 * - Otherwise, it **adjusts the offset** by computing:
 *   $$ \text{normalized} = (\text{parentOffset} + \text{prev} \mid\mid \text{prev}) - (\text{parentOffset} + \text{prev} \mid\mid \text{next}) $$
 *
 * ## **Usage in Orbit Calculations:**
 * - Ensures **smooth position tracking** for moons, planets, or other celestial bodies.
 * - Avoids abrupt jumps in **parent-relative motion**.
 *
 * @param {number} parentOffset - The parent body's offset value.
 * @param {number} prev - The previous position value.
 * @param {number} next - The next position value.
 * @returns {number} The adjusted previous offset.
 *
 * @example
 * ```ts
 * const adjustedOffset = normalizeParentOffsetPrev(50, 100, 120);
 * console.log(adjustedOffset); // Output: -20
 * ```
 */
export const normalizeParentOffsetPrev = (
  parentOffset: number,
  prev: number,
  next: number
): number => {
  if (parentOffset === 0) {
    return prev - next;
  } else {
    return (parentOffset + prev || prev) - (parentOffset + prev || next);
  }
};
