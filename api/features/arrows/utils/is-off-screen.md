<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../../README.md) / features/arrows/utils/is-off-screen

# features/arrows/utils/is-off-screen

> Last updated 2025-03-19T08:29:08.330Z

## Table of Contents

- [Functions](#functions)
  - [isOffScreen()](#isoffscreen)

## Functions

### isOffScreen()

```ts
function isOffScreen(xPX, yPX, canvasWidth, canvasHeight): boolean;
```

Defined in:
[features/arrows/utils/is-off-screen.ts:22](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/utils/is-off-screen.ts#L22)

Determines whether a given point is outside the visible canvas area.

The function checks if the point `(xPX, yPX)` lies outside the boundaries
defined by `canvasWidth` and `canvasHeight`. If the point is beyond any of the
edges (left, right, top, or bottom), the function returns `true`.

#### Parameters

| Parameter      | Type     | Description                              |
| -------------- | -------- | ---------------------------------------- |
| `xPX`          | `number` | The x-coordinate of the point in pixels. |
| `yPX`          | `number` | The y-coordinate of the point in pixels. |
| `canvasWidth`  | `number` | The width of the canvas in pixels.       |
| `canvasHeight` | `number` | The height of the canvas in pixels.      |

#### Returns

`boolean`

`true` if the point is outside the canvas boundaries, otherwise `false`.

#### Example

```ts
const isOutside = isOffScreen(-10, 50, 800, 600);
console.log(isOutside); // Output: true
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
