/**
 * Initializes and configures a full-screen canvas with a 2D rendering context.
 *
 * This function:
 * - Retrieves the canvas element by its ID (`spaceCanvas`).
 * - Ensures the canvas and its 2D rendering context exist, throwing an error otherwise.
 * - Adjusts the canvas resolution based on the device's pixel ratio for crisp rendering.
 * - Scales the rendering context to maintain proper drawing proportions.
 * - Sets the CSS size of the canvas to match the viewport dimensions.
 *
 * @returns {{ canvas: HTMLCanvasElement; space: CanvasRenderingContext2D }}
 *          An object containing the initialized canvas and its 2D rendering context.
 *
 * @throws {Error} If the canvas element or its rendering context is not found.
 *
 * @example
 * ```ts
 * const { canvas, space } = setupCanvas();
 * space.fillStyle = 'black';
 * space.fillRect(0, 0, canvas.width, canvas.height);
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
 */
export const setupCanvas = (): {
  canvas: HTMLCanvasElement;
  space: CanvasRenderingContext2D;
} => {
  // **Initialize Canvas**
  const canvas =
    (document.getElementById('spaceCanvas') as HTMLCanvasElement) || null;

  if (!canvas) throw Error('Required canvas element not found');

  // Transparent, so the blueprint grid behind the canvas shows through
  const space = canvas.getContext('2d');

  if (!space) throw Error('Required space context not found');

  const dpr = globalThis.devicePixelRatio || 1; // Get the device pixel ratio
  const width = globalThis.innerWidth;
  // The canvas starts below the header, so its centre is the centre of the visible space
  const header = document.querySelector<HTMLElement>('.mc-header');
  const top = header?.offsetHeight ?? 0;
  const height = globalThis.innerHeight - top;

  // Set "actual" size of the canvas in pixels
  canvas.width = width * dpr;
  canvas.height = height * dpr;

  // Scale the context so drawing operations appear correctly
  space.scale(dpr, dpr);

  // Maintain logical (CSS) size to match window dimensions
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.style.top = `${top}px`;

  return { canvas, space };
};
