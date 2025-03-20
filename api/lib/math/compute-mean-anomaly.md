<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / lib/math/compute-mean-anomaly

# lib/math/compute-mean-anomaly

> Last updated 2025-03-20T15:01:41.152Z

## Table of Contents

- [Functions](#functions)
  - [computeMeanAnomaly()](#computemeananomaly)

## Functions

### computeMeanAnomaly()

```ts
function computeMeanAnomaly(body, timeStep): number;
```

Defined in:
[lib/math/compute-mean-anomaly.ts:65](https://github.com/phun-ky/interstellar/blob/main/src/lib/math/compute-mean-anomaly.ts#L65)

Computes the **mean anomaly** ($M$) of a celestial body for a given time step.

**Mathematical Explanation:**

The **mean anomaly** is a measure of the position of an orbiting body as if it
moved with uniform angular motion along a circular orbit with the same period as
the actual elliptical orbit. It is computed as:

$M = M_0 + n \cdot \Delta T$

where:

- $M_0$ is the **initial mean anomaly** (converted from true anomaly if
  necessary).
- $n$ is the **mean motion**, given by: $n = \frac{2\pi}{P}$ where $P$ is the
  orbital period in days.
- $\Delta T$ is the time step.

#### Parameters

| Parameter  | Type                                                                     | Description                                               |
| ---------- | ------------------------------------------------------------------------ | --------------------------------------------------------- |
| `body`     | [`CelestialBodyType`](../../types/celestial-bodies.md#celestialbodytype) | The celestial body for which to compute the mean anomaly. |
| `timeStep` | [`TemporalInterface`](../../types/temporal.md#temporalinterface)         | The time step over which to compute the change.           |

#### Returns

`number`

The computed mean anomaly in radians.

#### Throws

If the body's eccentricity is outside the range $0 \leq e < 1$.

#### Example

```ts
import { computeMeanAnomaly } from './compute-mean-anomaly';

const mars: CelestialBodyType = {
  name: 'Mars',
  e: 0.0934, // Eccentricity of Mars' orbit
  angle: 1.047, // Initial true anomaly (in radians)
  period: { value: 687, unit: 'day' } // Orbital period in days
};

const timeStep: TemporalInterface = { value: 1, unit: 'day' }; // 1-day step
const meanAnomaly = computeMeanAnomaly(mars, timeStep);
console.log(meanAnomaly); // Output: Computed mean anomaly in radians
```

#### See

- [Mean Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/Mean_anomaly)
- [Orbital Mechanics (NASA)](https://solarsystem.nasa.gov/basics/chapter2-2/)

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
