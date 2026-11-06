import AxeBuilder from '@axe-core/playwright';
import { expect, type Locator, type Page, test } from '@playwright/test';

import { openApp, recordFrames } from './helpers';

type Box = { x: number; y: number; width: number; height: number };

const box = async (locator: Locator): Promise<Box> => {
  const found = await locator.boundingBox();

  expect(found, `${locator} is laid out`).not.toBeNull();

  return found as Box;
};

const overlaps = (a: Box, b: Box): boolean =>
  a.x < b.x + b.width &&
  b.x < a.x + a.width &&
  a.y < b.y + b.height &&
  b.y < a.y + a.height;

/** No part of the page scrolls sideways. */
const horizontalOverflow = (page: Page): Promise<number> =>
  page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth
  );

const systemsButton = (page: Page) =>
  page.locator('.mc-dock').getByRole('button', { name: 'Systems' });

test.beforeEach(async ({ page }) => {
  await recordFrames(page);
});

for (const [name, viewport] of [
  ['a phone', { width: 390, height: 844 }],
  ['a phone on its side', { width: 844, height: 390 }],
  ['a tablet', { width: 768, height: 1024 }]
] as const) {
  test.describe(`on ${name}`, () => {
    test.use({ viewport, hasTouch: true, isMobile: true });

    test('the map is clear: compact telemetry, a bottom bar, no panels over it', async ({
      page
    }) => {
      await openApp(page);

      const header = await box(page.locator('.mc-header'));
      const telemetry = await box(page.locator('.mc-left'));
      const dock = await box(page.locator('.mc-dock'));
      const minimap = await box(page.locator('#minimap'));

      // Telemetry: date, scale and zoom in a strip under the header
      await expect(page.locator('#simDate')).toBeVisible();
      await expect(page.locator('#scaleDisplay')).toBeVisible();
      await expect(page.locator('#zoomLevel')).toBeVisible();
      await expect(page.locator('#coordX')).toBeHidden();
      await expect(page.locator('#in-viewport')).toBeHidden();
      expect(telemetry.y).toBe(header.y + header.height);
      expect(telemetry.height).toBeLessThanOrEqual(64);

      // Systems is closed; the bottom bar holds Hold and its button
      await expect(page.locator('#systems')).toBeHidden();
      await expect(
        page.locator('.mc-dock').getByRole('button', { name: 'Hold' })
      ).toBeVisible();
      await expect(systemsButton(page)).toHaveAttribute(
        'aria-expanded',
        'false'
      );
      expect(dock.y + dock.height).toBe(viewport.height);

      // Nothing overlaps, and the map keeps most of the screen
      for (const [a, b] of [
        [telemetry, dock],
        [telemetry, minimap],
        [minimap, dock]
      ]) {
        expect(overlaps(a, b)).toBe(false);
      }

      const mapHeight = dock.y - (telemetry.y + telemetry.height);

      expect(mapHeight / viewport.height).toBeGreaterThan(0.5);
      expect(await horizontalOverflow(page)).toBe(0);
    });

    test('the Systems sheet opens above the bar and fits the screen', async ({
      page
    }) => {
      await openApp(page);
      await systemsButton(page).click();

      const sheet = page.locator('#systems');

      await expect(sheet).toBeVisible();
      await expect(systemsButton(page)).toHaveAttribute(
        'aria-expanded',
        'true'
      );

      const header = await box(page.locator('.mc-header'));
      const dock = await box(page.locator('.mc-dock'));
      const sheetBox = await box(sheet);

      expect(sheetBox.y).toBeGreaterThanOrEqual(header.y + header.height);
      expect(Math.round(sheetBox.y + sheetBox.height)).toBe(Math.round(dock.y));
      // One Hold: the bar's stands in for the panel's own
      await expect(page.locator('#pause')).toBeHidden();
      // The last control can be scrolled to
      await page.locator('#resetToNow').scrollIntoViewIfNeeded();
      await expect(page.locator('#resetToNow')).toBeInViewport();
    });
  });
}

test.describe('on a phone', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test('Escape closes the sheet and returns focus to its button', async ({
    page
  }) => {
    await openApp(page);
    await systemsButton(page).click();
    await page.locator('#toggleMoons').focus();
    await page.keyboard.press('Escape');

    await expect(page.locator('#systems')).toBeHidden();
    await expect(systemsButton(page)).toHaveAttribute('aria-expanded', 'false');
    await expect(systemsButton(page)).toBeFocused();
  });

  test('the skip link opens the sheet and moves focus into it', async ({
    page
  }) => {
    await openApp(page);
    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('link', { name: 'Skip to systems' })
    ).toBeFocused();
    await page.keyboard.press('Enter');

    await expect(page.locator('#systems')).toBeVisible();
    await expect(page.locator('#systems')).toBeFocused();
    await expect(systemsButton(page)).toHaveAttribute('aria-expanded', 'true');
  });

  test("the bar's Hold holds and resumes, and both Hold buttons agree", async ({
    page
  }) => {
    await openApp(page);

    const hold = page.locator('#pauseDock');

    await hold.click();
    await expect(page.locator('#simStatus')).toHaveText('◌ hold');
    await expect(hold).toHaveText('Resume');
    await expect(hold).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#pause')).toHaveText('Resume');

    await hold.click();
    await expect(page.locator('#simStatus')).toHaveText('● nominal');
    await expect(hold).toHaveText('Hold');
  });

  test('the open sheet has no axe findings', async ({ page }) => {
    await openApp(page);
    await systemsButton(page).click();

    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'])
      .analyze();

    expect(violations.map(({ id }) => id)).toEqual([]);
  });
});

test.describe('on a wide screen', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('keeps the side panels and shows no bottom bar', async ({ page }) => {
    await openApp(page);

    await expect(page.locator('.mc-dock')).toBeHidden();
    await expect(page.locator('#systems')).toBeVisible();
    await expect(page.locator('#pause')).toBeVisible();
    await expect(page.locator('#coordX')).toBeVisible();
    await expect(page.locator('#in-viewport')).toBeAttached();
  });
});
