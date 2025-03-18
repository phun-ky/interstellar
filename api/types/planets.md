<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / types/planets

# types/planets

> Last updated 2025-03-18T13:17:24.404Z

## Table of Contents

- [Interfaces](#interfaces)
  - [Coordinates2DInterface](#coordinates2dinterface)
  - [PlanetInterface](#planetinterface)
- [**Orbital Properties:**](#orbital-properties)
- [**Classification & Visualization:**](#classification--visualization)
- [Type Aliases](#type-aliases)
  - [PlanetsType](#planetstype)

## Interfaces

### Coordinates2DInterface

Defined in:
[types/planets.ts:16](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L16)

Represents **2D coordinates** for planetary positioning.

Coordinates2DInterface

#### Example

```ts
const position: Coordinates2DInterface = { x: 100, y: 200 };
```

#### Properties

| Property         | Type     | Description       | Defined in                                                                                        |
| ---------------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------- |
| <a id="x" /> `x` | `number` | The x-coordinate. | [types/planets.ts:17](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L17) |
| <a id="y" /> `y` | `number` | The y-coordinate. | [types/planets.ts:18](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L18) |

---

### PlanetInterface

Defined in:
[types/planets.ts:56](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L56)

Represents a **planet** in the solar system simulation.

## **Orbital Properties:**

- **Semi-major axis (`a`)**: Defines the planet’s orbit size in **Astronomical
  Units (AU)**.
- **Orbital eccentricity (`e`)**: Determines how elliptical the orbit is ($0 =$
  circular, closer to $1 =$ highly elliptical).
- **Orbital period (`period`)**: Time taken for one full orbit in **Earth
  days**.
- **True anomaly (`angle`)**: The planet’s current position in its orbit (in
  **radians**).

## **Classification & Visualization:**

- **Type (`type`)**: Scientific classification of the planet (e.g.,
  **terrestrial, gas giant, ice planet**).
- **Category (`category`)**: Defines whether the object is a **planet** or a
  **planetoid**.
- **Color (`color`)**: Used for visual representation in simulations.
- **Size (`radius`)**: Physical planet radius in **kilometers (km)**.

PlanetInterface

#### Example

```ts
const earth: PlanetInterface = {
  name: 'Earth',
  type: 'terrestrial planet',
  category: 'planet',
  color: '#4287f5',
  system: 'Solar System',
  radius: { value: 6371, unit: 'km' },
  a: { value: 1.0, unit: 'AU' },
  e: 0.0167,
  period: { value: 365.25, unit: 'days' },
  angle: 0,
  x: { value: 0, unit: 'AU' },
  y: { value: 1, unit: 'AU' },
  z: { value: 0, unit: 'AU' }
};
```

#### Properties

| Property                          | Type                                                                                                                                                                                                                                                                                                                                                                         | Description                                                           | Defined in                                                                                          |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <a id="a" /> `a`                  | [`MeasureInterface`](distance.md#measureinterface)                                                                                                                                                                                                                                                                                                                           | Semi-major axis of the orbit in AU.                                   | [types/planets.ts:88](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L88)   |
| <a id="angle" /> `angle`          | `number`                                                                                                                                                                                                                                                                                                                                                                     | Current orbital position in radians (True Anomaly).                   | [types/planets.ts:96](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L96)   |
| <a id="category" /> `category`    | `"planet"` \| `"planetoid"`                                                                                                                                                                                                                                                                                                                                                  | Defines whether the object is a planet or a planetoid.                | [types/planets.ts:80](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L80)   |
| <a id="color" /> `color`          | `string`                                                                                                                                                                                                                                                                                                                                                                     | Visual representation color.                                          | [types/planets.ts:82](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L82)   |
| <a id="e" /> `e`                  | `number`                                                                                                                                                                                                                                                                                                                                                                     | Orbital eccentricity (0 = circular, closer to 1 = highly elliptical). | [types/planets.ts:90](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L90)   |
| <a id="focus_x" /> `focus_x?`     | `number`                                                                                                                                                                                                                                                                                                                                                                     | X-offset for the ellipse focus (accounts for eccentricity).           | [types/planets.ts:94](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L94)   |
| <a id="mia" /> `miA?`             | `number`                                                                                                                                                                                                                                                                                                                                                                     | Semi-minor axis of the orbit (calculated from `a` and `e`).           | [types/planets.ts:92](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L92)   |
| <a id="name" /> `name`            | `string`                                                                                                                                                                                                                                                                                                                                                                     | Name of the planet (e.g., "Earth", "Mars").                           | [types/planets.ts:58](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L58)   |
| <a id="orbitpath" /> `orbitPath?` | [`Coordinates2DInterface`](planets.md#coordinates2dinterface)\[]                                                                                                                                                                                                                                                                                                             | Precomputed orbital path points for visualization (optional).         | [types/planets.ts:106](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L106) |
| <a id="period" /> `period`        | [`TemporalInterface`](temporal.md#temporalinterface)                                                                                                                                                                                                                                                                                                                         | Orbital period in Earth days.                                         | [types/planets.ts:104](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L104) |
| <a id="radius" /> `radius`        | [`DistanceInterface`](distance.md#distanceinterface)                                                                                                                                                                                                                                                                                                                         | Physical radius of the planet in kilometres.                          | [types/planets.ts:86](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L86)   |
| <a id="system" /> `system`        | `string`                                                                                                                                                                                                                                                                                                                                                                     | The planetary system in which the planet exists.                      | [types/planets.ts:84](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L84)   |
| <a id="type" /> `type`            | \| `"chthonian planet"` \| `"carbon planet"` \| `"coreless planet"` \| `"desert planet"` \| `"gas dwarf"` \| `"gas giant"` \| `"helium planet"` \| `"hycean planet"` \| `"ice giant"` \| `"ice planet"` \| `"iron planet"` \| `"lava planet"` \| `"ocean planet"` \| `"proto planet"` \| `"puffy planet"` \| `"super-puff"` \| `"silicate planet"` \| `"terrestrial planet"` | Type classification of the planet.                                    | [types/planets.ts:60](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L60)   |
| <a id="x-1" /> `x`                | [`DistanceInterface`](distance.md#distanceinterface)                                                                                                                                                                                                                                                                                                                         | X-coordinate in a distance-based system.                              | [types/planets.ts:98](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L98)   |
| <a id="y-1" /> `y`                | [`DistanceInterface`](distance.md#distanceinterface)                                                                                                                                                                                                                                                                                                                         | Y-coordinate in a distance-based system.                              | [types/planets.ts:100](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L100) |
| <a id="z" /> `z`                  | [`DistanceInterface`](distance.md#distanceinterface)                                                                                                                                                                                                                                                                                                                         | Z-coordinate in a distance-based system.                              | [types/planets.ts:102](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L102) |

## Type Aliases

### PlanetsType

```ts
type PlanetsType = PlanetInterface[];
```

Defined in:
[types/planets.ts:114](https://github.com/phun-ky/interstellar/blob/main/src/types/planets.ts#L114)

Type alias for a collection of **planets**.

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
