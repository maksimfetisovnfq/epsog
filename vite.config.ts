import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    svgr(),
  ],
  server: {
    proxy: {
      '/beks': {
        target: 'https://p2x-container-app.wonderfulpebble-6684d847.westeurope.azurecontainerapps.io',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})