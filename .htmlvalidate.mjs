import { defineConfig } from 'html-validate';

export default defineConfig({
  extends: ['html-validate:recommended'],
  rules: {
    // Prettier writes `<!doctype html>`
    'doctype-style': ['error', { style: 'lowercase' }],
    // Both forms are valid HTML: Prettier writes `<meta />` in the source,
    // and Vite injects `<link>` without the slash into the build
    'void-style': 'off'
  }
});
