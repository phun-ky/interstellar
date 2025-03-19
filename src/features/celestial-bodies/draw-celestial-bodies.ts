/* eslint-disable no-console */
/* eslint-disable import/no-unused-modules */
import { MAX_CELESTIAL_BODY_SIZE, TWO_PI } from '../../config/constants';
import {
  CelestialBodiesType,
  CelestialBodyType
} from '../../types/celestial-bodies';
import { ValueInterface } from '../../types/distance';
import { convertDistance } from '../../utils/distance/convert-distance';
import { distanceToPixels } from '../../utils/distance/distance-to-pixels';

export type DrawCelestialBodiesPropsType = {
  space: CanvasRenderingContext2D;
  referenceX: number;
  referenceY: number;
  scale: ValueInterface;
  celestialBodies: CelestialBodiesType;
  maxSize?: number;
};

/**
 * Renders celestial bodies onto a 2D canvas based on their orbital parameters.
 *
 * **Mathematical Explanation:**
 *
 * Celestial bodies follow **elliptical orbits** with positions computed as:
 * $$
 * x = a \cos(\theta) - f
 * $$
 * $$
 * y = b \sin(\theta)
 * $$
 * where:
 * - $a$ is the **semi-major axis** in astronomical units (AU).
 * - $b = a\sqrt{1 - e^2}$ is the **semi-minor axis**.
 * - $\theta$ is the **true anomaly**.
 * - $f = e \cdot a$ is the **focus shift**.
 * - $(x, y)$ is the **celestial body's position** in AU.
 *
 * The **rendered size** of each celestial body is computed as:
 * $$
 * S = \max(\text{scaled radius}, \text{maxSize})
 * $$
 * ensuring a **minimum renderable size** for visibility.
 *
 * @param {DrawCelestialBodiesPropsType} props - Object containing rendering parameters.
 * @param {CanvasRenderingContext2D} props.space - The 2D rendering context of the canvas.
 * @param {number} props.referenceX - The x-coordinate of the galactic center in pixels.
 * @param {number} props.referenceY - The y-coordinate of the galactic center in pixels.
 * @param {ValueInterface} props.scale - The scale factor converting real-world units to pixels.
 * @param {CelestialBodiesType} props.celestialBodies - Array of celestial bodies with orbital parameters.
 * @param {number} [props.maxSize=MAX_CELESTIAL_BODY_SIZE] - The maximum size of a celestial body in pixels.
 * @returns {void} This function does not return a value; it renders celestial bodies onto the canvas.
 *
 * @example
 * ```ts
 * const celestialBodies: CelestialBodiesType = [
 *   {
 *     name: 'Star A',
 *     a: { value: 5000, unit: 'AU' },
 *     e: 0.1,
 *     radius: { value: 696340, unit: 'km' },
 *     color: 'white',
 *     angle: 0,
 *     miA: 5000 * Math.sqrt(1 - 0.1 ** 2), // Semi-minor axis
 *     focus_x: 0.1 * 5000 // Focus shift
 *   }
 * ];
 *
 * drawCelestialBodies({
 *   space: ctx,
 *   referenceX: 500,
 *   referenceY: 500,
 *   scale: { value: 50 },
 *   celestialBodies: celestialBodies
 * });
 * ```
 *
 * @see [Elliptical Orbits](https://en.wikipedia.org/wiki/Ellipse)
 */
export const drawCelestialBodies = (
  props: DrawCelestialBodiesPropsType
): void => {
  const {
    space,
    referenceX,
    referenceY,
    scale,
    celestialBodies,
    maxSize = MAX_CELESTIAL_BODY_SIZE
  } = props;

  celestialBodies.forEach((body: CelestialBodyType) => {
    const { radius, color, name, a, miA, focus_x, angle, period } = body;

    if (a === undefined || miA === undefined || focus_x === undefined) {
      console.warn(
        `Celestial body ${name} has undefined orbit parameters. Skipping rendering.`
      );

      return;
    }

    const orbitalDirection = period.value < 0 ? -1 : 1; // Determine direction
    const adjustedAngle = orbitalDirection * angle; // Flip for retrograde motion
    const normalizedA = convertDistance(a, 'AU');
    const x = normalizedA.value * Math.cos(adjustedAngle) - focus_x;
    const y = miA * Math.sin(adjustedAngle);
    const xPX =
      referenceX +
      distanceToPixels({ value: x, unit: normalizedA.unit }, scale);
    const yPX =
      referenceY +
      distanceToPixels({ value: y, unit: normalizedA.unit }, scale);

    globalThis.NEAREST_BODIES[name] = {
      x: xPX,
      y: yPX,
      name,
      category: body.category,
      system: body.category.includes('satellite') ? body.system : undefined
    };

    space.fillStyle = color;
    space.beginPath();
    space.arc(
      xPX,
      yPX,
      Math.max(distanceToPixels(radius, scale), maxSize),
      0,
      TWO_PI
    );
    space.fill();
  });
};
