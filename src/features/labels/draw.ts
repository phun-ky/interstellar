/* eslint-disable import/no-unused-modules */
import {
  CelestialBodiesType,
  CelestialBodyType
} from '../../types/celestial-bodies';
import { ValueInterface } from '../../types/distance';
import { convertDistance } from '../../utils/distance/convert-distance';
import { distanceToPixels } from '../../utils/distance/distance-to-pixels';
import { CANVAS_LABEL_FONT } from '../canvas/config/ui';

export type DrawLabelsPropsType = {
  space: CanvasRenderingContext2D;
  referenceX: number;
  referenceY: number;
  celestialBodies: CelestialBodiesType;
  scale: ValueInterface;
};

/**
 * Renders text labels for celestial bodies onto a 2D canvas.
 *
 * **Mathematical Explanation:**
 *
 * The **position of each label** is computed using:
 * $$
 * x = a \cos(\theta) - f
 * $$
 * $$
 * y = b \sin(\theta)
 * $$
 * followed by converting to pixel coordinates:
 * $$
 * x_{px} = \text{referenceX} + \text{distanceToPixels}(x, \text{scale})
 * $$
 * $$
 * y_{px} = \text{referenceY} + \text{distanceToPixels}(y, \text{scale})
 * $$
 * where:
 * - $a$ is the **semi-major axis**.
 * - $b = a\sqrt{1 - e^2}$ is the **semi-minor axis**.
 * - $\theta$ is the **true anomaly**.
 * - $f = e \cdot a$ is the **focus shift**.
 * - $x, y$ are **real-world coordinates**.
 * - $x_{px}, y_{px}$ are **pixel coordinates**.
 *
 * The label is positioned above the celestial body:
 * $$
 * y_{label} = y_{px} - \text{distanceToPixels}(r, \text{scale}) - 24
 * $$
 * ensuring that text does not overlap the object.
 *
 * @param {DrawLabelsPropsType} props - Object containing rendering parameters.
 * @param {CanvasRenderingContext2D} props.space - The 2D rendering context of the canvas.
 * @param {number} props.referenceX - The x-coordinate of the system center in pixels.
 * @param {number} props.referenceY - The y-coordinate of the system center in pixels.
 * @param {CelestialBodiesType} props.celestialBodies - Array of celestial bodies with orbital parameters.
 * @param {ValueInterface} props.scale - The scale factor converting real-world units to pixels.
 * @returns {void} This function does not return a value; it renders text labels onto the canvas.
 *
 * @example
 * ```ts
 * const celestialBodies: CelestialBodiesType = [
 *   {
 *     name: 'Earth',
 *     a: { value: 1, unit: 'AU' },
 *     e: 0.0167,
 *     radius: { value: 6371, unit: 'km' },
 *     angle: Math.PI / 2,
 *     miA: 1 * Math.sqrt(1 - 0.0167 ** 2), // Semi-minor axis
 *     focus_x: 0.0167 * 1 // Focus shift
 *   }
 * ];
 *
 * drawLabels({
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
export const drawLabels = (props: DrawLabelsPropsType): void => {
  const { space, referenceX, referenceY, scale, celestialBodies } = props;

  space.fillStyle = '#47B8BE';
  space.font = CANVAS_LABEL_FONT;
  space.textAlign = 'center';

  celestialBodies.forEach((body: CelestialBodyType) => {
    const { a, miA = 1, angle, focus_x = 0, name, radius } = body;
    const normalizedA = convertDistance(a, 'AU');
    const x = normalizedA.value * Math.cos(angle) - focus_x;
    const y = miA * Math.sin(angle);
    const xPX =
      referenceX +
      distanceToPixels({ value: x, unit: normalizedA.unit }, scale);
    const yPX =
      referenceY +
      distanceToPixels({ value: y, unit: normalizedA.unit }, scale);

    space.fillText(name, xPX, yPX - distanceToPixels(radius, scale) - 24);
  });
};
