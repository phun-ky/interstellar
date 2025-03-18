[interstellar](../../../../README.md) /
features/canvas/config/time-step/generate-time-step

# features/canvas/config/time-step/generate-time-step

> Last updated 2025-03-18T11:22:37.503Z

## Table of Contents

- [Functions](#functions)
  - [generateTimeStep()](#generatetimestep)

## Functions

### generateTimeStep()

```ts
function generateTimeStep(): void;
```

Defined in: features/canvas/config/time-step/generate-time-step.ts:29

Generates a time step value based on the selected speed mode.

This function updates `timeStep.value` and `timeStep.unit` to adjust the
simulation speed. The speed mode is determined by the `speedMode` dropdown. If
no mode is explicitly set, the function calculates the time step based on
real-time elapsed milliseconds (`deltaTime`) divided by one day in milliseconds.

The function supports the following modes:

- `'framePerDay'`: Each frame corresponds to 1 day.
- `'spedUp'`: Each frame corresponds to 10 days.
- `'insane'`: Each frame corresponds to 1000 days.
- Default: Uses real-time elapsed time for smooth scaling.

#### Returns

`void`

#### Example

```ts
generateTimeStep();
console.log(timeStep.value, timeStep.unit);
```

#### See

[https://developer.mozilla.org/en-US/docs/Web/API/Performance/now](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

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
