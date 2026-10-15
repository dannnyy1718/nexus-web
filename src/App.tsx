import { BotonWhatsApp, Encabezado, Pie, WHATSAPP_URL, WHATSAPP_VISIBLE } from './Marco'
import Escudo3D from './Escudo3D'
import MapaRed from './MapaRed'
import PantallasJohana from './PantallasJohana'
import { preguntas } from './negocio'

// La app real de Johana, abierta directo en su lista de servicios (no en agendar)
const JOHANA_SERVICIOS = 'https://johana-sanchez-nails.web.app/#servicios'
// NEXUS Agenda ya está publicada: el botón lleva a su portada, donde el negocio crea su agenda
const AGENDA_URL = 'https://nexus-agenda-co.web.app/'

const servicios: { titulo: string; texto: string; enlace?: { href: string; texto: string } }[] = [
  {
    titulo: 'Tiendas en línea',
    texto:
      'Catálogo, carrito y pedidos por WhatsApp o con pago en línea. Tú cambias productos, precios e inventario desde un panel.',
  },
  {
    titulo: 'Citas y reservas',
    texto:
      'Tus clientes ven los horarios libres y agendan solos, sin llamar. Tú confirmas o cancelas desde el celular.',
    enlace: { href: '#johana', texto: 'Mira un ejemplo real' },
  },
  {
    titulo: 'Apps con inteligencia artificial',
    texto:
      'Un asistente que responde a tus clientes, lee fotos de facturas o escribe las descripciones de tus productos. Con límite de gasto y sin exponer tus datos.',
  },
]

const pasos = [
  {
    titulo: 'Conversamos',
    icono: 'M4 5h16v11H10l-4 3.5V16H4z M8 10h8 M8 13h5',
    texto: 'Nos cuentas por WhatsApp qué necesita tu negocio. La primera conversación no tiene costo.',
  },
  {
    titulo: 'Recibes una propuesta clara',
    icono: 'M6 3h8l4 4v14H6z M14 3v4h4 M9 12h6 M9 16h4',
    texto:
      'Qué incluye, cuánto cuesta y cuándo se entrega. Si la app necesita servicios externos, como dominio, servidores o publicarla en Play Store o App Store, te decimos su costo antes de empezar.',
  },
  {
    titulo: 'La construimos',
    icono: 'M9 8l-4 4 4 4 M15 8l4 4-4 4 M13.5 5l-3 14',
    texto: 'Pagas el 50 % para arrancar y ves los avances mientras la desarrollamos.',
  },
  {
    titulo: 'La entregamos',
    icono: 'M8 2.5h8a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1z M9.5 12l2 2 3.5-3.5',
    texto: 'Pagas el otro 50 % al recibirla funcionando. Incluye 6 meses de garantía.',
  },
]

