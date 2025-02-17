import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 50,
      },
      jpeg: {
        quality: 50,
      },
      jpg: {
        quality: 50,
      },
      tiff: {
        quality: 50,
      },
      gif: {},
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
  ]
});
