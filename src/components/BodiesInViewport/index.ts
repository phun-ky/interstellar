/* eslint-disable import/no-unused-modules */
import gasPlanetIcon from '../../assets/icons/gas-planet.svg';
import icePlanetIcon from '../../assets/icons/ice-planet.svg';
import moonIcon from '../../assets/icons/moon.svg';
import planetIcon from '../../assets/icons/planet.svg';
import { MOONS } from '../../datasets/moons';
import { PLANETS } from '../../datasets/planets';
import { CelestialBodyType } from '../../types/celestial-bodies';

import './styles/bodiesInViewport.css';

const html = String.raw;

export type BodiesInViewportPropsType = {
  bodies: Set<string>;
};

export const getIconForBody = (body: CelestialBodyType): string => {
  if (!body) return planetIcon;

  const { name, type = '', category } = body;

  if (!name || name === '') return planetIcon;

  if (category.includes('satellite')) return moonIcon;

  if (type.includes('ice')) return icePlanetIcon;

  if (type.includes('gas')) return gasPlanetIcon;

  return planetIcon;
};

export const BodiesInViewport = (props: BodiesInViewportPropsType) => {
  const { bodies } = props;

  if (!bodies.size) return '';

  // const noPlanets = [...bodies].filter((body) =>
  //   body.type.includes('planet')
  // ).length;
  // const noMoons = [...bodies].filter((body) =>
  //   body.category.includes('satellite')
  // ).length;
  const bodiesHTML = [...bodies]
    .slice(-6)
    .map((name) => {
      const body = [...PLANETS, ...MOONS].find((body) => {
        return body.name.toLowerCase() == name.toLowerCase();
      });

      if (!body) return '';

      const { radius, color } = body;
      //const size = Math.max(distanceToPixels(radius, SCALE), 7);
      const size = 7;
      //style="--int-ui-body-icon-size: calc(0.3em * ${size}); --int-ui-body-icon-fill: ${color};"
      const icon = getIconForBody(body);

      return html`<li class="int">
        <span class="int body">${name}</span>
        <span
          class="int icon"
          style="--int-ui-body-icon-size: calc(0.3em * ${size}); --int-ui-body-icon-fill: ${color};"
          >${icon}</span
        >
      </li>`;
    })
    .join('\n');

  return html`<ul class="int">
    ${bodiesHTML}
  </ul>`;
};
