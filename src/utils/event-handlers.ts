import { MAX_SCALE, MIN_SCALE, SCALE, ZOOM_FACTOR } from '../config/constants';
import { setUIOptions } from '../config/set-UI-options';
import { COMETS } from '../datasets/comets';
import { MOONS } from '../datasets/moons';
import { PLANETS } from '../datasets/planets';
import { STARS } from '../datasets/stars';
import {
  offsetCacheX,
  offsetCacheY,
  offsetX,
  offsetY
} from '../features/canvas/config/camera';
import { SPEED_MODE } from '../features/canvas/config/time-step';
import { setupCanvas } from '../features/canvas/setup-canvas';
import { getBodyPosition } from '../features/celestial-bodies/utils/get-body-position';
import { updateMinimap } from '../features/minimap/update-minimap';
import { generateStarfield } from '../features/starfield/generate-star-field';
import { initializeStarfield } from '../features/starfield/initialize-starfield';
import { updateScaleDisplay } from '../features/ui/update-scale-display';
import { CometsType } from '../types/comets';
import { MoonsType } from '../types/moons';
import { EventType } from '../types/native';
import { PlanetsType } from '../types/planets';
import { StarsType } from '../types/stars';

import { distanceToPixels } from './distance/distance-to-pixels';
import { getParentBodyOffset } from './offset/get-parent-body-offset';
import { normalizeParentOffset } from './offset/normalize-parent-offset';
import { normalizeParentOffsetPrev } from './offset/normalize-parent-offset-prev';
import { calculateScale } from './scale/calculate-scale';
import { throttle, throttleAsync } from './throttle';

let isDragging = false;
let lastMouseX: number;
let lastMouseY: number;

// eslint-disable-next-line import/no-unused-modules
export type AttachEventHandlersPropsType = {
  space: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  update: () => void;
  updateOrbits: (
    stars: StarsType,
    planets: PlanetsType,
    moons: MoonsType,
    comets: CometsType
  ) => void;
};

const scaleDisplay = document.getElementById('scaleDisplay') as HTMLElement;

