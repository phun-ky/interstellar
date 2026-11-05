/* eslint-disable import/no-unused-modules */
import { MOONS, PLANETS } from '@interstellar-tools/constants';

import { getBodyPosition } from '../../features/celestial-bodies/utils/get-body-position';

import './styles/bodiesInViewport.css';

const html = String.raw;

export type BodiesInViewportPropsType = {
  bodies: Set<string>;
};

/**
 * Renders the "In view" panel: a telemetry table of the bodies currently in the
 * viewport, with each body's distance from its parent (the Sun for planets, the
 * planet for moons). The locked body is marked instead of showing a distance.
 *
 * @param {BodiesInViewportPropsType} props - The names of the bodies in the viewport.
 * @returns {string} The panel's HTML, or an empty string when nothing is in view.
 *
 * @example
 * ```ts
 * element.innerHTML = BodiesInViewport({ bodies: new Set(['Earth', 'Mars']) });
 * ```
 */
export const BodiesInViewport = (props: BodiesInViewportPropsType) => {
  const { bodies } = props;
  const rows = [...bodies]
    .slice(-6)
    .map((name) =>
      [...PLANETS, ...MOONS].find(
        (body) => body.name.toLowerCase() === name.toLowerCase()
      )
    )
    .filter((body) => body !== undefined)
    .map((body) => {
      const isLocked = globalThis.LOCKED_CELESTIAL_BODY?.id === body.id;
      const { x, y } = getBodyPosition(body);
      const distance = isLocked
        ? 'Lock'
        : Math.hypot(x.value, y.value).toFixed(2);

      return html`<tr class="int${isLocked ? ' is-locked' : ''}">
        <td class="int body">${body.name}</td>
        <td class="int distance">${distance}</td>
      </tr>`;
    });

  if (!rows.length) return '';

  return html`<section class="int mc-panel" aria-labelledby="inViewTitle">
    <h2 class="int mc-ptitle" id="inViewTitle">
      <span class="int">In view</span
      ><b class="int">${String(rows.length).padStart(2, '0')}</b>
    </h2>
    <table class="int">
      <thead>
        <tr>
          <th class="int" scope="col">Body</th>
          <th class="int distance" scope="col">r (au)</th>
        </tr>
      </thead>
      <tbody>
        ${rows.join('')}
      </tbody>
    </table>
  </section>`;
};
