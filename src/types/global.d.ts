import { Interval } from '../lib/classes/Interval';

import { CelestialBodyType } from './celestial-bodies';
import { Coordinates2DInterface } from './celestial-bodies/planets';
import { StarSystemInterface } from './celestial-bodies/stars';

/* eslint-disable no-var */
export {}; // Ensures this file is treated as a module

type NearestBodyType = Coordinates2DInterface & {
  name: string;
  category: string;
  system: string | StarSystemInterface | undefined;
};

type CanvasRectType = {
  width: number;
  height: number;
};

/**
 * Declares global variables and properties on `globalThis` for simulation state management.
 *
 * These declarations allow consistent access to simulation flags across modules,
 * such as whether the simulation is paused or which celestial bodies are currently visible.
 */
declare global {
  interface globalThis {
    /**
     * A set of celestial body names that are currently visible within the viewport.
     * Used for rendering optimizations and label management.
     */
    BODIES_IN_VIEWPORT: Set<string>;

    /**
     * Flag indicating whether the simulation is currently paused.
     * `true` = paused, `false` = running.
     */
    PAUSE: boolean;
    INTERVAL_IN_VIEWPORT: Interval;
    LOCKED_CELESTIAL_BODY: CelestialBodyType | null;
    TRAJECTORY_TYPE: 'orbits' | 'trails';
    TRAJECTORY_TRAILS: Record<string, Coordinates2DInterface[]>;
    IS_ZOOMING_OR_PANNING: boolean; // Initialize
    ZOOM_PAN_TIMEOUT: number; // For delaying reactivation
    NEAREST_BODIES: Record<string, NearestBodyType>;
    STARFIELD_BITMAP: ImageBitmap;
    LAST_CANVAS_SIZE: CanvasRectType;
  }

  /**
   * A set of celestial body names that are currently visible within the viewport.
   * Used for rendering optimizations and label management.
   */
  var BODIES_IN_VIEWPORT: Set<string>;
  /**
   * Flag indicating whether the simulation is currently paused.
   * `true` = paused, `false` = running.
   */
  var PAUSE: boolean;
  var INTERVAL_IN_VIEWPORT: Interval;
  var LOCKED_CELESTIAL_BODY: CelestialBodyType | null;
  var TRAJECTORY_TYPE: 'orbits' | 'trails';
  var TRAJECTORY_TRAILS: Record<string, Coordinates2DInterface[]>;
  var IS_ZOOMING_OR_PANNING: boolean; // Initialize
  var ZOOM_PAN_TIMEOUT: number; // For delaying reactivation
  var NEAREST_BODIES: Record<string, NearestBodyType>;
  var STARFIELD_BITMAP: ImageBitmap;
  var LAST_CANVAS_SIZE: CanvasRectType;
}
