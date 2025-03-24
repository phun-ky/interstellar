/* eslint-disable import/no-unused-modules */
/**
 * Represents a star system within the space visualization.
 */
export interface SystemInterface {
  /** Name of the star system. */
  name: string;
  /** List of star names in the system. */
  stars: string[];
  /** Distance from the Sun in light-years. */
  distance: number;
}

/**
 * Type alias for a collection of star systems.
 */
export type SystemsType = SystemInterface[];
