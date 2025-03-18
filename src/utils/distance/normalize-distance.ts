import { AU_IN_KM, AU_IN_LY, LY_IN_AU } from '../../config/constants';
import { DistanceInterface, DistanceUnitType } from '../../types/distance';

/**
 * Normalizes a distance measurement to the most **readable unit**.
 *
 * ## **Conversion Logic:**
 * 1. Converts the input distance to **Astronomical Units (AU)** as an intermediate step.
 * 2. Selects the **most appropriate unit** based on magnitude:
 *    - **km** for values < 1 AU
 *    - **AU** for values within 1 AU to 1 light-year
 *    - **ly** for values within 1 to 1000 light-years
 *    - **kly** for values above 1000 light-years
 * 3. Preserves the **original sign** of the input value.
 *
 * ## **Supported Units:**
 * - **AU ↔ km ↔ ly ↔ kly** (Kilolight-years)
 *
 * @param {DistanceInterface} distance - The input distance value and its unit.
 * @returns {DistanceInterface} The normalized distance with a more readable unit.
 *
 * @throws {Error} If the unit is not supported.
 *
 * @example
 * ```ts
 * const normalized = normalizeDistance({ value: 0.002, unit: 'AU' });
 * console.log(normalized); // Output: { value: 299597.87, unit: 'km' }
 * ```
 */
export const normalizeDistance = (
  distance: DistanceInterface
): DistanceInterface => {
  const { value, unit } = distance;

  // Convert input to AU for easier comparisons
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
      valueInAU = value * LY_IN_AU;
      break;
    case 'kilolightyears':
    case 'kly':
      valueInAU = value * LY_IN_AU * 1000; // Convert kly to AU
      break;
    default:
      throw new Error(`Unsupported unit: ${unit}`);
  }

  // Preserve the sign for negative values
  const sign = Math.sign(valueInAU);

  // Determine the most appropriate unit
  let readableValue: number;
  let readableUnit: DistanceUnitType;

  if (Math.abs(valueInAU) < 1) {
    readableValue = Math.abs(valueInAU) * AU_IN_KM; // Convert to km
    readableUnit = 'km';
  } else if (Math.abs(valueInAU) < LY_IN_AU) {
    readableValue = Math.abs(valueInAU); // Keep in AU
    readableUnit = 'AU';
  } else if (Math.abs(valueInAU) < 1000 * LY_IN_AU) {
    readableValue = Math.abs(valueInAU) * AU_IN_LY; // Convert to ly
    readableUnit = 'ly';
  } else {
    readableValue = (Math.abs(valueInAU) * AU_IN_LY) / 1000; // Convert to kly
    readableUnit = 'kly';
  }

  // Apply sign back to the value
  return {
    value: parseFloat((sign * readableValue).toFixed(4)),
    unit: readableUnit
  };
};
