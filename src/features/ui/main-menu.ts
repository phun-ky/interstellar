/**
 * Opens and closes the header links from the menu button on narrow screens.
 *
 * The button's `aria-expanded` shows the links (see `.mc-menu` in main.css).
 * Escape closes them and returns focus to the button, as do picking a link and
 * clicking anywhere outside the navigation.
 *
 * @param {Document} [root=document] - The document holding the header.
 *
 * @example
 * ```ts
 * setupMainMenu();
 * ```
 */
export const setupMainMenu = (root: Document = document): void => {
  const button = root.querySelector<HTMLButtonElement>('.mc-menu');
  const nav = button?.closest('nav');

  if (!button || !nav) return;

  const isOpen = () => button.getAttribute('aria-expanded') === 'true';
  const setOpen = (open: boolean) =>
    button.setAttribute('aria-expanded', String(open));

  button.addEventListener('click', () => setOpen(!isOpen()));

  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      button.focus();
    }
  });

  nav.addEventListener('click', (event) => {
    if ((event.target as Element).closest('a')) setOpen(false);
  });

  root.addEventListener('click', (event) => {
    if (isOpen() && !nav.contains(event.target as Node)) setOpen(false);
  });
};
