<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

[interstellar](../../README.md) / components/actions/Button

# components/actions/Button

> Last updated 2025-03-20T15:09:40.704Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [InterstellarButtonPropsType](#interstellarbuttonpropstype)
- [Functions](#functions)
  - [Button()](#button)

## Type Aliases

### InterstellarButtonPropsType

```ts
type InterstellarButtonPropsType = {
  children: string;
  className: string;
  id: string;
  isActive: boolean;
  style: string;
  type: 'button' | 'submit' | 'reset';
};
```

Defined in:
[components/actions/Button/index.ts:12](https://github.com/phun-ky/interstellar/blob/main/src/components/actions/Button/index.ts#L12)

Represents the properties for the Interstellar Button component.

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

<a id="children"></a> `children`

</td>
<td>

`string`

</td>
<td>

The content inside the button.

</td>
<td>

[components/actions/Button/index.ts:14](https://github.com/phun-ky/interstellar/blob/main/src/components/actions/Button/index.ts#L14)

</td>
</tr>
<tr>
<td>

<a id="classname"></a> `className`?

</td>
<td>

`string`

</td>
<td>

Additional CSS classes for styling the button.

</td>
<td>

[components/actions/Button/index.ts:16](https://github.com/phun-ky/interstellar/blob/main/src/components/actions/Button/index.ts#L16)

</td>
</tr>
<tr>
<td>

<a id="id"></a> `id`?

</td>
<td>

`string`

</td>
<td>

The unique ID of the button. If not provided, a unique ID will be generated.

</td>
<td>

[components/actions/Button/index.ts:18](https://github.com/phun-ky/interstellar/blob/main/src/components/actions/Button/index.ts#L18)

</td>
</tr>
<tr>
<td>

<a id="isactive"></a> `isActive`?

</td>
<td>

`boolean`

</td>
<td>

Determines whether the button is in an active state.

</td>
<td>

[components/actions/Button/index.ts:20](https://github.com/phun-ky/interstellar/blob/main/src/components/actions/Button/index.ts#L20)

</td>
</tr>
<tr>
<td>

<a id="style"></a> `style`?

</td>
<td>

`string`

</td>
<td>

Inline styles to apply to the button.

</td>
<td>

[components/actions/Button/index.ts:22](https://github.com/phun-ky/interstellar/blob/main/src/components/actions/Button/index.ts#L22)

</td>
</tr>
<tr>
<td>

<a id="type"></a> `type`?

</td>
<td>

`"button"` | `"submit"` | `"reset"`

</td>
<td>

Type attribute for the button (e.g., 'button', 'submit', 'reset').

</td>
<td>

[components/actions/Button/index.ts:24](https://github.com/phun-ky/interstellar/blob/main/src/components/actions/Button/index.ts#L24)

</td>
</tr>
</tbody>
</table>

## Functions

### Button()

```ts
function Button(props): string;
```

Defined in:
[components/actions/Button/index.ts:50](https://github.com/phun-ky/interstellar/blob/main/src/components/actions/Button/index.ts#L50)

Renders an Interstellar Button component.

This button component supports dynamic class names, auto-generated unique IDs,
and additional attributes spread into the button element.

#### Parameters

| Parameter | Type                                                                   | Description                              |
| --------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| `props`   | [`InterstellarButtonPropsType`](Button.md#interstellarbuttonpropstype) | The properties for the button component. |

#### Returns

`string`

The generated button HTML string.

#### Example

```ts
const buttonHtml = Button({
  children: 'Click Me',
  className: 'custom-btn',
  isActive: true,
  style: 'background-color: blue;',
  type: 'button'
});
console.log(buttonHtml);
```

#### See

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button>

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
