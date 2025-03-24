/* eslint-disable import/no-unused-modules */
export interface PlanetImageInterface {
  name: string;
  url: string;
}

export type PlanetImagesType = PlanetImageInterface[];

export const PLANETS: PlanetImagesType = [
  {
    name: 'Mercury',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg'
  },
  {
    name: 'Venus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg'
  },
  {
    name: 'Earth',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg'
  },
  {
    name: 'Mars',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg'
  },
  {
    name: 'Jupiter',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg'
  },
  {
    name: 'Saturn',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg'
  },
  {
    name: 'Uranus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'
  },
  {
    name: 'Neptune',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg'
  },
  {
    name: 'Pluto',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg'
  }
];
