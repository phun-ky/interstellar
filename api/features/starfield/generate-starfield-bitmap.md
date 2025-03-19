<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / features/starfield/generate-starfield-bitmap

# features/starfield/generate-starfield-bitmap

> Last updated 2025-03-19T08:29:08.337Z

## Table of Contents

- [Functions](#functions)
  - [generateStarfieldBitmap()](#generatestarfieldbitmap)

## Functions

### generateStarfieldBitmap()

```ts
function generateStarfieldBitmap(width, height, scale): Promise<void>;
```

Defined in:
[features/starfield/generate-starfield-bitmap.ts:38](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/generate-starfield-bitmap.ts#L38)

Generates an offscreen canvas containing a starfield and converts it into an
`ImageBitmap`.

**Rendering Process:**

- Uses an **OffscreenCanvas** to improve performance.
- Iterates through the `starfield` array and renders each star based on:
  - **Size**: Proportional to `scale.value`, ensuring a minimum visible size.
  - **Parallax Factor**: Determines star brightness and color.

**Star Color Mapping:**

- Stars are coloured based on their **parallax factor**, simulating depth
  perception:
  - $> 4.51$ → **Bright white** (`rgb(255,255,255)`).
  - $> 3.51$ → **Slightly bluish-white** (`rgb(220,220,255)`).
  - $> 2.51$ → **Light blue** (`rgb(200,200,255)`).
  - $> 1.51$ → **Deeper blue** (`rgb(170,170,255)`).
  - Else → **Faintest, furthest away** (`rgb(150,150,255)`).

Once drawn, the canvas is converted into an `ImageBitmap` for efficient
rendering.

#### Parameters

| Parameter | Type                                                       | Description                                  |
| --------- | ---------------------------------------------------------- | -------------------------------------------- |
| `width`   | `number`                                                   | The width of the offscreen canvas.           |
| `height`  | `number`                                                   | The height of the offscreen canvas.          |
| `scale`   | [`ValueInterface`](../../types/distance.md#valueinterface) | The scale factor for determining star sizes. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

A promise that resolves once the `ImageBitmap` is created.

#### Async

#### Example

```ts
await generateStarfieldBitmap(1920, 1080, { value: 1 });
console.log(globalThis.STARFIELD_BITMAP); // Outputs the generated starfield bitmap
```

#### See

[OffscreenCanvas API](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)

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
