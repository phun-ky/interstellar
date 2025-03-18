import { ZOOM_FACTOR } from '../../config/constants';
import { ValueInterface } from '../../types/distance';

export const updateZoom = (scale: ValueInterface) => {
  const zoomElement = document.getElementById('zoomLevel') as HTMLSpanElement;
  const zoomLevel = Math.log(scale.value) / Math.log(ZOOM_FACTOR);

  zoomElement.textContent = `${zoomLevel.toFixed(2)}`;
};
