import { AU_PER_LY, KM_PER_AU, LY_PER_AU } from '@interstellar-tools/constants';
import { convertDistanceUnit } from '@interstellar-tools/equations';
import { DistanceInterface, DistanceUnitType } from '@interstellar-tools/types';

/**
 * Normalizes a distance measurement to the most **readable unit**.
 *
 * **Conversion Logic:**
 * 1. Converts the input distance to **Astronomical Units (AU)** as an intermediate step.
 * 2. Selects the **most appropriate unit** based on magnitude:
 *    - **km** for values < 1 AU
 *    - **AU** for values within 1 AU to 1 light-year
 *    - **ly** for values within 1 to 1000 light-years
 *    - **kly** for values above 1000 light-years
 * 3. Preserves the **original sign** of the input value.
 *
 * **Supported Units:**
 * - **AU ↔ km ↔ ly ↔ kly** (Kilolight-years)
 *
 * @param {DistanceInterface} distance - The input distance value and its unit.
 * @returns {DistanceInterface} The normalized distance with a more readable unit.
 *
 * @throws {Error} If the unit is not supported.
 *
 * @example
 * ```ts
 * const normalized = normalizeDistance({ value: 0.002, unit: 'au' });
 * console.log(normalized); // Output: { value: 299597.87, unit: 'km' }
 * ```
 */
export const normalizeDistance = (
  distance: DistanceInterface
): DistanceInterface => {
  // Convert input to AU for easier comparisons
  const valueInAU = convertDistanceUnit(distance, 'au').value;
  // Preserve the sign for negative values
  const sign = Math.sign(valueInAU);

  // Determine the most appropriate unit
  let readableValue: number;
  let readableUnit: DistanceUnitType;

  if (Math.abs(valueInAU) < 1) {
    readableValue = Math.abs(valueInAU) * KM_PER_AU; // Convert to km
    readableUnit = 'km';
  } else if (Math.abs(valueInAU) < AU_PER_LY) {
    readableValue = Math.abs(valueInAU); // Keep in AU
    readableUnit = 'au';
  } else if (Math.abs(valueInAU) < 1000 * AU_PER_LY) {
    readableValue = Math.abs(valueInAU) * LY_PER_AU; // Convert to ly
    readableUnit = 'ly';
  } else {
    readableValue = (Math.abs(valueInAU) * LY_PER_AU) / 1000; // Convert to kly
    readableUnit = 'kly';
  }

  // Apply sign back to the value
  return {
    value: parseFloat((sign * readableValue).toFixed(4)),
    unit: readableUnit
  };
};
