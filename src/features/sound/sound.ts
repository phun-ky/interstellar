import { getSwitchTones } from './utils/get-switch-tones';

/** The background sound, relative to the site: Opus, and AAC for browsers without Opus. */
const AMBIENCE_FILES = {
  opus: 'audio/ambience.webm',
  aac: 'audio/ambience.m4a'
} as const;
/** How loud the background sound plays, from 0 to 1. */
const AMBIENCE_VOLUME = 0.5;
/** How loud a switch sound plays, from 0 to 1: a quiet click under the ambience. */
const SWITCH_VOLUME = 0.08;
/** How long the click at the start of a switch sound lasts, in seconds. */
const CLICK_DURATION = 0.004;
/**
 * Plays the sound of a switch: a short click, then two notes that rise when
 * it is turned on and fall when it is turned off. Synthesised, so nothing is
 * loaded.
 *
 * @param {AudioContext} context - The page's audio context.
 * @param {boolean} on - Whether the switch was turned on.
 */
const playSwitch = (context: AudioContext, on: boolean): void => {
  const now = context.currentTime;
  const output = context.createGain();

  output.gain.value = SWITCH_VOLUME;
  output.connect(context.destination);

  // The click: a burst of noise that dies away
  const length = Math.ceil(context.sampleRate * CLICK_DURATION);
  const noise = context.createBuffer(1, length, context.sampleRate);
  const samples = noise.getChannelData(0);

  for (let i = 0; i < length; i++) {
    samples[i] = (Math.random() * 2 - 1) * (1 - i / length);
  }

  const click = context.createBufferSource();

  click.buffer = noise;
  click.connect(output);
  click.start(now);

  for (const { frequency, start, duration } of getSwitchTones(on)) {
    const at = now + start;
    const note = context.createOscillator();
    const envelope = context.createGain();

    note.type = 'triangle';
    note.frequency.value = frequency;
    envelope.gain.setValueAtTime(0, at);
    envelope.gain.linearRampToValueAtTime(1, at + 0.005);
    envelope.gain.exponentialRampToValueAtTime(0.001, at + duration);
    note.connect(envelope).connect(output);
    note.start(at);
    note.stop(at + duration + 0.01);
  }
};
/**
 * The looping background sound, as an `<audio id="ambience">` at the end of
 * the page: Opus where the browser plays it, AAC elsewhere. Made the first
 * time sound is turned on, so nobody who leaves it off downloads it.
 *
 * @param {Document} root - The document to add it to.
 * @returns {HTMLAudioElement} The audio element.
 */
const createAmbience = (root: Document): HTMLAudioElement => {
  const audio = root.createElement('audio');
  const opus = audio.canPlayType('audio/webm; codecs="opus"') !== '';

  audio.id = 'ambience';
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = AMBIENCE_VOLUME;
  audio.src =
    import.meta.env.BASE_URL +
    (opus ? AMBIENCE_FILES.opus : AMBIENCE_FILES.aac);
  root.body.append(audio);

  return audio;
};

/**
 * Sets up the Sound buttons: the one in the header on wide screens and the
 * one in the bottom bar on narrow screens, which stay in step through their
 * `aria-pressed` and on or off text.
 *
 * Sound is off on every visit and nothing is remembered. Turning it on plays
 * the ambience on a loop; while it is on, every Systems toggle, and the Sound
 * button itself, makes a switch sound as it is flicked. Turning it off
 * silences the page. The ambience pauses while the page is hidden.
 *
 * @param {Document} [root=document] - The document holding the buttons.
 *
 * @example
 * ```ts
 * setupSound();
 * ```
 */
export const setupSound = (root: Document = document): void => {
  const buttons = [
    ...root.querySelectorAll<HTMLButtonElement>('button[data-sound]')
  ];

  let enabled = false;
  let context: AudioContext | null = null;
  let ambience: HTMLAudioElement | null = null;

  const playAmbience = () => {
    // A browser may refuse, or fail to load the file; the switch sounds still work
    ambience?.play().catch(() => undefined);
  };
  const setEnabled = (on: boolean) => {
    enabled = on;
    context ??= new AudioContext();

    if (context.state === 'suspended') void context.resume();

    playSwitch(context, on);
    ambience ??= createAmbience(root);

    if (on) playAmbience();
    else ambience.pause();

    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(on));

      const state = button.querySelector('.mc-sound-state');

      if (state) state.textContent = on ? 'on' : 'off';
    }
  };

  for (const button of buttons) {
    button.addEventListener('click', () => setEnabled(!enabled));
  }

  root.getElementById('options')?.addEventListener('change', ({ target }) => {
    if (
      enabled &&
      context &&
      target instanceof HTMLInputElement &&
      target.type === 'checkbox'
    ) {
      playSwitch(context, target.checked);
    }
  });

  root.addEventListener('visibilitychange', () => {
    if (!enabled || !ambience) return;

    if (root.hidden) ambience.pause();
    else playAmbience();
  });
};
