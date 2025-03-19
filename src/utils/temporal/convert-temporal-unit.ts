import { EARTH_PERIOD } from '../../config/constants';
import { TemporalInterface, TemporalUnitType } from '../../types/temporal';

/**
 * Converts a **temporal measurement** between **days, years, and million years (Myr)**.
 *
 * **Conversion Logic:**
 * 1. Converts the input time to **years** as an intermediate step.
 * 2. Converts the **years value** into the **target unit**.
 *
 * **Supported Conversions:**
 * - **Days ↔ Years** (Uses Earth's orbital period `EARTH_PERIOD`).
 * - **Years ↔ Million Years (Myr)**.
 *
 * @param {TemporalInterface} time - The input time value and its unit.
 * @param {TemporalUnitType} targetUnit - The desired output unit.
 * @returns {TemporalInterface} The converted time value and unit.
 *
 * @throws {Error} If the input or target unit is not supported.
 *
 * @example
 * ```ts
 * const timeInYears = convertTemporalUnit({ value: 365, unit: 'days' }, 'year');
 * console.log(timeInYears); // Output: { value: 1, unit: 'year' }
 * ```
 */
export const convertTemporalUnit = (
  time: TemporalInterface,
  targetUnit: TemporalUnitType
): TemporalInterface => {
  const { value, unit } = time;

  // Convert input time to years first
  let valueInYears: number;

  switch (unit) {
    case 'day':
    case 'days':
      valueInYears = value / EARTH_PERIOD; // Convert days to years
      break;
    case 'year':
    case 'years':
      valueInYears = value; // Already in years
      break;
    case 'Myr': // Million years
    case 'Myrs': // Million years
      valueInYears = value * 1000000;
      break;
    default:
      throw new Error(`Unsupported unit: ${unit}`);
  }

  // Convert from years to target unit
  let convertedValue: number;

  switch (targetUnit) {
    case 'day':
    case 'days':
      convertedValue = valueInYears * EARTH_PERIOD; // Convert years to days
      break;
    case 'year':
      convertedValue = valueInYears; // Already in years
      break;
    case 'Myr': // Convert years to million years
      convertedValue = valueInYears / 1000000;
      break;
    default:
      throw new Error(`Unsupported target unit: ${targetUnit}`);
  }

  return { value: convertedValue, unit: targetUnit };
};
