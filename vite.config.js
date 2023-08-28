import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom/client',
       'framer-motion', 'react-scroll', '@material-ui/core/styles', 
       '@mui/styles', 'prop-types', '@mui/material/styles', 'react-scroll', '@material-ui/core'], 
    },
  },
});
