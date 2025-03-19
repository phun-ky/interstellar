<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / types/asteroid-belts

# types/asteroid-belts

> Last updated 2025-03-19T08:29:08.341Z

## Table of Contents

- [Interfaces](#interfaces)
  - [AsteroidBeltInterface](#asteroidbeltinterface)
- [Type Aliases](#type-aliases)
  - [AsteroidBeltsType](#asteroidbeltstype)

## Interfaces

### AsteroidBeltInterface

Defined in:
[types/asteroid-belts.ts:15](https://github.com/phun-ky/interstellar/blob/main/src/types/asteroid-belts.ts#L15)

Represents an asteroid belt within the solar system simulation.

**Asteroid Belt Properties:**

- **Inner and Outer Radius**: Defines the spatial boundaries of the belt in
  **Astronomical Units (AU)**.
- **Density**: Determines the number of simulated asteroids within the belt.
- **Color and Opacity**: Used for visualization.
- **Orbit Path (Optional)**: Stores a precomputed path for asteroid positioning.

AsteroidBeltInterface

#### Properties

| Property                               | Type                                                             | Description                                                | Defined in                                                                                                      |
| -------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| <a id="color"></a> `color`             | `string`                                                         | Belt color for visualization.                              | [types/asteroid-belts.ts:23](https://github.com/phun-ky/interstellar/blob/main/src/types/asteroid-belts.ts#L23) |
| <a id="density"></a> `density`         | `number`                                                         | Density factor affecting how many asteroids are simulated. | [types/asteroid-belts.ts:27](https://github.com/phun-ky/interstellar/blob/main/src/types/asteroid-belts.ts#L27) |
| <a id="innerradius"></a> `innerRadius` | `number`                                                         | Inner radius of the belt in Astronomical Units (AU).       | [types/asteroid-belts.ts:19](https://github.com/phun-ky/interstellar/blob/main/src/types/asteroid-belts.ts#L19) |
| <a id="name"></a> `name`               | `string`                                                         | Name of the asteroid belt.                                 | [types/asteroid-belts.ts:17](https://github.com/phun-ky/interstellar/blob/main/src/types/asteroid-belts.ts#L17) |
| <a id="opacity"></a> `opacity`         | `number`                                                         | Transparency level (0 = fully transparent, 1 = solid).     | [types/asteroid-belts.ts:25](https://github.com/phun-ky/interstellar/blob/main/src/types/asteroid-belts.ts#L25) |
| <a id="orbitpath"></a> `orbitPath?`    | [`Coordinates2DInterface`](planets.md#coordinates2dinterface)\[] | Optional: Orbit path for finer asteroid positioning.       | [types/asteroid-belts.ts:29](https://github.com/phun-ky/interstellar/blob/main/src/types/asteroid-belts.ts#L29) |
| <a id="outerradius"></a> `outerRadius` | `number`                                                         | Outer radius of the belt in Astronomical Units (AU).       | [types/asteroid-belts.ts:21](https://github.com/phun-ky/interstellar/blob/main/src/types/asteroid-belts.ts#L21) |

## Type Aliases

### AsteroidBeltsType

```ts
type AsteroidBeltsType = AsteroidBeltInterface[];
```

Defined in:
[types/asteroid-belts.ts:48](https://github.com/phun-ky/interstellar/blob/main/src/types/asteroid-belts.ts#L48)

Type alias for a collection of asteroid belts.

#### Example

```ts
const asteroidBelt: AsteroidBeltInterface = {
  name: 'Main Belt',
  innerRadius: 2.1,
  outerRadius: 3.3,
  color: '#888888',
  opacity: 0.5,
  density: 100
};
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
