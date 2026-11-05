import { OrbitingBodyType } from '../../../types/orbiting-bodies';
import { CANVAS_COLORS } from '../../canvas/config/ui';
import { getBodyKind } from '../utils/body-catalog';

type OrbitStyleType = {
  /** Stroke colour; any CSS colour. */
  color: string;
  /** Opacity the line is drawn with. */
  alpha: number;
  /** Line width, in pixels. */
  width: number;
};

/**
 * How each type of body's orbit is drawn. Teal is the HUD's structure colour,
 * so the main bodies get it; smaller bodies step down to fainter teal and grey,
 * and comets get one cool hue of their own. Amber stays reserved for HUD
 * highlights (the lock reticle, arrows).
 */
const ORBIT_STYLES: Record<string, OrbitStyleType> = {
  star: { color: CANVAS_COLORS.teal, alpha: 0.35, width: 1 },
  system: { color: CANVAS_COLORS.teal, alpha: 0.35, width: 1 },
  planet: { color: CANVAS_COLORS.teal, alpha: 0.5, width: 1 },
  dwarf: { color: CANVAS_COLORS.grey, alpha: 0.35, width: 1 },
  moon: { color: CANVAS_COLORS.teal, alpha: 0.28, width: 1 },
  asteroid: { color: CANVAS_COLORS.grey, alpha: 0.3, width: 1 },
  comet: { color: CANVAS_COLORS.comet, alpha: 0.45, width: 1 }
};

/**
 * Picks how a body's orbit (or trail) is drawn: by type, except for the locked
 * body, whose orbit is drawn brighter and in its own colour so it stands out.
 *
 * Dwarf planets (Ceres, Pluto) are in the planet dataset but drawn like
 * asteroids, since their `category` is `planetoid`.
 *
 * @param {OrbitingBodyType} body - The body whose orbit is drawn.
 * @returns {OrbitStyleType} The colour, opacity and line width to use.
 *
 * @example
 * ```ts
 * const { color, alpha, width } = getOrbitStyle(earth);
 * ```
 */
export const getOrbitStyle = (body: OrbitingBodyType): OrbitStyleType => {
  const locked = globalThis.LOCKED_CELESTIAL_BODY;

  if (locked && locked.id === body.id) {
    const color =
      'display' in body && body.display?.color
        ? body.display.color
        : CANVAS_COLORS.teal;

    return { color, alpha: 0.9, width: 1.5 };
  }

  const kind =
    'category' in body && body.category === 'planetoid'
      ? 'dwarf'
      : (getBodyKind(body.id) ?? 'planet');

  return ORBIT_STYLES[kind] ?? ORBIT_STYLES.planet;
};
