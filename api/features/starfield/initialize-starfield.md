<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / features/starfield/initialize-starfield

# features/starfield/initialize-starfield

> Last updated 2025-03-20T15:09:40.720Z

## Table of Contents

- [Functions](#functions)
  - [initializeStarfield()](#initializestarfield)

## Functions

### initializeStarfield()

```ts
function initializeStarfield(canvasWidth, canvasHeight, scale): Promise<void>;
```

Defined in:
[features/starfield/initialize-starfield.ts:27](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/initialize-starfield.ts#L27)

Initializes or updates the starfield when the window resizes.

**Initialization Logic:**

- If `globalThis.STARFIELD_BITMAP` **does not exist**, a new starfield is
  generated.
- If the **canvas size has changed**, the starfield is regenerated.
- The last known canvas size is stored in `globalThis.LAST_CANVAS_SIZE` to
  detect changes.

#### Parameters

| Parameter      | Type                                                       | Description                            |
| -------------- | ---------------------------------------------------------- | -------------------------------------- |
| `canvasWidth`  | `number`                                                   | The width of the canvas in pixels.     |
| `canvasHeight` | `number`                                                   | The height of the canvas in pixels.    |
| `scale`        | [`ValueInterface`](../../types/distance.md#valueinterface) | The scale factor affecting star sizes. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

A promise that resolves once the starfield bitmap is created.

#### Async

#### Example

```ts
await initializeStarfield(1920, 1080, { value: 1 });
console.log(globalThis.STARFIELD_BITMAP); // Outputs the updated starfield bitmap
```

#### See

[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

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