const seguridad = [
  'Tus datos y los de tus clientes protegidos con reglas de acceso estrictas: cada persona ve solo lo que le corresponde.',
  'Cada negocio tiene su propio espacio en la nube. Tu información nunca se mezcla con la de otro cliente.',
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

            <div className="relative mt-10">
              <span className="rama en-rama top-5" aria-hidden="true" />
              <span className="nodo nodo-lleno en-rama top-[0.85rem]" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-cian md:text-3xl">Apps móviles y web a la medida</h3>
              <p className="mt-3 max-w-[40rem] text-bruma">
                Diseñamos desde cero la app que tu negocio necesita. Una sola aplicación multiplataforma que
                se instala en el celular como cualquier otra y también abre en el computador.
              </p>
              <ul className="plataformas mt-5 text-sm font-semibold" aria-label="Plataformas">
                <li>
                  <span className="rounded-full border border-linea px-3 py-1">Android</span>
                </li>
                <li>
                  <span className="rounded-full border border-linea px-3 py-1">iPhone</span>
                </li>
                <li>
                  <span className="rounded-full border border-linea px-3 py-1">Computador</span>
                </li>
              </ul>
            </div>

            <ul className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {servicios.map((s) => (
                <li key={s.titulo} className="max-w-[30rem] 2xl:max-w-none">
                  <h3 className="text-lg font-semibold md:text-xl">{s.titulo}</h3>
                  <p className="mt-2 text-bruma">{s.texto}</p>
                  {s.enlace && (
                    <a href={s.enlace.href} className="enlace-flecha mt-3">
                      {s.enlace.texto}
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
            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] 2xl:gap-20">
              <div>
                <h3 className="text-xl font-semibold text-verde">Johana Sánchez Nails</h3>
                <p className="mt-1 text-sm text-bruma">Estudio de belleza</p>
                <p className="mt-5 max-w-[34rem]">
                  Sus clientas ven los servicios y precios, eligen un horario libre y agendan sin llamar.
                  Johana confirma las citas y cambia sus servicios desde un panel privado en su celular.
                </p>
                <p className="mt-4 max-w-[34rem] text-bruma">
                  Funciona como app instalable en Android y iPhone, con inicio de sesión seguro y los datos
                  de cada clienta protegidos.
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
              <div className="flex items-start justify-center gap-4 sm:gap-6">
                <PantallasJohana />
                <figure className="min-w-0 max-w-[16rem] flex-1 basis-0 2xl:max-w-[19rem]">
                  {/* Mismo marco que el carrusel de la clienta, para que los dos celulares midan igual */}
                  <div className="celular pantallas">
                    <img
                      src="/img/johana-panel.webp"
                      width={480}
                      height={860}
                      loading="lazy"
                      alt="Panel de administración: resumen de citas del día y pestañas de citas, servicios y galería"
                      className="pantalla pantalla-activa"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-sm text-bruma">Lo que ve Johana</figcaption>
                </figure>
              </div>
            </div>
          </section>

          {/* NEXUS Agenda: el producto listo para usar (publicado el 2026-10-10) */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-oro-vivo top-2" aria-hidden="true" />
            <div className="agenda grid items-center gap-10 rounded-3xl border border-oro/40 p-5 md:p-10 lg:grid-cols-[1fr_15rem] lg:gap-16 2xl:grid-cols-[1fr_18rem] 2xl:px-16">
              <div>
                <h2 className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-2xl font-semibold md:text-[2.25rem]">
                  NEXUS Agenda
                  <span className="font-sans text-base font-semibold text-verde">Disponible</span>
                </h2>
                <p className="mt-4 max-w-[36rem]">
                  La app de citas propia de NEXUS, lista para cualquier negocio que trabaje con citas: uñas,
                  peluquería, barbería, estética, spa, consultorios y más.
                </p>
                <p className="mt-3 max-w-[36rem] text-bruma">
                  Creas la página de tu negocio en minutos, le pones tu logo, colores, servicios y horario, y tus
                  clientas reservan solas desde el celular, sin crear cuenta.
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
              {/* Captura de la portada real de NEXUS Agenda (no tiene datos de clientes) */}
              <figure className="mx-auto w-full max-w-[12rem] lg:max-w-[15rem] 2xl:max-w-[18rem]">
                <div className="celular">
                  <img
                    src="/img/agenda-portada.webp"
                    width={480}
                    height={860}
                    loading="lazy"
                    alt="Portada de NEXUS Agenda: Tu agenda de citas, con tu marca, en tu celular, y el botón Crear mi agenda gratis"
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
            <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 2xl:gap-10">
              {pasos.map((p, i) => (
                <li key={p.titulo} className="border-t border-linea pt-5">
                  {/* Dibujo de cada paso en SVG: no pesa nada y le quita al bloque la sensación de "solo texto" */}
                  <span className="icono-paso" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d={p.icono} />
                    </svg>
                  </span>
                  <span className="mt-4 block font-display text-sm font-semibold text-cian" aria-hidden="true">
                    Paso {i + 1}
                  </span>
                  <h3 className="mt-2 text-base font-semibold md:text-lg">{p.titulo}</h3>
                  <p className="mt-2 text-[0.98rem] text-bruma">{p.texto}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Seguridad */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-verde top-2" aria-hidden="true" />
            {/* En computador: título a la izquierda y lista a la derecha, para no dejar media pantalla vacía */}
            <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 2xl:grid-cols-[minmax(0,30rem)_1fr] 2xl:gap-24">
              <div>
                <h2 className="text-2xl font-semibold md:text-[2.25rem]">Seguridad desde el primer día</h2>
                <p className="mt-4 max-w-[40rem] text-bruma">
                  NEXUS nace de la ingeniería en ciberseguridad. Cada app se construye pensando en proteger tu
                  negocio y a tus clientes.
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
                  Conexión cifrada y revisión contra las fallas de seguridad más comunes en la web, el{' '}
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
                  <span className="font-semibold text-oro">Próximo servicio: Cloud Security.</span> Revisaremos y
                  protegeremos la nube donde viven los datos de tu empresa.
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
            <dl className="grid max-w-[46rem] gap-8 lg:pt-2 2xl:max-w-none 2xl:grid-cols-2 2xl:gap-x-14 2xl:gap-y-10">
              {preguntas.map((p) => (
                <div key={p.pregunta} className="border-t border-linea pt-5">
                  <dt className="text-base font-semibold md:text-lg">{p.pregunta}</dt>
                  <dd className="mt-2 text-bruma">{p.respuesta}</dd>
                </div>
              ))}
            </dl>
            </div>
          </section>

          {/* Llamado final */}
          <section className="relative pb-20 pl-12 md:pl-24">
            <span className="nodo nodo-oro top-3 bg-oro" aria-hidden="true" />
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_17rem] 2xl:grid-cols-[1fr_24rem]">
              <div>
                <h2 className="max-w-[36rem] text-3xl font-semibold leading-tight md:text-5xl 2xl:max-w-[44rem] 2xl:text-6xl">
                  ¿Tienes una idea para tu negocio?
                </h2>
                <p className="mt-5 max-w-[34rem] text-lg text-bruma">
                  Cuéntanosla por WhatsApp y te respondemos con una propuesta.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
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
