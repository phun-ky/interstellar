import { AU_IN_M, LY_IN_M, PARSEC_IN_M } from '../../config/constants';
import {
  DistanceInterface,
  DistanceUnitAliasType,
  DistanceUnitType
} from '../../types/distance';

import { normalizeDistanceUnit } from './normalize-distance-unit';

/**
 * Meters-per-unit lookup for canonical {@link DistanceUnitType}.
 * Higher-order units are powers of 10 of their base (kilo/mega/giga).
 */
export const METERS_PER: Record<DistanceUnitType, number> = {
  m: 1,
  km: 1_000,

  au: AU_IN_M,

  ly: LY_IN_M,
  kly: LY_IN_M * 1e3,
  Mly: LY_IN_M * 1e6,
  Gly: LY_IN_M * 1e9,

  pc: PARSEC_IN_M,
  kpc: PARSEC_IN_M * 1e3,
  Mpc: PARSEC_IN_M * 1e6,
  Gpc: PARSEC_IN_M * 1e9
};

/**
 * Convert a **distance** between any two canonical {@link DistanceUnitType} units.
 *
 * - Converts via **meters** using {@link METERS_PER}.
 * - Input and `targetUnit` may be aliases; both are normalized to canonical symbols.
 * - Floating-point precision applies for very large numbers (e.g., gigaparsecs).
 *
 * @example
 * convertDistanceUnit({ value: 1, unit: 'pc' }, 'ly');   // ≈ { value: 3.26156…, unit: 'ly' }
 * convertDistanceUnit({ value: 1, unit: 'au' }, 'km');   // { value: 149_597_870.7, unit: 'km' }
 * convertDistanceUnit({ value: 1000, unit: 'km' }, 'm'); // { value: 1_000_000, unit: 'm' }
 */
export const convertDistanceUnit = (
  distance: { value: number; unit: DistanceUnitType | DistanceUnitAliasType },
  targetUnit: DistanceUnitType | DistanceUnitAliasType
): DistanceInterface => {
  const from = normalizeDistanceUnit(distance.unit);
  const to = normalizeDistanceUnit(targetUnit);
  const meters = distance.value * METERS_PER[from];
  const value = meters / METERS_PER[to];

  return { value, unit: to };
};
