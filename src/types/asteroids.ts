/* eslint-disable import/no-unused-modules */
import { DistanceInterface, MeasureInterface } from './distance';
import { Coordinates2DInterface } from './planets';
import { TemporalInterface } from './temporal';

/**
 * The classification of the asteroid based on its orbital characteristics, such as "main-belt asteroid" or "near-Earth asteroid."
 */
export type AsteroidType =
  | 'main-belt asteroid'
  | 'near-earth asteroid'
  | 'trojan asteroid'
  | 'centaur'
  | 'trans-neptunian object';

/**
 * A more specific classification, which could include terms like "dwarf planet," "large asteroid," or specific asteroid groups like "Amor group."
 */
export type AsteroidCategory =
  | 'dwarf planet'
  | 'large asteroid'
  | 'amor group'
  | 'apollo group'
  | 'aten group'
  | 'atira group'
  | 'cybele group'
  | 'hilda group'
  | 'jupiter trojan'
  | 'plutino'
  | 'cubewano'
  | 'scattered disk object';

/**
 * Spectral classification based on composition and reflectivity.
 */
export type AsteroidSpectralType =
  | 'c-type'
  | 's-type'
  | 'v-type'
  | 'm-type'
  | 'b-type'
  | 'd-type'
  | 'p-type'
  | 'f-type'
  | 'g-type'
  | 'x-type'
  | 'e-type'
  | 'other';

export interface AsteroidInterface {
  /** Name of the asteroid (e.g., "Ceres", "Vesta"). */
  name: string;

  /** General type based on its orbit. */
  type: AsteroidType;

  /** Group/category classification. */
  category: AsteroidCategory;

  /** Spectral classification (based on surface composition and albedo). */
  spectralType: AsteroidSpectralType;

  /** Star system where the asteroid resides. */
  system: string;

  /** Semi-major axis in AU. */
  a: MeasureInterface;

  /** Eccentricity of orbit (0 = circular). */
  e: number;

  /** Inclination in degrees. */
  i: number;

  /** Argument of perihelion (degrees). */
  w: number;

  /** Longitude of ascending node (degrees). */
  om: number;

  /** Mean anomaly (degrees). */
  angle: number;

  /** Orbital period in Earth days. Negative values dictates counter clockwise direction */
  period: TemporalInterface;

  /** Perihelion distance in AU. */
  q: number;

  /** Optional 3D coordinate data. */
  x?: DistanceInterface;
  y?: DistanceInterface;
  z?: DistanceInterface;

  /** Optional semi-minor axis in pixels (for drawing). */
  miA?: number;

  /** Optional ellipse focus offset in X. */
  focus_x?: number;

  /** Asteroid's average radius in km. */
  radius: DistanceInterface;

  /** Optional precomputed orbit path for visualization. */
  orbitPath?: Coordinates2DInterface[];

  /** Display color (hex code). */
  color: string;

  /** Visual scale factor (not physical size). */
  size: number;
}

export type AsteroidsType = AsteroidInterface[];
