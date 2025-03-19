import { DistanceInterface, ValueInterface } from '../../types/distance';
import { StarsType } from '../../types/stars';
import { distanceToPixels } from '../../utils/distance/distance-to-pixels';
import { getBodyPosition } from '../celestial-bodies/utils/get-body-position';

/**
 * Updates the minimap by rendering Sagittarius A* and nearby stars, positioning them relative to the viewport center.
 *
 * **Rendering Details:**
 * - The **minimap size** is fixed at `150px`.
 * - **Sagittarius A*** is marked with a red dot and moves relative to the viewport center.
 * - **Stars** are rendered as coloured dots based on their real positions, adjusted to fit the minimap.
 * - The positions are offset using:
 * $$
 * x_{scaled} = \frac{x}{1000} \times 0.1 - \text{offsetXScaled}
 * $$
 * $$
 * y_{scaled} = \frac{y}{1000} \times 0.1 - \text{offsetYScaled}
 * $$
 * ensuring proper relative motion.
 *
 * @param {StarsType} stars - An array of stars with positional data.
 * @param {ValueInterface} scale - The scale factor for unit conversion.
 * @param {ValueInterface} offsetX - The x-offset relative to the viewport center.
 * @param {ValueInterface} offsetY - The y-offset relative to the viewport center.
 * @returns {void} This function does not return a value; it updates the minimap dynamically.
 *
 * @example
 * ```ts
 * const stars: StarsType = [
 *   { name: 'Star A', x: { value: 500, unit: 'ly' }, y: { value: -300, unit: 'ly' }, color: 'white' }
 * ];
 *
 * updateMinimap(stars, { value: 50 }, { value: 100 }, { value: 200 });
 * ```
 *
 * @see [Sagittarius A*](https://en.wikipedia.org/wiki/Sagittarius_A*)
 */
export const updateMinimap = (
  stars: StarsType,
  scale: ValueInterface,
  offsetX: ValueInterface,
  offsetY: ValueInterface
) => {
  const minimap = document.getElementById('minimap');

  if (!minimap) return;

  minimap.innerHTML = ''; // Clear previous stars

  const minimapSize = 150;
  const minimapCenterX = minimapSize / 2;
  const minimapCenterY = minimapSize / 2;
  // Sagittarius A* and stars should move relative to the viewport center
  const offsetXScaled = (offsetX.value / 1000) * 0.1;
  const offsetYScaled = (offsetY.value / 1000) * 0.1;
  // Add Sagittarius A* marker (moves relative to viewport center)
  const sagittariusX = minimapCenterX - offsetXScaled;
  const sagittariusY = minimapCenterY - offsetYScaled;
  const sagittarius = document.createElement('span');

  sagittarius.style.display = 'block';
  sagittarius.style.position = 'absolute';
  sagittarius.style.left = `${sagittariusX - 3}px`; // Center the dot
  sagittarius.style.top = `${sagittariusY - 3}px`;
  sagittarius.style.width = '6px';
  sagittarius.style.height = '6px';
  sagittarius.style.backgroundColor = 'red';
  sagittarius.style.borderRadius = '50%';
  minimap.appendChild(sagittarius);

  // Draw stars relative to viewport center
  stars.forEach((star) => {
    const { x, y } = getBodyPosition(star);
    const starX =
      minimapCenterX +
      (distanceToPixels(x as DistanceInterface, scale) / 1000) * 0.1 -
      offsetXScaled;
    const starY =
      minimapCenterY +
      (distanceToPixels(y as DistanceInterface, scale) / 1000) * 0.1 -
      offsetYScaled;
    const starDot = document.createElement('span');

    starDot.style.display = 'block';
    starDot.style.position = 'absolute';
    starDot.style.left = `${starX}px`;
    starDot.style.top = `${starY}px`;
    starDot.style.width = '4px';
    starDot.style.height = '4px';
    starDot.style.backgroundColor = star.color;
    starDot.style.borderRadius = '50%';

    minimap.appendChild(starDot);
  });
};
