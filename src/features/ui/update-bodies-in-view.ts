import { ValueInterface } from '@interstellar-tools/types';

import { BodiesInViewport } from '../../components/BodiesInViewport';
import { Interval } from '../../lib/classes/Interval';
import { getViewportSize } from '../canvas/get-viewport-size';

import { getBodiesInView } from './get-bodies-in-view';

type UpdateBodiesInViewPropsType = {
  scale: ValueInterface;
  canvas: HTMLCanvasElement;
};

export const updateBodiesInView = (props: UpdateBodiesInViewPropsType) => {
  const { scale, canvas } = props;
  const inViewportElement = document.getElementById('in-viewport');

  if (!inViewportElement) return;

  globalThis.INTERVAL_IN_VIEWPORT = new Interval(() => {
    const { width, height } = getViewportSize(canvas);

    // Rebuilt from the bodies drawn this frame, so bodies no longer drawn drop out
    globalThis.BODIES_IN_VIEWPORT = new Set(
      getBodiesInView({
        tracked: globalThis.NEAREST_BODIES,
        width,
        height,
        scale,
        locked: globalThis.LOCKED_CELESTIAL_BODY
      })
    );
    inViewportElement.innerHTML = BodiesInViewport({
      bodies: globalThis.BODIES_IN_VIEWPORT
    });
  }, 2000);

  globalThis.INTERVAL_IN_VIEWPORT.start();
};
