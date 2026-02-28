import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'ocr-engine': ['tesseract.js', 'pdfjs-dist'],
          'ui-icons': ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
