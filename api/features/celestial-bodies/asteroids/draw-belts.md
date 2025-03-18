[interstellar](../../../README.md) /
features/celestial-bodies/asteroids/draw-belts

# features/celestial-bodies/asteroids/draw-belts

> Last updated 2025-03-18T11:22:37.503Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [DrawBeltsPropsType](#drawbeltspropstype)
- [Functions](#functions)
  - [drawBelts()](#drawbelts)

## Type Aliases

### DrawBeltsPropsType

```ts
type DrawBeltsPropsType = {
  asteroidBelts: AsteroidBeltsType;
  centerX: number;
  centerY: number;
  scale: {
    value: number;
  };
  space: CanvasRenderingContext2D;
};
```

Defined in: features/celestial-bodies/asteroids/draw-belts.ts:7

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
        <a id="asteroidbelts" /> `asteroidBelts`
      </td>

      <td>
        [`AsteroidBeltsType`](../../../types/asteroid-belts.md#asteroidbeltstype)
      </td>

      <td>
        features/celestial-bodies/asteroids/draw-belts.ts:12
      </td>
    </tr>

    <tr>
      <td>
        <a id="centerx" /> `centerX`
      </td>

      <td>
        `number`
      </td>

      <td>
        features/celestial-bodies/asteroids/draw-belts.ts:9
      </td>
    </tr>

    <tr>
      <td>
        <a id="centery" /> `centerY`
      </td>

      <td>
        `number`
      </td>

      <td>
        features/celestial-bodies/asteroids/draw-belts.ts:10
      </td>
    </tr>

    <tr>
      <td>
        <a id="scale" /> `scale`
      </td>

      <td>
        \{
        `value`: `number`;
        }
      </td>

      <td>
        features/celestial-bodies/asteroids/draw-belts.ts:11
      </td>
    </tr>

    <tr>
      <td>
        `scale.value`
      </td>

      <td>
        `number`
      </td>

      <td>
        features/celestial-bodies/asteroids/draw-belts.ts:11
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
        features/celestial-bodies/asteroids/draw-belts.ts:8
      </td>
    </tr>

  </tbody>
</table>

## Functions

### drawBelts()

```ts
function drawBelts(props): void;
```

Defined in: features/celestial-bodies/asteroids/draw-belts.ts:44

Draws asteroid belts on the canvas, including an optional label.

This function iterates through the provided asteroid belts and renders each as a
filled circular ring, with an inner and outer radius representing the belt
region. If the `OPTIONS_UI.labels` flag is enabled, it also displays a label for
each belt.

The belt is rendered using two concentric arcs:

- The outer arc defines the full extent of the belt.
- The inner arc is drawn in reverse to create a cutout effect.

#### Parameters

| Parameter | Type                                                     | Description                                               |
| --------- | -------------------------------------------------------- | --------------------------------------------------------- |
| `props`   | [`DrawBeltsPropsType`](draw-belts.md#drawbeltspropstype) | The properties required for rendering the asteroid belts. |

#### Returns

`void`

#### Example

```ts
drawBelts({
  space: ctx,
  centerX: canvas.width / 2,
  centerY: canvas.height / 2,
  scale: { value: 1 },
  asteroidBelts: [
    {
      name: 'Main Belt',
      innerRadius: 2.2,
      outerRadius: 3.2,
      opacity: 0.5,
      color: '#AAAAAA'
    }
  ]
});
```

#### See

[https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

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
