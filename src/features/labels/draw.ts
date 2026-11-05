import {
  CelestialBodiesType,
  CelestialBodyType,
  ValueInterface
} from '@interstellar-tools/types';

import { distanceToPixels } from '../../utils/distance/distance-to-pixels';
import {
  CANVAS_COLORS,
  CANVAS_LABEL_FONT,
  setLabelLetterSpacing
} from '../canvas/config/ui';
import { getBodyPosition } from '../celestial-bodies/utils/get-body-position';

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
 *     a: { value: 1, unit: 'au' },
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
  const paddingX = 8;
  const boxHeight = 20;
  const gap = 24; // Distance between the body and the bottom of its label

  space.save();
  space.font = CANVAS_LABEL_FONT;
  setLabelLetterSpacing(space);
  space.textAlign = 'center';
  space.textBaseline = 'middle';
  space.lineWidth = 1;

  celestialBodies.forEach((body: CelestialBodyType) => {
    const { name, radius } = body;
    const { x, y } = getBodyPosition(body);
    const xPX = referenceX + distanceToPixels(x, scale);
    const yPX = referenceY + distanceToPixels(y, scale);
    const text = name.toUpperCase();
    const boxWidth = space.measureText(text).width + 2 * paddingX;
    const boxX = Math.round(xPX - boxWidth / 2) + 0.5;
    const boxY =
      Math.round(yPX - distanceToPixels(radius, scale) - gap - boxHeight) + 0.5;

    // Leader line from the bottom of the label to the body
    space.strokeStyle = CANVAS_COLORS.leader;
    space.beginPath();
    space.moveTo(xPX, boxY + boxHeight);
    space.lineTo(xPX, yPX);
    space.stroke();

    // Label box: panel fill with a teal hairline
    space.fillStyle = CANVAS_COLORS.panel;
    space.fillRect(boxX, boxY, boxWidth, boxHeight);
    space.strokeStyle = CANVAS_COLORS.line;
    space.strokeRect(boxX, boxY, boxWidth, boxHeight);

    space.fillStyle = CANVAS_COLORS.text;
    space.fillText(text, xPX, boxY + boxHeight / 2);
  });
  space.restore();
};
