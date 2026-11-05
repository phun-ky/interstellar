export const updateSimulationDate = (
  simDateDisplayElement: HTMLElement | null,
  SIMULATION_DATE: Date
) => {
  if (!simDateDisplayElement) return;

  const [date, time] = SIMULATION_DATE.toISOString().split('T');

  simDateDisplayElement.textContent = `${date} · ${time.slice(0, 5)} UTC`;
};
