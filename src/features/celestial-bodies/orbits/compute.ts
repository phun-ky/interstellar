import { TWO_PI } from '../../../config/constants';
import {
  CelestialBodiesType,
  CelestialBodyType
} from '../../../types/celestial-bodies';
import { convertDistance } from '../../../utils/distance/convert-distance';

/**
 * Computes the **orbital paths** for celestial bodies orbiting around a central mass (e.g., a black hole).
 *
 * **Mathematical Explanation:**
 *
 * In an elliptical orbit, the **semi-major axis** ($a$) and **eccentricity** ($e$) define the shape of the orbit.
 * The **semi-minor axis** ($b$) is calculated as:
 * $$
 * b = a \sqrt{1 - e^2}
 * $$
 * where:
 * - $a$ is the **semi-major axis** in real-world units (e.g., AU or light-years).
 * - $b$ is the **semi-minor axis** in real-world units.
 * - $e$ is the **orbital eccentricity** ($0 \leq e < 1$).
 *
 * The **focus shift** ($f$) is given by:
 * $$
 * f = e \cdot a
 * $$
 * The orbital path is generated using parametric equations:
 * $$
 * x(\theta) = a \cos\theta - f
 * $$
 * $$
 * y(\theta) = b \sin\theta
 * $$
 * where $\theta$ is the angle parameter ranging from $0$ to $2\pi$.
 *
 * To ensure smooth rendering, the step size is dynamically adjusted:
 * $$
 * \Delta \theta = \frac{0.02}{1 + e}
 * $$
 * which reduces step size for **highly eccentric** orbits, ensuring better accuracy.
 *
 * @param {CelestialBodiesType} celestialBodies - An array of celestial bodies with orbital parameters.
 * @returns {void} This function does not return a value.
 *
 * @example
 * ```ts
 * const celestialBodies: CelestialBodiesType = [
 *   {
 *     name: 'Star A',
 *     a: { value: 5000, unit: 'AU' },
 *     e: 0.1,
 *     radius: { value: 696340, unit: 'km' },
 *     color: 'white',
 *     x: { value: 0, unit: 'AU' },
 *     y: { value: 0, unit: 'AU' },
 *     z: { value: 0, unit: 'AU' },
 *     angle: 0,
 *     period: { value: 365, unit: 'days' }
 *   },
 *   {
 *     name: 'Star B',
 *     a: { value: 10000, unit: 'AU' },
 *     e: 0.3,
 *     radius: { value: 696340, unit: 'km' },
 *     color: 'white',
 *     x: { value: 0, unit: 'AU' },
 *     y: { value: 0, unit: 'AU' },
 *     z: { value: 0, unit: 'AU' },
 *     angle: 0,
 *     period: { value: 365, unit: 'days' }
 *   }
 * ];
 * computeOrbits(celestialBodies);
 * console.log(celestialBodies[0].orbitPath); // Output: Array of { x, y } points in real-world units
 * ```
 *
 * @see [Kepler's Laws](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion)
 */
export const computeOrbits = (celestialBodies: CelestialBodiesType): void => {
  celestialBodies.forEach((body: CelestialBodyType) => {
    // Compute semi-minor axis (miA = a * sqrt(1 - e^2))
    const normalizedA = convertDistance(body.a, 'AU');

    body.miA = normalizedA.value * Math.sqrt(1 - body.e ** 2);

    // Compute focus shift (focus_x = e * a)
    body.focus_x = body.e * normalizedA.value;

    // Initialize orbit path
    body.orbitPath = [];

    // Dynamic step size based on eccentricity for smooth orbit rendering
    const baseSteps = globalThis.BASE_STEPS || 1000; // Ensuring at least twice as many points
    const eccentricityFactor = 1 + body.e * 2; // More steps for high-eccentricity orbits
    const scaledSteps = Math.max(
      baseSteps,
      Math.floor(baseSteps * eccentricityFactor)
    );
    const step = TWO_PI / scaledSteps;

    for (let theta = 0; theta < TWO_PI; theta += step) {
      // Parametric equations for the elliptical orbit (in real-world units)
      const x = normalizedA.value * Math.cos(theta) - body.focus_x;
      const y = body.miA * Math.sin(theta);

      body.orbitPath.push({ x, y });
    }

    // Close the orbit path by adding the first point again
    body.orbitPath.push({ ...body.orbitPath[0] });
  });
};
