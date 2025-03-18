import './styles/checkbox.css';

const html = String.raw;

/**
 * Represents the properties for the Interstellar Checkbox component.
 */
// eslint-disable-next-line import/no-unused-modules
export type InterstellarCheckboxPropsType = {
  /** Whether the checkbox is checked by default. Defaults to false. */
  checked?: boolean;
  /** The name attribute for the checkbox. */
  name: string;
  /** The unique ID of the checkbox. */
  id: string;
  /** Additional CSS classes for styling the checkbox. Defaults to 'int'. */
  className?: string;
};

/**
 * Renders an Interstellar Checkbox component.
 *
 * This checkbox component allows for dynamic class names and checked states.
 *
 * @param {InterstellarCheckboxProps} props - The properties for the checkbox component.
 * @returns {string} The generated checkbox HTML string.
 *
 * @example
 * ```ts
 * const checkboxHtml = Checkbox({
 *   name: 'agree',
 *   id: 'checkbox1',
 *   checked: true,
 *   className: 'custom-checkbox'
 * });
 * console.log(checkboxHtml);
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
 */
export const Checkbox = (props: InterstellarCheckboxPropsType) => {
  const { checked = false, name, id, className = 'int' } = props;
  const checkedAttribute = checked ? 'checked="checked"' : '';

  return html`<input
    type="checkbox"
    ${checkedAttribute}
    name="${name}"
    id="${id}"
    class="${className}"
  />`;
};
