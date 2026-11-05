import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, test } from 'node:test';

const SITE_URL = 'https://phun-ky.net/site-interstellar/';
const html = readFileSync(new URL('../../index.html', import.meta.url), 'utf8');

/** The `content` of a `<meta property="…">` tag, or `null`. */
const metaProperty = (property: string): string | null => {
  const tag = html.match(
    new RegExp(`<meta[^>]*property="${property}"[^>]*>`, 's')
  )?.[0];

  return tag?.match(/content="([^"]*)"/)?.[1] ?? null;
};

describe('index.html metadata', () => {
  test('mentions no local development address', () => {
    assert.doesNotMatch(html, /localhost|127\.0\.0\.1/);
  });

  test('og:url is the deployed site', () => {
    assert.equal(metaProperty('og:url'), SITE_URL);
  });

  test('og:image is served from the deployed site', () => {
    const image = metaProperty('og:image');

    assert.ok(image?.startsWith(SITE_URL), `og:image is ${image}`);
  });

  test('the canonical URL is the deployed site', () => {
    const canonical = html
      .match(/<link[^>]*rel="canonical"[^>]*>/s)?.[0]
      ?.match(/href="([^"]*)"/)?.[1];

    assert.equal(canonical, SITE_URL);
  });
});
