<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../../README.md) / features/canvas/setup-canvas

# features/canvas/setup-canvas

> Last updated 2025-03-18T13:45:43.056Z

## Table of Contents

- [Functions](#functions)
  - [setupCanvas()](#setupcanvas)

## Functions

### setupCanvas()

```ts
function setupCanvas(): {
  canvas: HTMLCanvasElement;
  space: CanvasRenderingContext2D;
};
```

Defined in:
[features/canvas/setup-canvas.ts:25](https://github.com/phun-ky/interstellar/blob/main/src/features/canvas/setup-canvas.ts#L25)

Initializes and configures a full-screen canvas with a 2D rendering context.

This function:

- Retrieves the canvas element by its ID (`spaceCanvas`).
- Ensures the canvas and its 2D rendering context exist, throwing an error
  otherwise.
- Adjusts the canvas resolution based on the device's pixel ratio for crisp
  rendering.
- Scales the rendering context to maintain proper drawing proportions.
- Sets the CSS size of the canvas to match the viewport dimensions.

#### Returns

```ts
{
  canvas: HTMLCanvasElement;
  space: CanvasRenderingContext2D;
}
```

An object containing the initialized canvas and its 2D rendering context.

| Name     | Type                                                                                              | Defined in                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `canvas` | [`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)               | [features/canvas/setup-canvas.ts:26](https://github.com/phun-ky/interstellar/blob/main/src/features/canvas/setup-canvas.ts#L26) |
| `space`  | [`CanvasRenderingContext2D`](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D) | [features/canvas/setup-canvas.ts:27](https://github.com/phun-ky/interstellar/blob/main/src/features/canvas/setup-canvas.ts#L27) |

#### Throws

If the canvas element or its rendering context is not found.

#### Example

```ts
const { canvas, space } = setupCanvas();
space.fillStyle = 'black';
space.fillRect(0, 0, canvas.width, canvas.height);
```

#### See

[https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

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
