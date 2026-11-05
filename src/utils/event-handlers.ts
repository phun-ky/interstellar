import { STARS } from '@interstellar-tools/constants';
import { CelestialBodyType } from '@interstellar-tools/types';

import { MAX_SCALE, MIN_SCALE, SCALE, ZOOM_FACTOR } from '../config/constants';
import { setUIOptions } from '../config/set-UI-options';
import { offsetX, offsetY } from '../features/canvas/config/camera';
import { OPTIONS_UI } from '../features/canvas/config/hud';
import { SPEED_MODE } from '../features/canvas/config/time-step';
import { getViewportSize } from '../features/canvas/get-viewport-size';
import { setupCanvas } from '../features/canvas/setup-canvas';
import {
  findBodyById,
  getBodyKind
} from '../features/celestial-bodies/utils/body-catalog';
import { getBodyPosition } from '../features/celestial-bodies/utils/get-body-position';
import { updateMinimap } from '../features/minimap/update-minimap';
import { generateStarfield } from '../features/starfield/generate-star-field';
import { initializeStarfield } from '../features/starfield/initialize-starfield';
import { hideBodyInfo } from '../features/ui/body-info';
import { focusOn, getBodyAtPoint, lockOn } from '../features/ui/lock-on';
import { resetToNow } from '../features/ui/reset-to-now';
import { updateScaleDisplay } from '../features/ui/update-scale-display';
import { updateSimulationStatus } from '../features/ui/update-simulation-status';
import { EventType } from '../types/native';

import { distanceToPixels } from './distance/distance-to-pixels';
import { getParentBodyOffset } from './offset/get-parent-body-offset';
import { normalizeParentOffsetPrev } from './offset/normalize-parent-offset-prev';
import { calculateScale } from './scale/calculate-scale';
import { throttle, throttleAsync } from './throttle';

/** How far the pointer may move between press and release for a click, in pixels. */
const CLICK_TOLERANCE_PX = 5;

let isDragging = false;
// Whether the user held the simulation, so showing the tab again doesn't resume it
let isHeldByUser = false;
let lastMouseX: number;
let lastMouseY: number;

// eslint-disable-next-line import/no-unused-modules
export type AttachEventHandlersPropsType = {
  space: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
};

const scaleDisplay = document.getElementById('scaleDisplay') as HTMLElement;

