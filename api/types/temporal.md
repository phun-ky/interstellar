<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / types/temporal

# types/temporal

> Last updated 2025-03-19T08:29:08.346Z

## Table of Contents

- [Interfaces](#interfaces)
  - [TemporalInterface](#temporalinterface)
  - [TimeStepInterface](#timestepinterface)
- [Type Aliases](#type-aliases)
  - [TemporalUnitType](#temporalunittype)

## Interfaces

### TemporalInterface

Defined in:
[types/temporal.ts:39](https://github.com/phun-ky/interstellar/blob/main/src/types/temporal.ts#L39)

Represents a **temporal measurement** with a numeric value and unit.

TemporalInterface

#### Example

```ts
const orbitPeriod: TemporalInterface = { value: 365.25, unit: 'days' };
```

#### Extends

- [`ValueInterface`](distance.md#valueinterface)

#### Properties

| Property                   | Type                                               | Description                           | Inherited from                                                                | Defined in                                                                                          |
| -------------------------- | -------------------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <a id="unit"></a> `unit`   | [`TemporalUnitType`](temporal.md#temporalunittype) | The unit of temporal measurement.     | -                                                                             | [types/temporal.ts:40](https://github.com/phun-ky/interstellar/blob/main/src/types/temporal.ts#L40) |
| <a id="value"></a> `value` | `number`                                           | The numeric value of the measurement. | [`ValueInterface`](distance.md#valueinterface).[`value`](distance.md#value-2) | [types/distance.ts:41](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L41) |

---

### TimeStepInterface

Defined in:
[types/temporal.ts:55](https://github.com/phun-ky/interstellar/blob/main/src/types/temporal.ts#L55)

Represents a **time step measurement** in simulation, restricted to days.

TimeStepInterface

#### Example

```ts
const timeStep: TimeStepInterface = { value: 1, unit: 'day' };
```

#### Extends

- [`ValueInterface`](distance.md#valueinterface)

#### Properties

| Property                     | Type     | Description                           | Inherited from                                                                | Defined in                                                                                          |
| ---------------------------- | -------- | ------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <a id="unit-1"></a> `unit`   | `"day"`  | The unit is always **days**.          | -                                                                             | [types/temporal.ts:56](https://github.com/phun-ky/interstellar/blob/main/src/types/temporal.ts#L56) |
| <a id="value-1"></a> `value` | `number` | The numeric value of the measurement. | [`ValueInterface`](distance.md#valueinterface).[`value`](distance.md#value-2) | [types/distance.ts:41](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L41) |

## Type Aliases

### TemporalUnitType

```ts
type TemporalUnitType =
  | 'seconds'
  | 's'
  | 'milliseconds'
  | 'ms'
  | 'day'
  | 'days'
  | 'year'
  | 'years'
  | 'Myr'
  | 'Myrs';
```

Defined in:
[types/temporal.ts:15](https://github.com/phun-ky/interstellar/blob/main/src/types/temporal.ts#L15)

Defines possible **temporal units** used for measuring time.

Supported units:

- **Seconds (`s`, `seconds`)**
- **Milliseconds (`ms`, `milliseconds`)**
- **Days (`day`, `days`)**
- **Years (`year`, `years`)**
- **Million years (`Myr`, `Myrs`)**

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
