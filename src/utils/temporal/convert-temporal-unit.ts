import { JULIAN_YEAR_SECONDS, SECONDS_1_DAY } from '../../config/constants';
import { TemporalInterface, TemporalUnitType } from '../../types/temporal';

import { normalizeTemporalUnit } from './normalize-temporal-unit';

const SECONDS_PER: Record<TemporalUnitType, number> = {
  // SI base & submultiples
  s: 1,
  ms: 1e-3,
  μs: 1e-6,
  ns: 1e-9,
  ps: 1e-12,
  fs: 1e-15,
  as: 1e-18,
  zs: 1e-21,
  ys: 1e-24,

  // convenient larger units
  min: 60,
  h: 60 * 60,
  d: SECONDS_1_DAY,

  // year family (Julian-year-based)
  yr: JULIAN_YEAR_SECONDS,
  kyr: JULIAN_YEAR_SECONDS * 1e3,
  Myr: JULIAN_YEAR_SECONDS * 1e6,
  Gyr: JULIAN_YEAR_SECONDS * 1e9
};

export const convertTemporalUnit = (
  time: TemporalInterface,
  targetUnit: TemporalUnitType
): TemporalInterface => {
  const normalizedTargetUnit = normalizeTemporalUnit(targetUnit);
  const { value, unit } = time;
  // Convert input to seconds
  const inSeconds = value * SECONDS_PER[unit];
  // Convert seconds to target
  const convertedValue = inSeconds / SECONDS_PER[normalizedTargetUnit];

  return { value: convertedValue, unit: normalizedTargetUnit };
};
