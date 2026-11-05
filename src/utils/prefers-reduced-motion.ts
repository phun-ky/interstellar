/**
 * Whether the visitor asked for less motion, through the operating system's
 * or browser's "reduce motion" setting.
 *
 * @returns `true` when `prefers-reduced-motion: reduce` matches, `false`
 *   otherwise, and where `matchMedia` is missing.
 *
 * @example
 * ```ts
 * const duration = prefersReducedMotion() ? 0 : 700;
 * ```
 */
export const prefersReducedMotion = (): boolean =>
  globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
