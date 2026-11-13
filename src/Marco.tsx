// Piezas compartidas por todas las páginas: contacto, encabezado y pie de página
import { useEffect, useRef, useState, type ReactNode } from 'react'

export const LEMA = 'Tu negocio, conectado y seguro.'

export const WHATSAPP_NUMERO = '573133655136'
export const WHATSAPP_VISIBLE = '313 365 5136'
/** Enlace de WhatsApp con un mensaje ya escrito. */
export const enlaceWhatsApp = (mensaje: string) => `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`

// Un mensaje distinto por botón (estudio de la web 2026-11-02): así, al leer el primer mensaje en WhatsApp, se sabe
// qué parte de la página trajo al cliente, SIN cookies ni rastreadores (la página promete no usarlos). Anotar en la
// hoja de contactos de dónde vino cada uno. Si se cambia un texto, cambiarlo también en docs/MEDIR.md.
export const MENSAJES = {
  general: 'Hola NODRA, tengo un negocio y quiero saber qué me sirve.', // encabezado y páginas internas
  inicio: 'Hola NODRA, vi su página y quiero saber qué le sirve a mi negocio.',
  precios: 'Hola NODRA, vi los precios y quiero una propuesta para mi negocio.',
  danny: 'Hola Danny, vi tu página y quiero hablar de mi negocio.',
  pregunta: 'Hola NODRA, tengo una pregunta: ',
  cierre: 'Hola NODRA, así funciona mi negocio hoy: ',
  ia: 'Hola NODRA, me interesa el asistente con inteligencia artificial cuando esté listo.',
  paginasWeb: 'Hola NODRA, vi la página de páginas web y quiero una para mi negocio.', // /paginas-web-ibague
  tienda: 'Hola NODRA, vi la página de tiendas virtuales y quiero vender en línea.', // /tienda-virtual-ibague
  guia: 'Hola NODRA, leí la guía de precios y quiero una propuesta para mi negocio.', // /cuanto-cuesta-una-pagina-web-ibague
  fijo: 'Hola NODRA, estoy viendo su página y quiero hablar de mi negocio.', // botón redondo fijo del celular (todas las páginas)
} as const

// Crítica 2026-10-28: quien escribe casi nunca sabe que quiere "una app"; sabe que tiene un negocio
export const WHATSAPP_URL = enlaceWhatsApp(MENSAJES.general)

// Correo de contacto (2026-10-24). Es un reenvío de Namecheap ("Redirigir correo electrónico"):
// lo que llega aquí cae en avisos.nexusagenda@gmail.com. Solo recibe; las respuestas salen desde ese Gmail.
export const CORREO = 'contacto@nodrasoft.com'
export const CORREO_URL = `mailto:${CORREO}`

// Horario de atención (2026-10-24). Debe ser IGUAL al del Perfil de Empresa en Google: si cambia, cambiarlo en los dos.
// Se muestra en el pie y va a la ficha para Google (negocio.ts, openingHoursSpecification).
export const HORARIO_VISIBLE = 'Lunes a sábado, 8 a. m. a 8 p. m. · Domingos, 9 a. m. a 5 p. m.'
export const HORARIO = [
  { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], abre: '08:00', cierra: '20:00' },
  { dias: ['Sunday'], abre: '09:00', cierra: '17:00' },
]

// NODRA Agenda ya está publicada: los botones llevan a su portada, donde el negocio crea su agenda
export const AGENDA_URL = 'https://agenda.nodrasoft.com/'

export function IconoWhatsApp({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.16-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.06.89.9-2.98-.2-.31a8.2 8.2 0 1 1 6.86 3.73Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.73 2.73 0 0 0-.85 2.03 4.74 4.74 0 0 0 1 2.52 10.84 10.84 0 0 0 4.15 3.67c1.54.67 2.15.72 2.92.6.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.1-.22-.17-.47-.29Z" />
    </svg>
  )
}

