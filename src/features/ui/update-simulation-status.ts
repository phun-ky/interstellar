/**
 * Shows whether the simulation runs or holds: the status in the header
 * (`● nominal` / `◌ hold`) and the label of the hold button.
 *
 * @param {boolean} paused - Whether the simulation is paused.
 *
 * @example
 * ```ts
 * updateSimulationStatus(true); // header shows "◌ hold", the button "Resume"
 * ```
 */
export const updateSimulationStatus = (paused: boolean): void => {
  const statusElement = document.getElementById('simStatus');
  const pauseButtonElement = document.getElementById('pause');

  if (statusElement) {
    statusElement.textContent = paused ? '◌ hold' : '● nominal';
    statusElement.classList.toggle('is-hold', paused);
  }

  if (pauseButtonElement) {
    pauseButtonElement.textContent = paused ? 'Resume' : 'Hold';
    pauseButtonElement.setAttribute('aria-pressed', String(paused));
  }
};

/**
 * Shows which body the camera is locked on in the header (`// Lock: Earth`),
 * or hides it when nothing is locked. The minimap is hidden while locked,
 * since the view then follows the body rather than a place in the galaxy.
 *
 * @param {string | null} name - The locked body's name, or `null` for no lock.
 *
 * @example
 * ```ts
 * updateLockStatus('Earth');
 * updateLockStatus(null);
 * ```
 */
export const updateLockStatus = (name: string | null): void => {
  const lockElement = document.getElementById('lockStatus');
  const nameElement = document.getElementById('lockStatusName');

  if (!lockElement || !nameElement) return;

  nameElement.textContent = name ?? '';
  lockElement.hidden = name === null;

  const minimapElement = document.getElementById('minimap');

  if (minimapElement) minimapElement.hidden = name !== null;
};
