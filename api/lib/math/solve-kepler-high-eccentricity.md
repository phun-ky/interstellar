<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / lib/math/solve-kepler-high-eccentricity

# lib/math/solve-kepler-high-eccentricity

> Last updated 2025-03-20T15:09:40.722Z

## Table of Contents

- [Functions](#functions)
  - [solveKeplerHighEccentricity()](#solvekeplerhigheccentricity)

## Functions

### solveKeplerHighEccentricity()

```ts
function solveKeplerHighEccentricity(M, e, maxIter?, tolerance?): number;
```

Defined in:
[lib/math/solve-kepler-high-eccentricity.ts:100](https://github.com/phun-ky/interstellar/blob/main/src/lib/math/solve-kepler-high-eccentricity.ts#L100)

Solves **Kepler's Equation** for the **Eccentric Anomaly** ($E$) in highly
eccentric orbits ($e > 0.9$) using an iterative numerical approach.

---

**Mathematical Explanation:**

Kepler's equation for eccentric anomaly ($E$) is:

![solve-kelper-high-eccentricity-elliptical-orbit](https://raw.githubusercontent.com/phun-ky/interstellar/b607daf8e014128a6dceb3cf8d522676f06bc233/public/solve-kelper-high-eccentricity-elliptical-orbit.svg)

$$
M = E - e \sin(E) \quad \text{(for elliptical orbits, } 0 < e < 1\text{)}
$$

![solve-kepler-high-eccentricity-hyperbolic-orbit](https://raw.githubusercontent.com/phun-ky/interstellar/b607daf8e014128a6dceb3cf8d522676f06bc233/public/solve-kepler-high-eccentricity-hyperbolic-orbit.svg)

$$
M = e \sinh(E) - E \quad \text{(for hyperbolic orbits, } e > 1\text{)}
$$

For orbits with **high eccentricity** ($e \approx 1$), standard Newton-Raphson
solvers struggle due to extreme changes in orbital velocity near perihelion.
Instead, we apply a **fixed-point iteration** method that is more stable for
these cases.

---

**Solving Strategy:**

1. **Initial Guess:**
   - The solver starts with $E_0 = M$ and refines using:

$$
E_0 = M \pm \frac{e \sin(M)}{1 - e \cos(M)}
$$

2. **Iterative Refinement:**
   - The method updates $E$ using:

$$
\Delta E = \frac{E - e \sin(E) - M}{1 - e \cos(E)}
$$

for elliptical orbits.

$$
\Delta E = \frac{e \sinh(E) - E - M}{e \cosh(E) - 1}
$$

for hyperbolic orbits.

- Iteration stops when:

$$
|E_{n+1} - E_n| < \text{tolerance}
$$

(default tolerance is **1e-9**).

3. **Angle Wrapping (Elliptical Only):**
   - The result is wrapped using `wrapAngle()` for consistency.

---

**Performance Considerations:**

- **Typically converges in fewer than 10 iterations for $e > 0.9$.**
- **Time complexity:** $O(1)$ for standard convergence.

---

#### Parameters

| Parameter    | Type     | Default value | Description                                                    |
| ------------ | -------- | ------------- | -------------------------------------------------------------- |
| `M`          | `number` | `undefined`   | Mean anomaly ($M$) in **radians**.                             |
| `e`          | `number` | `undefined`   | Orbital eccentricity ($e > 0.9$ for high-eccentricity orbits). |
| `maxIter`?   | `number` | `...`         | Maximum number of **iterations** before failure.               |
| `tolerance`? | `number` | `1e-9`        | Convergence criterion for stopping the iteration.              |

#### Returns

`number`

The **eccentric anomaly** ($E$) in **radians** (wrapped to $[-\pi, \pi]$ for
elliptical orbits).

---

#### Examples

```ts
import { solveKeplerHighEccentricity } from './solve-kepler';

const M = Math.PI / 4; // 45 degrees in radians
const e = 0.95; // High orbital eccentricity
const result = solveKeplerHighEccentricity(M, e);
console.log(result); // Output: Eccentric anomaly in radians
```

```ts
// Hyperbolic orbit example (e > 1)
const M_hyperbolic = 2.0; // Mean anomaly for hyperbolic orbit
const e_hyperbolic = 1.2; // Hyperbolic eccentricity
console.log(solveKeplerHighEccentricity(M_hyperbolic, e_hyperbolic));
```

---

#### See

- [Kepler's Equation (Wikipedia)](https://en.wikipedia.org/wiki/Kepler%27s_equation)
- [Hyperbolic Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/Hyperbolic_trajectory#Hyperbolic_anomaly)

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
