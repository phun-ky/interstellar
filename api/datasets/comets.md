<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / datasets/comets

# datasets/comets

> Last updated 2025-03-20T15:09:40.710Z

## Table of Contents

- [Variables](#variables)
  - [COMETS](#comets)

## Variables

### COMETS

```ts
const COMETS: CometsType;
```

Defined in:
[datasets/comets.ts:18](https://github.com/phun-ky/interstellar/blob/main/src/datasets/comets.ts#L18)

Represents a collection of well-known comets within the solar system simulation.

This dataset includes orbital elements and physical characteristics of comets.

Uses [CometsType](../types/comets.md#cometstype).

```ts
export const COMETS: CometsType = [
  {
    // eslint-disable-next-line @stylistic/quotes
    name: "Halley's Comet",
    type: 'periodic comet',
    category: 'halley-type comet',
    system: 'Sun',
    /** Semi-major axis in AU */
    a: { value: 17.834, unit: 'AU' },
    /** Eccentricity (0 = circular orbit, 1 = parabolic trajectory) */
    e: 0.96714,
    /** Inclination in degrees */
    i: 162.26,
    /** Argument of perihelion in degrees */
    w: 111.33,
    /** Longitude of the ascending node in degrees */
    om: 58.42,
    /** Mean anomaly in degrees at J2000 epoch */
    angle: 38.38,
    /** Orbital period in days */
    period: { value: 27576, unit: 'day' }, // ~76 years
    /** Perihelion distance in AU */
    q: 0.586,
    /** Visual representation color */
    color: '#FFFFFF', // Bright white (reflective comet dust)
    /** Scaled size for visualization */
    size: 5,
    /** Radius of the comet's nucleus in km */
    radius: { value: 5.5, unit: 'km' }
  },
  {
    name: 'Comet Hale-Bopp',
    type: 'oort cloud comet',
    category: 'long-period comet',
    system: 'Sun',
    a: { value: 186.0, unit: 'AU' },
    e: 0.9951,
    i: 89.4,
    w: 130.6,
    om: 282.5,
    angle: 180,
    period: { value: -253533, unit: 'day' }, // ~695 years
    q: 0.914,
    color: '#00A6FF', // Electric blue (ionized tail appearance)
    size: 4,
    radius: { value: 30, unit: 'km' }
  },
  {
    name: 'Comet 67P/Churyumov–Gerasimenko',
    category: 'jupiter-family comet',
    type: 'short-period comet',
    system: 'Sun',
    a: { value: 3.464, unit: 'AU' }, // Semi-major axis
    e: 0.641, // Eccentricity
    i: 7.04, // Inclination in degrees
    w: 12.78, // Argument of perihelion in degrees
    om: 50.14, // Longitude of ascending node in degrees
    angle: 0, // Initial angle (could be updated based on epoch)
    period: { value: -2484, unit: 'day' }, // ~6.45 years
    q: 1.243, // Perihelion distance in AU
    color: '#AAAAAA', // Greyish surface color
    size: 4, // Visualization size
    radius: { value: 2, unit: 'km' } // Approximate average radius (~4km total diameter)
  },
  {
    name: 'Comet Encke',
    type: 'short-period comet',
    category: 'jupiter-family comet',
    system: 'Sun',
    a: { value: 2.22, unit: 'AU' },
    e: 0.85,
    i: 11.8,
    w: 186.5,
    om: 334.6,
    angle: 160,
    period: { value: -1204, unit: 'day' }, // ~3.3 years
    q: 0.34,
    color: '#FFD700', // Golden yellow (dusty tail, lower albedo)
    size: 3,
    radius: { value: 4.8, unit: 'km' }
  }
];
```

#### Example

```ts
console.log(COMETS[0].name); // "Halley's Comet"
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
