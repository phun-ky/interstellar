import { convertDistanceUnit } from '@interstellar-tools/equations';
import { DistanceInterface } from '@interstellar-tools/types';

import { OrbitingBodyType } from '../../../types/orbiting-bodies';

export type GetBodyPositionReturnType = {
  x: DistanceInterface;
  y: DistanceInterface;
};

/**
 * Computes the **current position** of a celestial body relative to its parent, in real-world units.
 *
 * The position is determined from the body's `orbit`: its **semi-major axis** ($a$),
 * **eccentricity** ($e$) and **orbital angle** ($\theta$).
 * The coordinates $(x, y)$ are calculated using the parametric equations:
 *
 * $$
 * x = a \cos\theta - f
 * $$
 * $$
 * y = b \sin\theta
 * $$
 * where:
 * - $a$ is the **semi-major axis** converted to AU.
 * - $b = a \sqrt{1 - e^2}$ is the **semi-minor axis**.
 * - $\theta$ is the **current angle** of the celestial body in its orbit, mirrored for
 *   prograde orbits so they run counter-clockwise on the canvas (where the y-axis points down).
 * - $f = e \cdot a$ is the **focus shift** caused by orbital eccentricity.
 *
 * A body without an `orbit` (like the Sun inside the Solar System) sits on its parent: `(0, 0)`.
 *
 * @param {OrbitingBodyType} body - The celestial body whose position is being calculated.
 * @returns {GetBodyPositionReturnType} The calculated position in **astronomical units (AU)**.
 *
 * @example
 * ```ts
 * import { PLANETS } from '@interstellar-tools/constants';
 *
 * const position = getBodyPosition(PLANETS[2]);
 * console.log(position); // { x: { value: ..., unit: 'au' }, y: { value: ..., unit: 'au' } }
 * ```
 *
 * @see [Elliptical Orbits](https://en.wikipedia.org/wiki/Ellipse)
 */
export const getBodyPosition = (
  body: OrbitingBodyType
): GetBodyPositionReturnType => {
  const { orbit } = body;

  if (!orbit) {
    return { x: { value: 0, unit: 'au' }, y: { value: 0, unit: 'au' } };
  }

  const { e, angle, retrograde } = orbit;
  const a = convertDistanceUnit(orbit.a, 'au').value;
  const b = a * Math.sqrt(1 - e ** 2);
  const focusOffset = e * a;
  // Prograde orbits are mirrored so they run counter-clockwise on the canvas
  const orbitalDirection = retrograde ? 1 : -1;
  const adjustedAngle = orbitalDirection * angle;
  // Calculate body position in real-world units
  const x = a * Math.cos(adjustedAngle) - focusOffset;
  const y = b * Math.sin(adjustedAngle);

  return { x: { value: x, unit: 'au' }, y: { value: y, unit: 'au' } };
};
