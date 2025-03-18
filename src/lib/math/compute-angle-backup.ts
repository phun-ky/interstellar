// import { J2000, MS_1_DAY } from '../../constants';
// import { CelestialBodyType, Radian } from '../../types/celestial-bodies';
// import { TemporalInterface } from '../../types/temporal';

// import { computeMeanAnomaly } from './compute-mean-anomaly';
// import { eccentricToTrueAnomaly } from './eccentric-to-true-anomaly';
// import { solveKepler } from './solve-kepler';

// /**
//  * Computes the orbital angle (true anomaly, $ν$) of a celestial body for a given date and time step.
//  *
//  * ## **Mathematical Explanation:**
//  * This function determines the **true anomaly** ($ν$) based on the time elapsed since the
//  * **J2000 epoch** (January 1, 2000) and the provided time step. The calculation follows these steps:
//  *
//  * ### **Step 1: Compute Time Elapsed Since J2000**
//  * The number of days since **J2000** is computed as:
//  * $$ \Delta T = \frac{t - t_{J2000}}{\text{MS\\_1\\_DAY}} $$
//  * where:
//  * - $t$ is the current date in milliseconds.
//  * - $t_{J2000}$ is **J2000** (2000-01-01T00:00:00Z).
//  * - **MS_1_DAY** is the number of milliseconds in one day.
//  *
//  * ### **Step 2: Compute the Mean Anomaly ($M$)**
//  * The **mean anomaly** is calculated as:
//  * $$ M = M_0 + n \cdot (\Delta T + \text{timeStep}) $$
//  * where:
//  * - $M_0$ is the initial mean anomaly at **J2000**.
//  * - $n$ is the mean motion (orbital angular velocity).
//  * - $\text{timeStep}$ is the time step in days.
//  *
//  * ### **Step 3: Solve Kepler’s Equation for Eccentric Anomaly ($E$)**
//  * Kepler’s equation:
//  * $$ M = E - e \sin(E) $$
//  * is solved numerically to obtain the **eccentric anomaly** ($E$).
//  *
//  * ### **Step 4: Convert Eccentric Anomaly ($E$) to True Anomaly ($ν$)**
//  * Using the relation:
//  * $$ ν = 2 \tan^{-1} \left( \sqrt{\frac{1+e}{1-e}} \tan\left(\frac{E}{2}\right) \right) $$
//  *
//  * ### **Step 5: Adjust the True Anomaly for Certain Bodies**
//  * - For **comets**, the final **true anomaly** is adjusted by subtracting the **eccentricity** ($e$).
//  * - For **stars and other celestial objects**, the computed **true anomaly** is used directly.
//  *
//  * @param {Date} date - The date for which to compute the true anomaly.
//  * @param {CelestialBodyType} celestialBody - The celestial body for which to compute the true anomaly.
//  * @param {TemporalInterface} timeStep - The time step in days since the last frame.
//  * @returns {Radian} The computed angle for the celestial body
//  *
//  * @example
//  * ```ts
//  * const date = new Date('2025-06-15T12:00:00Z');
//  * const earth = { name: 'Earth', e: 0.0167, angle: 0 };
//  * const timeStep = 1; // 1 day
//  * const angle = computeAngle(earth, date, timeStep);
//  * console.log(earth, angle); // Output: Computed true anomaly in radians
//  * ```
//  *
//  * @see [Kepler's Equation (Wikipedia)](https://en.wikipedia.org/wiki/Kepler%27s_equation)
//  * @see [True Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/True_anomaly)
//  * @see [Mean Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/Mean_anomaly)
//  * @see [Orbital Mechanics (NASA)](https://solarsystem.nasa.gov/basics/chapter2-2/)
//  */
// export const computeAngle = (
//   date: Date,
//   celestialBody: CelestialBodyType,
//   timeStep: TemporalInterface
// ): Radian => {
//   // Calculate time elapsed since J2000 in days
//   const deltaT = (date.getTime() - J2000.getTime()) / MS_1_DAY;
//   // Compute mean anomaly (M) with time step
//   const scaledTimeStep = timeStep.value / celestialBody.period.value; // Normalize by period
//   const M = computeMeanAnomaly(celestialBody, deltaT + scaledTimeStep);
//   // Solve Kepler's equation for eccentric anomaly (E)
//   const E = solveKepler(M, celestialBody.e);
//   // Convert eccentric anomaly (E) to true anomaly (ν)
//   const V = eccentricToTrueAnomaly(E, celestialBody.e);

//   // Set the angle (true anomaly) for the celestial body
//   if ('q' in celestialBody) {
//     // For comets, adjust the true anomaly by subtracting eccentricity (e)
//     return V - celestialBody.e;
//   } else {
//     // For stars and other bodies, use the true anomaly directly
//     return V;
//   }
// };
