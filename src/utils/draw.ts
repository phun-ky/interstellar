/* eslint-disable import/no-unused-modules */
import {
  MAX_CELESTIAL_BODY_SIZE,
  MAX_MOON_SIZE,
  MAX_PLANET_SIZE,
  MAX_STAR_SIZE,
  THRESHOLD_ASTEROID_BELT_RENDER,
  THRESHOLD_COMET_LABEL,
  THRESHOLD_COMET_RENDER,
  THRESHOLD_MOON_RENDER,
  THRESHOLD_PLANET_LABEL,
  THRESHOLD_PLANET_RENDER
} from '../config/constants';
import { ASTEROID_BELTS } from '../datasets/asteroid-belts';
import { drawDirectionalArrows } from '../features/arrows/draw-arrowheads';
import { OPTIONS_UI } from '../features/canvas/config/hud';
import { drawBelts } from '../features/celestial-bodies/asteroids/draw-belts';
import { drawCelestialBodies } from '../features/celestial-bodies/draw-celestial-bodies';
import { drawGalaxy } from '../features/celestial-bodies/draw-galaxy';
import { drawOrbits } from '../features/celestial-bodies/orbits/draw';
import { getBodyPosition } from '../features/celestial-bodies/utils/get-body-position';
import { drawLabels } from '../features/labels/draw';
import { drawGalaxyLabel } from '../features/labels/draw-galaxy-label';
import { drawStarfield } from '../features/starfield/draw-starfield';
import { initializeStarfield } from '../features/starfield/initialize-starfield';
import { CometsType } from '../types/comets';
import { ValueInterface } from '../types/distance';
import { GalaxiesType } from '../types/galaxies';
import { MoonsType } from '../types/moons';
import { PlanetsType } from '../types/planets';
import { StarsType } from '../types/stars';

import { distanceToPixels } from './distance/distance-to-pixels';
import { getParentBodyOffset } from './offset/get-parent-body-offset';
import { normalizeParentOffset } from './offset/normalize-parent-offset';

export type DrawPropsType = {
  space: CanvasRenderingContext2D;
  stars: StarsType;
  moons: MoonsType;
  galaxies: GalaxiesType;
  planets: PlanetsType;
  comets: CometsType;
  scale: ValueInterface;
  referenceX: number;
  referenceY: number;
  canvasWidth: number;
  canvasHeight: number;
  offsetX: ValueInterface;
  offsetY: ValueInterface;
};

/**
 * **Draws the entire celestial simulation** onto the canvas.
 *
 * **Functionality:**
 * - Clears the canvas and renders the **background**.
 * - Initializes and draws the **starfield**.
 * - Centers the viewport on a locked celestial body (if any).
 * - Draws **galaxies, stars, planets, moons, asteroids, and comets** based on zoom level.
 * - Dynamically toggles **orbits, labels, and directional arrows**.
 *
 * **Render Layers (Ordered):**
 * 1. **Background & Starfield**
 * 2. **Galaxy & Labels**
 * 3. **Stars & Orbits**
 * 4. **Planets & Asteroid Belts**
 * 5. **Comets & Moons**
 * 6. **Labels & Directional Arrows**
 *
 * @param {DrawPropsType} props - Rendering properties including celestial bodies, scaling, and offsets.
 * @returns {Promise<void>} Asynchronous function to handle initialization.
 *
 * @example
 * ```ts
 * await draw({
 *   space: ctx,
 *   stars,
 *   moons,
 *   galaxies,
 *   planets,
 *   comets,
 *   scale: { value: 50 },
 *   referenceX: 500,
 *   referenceY: 500,
 *   canvasWidth: 1024,
 *   canvasHeight: 768,
 *   offsetX: { value: 0 },
 *   offsetY: { value: 0 }
 * });
 * ```
 */
