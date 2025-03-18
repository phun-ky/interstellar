<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / datasets/systems

# datasets/systems

> Last updated 2025-03-18T13:17:24.392Z

## Table of Contents

- [Interfaces](#interfaces)
  - [SystemInterface](#systeminterface)
- [Type Aliases](#type-aliases)
  - [SystemsType](#systemstype)
- [Variables](#variables)
  - [SYSTEMS](#systems)

## Interfaces

### SystemInterface

Defined in:
[datasets/systems.ts:5](https://github.com/phun-ky/interstellar/blob/main/src/datasets/systems.ts#L5)

Represents a star system within the space visualization.

#### Properties

| Property                       | Type        | Description                           | Defined in                                                                                              |
| ------------------------------ | ----------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <a id="distance" /> `distance` | `number`    | Distance from the Sun in light-years. | [datasets/systems.ts:11](https://github.com/phun-ky/interstellar/blob/main/src/datasets/systems.ts#L11) |
| <a id="name" /> `name`         | `string`    | Name of the star system.              | [datasets/systems.ts:7](https://github.com/phun-ky/interstellar/blob/main/src/datasets/systems.ts#L7)   |
| <a id="stars" /> `stars`       | `string`\[] | List of star names in the system.     | [datasets/systems.ts:9](https://github.com/phun-ky/interstellar/blob/main/src/datasets/systems.ts#L9)   |

## Type Aliases

### SystemsType

```ts
type SystemsType = SystemInterface[];
```

Defined in:
[datasets/systems.ts:17](https://github.com/phun-ky/interstellar/blob/main/src/datasets/systems.ts#L17)

Type alias for a collection of star systems.

## Variables

### SYSTEMS

```ts
const SYSTEMS: SystemsType;
```

Defined in:
[datasets/systems.ts:29](https://github.com/phun-ky/interstellar/blob/main/src/datasets/systems.ts#L29)

Predefined star systems in the galaxy.

#### Example

```ts
console.log(SYSTEMS[0].name); // "Solar System"
```

#### See

[https://en.wikipedia.org/wiki/Alpha_Centauri](https://en.wikipedia.org/wiki/Alpha_Centauri)

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
