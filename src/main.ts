import { DOMContentLoaded } from './lib/spa/utils/dom-content-loaded';

import './styles/main.css';

// Events that happens after DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', DOMContentLoaded);
} else {
  // `DOMContentLoaded` already fired
  DOMContentLoaded();
}

export * from './features/canvas/config/ui';

export * from './features/canvas/config/hud';

export * from './features/canvas/config/time-step/generate-time-step';

export * from './features/canvas/config/time-step';

export * from './features/canvas/config/camera';

export * from './features/canvas/config/camera/get-reference';

export * from './features/canvas/setup-canvas';

export * from './features/ui/update-scale-display';

export * from './features/ui/update-zoom';

export * from './features/ui/update-simulation-date';

export * from './features/ui/update-coordinates';

export * from './features/ui/setup-UI';

export * from './features/arrows/draw-arrowheads';

export * from './features/arrows/utils/draw-arrow';

export * from './features/arrows/utils/get-angle-to-viewport';

export * from './features/arrows/utils/is-off-screen';

export * from './features/labels/draw';

export * from './features/labels/draw-galaxy-label';

export * from './features/minimap/initialize-minimap';

export * from './features/minimap/update-minimap';

export * from './features/celestial-bodies/orbits/compute';

export * from './features/celestial-bodies/orbits/update';

export * from './features/celestial-bodies/orbits/draw';

export * from './features/celestial-bodies/draw-celestial-bodies';

export * from './features/celestial-bodies/asteroids/draw-belts';

export * from './features/celestial-bodies/draw-galaxy';

export * from './features/celestial-bodies/utils/update-position';

export * from './features/celestial-bodies/utils/precompute-initial-angles';

export * from './features/celestial-bodies/utils/update-positions';

export * from './features/celestial-bodies/utils/get-body-position';

export * from './features/starfield/initialize-starfield';

export * from './features/starfield/draw-starfield';

export * from './features/starfield/config';

export * from './features/starfield/generate-star-field';

export * from './features/starfield/generate-starfield-bitmap';

export * from './components/actions/Button';

export * from './components/ToggleBox';

export * from './components/Checkbox';

export * from './components/Label';

export * from './types/celestial-bodies';

export * from './types/native';

export * from './types/comets';

export * from './types/stars';

export * from './types/temporal';

export * from './types/asteroid-belts';

export * from './types/debounce';

export * from './types/options';

export * from './types/planets';

export * from './types/galaxies';

export * from './types/distance';

export * from './types/moons';

export * from './lib/spa/utils/dom-content-loaded';

export * from './lib/math/solve-kepler';

export * from './lib/math/compute-mean-anomaly';

export * from './lib/math/eccentric-to-true-anomaly';

export * from './lib/math/compute-angle';

export * from './lib/math/wrap-angle';

export * from './lib/math/true-anomaly-to-mean-anomaly';

export * from './datasets/comets';

export * from './datasets/stars';

export * from './datasets/asteroid-belts';

export * from './datasets/planets';

export * from './datasets/galaxies';

export * from './datasets/moons';

export * from './datasets/systems';

export * from './config/constants';

export * from './config/setup-app';

export * from './config/set-UI-options';

export * from './utils/offset/get-parent-body-offset';

export * from './utils/offset/normalize-parent-offset-prev';

export * from './utils/offset/normalize-parent-offset';

export * from './utils/scale/calculate-scale';

export * from './utils/wait-for';

export * from './utils/distance/convert-distance';

export * from './utils/distance/distance-to-pixels';

export * from './utils/distance/normalize-distance';

export * from './utils/distance/pixels-to-distance';

export * from './utils/throttle';

export * from './utils/event-handlers';

export * from './utils/cx';

export * from './utils/unique-ID';

export * from './utils/debounce';

export * from './utils/temporal/convert-temporal-unit';

export * from './utils/draw';

export * from './utils/wait-for-frame';
