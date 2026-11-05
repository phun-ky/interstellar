import AxeBuilder from '@axe-core/playwright';
import {
  type APIRequestContext,
  expect,
  type Page,
  test
} from '@playwright/test';

import { recordFrames } from './helpers';

/** The built pages, relative to the base URL. */
const PAGES = ['./', '404.html'];

/** Every `href` and `src` on the page, resolved, on the site's own origin. */
const linksOn = async (page: Page): Promise<string[]> => {
  const origin = new URL(page.url()).origin;
  const urls = await page.evaluate(() =>
    [...document.querySelectorAll('[href], [src]')].map(
      (element) =>
        new URL(
          element.getAttribute('href') ?? element.getAttribute('src') ?? '',
          document.baseURI
        ).href
    )
  );

  return urls.filter((url) => new URL(url).origin === origin);
};

/** The files a stylesheet loads through `url(...)`, resolved. */
const urlsInStylesheet = async (
  request: APIRequestContext,
  stylesheet: string
): Promise<string[]> => {
  const css = await (await request.get(stylesheet)).text();

  return [...css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)]
    .map(([, url]) => url)
    .filter((url) => !url.startsWith('data:'))
    .map((url) => new URL(url, stylesheet).href);
};

/** The icons and start URL in the web manifest, resolved. */
const urlsInManifest = async (
  request: APIRequestContext,
  manifest: string
): Promise<string[]> => {
  const { icons, start_url: startUrl } = await (
    await request.get(manifest)
  ).json();

  return [
    new URL(startUrl, manifest).href,
    ...icons.map(({ src }: { src: string }) => new URL(src, manifest).href)
  ];
};

/** The images `browserconfig.xml` names, resolved. */
const urlsInBrowserConfig = async (
  request: APIRequestContext,
  config: string
): Promise<string[]> => {
  const xml = await (await request.get(config)).text();

  return [...xml.matchAll(/src="([^"]+)"/g)].map(
    ([, src]) => new URL(src, config).href
  );
};

test('every internal link and asset in the built pages resolves', async ({
  page,
  request,
  baseURL
}) => {
  const urls = new Set<string>();

  for (const path of PAGES) {
    await page.goto(path);

    for (const url of await linksOn(page)) urls.add(url);
  }

  for (const url of [...urls]) {
    const { pathname } = new URL(url);

    if (pathname.endsWith('.css')) {
      for (const asset of await urlsInStylesheet(request, url)) urls.add(asset);
    } else if (pathname.endsWith('manifest.json')) {
      for (const asset of await urlsInManifest(request, url)) urls.add(asset);
    }
  }

  for (const url of await urlsInBrowserConfig(
    request,
    new URL('browserconfig.xml', baseURL).href
  )) {
    urls.add(url);
  }

  const broken: string[] = [];

  for (const url of urls) {
    const { status } = await request.fetch(url).then((response) => ({
      status: response.status()
    }));

    if (status !== 200) broken.push(`${status} ${url}`);
  }

  // The fonts, the manifest icons and the pages themselves, at the least
  expect(urls.size).toBeGreaterThan(20);
  expect(broken).toEqual([]);
});

test.describe('an unknown path', () => {
  const UNKNOWN = 'no/such/page';

  test('answers 404 with the Signal lost page', async ({ request }) => {
    const response = await request.get(UNKNOWN);

    expect(response.status()).toBe(404);
    expect(await response.text()).toContain('Signal lost');
  });

  test('shows the page without policy violations or axe findings', async ({
    page
  }) => {
    await recordFrames(page);

    const errors: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });

    await page.goto(UNKNOWN);

    await expect(
      page.getByRole('heading', { level: 1, name: 'Signal lost' })
    ).toBeVisible();
    // The page itself answers 404, which the browser logs; nothing else may
    expect(errors.filter((error) => !/status of 404/.test(error))).toEqual([]);
    expect(await page.evaluate(() => window.__violations)).toEqual([]);

    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'])
      .analyze();

    expect(violations.map(({ id }) => id)).toEqual([]);
  });

  test('links back to the map', async ({ page }) => {
    await page.goto(UNKNOWN);
    await page.getByRole('link', { name: 'Return to the map' }).click();

    await expect(page).toHaveTitle('Interstellar');
    await expect(page.locator('#spaceCanvas')).toBeVisible();
  });
});
