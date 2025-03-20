<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../../README.md) / features/celestial-bodies/orbits/draw

# features/celestial-bodies/orbits/draw

> Last updated 2025-03-20T15:06:51.998Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [DrawOrbitsPropsType](#draworbitspropstype)
- [Functions](#functions)
  - [drawOrbits()](#draworbits)

## Type Aliases

### DrawOrbitsPropsType

```ts
type DrawOrbitsPropsType = {
  celestialBodies: CelestialBodiesType;
  referenceX: number;
  referenceY: number;
  scale: ValueInterface;
  space: CanvasRenderingContext2D;
  toggled: boolean;
};
```

Defined in:
[features/celestial-bodies/orbits/draw.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/orbits/draw.ts#L13)

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

<a id="celestialbodies"></a> `celestialBodies`

</td>
<td>

[`CelestialBodiesType`](../../../types/celestial-bodies.md#celestialbodiestype)

</td>
<td>

[features/celestial-bodies/orbits/draw.ts:14](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/orbits/draw.ts#L14)

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

[features/celestial-bodies/orbits/draw.ts:17](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/orbits/draw.ts#L17)

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

[features/celestial-bodies/orbits/draw.ts:18](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/orbits/draw.ts#L18)

</td>
</tr>
<tr>
<td>

<a id="scale"></a> `scale`

</td>
<td>

[`ValueInterface`](../../../types/distance.md#valueinterface)

</td>
<td>

[features/celestial-bodies/orbits/draw.ts:19](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/orbits/draw.ts#L19)

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

[features/celestial-bodies/orbits/draw.ts:16](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/orbits/draw.ts#L16)

</td>
</tr>
<tr>
<td>

<a id="toggled"></a> `toggled`

</td>
<td>

`boolean`

</td>
<td>

[features/celestial-bodies/orbits/draw.ts:15](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/orbits/draw.ts#L15)

</td>
</tr>
</tbody>
</table>

## Functions

### drawOrbits()

```ts
function drawOrbits(props): void;
```

Defined in:
[features/celestial-bodies/orbits/draw.ts:61](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/orbits/draw.ts#L61)

Renders the **orbital paths** of celestial bodies around a galactic center onto
a 2D canvas.

**Mathematical Explanation:**

A celestial body follows an **elliptical orbit** with the galactic center at one
of its foci. The **orbit path** consists of discrete points $(x, y)$, which are
calculated as:

$$
x = a \cos(\theta) - f
$$

$$
y = b \sin(\theta)
$$

where:

- $a$ is the **semi-major axis** in real-world units (e.g., AU or light-years).
- $b$ is the **semi-minor axis** in real-world units.
- $\theta$ is the **current orbital position** (true anomaly).
- $f = e \cdot a$ is the **focus shift** (due to eccentricity), calculated in
  real-world units.
- $(x, y)$ represents the **position of a point** on the orbit in real-world
  units.

The **focus shift** accounts for the elliptical nature of the orbit, ensuring
accurate rendering.

#### Parameters

| Parameter | Type                                                 | Description                                     |
| --------- | ---------------------------------------------------- | ----------------------------------------------- |
| `props`   | [`DrawOrbitsPropsType`](draw.md#draworbitspropstype) | Contains orbital data and rendering parameters. |

#### Returns

`void`

This function does not return a value; it renders the orbits directly onto the
canvas.

#### Example

```ts
drawOrbits({
  space: ctx,
  referenceX: 500,
  referenceY: 500,
  toggled: true,
  celestialBodies,
  scale: { value: 1 }
});
```

#### See

<https://en.wikipedia.org/wiki/Ellipse>

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
