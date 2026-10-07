import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import Privacidad from './Privacidad'

const paginas = { inicio: App, privacidad: Privacidad }

// Se usa solo al compilar: genera el HTML de cada página para que se vea antes de cargar el JavaScript
export function render(pagina: keyof typeof paginas) {
  const Pagina = paginas[pagina]
  return renderToString(
    <StrictMode>
      <Pagina />
    </StrictMode>,
  )
}
