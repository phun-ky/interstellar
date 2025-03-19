<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../README.md) / config/set-UI-options

# config/set-UI-options

> Last updated 2025-03-19T08:29:08.327Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [SetUIOptionsPropsType](#setuioptionspropstype)
- [Functions](#functions)
  - [setUIOptions()](#setuioptions)

## Type Aliases

### SetUIOptionsPropsType

```ts
type SetUIOptionsPropsType = {
  asteroidBeltsCheckboxElement: HTMLInputElement;
  cometsCheckboxElement: HTMLInputElement;
  labelCheckboxElement: HTMLInputElement;
  moonsCheckboxElement: HTMLInputElement;
  toggleArrowheadsElement: HTMLInputElement;
  trajectoryCheckboxElement: HTMLInputElement;
};
```

Defined in:
[config/set-UI-options.ts:7](https://github.com/phun-ky/interstellar/blob/main/src/config/set-UI-options.ts#L7)

Represents the properties for setting UI options in the simulation.

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="asteroidbeltscheckboxelement"></a> `asteroidBeltsCheckboxElement`

</td>
<td>

[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)

</td>
<td>

Checkbox element for toggling asteroid belts visibility.

</td>
<td>

[config/set-UI-options.ts:19](https://github.com/phun-ky/interstellar/blob/main/src/config/set-UI-options.ts#L19)

</td>
</tr>
<tr>
<td>

<a id="cometscheckboxelement"></a> `cometsCheckboxElement`

</td>
<td>

[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)

</td>
<td>

Checkbox element for toggling comets visibility.

</td>
<td>

[config/set-UI-options.ts:17](https://github.com/phun-ky/interstellar/blob/main/src/config/set-UI-options.ts#L17)

</td>
</tr>
<tr>
<td>

<a id="labelcheckboxelement"></a> `labelCheckboxElement`

</td>
<td>

[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)

</td>
<td>

Checkbox element for toggling labels visibility.

</td>
<td>

[config/set-UI-options.ts:11](https://github.com/phun-ky/interstellar/blob/main/src/config/set-UI-options.ts#L11)

</td>
</tr>
<tr>
<td>

<a id="moonscheckboxelement"></a> `moonsCheckboxElement`

</td>
<td>

[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)

</td>
<td>

Checkbox element for toggling moons visibility.

</td>
<td>

[config/set-UI-options.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/config/set-UI-options.ts#L13)

</td>
</tr>
<tr>
<td>

<a id="togglearrowheadselement"></a> `toggleArrowheadsElement`

</td>
<td>

[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)

</td>
<td>

Checkbox element for toggling arrowheads visibility.

</td>
<td>

[config/set-UI-options.ts:15](https://github.com/phun-ky/interstellar/blob/main/src/config/set-UI-options.ts#L15)

</td>
</tr>
<tr>
<td>

<a id="trajectorycheckboxelement"></a> `trajectoryCheckboxElement`

</td>
<td>

[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)

</td>
<td>

Checkbox element for toggling trajectory visibility.

</td>
<td>

[config/set-UI-options.ts:9](https://github.com/phun-ky/interstellar/blob/main/src/config/set-UI-options.ts#L9)

</td>
</tr>
</tbody>
</table>

## Functions

### setUIOptions()

```ts
function setUIOptions(props): void;
```

Defined in:
[config/set-UI-options.ts:42](https://github.com/phun-ky/interstellar/blob/main/src/config/set-UI-options.ts#L42)

Updates the UI options based on the provided checkbox elements.

This function synchronizes the user interface checkboxes with the OPTIONS_UI
settings, ensuring the visualization updates accordingly.

#### Parameters

| Parameter | Type                                                               | Description                                      |
| --------- | ------------------------------------------------------------------ | ------------------------------------------------ |
| `props`   | [`SetUIOptionsPropsType`](set-UI-options.md#setuioptionspropstype) | The properties containing the checkbox elements. |

#### Returns

`void`

#### Example

```ts
setUIOptions({
  trajectoryCheckboxElement: document.getElementById(
    'trajectory'
  ) as HTMLInputElement,
  labelCheckboxElement: document.getElementById('labels') as HTMLInputElement,
  moonsCheckboxElement: document.getElementById('moons') as HTMLInputElement,
  toggleArrowheadsElement: document.getElementById(
    'arrowheads'
  ) as HTMLInputElement,
  cometsCheckboxElement: document.getElementById('comets') as HTMLInputElement,
  asteroidBeltsCheckboxElement: document.getElementById(
    'asteroid-belts'
  ) as HTMLInputElement
});
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
