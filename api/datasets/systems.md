<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / datasets/systems

# datasets/systems

> Last updated 2025-03-20T15:09:40.711Z

## Table of Contents

- [Variables](#variables)
  - [SYSTEMS](#systems)

## Variables

### SYSTEMS

```ts
const SYSTEMS: SystemsType;
```

Defined in:
[datasets/systems.ts:19](https://github.com/phun-ky/interstellar/blob/main/src/datasets/systems.ts#L19)

Predefined star systems in the galaxy.

Uses [SystemsType](../types/systems.md#systemstype).

```ts
export const SYSTEMS: SystemsType = [
  {
    name: 'Solar System',
    stars: ['Sun'],
    distance: 0
  },
  {
    name: 'Alpha Centauri',
    stars: ['Alpha Centauri A', 'Alpha Centauri B', 'Proxima Centauri'],
    distance: 4.37
  }
];
```

#### Example

```ts
console.log(SYSTEMS[0].name); // "Solar System"
```

#### See

<https://en.wikipedia.org/wiki/Alpha_Centauri>

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
