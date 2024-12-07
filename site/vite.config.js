// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // or 'localhost' if preferred
    port: 1111,      // specify a custom port if needed
  },
});