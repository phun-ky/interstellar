<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / utils/offset/normalize-parent-offset-prev

# utils/offset/normalize-parent-offset-prev

> Last updated 2025-03-20T15:06:52.011Z

## Table of Contents

- [Functions](#functions)
  - [normalizeParentOffsetPrev()](#normalizeparentoffsetprev)

## Functions

### normalizeParentOffsetPrev()

```ts
function normalizeParentOffsetPrev(parentOffset, prev, next): number;
```

Defined in:
[utils/offset/normalize-parent-offset-prev.ts:24](https://github.com/phun-ky/interstellar/blob/main/src/utils/offset/normalize-parent-offset-prev.ts#L24)

Normalizes the **parent body's previous offset** for smooth positional
transitions.

**Calculation Logic:**

- If the **parent offset is `0`**, the function **returns `prev - next`**
  directly.
- Otherwise, it **adjusts the offset** by computing:
  $\text{normalized} = (\text{parentOffset} + \text{prev} \mid\mid \text{prev}) - (\text{parentOffset} + \text{prev} \mid\mid \text{next})$

**Usage in Orbit Calculations:**

- Ensures **smooth position tracking** for moons, planets, or other celestial
  bodies.
- Avoids abrupt jumps in **parent-relative motion**.

#### Parameters

| Parameter      | Type     | Description                     |
| -------------- | -------- | ------------------------------- |
| `parentOffset` | `number` | The parent body's offset value. |
| `prev`         | `number` | The previous position value.    |
| `next`         | `number` | The next position value.        |

#### Returns

`number`

The adjusted previous offset.

#### Example

```ts
const adjustedOffset = normalizeParentOffsetPrev(50, 100, 120);
console.log(adjustedOffset); // Output: -20
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