export function BotonWhatsApp({ grande = false, mensaje = MENSAJES.general }: { grande?: boolean; mensaje?: string }) {
  return (
    <a
      href={enlaceWhatsApp(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className={`boton-3d boton-verde inline-flex items-center gap-3 rounded-full font-semibold text-abismo ${
        grande ? 'px-8 py-4 text-lg' : 'px-6 py-3'
      }`}
    >
      <IconoWhatsApp className={grande ? 'size-6' : 'size-5'} />
      Escribir por WhatsApp
    </a>
  )
}

// Menú de arriba (pedido de Danny 2026-11-12): quien llega no sabía qué más había en la página y la portada crecía
// para mostrarlo todo. Ver DECISIONES 40. Los enlaces a secciones van con "/#..." para que funcionen desde cualquier
// página (en la portada solo baja, sin recargar).
const MENU_SERVICIOS = [
  { href: '/paginas-web-ibague', texto: 'Páginas web' },
  { href: '/tienda-virtual-ibague', texto: 'Tiendas virtuales' },
  { href: '/app-de-citas-ibague', texto: 'App de citas (NODRA Agenda)' },
  { href: '/cuanto-cuesta-una-pagina-web-ibague', texto: 'Guía: ¿cuánto cuesta una página web?' },
]
// "Trabajo real" en singular: hoy hay un solo caso publicado (Johana); "Trabajos" prometería más (regla 8.6)
const MENU_SECCIONES = [
  { href: '/#precios', texto: 'Precios' },
  { href: '/#johana', texto: 'Trabajo real' },
  { href: '/#quienes-somos', texto: 'Quiénes somos' },
]

const ENLACE_MENU = 'flex min-h-12 items-center rounded-lg px-3 font-semibold transition-colors hover:bg-linea/60 hover:text-cian'

// Desplegable con <details> del navegador: abre y cierra sin JavaScript y con teclado. El poco JavaScript que lleva
// solo lo cierra cuando hace falta (al elegir un enlace, al tocar fuera o con Escape); sin eso, al bajar a "Precios"
// el menú se quedaba abierto arriba. Es una sola escucha de clics: no afecta la velocidad.
function Desplegable({ resumen, children, className = '' }: { resumen: ReactNode; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDetailsElement>(null)
  useEffect(() => {
    const fuera = (e: MouseEvent) => {
      const d = ref.current
      if (d?.open && !d.contains(e.target as Node)) d.open = false
    }
    document.addEventListener('click', fuera)
    return () => document.removeEventListener('click', fuera)
  }, [])
  return (
    <details
      ref={ref}
      className={`group ${className}`}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('a') && ref.current) ref.current.open = false
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && ref.current?.open) {
          ref.current.open = false
          ref.current.querySelector('summary')?.focus()
        }
      }}
    >
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full font-semibold transition-colors hover:text-cian [&::-webkit-details-marker]:hidden">
        {resumen}
      </summary>
      {children}
    </details>
  )
}

