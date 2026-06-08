import { DistanceUnitAliasType, DistanceUnitType } from '../../types/distance';

export const normalizeDistanceUnit = (u: string): DistanceUnitType => {
  const k = u.trim() as keyof typeof NORMALIZE_DISTANCE_UNIT;
  const v = NORMALIZE_DISTANCE_UNIT[k];

  if (!v) throw new Error(`Unsupported distance unit: ${u}`);

  return v;
};

export const NORMALIZE_DISTANCE_UNIT = {
  // canonical map to themselves
  m: 'm',
  km: 'km',
  au: 'au',
  ly: 'ly',
  kly: 'kly',
  Mly: 'Mly',
  Gly: 'Gly',
  pc: 'pc',
  kpc: 'kpc',
  Mpc: 'Mpc',
  Gpc: 'Gpc',

  // meters / kilometres (en-GB & en-US)
  meter: 'm',
  meters: 'm',
  metre: 'm',
  metres: 'm',
  kilometer: 'km',
  kilometers: 'km',
  kilometre: 'km',
  kilometres: 'km',

  // astronomical unit (IAU recommends "au" symbol)
  AU: 'au',
  Au: 'au',
  'astronomical-unit': 'au',
  'astronomical-units': 'au',
  'astronomical unit': 'au',
  'astronomical units': 'au',

  // light-year family
  lightyear: 'ly',
  'light-year': 'ly',
  lightyears: 'ly',
  'light-years': 'ly',
  kilolightyear: 'kly',
  kilolightyears: 'kly',
  megalightyear: 'Mly',
  megalightyears: 'Mly',
  gigalightyear: 'Gly',
  gigalightyears: 'Gly',

  // parsec family
  parsec: 'pc',
  parsecs: 'pc',
  kiloparsec: 'kpc',
  kiloparsecs: 'kpc',
  megaparsec: 'Mpc',
  megaparsecs: 'Mpc',
  gigaparsec: 'Gpc',
  gigaparsecs: 'Gpc'
} as const satisfies Record<
  DistanceUnitAliasType | DistanceUnitType,
  DistanceUnitType
>;
