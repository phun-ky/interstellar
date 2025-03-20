<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / utils/temporal/convert-temporal-unit

# utils/temporal/convert-temporal-unit

> Last updated 2025-03-20T15:01:41.160Z

## Table of Contents

- [Functions](#functions)
  - [convertTemporalUnit()](#converttemporalunit)

## Functions

### convertTemporalUnit()

```ts
function convertTemporalUnit(time, targetUnit): TemporalInterface;
```

Defined in:
[utils/temporal/convert-temporal-unit.ts:27](https://github.com/phun-ky/interstellar/blob/main/src/utils/temporal/convert-temporal-unit.ts#L27)

Converts a **temporal measurement** between **days, years, and million years
(Myr)**.

**Conversion Logic:**

1. Converts the input time to **years** as an intermediate step.
2. Converts the **years value** into the **target unit**.

**Supported Conversions:**

- **Days ↔ Years** (Uses Earth's orbital period `EARTH_PERIOD`).
- **Years ↔ Million Years (Myr)**.

#### Parameters

| Parameter    | Type                                                             | Description                        |
| ------------ | ---------------------------------------------------------------- | ---------------------------------- |
| `time`       | [`TemporalInterface`](../../types/temporal.md#temporalinterface) | The input time value and its unit. |
| `targetUnit` | [`TemporalUnitType`](../../types/temporal.md#temporalunittype)   | The desired output unit.           |

#### Returns

[`TemporalInterface`](../../types/temporal.md#temporalinterface)

The converted time value and unit.

#### Throws

If the input or target unit is not supported.

#### Example

```ts
const timeInYears = convertTemporalUnit({ value: 365, unit: 'days' }, 'year');
console.log(timeInYears); // Output: { value: 1, unit: 'year' }
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
