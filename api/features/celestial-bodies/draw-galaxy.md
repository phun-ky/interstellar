<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / features/celestial-bodies/draw-galaxy

# features/celestial-bodies/draw-galaxy

> Last updated 2025-03-19T08:29:08.333Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [DrawGalaxyPropsType](#drawgalaxypropstype)
- [Functions](#functions)
  - [drawGalaxy()](#drawgalaxy)

## Type Aliases

### DrawGalaxyPropsType

```ts
type DrawGalaxyPropsType = {
  galaxy: GalaxyInterface;
  maxSize: number;
  referenceX: number;
  referenceY: number;
  scale: ValueInterface;
  space: CanvasRenderingContext2D;
};
```

Defined in:
[features/celestial-bodies/draw-galaxy.ts:7](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-galaxy.ts#L7)

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

<a id="galaxy"></a> `galaxy`

</td>
<td>

[`GalaxyInterface`](../../types/galaxies.md#galaxyinterface)

</td>
<td>

[features/celestial-bodies/draw-galaxy.ts:12](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-galaxy.ts#L12)

</td>
</tr>
<tr>
<td>

<a id="maxsize"></a> `maxSize`?

</td>
<td>

`number`

</td>
<td>

[features/celestial-bodies/draw-galaxy.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-galaxy.ts#L13)

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

[features/celestial-bodies/draw-galaxy.ts:9](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-galaxy.ts#L9)

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

[features/celestial-bodies/draw-galaxy.ts:10](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-galaxy.ts#L10)

</td>
</tr>
<tr>
<td>

<a id="scale"></a> `scale`

</td>
<td>

[`ValueInterface`](../../types/distance.md#valueinterface)

</td>
<td>

[features/celestial-bodies/draw-galaxy.ts:11](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-galaxy.ts#L11)

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

[features/celestial-bodies/draw-galaxy.ts:8](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-galaxy.ts#L8)

</td>
</tr>
</tbody>
</table>

## Functions

### drawGalaxy()

```ts
function drawGalaxy(props): void;
```

Defined in:
[features/celestial-bodies/draw-galaxy.ts:56](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-galaxy.ts#L56)

Renders a galaxy onto a 2D canvas by representing its central supermassive black
hole.

**Mathematical Explanation:**

The **radius** of the black hole in pixels is determined using:

$$
r_{px} = \max(\text{scaled radius}, \text{maxSize})
$$

ensuring a **minimum renderable size** for visibility.

The galactic center is visually depicted as a circular region.

#### Parameters

| Parameter | Type                                                        | Description                             |
| --------- | ----------------------------------------------------------- | --------------------------------------- |
| `props`   | [`DrawGalaxyPropsType`](draw-galaxy.md#drawgalaxypropstype) | Object containing rendering parameters. |

#### Returns

`void`

This function does not return a value; it renders the galaxy onto the canvas.

#### Example

```ts
const galaxy: GalaxyInterface = {
  name: 'Milky Way',
  blackHole: { radius: { value: 0.08, unit: 'AU' } }
};

drawGalaxy({
  space: ctx,
  referenceX: 500,
  referenceY: 500,
  scale: { value: 50 },
  galaxy: galaxy
});
```

#### See

[Supermassive Black Holes](https://en.wikipedia.org/wiki/Supermassive_black_hole)

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
