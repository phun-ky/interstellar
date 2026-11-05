import { OPTIONS_UI } from '../canvas/config/hud';

import { ArrowLabelBoxType, drawArrow } from './utils/draw-arrow';
import { getAngleToViewport } from './utils/get-angle-to-viewport';
import { ArrowBoundsType, getArrowPosition } from './utils/get-arrow-position';
import { isOffScreen } from './utils/is-off-screen';

/** Arrows closer than this (in pixels) along the viewport edge are merged into one. */
const ARROW_MERGE_DISTANCE = 32;

// eslint-disable-next-line import/no-unused-modules
export type DrawDirectionalArrowsPropsType = {
  space: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  /** How many of the nearest off-screen objects get an arrow. Defaults to `OPTIONS_UI.arrowHeadsCount`. */
  count?: number;
  /** HUD panels over the canvas. Bodies behind one count as off screen, arrows stop outside them, and labels avoid them. */
  obstacles?: ArrowBoundsType[];
};

type ArrowGroupType = {
  angle: number;
  x: number;
  y: number;
  names: string[];
};

/**
 * Draws directional arrows towards the nearest celestial bodies that are off-screen.
 *
 * The candidates are the bodies drawn in the current frame (`globalThis.NEAREST_BODIES`),
 * so hidden bodies (e.g. moons when zoomed out, or comets when toggled off) are left out.
 * Off-screen bodies are sorted by their distance from the **center of the viewport**,
 * and the nearest `count` of them get an arrow at the viewport edge pointing towards them.
 *
 * Bodies in (almost) the same direction, like the stars of a multiple star system,
 * share one arrow, labelled with the nearest body's name and how many more it covers
 * (e.g. `Alpha Centauri A +2`). Labels that would overlap are moved apart.
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
 *     count: 10
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
    count = OPTIONS_UI.arrowHeadsCount,
    obstacles = []
  } = props;
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  const nearest = Object.values(globalThis.NEAREST_BODIES)
    .filter(
      ({ x, y }) =>
        isOffScreen(x, y, canvasWidth, canvasHeight) ||
        obstacles.some(
          (o) => x >= o.left && x <= o.right && y >= o.top && y <= o.bottom
        )
    )
    .map(({ x, y, name }) => ({
      name,
      distance: Math.hypot(x - centerX, y - centerY),
      angle: getAngleToViewport(x, y, centerX, centerY)
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, Math.max(0, count));
  // Merge arrows that would overlap at the viewport edge, nearest body first
  const groups: ArrowGroupType[] = [];

  nearest.forEach(({ name, angle }) => {
    const { x, y } = getArrowPosition(
      angle,
      canvasWidth,
      canvasHeight,
      obstacles
    );
    const group = groups.find(
      (g) => Math.hypot(g.x - x, g.y - y) < ARROW_MERGE_DISTANCE
    );

    if (group) group.names.push(name);
    else groups.push({ angle, x, y, names: [name] });
  });

  // Panels count as taken, so labels are nudged away from them
  const occupiedLabels: ArrowLabelBoxType[] = obstacles.map((o) => ({ ...o }));

  space.save();

  groups.forEach(({ angle, names }) => {
    const [first, ...rest] = names;
    const label = rest.length ? `${first} +${rest.length}` : first;

    drawArrow(
      space,
      angle,
      canvasWidth,
      canvasHeight,
      label,
      occupiedLabels,
      obstacles
    );
  });

  space.restore();
};
