import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import Privacidad from './Privacidad'
import Terminos from './Terminos'
import AppCitas from './AppCitas'
import PaginasWeb from './PaginasWeb'
import TiendaVirtual from './TiendaVirtual'
import NoEncontrada from './NoEncontrada'
export { datosEstructurados, datosAppCitas, datosPaginasWeb, datosTienda } from './negocio'

const paginas = { inicio: App, privacidad: Privacidad, terminos: Terminos, appCitas: AppCitas, paginasWeb: PaginasWeb, tiendaVirtual: TiendaVirtual, noEncontrada: NoEncontrada }

// Se usa solo al compilar: genera el HTML de cada página para que se vea antes de cargar el JavaScript
export function render(pagina: keyof typeof paginas) {
  const Pagina = paginas[pagina]
  return renderToString(
    <StrictMode>
      <Pagina />
    </StrictMode>,
  )
}
