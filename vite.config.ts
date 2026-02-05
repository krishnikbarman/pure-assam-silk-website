import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/pure-assam-silk-website/' : '/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
}))
