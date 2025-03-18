<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../../../README.md) /
features/celestial-bodies/utils/update-positions

# features/celestial-bodies/utils/update-positions

> Last updated 2025-03-18T13:45:43.060Z

## Table of Contents

- [Functions](#functions)
  - [updatePositions()](#updatepositions)
- [**Mathematical Explanation:**](#mathematical-explanation)

## Functions

### updatePositions()

```ts
function updatePositions(celestialBodies, timeStep): void;
```

Defined in:
[features/celestial-bodies/utils/update-positions.ts:38](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/utils/update-positions.ts#L38)

Updates the **orbital positions** of all celestial bodies based on the given
time step.

## **Mathematical Explanation:**

Each celestial body follows an **elliptical orbit** with its position evolving
over time according to:

$$
V(t) = V_0 + \Delta V
$$

where:

- $V_0$ is the **current true anomaly**.
- $\Delta V$ is the **change in anomaly** over the time step ($\Delta t$).

The **updatePosition** function ensures periodicity by wrapping the **true
anomaly** within $[0, 2\pi]$.

#### Parameters

| Parameter         | Type                                                                            | Description                                                     |
| ----------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `celestialBodies` | [`CelestialBodiesType`](../../../types/celestial-bodies.md#celestialbodiestype) | An array of celestial bodies whose positions will be updated.   |
| `timeStep`        | [`TimeStepInterface`](../../../types/temporal.md#timestepinterface)             | The time step ($\Delta t$) used to compute orbital progression. |

#### Returns

`void`

This function does not return a value; it updates each body's angle in place.

#### Example

```ts
const celestialBodies: CelestialBodiesType = [
  { name: 'Earth', angle: 1.5, ...otherProps },
  { name: 'Mars', angle: 2.1, ...otherProps }
];

const timeStep = { value: 1, unit: 'day' };
updatePositions(celestialBodies, timeStep);
console.log(celestialBodies[0].angle); // Updated angle in radians, wrapped within [0, 2π]
```

#### See

[Kepler's Laws](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion)

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
