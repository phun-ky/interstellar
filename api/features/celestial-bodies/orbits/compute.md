<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../../README.md) / features/celestial-bodies/orbits/compute

# features/celestial-bodies/orbits/compute

> Last updated 2025-03-19T08:29:08.333Z

## Table of Contents

- [Functions](#functions)
  - [computeOrbits()](#computeorbits)

## Functions

### computeOrbits()

```ts
function computeOrbits(celestialBodies): void;
```

Defined in:
[features/celestial-bodies/orbits/compute.ts:78](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/orbits/compute.ts#L78)

Computes the **orbital paths** for celestial bodies orbiting around a central
mass (e.g., a black hole).

**Mathematical Explanation:**

In an elliptical orbit, the **semi-major axis** ($a$) and **eccentricity** ($e$)
define the shape of the orbit. The **semi-minor axis** ($b$) is calculated as:

$$
b = a \sqrt{1 - e^2}
$$

where:

- $a$ is the **semi-major axis** in real-world units (e.g., AU or light-years).
- $b$ is the **semi-minor axis** in real-world units.
- $e$ is the **orbital eccentricity** ($0 \leq e < 1$).

The **focus shift** ($f$) is given by:

$$
f = e \cdot a
$$

The orbital path is generated using parametric equations:

$$
x(\theta) = a \cos\theta - f
$$

$$
y(\theta) = b \sin\theta
$$

where $\theta$ is the angle parameter ranging from $0$ to $2\pi$.

To ensure smooth rendering, the step size is dynamically adjusted:

$$
\Delta \theta = \frac{0.02}{1 + e}
$$

which reduces step size for **highly eccentric** orbits, ensuring better
accuracy.

#### Parameters

| Parameter         | Type                                                                            | Description                                           |
| ----------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `celestialBodies` | [`CelestialBodiesType`](../../../types/celestial-bodies.md#celestialbodiestype) | An array of celestial bodies with orbital parameters. |

#### Returns

`void`

This function does not return a value.

#### Example

```ts
const celestialBodies: CelestialBodiesType = [
  {
    name: 'Star A',
    a: { value: 5000, unit: 'AU' },
    e: 0.1,
    radius: { value: 696340, unit: 'km' },
    color: 'white',
    x: { value: 0, unit: 'AU' },
    y: { value: 0, unit: 'AU' },
    z: { value: 0, unit: 'AU' },
    angle: 0,
    period: { value: 365, unit: 'days' }
  },
  {
    name: 'Star B',
    a: { value: 10000, unit: 'AU' },
    e: 0.3,
    radius: { value: 696340, unit: 'km' },
    color: 'white',
    x: { value: 0, unit: 'AU' },
    y: { value: 0, unit: 'AU' },
    z: { value: 0, unit: 'AU' },
    angle: 0,
    period: { value: 365, unit: 'days' }
  }
];
computeOrbits(celestialBodies);
console.log(celestialBodies[0].orbitPath); // Output: Array of { x, y } points in real-world units
```

#### See

[Kepler's Laws](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion)

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
