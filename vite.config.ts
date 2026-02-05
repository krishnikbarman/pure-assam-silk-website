import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pure-assam-silk-website/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
