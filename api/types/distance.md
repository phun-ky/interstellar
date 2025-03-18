<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / types/distance

# types/distance

> Last updated 2025-03-18T13:17:24.402Z

## Table of Contents

- [Interfaces](#interfaces)
  - [DistanceInterface](#distanceinterface)
  - [MeasureInterface](#measureinterface)
  - [ValueInterface](#valueinterface)
- [Type Aliases](#type-aliases)
  - [DistanceUnitType](#distanceunittype)
  - [UnitType](#unittype)

## Interfaces

### DistanceInterface

Defined in:
[types/distance.ts:72](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L72)

Represents a distance measurement with an associated unit.

DistanceInterface

#### Example

```ts
const distanceToAlphaCentauri: DistanceInterface = {
  value: 4.367,
  unit: 'lightyears'
};
```

#### Extends

- [`ValueInterface`](distance.md#valueinterface)

#### Properties

| Property                 | Type                               | Description                           | Inherited from                                                                | Defined in                                                                                          |
| ------------------------ | ---------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <a id="unit" /> `unit`   | [`UnitType`](distance.md#unittype) | The unit of distance measurement.     | -                                                                             | [types/distance.ts:73](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L73) |
| <a id="value" /> `value` | `number`                           | The numeric value of the measurement. | [`ValueInterface`](distance.md#valueinterface).[`value`](distance.md#value-2) | [types/distance.ts:41](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L41) |

---

### MeasureInterface

Defined in:
[types/distance.ts:56](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L56)

Represents a measurement with an associated unit.

MeasureInterface

#### Example

```ts
const planetRadius: MeasureInterface = { value: 6371, unit: 'km' };
```

#### Extends

- [`ValueInterface`](distance.md#valueinterface)

#### Properties

| Property                   | Type                               | Description                           | Inherited from                                                                | Defined in                                                                                          |
| -------------------------- | ---------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <a id="unit-1" /> `unit`   | [`UnitType`](distance.md#unittype) | The unit of measurement.              | -                                                                             | [types/distance.ts:57](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L57) |
| <a id="value-1" /> `value` | `number`                           | The numeric value of the measurement. | [`ValueInterface`](distance.md#valueinterface).[`value`](distance.md#value-2) | [types/distance.ts:41](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L41) |

---

### ValueInterface

Defined in:
[types/distance.ts:40](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L40)

Represents a numerical value.

ValueInterface

#### Example

```ts
const distance: ValueInterface = { value: 100 };
```

#### Extended by

- [`MeasureInterface`](distance.md#measureinterface)
- [`DistanceInterface`](distance.md#distanceinterface)
- [`TemporalInterface`](temporal.md#temporalinterface)
- [`TimeStepInterface`](temporal.md#timestepinterface)

#### Properties

| Property                   | Type     | Description                           | Defined in                                                                                          |
| -------------------------- | -------- | ------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <a id="value-2" /> `value` | `number` | The numeric value of the measurement. | [types/distance.ts:41](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L41) |

## Type Aliases

### DistanceUnitType

```ts
type DistanceUnitType = UnitType;
```

Defined in:
[types/distance.ts:27](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L27)

Alias for distance-specific unit types.

---

### UnitType

```ts
type UnitType =
  | 'AU'
  | 'km'
  | 'kly'
  | 'kilolightyears'
  | 'lightyears'
  | 'ly'
  | 'm';
```

Defined in:
[types/distance.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/types/distance.ts#L13)

Defines possible units of measurement for distance.

Supported units:

- **AU**: Astronomical Unit
- **km**: Kilometers
- **kly** / **kilolightyears**: Thousand light-years
- **ly** / **lightyears**: Light-years
- **m**: Meters

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
is licensed under a [GPL-3.0
License](https://choosealicense.com/licenses/gpl-3.0/).
