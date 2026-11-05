export interface CometImageInterface {
  name: string;
  url: string;
}

export type CometImagesType = CometImageInterface[];

export const COMETS: CometImagesType = [
  {
    name: "Halley's Comet",
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Lspn_comet_halley.jpg'
  },
  {
    name: 'Comet Hale-Bopp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Comet_Hale-Bopp_1995O1.jpg'
  },
  {
    name: 'Comet 67P/Churyumov–Gerasimenko',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Comet_67P_True_color.jpg'
  },
  {
    name: 'Comet Encke',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Comet_Encke.jpg'
  }
];
