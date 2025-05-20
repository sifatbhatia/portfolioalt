import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    process.env.ANALYZE && visualizer({
      open: true,
      filename: 'dist/stats.html'
    })
  ].filter(Boolean),
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          analytics: ['/src/analytics.js']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  }
});
