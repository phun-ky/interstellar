[interstellar](../../../README.md) /
features/celestial-bodies/utils/get-body-position

# features/celestial-bodies/utils/get-body-position

> Last updated 2025-03-18T11:22:37.505Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [GetBodyPositionReturnType](#getbodypositionreturntype)
- [Functions](#functions)
  - [getBodyPosition()](#getbodyposition)

## Type Aliases

### GetBodyPositionReturnType

```ts
type GetBodyPositionReturnType = {
  x: MeasureInterface | undefined;
  y: MeasureInterface | undefined;
};
```

Defined in: features/celestial-bodies/utils/get-body-position.ts:7

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
        <a id="x" /> `x`
      </td>

      <td>
        \| [`MeasureInterface`](../../../types/distance.md#measureinterface)
        \| `undefined`
      </td>

      <td>
        features/celestial-bodies/utils/get-body-position.ts:8
      </td>
    </tr>

    <tr>
      <td>
        <a id="y" /> `y`
      </td>

      <td>
        \| [`MeasureInterface`](../../../types/distance.md#measureinterface)
        \| `undefined`
      </td>

      <td>
        features/celestial-bodies/utils/get-body-position.ts:9
      </td>
    </tr>

  </tbody>
</table>

## Functions

### getBodyPosition()

```ts
function getBodyPosition(body): GetBodyPositionReturnType;
```

Defined in: features/celestial-bodies/utils/get-body-position.ts:50

Computes the **current position** of a celestial body in real-world units.

The position is determined using the body's **semi-major axis** ($a$),
**semi-minor axis** ($b$), **orbital angle** ($\theta$), and **focus shift**
($f$). The coordinates $(x, y)$ are calculated using the parametric equations:

$$
x = a \cos\theta - f
$$

$$
y = b \sin\theta
$$

where:

- $a$ is the **semi-major axis** converted to AU.
- $b$ (or `miA`) is the **semi-minor axis**.
- $\theta$ is the **current angle** of the celestial body in its orbit.
- $f$ is the **focus shift** ($e \cdot a$) caused by orbital eccentricity.

#### Parameters

| Parameter | Type                                                                        | Description                                            |
| --------- | --------------------------------------------------------------------------- | ------------------------------------------------------ |
| `body`    | [`CelestialBodyType`](../../../types/celestial-bodies.md#celestialbodytype) | The celestial body whose position is being calculated. |

#### Returns

[`GetBodyPositionReturnType`](get-body-position.md#getbodypositionreturntype)

The calculated position in **astronomical units (AU)**.

#### Example

```ts
const body: CelestialBodyType = {
  a: { value: 5, unit: 'AU' },
  e: 0.2,
  angle: Math.PI / 4,
  focus_x: 1,
  miA: 4.8
};

const position = getBodyPosition(body);
console.log(position); // { x: { value: ..., unit: 'AU' }, y: { value: ..., unit: 'AU' } }
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
