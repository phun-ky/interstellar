<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / utils/distance/distance-to-pixels

# utils/distance/distance-to-pixels

> Last updated 2025-03-20T15:01:41.158Z

## Table of Contents

- [Functions](#functions)
  - [distanceToPixels()](#distancetopixels)

## Functions

### distanceToPixels()

```ts
function distanceToPixels(distance, scale): number;
```

Defined in:
[utils/distance/distance-to-pixels.ts:29](https://github.com/phun-ky/interstellar/blob/main/src/utils/distance/distance-to-pixels.ts#L29)

Converts a **distance measurement** to **pixels** based on a given scale.

**Conversion Logic:**

1. Converts the input distance to **Astronomical Units (AU)**.
2. Multiplies the AU value by **AU_IN_PX** (pixels per AU) and the provided
   **scale**.

**Usage in Visualization:**

- Used to map **real-world distances** into **pixel-based rendering**.
- Supports unit conversions before scaling.

#### Parameters

| Parameter  | Type                                                             | Description                       |
| ---------- | ---------------------------------------------------------------- | --------------------------------- |
| `distance` | [`DistanceInterface`](../../types/distance.md#distanceinterface) | The distance value and its unit.  |
| `scale`    | [`ValueInterface`](../../types/distance.md#valueinterface)       | The scaling factor for rendering. |

#### Returns

`number`

The equivalent distance in pixels.

#### Example

```ts
const pixelDistance = distanceToPixels({ value: 1, unit: 'AU' }, { value: 50 });
console.log(pixelDistance); // Output: Pixels equivalent of 1 AU at scale 50
```

#### See

[convertDistance](convert-distance.md#convertdistance) for unit conversions.

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
