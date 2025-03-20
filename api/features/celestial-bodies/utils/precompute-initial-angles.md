<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../../README.md) /
features/celestial-bodies/utils/precompute-initial-angles

# features/celestial-bodies/utils/precompute-initial-angles

> Last updated 2025-03-20T15:01:41.149Z

## Table of Contents

- [Functions](#functions)
  - [precomputeInitialAngles()](#precomputeinitialangles)

## Functions

### precomputeInitialAngles()

```ts
function precomputeInitialAngles(bodies, date): void;
```

Defined in:
[features/celestial-bodies/utils/precompute-initial-angles.ts:40](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/utils/precompute-initial-angles.ts#L40)

Precomputes the initial **orbital angles** for celestial bodies relative to the
J2000 epoch.

The function determines the number of days elapsed since **J2000 (January 1,
2000, 12:00 TT)** and uses this to compute the **initial orbital angles**
($\theta_0$) of celestial bodies.

**Mathematical Explanation:**

The elapsed time $\Delta T$ is calculated as:

$$
\Delta T = \frac{t - t_{J2000}}{1\text{ day}}
$$

where:

- $t$ is the provided date in milliseconds.
- $t_{J2000}$ is the timestamp for J2000.
- $1$ day is the number of milliseconds in a day ($86,400,000$ ms).

The initial orbital angle is then computed using Keplerian motion equations via
`computeAngle`.

#### Parameters

| Parameter | Type                                                                                      | Description                                                     |
| --------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `bodies`  | [`CelestialBodiesType`](../../../types/celestial-bodies.md#celestialbodiestype)           | The array of celestial bodies whose angles need to be computed. |
| `date`    | [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | The date from which to compute the initial angles.              |

#### Returns

`void`

This function does not return a value; it updates the `angle` property of each
body.

#### Example

```ts
const currentDate = new Date();
precomputeInitialAngles(celestialBodies, currentDate);
console.log(celestialBodies[0].angle); // Output: Computed initial angle in radians
```

#### See

[J2000 Epoch](<https://en.wikipedia.org/wiki/Epoch_(astronomy)#Julian_years_and_J2000>)

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
