import { ZOOM_FACTOR } from '../../config/constants';
import { ValueInterface } from '../../types/distance';

/**
 * Calculates the **new scale factor** based on a zoom event.
 *
 * **Zoom Logic:**
 * - **Scroll Up (`deltaY < 0`)** → Zoom **in** by multiplying by `ZOOM_FACTOR`.
 * - **Scroll Down (`deltaY > 0`)** → Zoom **out** by dividing by `ZOOM_FACTOR`.
 *
 * **Usage in Visualization:**
 * - Adjusts the **scale of celestial objects and distances** dynamically.
 * - Ensures smooth **zooming interactions** in canvas-based simulations.
 *
 * @param {WheelEvent} event - The mouse wheel event triggering the zoom.
 * @param {ValueInterface} scale - The current scale factor.
 * @returns {number} The updated scale factor after zooming.
 *
 * @example
 * ```ts
 * const newScale = calculateScale(wheelEvent, { value: 1 });
 * console.log(newScale); // Output: Adjusted scale factor based on scroll direction
 * ```
 */
export const calculateScale = (
  event: WheelEvent,
  scale: ValueInterface
): number => {
  const zoom = event.deltaY < 0 ? ZOOM_FACTOR : 1 / ZOOM_FACTOR;

  return scale.value * zoom;
};
