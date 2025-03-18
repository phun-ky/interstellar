/**
 * Generates a unique identifier using a random alphanumeric string.
 *
 * ## **Generation Logic:**
 * - Uses `Math.random()` to create a random number.
 * - Converts it to **base-36** (digits + lowercase letters).
 * - Extracts a substring to ensure a **short, unique ID**.
 * - Prefixes with `_` to guarantee a valid **identifier format**.
 *
 * @returns {string} - A unique identifier.
 *
 * @example
 * ```ts
 * const id = uniqueID();
 * console.log(id); // Output: "_abc123xyz"
 * ```
 */
export const uniqueID = (): string =>
  '_' + Math.random().toString(36).substring(2, 11);
