import { AsteroidBeltsType } from '../types/asteroid-belts';

/**
 * Predefined asteroid belts in the solar system visualization.
 *
 * @example
 * ```ts
 * console.log(ASTEROID_BELTS[0].name); // "Main Asteroid Belt"
 * ```
 *
 * @see https://en.wikipedia.org/wiki/Asteroid_belt
 * @see https://en.wikipedia.org/wiki/Kuiper_belt
 */
export const ASTEROID_BELTS: AsteroidBeltsType = [
  {
    name: 'Main Asteroid Belt',
    innerRadius: 2.1,
    outerRadius: 3.3,
    color: '#C4C4C4', // Light gray (rocky bodies)
    opacity: 0.3,
    density: 0.8
  },
  {
    name: 'Kuiper Belt',
    innerRadius: 30,
    outerRadius: 50,
    color: '#88CCEE', // Light blue (icy bodies)
    opacity: 0.2,
    density: 0.5
  }
];
