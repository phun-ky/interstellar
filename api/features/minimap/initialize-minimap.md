[interstellar](../../README.md) / features/minimap/initialize-minimap

# features/minimap/initialize-minimap

> Last updated 2025-03-18T11:22:37.507Z

## Table of Contents

- [Functions](#functions)
  - [initializeMinimap()](#initializeminimap)
- [**Minimap Properties:**](#minimap-properties)

## Functions

### initializeMinimap()

```ts
function initializeMinimap(): void;
```

Defined in: features/minimap/initialize-minimap.ts:18

Initializes a circular minimap element on the webpage if it does not already
exist.

## **Minimap Properties:**

- Positioned at the **bottom-right** corner of the viewport.
- **Circular shape** achieved using `borderRadius: 50%`.
- **Fixed size** of `200px x 200px`.
- Styled with a **dark background** (`#050807`) and a **teal border**
  (`#47B8BE`).
- **Non-interactable** (`pointerEvents: none`).

#### Returns

`void`

This function does not return a value; it ensures a minimap element is present
on the page.

#### Example

```ts
initializeMinimap();
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
