const html = String.raw;

import { Checkbox } from '../Checkbox';
import { Label } from '../Label';

import './styles/toggleBox.css';

/**
 * Represents the properties for the Interstellar ToggleBox component.
 */
// eslint-disable-next-line import/no-unused-modules
export type InterstellarToggleBoxPropsType = {
  /** Whether the toggle box is checked by default. Defaults to false. */
  checked?: boolean;
  /** The name attribute for the toggle box. */
  name: string;
  /** The unique ID of the toggle box. */
  id: string;
  /** Additional CSS classes for styling the toggle box. Defaults to an empty string. */
  className?: string;
  /** The label text displayed alongside the toggle box. */
  label: string;
};

/**
 * Renders an Interstellar ToggleBox component.
 *
 * This component wraps a checkbox input and a label to create a toggle switch.
 *
 * @param {InterstellarToggleBoxProps} props - The properties for the toggle box component.
 * @returns {string} The generated toggle box HTML string.
 *
 * @example
 * ```ts
 * const toggleBoxHtml = ToggleBox({
 *   checked: true,
 *   name: 'darkMode',
 *   id: 'toggle-dark-mode',
 *   className: 'custom-toggle',
 *   label: 'Enable Dark Mode'
 * });
 * console.log(toggleBoxHtml);
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
 */
export const ToggleBox = (props: InterstellarToggleBoxPropsType) => {
  const { checked = false, name, id, className = '', label } = props;

  return html`<div class="int toggle-controls">
    ${label}
    ${Checkbox({ checked, name, id, className: `int toggle ${className}` })}
    ${Label({ hidden: true, labelFor: id, label: checked ? 'on' : 'off' })}
  </div>`;
};
