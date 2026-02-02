import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Konfigurasi Vite untuk React + Tailwind
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
