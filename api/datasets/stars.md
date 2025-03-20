<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / datasets/stars

# datasets/stars

> Last updated 2025-03-20T15:01:41.144Z

## Table of Contents

- [Variables](#variables)
  - [STARS](#stars)

## Variables

### STARS

```ts
const STARS: StarsType;
```

Defined in:
[datasets/stars.ts:20](https://github.com/phun-ky/interstellar/blob/main/src/datasets/stars.ts#L20)

Represents a dataset of well-known stars within the Milky Way.

Each star entry includes spectral classification, orbital parameters, position
relative to the Milky Way, and a visual representation color.

Uses [StarsType](../types/stars.md#starstype).

**Example item in dataset:**

```ts
{
  name: 'Sun',
  type: 'G2V', // Yellow Dwarf, Main Sequence
  category: 'star',
  system: { name: 'Solar System', type: 'planetary system' },
  /** Radius in km */
  radius: { value: 696340, unit: 'km' },
  /** Visual representation color */
  color: '#fff5f1',
  /** Galactic position in light-years (relative to Milky Way center) */
  x: { value: 0, unit: 'ly' },
  y: { value: 27000, unit: 'ly' },
  z: { value: 20, unit: 'ly' },
  /** Semi-major axis in light-years */
  a: { value: 27000, unit: 'ly' },
  /** Orbital eccentricity */
  e: 0.07,
  /** Initial angle in orbit */
  angle: 1.5707963267948966,
  /** Orbital period in million years (Myr) */
  period: { value: -230, unit: 'Myr' }
},
```

#### Example

```ts
console.log(STARS[0].name); // "Sun"
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
