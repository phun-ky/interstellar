/**
 * Initializes a circular minimap element on the webpage if it does not already exist.
 *
 * Its look and placement (a circle in the **bottom-left** corner of the viewport)
 * come from the `#minimap` rule in `styles/main.css`.
 *
 * @returns {void} This function does not return a value; it ensures a minimap element is present on the page.
 *
 * @example
 * ```ts
 * initializeMinimap();
 * ```
 */
export const initializeMinimap = (): void => {
  let minimap = document.getElementById('minimap');

  if (!minimap) {
    minimap = document.createElement('div');
    minimap.id = 'minimap';
    minimap.setAttribute('aria-hidden', 'true');

    document.body.appendChild(minimap);
  }
};
