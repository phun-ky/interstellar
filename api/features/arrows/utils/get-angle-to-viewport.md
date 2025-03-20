<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../../README.md) / features/arrows/utils/get-angle-to-viewport

# features/arrows/utils/get-angle-to-viewport

> Last updated 2025-03-20T15:01:41.145Z

## Table of Contents

- [Functions](#functions)
  - [getAngleToViewport()](#getangletoviewport)

## Functions

### getAngleToViewport()

```ts
function getAngleToViewport(xPX, yPX, referenceX, referenceY): number;
```

Defined in:
[features/arrows/utils/get-angle-to-viewport.ts:28](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/utils/get-angle-to-viewport.ts#L28)

Computes the angle from a reference point to a given point in the viewport.

The function calculates the angle in radians using the `atan2` function, which
returns the angle between the positive x-axis and the point `(xPX, yPX)`
relative to the reference point `(referenceX, referenceY)`. The computed angle
follows the standard mathematical convention where:

- Positive angles indicate counter-clockwise rotation.
- Negative angles indicate clockwise rotation.

The formula used is:
$\theta = \tan^{-1}\left(\frac{y_{PX} - \text{referenceY}}{x_{PX} - \text{referenceX}}\right)$

#### Parameters

| Parameter    | Type     | Description                                     |
| ------------ | -------- | ----------------------------------------------- |
| `xPX`        | `number` | The x-coordinate of the target point in pixels. |
| `yPX`        | `number` | The y-coordinate of the target point in pixels. |
| `referenceX` | `number` | The x-coordinate of the reference point.        |
| `referenceY` | `number` | The y-coordinate of the reference point.        |

#### Returns

`number`

The angle in radians between the reference point and the target point.

#### Example

```ts
const angle = getAngleToViewport(100, 150, 50, 50);
console.log(angle); // Output: angle in radians
```

#### See

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2>

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
