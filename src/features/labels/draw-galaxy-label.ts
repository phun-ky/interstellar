/* eslint-disable import/no-unused-modules */

import { ValueInterface } from '../../types/distance';
import { GalaxyInterface } from '../../types/galaxies';
import { distanceToPixels } from '../../utils/distance/distance-to-pixels';
import { CANVAS_GALAXY_FONT, CANVAS_LABEL_FONT } from '../canvas/config/ui';

export type DrawGalaxyLabelPropsType = {
  space: CanvasRenderingContext2D;
  referenceX: number;
  referenceY: number;
  galaxy: GalaxyInterface;
  scale: ValueInterface;
};

/**
 * Renders the name of a galaxy and its central black hole onto a 2D canvas.
 *
 * **Rendering Details:**
 * - The **galaxy name** is displayed above the black hole.
 * - The **black hole name** is displayed slightly lower.
 * - Labels are centered relative to the reference coordinates.
 * - The vertical spacing is determined dynamically by:
 * $$
 * y_{label} = referenceY - \text{distanceToPixels}(r, \text{scale}) - offset
 * $$
 * where:
 * - $r$ is the **radius of the black hole**.
 * - `offset` is a fixed value to ensure proper label separation.
 *
 * @param {DrawGalaxyLabelPropsType} props - Object containing rendering parameters.
 * @param {CanvasRenderingContext2D} props.space - The 2D rendering context of the canvas.
 * @param {number} props.referenceX - The x-coordinate of the galaxy center in pixels.
 * @param {number} props.referenceY - The y-coordinate of the galaxy center in pixels.
 * @param {GalaxyInterface} props.galaxy - The galaxy data, including its name and black hole.
 * @param {ValueInterface} props.scale - The scale factor converting real-world units to pixels.
 * @returns {void} This function does not return a value; it renders text labels onto the canvas.
 *
 * @example
 * ```ts
 * const galaxy: GalaxyInterface = {
 *   name: 'Milky Way',
 *   blackHole: { name: 'Sagittarius A*', radius: { value: 0.08, unit: 'AU' } }
 * };
 *
 * drawGalaxyLabel({
 *   space: ctx,
 *   referenceX: 500,
 *   referenceY: 500,
 *   scale: { value: 50 },
 *   galaxy: galaxy
 * });
 * ```
 *
 * @see [Sagittarius A*](https://en.wikipedia.org/wiki/Sagittarius_A*)
 */
export const drawGalaxyLabel = (props: DrawGalaxyLabelPropsType): void => {
  const { space, referenceX, referenceY, scale, galaxy } = props;
  const { name, blackHole } = galaxy;
  const { radius } = blackHole;

  space.fillStyle = '#47B8BE';
  space.font = CANVAS_GALAXY_FONT;
  space.textAlign = 'center';

  space.fillText(
    name,
    referenceX,
    referenceY - distanceToPixels(radius, scale) - 56
  );

  space.font = CANVAS_LABEL_FONT;
  space.fillText(
    blackHole.name,
    referenceX,
    referenceY - distanceToPixels(radius, scale) - 24
  );
};
