/**


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteAliases(),
  ],
});
*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware'; // eslint-disable-line @typescript-eslint/no-unused-vars

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8000', // Your backend server address
  //       changeOrigin: true,
  //       //rewrite: (path) => path.replace(/^\/api/, ''), // Remove the /api prefix
  //     },
  //   },
  // },
});




