<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / components/ToggleBox

# components/ToggleBox

> Last updated 2025-03-18T13:45:43.049Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [InterstellarToggleBoxPropsType](#interstellartoggleboxpropstype)
- [Functions](#functions)
  - [ToggleBox()](#togglebox)

## Type Aliases

### InterstellarToggleBoxPropsType

```ts
type InterstellarToggleBoxPropsType = {
  checked: boolean;
  className: string;
  id: string;
  label: string;
  name: string;
};
```

Defined in:
[components/ToggleBox/index.ts:12](https://github.com/phun-ky/interstellar/blob/main/src/components/ToggleBox/index.ts#L12)

Represents the properties for the Interstellar ToggleBox component.

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
        <a id="checked" /> `checked`?
      </td>

      <td>
        `boolean`
      </td>

      <td>
        Whether the toggle box is checked by default. Defaults to false.
      </td>

      <td>
        [components/ToggleBox/index.ts:14](https://github.com/phun-ky/interstellar/blob/main/src/components/ToggleBox/index.ts#L14)
      </td>
    </tr>

    <tr>
      <td>
        <a id="classname" /> `className`?
      </td>

      <td>
        `string`
      </td>

      <td>
        Additional CSS classes for styling the toggle box. Defaults to an empty string.
      </td>

      <td>
        [components/ToggleBox/index.ts:20](https://github.com/phun-ky/interstellar/blob/main/src/components/ToggleBox/index.ts#L20)
      </td>
    </tr>

    <tr>
      <td>
        <a id="id" /> `id`
      </td>

      <td>
        `string`
      </td>

      <td>
        The unique ID of the toggle box.
      </td>

      <td>
        [components/ToggleBox/index.ts:18](https://github.com/phun-ky/interstellar/blob/main/src/components/ToggleBox/index.ts#L18)
      </td>
    </tr>

    <tr>
      <td>
        <a id="label" /> `label`
      </td>

      <td>
        `string`
      </td>

      <td>
        The label text displayed alongside the toggle box.
      </td>

      <td>
        [components/ToggleBox/index.ts:22](https://github.com/phun-ky/interstellar/blob/main/src/components/ToggleBox/index.ts#L22)
      </td>
    </tr>

    <tr>
      <td>
        <a id="name" /> `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        The name attribute for the toggle box.
      </td>

      <td>
        [components/ToggleBox/index.ts:16](https://github.com/phun-ky/interstellar/blob/main/src/components/ToggleBox/index.ts#L16)
      </td>
    </tr>

  </tbody>
</table>

## Functions

### ToggleBox()

```ts
function ToggleBox(props): string;
```

Defined in:
[components/ToggleBox/index.ts:47](https://github.com/phun-ky/interstellar/blob/main/src/components/ToggleBox/index.ts#L47)

Renders an Interstellar ToggleBox component.

This component wraps a checkbox input and a label to create a toggle switch.

#### Parameters

| Parameter | Type                                                                            | Description                                  |
| --------- | ------------------------------------------------------------------------------- | -------------------------------------------- |
| `props`   | [`InterstellarToggleBoxPropsType`](ToggleBox.md#interstellartoggleboxpropstype) | The properties for the toggle box component. |

#### Returns

`string`

The generated toggle box HTML string.

#### Example

```ts
const toggleBoxHtml = ToggleBox({
  checked: true,
  name: 'darkMode',
  id: 'toggle-dark-mode',
  className: 'custom-toggle',
  label: 'Enable Dark Mode'
});
console.log(toggleBoxHtml);
```

#### See

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)

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
