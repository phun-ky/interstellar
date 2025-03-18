<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / types/stars

# types/stars

> Last updated 2025-03-18T13:45:43.068Z

## Table of Contents

- [Interfaces](#interfaces)
  - [StarInterface](#starinterface)
- [**Orbital & Physical Properties:**](#orbital--physical-properties)
- [**Classification & Visualization:**](#classification--visualization)
  - [StarSystemInterface](#starsysteminterface)
- [Type Aliases](#type-aliases)
  - [StarsType](#starstype)

## Interfaces

### StarInterface

Defined in:
[types/stars.ts:61](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L61)

Represents a **star** in a planetary or stellar system.

## **Orbital & Physical Properties:**

- **Semi-major axis (`a`)**: Defines the star’s orbit size (AU or light-years).
- **Orbital eccentricity (`e`)**: Determines how elliptical the orbit is.
- **Orbital period (`period`)**: Time taken for one full orbit.
- **True anomaly (`angle`)**: The star’s current position in its orbit (in
  **radians**).
- **Radius (`radius`)**: Physical size of the star.

## **Classification & Visualization:**

- **Type (`type`)**: Classification of the star (e.g., **main-sequence star,
  white dwarf**).
- **Category (`category`)**: Defined as `'star'`.
- **Color (`color`)**: Used for visual representation.

StarInterface

#### Example

```ts
const sun: StarInterface = {
  name: 'Sun',
  type: 'G-type main-sequence',
  category: 'star',
  system: solarSystem,
  radius: { value: 695700, unit: 'km' },
  color: '#ffcc00',
  a: { value: 0, unit: 'AU' },
  e: 0,
  period: { value: 0, unit: 'years' },
  angle: 0,
  x: { value: 0, unit: 'AU' },
  y: { value: 0, unit: 'AU' },
  z: { value: 0, unit: 'AU' }
};
```

#### Properties

| Property                          | Type                                                             | Description                                                               | Defined in                                                                                    |
| --------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| <a id="a" /> `a`                  | [`MeasureInterface`](distance.md#measureinterface)               | Semi-major axis of the orbit (AU or light-years).                         | [types/stars.ts:75](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L75) |
| <a id="angle" /> `angle`          | `number`                                                         | Current orbital position in radians (True Anomaly).                       | [types/stars.ts:83](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L83) |
| <a id="category" /> `category`    | `"star"`                                                         | Defines the category as a star.                                           | [types/stars.ts:67](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L67) |
| <a id="color" /> `color`          | `string`                                                         | Visual representation color.                                              | [types/stars.ts:73](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L73) |
| <a id="e" /> `e`                  | `number`                                                         | Orbital eccentricity (0 = circular, closer to 1 = highly elliptical).     | [types/stars.ts:77](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L77) |
| <a id="focus_x" /> `focus_x?`     | `number`                                                         | X-offset for the ellipse focus (accounts for eccentricity).               | [types/stars.ts:81](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L81) |
| <a id="mia" /> `miA?`             | `number`                                                         | Semi-minor axis of the orbit (calculated from `a` and `e`).               | [types/stars.ts:79](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L79) |
| <a id="name" /> `name`            | `string`                                                         | Name of the star.                                                         | [types/stars.ts:63](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L63) |
| <a id="orbitpath" /> `orbitPath?` | [`Coordinates2DInterface`](planets.md#coordinates2dinterface)\[] | Precomputed orbital path points for visualization (optional).             | [types/stars.ts:93](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L93) |
| <a id="period" /> `period`        | [`TemporalInterface`](temporal.md#temporalinterface)             | Orbital period of the star.                                               | [types/stars.ts:91](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L91) |
| <a id="radius" /> `radius`        | [`DistanceInterface`](distance.md#distanceinterface)             | Physical radius of the star.                                              | [types/stars.ts:71](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L71) |
| <a id="system" /> `system`        | [`StarSystemInterface`](stars.md#starsysteminterface)            | The system in which the star exists.                                      | [types/stars.ts:69](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L69) |
| <a id="type" /> `type`            | `string`                                                         | Classification of the star (e.g., main-sequence, red giant, white dwarf). | [types/stars.ts:65](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L65) |
| <a id="x" /> `x`                  | [`DistanceInterface`](distance.md#distanceinterface)             | X-coordinate in a distance-based system.                                  | [types/stars.ts:85](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L85) |
| <a id="y" /> `y`                  | [`DistanceInterface`](distance.md#distanceinterface)             | Y-coordinate in a distance-based system.                                  | [types/stars.ts:87](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L87) |
| <a id="z" /> `z`                  | [`DistanceInterface`](distance.md#distanceinterface)             | Z-coordinate in a distance-based system.                                  | [types/stars.ts:89](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L89) |

---

### StarSystemInterface

Defined in:
[types/stars.ts:21](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L21)

Represents a **star system**, which can be a planetary system or a stellar
system.

StarSystemInterface

#### Example

```ts
const solarSystem: StarSystemInterface = {
  name: 'Solar System',
  type: 'planetary system'
};
```

#### Properties

| Property                 | Type                                       | Description                                                        | Defined in                                                                                    |
| ------------------------ | ------------------------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| <a id="name-1" /> `name` | `string`                                   | Name of the star system.                                           | [types/stars.ts:22](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L22) |
| <a id="type-1" /> `type` | `"planetary system"` \| `"stellar system"` | Specifies if it is a **planetary system** or a **stellar system**. | [types/stars.ts:23](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L23) |

## Type Aliases

### StarsType

```ts
type StarsType = StarInterface[];
```

Defined in:
[types/stars.ts:101](https://github.com/phun-ky/interstellar/blob/main/src/types/stars.ts#L101)

Type alias for a collection of **stars**.

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
