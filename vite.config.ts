import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/pure-assam-silk-website/' : '/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
