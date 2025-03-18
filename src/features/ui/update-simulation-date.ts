export const updateSimulationDate = (
  simDateDisplayElement: HTMLElement | null,
  SIMULATION_DATE: Date
) => {
  if (!simDateDisplayElement) return;

  simDateDisplayElement.textContent =
    SIMULATION_DATE.toLocaleDateString('no-NB');
};
