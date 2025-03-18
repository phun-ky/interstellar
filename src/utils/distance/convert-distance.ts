import { AU_IN_KM, AU_IN_LY, LY_IN_AU } from '../../config/constants';
import { DistanceInterface, DistanceUnitType } from '../../types/distance';

/**
 * Converts a distance measurement between **Astronomical Units (AU), kilometres (km), meters (m),**
 * and **light-years (ly)**.
 *
 * ## **Conversion Logic:**
 * 1. Converts the input distance to **Astronomical Units (AU)** as an intermediate step.
 * 2. Converts the AU value to the **target unit**.
 *
 * ## **Supported Conversions:**
 * - **AU ↔ km ↔ m**
 * - **AU ↔ light-years (ly)**
 *
 * @param {DistanceInterface} distance - The input distance value and its unit.
 * @param {DistanceUnitType} targetUnit - The desired output unit.
 * @returns {DistanceInterface} The converted distance value and unit.
 *
 * @throws {Error} If the input or target unit is not supported.
 *
 * @example
 * ```ts
 * const distanceInKM = convertDistance({ value: 1, unit: 'AU' }, 'km');
 * console.log(distanceInKM); // Output: { value: 149597870.7, unit: 'km' }
 * ```
 */
export const convertDistance = (
  distance: DistanceInterface,
  targetUnit: DistanceUnitType
): DistanceInterface => {
  const { value, unit } = distance;

  // Convert input distance to AU first
  let valueInAU: number;

  switch (unit) {
    case 'AU':
      valueInAU = value;
      break;
    case 'km':
      valueInAU = value / AU_IN_KM;
      break;
    case 'm':
      valueInAU = value / (AU_IN_KM * 1000);
      break;
    case 'lightyears':
    case 'ly':
      valueInAU = value * LY_IN_AU; // Convert LY to AU
      break;
    default:
      throw new Error(`Unsupported unit: ${unit}`);
  }

  // Convert from AU to target unit
  let convertedValue: number;

  switch (targetUnit) {
    case 'AU':
      convertedValue = valueInAU;
      break;
    case 'km':
      convertedValue = valueInAU * AU_IN_KM;
      break;
    case 'm':
      convertedValue = valueInAU * (AU_IN_KM * 1000);
      break;
    case 'lightyears':
    case 'ly':
      convertedValue = valueInAU * AU_IN_LY;
      break;
    default:
      throw new Error(`Unsupported target unit: ${targetUnit}`);
  }

  return { value: convertedValue, unit: targetUnit };
};
