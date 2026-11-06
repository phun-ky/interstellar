import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, test } from 'node:test';

// The build fills in the site's address from vite.config.mjs; the built
// values are checked in tests/e2e/metadata.spec.ts
const SITE_URL = '%SITE_URL%';
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

  test('og:url is the site URL', () => {
    assert.equal(metaProperty('og:url'), SITE_URL);
  });

  test('og:image is served from the site', () => {
    const image = metaProperty('og:image');

    assert.ok(image?.startsWith(SITE_URL), `og:image is ${image}`);
  });

  test('loads nothing from another origin', () => {
    // The Content Security Policy allows the site's own origin only. The
    // canonical link and og: tags name the site but load nothing.
    const external = [...html.matchAll(/<(?:link|script)\b[^>]*>/gi)]
      .map(([tag]) => tag)
      .filter((tag) => /\b(?:href|src)\s*=\s*["']?(?:https?:)?\/\//i.test(tag))
      .filter((tag) => !/\brel\s*=\s*["']?canonical\b/i.test(tag));

    assert.deepEqual(external, []);
  });

  test('the canonical URL is the site URL', () => {
    const canonical = html
      .match(/<link[^>]*rel="canonical"[^>]*>/s)?.[0]
      ?.match(/href="([^"]*)"/)?.[1];

    assert.equal(canonical, SITE_URL);
  });
});
