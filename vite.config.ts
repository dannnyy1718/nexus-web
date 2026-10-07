import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Sin estilos ni scripts en línea, para que la CSP estricta de firebase.json funcione
    assetsInlineLimit: 0,
    modulePreload: { polyfill: false },
  },
})
