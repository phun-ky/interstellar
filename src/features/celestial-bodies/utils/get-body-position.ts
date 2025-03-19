/* eslint-disable no-console */
import { CelestialBodyType } from '../../../types/celestial-bodies';
import { MeasureInterface } from '../../../types/distance';
import { convertDistance } from '../../../utils/distance/convert-distance';

// eslint-disable-next-line import/no-unused-modules
export type GetBodyPositionReturnType = {
  x: MeasureInterface | undefined;
  y: MeasureInterface | undefined;
};

/**
 * Computes the **current position** of a celestial body in real-world units.
 *
 * The position is determined using the body's **semi-major axis** ($a$),
 * **semi-minor axis** ($b$), **orbital angle** ($\theta$), and **focus shift** ($f$).
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
 * - $b$ (or `miA`) is the **semi-minor axis**.
 * - $\theta$ is the **current angle** of the celestial body in its orbit.
 * - $f$ is the **focus shift** ($e \cdot a$) caused by orbital eccentricity.
 *
 * @param {CelestialBodyType} body - The celestial body whose position is being calculated.
 * @returns {GetBodyPositionReturnType} The calculated position in **astronomical units (AU)**.
 *
 * @example
 * ```ts
 * const body: CelestialBodyType = {
 *   a: { value: 5, unit: 'AU' },
 *   e: 0.2,
 *   angle: Math.PI / 4,
 *   focus_x: 1,
 *   miA: 4.8,
 * };
 *
 * const position = getBodyPosition(body);
 * console.log(position); // { x: { value: ..., unit: 'AU' }, y: { value: ..., unit: 'AU' } }
 * ```
 *
 * @see [Elliptical Orbits](https://en.wikipedia.org/wiki/Ellipse)
 */
export const getBodyPosition = (
  body: CelestialBodyType
): GetBodyPositionReturnType => {
  if (!body) {
    console.warn('Celestial body not found in celestial bodies.');

    return { x: undefined, y: undefined };
  }

  const { a, miA = 1, angle, focus_x = 0, period } = body;
  const normalizedA = convertDistance(a, 'AU');
  // Determine retrograde motion
  const orbitalDirection = period?.value < 0 ? -1 : 1;
  const adjustedAngle = orbitalDirection * angle; // Ensures retrograde is correctly represented
  // Calculate body position in real-world units
  const x = normalizedA.value * Math.cos(adjustedAngle) - focus_x;
  const y = miA * Math.sin(adjustedAngle);

  return { x: { value: x, unit: 'AU' }, y: { value: y, unit: 'AU' } };
};
