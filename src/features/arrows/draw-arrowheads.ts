import { drawArrow } from './utils/draw-arrow';
import { getAngleToViewport } from './utils/get-angle-to-viewport';
import { isOffScreen } from './utils/is-off-screen';

// eslint-disable-next-line import/no-unused-modules
export type DrawDirectionalArrowsPropsType = {
  space: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  referenceX: number;
  referenceY: number;
  type?: 'stars' | 'planets' | 'moons' | 'comets';
  system?: string;
};

/**
 * Draws directional arrows for celestial bodies that are off-screen.
 *
 * This function checks the positions of celestial bodies (stars, planets, moons, or comets)
 * within `globalThis.NEAREST_BODIES`. If any body is off-screen, an arrow is drawn
 * pointing in its direction from the center of the viewport.
 *
 * The function categorizes bodies based on the `type` parameter and filters them accordingly.
 * If `type` is `moons`, an additional `system` parameter is required to determine the host planet.
 *
 * @param {DrawDirectionalArrowsPropsType} props - The properties required for drawing arrows.
 * @returns {void}
 *
 * @example
 * ```ts
 * const canvas = document.getElementById('canvas') as HTMLCanvasElement;
 * const ctx = canvas.getContext('2d');
 * if (ctx) {
 *   drawDirectionalArrows({
 *     space: ctx,
 *     canvasWidth: canvas.width,
 *     canvasHeight: canvas.height,
 *     referenceX: canvas.width / 2,
 *     referenceY: canvas.height / 2,
 *     type: 'planets',
 *   });
 * }
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
 */
export const drawDirectionalArrows = (
  props: DrawDirectionalArrowsPropsType
): void => {
  const {
    space,
    canvasWidth,
    canvasHeight,
    referenceX,
    referenceY,
    type = 'stars',
    system
  } = props;
  const filterBodies = (category: string, systemFilter?: string) =>
    Object.keys(globalThis.NEAREST_BODIES)
      .filter((name: string) => {
        const body = globalThis.NEAREST_BODIES[name];

        return (
          body &&
          body.category.includes(category) &&
          (systemFilter ? body.system === systemFilter : true)
        );
      })
      .map((name) => globalThis.NEAREST_BODIES[name]);
  const bodies =
    type === 'moons' && typeof system === 'string'
      ? filterBodies('satellite', system)
      : filterBodies(type);

  bodies.forEach(({ x, y, name }) => {
    if (isOffScreen(x, y, canvasWidth, canvasHeight)) {
      const angle = getAngleToViewport(x, y, referenceX, referenceY);

      drawArrow(space, angle, canvasWidth, canvasHeight, name);
    }
  });
};
