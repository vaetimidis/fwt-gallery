import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true
      }
    }),
    mkcert()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/variables.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '#': resolve(__dirname, 'src'),
      '#components': resolve(__dirname, 'src/components'),
      '#assets': resolve(__dirname, 'src/assets'),
      '#types': resolve(__dirname, 'src/types'),
      '#hooks': resolve(__dirname, 'src/hooks')
    }
  }
});
