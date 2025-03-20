import { TWO_PI } from '../../config/constants';

const EPSILON = 1e-10; // Small threshold for floating-point drift
const LARGE_EPSILON = 1e-8; // Higher tolerance for large angles

export const wrapAngle = (angle: number) => {
  // Reduce angle while preserving sign
  angle = angle % TWO_PI;

  // Handle floating-point precision at ±2π
  if (Math.abs(angle - TWO_PI) < EPSILON) return 0;

  if (Math.abs(angle + TWO_PI) < EPSILON) return 0;

  if (
    Math.abs(angle - TWO_PI) < LARGE_EPSILON ||
    Math.abs(angle + TWO_PI) < LARGE_EPSILON
  )
    return 0;

  return angle;
};
