<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / types/galaxies

# types/galaxies

> Last updated 2025-03-18T13:17:24.402Z

## Table of Contents

- [Interfaces](#interfaces)
  - [BlackHoleInterface](#blackholeinterface)
- [**Black Hole Properties:**](#black-hole-properties)
  - [GalaxyInterface](#galaxyinterface)
- [**Galaxy Properties:**](#galaxy-properties)
- [Type Aliases](#type-aliases)
  - [BlackHolesType](#blackholestype)
  - [GalaxiesType](#galaxiestype)

## Interfaces

### BlackHoleInterface

Defined in:
[types/galaxies.ts:24](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L24)

Represents a **black hole** at the center of a galaxy.

## **Black Hole Properties:**

- **Mass (`mass`)**: Measured in **solar masses** ($M_\odot$).
- **Schwarzschild radius (`radius`)**: Defined in **Astronomical Units (AU)**.
- **Position (`x`, `y`)**: Coordinates relative to the galaxy center in **AU**.

BlackHoleInterface

#### Example

```ts
const sagittariusA: BlackHoleInterface = {
  name: 'Sagittarius A*',
  mass: 4.154e6,
  radius: { value: 0.08, unit: 'AU' },
  x: { value: 0, unit: 'AU' },
  y: { value: 0, unit: 'AU' }
};
```

#### Properties

| Property                   | Type                                                 | Description                                       | Defined in                                                                                          |
| -------------------------- | ---------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <a id="mass" /> `mass`     | `number`                                             | Mass of the black hole in solar masses.           | [types/galaxies.ts:28](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L28) |
| <a id="name" /> `name`     | `string`                                             | Name of the central black hole.                   | [types/galaxies.ts:26](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L26) |
| <a id="radius" /> `radius` | [`DistanceInterface`](distance.md#distanceinterface) | Schwarzschild radius of the black hole in AU.     | [types/galaxies.ts:30](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L30) |
| <a id="x" /> `x`           | [`DistanceInterface`](distance.md#distanceinterface) | X-coordinate relative to the galaxy center in AU. | [types/galaxies.ts:32](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L32) |
| <a id="y" /> `y`           | [`DistanceInterface`](distance.md#distanceinterface) | Y-coordinate relative to the galaxy center in AU. | [types/galaxies.ts:34](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L34) |

---

### GalaxyInterface

Defined in:
[types/galaxies.ts:59](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L59)

Represents a **galaxy** in the universe simulation.

## **Galaxy Properties:**

- **Name (`name`)**: The galaxy's official designation.
- **Type (`type`)**: The morphological classification (e.g., Spiral,
  Elliptical).
- **Diameter (`diameter`)**: Measured in **light-years**.
- **Distance (`distance`)**: The distance from the **Milky Way**, also in
  **light-years**.
- **Black Hole (`blackHole`)**: The central supermassive black hole.

GalaxyInterface

#### Example

```ts
const milkyWay: GalaxyInterface = {
  name: 'Milky Way',
  type: 'Spiral',
  diameter: { value: 105700, unit: 'lightyears' },
  distance: { value: 0, unit: 'lightyears' },
  blackHole: sagittariusA
};
```

#### Properties

| Property                         | Type                                                   | Description                                 | Defined in                                                                                          |
| -------------------------------- | ------------------------------------------------------ | ------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <a id="blackhole" /> `blackHole` | [`BlackHoleInterface`](galaxies.md#blackholeinterface) | Central black hole of the galaxy.           | [types/galaxies.ts:69](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L69) |
| <a id="diameter" /> `diameter`   | [`DistanceInterface`](distance.md#distanceinterface)   | Diameter of the galaxy in light-years.      | [types/galaxies.ts:65](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L65) |
| <a id="distance" /> `distance`   | [`DistanceInterface`](distance.md#distanceinterface)   | Distance from the Milky Way in light-years. | [types/galaxies.ts:67](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L67) |
| <a id="name-1" /> `name`         | `string`                                               | Name of the galaxy.                         | [types/galaxies.ts:61](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L61) |
| <a id="type" /> `type`           | `string`                                               | Morphological classification of the galaxy. | [types/galaxies.ts:63](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L63) |

## Type Aliases

### BlackHolesType

```ts
type BlackHolesType = BlackHoleInterface[];
```

Defined in:
[types/galaxies.ts:84](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L84)

Type alias for a collection of **black holes**.

---

### GalaxiesType

```ts
type GalaxiesType = GalaxyInterface[];
```

Defined in:
[types/galaxies.ts:77](https://github.com/phun-ky/interstellar/blob/main/src/types/galaxies.ts#L77)

Type alias for a collection of **galaxies**.

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
is licensed under a [GPL-3.0
License](https://choosealicense.com/licenses/gpl-3.0/).
