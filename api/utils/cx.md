<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / utils/cx

# utils/cx

> Last updated 2025-03-20T15:06:52.008Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [CXFirstArgType](#cxfirstargtype)
  - [CXSecondArgType](#cxsecondargtype)
- [Functions](#functions)
  - [cx()](#cx)

## Type Aliases

### CXFirstArgType

```ts
type CXFirstArgType = string | CXSecondArgType;
```

Defined in:
[utils/cx.ts:15](https://github.com/phun-ky/interstellar/blob/main/src/utils/cx.ts#L15)

Type for the first argument of the cx function, which can be either a string or
an object.

---

### CXSecondArgType

```ts
type CXSecondArgType = undefined | Record<string, boolean>;
```

Defined in:
[utils/cx.ts:8](https://github.com/phun-ky/interstellar/blob/main/src/utils/cx.ts#L8)

Type for the optional properties object with boolean values.

## Functions

### cx()

```ts
function cx(cls, cls_obj?): string;
```

Defined in:
[utils/cx.ts:47](https://github.com/phun-ky/interstellar/blob/main/src/utils/cx.ts#L47)

Combines class names and an optional object of conditional class names into a
single class string.

**Usage & Functionality:**

- **First Argument (`cls`)**:

  - Can be a **string** containing predefined class names.
  - Can be an **object** where keys represent class names and values
    (`true | false`) determine inclusion.

- **Second Argument (`cls_obj`, optional)**:
  - An object with class names as keys and boolean values indicating conditional
    inclusion.
  - Allows adding additional class names dynamically.

**Examples:**

#### Parameters

| Parameter  | Type                                       | Description                                                                            |
| ---------- | ------------------------------------------ | -------------------------------------------------------------------------------------- |
| `cls`      | [`CXFirstArgType`](cx.md#cxfirstargtype)   | The base class name(s) as a string or an object mapping class names to boolean values. |
| `cls_obj`? | [`CXSecondArgType`](cx.md#cxsecondargtype) | Optional object containing additional conditional class names.                         |

#### Returns

`string`

- Returns a string containing the combined class names.

#### Examples

```ts
console.log(cx('base-class', { active: true, disabled: false }));
// Output: 'base-class active'
```

```ts
console.log(cx({ primary: true, hidden: false }));
// Output: 'primary'
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
