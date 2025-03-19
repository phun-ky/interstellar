import { computeAngle } from '../../../lib/math/compute-angle';
import { wrapAngle } from '../../../lib/math/wrap-angle';
import { CelestialBodyType } from '../../../types/celestial-bodies';
import { TimeStepInterface } from '../../../types/temporal';

/**
 * Updates the **orbital position** (angle) of a celestial body based on the given time step.
 *
 * **Mathematical Explanation:**
 *
 * The **true anomaly** ($V$), which determines a celestial body's position in its orbit,
 * changes over time according to **Kepler’s Laws**. The new angle is computed as:
 * $$
 * V(t) = V_0 + \Delta V
 * $$
 * where:
 * - $V_0$ is the **current true anomaly**.
 * - $\Delta V$ is the **change in anomaly** over the given time step.
 *
 * The updated **true anomaly** is then **wrapped within** the range $[0, 2\pi]$ to ensure periodicity.
 *
 * @param {TimeStepInterface} timeStep - The time step ($\Delta t$) that determines the amount of orbital progression.
 * @returns {(body: CelestialBodyType) => void} A function that updates a celestial body's angle.
 *
 * @example
 * ```ts
 * const timeStep = { value: 1, unit: 'day' };
 * const update = updatePosition(timeStep);
 *
 * const planet = { name: 'Earth', angle: 1.5, ...otherProps };
 * update(planet);
 * console.log(planet.angle); // Updated angle in radians, wrapped within [0, 2π]
 * ```
 *
 * @see [True Anomaly & Orbital Mechanics](https://en.wikipedia.org/wiki/True_anomaly)
 */
export const updatePosition = (
  timeStep: TimeStepInterface
): ((body: CelestialBodyType) => void) => {
  return (body: CelestialBodyType) => {
    body.angle = computeAngle(body, timeStep);
    body.angle = wrapAngle(body.angle);
  };
};
