[interstellar](../README.md) / types/native

# types/native

> Last updated 2025-03-18T11:22:37.512Z

## Table of Contents

- [Type Aliases](#type-aliases)
  - [EventType\<T>](#eventtypet)
- [**Extended Properties:**](#extended-properties)

## Type Aliases

### EventType\<T>

```ts
type EventType<T> = Event & {
  currentTarget: HTMLElement & {
    documentElement: HTMLElement;
  };
  target: T & {
    files: FileList | null;
    id: string;
    parentElement: Element | null;
  };
};
```

Defined in: types/native.ts:35

Represents the event object for an element, extending the base `Event` type.

This type allows specifying a generic `target` element with additional
properties, making it useful for event handling involving file inputs or dynamic
DOM elements.

## **Extended Properties:**

- **`target.files`**: Supports `FileList` (for input elements of type `file`).
- **`target.id`**: Stores the element's unique identifier.
- **`target.parentElement`**: Provides access to the parent element.
- **`currentTarget.documentElement`**: Ensures event context within the
  document.

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
        `currentTarget`
      </td>

      <td>
        [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) & \{
        `documentElement`: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement);
        }
      </td>

      <td>
        types/native.ts:41
      </td>
    </tr>

    <tr>
      <td>
        `target`
      </td>

      <td>
        `T` & \{
        `files`:   | [`FileList`](https://developer.mozilla.org/docs/Web/API/FileList)
        \| `null`;
        `id`: `string`;
        `parentElement`: [`Element`](https://developer.mozilla.org/docs/Web/API/Element) | `null`;
        }
      </td>

      <td>
        types/native.ts:36
      </td>
    </tr>

  </tbody>
</table>

#### Type Parameters

| Type Parameter | Description                                         |
| -------------- | --------------------------------------------------- |
| `T`            | The specific element type used as the event target. |

#### Example

```ts
const handleChange = (event: EventType<HTMLInputElement>) => {
  if (event.target.files) {
    console.log('Selected files:', event.target.files);
  }
};
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
