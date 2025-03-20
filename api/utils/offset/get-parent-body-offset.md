<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / utils/offset/get-parent-body-offset

# utils/offset/get-parent-body-offset

> Last updated 2025-03-20T15:06:52.010Z

## Table of Contents

- [Functions](#functions)
  - [getParentBodyOffset()](#getparentbodyoffset)

## Functions

### getParentBodyOffset()

```ts
function getParentBodyOffset(
  system,
  category,
  bodies,
  scale
): {
  parentOffsetX: number;
  parentOffsetY: number;
};
```

Defined in:
[utils/offset/get-parent-body-offset.ts:32](https://github.com/phun-ky/interstellar/blob/main/src/utils/offset/get-parent-body-offset.ts#L32)

Computes the **parent body's offset** in pixels for celestial objects.

**Offset Calculation Logic:**

- **Stars**: Use the **galactic center** as their reference, so their offset is
  `(0,0)`.
- **Planets, Moons, and Comets**:
  1. Finds the **parent body** (e.g., planet for a moon, star for a planet).
  2. Retrieves the **parent body's position**.
  3. Converts the **position into pixels** using `distanceToPixels`.

**Usage in Visualization:**

- Ensures **moons orbit their planets** correctly by applying the parent's
  offset.
- Allows **nested orbital structures** (e.g., exomoons orbiting exoplanets).

#### Parameters

| Parameter  | Type                                                                         | Description                                                         |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `system`   | `string`                                                                     | The name of the **parent system** (e.g., "Jupiter" for its moons).  |
| `category` | `string`                                                                     | The category of the celestial body (**star, planet, moon, comet**). |
| `bodies`   | [`CelestialBodiesType`](../../types/celestial-bodies.md#celestialbodiestype) | The collection of celestial bodies.                                 |
| `scale`    | [`ValueInterface`](../../types/distance.md#valueinterface)                   | The scaling factor for rendering.                                   |

#### Returns

```ts
{
  parentOffsetX: number;
  parentOffsetY: number;
}
```

The computed **x** and **y** offsets for the parent body in pixels.

| Name            | Type     | Defined in                                                                                                                                    |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `parentOffsetX` | `number` | [utils/offset/get-parent-body-offset.ts:38](https://github.com/phun-ky/interstellar/blob/main/src/utils/offset/get-parent-body-offset.ts#L38) |
| `parentOffsetY` | `number` | [utils/offset/get-parent-body-offset.ts:39](https://github.com/phun-ky/interstellar/blob/main/src/utils/offset/get-parent-body-offset.ts#L39) |

#### Example

```ts
const offset = getParentBodyOffset('Jupiter', 'moon', celestialBodies, {
  value: 50
});
console.log(offset); // Output: { parentOffsetX: 320, parentOffsetY: 150 }
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
