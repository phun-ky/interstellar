<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / utils/wait-for

# utils/wait-for

> Last updated 2025-03-19T08:29:08.350Z

## Table of Contents

- [Functions](#functions)
  - [waitFor()](#waitfor)

## Functions

### waitFor()

```ts
function waitFor(ms): Promise<void>;
```

Defined in:
[utils/wait-for.ts:22](https://github.com/phun-ky/interstellar/blob/main/src/utils/wait-for.ts#L22)

Delays execution for the specified time using `setTimeout`.

**Functionality:**

- Returns a **Promise** that resolves **after** the specified time (in
  milliseconds).
- Useful for **delaying execution**, creating **timeouts**, or **simulating wait
  periods**.

**Usage in Async Operations:**

- Used in **animations**, **API polling**, or **delayed UI updates**.
- Prevents blocking the main thread by utilizing asynchronous execution.

#### Parameters

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| `ms`      | `number` | The time to wait in milliseconds. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

A Promise that resolves after the specified time.

#### Example

```ts
// Wait for 2 seconds before executing the next line
await waitFor(2000);
console.log('2 seconds later...');
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
