import { ValueInterface } from '../../types/distance';
import { normalizeDistance } from '../../utils/distance/normalize-distance';
import { pixelsToDistance } from '../../utils/distance/pixels-to-distance';

export const updateCoordinates = (
  scale: ValueInterface,
  offsetX: number,
  offsetY: number
) => {
  const coordElement = document.getElementById(
    'centerCoords'
  ) as HTMLSpanElement;
  const xAU = pixelsToDistance(offsetX, scale);
  const yAU = pixelsToDistance(offsetY, scale);
  const readableX = normalizeDistance(xAU);
  const readableY = normalizeDistance(yAU);

  coordElement.innerHTML = `
  <dt class="int">X</dt>
        <dd class="int">${readableX.value} ${readableX.unit}</dd>
  <dt class="int">Y</dt>
        <dd class="int">${readableY.value} ${readableY.unit}</dd>
        `;
};
