/**
 * A utility class to simulate an interval using `requestAnimationFrame`.
 *
 * ## **Functionality:**
 * - Mimics `setInterval`, but synced to the **browser's rendering loop**.
 * - Uses `requestAnimationFrame` for smoother, frame-aware timing.
 * - Supports `start`, `pause`, `resume`, and `clear`.
 *
 * @example
 * ```ts
 * const interval = new RAFInterval(() => {
 *   console.log('Frame-aligned tick every ~1s');
 * }, 1000);
 *
 * interval.start();
 * interval.pause();
 * interval.resume();
 * interval.clear();
 * ```
 */
export class RAFInterval {
  /** Whether the interval is currently paused. */
  paused = false;

  /** Internal requestAnimationFrame ID. */
  frameId: number | null = null;

  /** Callback to invoke at each interval tick. */
  private _callback: () => void;

  /** Delay between executions in milliseconds. */
  private _delay: number;

  /** Last time the callback was called. */
  private _lastTime = 0;

  /**
   * Constructs a new RAFInterval instance.
   * @param callback - Function to invoke each interval.
   * @param delay - Interval duration in milliseconds.
   */
  constructor(callback: () => void, delay: number) {
    this._callback = callback;
    this._delay = delay;
  }

  /** Starts the animation loop and schedules the first tick. */
  start() {
    this.clear();
    this._lastTime = performance.now();
    this.loop(this._lastTime);
  }

  /** Pauses the interval without clearing the callback or delay. */
  pause() {
    if (!this.paused) {
      this.clear();
      this.paused = true;
    }
  }

  /** Resumes the interval after being paused. */
  resume() {
    if (this.paused) {
      this.paused = false;
      this._lastTime = performance.now();
      this.loop(this._lastTime);
    }
  }

  /** Cancels any scheduled animation frame. */
  clear() {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }

  /** Internal loop that checks time and runs the callback when needed. */
  private loop = (now: number) => {
    if (this.paused) return;

    const elapsed = now - this._lastTime;

    if (elapsed >= this._delay) {
      this._lastTime = now;
      this._callback();
    }

    this.frameId = requestAnimationFrame(this.loop);
  };
}
