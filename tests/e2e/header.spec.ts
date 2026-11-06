import AxeBuilder from '@axe-core/playwright';
import { expect, type Page, test } from '@playwright/test';

/** The header links, in order: accessible name, target, and whether `↗` shows. */
const LINKS: [string, string, boolean][] = [
  [
    'Guide',
    'https://phun-ky.net/interstellar-tools/guide/introduction/',
    false
  ],
  ['AI assistants', 'https://phun-ky.net/interstellar-tools/guide/mcp/', false],
  ['Learn', 'https://phun-ky.net/interstellar-tools/learn/', false],
  ['Reference', 'https://phun-ky.net/interstellar-tools/api/', false],
  ['Sponsor', 'https://github.com/sponsors/phun-ky', true],
  [
    'Contributing',
    'https://github.com/phun-ky/site-interstellar/blob/main/CONTRIBUTING.md',
    true
  ],
  ['GitHub repository', 'https://github.com/phun-ky/site-interstellar', false]
];

const nav = (page: Page) => page.getByRole('navigation', { name: 'Main' });

test('the brand links to the map', async ({ page, baseURL }) => {
  await page.goto('./');

  const brand = page.getByRole('banner').getByRole('link', {
    name: 'Interstellar'
  });

  expect(new URL((await brand.getAttribute('href')) ?? '', baseURL).href).toBe(
    baseURL
  );
});

test('the header links go where the issue says, in order', async ({ page }) => {
  await page.goto('./');

  const links = nav(page).getByRole('link');

  await expect(links).toHaveCount(LINKS.length);

  for (const [index, [name, href, external]] of LINKS.entries()) {
    const link = links.nth(index);

    await expect(link).toHaveAccessibleName(name);
    await expect(link).toHaveAttribute('href', href);
    await expect(link.locator('.mc-external')).toHaveCount(external ? 1 : 0);

    if (external) await expect(link).toContainText('↗');
  }
});

test.describe('on a wide screen', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('shows the links and no menu button', async ({ page }) => {
    await page.goto('./');

    await expect(nav(page).getByRole('button', { name: 'Menu' })).toBeHidden();

    for (const [name] of LINKS) {
      await expect(nav(page).getByRole('link', { name })).toBeVisible();
    }

    // The header stays one 64 px bar, where the canvas starts
    expect(
      await page
        .locator('.mc-header')
        .evaluate((el) => (el as HTMLElement).offsetHeight)
    ).toBe(64);
  });
});

test.describe('on a narrow screen', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('the menu button opens and closes the links', async ({ page }) => {
    await page.goto('./');

    const menu = nav(page).getByRole('button', { name: 'Menu' });
    const guide = nav(page).getByRole('link', { name: 'Guide' });

    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(guide).toBeHidden();

    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');

    for (const [name] of LINKS) {
      await expect(nav(page).getByRole('link', { name })).toBeVisible();
    }

    // Escape closes the menu and returns focus to its button
    await guide.focus();
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeFocused();
    await expect(guide).toBeHidden();

    // A click outside the navigation closes it too
    await menu.click();
    await page.mouse.click(200, 600);
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
  });

  test('the open menu has no axe findings', async ({ page }) => {
    await page.goto('./');
    await nav(page).getByRole('button', { name: 'Menu' }).click();

    const { violations } = await new AxeBuilder({ page })
      .include('.mc-header')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'])
      .analyze();

    expect(violations.map(({ id }) => id)).toEqual([]);
  });

  test('the header stays one 64 px bar with a long lock name', async ({
    page
  }) => {
    await page.goto('./');
    await page.selectOption('#lockOn', 'alpha-centauri-a');

    const header = page.locator('.mc-header');

    await expect(page.locator('#lockStatus')).toBeVisible();
    expect(
      await header.evaluate((el) => (el as HTMLElement).offsetHeight)
    ).toBe(64);
    expect(await header.evaluate((el) => el.scrollWidth - el.clientWidth)).toBe(
      0
    );
  });
});
