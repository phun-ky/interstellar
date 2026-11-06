import {
  type APIRequestContext,
  expect,
  type Page,
  test
} from '@playwright/test';

/** The `content` of the one meta tag matching `selector`. */
const meta = async (page: Page, selector: string): Promise<string> => {
  const tags = page.locator(`head meta[${selector}]`);

  await expect(tags, selector).toHaveCount(1);

  return (await tags.getAttribute('content')) ?? '';
};

/** The width and height a PNG declares in its header. */
const pngSize = async (
  request: APIRequestContext,
  url: string
): Promise<{ width: number; height: number }> => {
  const response = await request.get(url);

  expect(response.status(), url).toBe(200);
  expect(response.headers()['content-type']).toBe('image/png');

  const png = await response.body();

  return { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
};

test.describe('the map', () => {
  test('names the page, its canonical URL and its social card', async ({
    page,
    request,
    baseURL
  }) => {
    await page.goto('./');

    await expect(page).toHaveTitle('Interstellar');
    expect(await meta(page, 'name="description"')).not.toBe('');

    const canonical = page.locator('head link[rel="canonical"]');

    await expect(canonical).toHaveCount(1);

    const site = (await canonical.getAttribute('href')) ?? '';

    // Absolute, on https, under the path the site is served from
    expect(site).toMatch(/^https:\/\//);
    expect(new URL(site).pathname).toBe(new URL(baseURL ?? '').pathname);

    expect(await meta(page, 'property="og:url"')).toBe(site);
    expect(await meta(page, 'property="og:type"')).toBe('website');
    expect(await meta(page, 'property="og:title"')).toBe('Interstellar');
    expect(await meta(page, 'property="og:site_name"')).toBe('Interstellar');
    expect(await meta(page, 'property="og:description"')).toBe(
      await meta(page, 'name="description"')
    );
    expect(await meta(page, 'name="twitter:card"')).toBe('summary_large_image');
    expect(await meta(page, 'property="og:image:alt"')).not.toBe('');
    expect(await meta(page, 'name="twitter:image:alt"')).toBe(
      await meta(page, 'property="og:image:alt"')
    );

    // The card is served by the site itself, at the size the page declares
    const image = await meta(page, 'property="og:image"');

    expect(image.startsWith(site)).toBe(true);

    const { width, height } = await pngSize(
      request,
      new URL(image.slice(site.length), baseURL).href
    );

    expect(String(width)).toBe(await meta(page, 'property="og:image:width"'));
    expect(String(height)).toBe(await meta(page, 'property="og:image:height"'));
    // The size every platform shows in full
    expect({ width, height }).toEqual({ width: 1200, height: 630 });
  });

  test('lists the favicons and the touch icon', async ({ page }) => {
    await page.goto('./');

    for (const size of ['16x16', '32x32', '192x192']) {
      await expect(
        page.locator(`head link[rel="icon"][sizes="${size}"]`)
      ).toHaveCount(1);
    }

    await expect(
      page.locator('head link[rel="apple-touch-icon"][sizes="180x180"]')
    ).toHaveCount(1);
  });
});

test('the sitemap and robots.txt point at the canonical URL', async ({
  page,
  request
}) => {
  await page.goto('./');

  const site =
    (await page.locator('head link[rel="canonical"]').getAttribute('href')) ??
    '';
  const sitemap = await request.get('sitemap.xml');

  expect(sitemap.status()).toBe(200);
  // The map is the only page to index
  expect([...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)]).toEqual([
    expect.arrayContaining([site])
  ]);

  const robots = await request.get('robots.txt');

  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${site}sitemap.xml`);
});

test('the manifest opens and stays under the base path', async ({
  request,
  baseURL
}) => {
  const manifestUrl = new URL('manifest.json', baseURL).href;
  const manifest = await (await request.get(manifestUrl)).json();
  const base = new URL(baseURL ?? '').pathname;
  const resolve = (url: string) => new URL(url, manifestUrl).pathname;

  expect(resolve(manifest.start_url)).toBe(base);
  expect(resolve(manifest.scope)).toBe(base);
  expect(resolve(manifest.id)).toBe(base);
  // Installable: a 192 and a 512 pixel icon
  expect(manifest.icons.map(({ sizes }: { sizes: string }) => sizes)).toEqual(
    expect.arrayContaining(['192x192', '512x512'])
  );
});

test('the 404 page is not indexed and claims no canonical URL', async ({
  page
}) => {
  await page.goto('no/such/page');

  expect(await meta(page, 'name="robots"')).toBe('noindex');
  await expect(page.locator('head link[rel="canonical"]')).toHaveCount(0);
});
