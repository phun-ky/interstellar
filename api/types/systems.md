<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / types/systems

# types/systems

> Last updated 2025-03-19T08:29:08.345Z

## Table of Contents

- [Interfaces](#interfaces)
  - [SystemInterface](#systeminterface)
- [Type Aliases](#type-aliases)
  - [SystemsType](#systemstype)

## Interfaces

### SystemInterface

Defined in: types/systems.ts:5

Represents a star system within the space visualization.

#### Properties

| Property                         | Type        | Description                           | Defined in          |
| -------------------------------- | ----------- | ------------------------------------- | ------------------- |
| <a id="distance"></a> `distance` | `number`    | Distance from the Sun in light-years. | types/systems.ts:11 |
| <a id="name"></a> `name`         | `string`    | Name of the star system.              | types/systems.ts:7  |
| <a id="stars"></a> `stars`       | `string`\[] | List of star names in the system.     | types/systems.ts:9  |

## Type Aliases

### SystemsType

```ts
type SystemsType = SystemInterface[];
```

Defined in: types/systems.ts:17

Type alias for a collection of star systems.

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
