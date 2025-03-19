<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / datasets/galaxies

# datasets/galaxies

> Last updated 2025-03-19T08:29:08.328Z

## Table of Contents

- [Variables](#variables)
  - [GALAXIES](#galaxies)

## Variables

### GALAXIES

```ts
const GALAXIES: GalaxiesType;
```

Defined in:
[datasets/galaxies.ts:19](https://github.com/phun-ky/interstellar/blob/main/src/datasets/galaxies.ts#L19)

Represents a collection of galaxies within the space visualization.

Each galaxy entry includes physical properties, distance measurements, and
details about its central supermassive black hole.

Uses [GalaxiesType](../types/galaxies.md#galaxiestype).

```ts
export const GALAXIES: GalaxiesType = [
  {
    name: 'Milky Way',
    type: 'Barred Spiral',
    /** Diameter of the galaxy in light-years. */
    diameter: { value: 105700, unit: 'ly' },
    /** Distance from the reference point (Milky Way itself). */
    distance: { value: 0, unit: 'ly' },
    /** Supermassive black hole at the center. */
    blackHole: {
      name: 'Sagittarius A*',
      /** Mass of the black hole in Solar Masses ($M_\odot$). */
      mass: 4.154e6,
      /** Schwarzschild radius (approximate) in AU. */
      radius: { value: 0.08, unit: 'AU' },
      /** Positional reference within the galaxy in AU. */
      x: { value: 0, unit: 'AU' },
      y: { value: 0, unit: 'AU' }
    }
  },
  {
    name: 'Andromeda',
    type: 'Barred Spiral',
    diameter: { value: 220000, unit: 'ly' },
    distance: { value: 2537002537000, unit: 'ly' }, // Distance from the Milky Way in light-years
    blackHole: {
      name: 'Andromeda Central Black Hole',
      mass: 1.1e8,
      radius: { value: 5, unit: 'AU' },
      x: { value: 0, unit: 'AU' },
      y: { value: 160442417000, unit: 'AU' }
    }
  },
  {
    name: 'Triangulum',
    type: 'Spiral',
    diameter: { value: 60000, unit: 'ly' },
    distance: { value: 3000003000000, unit: 'ly' }, // Distance in light-years
    blackHole: {
      name: 'Triangulum Central Black Hole',
      mass: 1.5e6,
      radius: { value: 0.1, unit: 'AU' },
      x: { value: 0, unit: 'AU' },
      y: { value: 189723000000, unit: 'AU' }
    }
  }
];
```

#### Example

```ts
console.log(GALAXIES[0].name); // "Milky Way"
```

---

**Contributing**

Want to contribute? Please read the
[CONTRIBUTING.md](https://github.com/phun-ky/interstellar/blob/main/CONTRIBUTING.md)
and
[CODE_OF_CONDUCT.md](https://github.com/phun-ky/interstellar/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help
get rid of secondary activities and to enhance systems already in place, be it
documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to
maintain my projects, create new ones and contribute to the large community
we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net)
is licensed under a
[GPL-3.0 License](https://choosealicense.com/licenses/gpl-3.0/).
