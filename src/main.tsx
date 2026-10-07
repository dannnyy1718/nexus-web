import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/unbounded'
import '@fontsource-variable/instrument-sans'
import './index.css'
import App from './App'
import Privacidad from './Privacidad'
import NoEncontrada from './NoEncontrada'

// El HTML ya viene pre-renderizado (scripts/prerender.mjs); React solo se engancha a él
// Cada HTML dice qué página es (data-pagina en <body>), así la 404 funciona en cualquier dirección
const paginas = { inicio: App, privacidad: Privacidad, noEncontrada: NoEncontrada }
const Pagina = paginas[document.body.dataset.pagina as keyof typeof paginas] ?? App

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <Pagina />
  </StrictMode>,
)
