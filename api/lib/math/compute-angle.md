<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../../README.md) / lib/math/compute-angle

# lib/math/compute-angle

> Last updated 2025-03-18T13:45:43.063Z

## Table of Contents

- [Functions](#functions)
  - [computeAngle()](#computeangle)
- [**Mathematical Explanation:**](#mathematical-explanation)
  - [**Step 1: Compute Time Elapsed Since J2000**](#step-1-compute-time-elapsed-since-j2000)
  - [**Step 2: Compute the Mean Anomaly ($M$)**](#step-2-compute-the-mean-anomaly-m)
  - [**Step 3: Solve Kepler’s Equation for Eccentric Anomaly ($E$)**](#step-3-solve-keplers-equation-for-eccentric-anomaly-e)
  - [**Step 4: Convert Eccentric Anomaly ($E$) to True Anomaly ($ν$)**](#step-4-convert-eccentric-anomaly-e-to-true-anomaly-ν)
  - [**Step 5: Adjust the True Anomaly for Certain Bodies**](#step-5-adjust-the-true-anomaly-for-certain-bodies)

## Functions

### computeAngle()

```ts
function computeAngle(body, timeStep): number;
```

Defined in:
[lib/math/compute-angle.ts:62](https://github.com/phun-ky/interstellar/blob/main/src/lib/math/compute-angle.ts#L62)

Computes the orbital angle (true anomaly, $ν$) of a celestial body for a given
date and time step.

## **Mathematical Explanation:**

This function determines the **true anomaly** ($ν$) based on the time elapsed
since the **J2000 epoch** (January 1, 2000) and the provided time step. The
calculation follows these steps:

### **Step 1: Compute Time Elapsed Since J2000**

The number of days since **J2000** is computed as:
$\Delta T = \frac{t - t_{J2000}}{\text{MS\\_1\\_DAY}}$ where:

- $t$ is the current date in milliseconds.
- $t_{J2000}$ is **J2000** (2000-01-01T00:00:00Z).
- **MS_1_DAY** is the number of milliseconds in one day.

### **Step 2: Compute the Mean Anomaly ($M$)**

The **mean anomaly** is calculated as:
$M = M_0 + n \cdot (\Delta T + \text{timeStep})$ where:

- $M_0$ is the initial mean anomaly at **J2000**.
- $n$ is the mean motion (orbital angular velocity).
- $\text{timeStep}$ is the time step in days.

### **Step 3: Solve Kepler’s Equation for Eccentric Anomaly ($E$)**

Kepler’s equation: $M = E - e \sin(E)$ is solved numerically to obtain the
**eccentric anomaly** ($E$).

### **Step 4: Convert Eccentric Anomaly ($E$) to True Anomaly ($ν$)**

Using the relation:
$ν = 2 \tan^{-1} \left( \sqrt{\frac{1+e}{1-e}} \tan\left(\frac{E}{2}\right) \right)$

### **Step 5: Adjust the True Anomaly for Certain Bodies**

- For **comets**, the final **true anomaly** is adjusted by subtracting the
  **eccentricity** ($e$).
- For **stars and other celestial objects**, the computed **true anomaly** is
  used directly.

#### Parameters

| Parameter  | Type                                                                     | Description                                               |
| ---------- | ------------------------------------------------------------------------ | --------------------------------------------------------- |
| `body`     | [`CelestialBodyType`](../../types/celestial-bodies.md#celestialbodytype) | The celestial body for which to compute the true anomaly. |
| `timeStep` | [`TimeStepInterface`](../../types/temporal.md#timestepinterface)         | The time step in days since the last frame.               |

#### Returns

`number`

The computed angle for the celestial body

#### Example

```ts
const date = new Date('2025-06-15T12:00:00Z');
const earth = { name: 'Earth', e: 0.0167, angle: 0 };
const timeStep = 1; // 1 day
const angle = computeAngle(earth, date, timeStep);
console.log(earth, angle); // Output: Computed true anomaly in radians
```

#### See

- [Kepler's Equation (Wikipedia)](https://en.wikipedia.org/wiki/Kepler%27s_equation)
- [True Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/True_anomaly)
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
