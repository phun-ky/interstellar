/* eslint-disable import/no-unused-modules */
/**
 * Waits for the next animation frame using `requestAnimationFrame`.
 *
 * ## **Functionality:**
 * - Returns a **Promise** that resolves with the **timestamp** of the next animation frame.
 * - Allows synchronization of animations and UI updates with the browser's **rendering cycle**.
 *
 * ## **Usage in Animations & Rendering:**
 * - Ensures DOM updates occur before measuring elements (`getBoundingClientRect`).
 * - Helps synchronize animations with smooth transitions.
 *
 * @returns {Promise<number>} - A Promise that resolves with the timestamp of the next animation frame.
 *
 * @example
 * ```ts
 * // Wait for the next animation frame before measuring an element
 * await waitForFrame();
 * const rect = el.getBoundingClientRect();
 *
 * // Get the timestamp of the next frame
 * const timestamp = await waitForFrame();
 * console.log(timestamp);
 * ```
 */
export const waitForFrame = (): Promise<number> =>
  new Promise<number>(requestAnimationFrame);
