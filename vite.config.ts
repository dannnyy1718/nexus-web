import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Sin estilos ni scripts en línea, para que la CSP estricta de firebase.json funcione
    assetsInlineLimit: 0,
    modulePreload: { polyfill: false },
    // Páginas: inicio, aviso de privacidad y la de "no encontrada" (404)
    rollupOptions: {
      input: { inicio: 'index.html', privacidad: 'privacidad.html', noEncontrada: '404.html' },
    },
  },
})
