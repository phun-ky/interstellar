<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / lib/math/solve-kepler

# lib/math/solve-kepler

> Last updated 2025-03-19T08:29:08.340Z

## Table of Contents

- [Functions](#functions)
  - [solveKepler()](#solvekepler)

## Functions

### solveKepler()

```ts
function solveKepler(M, e, maxIter?, tolerance?): number;
```

Defined in:
[lib/math/solve-kepler.ts:59](https://github.com/phun-ky/interstellar/blob/main/src/lib/math/solve-kepler.ts#L59)

Solves **Kepler's Equation** for the **Eccentric Anomaly** ($E$) using the
**Newton-Raphson method**.

**Mathematical Explanation:**

Kepler's equation relates the **mean anomaly** ($M$), the **eccentric anomaly**
($E$), and the **orbital eccentricity** ($e$) as:

$$
M = E - e \sin(E)
$$

Since this equation **cannot be solved algebraically**, we use **iterative
numerical methods** to approximate $E$.

**Step 1: Handle Special Cases**

- If the orbit is **circular** ($e = 0$), then $E = M$ directly.
- If the orbit is **parabolic** ($e = 1$), Kepler's equation is **not valid**.

**Step 2: Initial Approximation** A **first-order approximation** provides a
good starting point for iteration:

$$
E_0 \approx M + e \sin(M)
$$

**Step 3: Newton-Raphson Iteration** The Newton-Raphson method refines $E$
iteratively using:

$$
E_{n+1} = E_n - \frac{f(E_n)}{f'(E_n)}
$$

where:

- $f(E) = E - e \sin(E) - M$ is Kepler’s equation residual.
- $f'(E) = 1 - e \cos(E)$ is its derivative.

The iteration continues until:

$$
|E_{n+1} - E_n| < \text{tolerance}
$$

#### Parameters

| Parameter    | Type     | Default value | Description                                       |
| ------------ | -------- | ------------- | ------------------------------------------------- |
| `M`          | `number` | `undefined`   | Mean anomaly ($M$) in radians.                    |
| `e`          | `number` | `undefined`   | Orbital eccentricity ($0 \leq e < 1$).            |
| `maxIter`?   | `number` | `50`          | Maximum number of Newton-Raphson iterations.      |
| `tolerance`? | `number` | `1e-9`        | Convergence criterion for stopping the iteration. |

#### Returns

`number`

Eccentric anomaly ($E$) in radians.

#### Throws

Error If the orbit is **parabolic** ($e = 1$) or Newton-Raphson fails due to a
near-zero derivative.

#### Throws

RangeError If the eccentricity is out of range. Must be between \[0,1].

#### Example

```ts
const M = Math.PI / 4; // 45 degrees in radians
const e = 0.1; // Orbital eccentricity
console.log(solveKepler(M, e)); // Output: Eccentric anomaly in radians
```

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
