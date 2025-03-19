/**
 * Initializes a circular minimap element on the webpage if it does not already exist.
 *
 * **Minimap Properties:**
 * - Positioned at the **bottom-right** corner of the viewport.
 * - **Circular shape** achieved using `borderRadius: 50%`.
 * - **Fixed size** of `200px x 200px`.
 * - Styled with a **dark background** (`#050807`) and a **teal border** (`#47B8BE`).
 * - **Non-interactable** (`pointerEvents: none`).
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
    minimap.style.position = 'absolute';
    minimap.style.bottom = '2em';
    minimap.style.right = '2em';
    minimap.style.width = '200px';
    minimap.style.height = '200px';
    minimap.style.borderRadius = '50%'; // Make it a circle
    minimap.style.background = '#050807';
    minimap.style.border = '2pt solid #47B8BE';
    minimap.style.overflow = 'hidden';
    minimap.style.pointerEvents = 'none'; // Prevent user interaction

    document.body.appendChild(minimap);
  }
};
