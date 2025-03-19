import { MS_1_DAY } from '../../../../config/constants';

import { lastTimestamp, SPEED_MODE, timeStep } from '.';

/**
 * Generates a time step value based on the selected speed mode while accounting for different monitor refresh rates.
 *
 * This function updates `timeStep.value` and `timeStep.unit` to adjust the
 * simulation speed. The speed mode is determined by the `SPEED_MODE` value.
 * If no mode is explicitly set, the function calculates the time step based on
 * real-time elapsed milliseconds (`deltaTime`), normalized to account for variations in frame rates
 * (e.g., 60Hz vs. 144Hz) to ensure consistent simulation speed across different monitors.
 *
 * The function supports the following modes:
 * - `'framePerDay'`: Each frame corresponds to 1 day.
 * - `'spedUp'`: Each frame corresponds to 10 days.
 * - `'insane'`: Each frame corresponds to 1000 days.
 * - Default: Uses real-time elapsed time for smooth scaling, normalized for FPS variations.
 *
 * **Frame Rate Normalization:**
 * The default mode scales `deltaTime` using an expected frame duration (assumed 60 FPS) to prevent
 * higher refresh rate monitors (e.g., 144Hz) from running the simulation too fast.
 *
 * @returns {void}
 *
 * @example
 * ```ts
 * generateTimeStep();
 * console.log(timeStep.value, timeStep.unit);
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
 */
export const generateTimeStep = (): void => {
  const mode = SPEED_MODE.value;
  const now = performance.now();
  // Compute elapsed time in milliseconds
  const deltaTime = now - lastTimestamp.value;

  // Always update lastTimestamp before returning
  lastTimestamp.value = now;

  if (mode === 'framePerDay') {
    timeStep.value = 1;
    timeStep.unit = 'day';

    return;
  }

  if (mode === 'spedUp') {
    timeStep.value = 10; // Example factor
    timeStep.unit = 'day';

    return;
  }

  if (mode === 'insane') {
    timeStep.value = 1000; // Example factor
    timeStep.unit = 'day';

    return;
  }

  timeStep.value = deltaTime / MS_1_DAY;
  timeStep.unit = 'day';
};
