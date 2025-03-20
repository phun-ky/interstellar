<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / features/minimap/update-minimap

# features/minimap/update-minimap

> Last updated 2025-03-20T15:01:41.150Z

## Table of Contents

- [Functions](#functions)
  - [updateMinimap()](#updateminimap)

## Functions

### updateMinimap()

```ts
function updateMinimap(stars, scale, offsetX, offsetY): void;
```

Defined in:
[features/minimap/update-minimap.ts:39](https://github.com/phun-ky/interstellar/blob/main/src/features/minimap/update-minimap.ts#L39)

Updates the minimap by rendering Sagittarius A\* and nearby stars, positioning
them relative to the viewport center.

**Rendering Details:**

- The **minimap size** is fixed at `150px`.
- **Sagittarius A**\* is marked with a red dot and moves relative to the
  viewport center.
- **Stars** are rendered as coloured dots based on their real positions,
  adjusted to fit the minimap.
- The positions are offset using:

$$
x_{scaled} = \frac{x}{1000} \times 0.1 - \text{offsetXScaled}
$$

$$
y_{scaled} = \frac{y}{1000} \times 0.1 - \text{offsetYScaled}
$$

ensuring proper relative motion.

#### Parameters

| Parameter | Type                                                       | Description                                   |
| --------- | ---------------------------------------------------------- | --------------------------------------------- |
| `stars`   | [`StarsType`](../../types/stars.md#starstype)              | An array of stars with positional data.       |
| `scale`   | [`ValueInterface`](../../types/distance.md#valueinterface) | The scale factor for unit conversion.         |
| `offsetX` | [`ValueInterface`](../../types/distance.md#valueinterface) | The x-offset relative to the viewport center. |
| `offsetY` | [`ValueInterface`](../../types/distance.md#valueinterface) | The y-offset relative to the viewport center. |

#### Returns

`void`

This function does not return a value; it updates the minimap dynamically.

#### Example

```ts
const stars: StarsType = [
  {
    name: 'Star A',
    x: { value: 500, unit: 'ly' },
    y: { value: -300, unit: 'ly' },
    color: 'white'
  }
];

updateMinimap(stars, { value: 50 }, { value: 100 }, { value: 200 });
```

#### See

[Sagittarius A\*](https://en.wikipedia.org/wiki/Sagittarius_A*)

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
