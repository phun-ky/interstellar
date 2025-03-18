const html = String.raw;

/**
 * Represents the properties for the Interstellar Label component.
 */
// eslint-disable-next-line import/no-unused-modules
export type InterstellarLabelPropsType = {
  /** The ID of the form element this label is associated with. */
  labelFor: string;
  /** The text content of the label. */
  label: string;
  /** Additional CSS classes for styling the label. Defaults to 'int'. */
  className?: string;
  /** Determines if the label should be visually hidden (for screen readers only). */
  hidden: boolean;
};

/**
 * Renders an Interstellar Label component.
 *
 * This component generates an accessible label for a form element.
 *
 * @param {InterstellarLabelProps} props - The properties for the label component.
 * @returns {string} The generated label HTML string.
 *
 * @example
 * ```ts
 * const labelHtml = Label({
 *   labelFor: 'username',
 *   label: 'Username',
 *   className: 'custom-label',
 *   hidden: false
 * });
 * console.log(labelHtml);
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
 */
export const Label = (props: InterstellarLabelPropsType) => {
  const { labelFor, label, className = 'int', hidden = false } = props;

  return html`<label class="${className}" for="${labelFor}"
    ><span class="int ${hidden ? 'sr-only' : ''}">${label}</span></label
  >`;
};
