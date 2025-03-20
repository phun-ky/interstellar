<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../../README.md) / features/arrows/utils/draw-arrow

# features/arrows/utils/draw-arrow

> Last updated 2025-03-20T15:01:41.145Z

## Table of Contents

- [Functions](#functions)
  - [drawArrow()](#drawarrow)

## Functions

### drawArrow()

```ts
function drawArrow(space, angle, canvasWidth, canvasHeight, name): void;
```

Defined in:
[features/arrows/utils/draw-arrow.ts:27](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/utils/draw-arrow.ts#L27)

Draws an arrow pointing in a specified direction at the edge of the viewport,
along with a label placed near the arrow.

The arrow is positioned based on an angle, calculated from the center of the
canvas. The label is adjusted to ensure it remains within the viewport.

#### Parameters

| Parameter      | Type                                                                                              | Description                                          |
| -------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `space`        | [`CanvasRenderingContext2D`](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D) | The rendering context for the canvas.                |
| `angle`        | `number`                                                                                          | The angle in radians at which the arrow is pointing. |
| `canvasWidth`  | `number`                                                                                          | The width of the canvas.                             |
| `canvasHeight` | `number`                                                                                          | The height of the canvas.                            |
| `name`         | `string`                                                                                          | The label to be displayed near the arrow.            |

#### Returns

`void`

#### Example

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
if (ctx) {
  drawArrow(ctx, Math.PI / 4, canvas.width, canvas.height, 'North-East');
}
```

#### See

<https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D>

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
