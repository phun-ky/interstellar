<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / config/setup-app

# config/setup-app

> Last updated 2025-03-20T15:09:40.710Z

## Table of Contents

- [Functions](#functions)
  - [setupApp()](#setupapp)

## Functions

### setupApp()

```ts
function setupApp(canvas): void;
```

Defined in:
[config/setup-app.ts:37](https://github.com/phun-ky/interstellar/blob/main/src/config/setup-app.ts#L37)

Initializes and configures the space visualization application.

This function sets up the simulation environment, initializes UI options,
precomputes initial angles for celestial bodies, manages global state variables,
and updates orbital positions.

#### Parameters

| Parameter | Type                                                                                | Description                                                |
| --------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `canvas`  | [`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement) | The HTML canvas element used for rendering the simulation. |

#### Returns

`void`

#### Example

```ts
const canvas = document.getElementById('simulationCanvas') as HTMLCanvasElement;
setupApp(canvas);
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
