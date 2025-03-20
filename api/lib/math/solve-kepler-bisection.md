<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / lib/math/solve-kepler-bisection

# lib/math/solve-kepler-bisection

> Last updated 2025-03-20T15:01:41.152Z

## Table of Contents

- [Functions](#functions)
  - [solveKeplerBisection()](#solvekeplerbisection)

## Functions

### solveKeplerBisection()

```ts
function solveKeplerBisection(M, e, maxIter, tolerance): number;
```

Defined in: lib/math/solve-kepler-bisection.ts:74

Solves **Kepler's Equation** for the **Eccentric Anomaly** ($E$) using the
**bisection method** when Newton-Raphson or other iterative solvers fail to
converge.

---

**Mathematical Explanation:**

Kepler's equation for eccentric anomaly ($E$) is:

$$
M = E - e \sin(E)
$$

This equation cannot be solved analytically, and numerical methods must be used.
When standard iterative solvers like **Newton-Raphson** fail due to poor
convergence, the **bisection method** provides a robust alternative by
performing a bracketed search.

---

**Solving Strategy:**

1. **Initialize Bounds:**

   - The valid range for $E$ is **$[0, \pi]$** (as $E$ is symmetric around 0).
   - The midpoint $E_0$ is chosen as:
     $$
     E = \frac{E_{low} + E_{high}}{2}
     $$

2. **Bisection Iteration:**

   - Compute the function residual:
     $$
     F(E) = E - e \sin(E) - M
     $$
   - If $F(E)$ is sufficiently small (within tolerance), $E$ is returned as the
     solution.
   - Otherwise, the interval is **halved** by updating either:
     - The lower bound ($E_{low}$) if $F(E) < 0$
     - The upper bound ($E_{high}$) if $F(E) > 0$

3. **Convergence Check:**
   - The iteration stops when:
     $$
     |E_{n+1} - E_n| < \text{tolerance}
     $$
     (default tolerance is **1e-9**).

---

**Performance Considerations:**

- **Always converges**, unlike Newton-Raphson, which can fail for some initial
  guesses.
- **Time complexity:** $O(\log N)$ due to the **logarithmic convergence** of
  bisection.

---

#### Parameters

| Parameter   | Type     | Description                                       |
| ----------- | -------- | ------------------------------------------------- |
| `M`         | `number` | Mean anomaly ($M$) in **radians**.                |
| `e`         | `number` | Orbital eccentricity ($0 \leq e < 1$).            |
| `maxIter`   | `number` | Maximum number of **iterations** before failure.  |
| `tolerance` | `number` | Convergence criterion for stopping the iteration. |

#### Returns

`number`

The **eccentric anomaly** ($E$) in **radians** (best approximation).

---

#### Example

```ts
const M = Math.PI / 3; // 60 degrees in radians
const e = 0.5; // Orbital eccentricity
console.log(solveKeplerBisection(M, e, 50, 1e-9)); // Output: Eccentric anomaly in radians
```

---

#### See

- [Kepler's Equation (Wikipedia)](https://en.wikipedia.org/wiki/Kepler%27s_equation)
- [Bisection Method (Wikipedia)](https://en.wikipedia.org/wiki/Bisection_method)

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
