import { COMETS } from '../datasets/comets';
import { MOONS } from '../datasets/moons';
import { PLANETS } from '../datasets/planets';
import { STARS } from '../datasets/stars';
import { offsetX, offsetY } from '../features/canvas/config/camera';
import { timeStep } from '../features/canvas/config/time-step';
import { generateTimeStep } from '../features/canvas/config/time-step/generate-time-step';
import { updateOrbits } from '../features/celestial-bodies/orbits/update';
import { getBodyPosition } from '../features/celestial-bodies/utils/get-body-position';
import { precomputeInitialAngles } from '../features/celestial-bodies/utils/precompute-initial-angles';
import { updatePositions } from '../features/celestial-bodies/utils/update-positions';
import { generateStarfield } from '../features/starfield/generate-star-field';
import { updateScaleDisplay } from '../features/ui/update-scale-display';
import { CelestialBodiesType } from '../types/celestial-bodies';
import { distanceToPixels } from '../utils/distance/distance-to-pixels';
import { getParentBodyOffset } from '../utils/offset/get-parent-body-offset';
import { normalizeParentOffset } from '../utils/offset/normalize-parent-offset';

import { SCALE, SIMULATION_DATE } from './constants';
import { setUIOptions } from './set-UI-options';

/**
 * Initializes and configures the space visualization application.
 *
 * This function sets up the simulation environment, initializes UI options,
 * precomputes initial angles for celestial bodies, manages global state variables,
 * and updates orbital positions.
 *
 * @param {HTMLCanvasElement} canvas - The HTML canvas element used for rendering the simulation.
 *
 * @example
 * ```ts
 * const canvas = document.getElementById('simulationCanvas') as HTMLCanvasElement;
 * setupApp(canvas);
 * ```
 */
export const setupApp = (canvas: HTMLCanvasElement) => {
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

  setUIOptions({
    trajectoryCheckboxElement,
    moonsCheckboxElement,
    cometsCheckboxElement,
    labelCheckboxElement,
    toggleArrowheadsElement,
    asteroidBeltsCheckboxElement
  });

  precomputeInitialAngles(
    [
      ...STARS,
      ...PLANETS,
      ...MOONS,
      ...COMETS
    ] as unknown as CelestialBodiesType,
    SIMULATION_DATE
  );

  // Global state variables for simulation behavior
  globalThis.PAUSE = false;
  globalThis.LOCKED_CELESTIAL_BODY = null;
  globalThis.TRAJECTORY_TYPE = 'trails';
  globalThis.TRAJECTORY_TRAILS = {};
  globalThis.IS_ZOOMING_OR_PANNING = false; // Initialize
  globalThis.ZOOM_PAN_TIMEOUT = null; // For delaying reactivation
  globalThis.NEAREST_BODIES = {};

  globalThis.STARFIELD_BITMAP = null;
  globalThis.LAST_CANVAS_SIZE = { width: 0, height: 0 };

  generateStarfield(canvas.width, canvas.height);
  updateOrbits(STARS, PLANETS, MOONS, COMETS);

  if (globalThis.LOCKED_CELESTIAL_BODY !== null) {
    // Calculate the body's position in pixel coordinates
    const { x, y } = getBodyPosition(globalThis.LOCKED_CELESTIAL_BODY);
    const xPX = x ? distanceToPixels(x, SCALE) : 0;
    const yPX = y ? distanceToPixels(y, SCALE) : 0;
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

    // Adjust offsets to center the body in the viewport
    offsetX.value -= normalizeParentOffset(xPX, parentOffsetX, 1);
    offsetY.value -= normalizeParentOffset(yPX, parentOffsetY, 1);
  }

  const scaleDisplay = document.getElementById('scaleDisplay') as HTMLElement;

  // Generate the first timeStep
  generateTimeStep();

  // Initial computation of star positions
  updatePositions(STARS, timeStep);
  updatePositions(PLANETS, timeStep);
  updatePositions(MOONS, timeStep);
  updatePositions(COMETS, timeStep);

  updateScaleDisplay(scaleDisplay, SCALE);
};
