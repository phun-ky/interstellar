import {
  CANVAS_ARROW_FONT,
  CANVAS_COLORS,
  setLabelLetterSpacing
} from '../../canvas/config/ui';

import {
  ARROW_EDGE_PADDING,
  ArrowBoundsType,
  getArrowPosition
} from './get-arrow-position';

/** Distance in pixels between an arrow and its label. */
const LABEL_OFFSET = 40;
/** Height of an arrow label's box. */
const LABEL_BOX_HEIGHT = 20;
/** Horizontal padding inside an arrow label's box. */
const LABEL_PADDING_X = 8;
/** Vertical space a label takes, used to stack labels that would overlap. */
const LABEL_LINE_HEIGHT = 24;
/** How many times a label is moved before it is drawn regardless of overlap. */
const MAX_LABEL_NUDGES = 5;

/** The area a drawn arrow label covers, in pixels. */
export type ArrowLabelBoxType = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

const overlaps = (a: ArrowLabelBoxType, b: ArrowLabelBoxType): boolean =>
  a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;

/**
 * Draws an arrow pointing in a specified direction at the edge of the viewport,
 * along with a boxed, uppercase label placed near the arrow.
 *
 * The arrow sits where the line from the center of the canvas, at the given angle,
 * meets the viewport edge (see `getArrowPosition`). The label is placed just inside
 * the viewport and aligned so it never runs off the edge. If it would overlap one of
 * the `occupied` label boxes, it is moved further inside (or down, on the side edges)
 * one line at a time, or straight to the line it was on in the last frame if
 * that is free. The box of the drawn label is added to `occupied`, and
 * the number of lines it was moved is returned, so the next frame can place it
 * first or last (see `drawDirectionalArrows`).
 *
 * @param {CanvasRenderingContext2D} space - The rendering context for the canvas.
 * @param {number} angle - The angle in radians at which the arrow is pointing.
 * @param {number} canvasWidth - The width of the canvas.
 * @param {number} canvasHeight - The height of the canvas.
 * @param {string} name - The label to be displayed near the arrow.
 * @param {ArrowLabelBoxType[]} [occupied=[]] - Label boxes already drawn in this frame.
 * @param {ArrowBoundsType[]} [obstacles=[]] - HUD panels the arrow must stay out of.
 * @param {number} [keepOutRadius=0] - Distance from the centre arrows never stop within.
 * @param {number} [previousNudges=0] - How many lines the label was moved in the last frame: it stays there, if it can't go home, while that line is free.
 * @returns {number} How many lines the label was moved to clear the others: 0 when it wasn't.
 *
 * @example
 * ```ts
 * const canvas = document.getElementById('canvas') as HTMLCanvasElement;
 * const ctx = canvas.getContext('2d');
 * if (ctx) {
 *   drawArrow(ctx, Math.PI / 4, canvas.width, canvas.height, 'North-East');
 * }
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
 */
export const drawArrow = (
  space: CanvasRenderingContext2D,
  angle: number,
  canvasWidth: number,
  canvasHeight: number,
  name: string,
  occupied: ArrowLabelBoxType[] = [],
  obstacles: ArrowBoundsType[] = [],
  keepOutRadius = 0,
  previousNudges = 0
): number => {
  const {
    x: arrowX,
    y: arrowY,
    edge
  } = getArrowPosition(
    angle,
    canvasWidth,
    canvasHeight,
    obstacles,
    keepOutRadius
  );
  // Draw two-line arrow (chevron-style)
  const lineLength = 16;
  const spreadAngle = Math.PI / 4; // 45 degrees
  const x1 = arrowX - lineLength * Math.cos(angle + spreadAngle);
  const y1 = arrowY - lineLength * Math.sin(angle + spreadAngle);
  const x2 = arrowX - lineLength * Math.cos(angle - spreadAngle);
  const y2 = arrowY - lineLength * Math.sin(angle - spreadAngle);

  space.strokeStyle = CANVAS_COLORS.amber;
  space.lineWidth = 3;
  space.lineCap = 'butt';
  space.lineJoin = 'miter';

  space.beginPath();
  space.moveTo(x1, y1);
  space.lineTo(arrowX, arrowY);
  space.lineTo(x2, y2);
  space.stroke();

  // Draw the label in a box just inside the viewport, aligned away from the edge
  space.font = CANVAS_ARROW_FONT;
  setLabelLetterSpacing(space);
  space.textBaseline = 'middle';

  const text = name.toUpperCase();
  const boxWidth = space.measureText(text).width + 2 * LABEL_PADDING_X;
  const isSide = edge === 'left' || edge === 'right';
  // Keep labels on the top and bottom edges within the viewport
  const centeredLeft = Math.min(
    Math.max(arrowX - boxWidth / 2, ARROW_EDGE_PADDING),
    canvasWidth - ARROW_EDGE_PADDING - boxWidth
  );
  const placeLabel = (nudge: number): ArrowLabelBoxType => {
    const left = isSide
      ? edge === 'left'
        ? arrowX + LABEL_OFFSET
        : arrowX - LABEL_OFFSET - boxWidth
      : centeredLeft;
    const y = isSide
      ? arrowY + nudge
      : edge === 'top'
        ? arrowY + LABEL_OFFSET + nudge
        : arrowY - LABEL_OFFSET - nudge;

    return {
      left,
      right: left + boxWidth,
      top: y - LABEL_LINE_HEIGHT / 2,
      bottom: y + LABEL_LINE_HEIGHT / 2
    };
  };
  const isFree = (nudges: number) =>
    !occupied.some((taken) => overlaps(taken, placeLabel(nudges)));
  // Home if it's free, else the line the label was on in the last frame, else
  // the first free line: a moved label doesn't hop between lines while the
  // labels around it move
  const candidates = [
    0,
    Math.min(previousNudges, MAX_LABEL_NUDGES),
    ...Array.from({ length: MAX_LABEL_NUDGES }, (_, i) => i + 1)
  ];
  const nudges =
    candidates.find((n) => isFree(n * LABEL_LINE_HEIGHT)) ?? MAX_LABEL_NUDGES;
  const box = placeLabel(nudges * LABEL_LINE_HEIGHT);

  occupied.push(box);

  const centerY = (box.top + box.bottom) / 2;
  const boxX = Math.round(box.left) + 0.5;
  const boxY = Math.round(centerY - LABEL_BOX_HEIGHT / 2) + 0.5;

  space.fillStyle = CANVAS_COLORS.panel;
  space.fillRect(boxX, boxY, boxWidth, LABEL_BOX_HEIGHT);
  space.strokeStyle = CANVAS_COLORS.line;
  space.lineWidth = 1;
  space.strokeRect(boxX, boxY, boxWidth, LABEL_BOX_HEIGHT);

  space.fillStyle = CANVAS_COLORS.text;
  space.textAlign = 'center';
  space.fillText(text, box.left + boxWidth / 2, centerY);

  return nudges;
};
