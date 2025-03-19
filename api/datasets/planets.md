<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / datasets/planets

# datasets/planets

> Last updated 2025-03-19T08:29:08.329Z

## Table of Contents

- [Variables](#variables)
  - [PLANETS](#planets)

## Variables

### PLANETS

```ts
const PLANETS: PlanetsType;
```

Defined in:
[datasets/planets.ts:20](https://github.com/phun-ky/interstellar/blob/main/src/datasets/planets.ts#L20)

Represents a dataset of planets and planetoids in the solar system.

Each planet entry includes its orbital elements, physical characteristics, and a
visual representation color for rendering.

Uses [PlanetsType](../types/planets.md#planetstype).

**Example item in dataset:**

```ts
{
  name: 'Mercury',
  type: 'silicate planet',
  category: 'planet',
  system: 'Sun',
  /** Semi-major axis in AU */
  a: { value: 0.387, unit: 'AU' },
  /** Orbital eccentricity */
  e: 0.2056,
  /** Radius in km */
  radius: { value: 2440, unit: 'km' },
  /** Visual representation color */
  color: '#8B8B8B',
  /** Initial angle in orbit at J2000 */
  angle: 0.843,
  /** Orbital period in days */
  period: { value: 87.969, unit: 'days' },
  /** Initial position coordinates in AU */
  x: { value: 0.387, unit: 'AU' },
  y: { value: 0.024, unit: 'AU' },
  z: { value: 0.001, unit: 'AU' }
},
```

#### Example

```ts
console.log(PLANETS[0].name); // "Mercury"
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
