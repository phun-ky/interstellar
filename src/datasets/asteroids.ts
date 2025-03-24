import { AsteroidsType } from '../types/celestial-bodies/asteroids';

/**
 * Represents a collection of well-known asteroids within the solar system simulation.
 *
 * This dataset includes orbital elements and physical characteristics of asteroids.
 *
 * Uses {@link CometsType}.
 *
 * {@includeCode ../datasets/asteroids.ts#datasetAsteroids}
 *
 * @example
 * ```ts
 * console.log(ASTEROIDS[0].name); // "Ceres"
 * ```
 */
export const ASTEROIDS: AsteroidsType = [
  // #region datasetAsteroids

  {
    name: 'Ceres',
    type: 'main-belt asteroid',
    category: 'dwarf planet',
    spectralType: 'c-type',
    system: 'Sun',
    a: { value: 2.766, unit: 'AU' },
    e: 0.079,
    i: 10.6,
    w: 72.6,
    om: 80.4,
    angle: 113.4,
    period: { value: -1680.5, unit: 'days' },
    q: 2.55,
    radius: { value: 469.7, unit: 'km' },
    color: '#cccccc',
    size: 1
  },
  {
    name: 'Vesta',
    type: 'main-belt asteroid',
    category: 'large asteroid',
    spectralType: 'v-type', // vesta has a unique basaltic surface
    system: 'Sun',
    a: { value: 2.362, unit: 'AU' },
    e: 0.09,
    i: 7.1,
    w: 151.2,
    om: 103.8,
    angle: 316.7,
    period: { value: -1325.2, unit: 'days' },
    q: 2.151,
    radius: { value: 262.7, unit: 'km' },
    color: '#999999',
    size: 1
  },
  {
    name: 'Eros',
    type: 'near-earth asteroid',
    category: 'amor group',
    spectralType: 's-type',
    system: 'Sun',
    a: { value: 1.458, unit: 'AU' },
    e: 0.223,
    i: 10.8,
    w: 178.9,
    om: 304.3,
    angle: 89.0,
    period: { value: -643.2, unit: 'days' },
    q: 1.134,
    radius: { value: 8.4, unit: 'km' },
    color: '#aaaaaa',
    size: 1
  },
  // #endregion datasetComets
  {
    name: 'Pallas',
    type: 'main-belt asteroid',
    category: 'large asteroid',
    spectralType: 'b-type',
    system: 'Sun',
    a: { value: 2.773, unit: 'AU' },
    e: 0.231,
    i: 34.8,
    w: 310.2,
    om: 173.1,
    angle: 33.2,
    period: { value: -1684.9, unit: 'days' },
    q: 2.13,
    radius: { value: 256, unit: 'km' },
    color: '#888888',
    size: 1
  },
  {
    name: 'Hygiea',
    type: 'main-belt asteroid',
    category: 'large asteroid',
    spectralType: 'c-type',
    system: 'Sun',
    a: { value: 3.141, unit: 'AU' },
    e: 0.112,
    i: 3.8,
    w: 312.3,
    om: 283.2,
    angle: 152.2,
    period: { value: -2033.8, unit: 'days' },
    q: 2.788,
    radius: { value: 216.5, unit: 'km' },
    color: '#666666',
    size: 1
  },
  {
    name: 'Interamnia',
    type: 'main-belt asteroid',
    category: 'large asteroid',
    spectralType: 'f-type',
    system: 'Sun',
    a: { value: 3.062, unit: 'AU' },
    e: 0.127,
    i: 17.3,
    w: 339.4,
    om: 73.1,
    angle: 45.2,
    period: { value: -1960.9, unit: 'days' },
    q: 2.671,
    radius: { value: 166, unit: 'km' },
    color: '#777777',
    size: 1
  },
  {
    name: 'Euphrosyne',
    type: 'main-belt asteroid',
    category: 'large asteroid',
    spectralType: 'c-type',
    system: 'Sun',
    a: { value: 3.155, unit: 'AU' },
    e: 0.223,
    i: 26.3,
    w: 34.8,
    om: 359.2,
    angle: 180.5,
    period: { value: -2045.5, unit: 'days' },
    q: 2.451,
    radius: { value: 134, unit: 'km' },
    color: '#555555',
    size: 1
  },
  {
    name: 'Psyche',
    type: 'main-belt asteroid',
    category: 'large asteroid',
    spectralType: 'm-type',
    system: 'Sun',
    a: { value: 2.924, unit: 'AU' },
    e: 0.14,
    i: 3.1,
    w: 228.0,
    om: 150.2,
    angle: 87.1,
    period: { value: -1820.1, unit: 'days' },
    q: 2.515,
    radius: { value: 111, unit: 'km' },
    color: '#999999',
    size: 1
  },
  {
    name: 'Davida',
    type: 'main-belt asteroid',
    category: 'large asteroid',
    spectralType: 'c-type',
    system: 'Sun',
    a: { value: 3.168, unit: 'AU' },
    e: 0.195,
    i: 15.9,
    w: 308.2,
    om: 296.1,
    angle: 120.3,
    period: { value: -2059.6, unit: 'days' },
    q: 2.549,
    radius: { value: 149, unit: 'km' },
    color: '#444444',
    size: 1
  },
  {
    name: 'Europa',
    type: 'main-belt asteroid',
    category: 'large asteroid',
    spectralType: 'c-type',
    system: 'Sun',
    a: { value: 3.101, unit: 'AU' },
    e: 0.101,
    i: 7.5,
    w: 87.7,
    om: 304.4,
    angle: 210.6,
    period: { value: -1977.9, unit: 'days' },
    q: 2.788,
    radius: { value: 156.5, unit: 'km' },
    color: '#555555',
    size: 1
  },
  {
    name: 'Juno',
    type: 'main-belt asteroid',
    category: 'large asteroid',
    spectralType: 's-type',
    system: 'Sun',
    a: { value: 2.67, unit: 'AU' },
    e: 0.257,
    i: 12.9,
    w: 248.3,
    om: 169.8,
    angle: 100.2,
    period: { value: -1594.4, unit: 'days' },
    q: 1.986,
    radius: { value: 117, unit: 'km' },
    color: '#aaaaaa',
    size: 1
  },
  {
    name: 'Eunomia',
    type: 'main-belt asteroid',
    category: 'large asteroid',
    spectralType: 's-type',
    system: 'Sun',
    a: { value: 2.643, unit: 'AU' },
    e: 0.186,
    i: 11.7,
    w: 97.5,
    om: 293.3,
    angle: 60.4,
    period: { value: -1567.6, unit: 'days' },
    q: 2.153,
    radius: { value: 136, unit: 'km' },
    color: '#bbbbbb',
    size: 1
  }
];
