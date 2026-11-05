import { TWO_PI } from '@interstellar-tools/constants';
import { convertDistanceUnit } from '@interstellar-tools/equations';
import { OrbitInterface, ValueInterface } from '@interstellar-tools/types';

import { AU_IN_PX } from '../../../config/constants';

/** Initial number of segments around the orbit, before refining. */
const INITIAL_SEGMENTS = 256;
/** Largest allowed gap between a drawn segment and the true orbit, in pixels. */
const TOLERANCE_PX = 0.5;
/** Each refinement halves a segment; this caps how often. */
const MAX_DEPTH = 48;
/** Draw this far outside the viewport, so lines don't end at its edge. */
const MARGIN_PX = 64;

type PointType = [x: number, y: number];

type RectType = { left: number; top: number; right: number; bottom: number };

/**
 * Clips the segment `p0`–`p1` to `rect` (Liang–Barsky).
 *
 * @returns The clipped end points, or `null` when the segment misses the rectangle.
 */
const clipSegment = (
  p0: PointType,
  p1: PointType,
  rect: RectType
): [PointType, PointType] | null => {
  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];
  const p = [-dx, dx, -dy, dy];
  const q = [
    p0[0] - rect.left,
    rect.right - p0[0],
    p0[1] - rect.top,
    rect.bottom - p0[1]
  ];

  let t0 = 0;
  let t1 = 1;

  for (let i = 0; i < 4; i++) {
    if (p[i] === 0) {
      if (q[i] < 0) return null;
    } else {
      const t = q[i] / p[i];

      if (p[i] < 0) t0 = Math.max(t0, t);
      else t1 = Math.min(t1, t);
    }
  }

  if (t0 > t1) return null;

  return [
    [p0[0] + t0 * dx, p0[1] + t0 * dy],
    [p0[0] + t1 * dx, p0[1] + t1 * dy]
  ];
};

/**
 * Adds an orbit's ellipse to the current canvas path, accurately at any zoom level.
 *
 * A fixed set of points can't do this: at galactic size (the Solar System's orbit is
 * about 1.7 × 10⁹ au) each straight segment between points cuts thousands of au inside
 * the true ellipse, so when zoomed in on a star the drawn orbit misses the star. Very
 * large coordinates also lose precision in the canvas, which stores path points as
 * 32-bit floats.
 *
 * So the ellipse is traced for the current view instead:
 * - it starts from a coarse set of segments and keeps halving the ones that might be
 *   visible until each is within half a pixel of the true ellipse,
 * - segments that can't reach the viewport are skipped,
 * - every segment is clipped to the viewport in double precision, so only small,
 *   precise coordinates reach the canvas.
 *
 * The ellipse matches `getBodyPosition()`: `x = a·cos θ − a·e`, `y = b·sin θ`, around
 * the reference point (the parent's position on screen).
 *
 * @param {CanvasRenderingContext2D} space - The rendering context; the caller strokes the path.
 * @param {OrbitInterface} orbit - The orbit to trace.
 * @param {number} referenceX - The parent's x position on screen, in pixels.
 * @param {number} referenceY - The parent's y position on screen, in pixels.
 * @param {ValueInterface} scale - The current zoom scale.
 * @param {number} width - The viewport width, in pixels.
 * @param {number} height - The viewport height, in pixels.
 *
 * @example
 * ```ts
 * space.beginPath();
 * traceOrbit(space, body.orbit, referenceX, referenceY, SCALE, canvas.width, canvas.height);
 * space.stroke();
 * ```
 */
export const traceOrbit = (
  space: CanvasRenderingContext2D,
  orbit: OrbitInterface,
  referenceX: number,
  referenceY: number,
  scale: ValueInterface,
  width: number,
  height: number
): void => {
  const a = convertDistanceUnit(orbit.a, 'au').value;
  const { e } = orbit;
  const b = a * Math.sqrt(1 - e ** 2);
  const focusOffset = e * a;
  const pxPerAu = AU_IN_PX * scale.value;
  const rect: RectType = {
    left: -MARGIN_PX,
    top: -MARGIN_PX,
    right: width + MARGIN_PX,
    bottom: height + MARGIN_PX
  };
  const pointAt = (theta: number): PointType => [
    referenceX + (a * Math.cos(theta) - focusOffset) * pxPerAu,
    referenceY + b * Math.sin(theta) * pxPerAu
  ];

  let last: PointType | null = null;

  const emit = (p0: PointType, p1: PointType) => {
    const clipped = clipSegment(p0, p1, rect);

    if (!clipped) {
      last = null;

      return;
    }

    const [c0, c1] = clipped;

    if (
      !last ||
      Math.abs(last[0] - c0[0]) > 0.01 ||
      Math.abs(last[1] - c0[1]) > 0.01
    ) {
      space.moveTo(c0[0], c0[1]);
    }

    space.lineTo(c1[0], c1[1]);
    // Continue the line only when the segment wasn't cut short at its end
    last = c1[0] === p1[0] && c1[1] === p1[1] ? c1 : null;
  };
  const refine = (
    t0: number,
    p0: PointType,
    t1: number,
    p1: PointType,
    depth: number
  ) => {
    const tm = (t0 + t1) / 2;
    const pm = pointAt(tm);
    // How far the true ellipse bulges away from the straight segment
    const deviation = Math.hypot(
      pm[0] - (p0[0] + p1[0]) / 2,
      pm[1] - (p0[1] + p1[1]) / 2
    );
    const pad = 2 * deviation;
    const minX = Math.min(p0[0], p1[0], pm[0]) - pad;
    const maxX = Math.max(p0[0], p1[0], pm[0]) + pad;
    const minY = Math.min(p0[1], p1[1], pm[1]) - pad;
    const maxY = Math.max(p0[1], p1[1], pm[1]) + pad;

    // This part of the orbit can't reach the viewport
    if (
      maxX < rect.left ||
      minX > rect.right ||
      maxY < rect.top ||
      minY > rect.bottom
    ) {
      last = null;

      return;
    }

    if (deviation <= TOLERANCE_PX || depth >= MAX_DEPTH) {
      emit(p0, pm);
      emit(pm, p1);

      return;
    }

    refine(t0, p0, tm, pm, depth + 1);
    refine(tm, pm, t1, p1, depth + 1);
  };
  const step = TWO_PI / INITIAL_SEGMENTS;

  let previous = pointAt(0);

  for (let i = 1; i <= INITIAL_SEGMENTS; i++) {
    const theta = i === INITIAL_SEGMENTS ? TWO_PI : i * step;
    const point = pointAt(theta);

    refine((i - 1) * step, previous, theta, point, 0);
    previous = point;
  }
};
