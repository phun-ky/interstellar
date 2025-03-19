<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / utils/event-handlers

# utils/event-handlers

> Last updated 2025-03-19T08:29:08.348Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [AttachEventHandlersPropsType](#attacheventhandlerspropstype)
- [Functions](#functions)
  - [attachEventHandlers()](#attacheventhandlers)

## Type Aliases

### AttachEventHandlersPropsType

```ts
type AttachEventHandlersPropsType = {
  canvas: HTMLCanvasElement;
  space: CanvasRenderingContext2D;
  update: () => void;
  updateOrbits: (stars, planets, moons, comets) => void;
};
```

Defined in:
[utils/event-handlers.ts:38](https://github.com/phun-ky/interstellar/blob/main/src/utils/event-handlers.ts#L38)

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

<a id="canvas"></a> `canvas`

</td>
<td>

[`HTMLCanvasElement`](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement)

</td>
<td>

[utils/event-handlers.ts:40](https://github.com/phun-ky/interstellar/blob/main/src/utils/event-handlers.ts#L40)

</td>
</tr>
<tr>
<td>

<a id="space"></a> `space`

</td>
<td>

[`CanvasRenderingContext2D`](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D)

</td>
<td>

[utils/event-handlers.ts:39](https://github.com/phun-ky/interstellar/blob/main/src/utils/event-handlers.ts#L39)

</td>
</tr>
<tr>
<td>

<a id="update"></a> `update`

</td>
<td>

() => `void`

</td>
<td>

[utils/event-handlers.ts:41](https://github.com/phun-ky/interstellar/blob/main/src/utils/event-handlers.ts#L41)

</td>
</tr>
<tr>
<td>

<a id="updateorbits"></a> `updateOrbits`

</td>
<td>

(`stars`, `planets`, `moons`, `comets`) => `void`

</td>
<td>

[utils/event-handlers.ts:42](https://github.com/phun-ky/interstellar/blob/main/src/utils/event-handlers.ts#L42)

</td>
</tr>
</tbody>
</table>

## Functions

### attachEventHandlers()

```ts
function attachEventHandlers(props): void;
```

Defined in:
[utils/event-handlers.ts:52](https://github.com/phun-ky/interstellar/blob/main/src/utils/event-handlers.ts#L52)

#### Parameters

| Parameter | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `props`   | [`AttachEventHandlersPropsType`](event-handlers.md#attacheventhandlerspropstype) |

#### Returns

`void`

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
