<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../../README.md) / features/celestial-bodies/orbits/update

# features/celestial-bodies/orbits/update

> Last updated 2025-03-19T08:29:08.334Z

## Table of Contents

- [Functions](#functions)
  - [updateOrbits()](#updateorbits)

## Functions

### updateOrbits()

```ts
function updateOrbits(stars, planets, moons, comets): void;
```

Defined in:
[features/celestial-bodies/orbits/update.ts:30](https://github.com/phun-ky/interstellar/blob/main/src/features/celestial-bodies/orbits/update.ts#L30)

Updates the **orbital paths** for all celestial bodies in the simulation.

This function recalculates the orbits for stars, planets, moons, and comets,
ensuring that their paths are updated based on their latest orbital parameters.

It calls `computeOrbits` on each category of celestial bodies, applying
Keplerian orbital mechanics to determine their elliptical trajectories.

#### Parameters

| Parameter | Type                                                   | Description                                                    |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------- |
| `stars`   | [`StarsType`](../../../types/stars.md#starstype)       | Array of stars whose orbits need to be updated.                |
| `planets` | [`PlanetsType`](../../../types/planets.md#planetstype) | Array of planets whose orbits need recalculating.              |
| `moons`   | [`MoonsType`](../../../types/moons.md#moonstype)       | Array of moons for orbital updates.                            |
| `comets`  | [`CometsType`](../../../types/comets.md#cometstype)    | Array of comets, which typically have highly eccentric orbits. |

#### Returns

`void`

This function does not return a value; it updates the orbits in place.

#### Example

```ts
updateOrbits(starsArray, planetsArray, moonsArray, cometsArray);
```

#### See

[Kepler's Laws](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion)

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
