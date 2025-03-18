<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](README.md) / App

# App

> Last updated 2025-03-18T13:17:24.383Z

## Table of Contents

- [Functions](#functions)
  - [App()](#app-1)
- [**Initialization Steps:**](#initialization-steps)
- [**Simulation Loop:**](#simulation-loop)

## Functions

### App()

```ts
function App(): Promise<void>;
```

Defined in:
[App.ts:49](https://github.com/phun-ky/interstellar/blob/main/src/App.ts#L49)

**Main application entry point** for initializing and running the simulation.

## **Initialization Steps:**

1. **Set up the UI** elements.
2. **Create and configure the canvas**.
3. **Initialize global settings**.
4. **Attach event handlers** for interaction.
5. **Start the simulation loop**.

## **Simulation Loop:**

- Updates **planetary positions** based on time step.
- Advances **simulation time**.
- Updates **UI components** like coordinates, zoom, and minimap.
- Uses `requestAnimationFrame` for smooth rendering.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`>

Asynchronous function to initialize and start the simulation.

#### Example

```ts
import App from './App';
App();
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
