<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / types/celestial-bodies

# types/celestial-bodies

> Last updated 2025-03-18T13:45:43.064Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [CelestialBodiesType](#celestialbodiestype)
  - [CelestialBodyType](#celestialbodytype)
  - [Radian](#radian)

## Type Aliases

### CelestialBodiesType

```ts
type CelestialBodiesType = StarsType | PlanetsType | MoonsType | CometsType;
```

Defined in:
[types/celestial-bodies.ts:25](https://github.com/phun-ky/interstellar/blob/main/src/types/celestial-bodies.ts#L25)

Type alias representing a collection of celestial bodies.

Includes:

- **Stars** (`StarsType`)
- **Planets** (`PlanetsType`)
- **Moons** (`MoonsType`)
- **Comets** (`CometsType`)

#### Example

```ts
const celestialObjects: CelestialBodiesType = [
  { name: 'Sun', type: 'star', mass: 1.989e30 },
  { name: 'Earth', type: 'planet', mass: 5.972e24 }
];
```

---

### CelestialBodyType

```ts
type CelestialBodyType =
  | StarInterface
  | PlanetInterface
  | MoonInterface
  | CometInterface;
```

Defined in:
[types/celestial-bodies.ts:47](https://github.com/phun-ky/interstellar/blob/main/src/types/celestial-bodies.ts#L47)

Type alias representing a single celestial body.

Includes:

- **Stars** (`StarInterface`)
- **Planets** (`PlanetInterface`)
- **Moons** (`MoonInterface`)
- **Comets** (`CometInterface`)

#### Example

```ts
const earth: CelestialBodyType = {
  name: 'Earth',
  type: 'planet',
  mass: 5.972e24
};
```

---

### Radian

```ts
type Radian = number;
```

Defined in:
[types/celestial-bodies.ts:63](https://github.com/phun-ky/interstellar/blob/main/src/types/celestial-bodies.ts#L63)

Type alias representing an angle in **radians**.

#### Example

```ts
const angle: Radian = Math.PI / 2; // 90 degrees in radians
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