export const attachEventHandlers = (props: AttachEventHandlersPropsType) => {
  const { canvas, updateOrbits, update } = props;

  // **Smooth Zooming**
  canvas.addEventListener('wheel', (event) => {
    event.preventDefault();
    globalThis.IS_ZOOMING_OR_PANNING = true;

    if (globalThis.ZOOM_PAN_TIMEOUT) clearTimeout(globalThis.ZOOM_PAN_TIMEOUT); // Reset timer

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

      const { system, category } = globalThis.LOCKED_CELESTIAL_BODY;
      const celestialBodiesToUse =
        category === 'planet'
          ? STARS
          : category === 'natural satellite'
            ? PLANETS
            : [];
      const { parentOffsetX, parentOffsetY } = getParentBodyOffset(
        system,
        category,
        celestialBodiesToUse,
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
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const worldXBefore =
        (mouseX - canvas.width / 2 - offsetX.value) / prevScale.value;
      const worldYBefore =
        (mouseY - canvas.height / 2 - offsetY.value) / prevScale.value;
      const worldXAfter =
        (mouseX - canvas.width / 2 - offsetX.value) / SCALE.value;
      const worldYAfter =
        (mouseY - canvas.height / 2 - offsetY.value) / SCALE.value;

      offsetX.value += (worldXAfter - worldXBefore) * SCALE.value;
      offsetY.value += (worldYAfter - worldYBefore) * SCALE.value;
    }

    updateOrbits(STARS, PLANETS, MOONS, COMETS);
    updateScaleDisplay(scaleDisplay, SCALE);

    globalThis.ZOOM_PAN_TIMEOUT = window.setTimeout(() => {
      globalThis.IS_ZOOMING_OR_PANNING = false; // Re-enable trails after zooming stops
    }, 500);
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

    updateMinimap(STARS, scale, offsetX, offsetY);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      globalThis.PAUSE = true; // Pause simulation when tab is hidden
    } else {
      globalThis.PAUSE = false; // Resume simulation when tab is visible
      update(); // Restart animation loop
    }
  });

  // **Resize Event**
  window.addEventListener(
    'resize',
    throttle(() => {
      globalThis.IS_ZOOMING_OR_PANNING = true;

      if (globalThis.ZOOM_PAN_TIMEOUT)
        clearTimeout(globalThis.ZOOM_PAN_TIMEOUT); // Reset timer

      setupCanvas();

      updateOrbits(STARS, PLANETS, MOONS, COMETS);
    })
  );

  window.addEventListener(
    'resize',
    throttleAsync(async () => {
      generateStarfield(canvas.width, canvas.height);
      await initializeStarfield(canvas.width, canvas.height, SCALE);
    })
  );

  document.addEventListener('keydown', (event) => {
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
    globalThis.IS_ZOOMING_OR_PANNING = true;

    if (globalThis.ZOOM_PAN_TIMEOUT) clearTimeout(globalThis.ZOOM_PAN_TIMEOUT); // Reset timer

    const zoomEvent = new CustomEvent('ZoomChanged', { detail: { SCALE } });

    document.dispatchEvent(zoomEvent);
    SCALE.value *= ZOOM_FACTOR;
  };
  const zoomOut = () => {
    globalThis.IS_ZOOMING_OR_PANNING = true;

    if (globalThis.ZOOM_PAN_TIMEOUT) clearTimeout(globalThis.ZOOM_PAN_TIMEOUT); // Reset timer

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
      globalThis.TRAJECTORY_TYPE = event.target.value;

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
    pauseButtonElement.classList.toggle('is-active');

    if (!globalThis.PAUSE) {
      update();
    }
  });

  const lockOnDropdown = document.getElementById('lockOn') as HTMLSelectElement;

  lockOnDropdown.addEventListener(
    'change',
    (event: EventType<HTMLSelectElement>) => {
      const selectedBodyName = event?.target?.value;

      if (selectedBodyName === 'noLock') {
        globalThis.LOCKED_CELESTIAL_BODY = null;
        offsetX.value = offsetCacheX.value;
        offsetY.value = offsetCacheY.value;
      } else {
        globalThis.IS_ZOOMING_OR_PANNING = true;

        if (globalThis.ZOOM_PAN_TIMEOUT)
          clearTimeout(globalThis.ZOOM_PAN_TIMEOUT); // Reset timer

        globalThis.LOCKED_CELESTIAL_BODY = [...STARS, ...PLANETS].find(
          (star) => star.name === selectedBodyName
        );

        if (globalThis.LOCKED_CELESTIAL_BODY) {
          offsetCacheX.value = offsetX.value;
          offsetCacheY.value = offsetY.value;

          const { system, category } = globalThis.LOCKED_CELESTIAL_BODY;
          const celestialBodiesToUse =
            category === 'planet'
              ? STARS
              : category === 'natural satellite'
                ? PLANETS
                : [];
          const { parentOffsetX, parentOffsetY } = getParentBodyOffset(
            system,
            category,
            celestialBodiesToUse,
            SCALE
          );
          // Calculate the body's position in pixel coordinates
          const { x, y } = getBodyPosition(globalThis.LOCKED_CELESTIAL_BODY);
          const xPX = x ? distanceToPixels(x, SCALE) : 0;
          const yPX = y ? distanceToPixels(y, SCALE) : 0;

          // Adjust offsets to center the body in the viewport
          offsetX.value -= normalizeParentOffset(xPX, parentOffsetX, 1);
          offsetY.value -= normalizeParentOffset(yPX, parentOffsetY, 1);
        }
      }
    }
  );

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

  [
    trajectoryCheckboxElement,
    moonsCheckboxElement,
    cometsCheckboxElement,
    labelCheckboxElement,
    toggleArrowheadsElement,
    asteroidBeltsCheckboxElement
  ].forEach((toggle) => {
    toggle.addEventListener('change', () => {
      setUIOptions({
        trajectoryCheckboxElement,
        moonsCheckboxElement,
        cometsCheckboxElement,
        labelCheckboxElement,
        toggleArrowheadsElement,
        asteroidBeltsCheckboxElement
      });
    });
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
