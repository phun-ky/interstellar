import { cx } from '../../../utils/cx';
import { uniqueID } from '../../../utils/unique-ID';

import './styles/button.css';

const html = String.raw;

/**
 * Represents the properties for the Interstellar Button component.
 */
// eslint-disable-next-line import/no-unused-modules
export type InterstellarButtonPropsType = {
  /** The content inside the button. */
  children: string;
  /** Additional CSS classes for styling the button. */
  className?: string;
  /** The unique ID of the button. If not provided, a unique ID will be generated. */
  id?: string;
  /** Determines whether the button is in an active state. */
  isActive?: boolean;
  /** Inline styles to apply to the button. */
  style?: string;
  /** Type attribute for the button (e.g., 'button', 'submit', 'reset'). */
  type?: 'button' | 'submit' | 'reset';
};

/**
 * Renders an Interstellar Button component.
 *
 * This button component supports dynamic class names, auto-generated unique IDs,
 * and additional attributes spread into the button element.
 *
 * @param {InterstellarButtonProps} props - The properties for the button component.
 * @returns {string} The generated button HTML string.
 *
 * @example
 * ```ts
 * const buttonHtml = Button({
 *   children: 'Click Me',
 *   className: 'custom-btn',
 *   isActive: true,
 *   style: 'background-color: blue;',
 *   type: 'button'
 * });
 * console.log(buttonHtml);
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
export const Button = (props: InterstellarButtonPropsType): string => {
  const { children, className, isActive, style, ...rest } = props;

  let { id } = props;

  // Generate additional attributes from props
  const attrs = Object.entries(rest)
    .map(([property, value]) => ` ${property}="${value}"`)
    .join(' ');
  const _style = style ? ` style="${style}"` : '';
  const buttonClassNames = cx(` ${className || ''}`, {
    'is-active': !!isActive
  });

  id = id || uniqueID();

  return html`<button
    id="${id}"
    class="int button ${buttonClassNames}"
    ${attrs}${_style}
  >
    ${children}
  </button>`;
};
