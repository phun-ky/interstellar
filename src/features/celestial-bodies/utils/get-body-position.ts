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
 * **eccentricity** ($e$) and **true anomaly** ($\nu$, `orbit.angle`), with the parent at
 * the focus of the ellipse:
 *
 * $$
 * r = \frac{a(1 - e^2)}{1 + e \cos\nu}
 * $$
 * $$
 * x = r \cos\nu \qquad y = r \sin\nu
 * $$
 * where:
 * - $a$ is the **semi-major axis** converted to AU.
 * - $\nu$ is the **true anomaly**, the angle from periapsis as seen from the parent,
 *   mirrored for prograde orbits so they run counter-clockwise on the canvas (where the
 *   y-axis points down).
 *
 * This lies on the same ellipse `traceOrbit()` draws (centred $a \cdot e$ from the focus),
 * at the point the true anomaly gives.
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
  // Distance from the parent (at the focus) at this true anomaly
  const r = (a * (1 - e ** 2)) / (1 + e * Math.cos(angle));
  // Prograde orbits are mirrored so they run counter-clockwise on the canvas
  const orbitalDirection = retrograde ? 1 : -1;
  const adjustedAngle = orbitalDirection * angle;
  const x = r * Math.cos(adjustedAngle);
  const y = r * Math.sin(adjustedAngle);

  return { x: { value: x, unit: 'au' }, y: { value: y, unit: 'au' } };
};
