<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / utils/throttle

# utils/throttle

> Last updated 2025-03-20T15:06:52.011Z

## Table of Contents

- [Functions](#functions)
  - [throttle()](#throttle)
  - [throttleAsync()](#throttleasync)

## Functions

### throttle()

```ts
function throttle(callback): () => void;
```

Defined in:
[utils/throttle.ts:17](https://github.com/phun-ky/interstellar/blob/main/src/utils/throttle.ts#L17)

Creates a **throttled function** that ensures the callback executes **at most
once per animation frame**.

**Functionality:**

- Prevents excessive function calls by ensuring execution **only once per
  frame**.
- Uses `requestAnimationFrame` to sync execution with **browser rendering
  cycles**.

#### Parameters

| Parameter  | Type         | Description               |
| ---------- | ------------ | ------------------------- |
| `callback` | () => `void` | The function to throttle. |

#### Returns

`Function`

- The throttled function.

##### Returns

`void`

#### Example

```ts
const throttledFn = throttle(() => console.log('Throttled execution'));
window.addEventListener('scroll', throttledFn);
```

---

### throttleAsync()

```ts
function throttleAsync<T>(callback): (...args) => Promise<void>;
```

Defined in:
[utils/throttle.ts:54](https://github.com/phun-ky/interstellar/blob/main/src/utils/throttle.ts#L54)

Creates a **throttled asynchronous function** that ensures the callback executes
**at most once per animation frame**.

**Functionality:**

- Similar to `throttle`, but supports **async functions**.
- Ensures that only **one async operation runs per frame**, preventing race
  conditions.

#### Type Parameters

| Type Parameter                                                                                                                          | Description                       |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `T` _extends_ (...`args`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`unknown`> | A function returning a `Promise`. |

#### Parameters

| Parameter  | Type | Description                     |
| ---------- | ---- | ------------------------------- |
| `callback` | `T`  | The async function to throttle. |

#### Returns

`Function`

- The throttled async function.

##### Parameters

| Parameter | Type                                                                                                |
| --------- | --------------------------------------------------------------------------------------------------- |
| ...`args` | [`Parameters`](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)<`T`> |

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

#### Example

```ts
const throttledFetch = throttleAsync(async () => {
  const data = await fetch('/api/data').then((res) => res.json());
  console.log(data);
});

window.addEventListener('scroll', throttledFetch);
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
