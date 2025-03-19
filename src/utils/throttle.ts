/**
 * Creates a **throttled function** that ensures the callback executes **at most once per animation frame**.
 *
 * **Functionality:**
 * - Prevents excessive function calls by ensuring execution **only once per frame**.
 * - Uses `requestAnimationFrame` to sync execution with **browser rendering cycles**.
 *
 * @param {() => void} callback - The function to throttle.
 * @returns {() => void} - The throttled function.
 *
 * @example
 * ```ts
 * const throttledFn = throttle(() => console.log('Throttled execution'));
 * window.addEventListener('scroll', throttledFn);
 * ```
 */
export const throttle = (callback: () => void): (() => void) => {
  let running = false;

  return () => {
    if (running) {
      return;
    }

    running = true;
    requestAnimationFrame(() => {
      callback();
      running = false;
    });
  };
};

/**
 * Creates a **throttled asynchronous function** that ensures the callback executes **at most once per animation frame**.
 *
 * **Functionality:**
 * - Similar to `throttle`, but supports **async functions**.
 * - Ensures that only **one async operation runs per frame**, preventing race conditions.
 *
 * @template T - A function returning a `Promise`.
 * @param {T} callback - The async function to throttle.
 * @returns {(args: Parameters<T>) => Promise<void>} - The throttled async function.
 *
 * @example
 * ```ts
 * const throttledFetch = throttleAsync(async () => {
 *   const data = await fetch('/api/data').then(res => res.json());
 *   console.log(data);
 * });
 *
 * window.addEventListener('scroll', throttledFetch);
 * ```
 */
export const throttleAsync = <
  T extends (...args: unknown[]) => Promise<unknown>
>(
  callback: T
): ((...args: Parameters<T>) => Promise<void>) => {
  let running = false;

  return async (...args: Parameters<T>): Promise<void> => {
    if (running) {
      return;
    }

    running = true;
    requestAnimationFrame(async () => {
      try {
        await callback(...args);
      } finally {
        running = false;
      }
    });
  };
};
