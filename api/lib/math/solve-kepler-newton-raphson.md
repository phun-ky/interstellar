<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / lib/math/solve-kepler-newton-raphson

# lib/math/solve-kepler-newton-raphson

> Last updated 2025-03-20T15:09:40.722Z

## Table of Contents

- [Functions](#functions)
  - [solveKeplerNewtonRaphson()](#solvekeplernewtonraphson)

## Functions

### solveKeplerNewtonRaphson()

```ts
function solveKeplerNewtonRaphson(M, e, maxIter, tolerance): number;
```

Defined in:
[lib/math/solve-kepler-newton-raphson.ts:86](https://github.com/phun-ky/interstellar/blob/main/src/lib/math/solve-kepler-newton-raphson.ts#L86)

Solves **Kepler's Equation** for the **Eccentric Anomaly** ($E$) using the
**Newton-Raphson method** with Householder acceleration for fast convergence.

---

**Mathematical Explanation:**

Kepler's equation relates the **mean anomaly** ($M$), the **eccentric anomaly**
($E$), and the **orbital eccentricity** ($e$) as:

$$
M = E - e \sin(E)
$$

Since this equation **cannot be solved algebraically**, iterative numerical
methods are required.

---

**Solving Strategy:**

1. **Handle Special Cases:**

   - If the orbit is **circular** ($e = 0$), then $E = M$ directly.
   - If the orbit is **nearly parabolic** ($e \geq 0.97$), a special
     approximation is used.
   - If **eccentricity is out of range** ($e < 0$ or $e \geq 1$), a `RangeError`
     is thrown.

2. **Initial Approximation:**

   - **For small eccentricities ($e < 0.8$):** $E_0 = M$.
   - **For moderate eccentricities ($0.8 \leq e < 0.97$):**
     $E_0 = M + e \sin(M) (1 + e \cos(M))$.
   - **For nearly parabolic orbits ($e \geq 0.97$):** $E_0 = \frac{6M}{e}$.

3. **Newton-Raphson Iteration with Householder Acceleration:**

   - The **Newton-Raphson method** iterates using:

     $$
     E_{n+1} = E_n - \frac{f(E_n)}{f'(E_n)}
     $$

     where:

     - $f(E) = E - e \sin(E) - M$
     - $f'(E) = 1 - e \cos(E)$

   - **Householder acceleration** refines the correction:
     $$
     \Delta E = \frac{f(E)}{f'(E)} \left( 1 - \frac{1}{2} \frac{f''(E)}{f'(E)} \Delta E \right)^{-1}
     $$

4. **Convergence Check:**

   - The iteration stops when:
     $$
     |E_{n+1} - E_n| < \text{tolerance}
     $$
     (default tolerance is **1e-9**).

5. **Failure Handling:**
   - If the method **does not converge**, `NaN` is returned, signaling that a
     fallback method should be used.

---

**Performance Considerations:**

- **Typically converges in 4-5 iterations for most eccentricities.**
- **Time complexity:** $O(1)$ for Newton-Raphson.

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

The **eccentric anomaly** ($E$) in **radians** (or `NaN` if the method fails).

#### Throws

RangeError If the **eccentricity ($e$) is invalid** ($e < 0$ or $e \geq 1$).

---

#### Example

```ts
const M = Math.PI / 4; // 45 degrees in radians
const e = 0.1; // Orbital eccentricity
console.log(solveKeplerNewtonRaphson(M, e, 50, 1e-9)); // Output: Eccentric anomaly in radians
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
