<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / utils/offset/normalize-parent-offset

# utils/offset/normalize-parent-offset

> Last updated 2025-03-20T15:06:52.011Z

## Table of Contents

- [Functions](#functions)
  - [normalizeParentOffset()](#normalizeparentoffset)

## Functions

### normalizeParentOffset()

```ts
function normalizeParentOffset(px, parentOffset, modifier?): number;
```

Defined in:
[utils/offset/normalize-parent-offset.ts:24](https://github.com/phun-ky/interstellar/blob/main/src/utils/offset/normalize-parent-offset.ts#L24)

Normalizes the **parent body's offset** to ensure consistent positional
adjustments.

**Calculation Logic:**

- If the **parent offset is `0`**, the function simply **multiplies `px` by
  `modifier`**.
- Otherwise, it **adds the parent offset to `px`** before applying the
  **modifier**:
  $\text{normalized} = \text{modifier} \times (\text{parentOffset} + \text{px} \mid\mid \text{px})$

**Usage in Orbit Calculations:**

- Ensures **correct relative positioning** of moons, planets, and other
  celestial bodies.
- Helps maintain **smooth transitions** in simulations with nested orbits.

#### Parameters

| Parameter      | Type     | Default value | Description                                         |
| -------------- | -------- | ------------- | --------------------------------------------------- |
| `px`           | `number` | `undefined`   | The pixel-based offset to normalize.                |
| `parentOffset` | `number` | `undefined`   | The offset of the parent body.                      |
| `modifier`?    | `number` | `-1`          | A multiplier to adjust the direction of the offset. |

#### Returns

`number`

The normalized offset value.

#### Example

```ts
const adjustedOffset = normalizeParentOffset(100, 50);
console.log(adjustedOffset); // Output: -150
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
