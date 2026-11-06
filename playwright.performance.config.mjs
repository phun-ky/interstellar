import { defineConfig } from '@playwright/test';

import config from './playwright.config.mjs';

/**
 * The performance budgets (#37), apart from the end-to-end tests: one page at
 * a time, so no other test competes for the CPU while timings are measured.
 * Measures the built site: run `npm run build` first.
 */
export default defineConfig({
  ...config,
  testDir: './tests/performance',
  fullyParallel: false,
  workers: 1
});
