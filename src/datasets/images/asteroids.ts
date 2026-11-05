export interface AsteroidImageInterface {
  name: string;
  url: string;
}

export type AsteroidImagesType = AsteroidImageInterface[];

export const MOONS: AsteroidImagesType = [
  {
    name: 'Vesta',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Vesta_full_mosaic.jpg'
  },
  {
    name: 'Eros',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Eros_-_PIA02923_%28color%29.jpg'
  },
  {
    name: 'Pallas',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Potw1749a_Pallas_crop.png'
  },
  {
    name: 'Hygiea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/SPHERE_image_of_Hygiea.jpg'
  },
  {
    name: 'Interamnia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/704_Interamnia_VLT_%282021%29%2C_deconvolved.pdf/page1-394px-704_Interamnia_VLT_%282021%29%2C_deconvolved.pdf.jpg'
  },
  {
    name: 'Euphrosyne',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/31_Euphrosyne_VLT_%282021%29%2C_deconvolved.pdf/page1-370px-31_Euphrosyne_VLT_%282021%29%2C_deconvolved.pdf.jpg'
  },
  {
    name: 'Psyche',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Psyche_VLT.png'
  },
  {
    name: 'Davida',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/511_Davida_VLT_%282021%29%2C_deconvolved.pdf/page1-350px-511_Davida_VLT_%282021%29%2C_deconvolved.pdf.jpg'
  },
  {
    name: 'Europa',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/52Eur-LB1-richfield.jpg'
  },
  {
    name: 'Juno',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/3_Juno_VLT_%282021%29.png'
  },
  {
    name: 'Eunomia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/15_Eunomia_VLT_%282021%29%2C_deconvolved.pdf/page1-370px-15_Eunomia_VLT_%282021%29%2C_deconvolved.pdf.jpg'
  }
];
