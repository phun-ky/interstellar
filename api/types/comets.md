<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / types/comets

# types/comets

> Last updated 2025-03-18T13:17:24.401Z

## Table of Contents

- [Interfaces](#interfaces)
  - [CometInterface](#cometinterface)
- [**Cometary Orbital Parameters:**](#cometary-orbital-parameters)
- [**Visualization Parameters:**](#visualization-parameters)
- [Type Aliases](#type-aliases)
  - [CometsType](#cometstype)

## Interfaces

### CometInterface

Defined in:
[types/comets.ts:23](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L23)

Represents a **comet** in the solar system simulation.

## **Cometary Orbital Parameters:**

- **Semi-major axis (`a`)**: Defines the **size** of the comet’s orbit in
  **Astronomical Units (AU)**.
- **Orbital eccentricity (`e`)**: Determines how **elliptical** the orbit is
  ($0 = $ circular, closer to $1$ = highly elliptical).
- **Inclination (`i`)**: The tilt of the orbit relative to the **ecliptic
  plane**, measured in **degrees**.
- **Argument of perihelion (`w`)**: The angle from the **ascending node** to the
  **perihelion**.
- **Longitude of the ascending node (`om`)**: Defines where the orbit crosses
  the ecliptic.
- **Perihelion distance (`q`)**: The closest approach to the Sun in **AU**.

## **Visualization Parameters:**

- **Orbit Path (`orbitPath`)**: Precomputed trajectory for rendering.
- **Color (`color`)**: Used for visual representation.
- **Size (`size`)**: Scaled size for display (not the actual physical size).

CometInterface

#### Properties

| Property                          | Type                                                                       | Description                                                           | Defined in                                                                                      |
| --------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <a id="a" /> `a`                  | [`MeasureInterface`](distance.md#measureinterface)                         | Semi-major axis of the orbit in AU.                                   | [types/comets.ts:33](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L33) |
| <a id="angle" /> `angle`          | `number`                                                                   | Mean anomaly at epoch in degrees.                                     | [types/comets.ts:43](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L43) |
| <a id="category" /> `category`    | `"halley-type comet"` \| `"long-period comet"` \| `"jupiter-family comet"` | Category classification of the comet.                                 | [types/comets.ts:29](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L29) |
| <a id="color" /> `color`          | `string`                                                                   | Visual representation color.                                          | [types/comets.ts:63](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L63) |
| <a id="e" /> `e`                  | `number`                                                                   | Orbital eccentricity (0 = circular, closer to 1 = highly elliptical). | [types/comets.ts:35](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L35) |
| <a id="focus_x" /> `focus_x?`     | `number`                                                                   | X-offset for the ellipse focus (accounts for eccentricity).           | [types/comets.ts:57](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L57) |
| <a id="i" /> `i`                  | `number`                                                                   | Orbital inclination in degrees.                                       | [types/comets.ts:37](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L37) |
| <a id="mia" /> `miA?`             | `number`                                                                   | Semi-minor axis converted to pixels (calculated from `a` and `e`).    | [types/comets.ts:55](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L55) |
| <a id="name" /> `name`            | `string`                                                                   | Name of the comet (e.g., "Halley", "Hale-Bopp").                      | [types/comets.ts:25](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L25) |
| <a id="om" /> `om`                | `number`                                                                   | Longitude of the ascending node in degrees.                           | [types/comets.ts:41](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L41) |
| <a id="orbitpath" /> `orbitPath?` | [`Coordinates2DInterface`](planets.md#coordinates2dinterface)\[]           | Precomputed orbital path points for visualization (optional).         | [types/comets.ts:61](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L61) |
| <a id="period" /> `period`        | [`TemporalInterface`](temporal.md#temporalinterface)                       | Orbital period in Earth days.                                         | [types/comets.ts:45](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L45) |
| <a id="q" /> `q`                  | `number`                                                                   | Perihelion distance in AU.                                            | [types/comets.ts:47](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L47) |
| <a id="radius" /> `radius`        | [`DistanceInterface`](distance.md#distanceinterface)                       | Radius of the comet (for visualization purposes).                     | [types/comets.ts:59](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L59) |
| <a id="size" /> `size`            | `number`                                                                   | Scaled size for visualization (not actual physical size).             | [types/comets.ts:65](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L65) |
| <a id="system" /> `system`        | `string`                                                                   | The star system where the comet is located.                           | [types/comets.ts:31](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L31) |
| <a id="type" /> `type`            | `"periodic comet"` \| `"oort cloud comet"` \| `"short-period comet"`       | Type of comet based on its orbital characteristics.                   | [types/comets.ts:27](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L27) |
| <a id="w" /> `w`                  | `number`                                                                   | Argument of perihelion in degrees.                                    | [types/comets.ts:39](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L39) |
| <a id="x" /> `x?`                 | [`DistanceInterface`](distance.md#distanceinterface)                       | X-coordinate in a distance-based system (optional).                   | [types/comets.ts:49](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L49) |
| <a id="y" /> `y?`                 | [`DistanceInterface`](distance.md#distanceinterface)                       | Y-coordinate in a distance-based system (optional).                   | [types/comets.ts:51](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L51) |
| <a id="z" /> `z?`                 | [`DistanceInterface`](distance.md#distanceinterface)                       | Z-coordinate in a distance-based system (optional).                   | [types/comets.ts:53](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L53) |

## Type Aliases

### CometsType

```ts
type CometsType = CometInterface[];
```

Defined in:
[types/comets.ts:93](https://github.com/phun-ky/interstellar/blob/main/src/types/comets.ts#L93)

Type alias for an array of **comets**.

#### Example

```ts
const halley: CometInterface = {
  name: 'Halley',
  type: 'periodic comet',
  category: 'halley-type comet',
  system: 'Solar System',
  a: { value: 17.8, unit: 'AU' },
  e: 0.967,
  i: 162.26,
  w: 111.33,
  om: 58.42,
  angle: 0,
  period: { value: 76, unit: 'years' },
  q: 0.586,
  radius: { value: 11, unit: 'km' },
  color: '#ffffff',
  size: 1.2
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
is licensed under a [GPL-3.0
License](https://choosealicense.com/licenses/gpl-3.0/).