function Flecha() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Encabezado() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-noche focus:px-4 focus:py-2"
      >
        Ir al contenido
      </a>

      <header className="relative z-30 mx-auto flex max-w-[92rem] items-center justify-between gap-2 px-4 py-5 sm:gap-4 md:px-8 xl:px-12">
        <a href="/" className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4" aria-label="NODRA, inicio">
          <img
            src="/img/escudo-mini.webp"
            alt=""
            width={64}
            height={64}
            className="size-11 rounded-xl shadow-[0_0_24px_-4px_var(--color-cian)] sm:size-12 md:size-16"
          />
          <span className="marca marca-brillo text-xl min-[380px]:text-2xl md:text-[2rem]">NODRA</span>
        </a>

        {/* Computador: el menú siempre a la vista (público de 30 a 70 años: que no tenga que buscarlo) */}
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-9">
            <li className="relative">
              <Desplegable
                resumen={
                  <>
                    Servicios <Flecha />
                  </>
                }
              >
                <ul className="absolute left-0 top-full mt-2 grid w-80 gap-1 rounded-2xl border border-contorno bg-noche p-2 shadow-[0_24px_48px_-12px_rgb(0_0_0/0.7)]">
                  {MENU_SERVICIOS.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className={ENLACE_MENU}>
                        {l.texto}
                      </a>
                    </li>
                  ))}
                </ul>
              </Desplegable>
            </li>
            {MENU_SECCIONES.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="flex min-h-11 items-center font-semibold transition-colors hover:text-cian">
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp (se abre en otra pestaña)"
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-contorno px-3 text-sm font-semibold transition-colors hover:border-verde hover:text-verde sm:px-4"
          >
            <IconoWhatsApp className="size-5 sm:size-4" />
            {/* En celular solo el ícono: con el botón "Menú" al lado, el texto no cabía a 360 px */}
            <span className="hidden sm:inline">Escríbenos</span>
          </a>

          {/* Celular y tableta: botón "Menú" que abre la misma lista en letra grande */}
          <Desplegable
            className="lg:hidden"
            resumen={
              <span className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-contorno px-3 text-sm sm:gap-2 sm:px-4">
                <svg viewBox="0 0 20 20" className="size-5 group-open:hidden" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M3 6h14M3 10h14M3 14h14" />
                </svg>
                <svg viewBox="0 0 20 20" className="hidden size-5 group-open:block" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M5 5l10 10M15 5L5 15" />
                </svg>
                {/* En celulares muy angostos (menos de 360 px) solo el ícono; el lector de pantalla igual dice "Menú" */}
                <span className="max-[359px]:sr-only">Menú</span>
              </span>
            }
          >
            <nav
              aria-label="Principal"
              className="absolute inset-x-4 top-full grid gap-1 rounded-2xl border border-contorno bg-noche p-3 text-lg shadow-[0_24px_48px_-12px_rgb(0_0_0/0.8)] md:inset-x-8"
            >
              <p className="px-3 pt-1 text-sm font-semibold text-bruma">Servicios</p>
              <ul className="grid gap-1">
                {MENU_SERVICIOS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={ENLACE_MENU}>
                      {l.texto}
                    </a>
                  </li>
                ))}
              </ul>
              <hr className="my-2 border-linea" />
              <ul className="grid gap-1">
                {MENU_SECCIONES.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={ENLACE_MENU}>
                      {l.texto}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Desplegable>
        </div>
      </header>
    </>
  )
}

// Enlaces del pie (auditoría 2026-11-12): medían menos de 24 px de alto y la letra era pequeña para dueños de negocio de
// 30 a 70 años. Con "py-1" cada enlace tiene más de 24 px para el dedo (WCAG 2.2, tamaño del objetivo). En celular
// cada enlace va en su propio renglón ("block") y los puntos separadores se esconden; en computador, en fila.
const ENLACE_PIE = 'block py-1 md:inline-block font-semibold text-cian underline underline-offset-4 hover:decoration-2'

// Botón redondo de WhatsApp que se queda fijo abajo, SOLO en celular (auditoría 2026-11-12): la portada mide unas 13
// pantallas y el encabezado no se queda fijo, así que en tramos largos no había cómo escribir sin devolverse.
// Aparece al bajar 600 px: en la primera pantalla ya está el botón grande de WhatsApp y este se le montaba encima
// (medido a 360x740). Mientras está escondido usa "invisible", así el teclado y los lectores de pantalla lo saltan.
// La escucha del scroll es pasiva y solo vuelve a pintar al cruzar la raya (dos veces, no en cada movimiento), así
// que no afecta la velocidad. En computador no sale: allá los botones de cada sección quedan siempre cerca.
// El pie deja espacio abajo (pb-24) para que no tape el texto final.
function BotonFijoWhatsApp() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const revisar = () => setVisible(window.scrollY > 600)
    revisar()
    window.addEventListener('scroll', revisar, { passive: true })
    return () => window.removeEventListener('scroll', revisar)
  }, [])
  return (
    <a
      href={enlaceWhatsApp(MENSAJES.fijo)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a NODRA por WhatsApp (se abre en otra pestaña)"
      className={`boton-3d boton-verde fixed bottom-4 right-4 z-40 grid size-14 place-items-center rounded-full text-abismo md:hidden ${
        visible ? '' : 'invisible'
      }`}
    >
      <IconoWhatsApp className="size-7" />
    </a>
  )
}

