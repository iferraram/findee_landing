import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src', // Your project root is src
  base: '/',
  build: {
    outDir: '../dist', // The build output goes to dist
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for src directory
    },
  },
  plugins: [react()],
})
