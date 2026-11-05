import { AU_PER_LY, KM_PER_AU } from '@interstellar-tools/constants';
import { convertDistanceUnit } from '@interstellar-tools/equations';
import {
  DistanceInterface,
  DistanceUnitType,
  ValueInterface
} from '@interstellar-tools/types';

import { AU_IN_PX } from '../../config/constants';

/** Short numbers for the scale readout, e.g. 8 906 672.63 → "8.91M". */
const SCALE_NUMBER_FORMAT = new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 2
});

export const updateScaleDisplay = (el: HTMLElement, scale: ValueInterface) => {
  // Convert 1 pixel to real-world distance in AU
  const distanceInAU: DistanceInterface = {
    value: 1 / (AU_IN_PX * scale.value),
    unit: 'au'
  };

  let targetUnit: DistanceUnitType;

  if (distanceInAU.value >= AU_PER_LY) targetUnit = 'ly';
  else if (distanceInAU.value >= 1) targetUnit = 'au';
  else if (distanceInAU.value >= 1 / KM_PER_AU) targetUnit = 'km';
  else targetUnit = 'm';

  // Convert distance to appropriate unit
  const convertedDistance = convertDistanceUnit(distanceInAU, targetUnit);
  // Update scale display with proper formatting
  const value = SCALE_NUMBER_FORMAT.format(convertedDistance.value);
  const scaleRatio = `1:${value} ${convertedDistance.unit.toUpperCase()}`;

  el.textContent = `${scaleRatio}`;
};
