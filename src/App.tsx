import { BotonWhatsApp, Encabezado, Pie, WHATSAPP_URL, WHATSAPP_VISIBLE } from './Marco'
import Escudo3D from './Escudo3D'
import MapaRed from './MapaRed'
import CelularJohana from './CelularJohana'
import { DemoCitas, DemoIA, DemoTienda } from './Demos'
import Pasos from './Pasos'
import { preguntas } from './negocio'

// La app real de Johana, abierta directo en su lista de servicios (no en agendar)
const JOHANA_SERVICIOS = 'https://johana-sanchez-nails.web.app/#servicios'
// NODRA Agenda ya está publicada: el botón lleva a su portada, donde el negocio crea su agenda
const AGENDA_URL = 'https://nexus-agenda-co.web.app/'

// Cada servicio con un ejemplo que se puede tocar y una sola línea de texto (2026-10-21)
const servicios = [
  {
    titulo: 'Tiendas en línea',
    texto: 'Catálogo, carrito y pedidos. Tú cambias precios e inventario desde un panel.',
    Demo: DemoTienda,
  },
  {
    titulo: 'Citas y reservas',
    texto: 'Tus clientes agendan solos, sin llamar. Tú confirmas desde el celular.',
    Demo: DemoCitas,
    enlace: { href: '#johana', texto: 'Mira un ejemplo real' },
  },
  {
    titulo: 'Apps con inteligencia artificial',
    texto: 'Un asistente que responde a tus clientes, con límite de gasto y sin exponer tus datos.',
    Demo: DemoIA,
  },
]

const seguridad = [
  'Cada persona ve solo lo que le corresponde: reglas de acceso estrictas.',
  'Cada negocio en su propio espacio en la nube, sin mezclarse con otros.',
]

