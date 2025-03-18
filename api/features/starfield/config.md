<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../../README.md) / features/starfield/config

# features/starfield/config

> Last updated 2025-03-18T13:17:24.398Z

## Table of Contents

- [Variables](#variables)
  - [starfield](#starfield)
- [**Starfield Data Structure:**](#starfield-data-structure)

## Variables

### starfield

```ts
const starfield: {
  value: StarfieldStarInterface[];
};
```

Defined in:
[features/starfield/config/index.ts:19](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/config/index.ts#L19)

Represents a global store for dynamically generated stars in the starfield.

## **Starfield Data Structure:**

- `value` contains an array of `StarfieldStarInterface` objects.
- The array holds dynamically generated stars for rendering.
- The object is **mutable**, allowing updates to the starfield in real-time.

#### Type declaration

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Defined in</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <a id="value" /> `value`
      </td>

      <td>
        [`StarfieldStarInterface`](generate-star-field.md#starfieldstarinterface)\[]
      </td>

      <td>
        [features/starfield/config/index.ts:19](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/config/index.ts#L19)
      </td>
    </tr>

  </tbody>
</table>

#### Example

```ts
import { starfield } from './starfield';

starfield.value.push({ x: 100, y: 200, brightness: 0.8 });
console.log(starfield.value.length); // Outputs the number of stars
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
