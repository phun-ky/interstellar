import { starfield } from './config';

export interface StarfieldStarInterface {
  x: number;
  y: number;
  brightness: number;
  size: number;
  parallaxFactor: number;
}

const BASE_WIDTH = 1920; // Reference width for NUM_STARS
const BASE_HEIGHT = 1080; // Reference height for NUM_STARS
const BASE_AREA = BASE_WIDTH * BASE_HEIGHT; // Reference area for star density
const BASE_NUM_STARS = 10000; // Star count at reference resolution

/**
 * Generates a starfield dynamically based on the canvas size, maintaining proportional star density.
 *
 * **Star Distribution Calculation:**
 * The number of stars is scaled relative to a base resolution ($1920 \times 1080$):
 * $$
 * N = \left( \frac{\text{screenArea}}{\text{BASE\_AREA}} \right) \times \text{BASE\_NUM\_STARS}
 * $$
 * where:
 * - $\text{screenArea} = \text{canvasWidth} \times \text{canvasHeight}$
 * - $\text{BASE\_AREA} = 1920 \times 1080$
 * - $\text{BASE\_NUM\_STARS} = 10000$
 *
 * Each star has:
 * - **Randomized coordinates** $(x, y)$ within the canvas.
 * - **Brightness** between **0.5** and **1.0**.
 * - **Size variations** between **0.0** and **1.0**.
 * - **Parallax factor** between **0.01** and **4.5**, determining depth effect.
 *
 * @param {number} canvasWidth - The width of the canvas in pixels.
 * @param {number} canvasHeight - The height of the canvas in pixels.
 * @returns {void} This function does not return a value; it populates the global starfield.
 *
 * @example
 * ```ts
 * generateStarfield(800, 600);
 * console.log(starfield.value.length); // Outputs the number of generated stars
 * ```
 *
 * @see [Parallax Effect](https://en.wikipedia.org/wiki/Parallax)
 */
export const generateStarfield = (
  canvasWidth: number,
  canvasHeight: number
): void => {
  starfield.value.length = 0; // Clear existing stars

  const screenArea = canvasWidth * canvasHeight;
  const starCount = Math.round((screenArea / BASE_AREA) * BASE_NUM_STARS);

  for (let i = 0; i < starCount; i++) {
    const starX = Math.random() * canvasWidth;
    const starY = Math.random() * canvasHeight;
    const star = {
      x: starX,
      y: starY,
      brightness: Math.random() * 0.5 + 0.5, // Vary brightness
      size: Math.random() * 1, // Small size variations
      parallaxFactor: 0.01 + Math.random() * 4.5 // Much subtler effect
    };

    starfield.value.push(star);
  }
};