export default function App() {
  return (
    <>
      <Encabezado />

      <main id="contenido" className="mx-auto max-w-[92rem] overflow-x-clip px-4 md:px-8 xl:px-12">
        <div className="circuito">
          {/* Hero */}
          <section className="relative grid items-center gap-8 pb-24 pt-6 pl-12 md:grid-cols-[1.1fr_1fr] md:pl-24 md:pt-12">
            <span className="nodo nodo-lleno top-8 md:top-16" aria-hidden="true" />
            <div className="order-2 md:order-1">
              <h1 className="text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.6rem] 2xl:text-[4.6rem]">
                Apps para tu negocio, hechas a la medida.
              </h1>
              <p className="mt-6 max-w-[34rem] text-lg text-bruma 2xl:max-w-[40rem] 2xl:text-xl">
                Desde Ibagué creamos aplicaciones que funcionan en Android, iPhone y computador. Tus clientes
                agendan o compran desde el celular, y tú lo manejas todo desde un panel.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BotonWhatsApp />
                <a
                  href="#servicios"
                  className="rounded-full px-4 py-3 font-semibold text-cian underline-offset-4 hover:underline"
                >
                  Ver qué hacemos
                </a>
              </div>
            </div>
            <Escudo3D />
          </section>

          {/* Mapa: Ibagué conectada con el mundo */}
          <section className="relative pb-24 pl-12 md:pl-24" aria-labelledby="titulo-mapa">
            <span className="nodo nodo-lleno top-2" aria-hidden="true" />
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
              <h2 id="titulo-mapa" className="max-w-[30rem] text-2xl font-semibold md:text-[2.25rem] 2xl:max-w-[36rem] 2xl:text-[2.75rem]">
                Hecha en Ibagué, abierta al mundo.
              </h2>
              <p className="max-w-[26rem] text-bruma 2xl:max-w-[32rem] 2xl:text-lg">
                Tu app vive en la nube de Google: tus clientes la abren desde cualquier celular o computador,
                estén donde estén.
              </p>
            </div>
            <MapaRed />
            <p className="mt-3 text-sm text-bruma">
              <span className="hidden md:inline">Pasa el mouse por el mapa o haz clic</span>
              <span className="md:hidden">Toca el mapa</span> para enviar una conexión desde Ibagué.
            </p>
          </section>

          {/* Servicios */}
          <section id="servicios" className="relative scroll-mt-8 pb-24 pl-12 md:pl-24">
            <span className="nodo top-2" aria-hidden="true" />
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Qué hacemos</h2>
            <p className="mt-3 max-w-[34rem] text-bruma">Apps a la medida para tu negocio. Prueba los ejemplos.</p>

            {/* Un ejemplo para tocar por servicio (Demos.tsx), con una sola línea de texto */}
            <ul className="mt-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 2xl:gap-12">
              {servicios.map(({ titulo, texto, Demo, enlace }) => (
                <li key={titulo} className="max-w-[24rem] lg:max-w-none">
                  <Demo />
                  <h3 className="mt-5 text-lg font-semibold md:text-xl">{titulo}</h3>
                  <p className="mt-1 text-bruma">{texto}</p>
                  {enlace && (
                    <a href={enlace.href} className="enlace-flecha mt-2">
                      {enlace.texto}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Proyecto real */}
          <section id="johana" className="relative scroll-mt-8 pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-verde top-2" aria-hidden="true" />
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Un proyecto real</h2>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] 2xl:gap-20">
              <div>
                <h3 className="text-xl font-semibold text-verde">Johana Sánchez Nails</h3>
                <p className="mt-1 text-sm text-bruma">Estudio de belleza</p>
                <p className="mt-4 max-w-[34rem]">
                  Sus clientas agendan sin llamar. Johana confirma las citas y cambia sus servicios desde su
                  celular.
                </p>
                <a
                  href={JOHANA_SERVICIOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-verde px-6 py-3 font-semibold text-verde transition-colors hover:bg-verde hover:text-abismo"
                >
                  Ver la app en vivo
                  <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="sr-only"> (se abre en otra pestaña)</span>
                </a>
                <p className="mt-3 text-sm text-bruma">Abre sus servicios y precios reales.</p>
              </div>
              {/* Un solo celular grande que se desliza, con las pantallas reales (CelularJohana.tsx) */}
              <CelularJohana />
            </div>
          </section>

          {/* NODRA Agenda: el producto listo para usar (publicado el 2026-10-10) */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-oro-vivo top-2" aria-hidden="true" />
            <div className="agenda grid items-center gap-10 rounded-3xl border border-oro/40 p-5 md:p-10 lg:grid-cols-[1fr_15rem] lg:gap-16 2xl:grid-cols-[1fr_18rem] 2xl:px-16">
              <div>
                <h2 className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-2xl font-semibold md:text-[2.25rem]">
                  NODRA Agenda
                  <span className="font-sans text-base font-semibold text-verde">Disponible</span>
                </h2>
                <p className="mt-4 max-w-[36rem]">
                  Tu página de citas lista en minutos, con tu logo, servicios y horario. Tus clientas reservan
                  solas, sin crear cuenta.
                </p>
                <p className="mt-2 max-w-[36rem] text-sm text-bruma">
                  Uñas, peluquería, barbería, estética, spa, consultorios y más.
                </p>
                <a
                  href={AGENDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boton-3d boton-oro mt-7 inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 font-semibold text-abismo sm:px-6"
                >
                  Crear mi agenda gratis
                  <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="sr-only"> (se abre en otra pestaña)</span>
                </a>
                <p className="mt-3 text-sm text-bruma">Sin tarjeta de crédito.</p>
              </div>
              {/* Captura de la portada real de NODRA Agenda (no tiene datos de clientes) */}
              <figure className="mx-auto w-full max-w-[15rem] 2xl:max-w-[18rem]">
                <div className="celular">
                  <img
                    src="/img/agenda-portada.webp"
                    width={480}
                    height={860}
                    loading="lazy"
                    alt="Portada de NODRA Agenda: Tu agenda de citas, con tu marca, en tu celular, y el botón Crear mi agenda gratis"
                    className="block h-auto w-full"
                  />
                </div>
              </figure>
            </div>
          </section>

          {/* Proceso */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo top-2" aria-hidden="true" />
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Cómo trabajamos</h2>
            {/* 4 nodos que se encienden al bajar (Pasos.tsx) */}
            <Pasos />
          </section>

          {/* Seguridad */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-verde top-2" aria-hidden="true" />
            {/* En computador: título a la izquierda y lista a la derecha, para no dejar media pantalla vacía */}
            <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 2xl:grid-cols-[minmax(0,30rem)_1fr] 2xl:gap-24">
              <div>
                <h2 className="text-2xl font-semibold md:text-[2.25rem]">Seguridad desde el primer día</h2>
                <p className="mt-4 max-w-[40rem] text-bruma">
                  NODRA nace de la ingeniería en ciberseguridad.
                </p>
                {/* Ilustración hecha con Gemini (2026-10-14): escudo y candado sobre la nube, con los colores de la marca.
                    Dos tamaños: el celular baja la de 400 px (22 KB) y el computador la de 720 px (48 KB) */}
                <img
                  src="/img/seguridad-400.webp"
                  srcSet="/img/seguridad-400.webp 400w, /img/seguridad-720.webp 720w"
                  sizes="(min-width: 1536px) 28rem, (min-width: 1024px) 22rem, 18rem"
                  width={720}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="imagen-fundida mt-8 w-full max-w-[18rem] lg:max-w-[22rem] 2xl:max-w-[28rem]"
                />
              </div>
              <div>
            <ul className="grid max-w-[44rem] gap-5 lg:pt-2 2xl:max-w-[50rem] 2xl:gap-7 2xl:text-lg">
              {seguridad.map((t) => (
                <li key={t} className="flex gap-4">
                  <svg viewBox="0 0 24 24" className="mt-1 size-5 shrink-0 text-verde" aria-hidden="true">
                    <path
                      d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-1.2 13.6L7.3 12l1.4-1.4 2.1 2.1 4.5-4.5 1.4 1.4-5.9 6Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
              <li className="flex gap-4">
                <svg viewBox="0 0 24 24" className="mt-1 size-5 shrink-0 text-verde" aria-hidden="true">
                  <path
                    d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-1.2 13.6L7.3 12l1.4-1.4 2.1 2.1 4.5-4.5 1.4 1.4-5.9 6Z"
                    fill="currentColor"
                  />
                </svg>
                <span>
                  Conexión cifrada y revisión contra las fallas más comunes de la web, el{' '}
                  <a
                    href="https://owasp.org/www-project-top-ten/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cian underline underline-offset-4 hover:decoration-2"
                  >
                    OWASP Top 10
                    <span className="sr-only"> (se abre en otra pestaña)</span>
                  </a>
                  .
                </span>
              </li>
            </ul>
                <p className="mt-8 max-w-[44rem] border-t border-linea pt-5 text-bruma">
                  <span className="font-semibold text-oro">Próximo servicio: Cloud Security.</span> Protegeremos la nube
                  donde viven los datos de tu empresa.
                </p>
              </div>
            </div>
          </section>

          {/* Preguntas frecuentes */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo top-2" aria-hidden="true" />
            <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 2xl:grid-cols-[minmax(0,24rem)_1fr] 2xl:gap-20">
            {/* En computador el título se queda fijo al bajar (sticky) y lleva una salida a WhatsApp:
                así la columna izquierda no queda vacía y quien no encuentra su respuesta sabe qué hacer */}
            <div className="lg:sticky lg:top-10 lg:self-start">
              <h2 className="text-2xl font-semibold md:text-[2.25rem]">Preguntas frecuentes</h2>
              <p className="mt-4 max-w-[22rem] text-bruma 2xl:text-lg">¿Tu pregunta no está aquí? Escríbenos y te respondemos.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="enlace-flecha mt-3">
                Preguntar por WhatsApp
                <span className="sr-only"> (se abre en otra pestaña)</span>
              </a>
            </div>
            {/* Cada pregunta se abre al tocarla: details/summary del navegador, funciona con teclado y sin
                JavaScript, y Google igual lee las respuestas (están en el HTML) */}
            <div className="max-w-[46rem] border-b border-linea lg:pt-2">
              {preguntas.map((p) => (
                <details key={p.pregunta} className="pregunta">
                  <summary>{p.pregunta}</summary>
                  <p className="pb-5 text-bruma">{p.respuesta}</p>
                </details>
              ))}
            </div>
            </div>
          </section>

          {/* Llamado final */}
          <section className="relative pb-20 pl-12 md:pl-24">
            <span className="nodo nodo-oro top-3 bg-oro" aria-hidden="true" />
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_17rem] 2xl:grid-cols-[1fr_24rem]">
              {/* En celular y tableta va centrado (cierre de la página); en computador, a la izquierda junto al escudo */}
              <div className="text-center lg:text-left">
                <h2 className="mx-auto max-w-[36rem] text-3xl font-semibold leading-tight md:text-5xl lg:mx-0 2xl:max-w-[44rem] 2xl:text-6xl">
                  ¿Tienes una idea para tu negocio?
                </h2>
                <p className="mx-auto mt-5 max-w-[34rem] text-lg text-bruma lg:mx-0">
                  Cuéntanosla por WhatsApp y te respondemos con una propuesta.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
                  <BotonWhatsApp grande />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-verde">
                    {WHATSAPP_VISIBLE}
                  </a>
                </div>
              </div>
              {/* El mismo escudo del inicio (ya está en caché, no descarga nada nuevo), solo en computador */}
              <img
                src="/img/escudo-560.webp"
                width={480}
                height={480}
                loading="lazy"
                alt=""
                className="escudo hidden lg:block"
              />
            </div>
          </section>
        </div>
      </main>

      <Pie />
    </>
  )
}