// "Página actualizada el 12 de noviembre de 2026" (auditoría 2026-11-12): Google y las IA prefieren contenido con
// fecha. La fecha sale de ACTUALIZADA en negocio.ts, la misma que va en la ficha (dateModified) y en el sitemap.
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
export function Actualizada({ fecha, className = 'mt-12' }: { fecha: string; className?: string }) {
  const [anio, mes, dia] = fecha.split('-').map(Number)
  return (
    <p className={`${className} text-sm text-bruma`}>
      Página actualizada el <time dateTime={fecha}>{`${dia} de ${MESES[mes - 1]} de ${anio}`}</time>.
    </p>
  )
}

export function Pie() {
  // En celular las tres partes van una debajo de otra y centradas; en computador, en una fila
  return (
    <>
    <BotonFijoWhatsApp />
    <footer className="mx-auto grid max-w-[92rem] justify-items-center gap-4 border-t border-linea px-4 pb-24 pt-8 text-center text-base text-bruma md:pb-8 md:text-sm md:grid-cols-[auto_1fr_auto] md:items-center md:justify-items-stretch md:gap-8 md:px-8 md:text-left xl:px-12">
      <span className="flex items-center gap-3">
        <img src="/img/escudo-mini.webp" alt="" width={36} height={36} className="rounded-lg" loading="lazy" />
        <span className="grid text-left leading-tight">
          <span className="marca text-lg">NODRA</span>
          <span className="text-niebla">{LEMA}</span>
        </span>
      </span>
      <div className="grid gap-2 md:gap-1">
        {/* Servicios en todas las páginas (auditoría SEO 2026-11-04): las páginas que venden recibían 1 enlace interno
            y las legales 5, y Google lo leía como que las legales importaban más. Cada página de servicio nueva va
            aquí (ver DECISIONES.md 31 y 33). El texto del enlace dice de qué trata la página, no "ver más". Sin partir cada enlace por dentro: en celular
            "App" quedaba sola al final de una línea. */}
        <nav aria-label="Servicios">
          <p>
            <span className="font-semibold text-niebla">Servicios:</span>{' '}
            <a href="/paginas-web-ibague" className={`whitespace-nowrap ${ENLACE_PIE}`}>
              Diseño de páginas web en Ibagué
            </a>{' '}
            <span className="hidden md:inline" aria-hidden="true">·</span>{' '}
            <a href="/tienda-virtual-ibague" className={`whitespace-nowrap ${ENLACE_PIE}`}>
              Tienda virtual en Ibagué
            </a>{' '}
            <span className="hidden md:inline" aria-hidden="true">·</span>{' '}
            <a href="/app-de-citas-ibague" className={`whitespace-nowrap ${ENLACE_PIE}`}>
              App de citas para negocios
            </a>
          </p>
        </nav>
        {/* Guía de precios (2026-11-12, decisión 37): enlazada desde todas las páginas para que Google la encuentre */}
        <p>
          <span className="font-semibold text-niebla">Guía:</span>{' '}
          <a href="/cuanto-cuesta-una-pagina-web-ibague" className={ENLACE_PIE}>
            ¿Cuánto cuesta una página web en Ibagué?
          </a>
        </p>
        <p>
          <span className="font-semibold text-niebla">Atención:</span> {HORARIO_VISIBLE}
        </p>
        <p>
          <span className="font-semibold text-niebla">Correo:</span>{' '}
          <a href={CORREO_URL} className={ENLACE_PIE}>
            {CORREO}
          </a>
        </p>
        <p>
          Esta página no usa cookies ni rastreadores de publicidad.{' '}
          <a href="/privacidad" className={ENLACE_PIE}>
            Aviso de privacidad
          </a>{' '}
          <span className="hidden md:inline" aria-hidden="true">·</span>{' '}
          <a href="/terminos" className={ENLACE_PIE}>
            Términos y condiciones
          </a>
        </p>
      </div>
      <span>© {new Date().getFullYear()} NODRA. Software a la medida en Ibagué, Tolima.</span>
    </footer>
    </>
  )
}
