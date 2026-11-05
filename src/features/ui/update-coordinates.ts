import { ValueInterface } from '@interstellar-tools/types';

import { normalizeDistance } from '../../utils/distance/normalize-distance';
import { pixelsToDistance } from '../../utils/distance/pixels-to-distance';

export const updateCoordinates = (
  scale: ValueInterface,
  offsetX: number,
  offsetY: number
) => {
  const xElement = document.getElementById('coordX');
  const yElement = document.getElementById('coordY');

  if (!xElement || !yElement) return;

  const readableX = normalizeDistance(pixelsToDistance(offsetX, scale));
  const readableY = normalizeDistance(pixelsToDistance(offsetY, scale));

  xElement.textContent = `${readableX.value} ${readableX.unit}`;
  yElement.textContent = `${readableY.value} ${readableY.unit}`;
};
