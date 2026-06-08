export type DistanceUnitType =
  | 'm'
  | 'km'
  | 'au'
  | 'ly'
  | 'kly'
  | 'Mly'
  | 'Gly'
  | 'pc'
  | 'kpc'
  | 'Mpc'
  | 'Gpc';

/**
 * Human-friendly **distance unit aliases** accepted at input time.
 *
 * These strings are parsed and **normalized** to canonical {@link DistanceUnitType}
 * (e.g., `"AU"` → `"au"`, `"lightyears"` → `"ly"`, `"kiloparsecs"` → `"kpc"`).
 *
 * ### Scope & conventions
 * - **Canonical vs. aliases**: This type is for *inputs*. Convert to canonical symbols
 *   (`m`, `km`, `au`, `ly/kly/Mly/Gly`, `pc/kpc/Mpc/Gpc`) before math or serialization.
 * - **Case-sensitive** and **exact** matches: tokens are matched exactly as listed here.
 *   For example, `"AU"` is valid (alias) while `"au"` is the canonical symbol (not part of this alias type).
 * - **IAU symbol**: canonical astronomical unit is lowercase **`au`**; we accept `"AU"`, `"Au"`,
 *   and textual forms as aliases.
 * - **Light-year and parsec families**: long names (with/without hyphens) normalize to their
 *   canonical symbols (`ly/kly/Mly/Gly`, `pc/kpc/Mpc/Gpc`). By convention, `ly` uses the
 *   **Julian year** (consistent with your temporal units).
 *
 * ### Typical flow
 * 1) Accept `DistanceUnitAliasType | DistanceUnitType` at your API boundary.
 * 2) Normalize to `DistanceUnitType` (e.g., via `normalizeDistanceUnit`).
 * 3) Perform calculations using canonical units only.
 *
 * @example
 * ```ts
 * // Assuming `normalizeDistanceUnit` and `NORMALIZE_DISTANCE_UNIT` are defined:
 * normalizeDistanceUnit('AU');           // 'au'
 * normalizeDistanceUnit('lightyears');   // 'ly'
 * normalizeDistanceUnit('kilolightyears'); // 'kly'
 * normalizeDistanceUnit('parsecs');      // 'pc'
 * normalizeDistanceUnit('Mpc');          // 'Mpc' (already canonical)
 * ```
 *
 * @remarks
 * If you wish to be more permissive (e.g., case-insensitive or allow extra whitespace),
 * pre-normalize inputs (trim/case-fold) and add corresponding keys to your normalization map.
 *
 * @see DistanceUnitType for the canonical symbol set.
 * @see https://www.iau.org/static/resolutions/IAU2012_English.pdf (IAU 2012 B2 — astronomical unit, symbol “au”)
 * @see https://en.wikipedia.org/wiki/Light-year (Light-year; Julian-year convention)
 * @see https://en.wikipedia.org/wiki/Parsec (Parsec definition)
 */
export type DistanceUnitAliasType =
  // meters
  | 'meter'
  | 'meters'
  | 'metre'
  | 'metres'
  // kilometers
  | 'kilometer'
  | 'kilometers'
  | 'kilometre'
  | 'kilometres'
  // astronomical unit
  | 'AU'
  | 'Au'
  | 'astronomical-unit'
  | 'astronomical-units'
  | 'astronomical unit'
  | 'astronomical units'
  // light-year family
  | 'lightyear'
  | 'lightyears'
  | 'light-year'
  | 'light-years'
  | 'kilolightyear'
  | 'kilolightyears'
  | 'kly'
  | 'megalightyear'
  | 'megalightyears'
  | 'Mly'
  | 'gigalightyear'
  | 'gigalightyears'
  | 'Gly'
  // parsec family
  | 'parsec'
  | 'parsecs'
  | 'kiloparsec'
  | 'kiloparsecs'
  | 'kpc'
  | 'megaparsec'
  | 'megaparsecs'
  | 'Mpc'
  | 'gigaparsec'
  | 'gigaparsecs'
  | 'Gpc';

/**
 * Represents a numerical value.
 *
 * @interface ValueInterface
 * @property {number} value - The numeric value of the measurement.
 *
 * @example
 * ```ts
 * const distance: ValueInterface = { value: 100 };
 * ```
 */
export interface ValueInterface {
  value: number;
}

/**
 * Represents a measurement with an associated unit.
 *
 * @interface MeasureInterface
 * @extends ValueInterface
 * @property {DistanceUnitType} unit - The unit of measurement.
 *
 * @example
 * ```ts
 * const planetRadius: MeasureInterface = { value: 6371, unit: 'km' };
 * ```
 */
export interface MeasureInterface extends ValueInterface {
  unit: DistanceUnitType;
}

/**
 * Represents a distance measurement with an associated unit.
 *
 * @interface DistanceInterface
 * @extends ValueInterface
 * @property {DistanceUnitType} unit - The unit of distance measurement.
 *
 * @example
 * ```ts
 * const distanceToAlphaCentauri: DistanceInterface = { value: 4.367, unit: 'lightyears' };
 * ```
 */
export interface DistanceInterface extends ValueInterface {
  unit: DistanceUnitType;
}
