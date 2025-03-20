<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../../../README.md) /
features/canvas/config/camera/get-reference

# features/canvas/config/camera/get-reference

> Last updated 2025-03-20T15:01:41.146Z

## Table of Contents

- [Functions](#functions)
  - [getReference()](#getreference)

## Functions

### getReference()

```ts
function getReference(canvas): {
  referenceX: number;
  referenceY: number;
};
```

Defined in:
[features/canvas/config/camera/get-reference.ts:26](https://github.com/phun-ky/interstellar/blob/main/src/features/canvas/config/camera/get-reference.ts#L26)

Computes the reference point at the center of the canvas, adjusted by offsets.

This function calculates the central coordinates of the canvas and applies
additional offsets (`offsetX` and `offsetY`). The reference point can be used as
a central position for positioning objects, aligning with the galaxy center.

The formula used is:
$\text{referenceX} = \frac{\text{canvas width}}{2} + \text{offsetX}$
$\text{referenceY} = \frac{\text{canvas height}}{2} + \text{offsetY}$

#### Parameters

| Parameter | Type                                                                                | Description         |
| --------- | ----------------------------------------------------------------------------------- | ------------------- |
| `canvas`  | [`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement) | The canvas element. |

#### Returns

```ts
{
  referenceX: number;
  referenceY: number;
}
```

The computed reference coordinates.

| Name         | Type     | Defined in                                                                                                                                                    |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `referenceX` | `number` | [features/canvas/config/camera/get-reference.ts:28](https://github.com/phun-ky/interstellar/blob/main/src/features/canvas/config/camera/get-reference.ts#L28) |
| `referenceY` | `number` | [features/canvas/config/camera/get-reference.ts:28](https://github.com/phun-ky/interstellar/blob/main/src/features/canvas/config/camera/get-reference.ts#L28) |

#### Example

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const { referenceX, referenceY } = getReference(canvas);
console.log(referenceX, referenceY);
```

#### See

<https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API>

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
