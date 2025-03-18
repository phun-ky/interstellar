<div>
  <img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;" />
</div>

[interstellar](../README.md) / components/Label

# components/Label

> Last updated 2025-03-18T13:45:43.049Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [InterstellarLabelPropsType](#interstellarlabelpropstype)
- [Functions](#functions)
  - [Label()](#label)

## Type Aliases

### InterstellarLabelPropsType

```ts
type InterstellarLabelPropsType = {
  className: string;
  hidden: boolean;
  label: string;
  labelFor: string;
};
```

Defined in:
[components/Label.ts:7](https://github.com/phun-ky/interstellar/blob/main/src/components/Label.ts#L7)

Represents the properties for the Interstellar Label component.

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
        <a id="classname" /> `className`?
      </td>

      <td>
        `string`
      </td>

      <td>
        Additional CSS classes for styling the label. Defaults to 'int'.
      </td>

      <td>
        [components/Label.ts:13](https://github.com/phun-ky/interstellar/blob/main/src/components/Label.ts#L13)
      </td>
    </tr>

    <tr>
      <td>
        <a id="hidden" /> `hidden`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        Determines if the label should be visually hidden (for screen readers only).
      </td>

      <td>
        [components/Label.ts:15](https://github.com/phun-ky/interstellar/blob/main/src/components/Label.ts#L15)
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
        The text content of the label.
      </td>

      <td>
        [components/Label.ts:11](https://github.com/phun-ky/interstellar/blob/main/src/components/Label.ts#L11)
      </td>
    </tr>

    <tr>
      <td>
        <a id="labelfor" /> `labelFor`
      </td>

      <td>
        `string`
      </td>

      <td>
        The ID of the form element this label is associated with.
      </td>

      <td>
        [components/Label.ts:9](https://github.com/phun-ky/interstellar/blob/main/src/components/Label.ts#L9)
      </td>
    </tr>

  </tbody>
</table>

## Functions

### Label()

```ts
function Label(props): string;
```

Defined in:
[components/Label.ts:39](https://github.com/phun-ky/interstellar/blob/main/src/components/Label.ts#L39)

Renders an Interstellar Label component.

This component generates an accessible label for a form element.

#### Parameters

| Parameter | Type                                                                | Description                             |
| --------- | ------------------------------------------------------------------- | --------------------------------------- |
| `props`   | [`InterstellarLabelPropsType`](Label.md#interstellarlabelpropstype) | The properties for the label component. |

#### Returns

`string`

The generated label HTML string.

#### Example

```ts
const labelHtml = Label({
  labelFor: 'username',
  label: 'Username',
  className: 'custom-label',
  hidden: false
});
console.log(labelHtml);
```

#### See

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

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
