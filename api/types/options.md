[interstellar](../README.md) / types/options

# types/options

> Last updated 2025-03-18T11:22:37.512Z

## Table of Contents

- [Interfaces](#interfaces)
  - [TemporalOptionsInterface](#temporaloptionsinterface)
  - [UIOptionsInterface](#uioptionsinterface)
- [**Available UI Options:**](#available-ui-options)
- [Type Aliases](#type-aliases)
  - [TimeStepMode](#timestepmode)

## Interfaces

### TemporalOptionsInterface

Defined in: types/options.ts:66

Configuration for time step settings in the simulation.

TemporalOptionsInterface

#### Example

```ts
const temporalSettings: TemporalOptionsInterface = {
  mode: 'spedUp'
};
```

#### Properties

| Property               | Type                                      | Description                  | Defined in          |
| ---------------------- | ----------------------------------------- | ---------------------------- | ------------------- |
| <a id="mode" /> `mode` | [`TimeStepMode`](options.md#timestepmode) | The selected time step mode. | types/options.ts:68 |

---

### UIOptionsInterface

Defined in: types/options.ts:27

Defines user interface options for toggling different visualization elements.

## **Available UI Options:**

- **`arrowHeads`**: Display directional arrowheads for trajectories.
- **`trajectory`**: Toggle visibility of object trajectories.
- **`moons`**: Show or hide planetary moons.
- **`comets`**: Show or hide comets.
- **`labels`**: Display names of celestial objects.
- **`asteroidBelts`**: Render asteroid belts in the visualization.

UIOptionsInterface

#### Example

```ts
const uiOptions: UIOptionsInterface = {
  arrowHeads: true,
  trajectory: true,
  moons: false,
  comets: true,
  labels: true,
  asteroidBelts: false
};
```

#### Properties

| Property                                 | Type      | Description                                      | Defined in          |
| ---------------------------------------- | --------- | ------------------------------------------------ | ------------------- |
| <a id="arrowheads" /> `arrowHeads`       | `boolean` | Display directional arrowheads for trajectories. | types/options.ts:29 |
| <a id="asteroidbelts" /> `asteroidBelts` | `boolean` | Render asteroid belts in the visualization.      | types/options.ts:39 |
| <a id="comets" /> `comets`               | `boolean` | Show or hide comets.                             | types/options.ts:35 |
| <a id="labels" /> `labels`               | `boolean` | Display names of celestial objects.              | types/options.ts:37 |
| <a id="moons" /> `moons`                 | `boolean` | Show or hide planetary moons.                    | types/options.ts:33 |
| <a id="trajectory" /> `trajectory`       | `boolean` | Toggle visibility of object trajectories.        | types/options.ts:31 |

## Type Aliases

### TimeStepMode

```ts
type TimeStepMode = 'framePerDay' | 'spedUp' | 'realTime';
```

Defined in: types/options.ts:51

Defines available time step modes for controlling simulation speed.

- **`framePerDay`**: Advances one day per frame.
- **`spedUp`**: Runs at a **faster-than-real-time** speed.
- **`realTime`**: Syncs with actual time progression.

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
