[interstellar](../../README.md) / features/starfield/draw-starfield

# features/starfield/draw-starfield

> Last updated 2025-03-18T11:22:37.507Z

## Table of Contents

- [Functions](#functions)
  - [drawStarfield()](#drawstarfield)
- [**Rendering Process:**](#rendering-process)

## Functions

### drawStarfield()

```ts
function drawStarfield(space, canvasWidth, canvasHeight): void;
```

Defined in: features/starfield/draw-starfield.ts:18

Renders the pre-generated starfield onto the canvas.

## **Rendering Process:**

- If `globalThis.STARFIELD_BITMAP` exists, it is drawn onto the canvas.
- The bitmap is stretched to fit the entire canvas area.

#### Parameters

| Parameter      | Type                                                                                              | Description                             |
| -------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `space`        | [`CanvasRenderingContext2D`](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D) | The 2D rendering context of the canvas. |
| `canvasWidth`  | `number`                                                                                          | The width of the canvas in pixels.      |
| `canvasHeight` | `number`                                                                                          | The height of the canvas in pixels.     |

#### Returns

`void`

This function does not return a value; it draws the starfield onto the canvas.

#### Example

```ts
drawStarfield(ctx, 800, 600);
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
