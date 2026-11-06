import { expect, type Page, test } from '@playwright/test';

import { openApp, recordFrames, toggle } from './helpers';

declare global {
  interface Window {
    /** The pitch of every note the page has synthesised, in order. */
    __tones: number[];
  }
}

/** Records the pitch of every note the page synthesises. */
const recordTones = (page: Page) =>
  page.addInitScript(() => {
    window.__tones = [];

    const { start } = OscillatorNode.prototype;

    OscillatorNode.prototype.start = function (...args) {
      window.__tones.push(this.frequency.value);

      return start.apply(this, args);
    };
  });

/** The notes played since the last call. */
const takeTones = (page: Page): Promise<number[]> =>
  page.evaluate(() => window.__tones.splice(0));

const RISING = [660, 990];
const FALLING = [990, 660];

/** Whether the ambience is playing: started, not paused, and moving. */
const ambiencePlays = (page: Page) =>
  expect
    .poll(() =>
      page.evaluate(() => {
        const audio = document.getElementById(
          'ambience'
        ) as HTMLAudioElement | null;

        return !!audio && !audio.paused && audio.currentTime > 0;
      })
    )
    .toBe(true);

const audioRequests = (page: Page): string[] => {
  const urls: string[] = [];

  page.on('request', (request) => {
    if (request.url().includes('/audio/')) urls.push(request.url());
  });

  return urls;
};

test.beforeEach(async ({ page }) => {
  await recordFrames(page);
  await recordTones(page);
});

test.describe('on a wide screen', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('sound is off, and no audio is loaded, until it is turned on', async ({
    page
  }) => {
    const requested = audioRequests(page);

    await openApp(page);

    const sound = page.locator('.mc-header').getByRole('button', {
      name: 'Sound'
    });

    await expect(sound).toBeVisible();
    await expect(sound).toHaveAttribute('aria-pressed', 'false');
    await expect(sound).toHaveText(/Sound\s*off/);
    await expect(page.locator('#soundDock')).toBeHidden();

    // Flicking a toggle while sound is off makes no sound
    await toggle(page, 'toggleMoons');
    expect(await takeTones(page)).toEqual([]);
    await expect(page.locator('#ambience')).toHaveCount(0);
    expect(requested).toEqual([]);
  });

  test('turning sound on plays the ambience and a rising switch sound', async ({
    page
  }) => {
    const requested = audioRequests(page);

    await openApp(page);

    const sound = page.locator('#soundToggle');

    await sound.click();
    await expect(sound).toHaveAttribute('aria-pressed', 'true');
    await expect(sound).toHaveText(/Sound\s*on/);
    await ambiencePlays(page);
    expect(await takeTones(page)).toEqual(RISING);
    // Opus, which Chrome plays, and nothing else
    expect(requested.every((url) => url.endsWith('/audio/ambience.webm'))).toBe(
      true
    );
    expect(requested.length).toBeGreaterThan(0);
    expect(await page.evaluate(() => window.__violations)).toEqual([]);

    // Off again: silence, after a falling switch sound
    await sound.click();
    await expect(sound).toHaveAttribute('aria-pressed', 'false');
    expect(await takeTones(page)).toEqual(FALLING);
    expect(
      await page
        .locator('#ambience')
        .evaluate((audio) => (audio as HTMLAudioElement).paused)
    ).toBe(true);
  });

  test('with sound on, each toggle rises when switched on and falls when switched off', async ({
    page
  }) => {
    await openApp(page);
    await page.locator('#soundToggle').click();
    await takeTones(page);

    await toggle(page, 'toggleMoons');
    expect(await takeTones(page)).toEqual(RISING);

    await toggle(page, 'toggleMoons');
    expect(await takeTones(page)).toEqual(FALLING);
  });
});

test.describe('on a phone', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test('Sound sits in the bottom bar and plays the ambience', async ({
    page
  }) => {
    await openApp(page);

    await expect(page.locator('#soundToggle')).toBeHidden();

    const sound = page
      .locator('.mc-dock')
      .getByRole('button', { name: 'Sound' });

    await sound.tap();
    await expect(sound).toHaveAttribute('aria-pressed', 'true');
    // Cyan when on, as the Systems button is when open, even under the finger
    await expect(sound).toHaveCSS('color', 'rgb(79, 239, 249)');
    await ambiencePlays(page);
    // The header button follows, for when the screen widens
    await expect(page.locator('#soundToggle')).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });
});
