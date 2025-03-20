<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / features/labels/draw-galaxy-label

# features/labels/draw-galaxy-label

> Last updated 2025-03-20T15:06:52.001Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [DrawGalaxyLabelPropsType](#drawgalaxylabelpropstype)
- [Functions](#functions)
  - [drawGalaxyLabel()](#drawgalaxylabel)

## Type Aliases

### DrawGalaxyLabelPropsType

```ts
type DrawGalaxyLabelPropsType = {
  galaxy: GalaxyInterface;
  referenceX: number;
  referenceY: number;
  scale: ValueInterface;
  space: CanvasRenderingContext2D;
};
```

Defined in:
[features/labels/draw-galaxy-label.ts:8](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw-galaxy-label.ts#L8)

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

[features/labels/draw-galaxy-label.ts:12](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw-galaxy-label.ts#L12)

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

[features/labels/draw-galaxy-label.ts:10](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw-galaxy-label.ts#L10)

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

[features/labels/draw-galaxy-label.ts:11](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw-galaxy-label.ts#L11)

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

[features/labels/draw-galaxy-label.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw-galaxy-label.ts#L13)

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

[features/labels/draw-galaxy-label.ts:9](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw-galaxy-label.ts#L9)

</td>
</tr>
</tbody>
</table>

## Functions

### drawGalaxyLabel()

```ts
function drawGalaxyLabel(props): void;
```

Defined in:
[features/labels/draw-galaxy-label.ts:57](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw-galaxy-label.ts#L57)

Renders the name of a galaxy and its central black hole onto a 2D canvas.

**Rendering Details:**

- The **galaxy name** is displayed above the black hole.
- The **black hole name** is displayed slightly lower.
- Labels are centered relative to the reference coordinates.
- The vertical spacing is determined dynamically by:

$$
y_{label} = referenceY - \text{distanceToPixels}(r, \text{scale}) - offset
$$

where:

- $r$ is the **radius of the black hole**.
- `offset` is a fixed value to ensure proper label separation.

#### Parameters

| Parameter | Type                                                                        | Description                             |
| --------- | --------------------------------------------------------------------------- | --------------------------------------- |
| `props`   | [`DrawGalaxyLabelPropsType`](draw-galaxy-label.md#drawgalaxylabelpropstype) | Object containing rendering parameters. |

#### Returns

`void`

This function does not return a value; it renders text labels onto the canvas.

#### Example

```ts
const galaxy: GalaxyInterface = {
  name: 'Milky Way',
  blackHole: { name: 'Sagittarius A*', radius: { value: 0.08, unit: 'AU' } }
};

drawGalaxyLabel({
  space: ctx,
  referenceX: 500,
  referenceY: 500,
  scale: { value: 50 },
  galaxy: galaxy
});
```

#### See

[Sagittarius A\*](https://en.wikipedia.org/wiki/Sagittarius_A*)

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
