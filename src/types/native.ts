/**
 * Represents the event object for an element, extending the base `Event` type.
 *
 * This type allows specifying a generic `target` element with additional properties,
 * making it useful for event handling involving file inputs or dynamic DOM elements.
 *
 * ## **Extended Properties:**
 * - **`target.files`**: Supports `FileList` (for input elements of type `file`).
 * - **`target.id`**: Stores the element's unique identifier.
 * - **`target.parentElement`**: Provides access to the parent element.
 * - **`currentTarget.documentElement`**: Ensures event context within the document.
 *
 * @template T - The specific element type used as the event target.
 *
 * @typedef {Event & {
 *   target: T & {
 *     files?: FileList | null;
 *     id: string;
 *     parentElement: Element | null;
 *   };
 *   currentTarget: HTMLElement & {
 *     documentElement: HTMLElement;
 *   };
 * }} EventType<T>
 *
 * @example
 * ```ts
 * const handleChange = (event: EventType<HTMLInputElement>) => {
 *   if (event.target.files) {
 *     console.log('Selected files:', event.target.files);
 *   }
 * };
 * ```
 */
export type EventType<T> = Event & {
  target: T & {
    files?: FileList | null;
    id: string;
    parentElement: Element | null;
  };
  currentTarget: HTMLElement & {
    documentElement: HTMLElement;
  };
};
