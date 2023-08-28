import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-dom/client', 'framer-motion', 'react-scroll'], // Add 'react-dom' here
    },
  },
});
