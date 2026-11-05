export interface StarImageInterface {
  name: string;
  url: string;
}

export type StarImagesType = StarImageInterface[];

export const STARS: StarImagesType = [
  {
    name: 'Sun',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg'
  },
  {
    name: 'Vega',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Star-Vega.png'
  },
  {
    name: 'Altair',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Altair.jpg'
  },
  {
    name: 'Deneb',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Deneb_DSS.png'
  },
  {
    name: 'Spica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Spica_DSS.png'
  }
];
