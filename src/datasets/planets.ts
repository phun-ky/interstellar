import { PlanetsType } from '../types/planets';

/**
 * Represents a dataset of planets and planetoids in the solar system.
 *
 * Each planet entry includes its orbital elements, physical characteristics,
 * and a visual representation color for rendering.
 *
 * Uses {@link PlanetsType}.
 *
 * **Example item in dataset:**
 *
 * {@includeCode ../datasets/planets.ts#datasetPlanets}
 *
 * @example
 * ```ts
 * console.log(PLANETS[0].name); // "Mercury"
 * ```
 */
export const PLANETS: PlanetsType = [
  // #region datasetPlanets
  {
    name: 'Mercury',
    type: 'silicate planet',
    category: 'planet',
    system: 'Sun',
    /** Semi-major axis in AU */
    a: { value: 0.387, unit: 'AU' },
    /** Orbital eccentricity */
    e: 0.2056,
    /** Radius in km */
    radius: { value: 2440, unit: 'km' },
    /** Visual representation color */
    color: '#8B8B8B',
    /** Initial angle in orbit at J2000 */
    angle: 0.843,
    /** Orbital period in days */
    period: { value: -87.969, unit: 'days' },
    /** Initial position coordinates in AU */
    x: { value: 0.387, unit: 'AU' },
    y: { value: 0.024, unit: 'AU' },
    z: { value: 0.001, unit: 'AU' }
  },
  // #endregion datasetPlanets
  {
    name: 'Venus',
    type: 'silicate planet',
    category: 'planet',
    system: 'Sun',
    a: { value: 0.723, unit: 'AU' },
    e: 0.0068,
    radius: { value: 6052, unit: 'km' },
    color: '#E49B0F',
    angle: 1.338,
    period: { value: -224.701, unit: 'days' },
    x: { value: 0.723, unit: 'AU' },
    y: { value: 0.012, unit: 'AU' },
    z: { value: 0.002, unit: 'AU' }
  },
  {
    name: 'Earth',
    type: 'silicate planet',
    category: 'planet',
    system: 'Sun',
    a: { value: 1.0, unit: 'AU' },
    e: 0.0167,
    radius: { value: 6371, unit: 'km' },
    color: '#1E90FF',
    angle: 1.796,
    period: { value: -365.256, unit: 'days' },
    x: { value: 1.0, unit: 'AU' },
    y: { value: 0.017, unit: 'AU' },
    z: { value: 0.0, unit: 'AU' }
  },
  {
    name: 'Mars',
    type: 'desert planet',
    category: 'planet',
    system: 'Sun',
    a: { value: 1.524, unit: 'AU' },
    e: 0.0934,
    radius: { value: 3389, unit: 'km' },
    color: '#D14A28',
    angle: 2.182,
    period: { value: -686.98, unit: 'days' },
    x: { value: 1.524, unit: 'AU' },
    y: { value: 0.024, unit: 'AU' },
    z: { value: 0.002, unit: 'AU' }
  },
  {
    name: 'Jupiter',
    type: 'gas giant',
    category: 'planet',
    system: 'Sun',
    a: { value: 5.203, unit: 'AU' },
    e: 0.0489,
    radius: { value: 69911, unit: 'km' },
    color: '#C08850',
    angle: 0.634,
    period: { value: -4332.59, unit: 'days' },
    x: { value: 5.203, unit: 'AU' },
    y: { value: 0.017, unit: 'AU' },
    z: { value: 0.003, unit: 'AU' }
  },
  {
    name: 'Saturn',
    type: 'gas giant',
    category: 'planet',
    system: 'Sun',
    a: { value: 9.537, unit: 'AU' },
    e: 0.0565,
    radius: { value: 58232, unit: 'km' },
    color: '#D2B48C',
    angle: 1.101,
    period: { value: -10759.22, unit: 'days' },
    x: { value: 9.537, unit: 'AU' },
    y: { value: 0.019, unit: 'AU' },
    z: { value: 0.003, unit: 'AU' }
  },
  {
    name: 'Uranus',
    type: 'ice giant',
    category: 'planet',
    system: 'Sun',
    a: { value: 19.191, unit: 'AU' },
    e: 0.0463,
    radius: { value: 25362, unit: 'km' },
    color: '#78D6FF',
    angle: 2.983,
    period: { value: -30687.15, unit: 'days' },
    x: { value: 19.191, unit: 'AU' },
    y: { value: -0.021, unit: 'AU' },
    z: { value: 0.004, unit: 'AU' }
  },
  {
    name: 'Neptune',
    type: 'ice giant',
    category: 'planet',
    system: 'Sun',
    a: { value: 30.069, unit: 'AU' },
    e: 0.0086,
    radius: { value: 24622, unit: 'km' },
    color: '#0053D6',
    angle: 0.526,
    period: { value: -60190.03, unit: 'days' },
    x: { value: 30.069, unit: 'AU' },
    y: { value: 0.03, unit: 'AU' },
    z: { value: 0.005, unit: 'AU' }
  },
  {
    name: 'Pluto',
    type: 'ice planet',
    category: 'planetoid',
    system: 'Sun',
    a: { value: 39.482, unit: 'AU' },
    e: 0.2488,
    radius: { value: 1188, unit: 'km' },
    color: '#B0A99F',
    angle: 4.585,
    period: { value: -90560.0, unit: 'days' },
    x: { value: 39.482, unit: 'AU' },
    y: { value: -0.033, unit: 'AU' },
    z: { value: 0.006, unit: 'AU' }
  }
];
