/** Distance in pixels between the viewport edge and an arrow. */
export const ARROW_EDGE_PADDING = 20;

/**
 * A panel the ray meets closer to the centre than this share of the viewport's
 * shorter side is ignored for that arrow, so arrows never land on the body in
 * the middle; the arrow goes to the edge instead.
 */
const MIN_ARROW_DISTANCE_RATIO = 0.25;

/** A rectangle on the canvas, in canvas pixels: an area, or a HUD panel over it. */
export type ArrowBoundsType = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

type ArrowPositionType = {
  /** Arrow tip x-coordinate in pixels. */
  x: number;
  /** Arrow tip y-coordinate in pixels. */
  y: number;
  /** Which edge of the viewport the arrow sits on. */
  edge: 'top' | 'right' | 'bottom' | 'left';
};

/**
 * Computes where an arrow pointing at `angle` from the center of the viewport
 * meets the (padded) edge of the viewport.
 *
 * The ray from the center is intersected with the viewport rectangle, so the
 * arrow always lies on the straight line between the center and the object it
 * points to:
 *
 * $$
 * t = \min\left(\frac{w/2 - p}{|\cos\theta|}, \frac{h/2 - p}{|\sin\theta|}\right)
 * $$
 * $$
 * (x, y) = \left(\frac{w}{2} + t\cos\theta, \frac{h}{2} + t\sin\theta\right)
 * $$
 *
 * When `obstacles` are given (the HUD panels over the canvas), the arrow stops at
 * the first one the ray meets instead, just outside it, so no panel covers it,
 * unless that would put the arrow close to the centre (see
 * `MIN_ARROW_DISTANCE_RATIO`).
 *
 * @param {number} angle - The angle in radians, measured from the viewport center.
 * @param {number} canvasWidth - The width of the canvas.
 * @param {number} canvasHeight - The height of the canvas.
 * @param {ArrowBoundsType[]} [obstacles=[]] - Areas the arrow must stay out of.
 * @returns {ArrowPositionType} The arrow position and the edge it sits on.
 *
 * @example
 * ```ts
 * getArrowPosition(0, 800, 600); // { x: 780, y: 300, edge: 'right' }
 * ```
 */
export const getArrowPosition = (
  angle: number,
  canvasWidth: number,
  canvasHeight: number,
  obstacles: ArrowBoundsType[] = []
): ArrowPositionType => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  const left = ARROW_EDGE_PADDING;
  const right = canvasWidth - ARROW_EDGE_PADDING;
  const top = ARROW_EDGE_PADDING;
  const bottom = canvasHeight - ARROW_EDGE_PADDING;
  const toSide =
    cos > 0
      ? (right - centerX) / cos
      : cos < 0
        ? (left - centerX) / cos
        : Infinity;
  const toTopOrBottom =
    sin > 0
      ? (bottom - centerY) / sin
      : sin < 0
        ? (top - centerY) / sin
        : Infinity;

  let t = Math.min(toSide, toTopOrBottom);
  let edge: ArrowPositionType['edge'] =
    toSide <= toTopOrBottom
      ? cos > 0
        ? 'right'
        : 'left'
      : sin > 0
        ? 'bottom'
        : 'top';

  // Arrows never stop closer to the centre than this, where the focused body is
  const minDistance =
    Math.min(canvasWidth, canvasHeight) * MIN_ARROW_DISTANCE_RATIO;

  // Stop just outside the first panel the ray runs into (ray–box slab test)
  obstacles.forEach((obstacle) => {
    const box = {
      left: obstacle.left - ARROW_EDGE_PADDING,
      right: obstacle.right + ARROW_EDGE_PADDING,
      top: obstacle.top - ARROW_EDGE_PADDING,
      bottom: obstacle.bottom + ARROW_EDGE_PADDING
    };

    // A panel over the centre itself can't be avoided this way
    if (
      centerX > box.left &&
      centerX < box.right &&
      centerY > box.top &&
      centerY < box.bottom
    ) {
      return;
    }

    const tx1 = cos === 0 ? -Infinity : (box.left - centerX) / cos;
    const tx2 = cos === 0 ? Infinity : (box.right - centerX) / cos;
    const ty1 = sin === 0 ? -Infinity : (box.top - centerY) / sin;
    const ty2 = sin === 0 ? Infinity : (box.bottom - centerY) / sin;
    const enterX = cos === 0 ? -Infinity : Math.min(tx1, tx2);
    const enterY = sin === 0 ? -Infinity : Math.min(ty1, ty2);
    const enter = Math.max(enterX, enterY);
    const exit = Math.min(
      cos === 0 ? Infinity : Math.max(tx1, tx2),
      sin === 0 ? Infinity : Math.max(ty1, ty2)
    );

    if (cos === 0 && (centerX < box.left || centerX > box.right)) return;

    if (sin === 0 && (centerY < box.top || centerY > box.bottom)) return;

    if (enter >= minDistance && enter <= exit && enter < t) {
      t = enter;
      // Hitting a panel's left side puts the arrow on the clear area's right edge, …
      edge =
        enterX >= enterY
          ? cos > 0
            ? 'right'
            : 'left'
          : sin > 0
            ? 'bottom'
            : 'top';
    }
  });

  return {
    x: centerX + cos * t,
    y: centerY + sin * t,
    edge
  };
};
