/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-unused-modules */
import { DebounceAnyFunctionType } from '../types/debounce';

/**
 * Creates a **debounced function** that delays execution until a specified time has passed
 * since the last invocation.
 *
 * ## **Functionality:**
 * - **Delays function execution** until `wait` milliseconds have passed since the last call.
 * - If `immediate = true`, the function is executed immediately on the first call.
 *
 * @param {DebounceAnyFunctionType} func - The function to debounce.
 * @param {number} wait - The delay time in milliseconds before executing.
 * @param {boolean} [immediate=false] - If `true`, the function executes on the first call instead of waiting.
 * @returns {DebounceAnyFunctionType} - The debounced function.
 *
 * @example
 * ```ts
 * const debouncedFn = debounce((value) => {
 *   console.log(value);
 * }, 500);
 *
 * debouncedFn('Hello'); // Will not execute immediately
 * debouncedFn('World'); // Resets timer, will execute 500ms after last call
 * ```
 */
export const debounce = (
  func: DebounceAnyFunctionType,
  wait: number,
  immediate = false
): DebounceAnyFunctionType => {
  let timeout: null | ReturnType<typeof setTimeout>;

  return function (context: unknown, ...args: unknown[]): void {
    const later = function (): void {
      timeout = null;

      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

/**
 * Creates a **debounced asynchronous function** that ensures the last invocation is resolved.
 *
 * ## **Functionality:**
 * - Cancels previous calls **if invoked within the debounce delay**.
 * - Ensures the last call **always resolves**.
 *
 * @template T - A function returning a `Promise`.
 * @param {T} callback - The async function to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {(args: Parameters<T>) => Promise<ReturnType<T>>} - The debounced async function.
 *
 * @example
 * ```ts
 * const fetchData = debounceAsync(async (query) => {
 *   return await fetch(`/api/search?q=${query}`).then(res => res.json());
 * }, 300);
 *
 * fetchData('hello').then(data => console.log(data));
 * ```
 */
export const debounceAsync = <T extends (...args: any[]) => Promise<any>>(
  callback: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let resolveLastCall: ((value: ReturnType<T>) => void) | null = null;

  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    return new Promise<ReturnType<T>>((resolve, reject) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(async () => {
        try {
          const result = await callback(...args);

          resolve(result);

          if (resolveLastCall) resolveLastCall(result);
        } catch (error) {
          reject(error);
        }
      }, delay);

      resolveLastCall = resolve;
    });
  };
};
