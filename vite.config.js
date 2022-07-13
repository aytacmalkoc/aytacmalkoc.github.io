import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': './src',
      'node-fetch': 'node-fetch/browser.js',
    },
    extensions: ['.jsx', '.js'],
  },
})
