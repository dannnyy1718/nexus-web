import { AGENDA_URL, BotonWhatsApp, CORREO, CORREO_URL, Encabezado, Pie, WHATSAPP_URL, WHATSAPP_VISIBLE } from './Marco'
import Escudo3D from './Escudo3D'
import MapaRed from './MapaRed'
import CelularJohana from './CelularJohana'
import { DemoCitas, DemoIA, DemoTienda } from './Demos'
import Pasos from './Pasos'
import { preguntas } from './negocio'

// GIF transparente de 1 píxel: lo que baja el celular en vez de las capturas de la vitrina (ver la vitrina)
const PIXEL_VACIO = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

// La app real de Johana, abierta directo en su lista de servicios (no en agendar)
const JOHANA_SERVICIOS = 'https://johana-sanchez-nails.web.app/#servicios'

// Cada servicio con un ejemplo que se puede tocar y una sola línea de texto (2026-10-21)
const servicios = [
  {
    titulo: 'Tiendas en línea',
    texto: 'Catálogo, carrito y pedidos. Tú cambias precios e inventario desde tu celular.',
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
                {/* SEO (2026-10-24): el H1 dice qué hacemos, para quién y dónde; Google lo usa para ubicarnos */}
                Apps a la medida para negocios en Ibagué.
              </h1>
              {/* Crítica de diseño 2026-10-28: NODRA es una empresa de software con varias apps (Danny), así que el
                  texto nombra lo que hacemos en palabras de cualquier negocio, sin "panel" ni "multiplataforma" */}
              <p className="mt-6 max-w-[34rem] text-lg text-bruma 2xl:max-w-[40rem] 2xl:text-xl">
                Tiendas en línea, agendas de citas y asistentes con inteligencia artificial, hechos aquí. Tus clientes
                compran o reservan desde el celular, y tú lo manejas todo desde el tuyo.
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
            <p className="mt-3 max-w-[34rem] text-bruma">Software hecho para tu negocio, no una plantilla. Prueba los ejemplos.</p>

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

          {/* Nuestros productos (crítica 2026-10-28): apps propias de NODRA, listas para usar. NODRA Agenda es la
              primera, no la única (Danny: "es una empresa de software"); las próximas se agregan aquí. */}
          <section id="productos" className="relative scroll-mt-8 pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-oro-vivo top-2" aria-hidden="true" />
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Nuestros productos</h2>
            <p className="mt-3 max-w-[34rem] text-bruma">Apps propias de NODRA, listas para usar desde hoy.</p>
            <div className="agenda mt-8 grid items-center gap-10 rounded-3xl border border-oro/40 p-5 md:p-10 lg:grid-cols-[1fr_15rem] lg:gap-16 2xl:grid-cols-[1fr_18rem] 2xl:px-16">
              <div>
                {/* La etiqueta "Disponible" va fuera del título: adentro, Google y los lectores de pantalla leían
                    "NODRA AgendaDisponible" (auditoría SEO 2026-10-24) */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-2xl font-semibold md:text-[2rem]">NODRA Agenda</h3>
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
                  <BotonWhatsApp />
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
                      nube, reglas de acceso estrictas y revisión contra las fallas más comunes de la web (el OWASP Top 10).
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
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Cómo trabajamos</h2>
            {/* 4 nodos que se encienden al bajar (Pasos.tsx) */}
            <Pasos />
          </section>

          {/* Seguridad (crítica 2026-10-28): en palabras del dueño del negocio. Sin "OWASP" (pasó a "Mi formación"),
              sin el anuncio de Cloud Security (es un servicio futuro para empresas, confundía aquí) y sin la imagen del
              candado, que se veía genérica y dejaba media sección vacía. */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-verde top-2" aria-hidden="true" />
            <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 2xl:grid-cols-[minmax(0,30rem)_1fr] 2xl:gap-24">
              <div>
                <h2 className="text-2xl font-semibold md:text-[2.25rem]">Seguridad desde el primer día</h2>
                <p className="mt-4 max-w-[40rem] text-lg">Solo tú ves los datos de tus clientes.</p>
              </div>
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
              </ul>
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
                {/* Crítica 2026-10-28: el cliente casi nunca llega con "una idea", llega con un problema. Se le pregunta
                    por su negocio y se le dice qué recibe (precio y fecha), sin prometer nada que no esté medido. */}
                <h2 className="mx-auto max-w-[36rem] text-3xl font-semibold leading-tight md:text-5xl lg:mx-0 2xl:max-w-[44rem] 2xl:text-6xl">
                  Cuéntanos cómo funciona tu negocio hoy.
                </h2>
                <p className="mx-auto mt-5 max-w-[34rem] text-lg text-bruma lg:mx-0">
                  Te respondemos con una propuesta sin costo: qué te sirve, cuánto cuesta y cuándo está lista.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
                  <BotonWhatsApp grande />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-verde">
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
          </section>
        </div>
      </main>

      <Pie />
    </>
  )
}
