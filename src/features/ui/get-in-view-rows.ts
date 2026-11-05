import { CelestialBodyType } from '@interstellar-tools/types';

import { findBodyById } from '../celestial-bodies/utils/body-catalog';
import { getBodyPosition } from '../celestial-bodies/utils/get-body-position';

/** Three significant digits: moons (0.00282 au) and planets (1.61 au) both read well. */
const DISTANCE_FORMAT = new Intl.NumberFormat('en', {
  maximumSignificantDigits: 3,
  useGrouping: false
});

type InViewRowType = {
  id: string;
  name: string;
  /** Distance from the body's parent in au, to three significant digits, or `Lock` for the locked body. */
  distance: string;
  isLocked: boolean;
};

/**
 * The rows of the "In view" panel, for bodies given by id: name, distance from
 * the parent (the Sun for planets, the planet for moons) and whether it is the
 * locked body. Unknown ids and star systems are skipped. Looking bodies up by
 * id keeps bodies that share a name apart (Europa the moon, `europa`, and
 * Europa the asteroid, `52-europa`).
 *
 * @param {Iterable<string>} ids - Body ids, in display order.
 * @returns {InViewRowType[]} One row per known body.
 *
 * @example
 * ```ts
 * getInViewRows(['earth', 'mars']);
 * ```
 */
export const getInViewRows = (ids: Iterable<string>): InViewRowType[] =>
  [...ids]
    .map((id) => findBodyById(id))
    .filter((body) => body !== undefined && 'radius' in body)
    .map((body) => {
      const { id, name } = body as CelestialBodyType;
      const isLocked = globalThis.LOCKED_CELESTIAL_BODY?.id === id;
      const { x, y } = getBodyPosition(body as CelestialBodyType);

      return {
        id,
        name,
        distance: isLocked
          ? 'Lock'
          : DISTANCE_FORMAT.format(Math.hypot(x.value, y.value)),
        isLocked
      };
    });
