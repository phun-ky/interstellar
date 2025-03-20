<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / utils/distance/normalize-distance

# utils/distance/normalize-distance

> Last updated 2025-03-20T15:09:40.727Z

## Table of Contents

- [Functions](#functions)
  - [normalizeDistance()](#normalizedistance)

## Functions

### normalizeDistance()

```ts
function normalizeDistance(distance): DistanceInterface;
```

Defined in:
[utils/distance/normalize-distance.ts:30](https://github.com/phun-ky/interstellar/blob/main/src/utils/distance/normalize-distance.ts#L30)

Normalizes a distance measurement to the most **readable unit**.

**Conversion Logic:**

1. Converts the input distance to **Astronomical Units (AU)** as an intermediate
   step.
2. Selects the **most appropriate unit** based on magnitude:
   - **km** for values < 1 AU
   - **AU** for values within 1 AU to 1 light-year
   - **ly** for values within 1 to 1000 light-years
   - **kly** for values above 1000 light-years
3. Preserves the **original sign** of the input value.

**Supported Units:**

- **AU ↔ km ↔ ly ↔ kly** (Kilolight-years)

#### Parameters

| Parameter  | Type                                                             | Description                            |
| ---------- | ---------------------------------------------------------------- | -------------------------------------- |
| `distance` | [`DistanceInterface`](../../types/distance.md#distanceinterface) | The input distance value and its unit. |

#### Returns

[`DistanceInterface`](../../types/distance.md#distanceinterface)

The normalized distance with a more readable unit.

#### Throws

If the unit is not supported.

#### Example

```ts
const normalized = normalizeDistance({ value: 0.002, unit: 'AU' });
console.log(normalized); // Output: { value: 299597.87, unit: 'km' }
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
