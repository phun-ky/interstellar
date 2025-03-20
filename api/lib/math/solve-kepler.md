<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / lib/math/solve-kepler

# lib/math/solve-kepler

> Last updated 2025-03-20T15:06:52.004Z

## Table of Contents

- [Functions](#functions)
  - [solveKepler()](#solvekepler)

## Functions

### solveKepler()

```ts
function solveKepler(M, e, maxIter?, tolerance?): number;
```

Defined in:
[lib/math/solve-kepler.ts:85](https://github.com/phun-ky/interstellar/blob/main/src/lib/math/solve-kepler.ts#L85)

Solves **Kepler's Equation** for the **Eccentric Anomaly** ($E$) using an
adaptive approach:

- **Newton-Raphson method** for fast convergence.
- **Bisection fallback** if Newton’s method fails.
- **High-eccentricity solver** for extreme orbits ($e > 0.9$).

---

**Mathematical Explanation:**

Kepler's equation relates the **mean anomaly** ($M$), the **eccentric anomaly**
($E$), and the **orbital eccentricity** ($e$) as:

$$
M = E - e \sin(E)
$$

Since this equation **cannot be solved algebraically**, numerical methods are
required.

---

**Solving Strategy:**

1. **Handle Special Cases:**

   - If the orbit is **circular** ($e = 0$), then $E = M$ directly.
   - If the orbit is **parabolic** ($e = 1$), an exception is thrown.
   - If **eccentricity is out of range** ($e < 0$ or $e \geq 1$), a `RangeError`
     is thrown.

2. **Select the Best Solver:**

   - **For high eccentricities ($e > 0.9$)** → Uses
     `solveKeplerHighEccentricity()`.
   - **For moderate eccentricities ($e \leq 0.9$)** → Uses
     `solveKeplerNewtonRaphson()`.
   - **If Newton-Raphson fails**, falls back to `solveKeplerBisection()`.

3. **Final Wrapping:**
   - Ensures the solution is correctly wrapped using `wrapAngle()`.

---

**Performance Considerations:**

- **Newton-Raphson typically converges in 4-5 iterations.**
- **Bisection fallback ensures robustness for extreme cases.**
- **High-eccentricity solver prevents instability for $e \approx 1$.**

---

#### Parameters

| Parameter    | Type     | Default value | Description                                       |
| ------------ | -------- | ------------- | ------------------------------------------------- |
| `M`          | `number` | `undefined`   | Mean anomaly ($M$) in **radians**.                |
| `e`          | `number` | `undefined`   | Orbital eccentricity ($0 \leq e < 1$).            |
| `maxIter`?   | `number` | `50`          | Maximum number of **iterations** before fallback. |
| `tolerance`? | `number` | `1e-9`        | Convergence criterion for stopping the iteration. |

#### Returns

`number`

The **eccentric anomaly** ($E$) in **radians** (wrapped to $[0, 2\pi]$).

#### Throws

RangeError If the **eccentricity ($e$) is invalid** ($e < 0$ or $e \geq 1$).

---

#### Examples

```ts
import { solveKepler } from './solve-kepler';

// Example 1: Moderate eccentricity
const M = Math.PI / 4; // 45 degrees in radians
const e = 0.1; // Orbital eccentricity
const result = solveKepler(M, e);
console.log(result); // Output: Eccentric anomaly in radians
```

```ts
// Example 2: High-eccentricity orbit (e > 0.9)
const M_high = 1.5; // Mean anomaly in radians
const e_high = 0.95; // High eccentricity
console.log(solveKepler(M_high, e_high)); // Uses high-eccentricity solver
```

---

#### See

- [Kepler's Equation (Wikipedia)](https://en.wikipedia.org/wiki/Kepler%27s_equation)
- [Newton-Raphson Method (Wikipedia)](https://en.wikipedia.org/wiki/Newton%27s_method)
- [Eccentric Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/Mean_anomaly#Eccentric_anomaly)

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
