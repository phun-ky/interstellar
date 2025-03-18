import { CANVAS_ARROW_FONT } from '../../canvas/config/ui';

/**
 * Draws an arrow pointing in a specified direction at the edge of the viewport,
 * along with a label placed near the arrow.
 *
 * The arrow is positioned based on an angle, calculated from the center of the canvas.
 * The label is adjusted to ensure it remains within the viewport.
 *
 * @param {CanvasRenderingContext2D} space - The rendering context for the canvas.
 * @param {number} angle - The angle in radians at which the arrow is pointing.
 * @param {number} canvasWidth - The width of the canvas.
 * @param {number} canvasHeight - The height of the canvas.
 * @param {string} name - The label to be displayed near the arrow.
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
  name: string
): void => {
  const edgePadding = 20; // Distance from viewport edge for arrow
  const labelOffset = 30; // Distance for label inside viewport
  // Compute arrow position at viewport edge
  const arrowX =
    canvasWidth / 2 + Math.cos(angle) * (canvasWidth / 2 - edgePadding);
  const arrowY =
    canvasHeight / 2 + Math.sin(angle) * (canvasHeight / 2 - edgePadding);

  // Determine label position
  let textX = arrowX;
  let textY = arrowY;

  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);
  // Determine if the arrow is on a vertical or horizontal boundary
  const isHorizontal = Math.abs(cosAngle) > Math.abs(sinAngle);
  const isRight = isHorizontal && cosAngle > 0;
  const isLeft = isHorizontal && !isRight;
  const isBottom = !isHorizontal && sinAngle > 0;
  const isTop = !isHorizontal && !isBottom;

  if (isLeft || isRight) {
    textX = isLeft ? arrowX + labelOffset : arrowX - labelOffset;
  }

  if (isTop || isBottom) {
    textY = isTop ? arrowY + labelOffset : arrowY - labelOffset;
  }

  // Draw arrow
  space.fillStyle = '#4feff9';
  space.beginPath();
  space.moveTo(arrowX, arrowY);
  space.lineTo(
    arrowX - 10 * Math.cos(angle + Math.PI / 6),
    arrowY - 10 * Math.sin(angle + Math.PI / 6)
  );
  space.lineTo(
    arrowX - 10 * Math.cos(angle - Math.PI / 6),
    arrowY - 10 * Math.sin(angle - Math.PI / 6)
  );
  space.closePath();
  space.fill();

  // Draw label
  space.fillStyle = '#47B8BE';
  space.font = CANVAS_ARROW_FONT;
  space.textAlign = 'center';
  space.fillText(name, textX, textY);
};
