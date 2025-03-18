/**
 * Defines possible units of measurement for distance.
 *
 * Supported units:
 * - **AU**: Astronomical Unit
 * - **km**: Kilometers
 * - **kly** / **kilolightyears**: Thousand light-years
 * - **ly** / **lightyears**: Light-years
 * - **m**: Meters
 *
 * @typedef {'AU' | 'km' | 'kly' | 'kilolightyears' | 'lightyears' | 'ly' | 'm'} UnitType
 */
export type UnitType =
  | 'AU'
  | 'km'
  | 'kly'
  | 'kilolightyears'
  | 'lightyears'
  | 'ly'
  | 'm';

/**
 * Alias for distance-specific unit types.
 *
 * @typedef {UnitType} DistanceUnitType
 */
export type DistanceUnitType = UnitType;

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
 * @property {UnitType} unit - The unit of measurement.
 *
 * @example
 * ```ts
 * const planetRadius: MeasureInterface = { value: 6371, unit: 'km' };
 * ```
 */
export interface MeasureInterface extends ValueInterface {
  unit: UnitType;
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
