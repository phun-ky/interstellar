/**
 * Delays execution for the specified time using `setTimeout`.
 *
 * ## **Functionality:**
 * - Returns a **Promise** that resolves **after** the specified time (in milliseconds).
 * - Useful for **delaying execution**, creating **timeouts**, or **simulating wait periods**.
 *
 * ## **Usage in Async Operations:**
 * - Used in **animations**, **API polling**, or **delayed UI updates**.
 * - Prevents blocking the main thread by utilizing asynchronous execution.
 *
 * @param {number} ms - The time to wait in milliseconds.
 * @returns {Promise<void>} A Promise that resolves after the specified time.
 *
 * @example
 * ```ts
 * // Wait for 2 seconds before executing the next line
 * await waitFor(2000);
 * console.log('2 seconds later...');
 * ```
 */
export const waitFor = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
