<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../../README.md) /
features/celestial-bodies/utils/update-position

# features/celestial-bodies/utils/update-position

> Last updated 2025-03-20T15:09:40.717Z

## Table of Contents

- [Functions](#functions)
  - [updatePosition()](#updateposition)

## Functions

### updatePosition()

```ts
function updatePosition(timeStep): (body) => void;
```

Defined in:
[features/celestial-bodies/utils/update-position.ts:37](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/utils/update-position.ts#L37)

Updates the **orbital position** (angle) of a celestial body based on the given
time step.

**Mathematical Explanation:**

The **true anomaly** ($V$), which determines a celestial body's position in its
orbit, changes over time according to **Kepler’s Laws**. The new angle is
computed as:

$$
V(t) = V_0 + \Delta V
$$

where:

- $V_0$ is the **current true anomaly**.
- $\Delta V$ is the **change in anomaly** over the given time step.

The updated **true anomaly** is then **wrapped within** the range $[0, 2\pi]$ to
ensure periodicity.

#### Parameters

| Parameter  | Type                                                                | Description                                                                   |
| ---------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `timeStep` | [`TimeStepInterface`](../../../types/temporal.md#timestepinterface) | The time step ($\Delta t$) that determines the amount of orbital progression. |

#### Returns

`Function`

A function that updates a celestial body's angle.

##### Parameters

| Parameter | Type                                                                        |
| --------- | --------------------------------------------------------------------------- |
| `body`    | [`CelestialBodyType`](../../../types/celestial-bodies.md#celestialbodytype) |

##### Returns

`void`

#### Example

```ts
const timeStep = { value: 1, unit: 'day' };
const update = updatePosition(timeStep);

const planet = { name: 'Earth', angle: 1.5, ...otherProps };
update(planet);
console.log(planet.angle); // Updated angle in radians, wrapped within [0, 2π]
```

#### See

[True Anomaly & Orbital Mechanics](https://en.wikipedia.org/wiki/True_anomaly)

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
