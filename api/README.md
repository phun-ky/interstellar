<div><img alt="SPECCER logo" src="https://raw.githubusercontent.com/phun-ky/interstellar/main/public/interstellar-header.png" style="max-height:120px;"/></div>

# Interstellar API documentation

---

> Last updated 2025-03-20T15:06:51.986Z

## Modules

- [App](App.md)
- [components/actions/Button](components/actions/Button.md)
- [components/Checkbox](components/Checkbox.md)
- [components/Label](components/Label.md)
- [components/ToggleBox](components/ToggleBox.md)
- [config/constants](config/constants.md)
- [config/set-UI-options](config/set-UI-options.md)
- [config/setup-app](config/setup-app.md)
- [datasets/asteroid-belts](datasets/asteroid-belts.md)
- [datasets/comets](datasets/comets.md)
- [datasets/galaxies](datasets/galaxies.md)
- [datasets/moons](datasets/moons.md)
- [datasets/planets](datasets/planets.md)
- [datasets/stars](datasets/stars.md)
- [datasets/systems](datasets/systems.md)
- [features/arrows/draw-arrowheads](features/arrows/draw-arrowheads.md)
- [features/arrows/utils/draw-arrow](features/arrows/utils/draw-arrow.md)
- [features/arrows/utils/get-angle-to-viewport](features/arrows/utils/get-angle-to-viewport.md)
- [features/arrows/utils/is-off-screen](features/arrows/utils/is-off-screen.md)
- [features/canvas/config/camera](features/canvas/config/camera.md)
- [features/canvas/config/camera/get-reference](features/canvas/config/camera/get-reference.md)
- [features/canvas/config/hud](features/canvas/config/hud.md)
- [features/canvas/config/time-step](features/canvas/config/time-step.md)
- [features/canvas/config/time-step/generate-time-step](features/canvas/config/time-step/generate-time-step.md)
- [features/canvas/config/ui](features/canvas/config/ui.md)
- [features/canvas/setup-canvas](features/canvas/setup-canvas.md)
- [features/celestial-bodies/asteroids/draw-belts](features/celestial-bodies/asteroids/draw-belts.md)
- [features/celestial-bodies/draw-celestial-bodies](features/celestial-bodies/draw-celestial-bodies.md)
- [features/celestial-bodies/draw-galaxy](features/celestial-bodies/draw-galaxy.md)
- [features/celestial-bodies/orbits/compute](features/celestial-bodies/orbits/compute.md)
- [features/celestial-bodies/orbits/draw](features/celestial-bodies/orbits/draw.md)
- [features/celestial-bodies/orbits/update](features/celestial-bodies/orbits/update.md)
- [features/celestial-bodies/utils/get-body-position](features/celestial-bodies/utils/get-body-position.md)
- [features/celestial-bodies/utils/precompute-initial-angles](features/celestial-bodies/utils/precompute-initial-angles.md)
- [features/celestial-bodies/utils/update-position](features/celestial-bodies/utils/update-position.md)
- [features/celestial-bodies/utils/update-positions](features/celestial-bodies/utils/update-positions.md)
- [features/labels/draw](features/labels/draw.md)
- [features/labels/draw-galaxy-label](features/labels/draw-galaxy-label.md)
- [features/minimap/initialize-minimap](features/minimap/initialize-minimap.md)
- [features/minimap/update-minimap](features/minimap/update-minimap.md)
- [features/starfield/config](features/starfield/config.md)
- [features/starfield/draw-starfield](features/starfield/draw-starfield.md)
- [features/starfield/generate-star-field](features/starfield/generate-star-field.md)
- [features/starfield/generate-starfield-bitmap](features/starfield/generate-starfield-bitmap.md)
- [features/starfield/initialize-starfield](features/starfield/initialize-starfield.md)
- [features/ui/setup-UI](features/ui/setup-UI.md)
- [features/ui/update-coordinates](features/ui/update-coordinates.md)
- [features/ui/update-scale-display](features/ui/update-scale-display.md)
- [features/ui/update-simulation-date](features/ui/update-simulation-date.md)
- [features/ui/update-zoom](features/ui/update-zoom.md)
- [lib/math/compute-angle](lib/math/compute-angle.md)
- [lib/math/compute-mean-anomaly](lib/math/compute-mean-anomaly.md)
- [lib/math/eccentric-to-true-anomaly](lib/math/eccentric-to-true-anomaly.md)
- [lib/math/solve-kepler](lib/math/solve-kepler.md)
- [lib/math/solve-kepler-bisection](lib/math/solve-kepler-bisection.md)
- [lib/math/solve-kepler-high-eccentricity](lib/math/solve-kepler-high-eccentricity.md)
- [lib/math/solve-kepler-newton-raphson](lib/math/solve-kepler-newton-raphson.md)
- [lib/math/true-anomaly-to-mean-anomaly](lib/math/true-anomaly-to-mean-anomaly.md)
- [lib/math/wrap-angle](lib/math/wrap-angle.md)
- [lib/spa/utils/dom-content-loaded](lib/spa/utils/dom-content-loaded.md)
- [main](main.md)
- [types/asteroid-belts](types/asteroid-belts.md)
- [types/celestial-bodies](types/celestial-bodies.md)
- [types/comets](types/comets.md)
- [types/debounce](types/debounce.md)
- [types/distance](types/distance.md)
- [types/galaxies](types/galaxies.md)
- [types/moons](types/moons.md)
- [types/native](types/native.md)
- [types/options](types/options.md)
- [types/planets](types/planets.md)
- [types/stars](types/stars.md)
- [types/systems](types/systems.md)
- [types/temporal](types/temporal.md)
- [utils/cx](utils/cx.md)
- [utils/debounce](utils/debounce.md)
- [utils/distance/convert-distance](utils/distance/convert-distance.md)
- [utils/distance/distance-to-pixels](utils/distance/distance-to-pixels.md)
- [utils/distance/normalize-distance](utils/distance/normalize-distance.md)
- [utils/distance/pixels-to-distance](utils/distance/pixels-to-distance.md)
- [utils/draw](utils/draw.md)
- [utils/event-handlers](utils/event-handlers.md)
- [utils/offset/get-parent-body-offset](utils/offset/get-parent-body-offset.md)
- [utils/offset/normalize-parent-offset](utils/offset/normalize-parent-offset.md)
- [utils/offset/normalize-parent-offset-prev](utils/offset/normalize-parent-offset-prev.md)
- [utils/scale/calculate-scale](utils/scale/calculate-scale.md)
- [utils/temporal/convert-temporal-unit](utils/temporal/convert-temporal-unit.md)
- [utils/throttle](utils/throttle.md)
- [utils/unique-ID](utils/unique-ID.md)
- [utils/wait-for](utils/wait-for.md)
- [utils/wait-for-frame](utils/wait-for-frame.md)

---

**Contributing**

Want to contribute? Please read the
[CONTRIBUTING.md](https://github.com/phun-ky/interstellar/blob/main/CONTRIBUTING.md)
and
[CODE_OF_CONDUCT.md](https://github.com/phun-ky/interstellar/blob/main/CODE_OF_CONDUCT.md)

**Sponsor me**

I'm an Open Source evangelist, creating stuff that does not exist yet to help
get rid of secondary activities and to enhance systems already in place, be it
documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to
maintain my projects, create new ones and contribute to the large community
we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

---

This project created by [Alexander Vassbotn Røyne-Helgesen](http://phun-ky.net)
is licensed under a
[GPL-3.0 License](https://choosealicense.com/licenses/gpl-3.0/).
