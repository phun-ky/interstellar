/**
 * Defines the fonts and colours for what is drawn on the canvas, matching the
 * Mission HUD around it (see `styles/main.css`): monospace uppercase labels,
 * condensed headings, teal lines and amber highlights.
 */

const FONT_FAMILY_MONO =
  'Menlo for Powerline, Menlo Regular for Powerline, DejaVu Sans Mono, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace';
const FONT_FAMILY_HEADING =
  'IBM Plex Sans Condensed, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif';

/** Font style for general labels displayed on the canvas. */
export const CANVAS_LABEL_FONT = `12px ${FONT_FAMILY_MONO}`;

/** Font style for directional arrow labels. */
export const CANVAS_ARROW_FONT = `12px ${FONT_FAMILY_MONO}`;

/** Font style for galaxy names displayed in the visualization. */
export const CANVAS_GALAXY_FONT = `700 32px ${FONT_FAMILY_HEADING}`;

/** Letter spacing for the uppercase monospace labels. */
const CANVAS_LABEL_LETTER_SPACING = '0.12em';

/** Colours used when drawing on the canvas. */
export const CANVAS_COLORS = {
  /** Orbits, leader lines and galaxy labels. */
  teal: '#47b8be',
  /** Directional arrows and the lock reticle. */
  amber: '#ffb547',
  /** Label text. */
  text: '#dfe9ee',
  /** Label box fill. */
  panel: '#0f1720',
  /** Label box outline. */
  line: 'rgba(71, 184, 190, 0.4)',
  /** Leader line from a label to its body. */
  leader: 'rgba(71, 184, 190, 0.7)',
  /** Dwarf planet and asteroid orbits. */
  grey: '#aabcc6',
  /** Comet orbits. */
  comet: '#8fa8ff'
} as const;

/**
 * Sets the label letter spacing where the browser supports
 * `CanvasRenderingContext2D.letterSpacing`.
 *
 * @param {CanvasRenderingContext2D} space - The rendering context.
 *
 * @example
 * ```ts
 * space.font = CANVAS_LABEL_FONT;
 * setLabelLetterSpacing(space);
 * ```
 */
export const setLabelLetterSpacing = (space: CanvasRenderingContext2D) => {
  if ('letterSpacing' in space) {
    space.letterSpacing = CANVAS_LABEL_LETTER_SPACING;
  }
};