export const draw = async (props: DrawPropsType) => {
  const {
    space,
    stars,
    moons,
    planets,
    galaxies,
    comets,
    scale,
    referenceX,
    referenceY,
    offsetX,
    offsetY,
    canvasWidth,
    canvasHeight
  } = props;

  // Clear the canvas for each update
  space.clearRect(0, 0, canvasWidth, canvasHeight);
  space.fillStyle = '#060909';
  space.fillRect(0, 0, canvasWidth, canvasHeight);

  await initializeStarfield(canvasWidth, canvasHeight, scale);
  drawStarfield(space, canvasWidth, canvasHeight);

  if (globalThis.LOCKED_CELESTIAL_BODY !== null) {
    const { x, y } = getBodyPosition(globalThis.LOCKED_CELESTIAL_BODY);

    if (x && y) {
      const xPX = distanceToPixels(x, scale);
      const yPX = distanceToPixels(y, scale);
      const { system, category } = globalThis.LOCKED_CELESTIAL_BODY;
      const celestialBodiesToUse =
        category === 'planet'
          ? stars
          : category === 'natural satellite'
            ? planets
            : [];
      const { parentOffsetX, parentOffsetY } = getParentBodyOffset(
        system,
        category,
        celestialBodiesToUse,
        scale
      );

      // Adjust offsets to center the locked body in the viewport
      offsetX.value = normalizeParentOffset(xPX, parentOffsetX);
      offsetY.value = normalizeParentOffset(yPX, parentOffsetY);
    }
  }

  const sun = stars.find((star) => star.name === 'Sun'); // Find the Sun

  // draw galaxy center
  drawGalaxy({
    galaxy: galaxies[0],
    scale,
    referenceX,
    referenceY,
    space,
    maxSize: MAX_CELESTIAL_BODY_SIZE
  });

  drawGalaxyLabel({
    scale,
    space,
    referenceX,
    referenceY,
    galaxy: galaxies[0]
  });

  // Draw star orbits if toggled on
  drawOrbits({
    celestialBodies: stars,
    toggled: OPTIONS_UI.trajectory,
    space,
    referenceX: canvasWidth / 2 + offsetX.value,
    referenceY: canvasHeight / 2 + offsetY.value,
    scale
  });

  if (sun) {
    const sunPosition = getBodyPosition(sun);

    if (sunPosition.x && sunPosition.y) {
      const sunXPX = distanceToPixels(sunPosition.x, scale);
      const sunYPX = distanceToPixels(sunPosition.y, scale);
      const sunReferenceX = canvasWidth / 2 + offsetX.value + sunXPX;
      const sunReferenceY = canvasHeight / 2 + offsetY.value + sunYPX;

      if (
        scale.value > THRESHOLD_ASTEROID_BELT_RENDER &&
        OPTIONS_UI.asteroidBelts
      ) {
        drawBelts({
          space,
          centerX: sunReferenceX,
          centerY: sunReferenceY,
          scale,
          asteroidBelts: ASTEROID_BELTS
        });
      }

      if (scale.value > THRESHOLD_COMET_RENDER && OPTIONS_UI.comets) {
        drawOrbits({
          celestialBodies: comets,
          toggled: OPTIONS_UI.trajectory,
          space,
          referenceX: sunReferenceX,
          referenceY: sunReferenceY,
          scale
        });

        // Draw comets
        drawCelestialBodies({
          space,
          referenceX: sunReferenceX,
          referenceY: sunReferenceY,
          scale,
          celestialBodies: comets,
          maxSize: MAX_PLANET_SIZE
        });

        if (scale.value > THRESHOLD_COMET_LABEL && OPTIONS_UI.labels) {
          drawLabels({
            celestialBodies: comets,
            space,
            scale,
            referenceX: sunReferenceX,
            referenceY: sunReferenceY
          });
        }
      }

      if (scale.value > THRESHOLD_PLANET_RENDER) {
        drawOrbits({
          celestialBodies: planets,
          toggled: OPTIONS_UI.trajectory,
          space,
          referenceX: sunReferenceX,
          referenceY: sunReferenceY,
          scale
        });

        // Draw planets
        drawCelestialBodies({
          space,
          referenceX: sunReferenceX,
          referenceY: sunReferenceY,
          scale,
          celestialBodies: planets,
          maxSize: MAX_PLANET_SIZE
        });
      }

      if (scale.value > THRESHOLD_PLANET_LABEL && OPTIONS_UI.labels) {
        drawLabels({
          celestialBodies: planets,
          space,
          scale,
          referenceX: sunReferenceX,
          referenceY: sunReferenceY
        });
      }

      if (scale.value > THRESHOLD_PLANET_RENDER && OPTIONS_UI.arrowHeads) {
        drawDirectionalArrows({
          space,
          referenceX: sunReferenceX,
          referenceY: sunReferenceY,
          canvasWidth,
          canvasHeight,
          type: 'planets'
        });
      }

      if (
        scale.value > THRESHOLD_COMET_RENDER &&
        OPTIONS_UI.comets &&
        OPTIONS_UI.arrowHeads
      ) {
        drawDirectionalArrows({
          space,
          referenceX: sunReferenceX,
          referenceY: sunReferenceY,
          canvasWidth,
          canvasHeight,
          type: 'comets'
        });
      }

      planets.forEach((planet) => {
        if (OPTIONS_UI.moons) {
          const planetPosition = getBodyPosition(planet);

          if (planetPosition.x && planetPosition.y) {
            const planetXPX = distanceToPixels(planetPosition.x, scale);
            const planetYPX = distanceToPixels(planetPosition.y, scale);
            const planetReferenceX = sunReferenceX + planetXPX;
            const planetReferenceY = sunReferenceY + planetYPX;

            if (scale.value > THRESHOLD_MOON_RENDER) {
              drawOrbits({
                celestialBodies: moons.filter(
                  (moon) =>
                    moon.system.toLowerCase() === planet.name.toLowerCase()
                ),
                toggled: OPTIONS_UI.trajectory,
                space,
                referenceX: planetReferenceX,
                referenceY: planetReferenceY,
                scale
              });

              // Draw moons for this planet
              drawCelestialBodies({
                space,
                referenceX: planetReferenceX,
                referenceY: planetReferenceY,
                scale,
                celestialBodies: moons.filter(
                  (moon) =>
                    moon.system.toLowerCase() === planet.name.toLowerCase()
                ),
                maxSize: MAX_MOON_SIZE
              });

              if (OPTIONS_UI.arrowHeads) {
                drawDirectionalArrows({
                  space,
                  referenceX: planetReferenceX,
                  referenceY: planetReferenceY,
                  canvasWidth,
                  canvasHeight,
                  type: 'moons',
                  system: planet.name
                });
              }
            }

            if (scale.value > THRESHOLD_MOON_RENDER && OPTIONS_UI.labels) {
              drawLabels({
                celestialBodies: moons.filter(
                  (moon) =>
                    moon.system.toLowerCase() === planet.name.toLowerCase()
                ),
                space,
                scale,
                referenceX: planetReferenceX,
                referenceY: planetReferenceY
              });
            }
          }
        }
      });
    }
  }

  // Draw stars
  drawCelestialBodies({
    space,
    referenceX: canvasWidth / 2 + offsetX.value,
    referenceY: canvasHeight / 2 + offsetY.value,
    scale,
    celestialBodies: stars,
    maxSize: MAX_STAR_SIZE
  });

  // Draw arrowheads if toggled on
  if (OPTIONS_UI.arrowHeads) {
    drawDirectionalArrows({
      space,
      referenceX: canvasWidth / 2 + offsetX.value,
      referenceY: canvasHeight / 2 + offsetY.value,
      canvasWidth,
      canvasHeight
    });
  }

  if (OPTIONS_UI.labels) {
    drawLabels({
      celestialBodies: stars,
      space,
      scale,
      referenceX: canvasWidth / 2 + offsetX.value,
      referenceY: canvasHeight / 2 + offsetY.value
    });
  }
};
