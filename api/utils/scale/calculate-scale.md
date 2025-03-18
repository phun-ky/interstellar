[interstellar](../../README.md) / utils/scale/calculate-scale

# utils/scale/calculate-scale

> Last updated 2025-03-18T11:22:37.516Z

## Table of Contents

- [Functions](#functions)
  - [calculateScale()](#calculatescale)
- [**Zoom Logic:**](#zoom-logic)
- [**Usage in Visualization:**](#usage-in-visualization)

## Functions

### calculateScale()

```ts
function calculateScale(event, scale): number;
```

Defined in: utils/scale/calculate-scale.ts:25

Calculates the **new scale factor** based on a zoom event.

## **Zoom Logic:**

- **Scroll Up (`deltaY < 0`)** → Zoom **in** by multiplying by `ZOOM_FACTOR`.
- **Scroll Down (`deltaY > 0`)** → Zoom **out** by dividing by `ZOOM_FACTOR`.

## **Usage in Visualization:**

- Adjusts the **scale of celestial objects and distances** dynamically.
- Ensures smooth **zooming interactions** in canvas-based simulations.

#### Parameters

| Parameter | Type                                                                  | Description                                |
| --------- | --------------------------------------------------------------------- | ------------------------------------------ |
| `event`   | [`WheelEvent`](https://developer.mozilla.org/docs/Web/API/WheelEvent) | The mouse wheel event triggering the zoom. |
| `scale`   | [`ValueInterface`](../../types/distance.md#valueinterface)            | The current scale factor.                  |

#### Returns

`number`

The updated scale factor after zooming.

#### Example

```ts
const newScale = calculateScale(wheelEvent, { value: 1 });
console.log(newScale); // Output: Adjusted scale factor based on scroll direction
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
