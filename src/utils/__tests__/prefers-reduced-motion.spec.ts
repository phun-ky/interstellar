import assert from 'node:assert/strict';
import { afterEach, describe, test } from 'node:test';

import { prefersReducedMotion } from '../prefers-reduced-motion';

const original = globalThis.matchMedia;

const stubMatchMedia = (matches: boolean): string[] => {
  const queries: string[] = [];

  globalThis.matchMedia = ((query: string) => {
    queries.push(query);

    return { matches } as MediaQueryList;
  }) as typeof globalThis.matchMedia;

  return queries;
};

describe('prefersReducedMotion', () => {
  afterEach(() => {
    globalThis.matchMedia = original;
  });

  test('is true when the visitor asks for less motion', () => {
    const queries = stubMatchMedia(true);

    assert.equal(prefersReducedMotion(), true);
    assert.deepEqual(queries, ['(prefers-reduced-motion: reduce)']);
  });

  test('is false otherwise', () => {
    stubMatchMedia(false);
    assert.equal(prefersReducedMotion(), false);
  });

  test('is false without matchMedia', () => {
    // @ts-expect-error: removed to stand in for an environment without it
    delete globalThis.matchMedia;
    assert.equal(prefersReducedMotion(), false);
  });
});
