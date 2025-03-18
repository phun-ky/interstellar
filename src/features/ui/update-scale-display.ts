import { AU_IN_KM, AU_IN_PX, LY_IN_AU } from '../../config/constants';
import {
  DistanceInterface,
  UnitType,
  ValueInterface
} from '../../types/distance';
import { convertDistance } from '../../utils/distance/convert-distance';

export const updateScaleDisplay = (el: HTMLElement, scale: ValueInterface) => {
  // Convert 1 pixel to real-world distance in AU
  const distanceInAU: DistanceInterface = {
    value: 1 / (AU_IN_PX * scale.value),
    unit: 'AU'
  };

  let targetUnit: UnitType = 'ly';

  if (distanceInAU.value >= LY_IN_AU) targetUnit = 'ly';
  else if (distanceInAU.value >= 1) targetUnit = 'AU';
  else if (distanceInAU.value >= 1 / AU_IN_KM) targetUnit = 'km';
  else targetUnit = 'm';

  // Convert distance to appropriate unit
  const convertedDistance = convertDistance(distanceInAU, targetUnit);
  // Update scale display with proper formatting
  const scaleRatio = `1:${convertedDistance.value.toFixed(2)} ${convertedDistance.unit.toUpperCase()}`;

  el.textContent = `${scaleRatio}`;
};
