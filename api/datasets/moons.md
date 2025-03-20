<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / datasets/moons

# datasets/moons

> Last updated 2025-03-20T15:01:41.144Z

## Table of Contents

- [Variables](#variables)
  - [MOONS](#moons)

## Variables

### MOONS

```ts
const MOONS: MoonsType;
```

Defined in:
[datasets/moons.ts:20](https://github.com/phun-ky/interstellar/blob/main/src/datasets/moons.ts#L20)

Represents a dataset of natural satellites (moons) in the solar system.

Each moon entry includes its orbital elements, physical characteristics, and a
visual representation color for rendering.

Uses [MoonsType](../types/moons.md#moonstype).

**Example item in dataset:**

```ts
{
  name: 'Moon',
  category: 'natural satellite',
  system: 'Earth',
  /** Semi-major axis in AU */
  a: { value: 0.00257, unit: 'AU' },
  /** Eccentricity (0 = circular orbit, 1 = parabolic trajectory) */
  e: 0.0549,
  /** Orbital period in days */
  period: { value: -27.322, unit: 'day' },
  /** Radius in km */
  radius: { value: 1737.4, unit: 'km' },
  /** Visual representation color */
  color: '#BFBFBF', // Light gray (realistic lunar appearance)
  /** Initial angle in orbit at J2000 */
  angle: 2.41
},
```

#### Example

```ts
console.log(MOONS[0].name); // "Moon"
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
