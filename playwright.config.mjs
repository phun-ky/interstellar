import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/e2e',
  testMatch: '**/*.@(spec|test|e2e).?(c|m)[jt]s?(x)',
  fullyParallel: true,
  // Fail on CI when a `test.only` was left in
  forbidOnly: !!process.env.CI,
  // A test that only passes on a second try is a bug to fix, not to hide
  retries: 0,
  reporter: process.env.CI ? 'dot' : 'list',
  use: {
    // The site's GitHub Pages base path, so `page.goto('./')` opens the app
    baseURL: 'http://127.0.0.1:3000/site-interstellar/',
    trace: 'retain-on-failure'
  },
  // Google Chrome, as installed on GitHub's ubuntu-24.04 runners, so CI
  // downloads no browser. Locally, Chrome must be installed.
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }
    }
  ],

  /* Serve the built site (`pretest:e2e` builds it) before the tests */
  webServer: {
    command: 'npx vite preview --host 127.0.0.1 --port 3000 --strictPort',
    url: 'http://127.0.0.1:3000/site-interstellar/',
    reuseExistingServer: !process.env.CI
  }
});
