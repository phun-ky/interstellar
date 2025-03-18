<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / components/Checkbox

# components/Checkbox

> Last updated 2025-03-18T13:45:43.048Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [InterstellarCheckboxPropsType](#interstellarcheckboxpropstype)
- [Functions](#functions)
  - [Checkbox()](#checkbox)

## Type Aliases

### InterstellarCheckboxPropsType

```ts
type InterstellarCheckboxPropsType = {
  checked: boolean;
  className: string;
  id: string;
  name: string;
};
```

Defined in:
[components/Checkbox/index.ts:9](https://github.com/phun-ky/interstellar/blob/main/src/components/Checkbox/index.ts#L9)

Represents the properties for the Interstellar Checkbox component.

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
        Whether the checkbox is checked by default. Defaults to false.
      </td>

      <td>
        [components/Checkbox/index.ts:11](https://github.com/phun-ky/interstellar/blob/main/src/components/Checkbox/index.ts#L11)
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
        Additional CSS classes for styling the checkbox. Defaults to 'int'.
      </td>

      <td>
        [components/Checkbox/index.ts:17](https://github.com/phun-ky/interstellar/blob/main/src/components/Checkbox/index.ts#L17)
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
        The unique ID of the checkbox.
      </td>

      <td>
        [components/Checkbox/index.ts:15](https://github.com/phun-ky/interstellar/blob/main/src/components/Checkbox/index.ts#L15)
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
        The name attribute for the checkbox.
      </td>

      <td>
        [components/Checkbox/index.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/components/Checkbox/index.ts#L13)
      </td>
    </tr>

  </tbody>
</table>

## Functions

### Checkbox()

```ts
function Checkbox(props): string;
```

Defined in:
[components/Checkbox/index.ts:41](https://github.com/phun-ky/interstellar/blob/main/src/components/Checkbox/index.ts#L41)

Renders an Interstellar Checkbox component.

This checkbox component allows for dynamic class names and checked states.

#### Parameters

| Parameter | Type                                                                         | Description                                |
| --------- | ---------------------------------------------------------------------------- | ------------------------------------------ |
| `props`   | [`InterstellarCheckboxPropsType`](Checkbox.md#interstellarcheckboxpropstype) | The properties for the checkbox component. |

#### Returns

`string`

The generated checkbox HTML string.

#### Example

```ts
const checkboxHtml = Checkbox({
  name: 'agree',
  id: 'checkbox1',
  checked: true,
  className: 'custom-checkbox'
});
console.log(checkboxHtml);
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
