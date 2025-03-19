import { Button } from '../../components/actions/Button';
import { ToggleBox } from '../../components/ToggleBox';
import { PLANETS } from '../../datasets/planets';
import { STARS } from '../../datasets/stars';

export const setupUI = () => {
  const toggleTrajectoriesBox = ToggleBox({
    id: 'toggleTrajectory',
    checked: true,
    name: 'toggleTrajectory',
    label: 'Trajectories'
  });
  const toggleMoonsBox = ToggleBox({
    id: 'toggleMoons',
    checked: false,
    name: 'toggleMoons',
    label: 'Moons'
  });
  const toggleCometsBox = ToggleBox({
    id: 'toggleComets',
    checked: false,
    name: 'toggleComets',
    label: 'Comets'
  });
  const toggleLabelsBox = ToggleBox({
    id: 'toggleLabels',
    checked: true,
    name: 'toggleLabels',
    label: 'Labels'
  });
  const toggleArrowheadsBox = ToggleBox({
    id: 'toggleArrowheads',
    checked: true,
    name: 'toggleArrowheads',
    label: 'Arrows'
  });
  const toggleAsteroidBeltsBox = ToggleBox({
    id: 'toggleAsteroidBelts',
    checked: true,
    name: 'toggleAsteroidBelts',
    label: 'Asteroid Belts'
  });
  const pauseButton = Button({
    children: `<svg class="int pause" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M7 1H2v14h5V1ZM14 1H9v14h5V1Z"/></svg>
       <svg class="int play" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path fill="currentColor" d="M0 0v512l512-256z"/></svg>`,
    id: 'pause',
    type: 'button',
    className: 'pause-button'
  });
  const optionsElement = document.getElementById('options');

  if (optionsElement) {
    optionsElement.innerHTML = `
    ${toggleMoonsBox}
    ${toggleAsteroidBeltsBox}
    ${toggleCometsBox}
    ${toggleArrowheadsBox}
    ${toggleLabelsBox}
    <hr class="int"/>
    ${toggleTrajectoriesBox}
    <div class="int input-group">
        <label for="toggleTrajectoryType" class="int"
          >Type of trajectory display:</label
        >
        <select id="toggleTrajectoryType" class="int">
          <option value="trails">Trajectory Trails</option>
          <option value="orbits">Full Orbits</option>
        </select>
      </div>
      <hr class="int" />
      <div class="int input-group">
        <label for="speedMode" class="int">Speed Mode:</label>
        <select id="speedMode" class="int">
          <option class="int" value="realTime">Real-Time (60 FPS)</option>
          <option class="int" value="quarterFramePerDay">1 Frame = 0.25 Day</option>
          <option class="int" value="framePerDay">1 Frame = 1 Day</option>
          <option class="int" value="spedUp">Sped-Up Mode</option>
          <option class="int" value="insane">Insane Mode</option>
        </select>
      </div>

      <div class="int input-group" id="hud">
        <label for="lockOn" class="int">Lock on to Celestial Body:</label>
        <select id="lockOn" class="int">
          <option value="noLock">No Lock</option>
        </select>
      </div>
      ${pauseButton}
    `;
  }

  const lockOnDropdown = document.getElementById('lockOn') as HTMLSelectElement;

  [...STARS, ...PLANETS].forEach((star) => {
    const option = document.createElement('option');

    option.value = star.name;

    option.textContent = star.name;
    lockOnDropdown.appendChild(option);
  });
};
