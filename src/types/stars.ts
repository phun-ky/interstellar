import { DistanceInterface, MeasureInterface } from './distance';
import { Coordinates2DInterface } from './planets';
import { TemporalInterface } from './temporal';

/**
 * Represents a **star system**, which can be a planetary system or a stellar system.
 *
 * @interface StarSystemInterface
 * @property {string} name - Name of the star system.
 * @property {'planetary system' | 'stellar system'} type - Specifies if it is a **planetary system** or a **stellar system**.
 *
 * @example
 * ```ts
 * const solarSystem: StarSystemInterface = {
 *   name: 'Solar System',
 *   type: 'planetary system'
 * };
 * ```
 */
// eslint-disable-next-line import/no-unused-modules
export interface StarSystemInterface {
  name: string;
  type: 'planetary system' | 'stellar system';
}

/**
 * Represents a **star** in a planetary or stellar system.
 *
 * **Orbital & Physical Properties:**
 * - **Semi-major axis (`a`)**: Defines the star’s orbit size (AU or light-years).
 * - **Orbital eccentricity (`e`)**: Determines how elliptical the orbit is.
 * - **Orbital period (`period`)**: Time taken for one full orbit.
 * - **True anomaly (`angle`)**: The star’s current position in its orbit (in **radians**).
 * - **Radius (`radius`)**: Physical size of the star.
 *
 * **Classification & Visualization:**
 * - **Type (`type`)**: Classification of the star (e.g., **main-sequence star, white dwarf**).
 * - **Category (`category`)**: Defined as `'star'`.
 * - **Color (`color`)**: Used for visual representation.
 *
 * @interface StarInterface
 * @example
 * ```ts
 * const sun: StarInterface = {
 *   name: 'Sun',
 *   type: 'G-type main-sequence',
 *   category: 'star',
 *   system: solarSystem,
 *   radius: { value: 695700, unit: 'km' },
 *   color: '#ffcc00',
 *   a: { value: 0, unit: 'AU' },
 *   e: 0,
 *   period: { value: 0, unit: 'years' },
 *   angle: 0,
 *   x: { value: 0, unit: 'AU' },
 *   y: { value: 0, unit: 'AU' },
 *   z: { value: 0, unit: 'AU' }
 * };
 * ```
 */
export interface StarInterface {
  /** Name of the star. */
  name: string;
  /** Classification of the star (e.g., main-sequence, red giant, white dwarf). */
  type: string;
  /** Defines the category as a star. */
  category: 'star';
  /** The system in which the star exists. */
  system: StarSystemInterface;
  /** Physical radius of the star. */
  radius: DistanceInterface;
  /** Visual representation color. */
  color: string;
  /** Semi-major axis of the orbit (AU or light-years). */
  a: MeasureInterface;
  /** Orbital eccentricity (0 = circular, closer to 1 = highly elliptical). */
  e: number;
  /** Semi-minor axis of the orbit (calculated from `a` and `e`). */
  miA?: number;
  /** X-offset for the ellipse focus (accounts for eccentricity). */
  focus_x?: number;
  /** Current orbital position in radians (True Anomaly). */
  angle: number;
  /** X-coordinate in a distance-based system. */
  x: DistanceInterface;
  /** Y-coordinate in a distance-based system. */
  y: DistanceInterface;
  /** Z-coordinate in a distance-based system. */
  z: DistanceInterface;
  /** Orbital period of the star. */
  period: TemporalInterface;
  /** Precomputed orbital path points for visualization (optional). */
  orbitPath?: Coordinates2DInterface[];
}

/**
 * Type alias for a collection of **stars**.
 *
 * @typedef {StarInterface[]} StarsType
 */
export type StarsType = StarInterface[];
