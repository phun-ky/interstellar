<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / features/starfield/generate-star-field

# features/starfield/generate-star-field

> Last updated 2025-03-20T15:06:52.002Z

## Table of Contents

- [Interfaces](#interfaces)
  - [StarfieldStarInterface](#starfieldstarinterface)
- [Functions](#functions)
  - [generateStarfield()](#generatestarfield)

## Interfaces

### StarfieldStarInterface

Defined in:
[features/starfield/generate-star-field.ts:3](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/generate-star-field.ts#L3)

#### Properties

| Property                                     | Type     | Defined in                                                                                                                                        |
| -------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="brightness"></a> `brightness`         | `number` | [features/starfield/generate-star-field.ts:6](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/generate-star-field.ts#L6) |
| <a id="parallaxfactor"></a> `parallaxFactor` | `number` | [features/starfield/generate-star-field.ts:8](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/generate-star-field.ts#L8) |
| <a id="size"></a> `size`                     | `number` | [features/starfield/generate-star-field.ts:7](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/generate-star-field.ts#L7) |
| <a id="x"></a> `x`                           | `number` | [features/starfield/generate-star-field.ts:4](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/generate-star-field.ts#L4) |
| <a id="y"></a> `y`                           | `number` | [features/starfield/generate-star-field.ts:5](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/generate-star-field.ts#L5) |

## Functions

### generateStarfield()

```ts
function generateStarfield(canvasWidth, canvasHeight): void;
```

Defined in:
[features/starfield/generate-star-field.ts:47](https://github.com/phun-ky/interstellar/blob/main/src/features/starfield/generate-star-field.ts#L47)

Generates a starfield dynamically based on the canvas size, maintaining
proportional star density.

**Star Distribution Calculation:** The number of stars is scaled relative to a
base resolution ($1920 \times 1080$):

$$
N = \left( \frac{\text{screenArea}}{\text{BASE\_AREA}} \right) \times \text{BASE\_NUM\_STARS}
$$

where:

- $\text{screenArea} = \text{canvasWidth} \times \text{canvasHeight}$
- $\text{BASE\_AREA} = 1920 \times 1080$
- $\text{BASE\_NUM\_STARS} = 10000$

Each star has:

- **Randomized coordinates** $(x, y)$ within the canvas.
- **Brightness** between **0.5** and **1.0**.
- **Size variations** between **0.0** and **1.0**.
- **Parallax factor** between **0.01** and **4.5**, determining depth effect.

#### Parameters

| Parameter      | Type     | Description                         |
| -------------- | -------- | ----------------------------------- |
| `canvasWidth`  | `number` | The width of the canvas in pixels.  |
| `canvasHeight` | `number` | The height of the canvas in pixels. |

#### Returns

`void`

This function does not return a value; it populates the global starfield.

#### Example

```ts
generateStarfield(800, 600);
console.log(starfield.value.length); // Outputs the number of generated stars
```

#### See

[Parallax Effect](https://en.wikipedia.org/wiki/Parallax)

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
