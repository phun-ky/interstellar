import { MS_1_DAY, SCALE, SIMULATION_DATE } from './config/constants';
import { setupApp } from './config/setup-app';
import { COMETS } from './datasets/comets';
import { GALAXIES } from './datasets/galaxies';
import { MOONS } from './datasets/moons';
import { PLANETS } from './datasets/planets';
import { STARS } from './datasets/stars';
import { offsetX, offsetY } from './features/canvas/config/camera';
import { getReference } from './features/canvas/config/camera/get-reference';
import { timeStep } from './features/canvas/config/time-step';
import { generateTimeStep } from './features/canvas/config/time-step/generate-time-step';
import { setupCanvas } from './features/canvas/setup-canvas';
import { updateOrbits } from './features/celestial-bodies/orbits/update';
import { updatePositions } from './features/celestial-bodies/utils/update-positions';
import { initializeMinimap } from './features/minimap/initialize-minimap';
import { updateMinimap } from './features/minimap/update-minimap';
import { setupUI } from './features/ui/setup-UI';
import { updateCoordinates } from './features/ui/update-coordinates';
import { updateSimulationDate } from './features/ui/update-simulation-date';
import { updateZoom } from './features/ui/update-zoom';
import { draw } from './utils/draw';
import { attachEventHandlers } from './utils/event-handlers';
import { waitFor } from './utils/wait-for';

/**
 * **Main application entry point** for initializing and running the simulation.
 *
 * **Initialization Steps:**
 * 1. **Set up the UI** elements.
 * 2. **Create and configure the canvas**.
 * 3. **Initialize global settings**.
 * 4. **Attach event handlers** for interaction.
 * 5. **Start the simulation loop**.
 *
 * **Simulation Loop:**
 * - Updates **planetary positions** based on time step.
 * - Advances **simulation time**.
 * - Updates **UI components** like coordinates, zoom, and minimap.
 * - Uses `requestAnimationFrame` for smooth rendering.
 *
 * @returns {Promise<void>} Asynchronous function to initialize and start the simulation.
 *
 * @example
 * ```ts
 * import App from './App';
 * App();
 * ```
 */
const App = async () => {
  setupUI();

  const { canvas, space } = setupCanvas();

  setupApp(canvas);

  const simDateDisplayElement = document.getElementById('simDate');
  // Animation function
  const update = () => {
    if (!space) throw Error('Required space context not found');

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const { referenceX, referenceY } = getReference(canvas);

    // Draw everything related to canvas
    draw({
      space,
      scale: SCALE,
      galaxies: GALAXIES,
      planets: PLANETS,
      stars: STARS,
      moons: MOONS,
      comets: COMETS,
      referenceX,
      referenceY,
      canvasHeight,
      canvasWidth,
      offsetX,
      offsetY
    });

    if (!globalThis.PAUSE) {
      // Define speed modes
      generateTimeStep();

      // Calculate star positions per frame
      updatePositions(STARS, timeStep);
      updatePositions(PLANETS, timeStep);
      updatePositions(MOONS, timeStep);
      updatePositions(COMETS, timeStep);

      // Increase the time per frame
      SIMULATION_DATE.setTime(
        SIMULATION_DATE.getTime() + timeStep.value * MS_1_DAY
      );
      // Update the UI with the current simulation date
      updateSimulationDate(simDateDisplayElement, SIMULATION_DATE);
    }

    // Update the HUD
    updateCoordinates(SCALE, offsetX.value, offsetY.value);
    updateZoom(SCALE);
    requestAnimationFrame(update);
  };

  attachEventHandlers({
    space,
    canvas,
    updateOrbits,
    update
  });

  initializeMinimap();
  update();
  await waitFor(0);
  updateMinimap(STARS, SCALE, offsetX, offsetY);
};

export default App;
