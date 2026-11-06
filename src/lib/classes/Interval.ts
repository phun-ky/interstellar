/**
 * A utility class to create a controllable interval timer.
 *
 * ## **Functionality:**
 * - Provides `start`, `pause`, `resume`, and `clear` controls for intervals.
 * - Stores the callback and delay to allow restarting.
 * - Uses `setInterval` under the hood.
 *
 * @example
 * ```ts
 * const interval = new Interval(() => {
 *   console.log('Running every 1s');
 * }, 1000);
 *
 * interval.start();  // Starts the interval
 * interval.pause();  // Pauses the interval
 * interval.resume(); // Resumes the interval
 * interval.clear();  // Clears the interval completely
 * ```
 */
export class Interval {
  /** When the current tick started, from `performance.now()`. */
  callbackStartTime = 0;
  remaining = 0;
  /** Whether the interval is currently paused. */
  paused = false;

  /** Internal timer ID returned by setInterval. */
  timerId!: number;

  /** Callback function to execute on each interval tick. */
  private _callback: () => void;

  /** Delay in milliseconds between each tick. */
  private _delay: number;

  /**
   * Constructs a new Interval instance.
   * @param callback - Function to execute on each tick.
   * @param delay - Delay in milliseconds.
   */
  constructor(callback: () => void, delay: number) {
    this._callback = callback;
    this._delay = delay;
  }

  /**
   * Pauses the interval execution without clearing stored settings.
   */
  pause() {
    if (!this.paused) {
      this.clear();
      this.remaining = performance.now() - this.callbackStartTime;
      this.paused = true;
    }
  }

  /**
   * Resumes the interval from paused state.
   */
  resume() {
    if (this.paused) {
      if (this.remaining) {
        setTimeout(() => {
          this.run();
          this.paused = false;
          this.start();
        }, this.remaining);
      } else {
        this.paused = false;
        this.start();
      }
    }
  }

  /**
   * Clears the current interval without resetting the instance state.
   */
  clear() {
    clearInterval(this.timerId);
  }

  /**
   * Starts or restarts the interval timer.
   */
  start() {
    this.clear();
    this.timerId = window.setInterval(() => {
      this.run();
    }, this._delay);
  }

  /**
   * Executes the stored callback.
   */
  run() {
    this.callbackStartTime = performance.now();
    this._callback();
  }
}
