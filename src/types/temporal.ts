import { ValueInterface } from './distance';

/**
 * Defines possible **temporal units** used for measuring time.
 *
 * Supported units:
 * - **Seconds (`s`, `seconds`)**
 * - **Milliseconds (`ms`, `milliseconds`)**
 * - **Days (`day`, `days`)**
 * - **Years (`year`, `years`)**
 * - **Million years (`Myr`, `Myrs`)**
 *
 * @typedef {'seconds' | 's' | 'milliseconds' | 'ms' | 'day' | 'days' | 'year' | 'years' | 'Myr' | 'Myrs'} TemporalUnitType
 */
export type TemporalUnitType =
  | 'seconds'
  | 's'
  | 'milliseconds'
  | 'ms'
  | 'day'
  | 'days'
  | 'year'
  | 'years'
  | 'Myr'
  | 'Myrs';

/**
 * Represents a **temporal measurement** with a numeric value and unit.
 *
 * @interface TemporalInterface
 * @extends ValueInterface
 * @property {TemporalUnitType} unit - The unit of temporal measurement.
 *
 * @example
 * ```ts
 * const orbitPeriod: TemporalInterface = { value: 365.25, unit: 'days' };
 * ```
 */
export interface TemporalInterface extends ValueInterface {
  unit: TemporalUnitType;
}

/**
 * Represents a **time step measurement** in simulation, restricted to days.
 *
 * @interface TimeStepInterface
 * @extends ValueInterface
 * @property {'day'} unit - The unit is always **days**.
 *
 * @example
 * ```ts
 * const timeStep: TimeStepInterface = { value: 1, unit: 'day' };
 * ```
 */
export interface TimeStepInterface extends ValueInterface {
  unit: 'day';
}
