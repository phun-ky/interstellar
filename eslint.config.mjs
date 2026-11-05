import { defineConfig, globalIgnores } from 'eslint/config';
import customConfig from 'eslint-config-phun-ky';
import globals from 'globals';

export default defineConfig([
  // Built output, test reports and the generated changelog
  globalIgnores([
    'dist/**',
    'coverage/**',
    'test-results/**',
    'playwright-report/**',
    'CHANGELOG.md'
  ]),
  {
    extends: [customConfig],
    rules: {
      // Match Prettier, which keeps "Halley's Comet" rather than escaping it
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }]
    }
  },
  {
    // GitHub-flavoured Markdown, so task lists ([x]) and tables are understood
    files: ['**/*.md'],
    language: 'markdown/gfm'
  },
  {
    // Config files run in Node
    files: ['*.mjs', '*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
]);
