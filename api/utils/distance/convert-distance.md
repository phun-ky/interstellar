<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../../README.md) / utils/distance/convert-distance

# utils/distance/convert-distance

> Last updated 2025-03-18T13:45:43.069Z

## Table of Contents

- [Functions](#functions)
  - [convertDistance()](#convertdistance)
- [**Conversion Logic:**](#conversion-logic)
- [**Supported Conversions:**](#supported-conversions)

## Functions

### convertDistance()

```ts
function convertDistance(distance, targetUnit): DistanceInterface;
```

Defined in:
[utils/distance/convert-distance.ts:28](https://github.com/phun-ky/interstellar/blob/main/src/utils/distance/convert-distance.ts#L28)

Converts a distance measurement between **Astronomical Units (AU), kilometres
(km), meters (m),** and **light-years (ly)**.

## **Conversion Logic:**

1. Converts the input distance to **Astronomical Units (AU)** as an intermediate
   step.
2. Converts the AU value to the **target unit**.

## **Supported Conversions:**

- **AU ↔ km ↔ m**
- **AU ↔ light-years (ly)**

#### Parameters

| Parameter    | Type                                                             | Description                            |
| ------------ | ---------------------------------------------------------------- | -------------------------------------- |
| `distance`   | [`DistanceInterface`](../../types/distance.md#distanceinterface) | The input distance value and its unit. |
| `targetUnit` | [`UnitType`](../../types/distance.md#unittype)                   | The desired output unit.               |

#### Returns

[`DistanceInterface`](../../types/distance.md#distanceinterface)

The converted distance value and unit.

#### Throws

If the input or target unit is not supported.

#### Example

```ts
const distanceInKM = convertDistance({ value: 1, unit: 'AU' }, 'km');
console.log(distanceInKM); // Output: { value: 149597870.7, unit: 'km' }
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
