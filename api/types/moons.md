<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / types/moons

# types/moons

> Last updated 2025-03-18T13:45:43.066Z

## Table of Contents

- [Interfaces](#interfaces)
  - [MoonInterface](#mooninterface)
- [**Orbital Properties:**](#orbital-properties)
- [**Visualization Properties:**](#visualization-properties)
- [Type Aliases](#type-aliases)
  - [MoonsType](#moonstype)

## Interfaces

### MoonInterface

Defined in:
[types/moons.ts:35](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L35)

Represents a **moon** (natural satellite) orbiting a planet.

## **Orbital Properties:**

- **Semi-major axis (`a`)**: Defines the moon’s orbit size in **Astronomical
  Units (AU)**.
- **Orbital eccentricity (`e`)**: Determines how elliptical the orbit is ($0 =$
  circular, closer to $1 =$ highly elliptical).
- **Orbital period (`period`)**: Time taken for one full orbit in **Earth
  days**.
- **True anomaly (`angle`)**: The moon’s current position in its orbit (in
  **radians**).

## **Visualization Properties:**

- **Orbit Path (`orbitPath`)**: Precomputed trajectory for rendering.
- **Color (`color`)**: Visual representation.
- **Size (`radius`)**: Actual moon radius in **kilometers (km)**.

MoonInterface

#### Example

```ts
const europa: MoonInterface = {
  name: 'Europa',
  category: 'natural satellite',
  system: 'Jupiter',
  a: { value: 0.00448, unit: 'AU' },
  e: 0.009,
  period: { value: 3.55, unit: 'days' },
  radius: { value: 1560.8, unit: 'km' },
  color: '#a6a6a6',
  angle: 0
};
```

#### Properties

| Property                          | Type                                                                         | Description                                                           | Defined in                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| <a id="a" /> `a`                  | [`MeasureInterface`](distance.md#measureinterface)                           | Semi-major axis of the orbit in AU.                                   | [types/moons.ts:46](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L46) |
| <a id="angle" /> `angle`          | `number`                                                                     | Current orbital position in radians (True Anomaly).                   | [types/moons.ts:60](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L60) |
| <a id="category" /> `category`    | `"natural satellite"` \| `"irregular satellite"` \| `"retrograde satellite"` | Classification of the moon.                                           | [types/moons.ts:39](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L39) |
| <a id="color" /> `color`          | `string`                                                                     | Visual representation color.                                          | [types/moons.ts:58](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L58) |
| <a id="e" /> `e`                  | `number`                                                                     | Orbital eccentricity (0 = circular, closer to 1 = highly elliptical). | [types/moons.ts:48](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L48) |
| <a id="focus_x" /> `focus_x?`     | `number`                                                                     | X-offset for the ellipse focus (accounts for eccentricity).           | [types/moons.ts:52](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L52) |
| <a id="mia" /> `miA?`             | `number`                                                                     | Semi-minor axis converted to pixels (calculated from `a` and `e`).    | [types/moons.ts:50](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L50) |
| <a id="name" /> `name`            | `string`                                                                     | Name of the moon (e.g., "Io", "Europa", "Titan").                     | [types/moons.ts:37](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L37) |
| <a id="orbitpath" /> `orbitPath?` | [`Coordinates2DInterface`](planets.md#coordinates2dinterface)\[]             | Precomputed orbital path points for visualization (optional).         | [types/moons.ts:68](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L68) |
| <a id="period" /> `period`        | [`TemporalInterface`](temporal.md#temporalinterface)                         | Orbital period in Earth days.                                         | [types/moons.ts:54](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L54) |
| <a id="radius" /> `radius`        | [`DistanceInterface`](distance.md#distanceinterface)                         | Physical radius of the moon in kilometres.                            | [types/moons.ts:56](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L56) |
| <a id="system" /> `system`        | `string`                                                                     | The planetary system where the moon is located (e.g., "Jupiter").     | [types/moons.ts:44](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L44) |
| <a id="x" /> `x?`                 | [`DistanceInterface`](distance.md#distanceinterface)                         | X-coordinate in a distance-based system (optional).                   | [types/moons.ts:62](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L62) |
| <a id="y" /> `y?`                 | [`DistanceInterface`](distance.md#distanceinterface)                         | Y-coordinate in a distance-based system (optional).                   | [types/moons.ts:64](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L64) |
| <a id="z" /> `z?`                 | [`DistanceInterface`](distance.md#distanceinterface)                         | Z-coordinate in a distance-based system (optional).                   | [types/moons.ts:66](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L66) |

## Type Aliases

### MoonsType

```ts
type MoonsType = MoonInterface[];
```

Defined in:
[types/moons.ts:76](https://github.com/phun-ky/interstellar/blob/main/src/types/moons.ts#L76)

Type alias for a collection of **moons**.

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
