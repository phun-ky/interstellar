/**
 * Type definition for a debounced function that accepts any arguments.
 *
 * This type represents a function that takes an arbitrary number of arguments of any type
 * and does not return a value. Typically used in debounce implementations to delay function execution.
 *
 * @typedef {(...args: any[]) => void} DebounceAnyFunctionType
 *
 * @example
 * ```ts
 * const debouncedLogger: DebounceAnyFunctionType = (...args) => {
 *   console.log('Debounced call with:', args);
 * };
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DebounceAnyFunctionType = (...args: any[]) => void;
