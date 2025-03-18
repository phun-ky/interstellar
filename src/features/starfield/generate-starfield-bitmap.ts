import { ValueInterface } from '../../types/distance';

import { starfield } from './config';

/**
 * Generates an offscreen canvas containing a starfield and converts it into an `ImageBitmap`.
 *
 * ## **Rendering Process:**
 * - Uses an **OffscreenCanvas** to improve performance.
 * - Iterates through the `starfield` array and renders each star based on:
 *   - **Size**: Proportional to `scale.value`, ensuring a minimum visible size.
 *   - **Parallax Factor**: Determines star brightness and color.
 *
 * ## **Star Color Mapping:**
 * - Stars are coloured based on their **parallax factor**, simulating depth perception:
 *   - $> 4.51$ → **Bright white** (`rgb(255,255,255)`).
 *   - $> 3.51$ → **Slightly bluish-white** (`rgb(220,220,255)`).
 *   - $> 2.51$ → **Light blue** (`rgb(200,200,255)`).
 *   - $> 1.51$ → **Deeper blue** (`rgb(170,170,255)`).
 *   - Else → **Faintest, furthest away** (`rgb(150,150,255)`).
 *
 * Once drawn, the canvas is converted into an `ImageBitmap` for efficient rendering.
 *
 * @async
 * @param {number} width - The width of the offscreen canvas.
 * @param {number} height - The height of the offscreen canvas.
 * @param {ValueInterface} scale - The scale factor for determining star sizes.
 * @returns {Promise<void>} A promise that resolves once the `ImageBitmap` is created.
 *
 * @example
 * ```ts
 * await generateStarfieldBitmap(1920, 1080, { value: 1 });
 * console.log(globalThis.STARFIELD_BITMAP); // Outputs the generated starfield bitmap
 * ```
 *
 * @see [OffscreenCanvas API](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)
 */
export const generateStarfieldBitmap = async (
  width: number,
  height: number,
  scale: ValueInterface
): Promise<void> => {
  const offscreen = new OffscreenCanvas(width, height);
  const space = offscreen.getContext('2d');

  if (!space) return;

  space.clearRect(0, 0, width, height);
  space.save();

  for (const star of starfield.value) {
    const starSize = Math.max(star.size * Math.min(scale.value, 1), 1);

    if (star.parallaxFactor > 4.51) {
      space.fillStyle = 'rgb(255,255,255)'; // Brightest, closest stars
    } else if (star.parallaxFactor > 3.51) {
      space.fillStyle = 'rgb(220,220,255)'; // Slightly bluish-white
    } else if (star.parallaxFactor > 2.51) {
      space.fillStyle = 'rgb(200,200,255)'; // Light blue
    } else if (star.parallaxFactor > 1.51) {
      space.fillStyle = 'rgb(170,170,255)'; // Deeper blue
    } else {
      space.fillStyle = 'rgb(150,150,255)'; // Faintest, furthest away
    }

    space.beginPath();
    space.arc(star.x, star.y, starSize, 0, Math.PI * 2);
    space.fill();
  }

  space.restore();

  // Convert to ImageBitmap
  globalThis.STARFIELD_BITMAP = await createImageBitmap(offscreen);
};
