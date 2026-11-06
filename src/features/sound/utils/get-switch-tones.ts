/** One note of a switch sound, timed from the moment of the switch. */
export type SwitchToneType = {
  /** Pitch, in hertz. */
  frequency: number;
  /** When the note starts, in seconds after the switch. */
  start: number;
  /** How long the note sounds, in seconds. */
  duration: number;
};

/** The two pitches a switch sound moves between, a fifth apart. */
const LOW = 660;
const HIGH = 990;

/**
 * The notes of the sound a switch makes: two short notes, rising when it is
 * switched on and falling when it is switched off, like a console switch.
 *
 * @param {boolean} on - Whether the switch was turned on.
 * @returns {SwitchToneType[]} The notes, in the order they play.
 *
 * @example
 * ```ts
 * getSwitchTones(true); // 660 Hz, then 990 Hz
 * ```
 */
export const getSwitchTones = (on: boolean): SwitchToneType[] => {
  const [first, second] = on ? [LOW, HIGH] : [HIGH, LOW];

  return [
    { frequency: first, start: 0, duration: 0.05 },
    { frequency: second, start: 0.055, duration: 0.07 }
  ];
};
