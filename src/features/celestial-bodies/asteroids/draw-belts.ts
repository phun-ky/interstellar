import { TWO_PI } from '../../../config/constants';
import { AsteroidBeltsType } from '../../../types/asteroid-belts';
import { distanceToPixels } from '../../../utils/distance/distance-to-pixels';
import { OPTIONS_UI } from '../../canvas/config/hud';
import { CANVAS_LABEL_FONT } from '../../canvas/config/ui';

// eslint-disable-next-line import/no-unused-modules
export type DrawBeltsPropsType = {
  space: CanvasRenderingContext2D;
  centerX: number;
  centerY: number;
  scale: { value: number };
  asteroidBelts: AsteroidBeltsType;
};

/**
 * Draws asteroid belts on the canvas, including an optional label.
 *
 * This function iterates through the provided asteroid belts and renders each
 * as a filled circular ring, with an inner and outer radius representing the belt region.
 * If the `OPTIONS_UI.labels` flag is enabled, it also displays a label for each belt.
 *
 * The belt is rendered using two concentric arcs:
 * - The outer arc defines the full extent of the belt.
 * - The inner arc is drawn in reverse to create a cutout effect.
 *
 * @param {DrawBeltsPropsType} props - The properties required for rendering the asteroid belts.
 * @returns {void}
 *
 * @example
 * ```ts
 * drawBelts({
 *   space: ctx,
 *   centerX: canvas.width / 2,
 *   centerY: canvas.height / 2,
 *   scale: { value: 1 },
 *   asteroidBelts: [
 *     { name: 'Main Belt', innerRadius: 2.2, outerRadius: 3.2, opacity: 0.5, color: '#AAAAAA' }
 *   ]
 * });
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
 */
export const drawBelts = (props: DrawBeltsPropsType) => {
  const { space, centerX, centerY, scale, asteroidBelts } = props;

  space.save();

  asteroidBelts.forEach((belt) => {
    if (OPTIONS_UI.labels) {
      space.fillStyle = '#47B8BE';
      space.font = CANVAS_LABEL_FONT;
      space.textAlign = 'center';
      space.globalAlpha = 1;
      space.fillText(
        belt.name,
        centerX -
          distanceToPixels({ value: belt.innerRadius, unit: 'AU' }, scale),
        centerY -
          distanceToPixels({ value: belt.innerRadius, unit: 'AU' }, scale)
      );
    }

    space.beginPath();
    space.globalAlpha = belt.opacity;
    space.fillStyle = belt.color;

    // Outer boundary
    space.arc(
      centerX,
      centerY,
      distanceToPixels({ value: belt.outerRadius, unit: 'AU' }, scale),
      0,
      TWO_PI
    );

    // Inner boundary (cutout effect)
    space.arc(
      centerX,
      centerY,
      distanceToPixels({ value: belt.innerRadius, unit: 'AU' }, scale),
      0,
      TWO_PI,
      true
    );

    space.fill();
  });

  space.restore();
};
