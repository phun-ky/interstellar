<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / features/arrows/draw-arrowheads

# features/arrows/draw-arrowheads

> Last updated 2025-03-20T15:09:40.711Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [DrawDirectionalArrowsPropsType](#drawdirectionalarrowspropstype)
- [Functions](#functions)
  - [drawDirectionalArrows()](#drawdirectionalarrows)

## Type Aliases

### DrawDirectionalArrowsPropsType

```ts
type DrawDirectionalArrowsPropsType = {
  canvasHeight: number;
  canvasWidth: number;
  referenceX: number;
  referenceY: number;
  space: CanvasRenderingContext2D;
  system: string;
  type: 'stars' | 'planets' | 'moons' | 'comets';
};
```

Defined in:
[features/arrows/draw-arrowheads.ts:6](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/draw-arrowheads.ts#L6)

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="canvasheight"></a> `canvasHeight`

</td>
<td>

`number`

</td>
<td>

[features/arrows/draw-arrowheads.ts:9](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/draw-arrowheads.ts#L9)

</td>
</tr>
<tr>
<td>

<a id="canvaswidth"></a> `canvasWidth`

</td>
<td>

`number`

</td>
<td>

[features/arrows/draw-arrowheads.ts:8](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/draw-arrowheads.ts#L8)

</td>
</tr>
<tr>
<td>

<a id="referencex"></a> `referenceX`

</td>
<td>

`number`

</td>
<td>

[features/arrows/draw-arrowheads.ts:10](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/draw-arrowheads.ts#L10)

</td>
</tr>
<tr>
<td>

<a id="referencey"></a> `referenceY`

</td>
<td>

`number`

</td>
<td>

[features/arrows/draw-arrowheads.ts:11](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/draw-arrowheads.ts#L11)

</td>
</tr>
<tr>
<td>

<a id="space"></a> `space`

</td>
<td>

[`CanvasRenderingContext2D`](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D)

</td>
<td>

[features/arrows/draw-arrowheads.ts:7](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/draw-arrowheads.ts#L7)

</td>
</tr>
<tr>
<td>

<a id="system"></a> `system`?

</td>
<td>

`string`

</td>
<td>

[features/arrows/draw-arrowheads.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/draw-arrowheads.ts#L13)

</td>
</tr>
<tr>
<td>

<a id="type"></a> `type`?

</td>
<td>

`"stars"` | `"planets"` | `"moons"` | `"comets"`

</td>
<td>

[features/arrows/draw-arrowheads.ts:12](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/draw-arrowheads.ts#L12)

</td>
</tr>
</tbody>
</table>

## Functions

### drawDirectionalArrows()

```ts
function drawDirectionalArrows(props): void;
```

Defined in:
[features/arrows/draw-arrowheads.ts:47](https://github.com/phun-ky/interstellar/blob/main/src/features/arrows/draw-arrowheads.ts#L47)

Draws directional arrows for celestial bodies that are off-screen.

This function checks the positions of celestial bodies (stars, planets, moons,
or comets) within `globalThis.NEAREST_BODIES`. If any body is off-screen, an
arrow is drawn pointing in its direction from the center of the viewport.

The function categorizes bodies based on the `type` parameter and filters them
accordingly. If `type` is `moons`, an additional `system` parameter is required
to determine the host planet.

#### Parameters

| Parameter | Type                                                                                  | Description                                 |
| --------- | ------------------------------------------------------------------------------------- | ------------------------------------------- |
| `props`   | [`DrawDirectionalArrowsPropsType`](draw-arrowheads.md#drawdirectionalarrowspropstype) | The properties required for drawing arrows. |

#### Returns

`void`

#### Example

```ts
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
if (ctx) {
  drawDirectionalArrows({
    space: ctx,
    canvasWidth: canvas.width,
    canvasHeight: canvas.height,
    referenceX: canvas.width / 2,
    referenceY: canvas.height / 2,
    type: 'planets'
  });
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
