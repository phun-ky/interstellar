import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import pack from './package.json' with { type: 'json' };

const banner = `/**
 * ${pack.name}
 * ${pack.description}
 * @author ${pack.author}
 * @version ${pack.version}
 * @license
 * Copyright (c) 2025-${new Date().getFullYear()} Alexander Vassbotn Røyne-Helgesen
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */`;

export default defineConfig({
  publicDir: 'public',
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rolldownOptions: {
      output: {
        postBanner: banner,
        entryFileNames: 'js/main.js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) =>
          assetInfo.names.some((name) => name.endsWith('.css'))
            ? 'css/interstellar.css'
            : 'assets/[name]-[hash][extname]'
      }
    }
  },
  plugins: [
    // Serve and copy `src/assets` to the web root, like `public/`
    viteStaticCopy({
      targets: [{ src: 'src/assets/**/*', dest: '.', rename: { stripBase: 2 } }]
    })
  ]
});
