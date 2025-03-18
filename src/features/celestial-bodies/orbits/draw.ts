/* eslint-disable no-console */
/* eslint-disable import/no-unused-modules */
import { TRAIL_SCALING_FACTOR } from '../../../config/constants';
import {
  CelestialBodiesType,
  CelestialBodyType
} from '../../../types/celestial-bodies';
import { DistanceInterface, ValueInterface } from '../../../types/distance';
import { distanceToPixels } from '../../../utils/distance/distance-to-pixels';
import { convertTemporalUnit } from '../../../utils/temporal/convert-temporal-unit';
import { getBodyPosition } from '../utils/get-body-position';

export type DrawOrbitsPropsType = {
  celestialBodies: CelestialBodiesType;
  toggled: boolean;
  space: CanvasRenderingContext2D;
  referenceX: number;
  referenceY: number;
  scale: ValueInterface;
};

/**
 * Renders the **orbital paths** of celestial bodies around a galactic center onto a 2D canvas.
 *
 * ## **Mathematical Explanation:**
 * A celestial body follows an **elliptical orbit** with the galactic center at one of its foci.
 * The **orbit path** consists of discrete points $(x, y)$, which are calculated as:
 * $$
 * x = a \cos(\theta) - f
 * $$
 * $$
 * y = b \sin(\theta)
 * $$
 * where:
 * - $a$ is the **semi-major axis** in real-world units (e.g., AU or light-years).
 * - $b$ is the **semi-minor axis** in real-world units.
 * - $\theta$ is the **current orbital position** (true anomaly).
 * - $f = e \cdot a$ is the **focus shift** (due to eccentricity), calculated in real-world units.
 * - $(x, y)$ represents the **position of a point** on the orbit in real-world units.
 *
 * The **focus shift** accounts for the elliptical nature of the orbit, ensuring accurate rendering.
 *
 * @param {DrawOrbitsPropsType} props - Contains orbital data and rendering parameters.
 * @returns {void} This function does not return a value; it renders the orbits directly onto the canvas.
 *
 * @example
 * ```ts
 * drawOrbits({
 *   space: ctx,
 *   referenceX: 500,
 *   referenceY: 500,
 *   toggled: true,
 *   celestialBodies,
 *   scale: { value: 1 }
 * });
 * ```
 *
 * @see [Elliptical Orbits](https://en.wikipedia.org/wiki/Ellipse)
 */
export const drawOrbits = (props: DrawOrbitsPropsType): void => {
  const { celestialBodies, toggled, space, referenceX, referenceY, scale } =
    props;

  // Skip rendering if orbits are toggled off
  if (!toggled) return;

  celestialBodies.forEach((body: CelestialBodyType) => {
    // Skip rendering for celestial bodies without an orbit path
    if (!body.orbitPath) return;

    // Validate orbit path
    if (!Array.isArray(body.orbitPath)) {
      console.warn(
        `Star ${body.name} has an invalid orbitPath. Skipping rendering.`
      );

      return;
    }

    if (body.orbitPath.length === 0) {
      console.warn(
        `Celestial body ${body.name} has an empty orbitPath. Skipping rendering.`
      );

      return;
    }

    const { name, period, orbitPath } = body;

    if (globalThis.TRAJECTORY_TYPE === 'orbits') {
      // Begin drawing the orbit path
      space.beginPath();
      space.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      space.lineWidth = 1;

      orbitPath.forEach(({ x, y }, index) => {
        // Convert real-world coordinates to pixels

        const pointX =
          referenceX + distanceToPixels({ value: x, unit: 'AU' }, scale);
        const pointY =
          referenceY + distanceToPixels({ value: y, unit: 'AU' }, scale);

        // Move to the first point, then draw lines to subsequent points
        if (index === 0) space.moveTo(pointX, pointY);
        else space.lineTo(pointX, pointY);
      });

      // Close and stroke the path
      space.closePath();
      space.stroke();
    } else if (globalThis.TRAJECTORY_TYPE === 'trails') {
      // **Disable trails if zooming or panning**
      if (globalThis.IS_ZOOMING_OR_PANNING) {
        try {
          globalThis.TRAJECTORY_TRAILS[name] = [];
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          return;
        }

        return;
      }

      let periodInDays = convertTemporalUnit(period, 'days').value;

      if (periodInDays < 1) periodInDays = 1; // Prevent division by zero errors

      const maxTrailLength = periodInDays * TRAIL_SCALING_FACTOR;
      const { x, y } = getBodyPosition(body);
      const xPX = distanceToPixels(x as DistanceInterface, scale);
      const yPX = distanceToPixels(y as DistanceInterface, scale);
      const bodyX = referenceX + xPX;
      const bodyY = referenceY + yPX;

      // **Trajectory Trails Mode**
      if (!globalThis.TRAJECTORY_TRAILS[name]) {
        globalThis.TRAJECTORY_TRAILS[name] = [];
      }

      // Store latest positions (limit to 100 past positions)
      globalThis.TRAJECTORY_TRAILS[name].push({ x: bodyX, y: bodyY });

      if (globalThis.TRAJECTORY_TRAILS[name].length > maxTrailLength) {
        globalThis.TRAJECTORY_TRAILS[name].shift(); // Remove oldest point
      }

      // Draw the trail with fading and thickness effect
      for (let i = 0; i < globalThis.TRAJECTORY_TRAILS[name].length - 1; i++) {
        const start = globalThis.TRAJECTORY_TRAILS[name][i];
        const end = globalThis.TRAJECTORY_TRAILS[name][i + 1];
        const alpha = (i + 1) / globalThis.TRAJECTORY_TRAILS[name].length; // Fade effect
        const lineWidth = 1 + 2 * alpha; // Thicker at the end, thinner at the start

        space.beginPath();
        space.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        space.lineWidth = lineWidth;
        space.moveTo(start.x, start.y);
        space.lineTo(end.x, end.y);
        space.stroke();
        space.closePath();
      }
    }
  });
};
