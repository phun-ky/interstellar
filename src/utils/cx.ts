/* eslint-disable import/no-unused-modules */

/**
 * Type for the optional properties object with boolean values.
 *
 * @typedef {undefined | Record<string, boolean>} CXSecondArgType
 */
export type CXSecondArgType = undefined | Record<string, boolean>;

/**
 * Type for the first argument of the cx function, which can be either a string or an object.
 *
 * @typedef {string | CXSecondArgType} CXFirstArgType
 */
export type CXFirstArgType = string | CXSecondArgType;

/**
 * Combines class names and an optional object of conditional class names into a single class string.
 *
 * ## **Usage & Functionality:**
 * - **First Argument (`cls`)**:
 *   - Can be a **string** containing predefined class names.
 *   - Can be an **object** where keys represent class names and values (`true | false`) determine inclusion.
 *
 * - **Second Argument (`cls_obj`, optional)**:
 *   - An object with class names as keys and boolean values indicating conditional inclusion.
 *   - Allows adding additional class names dynamically.
 *
 * ## **Examples:**
 *
 * @example
 * ```ts
 * console.log(cx('base-class', { active: true, disabled: false }));
 * // Output: 'base-class active'
 * ```
 *
 * @example
 * ```ts
 * console.log(cx({ primary: true, hidden: false }));
 * // Output: 'primary'
 * ```
 *
 * @param {CXFirstArgType} cls - The base class name(s) as a string or an object mapping class names to boolean values.
 * @param {CXSecondArgType} cls_obj - Optional object containing additional conditional class names.
 * @returns {string} - Returns a string containing the combined class names.
 */
export const cx = (cls: CXFirstArgType, cls_obj?: CXSecondArgType): string => {
  if (!cls) return '';

  if (!cls_obj && typeof cls !== 'string') {
    return `${Object.keys(cls)
      .filter((classname) => cls[classname])
      .join(' ')}`.trim();
  }

  return `${(cls as string).trim()} ${
    cls_obj
      ? Object.keys(cls_obj)
          .filter((classname) => cls_obj[classname])
          .join(' ')
      : ''
  }`.trim();
};