export const attachEventHandlers = (props: AttachEventHandlersPropsType) => {
  const { canvas } = props;

  // **Smooth Zooming**
  canvas.addEventListener('wheel', (event) => {
    event.preventDefault();

    const newScale = calculateScale(event, SCALE);

    if (newScale < MIN_SCALE || newScale > MAX_SCALE) return;

    const prevScale = { value: SCALE.value };

    SCALE.value = newScale;

    const zoomEvent = new CustomEvent('ZoomChanged', { detail: { SCALE } });

    document.dispatchEvent(zoomEvent);

    if (globalThis.LOCKED_CELESTIAL_BODY) {
      // Get the locked body's position
      //Calculate the body's position in pixel coordinates
      const { x, y } = getBodyPosition(globalThis.LOCKED_CELESTIAL_BODY);

      if (!x || !y) return;

      const { parentOffsetX, parentOffsetY } = getParentBodyOffset(
        globalThis.LOCKED_CELESTIAL_BODY.parent,
        SCALE
      );
      const prevX = distanceToPixels(x, prevScale);
      const prevY = distanceToPixels(y, prevScale);
      const newX = distanceToPixels(x, SCALE);
      const newY = distanceToPixels(y, SCALE);

      offsetX.value += normalizeParentOffsetPrev(parentOffsetX, prevX, newX);
      offsetY.value += normalizeParentOffsetPrev(parentOffsetY, prevY, newY);
    } else {
      // Regular zoom behavior when no locked object
      // Mouse position relative to the canvas, which starts below the header
      const { left, top } = canvas.getBoundingClientRect();
      const { width, height } = getViewportSize(canvas);
      const mouseX = event.clientX - left;
      const mouseY = event.clientY - top;
      const worldXBefore =
        (mouseX - width / 2 - offsetX.value) / prevScale.value;
      const worldYBefore =
        (mouseY - height / 2 - offsetY.value) / prevScale.value;
      const worldXAfter = (mouseX - width / 2 - offsetX.value) / SCALE.value;
      const worldYAfter = (mouseY - height / 2 - offsetY.value) / SCALE.value;

      offsetX.value += (worldXAfter - worldXBefore) * SCALE.value;
      offsetY.value += (worldYAfter - worldYBefore) * SCALE.value;
    }

    updateScaleDisplay(scaleDisplay, SCALE);
  });

  // **Mouse Drag for Panning**
  canvas.addEventListener('mousedown', (event) => {
    if (
      globalThis.LOCKED_CELESTIAL_BODY == null ||
      !globalThis.LOCKED_CELESTIAL_BODY
    ) {
      globalThis.IS_ZOOMING_OR_PANNING = true;

      if (globalThis.ZOOM_PAN_TIMEOUT)
        clearTimeout(globalThis.ZOOM_PAN_TIMEOUT);

      isDragging = true;
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;
    }
  });

  canvas.addEventListener('mousemove', (event) => {
    if (
      isDragging &&
      (globalThis.LOCKED_CELESTIAL_BODY == null ||
        !globalThis.LOCKED_CELESTIAL_BODY)
    ) {
      const dx = event.clientX - lastMouseX;
      const dy = event.clientY - lastMouseY;

      offsetX.value += dx;
      offsetY.value += dy;
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;
    }
  });

  canvas.addEventListener('mouseup', () => {
    globalThis.ZOOM_PAN_TIMEOUT = window.setTimeout(() => {
      globalThis.IS_ZOOMING_OR_PANNING = false; // Re-enable trails after panning stops
    }, 500);
    isDragging = false;
  });

  canvas.addEventListener('mouseleave', () => {
    globalThis.ZOOM_PAN_TIMEOUT = window.setTimeout(() => {
      globalThis.IS_ZOOMING_OR_PANNING = false; // Re-enable trails after panning stops
    }, 500);
    isDragging = false;
  });

  document.addEventListener('ZoomChanged', (event: Event) => {
    const { SCALE: scale } = (event as CustomEvent).detail;

    globalThis.IS_ZOOMING_OR_PANNING = true;

    if (globalThis.ZOOM_PAN_TIMEOUT) clearTimeout(globalThis.ZOOM_PAN_TIMEOUT); // Reset timer

    updateMinimap(STARS, scale, offsetX, offsetY);

    globalThis.ZOOM_PAN_TIMEOUT = window.setTimeout(() => {
      globalThis.IS_ZOOMING_OR_PANNING = false; // Re-enable trails after zooming stops
    }, 500);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      globalThis.PAUSE = true; // Pause simulation when tab is hidden
    } else if (!isHeldByUser) {
      globalThis.PAUSE = false; // Resume simulation when tab is visible
    }
  });

  // **Resize Event**
  globalThis.addEventListener(
    'resize',
    throttle(() => {
      globalThis.IS_ZOOMING_OR_PANNING = true;

      if (globalThis.ZOOM_PAN_TIMEOUT)
        clearTimeout(globalThis.ZOOM_PAN_TIMEOUT); // Reset timer

      setupCanvas();
    })
  );

  globalThis.addEventListener(
    'resize',
    throttleAsync(async () => {
      const { width, height } = getViewportSize(canvas);

      generateStarfield(width, height);
      await initializeStarfield(width, height, SCALE);
    })
  );

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hideBodyInfo();

    if (event.ctrlKey || event.metaKey) {
      // Ctrl on Windows/Linux, Cmd on macOS
      if (event.key === '=' || event.key === '+') {
        // Ctrl +
        event.preventDefault();
        zoomIn();
      } else if (event.key === '-') {
        // Ctrl -
        event.preventDefault();
        zoomOut();
      }
    }
  });

  const zoomIn = () => {
    const zoomEvent = new CustomEvent('ZoomChanged', { detail: { SCALE } });

    document.dispatchEvent(zoomEvent);
    SCALE.value *= ZOOM_FACTOR;
  };
  const zoomOut = () => {
    const zoomEvent = new CustomEvent('ZoomChanged', { detail: { SCALE } });

    document.dispatchEvent(zoomEvent);
    SCALE.value /= ZOOM_FACTOR;
  };
  const trajectoryTypeDropdown = document.getElementById(
    'toggleTrajectoryType'
  ) as HTMLSelectElement;

  trajectoryTypeDropdown.addEventListener(
    'change',
    (event: EventType<HTMLSelectElement>) => {
      globalThis.TRAJECTORY_TYPE = event.target.value as 'orbits' | 'trails';

      if (globalThis.TRAJECTORY_TYPE === 'orbits') {
        Object.keys(globalThis.TRAJECTORY_TRAILS).forEach((key) => {
          globalThis.TRAJECTORY_TRAILS[key] = []; // Clear stored trail data
        });
      }
    }
  );

  const pauseButtonElement = document.getElementById(
    'pause'
  ) as HTMLButtonElement;

  pauseButtonElement.addEventListener('click', () => {
    globalThis.PAUSE = !globalThis.PAUSE;
    isHeldByUser = globalThis.PAUSE;
    updateSimulationStatus(globalThis.PAUSE);

    // The animation loop keeps running while held, so it isn't restarted here
    if (!globalThis.PAUSE) {
      globalThis.INTERVAL_IN_VIEWPORT.resume();
    } else {
      globalThis.INTERVAL_IN_VIEWPORT.pause();
    }
  });

  document
    .getElementById('resetToNow')
    ?.addEventListener('click', () => resetToNow());

  const lockOnDropdown = document.getElementById('lockOn') as HTMLSelectElement;

  lockOnDropdown.addEventListener(
    'change',
    (event: EventType<HTMLSelectElement>) => {
      const value = event?.target?.value;
      const body = findBodyById(value);

      if (value === 'noLock' || !body || getBodyKind(body.id) === 'system') {
        lockOn(null);
      } else {
        focusOn(body as CelestialBodyType);
      }
    }
  );

  // **Click a body to lock on it**, unless the pointer moved (a drag)
  let pointerDownAt: { x: number; y: number } | null = null;

  canvas.addEventListener('pointerdown', (event) => {
    pointerDownAt = { x: event.clientX, y: event.clientY };
  });

  canvas.addEventListener('click', (event) => {
    if (
      pointerDownAt &&
      Math.hypot(
        event.clientX - pointerDownAt.x,
        event.clientY - pointerDownAt.y
      ) > CLICK_TOLERANCE_PX
    ) {
      return;
    }

    const body = getBodyAtPoint(canvas, event.clientX, event.clientY);

    if (body) focusOn(body, true);
  });

  // Show a pointer over bodies, checked at most once per frame
  let hoverCheck: number | null = null;

  canvas.addEventListener('mousemove', (event) => {
    if (hoverCheck !== null) return;

    hoverCheck = requestAnimationFrame(() => {
      hoverCheck = null;
      canvas.style.cursor = getBodyAtPoint(canvas, event.clientX, event.clientY)
        ? 'pointer'
        : '';
    });
  });

  document.getElementById('bodyInfoClose')?.addEventListener('click', () => {
    hideBodyInfo();
  });

  const trajectoryCheckboxElement = document.getElementById(
    'toggleTrajectory'
  ) as HTMLInputElement;
  const moonsCheckboxElement = document.getElementById(
    'toggleMoons'
  ) as HTMLInputElement;
  const cometsCheckboxElement = document.getElementById(
    'toggleComets'
  ) as HTMLInputElement;
  const labelCheckboxElement = document.getElementById(
    'toggleLabels'
  ) as HTMLInputElement;
  const toggleArrowheadsElement = document.getElementById(
    'toggleArrowheads'
  ) as HTMLInputElement;
  const asteroidBeltsCheckboxElement = document.getElementById(
    'toggleAsteroidBelts'
  ) as HTMLInputElement;
  const asteroidsCheckboxElement = document.getElementById(
    'toggleAsteroids'
  ) as HTMLInputElement;
  const starfieldCheckboxElement = document.getElementById(
    'toggleStarfield'
  ) as HTMLInputElement;

  [
    trajectoryCheckboxElement,
    moonsCheckboxElement,
    cometsCheckboxElement,
    labelCheckboxElement,
    toggleArrowheadsElement,
    asteroidBeltsCheckboxElement,
    asteroidsCheckboxElement,
    starfieldCheckboxElement
  ].forEach((toggle) => {
    toggle.addEventListener('change', () => {
      setUIOptions({
        trajectoryCheckboxElement,
        moonsCheckboxElement,
        cometsCheckboxElement,
        labelCheckboxElement,
        toggleArrowheadsElement,
        asteroidBeltsCheckboxElement,
        asteroidsCheckboxElement,
        starfieldCheckboxElement
      });
    });
  });

  const arrowCountElement = document.getElementById(
    'arrowCount'
  ) as HTMLSelectElement;

  arrowCountElement.addEventListener('change', () => {
    OPTIONS_UI.arrowHeadsCount = Number(arrowCountElement.value);
  });

  const speedModeElement = document.getElementById(
    'speedMode'
  ) as HTMLSelectElement;

  speedModeElement.addEventListener('change', () => {
    const mode = speedModeElement.value;
    const speedModeEvent = new CustomEvent('SpeedModeChanged', {
      detail: { mode }
    });

    document.dispatchEvent(speedModeEvent);
  });

  document.addEventListener('SpeedModeChanged', (event: Event) => {
    const { mode } = (event as CustomEvent).detail;

    SPEED_MODE.value = mode;
  });
};
