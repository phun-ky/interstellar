<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / lib/math/wrap-angle

# lib/math/wrap-angle

> Last updated 2025-03-19T08:29:08.340Z

## Table of Contents

- [Functions](#functions)
  - [wrapAngle()](#wrapangle)

## Functions

### wrapAngle()

```ts
function wrapAngle(x): number;
```

Defined in:
[lib/math/wrap-angle.ts:26](https://github.com/phun-ky/interstellar/blob/main/src/lib/math/wrap-angle.ts#L26)

Wraps an angle to the range $[0, 2\pi)$.

**Mathematical Explanation:**

This function ensures that an angle $x$ is always in the standard range:

$$
0 \leq x < 2\pi
$$

using the modulo operation:

$$
x_{wrapped} = (x \mod 2\pi + 2\pi) \mod 2\pi
$$

This is useful in orbital mechanics and trigonometry, where angles should remain
within one full revolution.

#### Parameters

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| `x`       | `number` | The input angle in radians. |

#### Returns

`number`

The angle wrapped into the range $[0, 2\pi]$.

#### Example

```ts
console.log(wrapAngle(-3)); // Output: Value wrapped in [0, 2π]
console.log(wrapAngle(7 * Math.PI)); // Output: Wrapped angle within [0, 2π]
```

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
