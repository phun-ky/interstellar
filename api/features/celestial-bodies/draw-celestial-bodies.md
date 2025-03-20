<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) /
features/celestial-bodies/draw-celestial-bodies

# features/celestial-bodies/draw-celestial-bodies

> Last updated 2025-03-20T15:01:41.147Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [DrawCelestialBodiesPropsType](#drawcelestialbodiespropstype)
- [Functions](#functions)
  - [drawCelestialBodies()](#drawcelestialbodies)

## Type Aliases

### DrawCelestialBodiesPropsType

```ts
type DrawCelestialBodiesPropsType = {
  celestialBodies: CelestialBodiesType;
  maxSize: number;
  referenceX: number;
  referenceY: number;
  scale: ValueInterface;
  space: CanvasRenderingContext2D;
};
```

Defined in:
[features/celestial-bodies/draw-celestial-bodies.ts:12](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-celestial-bodies.ts#L12)

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

[`CelestialBodiesType`](../../types/celestial-bodies.md#celestialbodiestype)

</td>
<td>

[features/celestial-bodies/draw-celestial-bodies.ts:17](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-celestial-bodies.ts#L17)

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

[features/celestial-bodies/draw-celestial-bodies.ts:18](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-celestial-bodies.ts#L18)

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

[features/celestial-bodies/draw-celestial-bodies.ts:14](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-celestial-bodies.ts#L14)

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

[features/celestial-bodies/draw-celestial-bodies.ts:15](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-celestial-bodies.ts#L15)

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

[features/celestial-bodies/draw-celestial-bodies.ts:16](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-celestial-bodies.ts#L16)

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

[features/celestial-bodies/draw-celestial-bodies.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-celestial-bodies.ts#L13)

</td>
</tr>
</tbody>
</table>

## Functions

### drawCelestialBodies()

```ts
function drawCelestialBodies(props): void;
```

Defined in:
[features/celestial-bodies/draw-celestial-bodies.ts:81](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/draw-celestial-bodies.ts#L81)

Renders celestial bodies onto a 2D canvas based on their orbital parameters.

**Mathematical Explanation:**

Celestial bodies follow **elliptical orbits** with positions computed as:

$$
x = a \cos(\theta) - f
$$

$$
y = b \sin(\theta)
$$

where:

- $a$ is the **semi-major axis** in astronomical units (AU).
- $b = a\sqrt{1 - e^2}$ is the **semi-minor axis**.
- $\theta$ is the **true anomaly**.
- $f = e \cdot a$ is the **focus shift**.
- $(x, y)$ is the **celestial body's position** in AU.

The **rendered size** of each celestial body is computed as:

$$
S = \max(\text{scaled radius}, \text{maxSize})
$$

ensuring a **minimum renderable size** for visibility.

#### Parameters

| Parameter | Type                                                                                    | Description                             |
| --------- | --------------------------------------------------------------------------------------- | --------------------------------------- |
| `props`   | [`DrawCelestialBodiesPropsType`](draw-celestial-bodies.md#drawcelestialbodiespropstype) | Object containing rendering parameters. |

#### Returns

`void`

This function does not return a value; it renders celestial bodies onto the
canvas.

#### Example

```ts
const celestialBodies: CelestialBodiesType = [
  {
    name: 'Star A',
    a: { value: 5000, unit: 'AU' },
    e: 0.1,
    radius: { value: 696340, unit: 'km' },
    color: 'white',
    angle: 0,
    miA: 5000 * Math.sqrt(1 - 0.1 ** 2), // Semi-minor axis
    focus_x: 0.1 * 5000 // Focus shift
  }
];

drawCelestialBodies({
  space: ctx,
  referenceX: 500,
  referenceY: 500,
  scale: { value: 50 },
  celestialBodies: celestialBodies
});
```

#### See

[Elliptical Orbits](https://en.wikipedia.org/wiki/Ellipse)

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
