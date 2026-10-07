import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

// Se usa solo al compilar: genera el HTML de la página para que se vea antes de cargar el JavaScript
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
