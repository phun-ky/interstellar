<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../../README.md) / lib/math/compute-mean-anomaly

# lib/math/compute-mean-anomaly

> Last updated 2025-03-18T13:17:24.400Z

## Table of Contents

- [Functions](#functions)
  - [computeMeanAnomaly()](#computemeananomaly)
- [**Mathematical Explanation:**](#mathematical-explanation)
  - [**Handling Extreme Time Steps**](#handling-extreme-time-steps)

## Functions

### computeMeanAnomaly()

```ts
function computeMeanAnomaly(body, timeStep): number;
```

Defined in:
[lib/math/compute-mean-anomaly.ts:47](https://github.com/phun-ky/interstellar/blob/main/src/lib/math/compute-mean-anomaly.ts#L47)

Computes the **Mean Anomaly** ($M$) for a celestial body after a given time
interval $\Delta t$.

## **Mathematical Explanation:**

The **mean anomaly** ($M$) is related to the **true anomaly** ($V$) and
**eccentric anomaly** ($E$). The mean anomaly progresses uniformly over time,
defined as:

$$
M = M_0 + n \cdot \Delta t
$$

where:

- $M_0$ is the **initial mean anomaly** at $t=0$.
- $n$ is the **mean motion**, given by:
  $$
  n = \frac{2\pi}{T}
  $$
  where $T$ is the **orbital period**.
- $\Delta t$ is the **time elapsed** (in days).

Since anomalies are periodic ($0 \leq M < 2\pi$), a **custom modulo function**
is used to wrap values within this range.

### **Handling Extreme Time Steps**

- The function **caps the time step** to **10 full orbits** to prevent excessive
  jumps.
- This ensures numerical stability and prevents unrealistic position updates.

#### Parameters

| Parameter  | Type                                                                     | Description                                               |
| ---------- | ------------------------------------------------------------------------ | --------------------------------------------------------- |
| `body`     | [`CelestialBodyType`](../../types/celestial-bodies.md#celestialbodytype) | The celestial body with its orbital parameters.           |
| `timeStep` | [`TemporalInterface`](../../types/temporal.md#temporalinterface)         | The time step over which to compute the new mean anomaly. |

#### Returns

`number`

The **mean anomaly** ($M$) in radians within the range $[0, 2\pi)$.

#### Throws

If the **eccentricity** ($e$) is out of the valid range $0 \leq e < 1$.

#### Example

```ts
const planet: CelestialBodyType = {
  e: 0.2,
  angle: 1.0,
  period: { value: 365, unit: 'day' }
};
const timeStep: TemporalInterface = { value: 100, unit: 'days' };
console.log(computeMeanAnomaly(planet, timeStep)); // Output: Mean anomaly in radians
```

#### See

[Kepler's Equation (Wikipedia)](https://en.wikipedia.org/wiki/Kepler%27s_equation)

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
