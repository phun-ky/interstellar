import { CelestialBodyType, ValueInterface } from '@interstellar-tools/types';

import {
  THRESHOLD_MOON_RENDER,
  THRESHOLD_PLANET_RENDER
} from '../../config/constants';

import { isInViewport } from './utils/is-in-viewport';

/** How many bodies the "In view" panel lists. */
export const MAX_BODIES_IN_VIEW = 6;

type TrackedBodyType = {
  id: string;
  x: number;
  y: number;
  category: string;
  parent: string | undefined;
};

type GetBodiesInViewPropsType = {
  /** The bodies drawn in the current frame (`globalThis.NEAREST_BODIES`). */
  tracked: Record<string, TrackedBodyType>;
  /** The viewport size, in CSS pixels. */
  width: number;
  height: number;
  scale: ValueInterface;
  locked: CelestialBodyType | null;
};

/**
 * Lists the bodies for the "In view" panel, by id: planets (when planets are
 * drawn) and the moons of a locked planet (when moons are drawn) that are on
 * screen, nearest to the centre first.
 *
 * The list is built from scratch from the bodies drawn in the current frame,
 * so a body that is no longer drawn (moons after zooming out, comets switched
 * off) drops out.
 *
 * @param {GetBodiesInViewPropsType} props - The drawn bodies, viewport, scale and lock.
 * @returns {string[]} Up to `MAX_BODIES_IN_VIEW` body ids.
 *
 * @example
 * ```ts
 * const ids = getBodiesInView({ tracked: globalThis.NEAREST_BODIES, width, height, scale: SCALE, locked: null });
 * ```
 */
export const getBodiesInView = (props: GetBodiesInViewPropsType): string[] => {
  const { tracked, width, height, scale, locked } = props;
  const showPlanets = scale.value > THRESHOLD_PLANET_RENDER;
  const showMoonsOf =
    scale.value > THRESHOLD_MOON_RENDER && locked?.category.includes('planet')
      ? locked.id
      : null;

  return Object.values(tracked)
    .filter(
      ({ category, parent }) =>
        (showPlanets && category.includes('planet')) ||
        (showMoonsOf !== null &&
          category.includes('satellite') &&
          parent === showMoonsOf)
    )
    .filter(({ x, y }) => isInViewport(x, y, width, height))
    .sort(
      (a, b) =>
        Math.hypot(a.x - width / 2, a.y - height / 2) -
        Math.hypot(b.x - width / 2, b.y - height / 2)
    )
    .slice(0, MAX_BODIES_IN_VIEW)
    .map(({ id }) => id);
};
