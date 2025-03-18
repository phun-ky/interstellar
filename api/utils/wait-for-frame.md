<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / utils/wait-for-frame

# utils/wait-for-frame

> Last updated 2025-03-18T13:45:43.072Z

## Table of Contents

- [Functions](#functions)
  - [waitForFrame()](#waitforframe)
- [**Functionality:**](#functionality)
- [**Usage in Animations & Rendering:**](#usage-in-animations--rendering)

## Functions

### waitForFrame()

```ts
function waitForFrame(): Promise<number>;
```

Defined in:
[utils/wait-for-frame.ts:26](https://github.com/phun-ky/interstellar/blob/main/src/utils/wait-for-frame.ts#L26)

Waits for the next animation frame using `requestAnimationFrame`.

## **Functionality:**

- Returns a **Promise** that resolves with the **timestamp** of the next
  animation frame.
- Allows synchronization of animations and UI updates with the browser's
  **rendering cycle**.

## **Usage in Animations & Rendering:**

- Ensures DOM updates occur before measuring elements (`getBoundingClientRect`).
- Helps synchronize animations with smooth transitions.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`number`>

- A Promise that resolves with the timestamp of the next animation frame.

#### Example

```ts
// Wait for the next animation frame before measuring an element
await waitForFrame();
const rect = el.getBoundingClientRect();

// Get the timestamp of the next frame
const timestamp = await waitForFrame();
console.log(timestamp);
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
