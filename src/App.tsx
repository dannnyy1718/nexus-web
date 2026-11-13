import { Actualizada, AGENDA_URL, BotonWhatsApp, CORREO, CORREO_URL, Encabezado, enlaceWhatsApp, HORARIO_VISIBLE, MENSAJES, Pie, WHATSAPP_VISIBLE } from './Marco'
import { useState } from 'react'
import Escudo3D from './Escudo3D'
import MapaRed from './MapaRed'
import CelularJohana from './CelularJohana'
import { DemoCitas, DemoIA, DemoPagina, DemoTienda } from './Demos'
import Pasos from './Pasos'
import { ACTUALIZADA, COSTOS_APARTE, PRECIOS, preguntas, QUE_CAMBIA_EL_PRECIO, rangoPrecio } from './negocio'

// GIF transparente de 1 píxel: lo que baja el celular en vez de las capturas de la vitrina (ver la vitrina)
const PIXEL_VACIO = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

// "$1.000.000": el precio mínimo de PRECIOS[i], para el párrafo bajo el título de precios
const desde = (i: number) => `$${PRECIOS[i].desde.toLocaleString('es-CO')}`

// La app real de Johana, abierta directo en su lista de servicios (no en agendar)
const JOHANA_SERVICIOS = 'https://johana-sanchez-nails.web.app/#servicios'

// Cada servicio con un ejemplo que se puede tocar y una sola línea de texto (2026-10-21)
// Estudio de la web 2026-11-02: "Páginas web" va primero (es lo que más busca un negocio de Ibagué) y la IA queda
// "En preparación": NODRA todavía no ha entregado un asistente con IA y lo que se anuncia obliga (Ley 1480).
type Servicio = {
  titulo: string
  /** Nombre corto para el botón de elegir en celular (decisión 41) */
  corto: string
  texto: string
  Demo: () => React.JSX.Element
  enlace?: { href: string; texto: string; externo?: boolean }
  enPreparacion?: boolean
}
const servicios: Servicio[] = [
  {
    titulo: 'Páginas web',
    corto: 'Páginas web',
    texto: 'Tu negocio en Google y en el celular de tus clientes: servicios, fotos, cómo llegar y WhatsApp.',
    Demo: DemoPagina,
    // Enlace interno con la palabra clave: le dice a Google de qué trata la página nueva
    enlace: { href: '/paginas-web-ibague', texto: 'Páginas web en Ibagué: qué incluyen' },
  },
  {
    titulo: 'Tiendas en línea',
    corto: 'Tiendas',
    texto: 'Catálogo, carrito y pedidos. Tú cambias precios e inventario desde tu celular.',
    Demo: DemoTienda,
    enlace: { href: '/tienda-virtual-ibague', texto: 'Tiendas virtuales en Ibagué: qué incluyen' },
  },
  {
    titulo: 'Citas y reservas',
    corto: 'Citas',
    texto: 'Tus clientes agendan solos, sin llamar. Tú confirmas desde el celular.',
    Demo: DemoCitas,
    enlace: { href: '#johana', texto: 'Mira un ejemplo real' },
  },
  {
    titulo: 'Asistentes con inteligencia artificial',
    corto: 'Asistente IA',
    texto: 'Estamos preparando un asistente que responda a tus clientes por ti, con límite de gasto y sin exponer tus datos.',
    Demo: DemoIA,
    enlace: { href: enlaceWhatsApp(MENSAJES.ia), texto: 'Avísame cuando esté listo', externo: true },
    enPreparacion: true,
  },
]

