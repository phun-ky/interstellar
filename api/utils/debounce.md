<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / utils/debounce

# utils/debounce

> Last updated 2025-03-20T15:06:52.009Z

## Table of Contents

- [Functions](#functions)
  - [debounce()](#debounce)
  - [debounceAsync()](#debounceasync)

## Functions

### debounce()

```ts
function debounce(func, wait, immediate?): DebounceAnyFunctionType;
```

Defined in:
[utils/debounce.ts:28](https://github.com/phun-ky/interstellar/blob/main/src/utils/debounce.ts#L28)

Creates a **debounced function** that delays execution until a specified time
has passed since the last invocation.

**Functionality:**

- **Delays function execution** until `wait` milliseconds have passed since the
  last call.
- If `immediate = true`, the function is executed immediately on the first call.

#### Parameters

| Parameter    | Type                                                                      | Default value | Description                                                            |
| ------------ | ------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------- |
| `func`       | [`DebounceAnyFunctionType`](../types/debounce.md#debounceanyfunctiontype) | `undefined`   | The function to debounce.                                              |
| `wait`       | `number`                                                                  | `undefined`   | The delay time in milliseconds before executing.                       |
| `immediate`? | `boolean`                                                                 | `false`       | If `true`, the function executes on the first call instead of waiting. |

#### Returns

[`DebounceAnyFunctionType`](../types/debounce.md#debounceanyfunctiontype)

- The debounced function.

#### Example

```ts
const debouncedFn = debounce((value) => {
  console.log(value);
}, 500);

debouncedFn('Hello'); // Will not execute immediately
debouncedFn('World'); // Resets timer, will execute 500ms after last call
```

---

### debounceAsync()

```ts
function debounceAsync<T>(callback, delay): (...args) => Promise<ReturnType<T>>;
```

Defined in:
[utils/debounce.ts:72](https://github.com/phun-ky/interstellar/blob/main/src/utils/debounce.ts#L72)

Creates a **debounced asynchronous function** that ensures the last invocation
is resolved.

**Functionality:**

- Cancels previous calls **if invoked within the debounce delay**.
- Ensures the last call **always resolves**.

#### Type Parameters

| Type Parameter                                                                                                                      | Description                       |
| ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `T` _extends_ (...`args`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`any`> | A function returning a `Promise`. |

#### Parameters

| Parameter  | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| `callback` | `T`      | The async function to debounce.     |
| `delay`    | `number` | The debounce delay in milliseconds. |

#### Returns

`Function`

- The debounced async function.

##### Parameters

| Parameter | Type                                                                                                |
| --------- | --------------------------------------------------------------------------------------------------- |
| ...`args` | [`Parameters`](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)<`T`> |

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`ReturnType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)<`T`>>

#### Example

```ts
const fetchData = debounceAsync(async (query) => {
  return await fetch(`/api/search?q=${query}`).then((res) => res.json());
}, 300);

fetchData('hello').then((data) => console.log(data));
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
