import { OrbitingBodyType } from '../../../types/orbiting-bodies';

import { findBodyById } from './body-catalog';
import {
  getBodyPosition,
  GetBodyPositionReturnType
} from './get-body-position';

/**
 * Computes the position of a body relative to the galactic center by adding up
 * its own position and the positions of every parent above it
 * (for example Moon → Earth → Sun → Solar System).
 *
 * @param {OrbitingBodyType} body - The system or celestial body to locate.
 * @returns {GetBodyPositionReturnType} The position in **astronomical units (AU)** relative to the galactic center.
 *
 * @example
 * ```ts
 * import { STARS } from '@interstellar-tools/constants';
 *
 * const sun = STARS.find((star) => star.id === 'sun');
 * getAbsolutePosition(sun); // position of the Solar System in its galactic orbit
 * ```
 */
export const getAbsolutePosition = (
  body: OrbitingBodyType
): GetBodyPositionReturnType => {
  let x = 0;
  let y = 0;
  let current: OrbitingBodyType | undefined = body;

  while (current) {
    const position = getBodyPosition(current);

    x += position.x.value;
    y += position.y.value;
    current = findBodyById(current.parent);
  }

  return { x: { value: x, unit: 'au' }, y: { value: y, unit: 'au' } };
};
