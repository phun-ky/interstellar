<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / config/constants

# config/constants

> Last updated 2025-03-19T08:29:08.326Z

## Table of Contents

- [Variables](#variables)
  - [AU_IN_KM](#au_in_km)
  - [AU_IN_LY](#au_in_ly)
  - [AU_IN_PX](#au_in_px)
  - [EARTH_PERIOD](#earth_period)
  - [INITIAL_SCALE](#initial_scale)
  - [J2000](#j2000)
  - [KM_IN_PX](#km_in_px)
  - [LY_IN_AU](#ly_in_au)
  - [LY_IN_PX](#ly_in_px)
  - [MAX_CELESTIAL_BODY_SIZE](#max_celestial_body_size)
  - [MAX_MOON_SIZE](#max_moon_size)
  - [MAX_PLANET_SIZE](#max_planet_size)
  - [MAX_SCALE](#max_scale)
  - [MAX_STAR_SIZE](#max_star_size)
  - [MIN_COMET_SIZE](#min_comet_size)
  - [MIN_MOON_SIZE](#min_moon_size)
  - [MIN_PLANET_SIZE](#min_planet_size)
  - [MIN_SCALE](#min_scale)
  - [MIN_STAR_SIZE](#min_star_size)
  - [MS_1_DAY](#ms_1_day)
  - [MS_1_SECOND](#ms_1_second)
  - [SCALE](#scale)
  - [SECONDS_1_DAY](#seconds_1_day)
  - [SIMULATION_DATE](#simulation_date)
  - [SUN_RADIUS_KM](#sun_radius_km)
  - [THRESHOLD_ASTEROID_BELT_RENDER](#threshold_asteroid_belt_render)
  - [THRESHOLD_COMET_LABEL](#threshold_comet_label)
  - [THRESHOLD_COMET_RENDER](#threshold_comet_render)
  - [THRESHOLD_MOON_RENDER](#threshold_moon_render)
  - [THRESHOLD_PLANET_LABEL](#threshold_planet_label)
  - [THRESHOLD_PLANET_RENDER](#threshold_planet_render)
  - [TRAIL_SCALING_FACTOR](#trail_scaling_factor)
  - [ZOOM_FACTOR](#zoom_factor)

## Variables

### AU_IN_KM

```ts
const AU_IN_KM: 149597870.7 = 149597870.7;
```

Defined in:
[config/constants.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L13)

1 Astronomical Unit (AU) in kilometres.

---

### AU_IN_LY

```ts
const AU_IN_LY: number;
```

Defined in:
[config/constants.ts:25](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L25)

1 AU in Light-Years.

---

### AU_IN_PX

```ts
const AU_IN_PX: 960 = 960;
```

Defined in:
[config/constants.ts:16](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L16)

1 AU in pixels at the default scale.

---

### EARTH_PERIOD

```ts
const EARTH_PERIOD: 365.256 = 365.256;
```

Defined in:
[config/constants.ts:36](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L36)

Earth's orbital period in days.

---

### INITIAL_SCALE

```ts
const INITIAL_SCALE: 2.389618154589582e-10 = 2.389618154589582e-10;
```

Defined in:
[config/constants.ts:84](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L84)

Initial scale factor for the simulation.

---

### J2000

```ts
const J2000: Date;
```

Defined in:
[config/constants.ts:87](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L87)

Julian Date reference for J2000 epoch (January 1, 2000, 12:00 TT).

---

### KM_IN_PX

```ts
const KM_IN_PX: number;
```

Defined in:
[config/constants.ts:19](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L19)

1 Kilometre in pixels at the default scale.

---

### LY_IN_AU

```ts
const LY_IN_AU: 63241.077088066 = 63241.077088066;
```

Defined in:
[config/constants.ts:10](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L10)

1 Light-Year (LY) in Astronomical Units (AU).

---

### LY_IN_PX

```ts
const LY_IN_PX: number;
```

Defined in:
[config/constants.ts:22](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L22)

1 Light-Year in pixels at the default scale.

---

### MAX_CELESTIAL_BODY_SIZE

```ts
const MAX_CELESTIAL_BODY_SIZE: 10 = 10;
```

Defined in:
[config/constants.ts:63](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L63)

Maximum allowed celestial body size in the visualization.

---

### MAX_MOON_SIZE

```ts
const MAX_MOON_SIZE: 2 = 2;
```

Defined in:
[config/constants.ts:54](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L54)

---

### MAX_PLANET_SIZE

```ts
const MAX_PLANET_SIZE: 4 = 4;
```

Defined in:
[config/constants.ts:44](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L44)

---

### MAX_SCALE

```ts
const MAX_SCALE: 100000000000000000000 = 1e20;
```

Defined in:
[config/constants.ts:33](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L33)

---

### MAX_STAR_SIZE

```ts
const MAX_STAR_SIZE: 10 = 10;
```

Defined in:
[config/constants.ts:49](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L49)

---

### MIN_COMET_SIZE

```ts
const MIN_COMET_SIZE: 2 = 2;
```

Defined in:
[config/constants.ts:57](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L57)

Minimum and maximum sizes for comets in the visualization.

---

### MIN_MOON_SIZE

```ts
const MIN_MOON_SIZE: 1 = 1;
```

Defined in:
[config/constants.ts:52](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L52)

Minimum and maximum sizes for moons in the visualization.

---

### MIN_PLANET_SIZE

```ts
const MIN_PLANET_SIZE: 2 = 2;
```

Defined in:
[config/constants.ts:42](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L42)

Minimum and maximum sizes for planets in the visualization.

---

### MIN_SCALE

```ts
const MIN_SCALE: 1e-20 = 1e-20;
```

Defined in:
[config/constants.ts:31](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L31)

Minimum and maximum allowed scale factors.

---

### MIN_STAR_SIZE

```ts
const MIN_STAR_SIZE: 5 = 5;
```

Defined in:
[config/constants.ts:47](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L47)

Minimum and maximum sizes for stars in the visualization.

---

### MS_1_DAY

```ts
const MS_1_DAY: 86400000 = 86400000;
```

Defined in:
[config/constants.ts:77](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L77)

Time-related constants.

---

### MS_1_SECOND

```ts
const MS_1_SECOND: 1000 = 1000;
```

Defined in:
[config/constants.ts:79](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L79)

---

### SCALE

```ts
const SCALE: {
  value: number;
};
```

Defined in:
[config/constants.ts:90](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L90)

Global scale object to manage dynamic scaling.

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="value"></a> `value`

</td>
<td>

`number`

</td>
<td>

INITIAL_SCALE

</td>
<td>

[config/constants.ts:90](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L90)

</td>
</tr>
</tbody>
</table>

---

### SECONDS_1_DAY

```ts
const SECONDS_1_DAY: 86400 = 86400;
```

Defined in:
[config/constants.ts:81](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L81)

---

### SIMULATION_DATE

```ts
const SIMULATION_DATE: Date;
```

Defined in:
[config/constants.ts:96](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L96)

Stores the simulation's current date.

---

### SUN_RADIUS_KM

```ts
const SUN_RADIUS_KM: 696340 = 696340;
```

Defined in:
[config/constants.ts:60](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L60)

Radius of the Sun in kilometres.

---

### THRESHOLD_ASTEROID_BELT_RENDER

```ts
const THRESHOLD_ASTEROID_BELT_RENDER: 0.0007533210080944772 = 0.0007533210080944772;
```

Defined in:
[config/constants.ts:74](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L74)

---

### THRESHOLD_COMET_LABEL

```ts
const THRESHOLD_COMET_LABEL: 0.0007533210080944772 = 0.0007533210080944772;
```

Defined in:
[config/constants.ts:68](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L68)

---

### THRESHOLD_COMET_RENDER

```ts
const THRESHOLD_COMET_RENDER: 0.0007533210080944772 = 0.0007533210080944772;
```

Defined in:
[config/constants.ts:72](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L72)

---

### THRESHOLD_MOON_RENDER

```ts
const THRESHOLD_MOON_RENDER: 12.561281983793059 = 12.561281983793059;
```

Defined in:
[config/constants.ts:39](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L39)

Threshold for rendering moons (dependent on zoom level).

---

### THRESHOLD_PLANET_LABEL

```ts
const THRESHOLD_PLANET_LABEL: 0.002600668431442156 = 0.002600668431442156;
```

Defined in:
[config/constants.ts:66](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L66)

Thresholds for rendering and labeling celestial objects.

---

### THRESHOLD_PLANET_RENDER

```ts
const THRESHOLD_PLANET_RENDER: 0.0007533210080944772 = 0.0007533210080944772;
```

Defined in:
[config/constants.ts:70](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L70)

---

### TRAIL_SCALING_FACTOR

```ts
const TRAIL_SCALING_FACTOR: 0.5 = 0.5;
```

Defined in:
[config/constants.ts:93](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L93)

Scaling factor for rendering orbital trails.

---

### ZOOM_FACTOR

```ts
const ZOOM_FACTOR: 1.1 = 1.1;
```

Defined in:
[config/constants.ts:28](https://github.com/phun-ky/interstellar/blob/main/src/config/constants.ts#L28)

Zooming factor for scaling operations.

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
