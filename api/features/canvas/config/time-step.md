<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../../README.md) / features/canvas/config/time-step

# features/canvas/config/time-step

> Last updated 2025-03-20T15:06:51.996Z

## Table of Contents

- [Variables](#variables)
  - [lastTimestamp](#lasttimestamp)
  - [SPEED_MODE](#speed_mode)
  - [timeStep](#timestep)

## Variables

### lastTimestamp

```ts
const lastTimestamp: TemporalInterface;
```

Defined in:
[features/canvas/config/time-step/index.ts:19](https://github.com/phun-ky/interstellar/blob/main/src/features/canvas/config/time-step/index.ts#L19)

Last recorded timestamp for time calculations, in milliseconds.

---

### SPEED_MODE

```ts
const SPEED_MODE: {
  value:
    | 'realTime'
    | 'quarterFramePerDay'
    | 'framePerDay'
    | 'spedUp'
    | 'insane';
};
```

Defined in:
[features/canvas/config/time-step/index.ts:30](https://github.com/phun-ky/interstellar/blob/main/src/features/canvas/config/time-step/index.ts#L30)

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="value"></a> `value`

</td>
<td>

`"realTime"` | `"quarterFramePerDay"` | `"framePerDay"` | `"spedUp"` |
`"insane"`

</td>
<td>

[features/canvas/config/time-step/index.ts:31](https://github.com/phun-ky/interstellar/blob/main/src/features/canvas/config/time-step/index.ts#L31)

</td>
</tr>
</tbody>
</table>

---

### timeStep

```ts
const timeStep: TimeStepInterface;
```

Defined in:
[features/canvas/config/time-step/index.ts:25](https://github.com/phun-ky/interstellar/blob/main/src/features/canvas/config/time-step/index.ts#L25)

Defines the simulation time step, initially set to 0 days.

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
