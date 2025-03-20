<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / lib/math/eccentric-to-true-anomaly

# lib/math/eccentric-to-true-anomaly

> Last updated 2025-03-20T15:09:40.721Z

## Table of Contents

- [Functions](#functions)
  - [eccentricToTrueAnomaly()](#eccentrictotrueanomaly)

## Functions

### eccentricToTrueAnomaly()

```ts
function eccentricToTrueAnomaly(E, e): number;
```

Defined in:
[lib/math/eccentric-to-true-anomaly.ts:42](https://github.com/phun-ky/interstellar/blob/main/src/lib/math/eccentric-to-true-anomaly.ts#L42)

Converts **Eccentric Anomaly** ($E$) to **True Anomaly** ($V$) for an orbit.

**Mathematical Explanation:**

The **eccentric anomaly** ($E$) and the **true anomaly** ($V$) are related
through:

$$
\tan \frac{V}{2} = \sqrt{\frac{1+e}{1-e}} \tan \frac{E}{2}
$$

where:

- $E$ is the **eccentric anomaly** (in radians).
- $V$ is the **true anomaly** (in radians).
- $e$ is the **orbital eccentricity** ($0 \leq e < 1$ for elliptical orbits).

This function handles:

- **Circular orbits** ($e = 0$): True anomaly is equal to eccentric anomaly.
- **Parabolic orbits** ($e = 1$): Uses the special case:
  $$
  V = 2 \tan^{-1} \left(\frac{E}{2}\right)
  $$
- **Elliptical orbits** ($0 < e < 1$): Uses the standard conversion equation.

Additionally, numerical stability is ensured when $E \approx \pi$.

#### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `E`       | `number` | Eccentric anomaly ($E$) in radians.    |
| `e`       | `number` | Orbital eccentricity ($0 \leq e < 1$). |

#### Returns

`number`

True anomaly ($V$) in radians.

#### Throws

If **eccentricity** is out of the range $0 \leq e \leq 1$.

#### Example

```ts
console.log(eccentricToTrueAnomaly(1.0, 0.5)); // Output: True anomaly in radians
console.log(eccentricToTrueAnomaly(Math.PI, 0)); // Output: Math.PI (circular orbit)
console.log(eccentricToTrueAnomaly(0, 1)); // Output: 0 (parabolic orbit)
```

#### See

[True Anomaly (Wikipedia)](https://en.wikipedia.org/wiki/True_anomaly)

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
