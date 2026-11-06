import { THRESHOLD_MOON_RENDER } from '../../../config/constants';
import {
  getBodyKind,
  getChildBodies
} from '../../celestial-bodies/utils/body-catalog';

/**
 * Whether turning the Moons layer on while locked on a body should zoom in
 * again: the body is a planet with moons, and the view is too far out for
 * moons to be drawn (they are drawn above `THRESHOLD_MOON_RENDER`). A view
 * already close enough is left as it is.
 *
 * @param {string | undefined} lockedId - The id of the locked body, if any.
 * @param {number} scale - The current scale.
 * @returns {boolean} `true` when the view should zoom to the body again.
 *
 * @example
 * ```ts
 * needsMoonZoom('jupiter', 1.8); // true
 * needsMoonZoom('jupiter', 5); // false, moons are already drawn
 * needsMoonZoom('venus', 1.8); // false, Venus has no moons
 * ```
 */
export const needsMoonZoom = (
  lockedId: string | undefined,
  scale: number
): boolean =>
  lockedId !== undefined &&
  getBodyKind(lockedId) === 'planet' &&
  scale <= THRESHOLD_MOON_RENDER &&
  getChildBodies(lockedId).some(({ id }) => getBodyKind(id) === 'moon');
