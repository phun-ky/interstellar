import {
  ASTEROIDS,
  COMETS,
  MOONS,
  PLANETS,
  STARS,
  SYSTEMS
} from '@interstellar-tools/constants';

import { SIMULATION_DATE } from '../../config/constants';
import { precomputeInitialAngles } from '../celestial-bodies/utils/precompute-initial-angles';

import { updateSimulationDate } from './update-simulation-date';

/**
 * Resets the simulation to the current time: the simulation date becomes now,
 * every body is moved to where it is at this moment, and trails are cleared,
 * since they belong to the timeline being left. The speed and the lock stay as
 * they are, and a held simulation stays held.
 *
 * @example
 * ```ts
 * resetToNow();
 * ```
 */
export const resetToNow = (): void => {
  SIMULATION_DATE.setTime(Date.now());

  precomputeInitialAngles(
    [...SYSTEMS, ...STARS, ...PLANETS, ...MOONS, ...COMETS, ...ASTEROIDS],
    SIMULATION_DATE
  );

  Object.keys(globalThis.TRAJECTORY_TRAILS).forEach((key) => {
    globalThis.TRAJECTORY_TRAILS[key] = [];
  });

  // The date readout only updates while running, so update it here too
  updateSimulationDate(document.getElementById('simDate'), SIMULATION_DATE);
};
