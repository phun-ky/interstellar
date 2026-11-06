/**
 * The bottom bar on narrow screens: its Hold button holds and resumes the
 * simulation like the Systems panel's own, and its Systems button opens the
 * panel as a sheet above the bar.
 *
 * The open sheet is `.controls.is-open` (see main.css), and the button's
 * `aria-expanded` follows it. Escape closes the sheet and returns focus to the
 * button. The skip link opens the sheet before moving focus into it. On wide
 * screens the bar is hidden and none of this applies.
 *
 * @param {Document} [root=document] - The document holding the HUD.
 *
 * @example
 * ```ts
 * setupSystemsSheet();
 * ```
 */
export const setupSystemsSheet = (root: Document = document): void => {
  const toggle = root.getElementById('systemsToggle');
  const sheet = root.getElementById('systems');
  const hold = root.getElementById('pauseDock');

  if (!toggle || !sheet) return;

  const isNarrow = () => getComputedStyle(toggle).display !== 'none';
  const setOpen = (open: boolean) => {
    sheet.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () =>
    setOpen(toggle.getAttribute('aria-expanded') !== 'true')
  );

  sheet.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isNarrow() && sheet.matches('.is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Before the browser follows the link, so the panel is there to focus
  root.querySelector('.mc-skip')?.addEventListener('click', () => {
    if (isNarrow()) setOpen(true);
  });

  // The Systems panel's Hold button does the holding and updates both labels
  hold?.addEventListener('click', () => root.getElementById('pause')?.click());
};
