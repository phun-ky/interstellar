<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / lib/math/true-anomaly-to-mean-anomaly

# lib/math/true-anomaly-to-mean-anomaly

> Last updated 2025-03-20T15:01:41.153Z

## Table of Contents

- [Functions](#functions)
  - [trueAnomalyToMeanAnomaly()](#trueanomalytomeananomaly)

## Functions

### trueAnomalyToMeanAnomaly()

```ts
function trueAnomalyToMeanAnomaly(V, e): number;
```

Defined in:
[lib/math/true-anomaly-to-mean-anomaly.ts:74](https://github.com/phun-ky/interstellar/blob/main/src/lib/math/true-anomaly-to-mean-anomaly.ts#L74)

Converts **true anomaly** ($\nu$) to **mean anomaly** ($M$) using Kepler's
equation.

---

**Mathematical Explanation:**

In orbital mechanics, the **true anomaly** ($\nu$), the **eccentric anomaly**
($E$), and the **mean anomaly** ($M$) are related through Kepler's equation.

**Step 1: Convert True Anomaly ($\nu$) to Eccentric Anomaly ($E$)**

$$
E = 2 \tan^{-1} \left( \sqrt{\frac{1 - e}{1 + e}} \tan\left(\frac{\nu}{2}\right) \right)
$$

This transformation ensures that $E$ is computed correctly **across all
quadrants**, using `atan2(y, x)` instead of `atan(x)` to avoid ambiguity in
angle computation.

**Step 2: Convert Eccentric Anomaly ($E$) to Mean Anomaly ($M$)**

Kepler’s equation states:

$$
M = E - e \sin(E)
$$

Since anomalies are periodic over **one full orbit** ($0 \leq M < 2\pi$), we
apply `wrapAngle(M)` to ensure that the computed **mean anomaly remains within
this range**.

---

**Why Use `wrapAngle`?**

- Ensures that the mean anomaly **is always wrapped within** $[0, 2\pi]$.
- Corrects floating-point precision issues that may cause values slightly
  greater than $2\pi$.
- Prevents negative anomalies by shifting them into the valid range.

---

#### Parameters

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| `V`       | `number` | **True anomaly** ($\nu$) in radians.            |
| `e`       | `number` | **Eccentricity** of the orbit ($0 \leq e < 1$). |

#### Returns

`number`

The **mean anomaly** ($M$) in radians, wrapped to the range $[0, 2\pi]$.

#### Throws

If the **eccentricity** ($e$) is outside the valid range $0 \leq e < 1$.

---

#### Examples

```ts
import { trueAnomalyToMeanAnomaly } from './true-anomaly-to-mean-anomaly';

// Example 1: Standard elliptical orbit
const V = Math.PI / 3; // 60 degrees in radians
const e = 0.1; // Eccentricity
console.log(trueAnomalyToMeanAnomaly(V, e)); // Output: Mean anomaly in radians
```

```ts
// Example 2: Retrograde motion handling
const V_retrograde = -Math.PI / 2; // -90 degrees
const e_retrograde = 0.2;
console.log(trueAnomalyToMeanAnomaly(V_retrograde, e_retrograde));
```

---

#### See

- [Kepler's Equation (Wikipedia)](https://en.wikipedia.org/wiki/Kepler%27s_equation)
- [True Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/True_anomaly)
- [Mean Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/Mean_anomaly)
- [Orbital Eccentricity (Wikipedia)](https://en.wikipedia.org/wiki/Orbital_eccentricity)

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