// Servicios: en celular, 4 botones para elegir y un solo ejemplo a la vista (decisión 41, opinión de Fable 12-nov).
// Antes los 4 ejemplos apilados medían 2,5 pantallas; ahora los 4 nombres se ven de una y se muestra el elegido.
// Desde 768 px se ven los 4 como siempre. Los 4 textos y enlaces siguen en el HTML pre-armado (solo se esconden con
// una clase), así Google y las IA los leen igual. Empieza en "Páginas web" (lo más buscado en Ibagué).
function ListaServicios() {
  const [elegido, setElegido] = useState(0)
  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-2 md:hidden" role="group" aria-label="Elige un servicio para ver su ejemplo">
        {servicios.map((s, i) => (
          <button
            key={s.titulo}
            type="button"
            aria-pressed={i === elegido}
            onClick={() => setElegido(i)}
            className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-3 font-semibold ${
              i === elegido ? 'border-cian bg-cian/10 text-cian' : 'border-contorno'
            }`}
          >
            {i === elegido && <span aria-hidden="true">✓</span>}
            {s.corto}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-12 md:mt-10 md:grid-cols-2 lg:gap-8 2xl:grid-cols-4 2xl:gap-12">
        {servicios.map(({ titulo, texto, Demo, enlace, enPreparacion }, i) => (
          <li key={titulo} className={`max-w-[24rem] lg:max-w-none ${i === elegido ? '' : 'max-md:hidden'}`}>
            <Demo />
            <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold md:text-xl">{titulo}</h3>
              {enPreparacion && <span className="text-sm font-semibold text-oro">En preparación</span>}
            </div>
            <p className="mt-1 text-bruma">{texto}</p>
            {enlace && (
              <a
                href={enlace.href}
                className="enlace-flecha mt-2"
                {...(enlace.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {enlace.texto}
                {enlace.externo && <span className="sr-only"> (se abre en otra pestaña)</span>}
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

const seguridad = [
  'Tus empleados y tus clientes ven solo lo que les corresponde.',
  'Cada negocio tiene su propio espacio en la nube, sin mezclarse con otros.',
  'La conexión va cifrada y revisamos la app contra las fallas más comunes de la web.',
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
                {/* SEO (2026-10-24): el H1 dice qué hacemos, para quién y dónde; Google lo usa para ubicarnos.
                    Estudio 2026-11-02: "páginas web" primero, porque es lo que escribe en Google un negocio de Ibagué
                    (la competencia que sale primero dice "Diseño de páginas web en Ibagué"). */}
                Páginas web y apps para negocios en Ibagué.
              </h1>
              {/* Crítica de diseño 2026-10-28: NODRA es una empresa de software con varias apps (Danny), así que el
                  texto nombra lo que hacemos en palabras de cualquier negocio, sin "panel" ni "multiplataforma".
                  Auditoría SEO 2026-11-04 (M11.summary.missing_tldr): la 1.ª frase es un resumen que se entiende solo
                  (empresa + servicios + ciudad + un dato), para que Google y las IA la puedan citar tal cual. Solo usa
                  datos que ya están en la página: el precio sale de PRECIOS y la garantía de 6 meses va en Pasos y FAQ.
                  Medido a 360x740 (celular de gama media): con las dos frases el botón de WhatsApp quedaba en 864 px,
                  fuera de la 1.ª pantalla; por eso en celular solo va el resumen (botón en 724 px, igual que antes) y
                  la 2.ª frase aparece desde 640 px. No recortar el resumen sin volver a medir. */}
              <p className="mt-6 max-w-[34rem] text-lg text-bruma 2xl:max-w-[40rem] 2xl:text-xl">
                {`NODRA es una empresa de desarrollo de software en Ibagué, Tolima: páginas web desde $${PRECIOS[0].desde.toLocaleString('es-CO')}, tiendas en línea, citas y apps a la medida, con 6 meses de garantía.`}
                <span className="hidden sm:inline">
                  {' '}
                  Tus clientes te encuentran en Google, compran o reservan desde el celular, y tú lo manejas todo desde
                  el tuyo.
                </span>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BotonWhatsApp mensaje={MENSAJES.inicio} />
                <a
                  href="#precios"
                  className="rounded-full px-4 py-3 font-semibold text-cian underline-offset-4 hover:underline"
                >
                  Ver precios
                </a>
              </div>
              {/* Confianza junto al botón (estudio 2026-11-02): quién responde y cuándo, sin prometer tiempos que no se miden */}
              <p className="mt-4 text-sm text-bruma">Te responde Danny, el fundador · {HORARIO_VISIBLE}</p>
            </div>
            {/* Vitrina (crítica 2026-10-28): el escudo solo decía "marca"; ahora lo acompañan dos trabajos reales
                para que se vea que hacemos apps. Solo en computador: en el celular el título debe caber en la
                primera pantalla. Medido con Lighthouse 2026-10-28: aunque estén ocultas y con loading="lazy", Chrome las bajaba
                en el celular (40 KB de más); con <picture> + media solo el computador baja la captura real y el
                celular recibe un GIF vacío de 1 píxel (data:, permitido por la CSP en img-src). */}
            <div className="vitrina relative order-1 md:order-2">
              <Escudo3D />
              <figure className="vitrina-cel vitrina-izq hidden lg:block">
                <div className="celular">
                  <picture>
                    <source media="(min-width: 1024px)" srcSet="/img/johana-inicio.webp" />
                    <img
                      src={PIXEL_VACIO}
                      width={480}
                      height={860}
                      loading="lazy"
                      alt="App de citas de Johana Sánchez Nails, hecha por NODRA"
                      className="block h-auto w-full"
                    />
                  </picture>
                </div>
                <figcaption>App de Johana</figcaption>
              </figure>
              <figure className="vitrina-cel vitrina-der hidden lg:block">
                <div className="celular">
                  <picture>
                    <source media="(min-width: 1024px)" srcSet="/img/agenda-portada.webp" />
                    <img
                      src={PIXEL_VACIO}
                      width={480}
                      height={860}
                      loading="lazy"
                      alt="NODRA Agenda, nuestro producto de citas"
                      className="block h-auto w-full"
                    />
                  </picture>
                </div>
                <figcaption>NODRA Agenda</figcaption>
              </figure>
            </div>
          </section>

          {/* Servicios */}
          <section id="servicios" className="relative scroll-mt-8 pb-24 pl-12 md:pl-24">
            <span className="nodo top-2" aria-hidden="true" />
            {/* H2 con las palabras que busca la gente (auditoría SEO 2026-11-04): "Qué hacemos" no decía de qué
                trata la sección. "Ibagué" va solo en el H1 y en un H2 para no sonar forzado (ver DECISIONES.md). */}
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Desarrollo de software para negocios</h2>
            <p className="mt-3 max-w-[34rem] text-bruma">
              Páginas web, tiendas en línea y apps a la medida, hechas en Ibagué. Prueba los ejemplos.
            </p>

            {/* Un ejemplo para tocar por servicio (Demos.tsx), con una sola línea de texto */}
            <ListaServicios />
          </section>

          {/* Precios (estudio de la web 2026-11-02): rangos de referencia en vez de "depende". Los datos y cómo se
              calcularon están en negocio.ts (PRECIOS). Va justo después de "Qué hacemos": primero qué es, luego
              cuánto vale, luego la prueba (productos y proyecto real). */}
          <section id="precios" className="relative scroll-mt-8 pb-24 pl-12 md:pl-24" aria-labelledby="titulo-precios">
            <span className="nodo nodo-oro-vivo top-2" aria-hidden="true" />
            <h2 id="titulo-precios" className="text-2xl font-semibold md:text-[2.25rem]">Precios de páginas web y apps</h2>
            {/* Las cifras van también aquí, justo bajo el título (auditoría GEO 2026-11-04): las IA citan el primer
                párrafo después del encabezado, y antes no tenía ningún precio. Salen de PRECIOS (un solo lugar). */}
            <p className="mt-3 max-w-[38rem] text-bruma">
              Página web desde {desde(0)}, tienda en línea o agenda desde {desde(1)} y app a la medida desde{' '}
              {desde(2)}. Son precios de referencia: el exacto te llega por escrito, sin costo, antes de empezar.
            </p>
            <ul className="mt-8 grid max-w-[60rem] border-t border-linea">
              {PRECIOS.map((p) => (
                <li key={p.tipo} className="grid gap-1 border-b border-linea py-5 last:border-b-0 md:grid-cols-[1fr_auto] md:gap-x-10">
                  <h3 className="text-lg font-semibold md:text-xl">{p.tipo}</h3>
                  <p className="text-xl font-semibold text-verde tabular-nums md:row-span-2 md:self-center md:text-right md:text-2xl">
                    {rangoPrecio(p)}
                  </p>
                  <p className="max-w-[36rem] text-bruma">{p.incluye}</p>
                </li>
              ))}
            </ul>
            {/* Plegado (mismo desplegable que las preguntas): en celular las dos listas alargaban la sección ~800 px.
                Está en el HTML, así que Google y las IA lo leen igual aunque esté cerrado. */}
            <details className="pregunta max-w-[60rem] border-b border-linea">
              <summary>Qué cambia el precio y qué se paga aparte</summary>
              <div className="grid gap-8 pb-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">Qué cambia el precio</h3>
                <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-bruma">
                  {QUE_CAMBIA_EL_PRECIO.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Aparte, si lo necesitas</h3>
                <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-bruma">
                  {COSTOS_APARTE.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              </div>
            </details>
            <p className="mt-6 max-w-[44rem] text-bruma">
              Pagas el 50 % al empezar y el 50 % al recibirla funcionando, con 6 meses de garantía. ¿Solo necesitas una
              agenda de citas?{' '}
              <a href="/app-de-citas-ibague" className="font-semibold text-cian underline underline-offset-4">
                NODRA Agenda
              </a>{' '}
              tiene un plan gratis.
            </p>
            {/* Hacia la guía de precios (auditoría 2026-11-12): desde el texto de la portada no se llegaba a ella */}
            <a href="/cuanto-cuesta-una-pagina-web-ibague" className="enlace-flecha mt-3">
              Guía: cuánto cuesta una página web en Ibagué
            </a>
            <div className="mt-7">
              <BotonWhatsApp mensaje={MENSAJES.precios} />
            </div>
          </section>

          {/* Nuestros productos (crítica 2026-10-28): apps propias de NODRA, listas para usar. NODRA Agenda es la
              primera, no la única (Danny: "es una empresa de software"); las próximas se agregan aquí. */}
          <section id="productos" className="relative scroll-mt-8 pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-oro-vivo top-2" aria-hidden="true" />
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Apps listas para usar en tu negocio</h2>
            <p className="mt-3 max-w-[34rem] text-bruma">Apps propias de NODRA, listas para usar desde hoy.</p>
            <div className="agenda mt-8 grid items-center gap-10 rounded-3xl border border-oro/40 p-5 md:p-10 lg:grid-cols-[1fr_15rem] lg:gap-16 2xl:grid-cols-[1fr_18rem] 2xl:px-16">
              <div>
                {/* La etiqueta "Disponible" va fuera del título: adentro, Google y los lectores de pantalla leían
                    "NODRA AgendaDisponible" (auditoría SEO 2026-10-24) */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-2xl font-semibold md:text-[2rem]">NODRA Agenda: app de citas para negocios</h3>
                  <span className="font-sans text-base font-semibold text-verde">Disponible</span>
                </div>
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
                {/* Enlace interno a la página de la app de citas: Google la encuentra y entiende de qué trata por el
                    texto del enlace (auditoría SEO 2026-10-24) */}
                <a href="/app-de-citas-ibague" className="enlace-flecha mt-4">
                  Ver precios y cómo funciona
                </a>
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

          {/* Proyecto real */}
          <section id="johana" className="relative scroll-mt-8 pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-verde top-2" aria-hidden="true" />
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Caso real: la app de un estudio de uñas en Ibagué</h2>
            {/* Pedido de Danny 2026-11-02 (captura en PC): el texto se veía pequeño y flotando en medio de mucho espacio
                vacío junto al celular. Ahora va arriba (items-start), con letra más grande en computador y la lista de
                lo que hace la app (las mismas pestañas reales que se ven en el celular de al lado). */}
            <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:pt-6 2xl:gap-20">
              <div>
                <h3 className="text-xl font-semibold text-verde lg:text-3xl">Johana Sánchez Nails</h3>
                <p className="mt-1 text-sm text-bruma lg:text-base">Estudio de belleza en Ibagué</p>
                <p className="mt-4 max-w-[34rem] lg:text-xl">
                  Sus clientas agendan sin llamar. Johana confirma las citas y cambia sus servicios desde su
                  celular.
                </p>
                {/* Solo en computador (decisión 41): en celular repetía lo que ya muestra el celular deslizable */}
                <ul className="mt-6 hidden max-w-[34rem] gap-3 lg:grid lg:text-lg">
                  {[
                    'Inicio con su marca, sus servicios y sus precios.',
                    'Agendar: la clienta elige servicio, día y hora libre.',
                    'Galería con fotos de sus trabajos.',
                    'Panel privado para confirmar citas y cambiar servicios.',
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2.5 size-2 shrink-0 rounded-full bg-verde" aria-hidden="true" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
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

          {/* Mapa: Ibagué conectada con el mundo. Estudio 2026-11-02: bajó de la 2.ª pantalla a después del proyecto real
              (Danny: "sí, bájalo"); arriba va lo que decide la compra (qué hacemos, precios, trabajo real). */}
          <section className="relative pb-24 pl-12 md:pl-24" aria-labelledby="titulo-mapa">
            <span className="nodo nodo-lleno top-2" aria-hidden="true" />
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
              <h2 id="titulo-mapa" className="max-w-[30rem] text-2xl font-semibold md:text-[2.25rem] 2xl:max-w-[36rem] 2xl:text-[2.75rem]">
                Hecha en Ibagué, Tolima. Abierta al mundo.
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

          {/* Quién está detrás (auditoría SEO 2026-10-24): Google y las IA confían más cuando se ve una persona real
              con su formación. Solo datos verdaderos, revisados por Danny; la Policía no va por decisión suya.
              Crítica 2026-10-28: sube justo después del trabajo real y lleva la foto de Danny (real, recortada para
              quitar el carnet de la Policía) junto al botón de WhatsApp: la gente le compra a una persona. */}
          <section id="quienes-somos" className="relative scroll-mt-8 pb-24 pl-12 md:pl-24">
            <span className="nodo top-2" aria-hidden="true" />
            <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 2xl:grid-cols-[minmax(0,30rem)_1fr] 2xl:gap-24">
              <div className="flex items-center gap-5 lg:flex-col lg:items-start">
                <img
                  src="/img/danny-360.webp"
                  width={360}
                  height={360}
                  loading="lazy"
                  alt="Danny Javier Díaz, fundador de NODRA"
                  className="foto-danny size-24 shrink-0 rounded-full md:size-32 lg:size-44 2xl:size-52"
                />
                <h2 className="text-2xl font-semibold md:text-[2.25rem]">Quién está detrás de NODRA</h2>
              </div>
              <div className="max-w-[44rem] 2xl:max-w-[50rem] 2xl:text-lg">
                <p>
                  Soy <strong>Danny Javier Díaz</strong>, de Ibagué. Fundé NODRA en 2026 para que los negocios del Tolima
                  tengan apps hechas a su medida, sin pagar precios de agencia grande.
                </p>
                <p className="mt-4">Cuando escribes a NODRA, te respondo yo.</p>
                <div className="mt-6">
                  <BotonWhatsApp mensaje={MENSAJES.danny} />
                </div>
                {/* El resto va plegado para no llenar la portada de texto (pedido de Danny). Mismo desplegable que las
                    preguntas: funciona sin JavaScript y Google igual lo lee porque está en el HTML */}
                <details className="pregunta mt-6 border-b border-linea">
                  <summary>Mi formación y cómo trabajo</summary>
                  <div className="grid gap-4 pb-5 text-bruma">
                    <p>
                      Me formé como Técnico en Sistemas y Tecnólogo en Análisis y Desarrollo de Software en el SENA, y hoy
                      estudio Ingeniería en Seguridad de la Información en el Politécnico Grancolombiano. Por eso cada app
                      que entrego nace con la seguridad pensada desde el primer día: cada negocio en su propio espacio en la
                      nube, reglas de acceso estrictas y revisión contra las fallas más comunes de la web.
                    </p>
                    {/* Dato con fuente y año (2026-11-04, sacado de la página de ProColombia "Software y servicios TI"):
                        las IA citan más los textos con cifras verificables. Es de 2021: si sale un dato más nuevo de IDC,
                        cambiarlo aquí con su año. Nunca poner cifras sin fuente (regla 8.6). */}
                    <p>
                      Hago el software desde Ibagué, en un país que en 2021 fue el tercer mercado de tecnología más grande
                      de Latinoamérica, según la firma de estudios IDC.
                    </p>
                    <p>
                      Trabajo directo contigo: me escribes por WhatsApp, te explico todo en palabras sencillas y no
                      desaparezco después de la entrega. Cada app tiene 6 meses de garantía.
                    </p>
                    <p>Antes nos llamábamos NEXUS; desde octubre de 2026 somos NODRA.</p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Proceso */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo top-2" aria-hidden="true" />
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Cómo hacemos tu página web o app</h2>
            {/* 4 nodos que se encienden al bajar (Pasos.tsx) */}
            <Pasos />

            {/* Seguridad, dentro de "Cómo hacemos" (decisión 41): antes era una sección aparte de 0,6 pantallas en
                celular. En palabras del dueño del negocio, sin "OWASP" ni Cloud Security (crítica 2026-10-28). */}
            <h3 className="mt-14 text-xl font-semibold md:text-2xl">Segura desde el primer día</h3>
            <p className="mt-2 text-lg">Solo tú ves los datos de tus clientes.</p>
            <ul className="mt-6 grid max-w-[60rem] gap-5 md:grid-cols-3 md:gap-8 2xl:text-lg">
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
            </ul>
          </section>

          {/* Preguntas frecuentes */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo top-2" aria-hidden="true" />
            <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 2xl:grid-cols-[minmax(0,24rem)_1fr] 2xl:gap-20">
            {/* En computador el título se queda fijo al bajar (sticky) y lleva una salida a WhatsApp:
                así la columna izquierda no queda vacía y quien no encuentra su respuesta sabe qué hacer */}
            <div className="lg:sticky lg:top-10 lg:self-start">
              <h2 className="text-2xl font-semibold md:text-[2.25rem]">Preguntas frecuentes sobre páginas web y apps</h2>
              <p className="mt-4 max-w-[22rem] text-bruma 2xl:text-lg">¿Tu pregunta no está aquí? Escríbenos y te respondemos.</p>
              <a href={enlaceWhatsApp(MENSAJES.pregunta)} target="_blank" rel="noopener noreferrer" className="enlace-flecha mt-3">
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
                {/* Crítica 2026-10-28: el cliente casi nunca llega con "una idea", llega con un problema. Se le pregunta
                    por su negocio y se le dice qué recibe (precio y fecha), sin prometer nada que no esté medido. */}
                <h2 className="mx-auto max-w-[36rem] text-3xl font-semibold leading-tight md:text-5xl lg:mx-0 2xl:max-w-[44rem] 2xl:text-6xl">
                  Cuéntanos cómo funciona tu negocio hoy.
                </h2>
                {/* Oferta (estudio 2026-11-02, ecuación de valor): menos esfuerzo para el cliente (una conversación, sin
                    compromiso) y más certeza (garantía). Nada que Danny no pueda cumplir con todos. */}
                <p className="mx-auto mt-5 max-w-[34rem] text-lg text-bruma lg:mx-0">
                  En una conversación corta por WhatsApp te digo qué te sirve, cuánto cuesta y cuándo está lista. Sin
                  compromiso, y con 6 meses de garantía si la hacemos.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
                  <BotonWhatsApp grande mensaje={MENSAJES.cierre} />
                  <a href={enlaceWhatsApp(MENSAJES.cierre)} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-verde">
                    {WHATSAPP_VISIBLE}
                  </a>
                  <a href={CORREO_URL} className="font-semibold hover:text-verde">
                    {CORREO}
                  </a>
                </div>
              </div>
              {/* Cierre con la cara de Danny (crítica 2026-10-28): el escudo borroso de antes parecía un error de carga.
                  Es la misma foto de "Quién está detrás" (ya está en caché). Solo en computador. */}
              <figure className="hidden text-center lg:block">
                <img
                  src="/img/danny-360.webp"
                  width={360}
                  height={360}
                  loading="lazy"
                  alt=""
                  className="foto-danny mx-auto size-48 rounded-full 2xl:size-60"
                />
                <figcaption className="mt-4 text-bruma">Te responde Danny, fundador de NODRA</figcaption>
              </figure>
            </div>
            <Actualizada fecha={ACTUALIZADA.inicio} className="mt-12 text-center lg:text-left" />
          </section>
        </div>
      </main>

      <Pie />
    </>
  )
}
