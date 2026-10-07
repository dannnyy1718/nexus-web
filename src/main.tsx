import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/unbounded'
import '@fontsource-variable/instrument-sans'
import './index.css'
import App from './App'
import Privacidad from './Privacidad'

// El HTML ya viene pre-renderizado (scripts/prerender.mjs); React solo se engancha a él
const Pagina = location.pathname.startsWith('/privacidad') ? Privacidad : App

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <Pagina />
  </StrictMode>,
)
