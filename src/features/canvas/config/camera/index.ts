import { ValueInterface } from '../../../../types/distance';

/**
 * Stores global offset values used for positioning elements relative to a reference point.
 *
 * These values are used to shift the reference coordinate system dynamically.
 * The `offsetX` and `offsetY` represent real-time positional shifts, while
 * `offsetCacheX` and `offsetCacheY` store cached values for stability during updates.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
 */

/** The horizontal offset value for the reference position. */
export const offsetX: ValueInterface = { value: 0 };

/** The vertical offset value for the reference position. */
export const offsetY: ValueInterface = { value: 0 };

/** Cached horizontal offset to preserve stable positioning. */
export const offsetCacheX: ValueInterface = { value: 0 };

/** Cached vertical offset to preserve stable positioning. */
export const offsetCacheY: ValueInterface = { value: 0 };
