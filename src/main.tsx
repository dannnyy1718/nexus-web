import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/unbounded'
import '@fontsource-variable/instrument-sans'
import './index.css'
import App from './App'

// El HTML ya viene pre-renderizado (scripts/prerender.mjs); React solo se engancha a él
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
