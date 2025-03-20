<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / utils/draw

# utils/draw

> Last updated 2025-03-20T15:09:40.728Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [DrawPropsType](#drawpropstype)
- [Functions](#functions)
  - [draw()](#draw)

## Type Aliases

### DrawPropsType

```ts
type DrawPropsType = {
  canvasHeight: number;
  canvasWidth: number;
  comets: CometsType;
  galaxies: GalaxiesType;
  moons: MoonsType;
  offsetX: ValueInterface;
  offsetY: ValueInterface;
  planets: PlanetsType;
  referenceX: number;
  referenceY: number;
  scale: ValueInterface;
  space: CanvasRenderingContext2D;
  stars: StarsType;
};
```

Defined in:
[utils/draw.ts:37](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L37)

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

[utils/draw.ts:48](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L48)

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

[utils/draw.ts:47](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L47)

</td>
</tr>
<tr>
<td>

<a id="comets"></a> `comets`

</td>
<td>

[`CometsType`](../types/comets.md#cometstype)

</td>
<td>

[utils/draw.ts:43](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L43)

</td>
</tr>
<tr>
<td>

<a id="galaxies"></a> `galaxies`

</td>
<td>

[`GalaxiesType`](../types/galaxies.md#galaxiestype)

</td>
<td>

[utils/draw.ts:41](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L41)

</td>
</tr>
<tr>
<td>

<a id="moons"></a> `moons`

</td>
<td>

[`MoonsType`](../types/moons.md#moonstype)

</td>
<td>

[utils/draw.ts:40](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L40)

</td>
</tr>
<tr>
<td>

<a id="offsetx"></a> `offsetX`

</td>
<td>

[`ValueInterface`](../types/distance.md#valueinterface)

</td>
<td>

[utils/draw.ts:49](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L49)

</td>
</tr>
<tr>
<td>

<a id="offsety"></a> `offsetY`

</td>
<td>

[`ValueInterface`](../types/distance.md#valueinterface)

</td>
<td>

[utils/draw.ts:50](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L50)

</td>
</tr>
<tr>
<td>

<a id="planets"></a> `planets`

</td>
<td>

[`PlanetsType`](../types/planets.md#planetstype)

</td>
<td>

[utils/draw.ts:42](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L42)

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

[utils/draw.ts:45](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L45)

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

[utils/draw.ts:46](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L46)

</td>
</tr>
<tr>
<td>

<a id="scale"></a> `scale`

</td>
<td>

[`ValueInterface`](../types/distance.md#valueinterface)

</td>
<td>

[utils/draw.ts:44](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L44)

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

[utils/draw.ts:38](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L38)

</td>
</tr>
<tr>
<td>

<a id="stars"></a> `stars`

</td>
<td>

[`StarsType`](../types/stars.md#starstype)

</td>
<td>

[utils/draw.ts:39](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L39)

</td>
</tr>
</tbody>
</table>

## Functions

### draw()

```ts
function draw(props): Promise<void>;
```

Defined in:
[utils/draw.ts:93](https://github.com/phun-ky/interstellar/blob/main/src/utils/draw.ts#L93)

**Draws the entire celestial simulation** onto the canvas.

**Functionality:**

- Clears the canvas and renders the **background**.
- Initializes and draws the **starfield**.
- Centers the viewport on a locked celestial body (if any).
- Draws **galaxies, stars, planets, moons, asteroids, and comets** based on zoom
  level.
- Dynamically toggles **orbits, labels, and directional arrows**.

**Render Layers (Ordered):**

1. **Background & Starfield**
2. **Galaxy & Labels**
3. **Stars & Orbits**
4. **Planets & Asteroid Belts**
5. **Comets & Moons**
6. **Labels & Directional Arrows**

#### Parameters

| Parameter | Type                                     | Description                                                            |
| --------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| `props`   | [`DrawPropsType`](draw.md#drawpropstype) | Rendering properties including celestial bodies, scaling, and offsets. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

Asynchronous function to handle initialization.

#### Example

```ts
await draw({
  space: ctx,
  stars,
  moons,
  galaxies,
  planets,
  comets,
  scale: { value: 50 },
  referenceX: 500,
  referenceY: 500,
  canvasWidth: 1024,
  canvasHeight: 768,
  offsetX: { value: 0 },
  offsetY: { value: 0 }
});
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
