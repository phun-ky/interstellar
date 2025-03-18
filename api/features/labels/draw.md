<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../../README.md) / features/labels/draw

# features/labels/draw

> Last updated 2025-03-18T13:17:24.397Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [DrawLabelsPropsType](#drawlabelspropstype)
- [Functions](#functions)
  - [drawLabels()](#drawlabels)
- [**Mathematical Explanation:**](#mathematical-explanation)

## Type Aliases

### DrawLabelsPropsType

```ts
type DrawLabelsPropsType = {
  celestialBodies: CelestialBodiesType;
  referenceX: number;
  referenceY: number;
  scale: ValueInterface;
  space: CanvasRenderingContext2D;
};
```

Defined in:
[features/labels/draw.ts:11](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw.ts#L11)

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
        <a id="celestialbodies" /> `celestialBodies`
      </td>

      <td>
        [`CelestialBodiesType`](../../types/celestial-bodies.md#celestialbodiestype)
      </td>

      <td>
        [features/labels/draw.ts:15](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw.ts#L15)
      </td>
    </tr>

    <tr>
      <td>
        <a id="referencex" /> `referenceX`
      </td>

      <td>
        `number`
      </td>

      <td>
        [features/labels/draw.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw.ts#L13)
      </td>
    </tr>

    <tr>
      <td>
        <a id="referencey" /> `referenceY`
      </td>

      <td>
        `number`
      </td>

      <td>
        [features/labels/draw.ts:14](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw.ts#L14)
      </td>
    </tr>

    <tr>
      <td>
        <a id="scale" /> `scale`
      </td>

      <td>
        [`ValueInterface`](../../types/distance.md#valueinterface)
      </td>

      <td>
        [features/labels/draw.ts:16](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw.ts#L16)
      </td>
    </tr>

    <tr>
      <td>
        <a id="space" /> `space`
      </td>

      <td>
        [`CanvasRenderingContext2D`](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D)
      </td>

      <td>
        [features/labels/draw.ts:12](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw.ts#L12)
      </td>
    </tr>

  </tbody>
</table>

## Functions

### drawLabels()

```ts
function drawLabels(props): void;
```

Defined in:
[features/labels/draw.ts:84](https://github.com/phun-ky/interstellar/blob/main/src/features/labels/draw.ts#L84)

Renders text labels for celestial bodies onto a 2D canvas.

## **Mathematical Explanation:**

The **position of each label** is computed using:

$$
x = a \cos(\theta) - f
$$

$$
y = b \sin(\theta)
$$

followed by converting to pixel coordinates:

$$
x_{px} = \text{referenceX} + \text{distanceToPixels}(x, \text{scale})
$$

$$
y_{px} = \text{referenceY} + \text{distanceToPixels}(y, \text{scale})
$$

where:

- $a$ is the **semi-major axis**.
- $b = a\sqrt{1 - e^2}$ is the **semi-minor axis**.
- $\theta$ is the **true anomaly**.
- $f = e \cdot a$ is the **focus shift**.
- $x, y$ are **real-world coordinates**.
- $x_{px}, y_{px}$ are **pixel coordinates**.

The label is positioned above the celestial body:

$$
y_{label} = y_{px} - \text{distanceToPixels}(r, \text{scale}) - 24
$$

ensuring that text does not overlap the object.

#### Parameters

| Parameter | Type                                                 | Description                             |
| --------- | ---------------------------------------------------- | --------------------------------------- |
| `props`   | [`DrawLabelsPropsType`](draw.md#drawlabelspropstype) | Object containing rendering parameters. |

#### Returns

`void`

This function does not return a value; it renders text labels onto the canvas.

#### Example

```ts
const celestialBodies: CelestialBodiesType = [
  {
    name: 'Earth',
    a: { value: 1, unit: 'AU' },
    e: 0.0167,
    radius: { value: 6371, unit: 'km' },
    angle: Math.PI / 2,
    miA: 1 * Math.sqrt(1 - 0.0167 ** 2), // Semi-minor axis
    focus_x: 0.0167 * 1 // Focus shift
  }
];

drawLabels({
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
