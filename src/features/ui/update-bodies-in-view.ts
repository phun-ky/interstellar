import { BodiesInViewport } from '../../components/BodiesInViewport';
import {
  THRESHOLD_MOON_RENDER,
  THRESHOLD_PLANET_RENDER
} from '../../config/constants';
import { Interval } from '../../lib/classes/Interval';

import { isInViewport } from './utils/is-in-viewport';

export const updateBodiesInView = (props) => {
  const { scale, canvas } = props;
  const inViewportElement = document.getElementById('in-viewport');

  if (!inViewportElement) return;

  globalThis.INTERVAL_IN_VIEWPORT = new Interval(() => {
    const filterBodies = (category: string, parentFilter?: string) =>
      Object.keys(globalThis.NEAREST_BODIES)
        .filter((name: string) => {
          const body = globalThis.NEAREST_BODIES[name];

          return (
            body &&
            body.category.includes(category) &&
            (parentFilter ? body.parent === parentFilter : true)
          );
        })
        .map((name) => globalThis.NEAREST_BODIES[name]);

    if (scale.value > THRESHOLD_PLANET_RENDER) {
      const bodies = filterBodies('planet');

      bodies.forEach(({ x, y, name }) => {
        if (isInViewport(x, y, canvas.width, canvas.height)) {
          globalThis.BODIES_IN_VIEWPORT.add(name);
        } else {
          globalThis.BODIES_IN_VIEWPORT.delete(name);
        }
      });
    }

    if (
      scale.value > THRESHOLD_MOON_RENDER &&
      globalThis.LOCKED_CELESTIAL_BODY &&
      globalThis.LOCKED_CELESTIAL_BODY.category.includes('planet')
    ) {
      const bodies = filterBodies(
        'satellite',
        globalThis.LOCKED_CELESTIAL_BODY.id
      );

      bodies.forEach(({ x, y, name }) => {
        if (isInViewport(x, y, canvas.width, canvas.height)) {
          globalThis.BODIES_IN_VIEWPORT.add(name);
        } else {
          globalThis.BODIES_IN_VIEWPORT.delete(name);
        }
      });
    }

    inViewportElement.innerHTML = BodiesInViewport({
      bodies: globalThis.BODIES_IN_VIEWPORT
    });
  }, 2000);

  globalThis.INTERVAL_IN_VIEWPORT.start();
};
