<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / utils/distance/pixels-to-distance

# utils/distance/pixels-to-distance

> Last updated 2025-03-20T15:01:41.158Z

## Table of Contents

- [Functions](#functions)
  - [pixelsToDistance()](#pixelstodistance)

## Functions

### pixelsToDistance()

```ts
function pixelsToDistance(pixels, scale): DistanceInterface;
```

Defined in:
[utils/distance/pixels-to-distance.ts:25](https://github.com/phun-ky/interstellar/blob/main/src/utils/distance/pixels-to-distance.ts#L25)

Converts a **pixel-based distance** back into **Astronomical Units (AU)**.

**Conversion Logic:**

1. Divides the pixel distance by **AU_IN_PX** (pixels per AU).
2. Adjusts the result based on the **scale factor**.

**Usage in Visualization:**

- Used to map **rendered pixel distances** back into **real-world AU
  measurements**.
- Supports scaled rendering where **1 AU ≠ fixed pixel value**.

#### Parameters

| Parameter | Type                                                       | Description                       |
| --------- | ---------------------------------------------------------- | --------------------------------- |
| `pixels`  | `number`                                                   | The distance in pixels.           |
| `scale`   | [`ValueInterface`](../../types/distance.md#valueinterface) | The scaling factor for rendering. |

#### Returns

[`DistanceInterface`](../../types/distance.md#distanceinterface)

The converted distance in AU.

#### Example

```ts
const distance = pixelsToDistance(500, { value: 50 });
console.log(distance); // Output: { value: 0.2, unit: 'AU' }
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
