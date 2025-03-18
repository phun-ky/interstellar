import {
  TemporalInterface,
  TimeStepInterface
} from '../../../../types/temporal';

/**
 * Stores temporal values used for time progression in the simulation.
 *
 * `lastTimestamp` represents the last recorded time in milliseconds, using
 * `performance.now()` for high-resolution timekeeping.
 *
 * `timeStep` defines the current simulation time step, representing the
 * amount of time advanced per frame, measured in days.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
 */

/** Last recorded timestamp for time calculations, in milliseconds. */
export const lastTimestamp: TemporalInterface = {
  value: performance.now(),
  unit: 'ms'
};

/** Defines the simulation time step, initially set to 0 days. */
export const timeStep: TimeStepInterface = {
  value: 0,
  unit: 'day'
};
