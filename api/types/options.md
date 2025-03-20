<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / types/options

# types/options

> Last updated 2025-03-20T15:01:41.156Z

## Table of Contents

- [Interfaces](#interfaces)
  - [TemporalOptionsInterface](#temporaloptionsinterface)
  - [UIOptionsInterface](#uioptionsinterface)
- [Type Aliases](#type-aliases)
  - [TimeStepMode](#timestepmode)

## Interfaces

### TemporalOptionsInterface

Defined in:
[types/options.ts:70](https://github.com/phun-ky/interstellar/blob/main/src/types/options.ts#L70)

Configuration for time step settings in the simulation.

TemporalOptionsInterface

#### Example

```ts
const temporalSettings: TemporalOptionsInterface = {
  mode: 'spedUp'
};
```

#### Properties

| Property                 | Type                                      | Description                  | Defined in                                                                                        |
| ------------------------ | ----------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| <a id="mode"></a> `mode` | [`TimeStepMode`](options.md#timestepmode) | The selected time step mode. | [types/options.ts:72](https://github.com/phun-ky/interstellar/blob/main/src/types/options.ts#L72) |

---

### UIOptionsInterface

Defined in:
[types/options.ts:27](https://github.com/phun-ky/interstellar/blob/main/src/types/options.ts#L27)

Defines user interface options for toggling different visualization elements.

**Available UI Options:**

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

| Property                                   | Type      | Description                                      | Defined in                                                                                        |
| ------------------------------------------ | --------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| <a id="arrowheads"></a> `arrowHeads`       | `boolean` | Display directional arrowheads for trajectories. | [types/options.ts:29](https://github.com/phun-ky/interstellar/blob/main/src/types/options.ts#L29) |
| <a id="asteroidbelts"></a> `asteroidBelts` | `boolean` | Render asteroid belts in the visualization.      | [types/options.ts:39](https://github.com/phun-ky/interstellar/blob/main/src/types/options.ts#L39) |
| <a id="comets"></a> `comets`               | `boolean` | Show or hide comets.                             | [types/options.ts:35](https://github.com/phun-ky/interstellar/blob/main/src/types/options.ts#L35) |
| <a id="labels"></a> `labels`               | `boolean` | Display names of celestial objects.              | [types/options.ts:37](https://github.com/phun-ky/interstellar/blob/main/src/types/options.ts#L37) |
| <a id="moons"></a> `moons`                 | `boolean` | Show or hide planetary moons.                    | [types/options.ts:33](https://github.com/phun-ky/interstellar/blob/main/src/types/options.ts#L33) |
| <a id="trajectory"></a> `trajectory`       | `boolean` | Toggle visibility of object trajectories.        | [types/options.ts:31](https://github.com/phun-ky/interstellar/blob/main/src/types/options.ts#L31) |

## Type Aliases

### TimeStepMode

```ts
type TimeStepMode =
  | 'framePerDay'
  | 'spedUp'
  | 'realTime'
  | 'quarterFramePerDay';
```

Defined in:
[types/options.ts:51](https://github.com/phun-ky/interstellar/blob/main/src/types/options.ts#L51)

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
is licensed under a
[GPL-3.0 License](https://choosealicense.com/licenses/gpl-3.0/).
