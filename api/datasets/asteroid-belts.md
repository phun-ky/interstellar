<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / datasets/asteroid-belts

# datasets/asteroid-belts

> Last updated 2025-03-20T15:09:40.710Z

## Table of Contents

- [Variables](#variables)
  - [ASTEROID_BELTS](#asteroid_belts)

## Variables

### ASTEROID_BELTS

```ts
const ASTEROID_BELTS: AsteroidBeltsType;
```

Defined in:
[datasets/asteroid-belts.ts:19](https://github.com/phun-ky/interstellar/blob/main/src/datasets/asteroid-belts.ts#L19)

Predefined asteroid belts in the solar system visualization.

Uses [AsteroidBeltsType](../types/asteroid-belts.md#asteroidbeltstype).

```ts
export const ASTEROID_BELTS: AsteroidBeltsType = [
  {
    name: 'Main Asteroid Belt',
    innerRadius: 2.1,
    outerRadius: 3.3,
    color: '#C4C4C4', // Light gray (rocky bodies)
    opacity: 0.3,
    density: 0.8
  },
  {
    name: 'Kuiper Belt',
    innerRadius: 30,
    outerRadius: 50,
    color: '#88CCEE', // Light blue (icy bodies)
    opacity: 0.2,
    density: 0.5
  }
];
```

#### Example

```ts
console.log(ASTEROID_BELTS[0].name); // "Main Asteroid Belt"
```

#### See

- <https://en.wikipedia.org/wiki/Asteroid_belt>
- <https://en.wikipedia.org/wiki/Kuiper_belt>

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
