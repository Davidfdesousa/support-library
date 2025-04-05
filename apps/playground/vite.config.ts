import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@support-library/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@support-library/tokens': path.resolve(__dirname, '../../packages/tokens/src'),
      '@support-library/icons': path.resolve(__dirname, '../../packages/icons/src'),
      '@support-library/fonts': path.resolve(__dirname, '../../packages/fonts/src'),
    }
  },
  optimizeDeps: {
    exclude: ['@support-library/ui']
  }
});
