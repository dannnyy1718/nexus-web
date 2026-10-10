import { BotonWhatsApp, Encabezado, Pie, WHATSAPP_NUMERO, WHATSAPP_URL, WHATSAPP_VISIBLE } from './Marco'
import MapaRed from './MapaRed'
import PantallasJohana from './PantallasJohana'
import { preguntas } from './negocio'

// La app real de Johana, abierta directo en su lista de servicios (no en agendar)
const JOHANA_SERVICIOS = 'https://johana-sanchez-nails.web.app/#servicios'
const AGENDA_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  'Hola NEXUS, quiero saber cuándo sale NEXUS Agenda.',
)}`

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
    texto: 'Nos cuentas por WhatsApp qué necesita tu negocio. La primera conversación no tiene costo.',
  },
  {
    titulo: 'Recibes una propuesta clara',
    texto:
      'Qué incluye, cuánto cuesta y cuándo se entrega. Si la app necesita servicios externos, como dominio, servidores o publicarla en Play Store o App Store, te decimos su costo antes de empezar.',
  },
  {
    titulo: 'La construimos',
    texto: 'Pagas el 50 % para arrancar y ves los avances mientras la desarrollamos.',
  },
  {
    titulo: 'La entregamos',
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

      <main id="contenido" className="mx-auto max-w-6xl overflow-x-clip px-4 md:px-8">
        <div className="circuito">
          {/* Hero */}
          <section className="relative grid items-center gap-8 pb-24 pt-6 pl-12 md:grid-cols-[1.1fr_1fr] md:pl-24 md:pt-12">
            <span className="nodo nodo-lleno top-8 md:top-16" aria-hidden="true" />
            <div className="order-2 md:order-1">
              <h1 className="text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.6rem]">
                Apps para tu negocio, hechas a la medida.
              </h1>
              <p className="mt-6 max-w-[34rem] text-lg text-bruma">
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
            <div className="relative order-1 mx-auto w-full max-w-[19rem] md:order-2 md:max-w-[30rem]">
              <div className="halo absolute -inset-10" aria-hidden="true" />
              <img
                src="/img/escudo-560.webp"
                srcSet="/img/escudo-560.webp 560w, /img/escudo-960.webp 960w"
                sizes="(min-width: 768px) 30rem, 19rem"
                width={560}
                height={560}
                alt="Escudo de NEXUS: una N formada por nodos conectados, sobre un mapa del mundo"
                className="escudo relative w-full"
                fetchPriority="high"
              />
            </div>
          </section>

          {/* Mapa: Ibagué conectada con el mundo */}
          <section className="relative pb-24 pl-12 md:pl-24" aria-labelledby="titulo-mapa">
            <span className="nodo nodo-lleno top-2" aria-hidden="true" />
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
              <h2 id="titulo-mapa" className="max-w-[30rem] text-2xl font-semibold md:text-[2.25rem]">
                Hecha en Ibagué, abierta al mundo.
              </h2>
              <p className="max-w-[26rem] text-bruma">
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
                <li key={s.titulo} className="max-w-[30rem]">
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

            <div className="relative mt-12 max-w-[34rem] rounded-2xl border border-dashed border-oro/50 p-5">
              <h3 className="flex flex-wrap items-baseline gap-x-3 text-lg font-semibold md:text-xl">
                Cloud Security
                <span className="font-sans text-sm font-semibold text-oro">Próximamente</span>
              </h3>
              <p className="mt-2 text-bruma">
                Revisamos y protegemos la nube donde viven los datos de tu empresa.
              </p>
            </div>
          </section>

          {/* Proyecto real */}
          <section id="johana" className="relative scroll-mt-8 pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-verde top-2" aria-hidden="true" />
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Un proyecto real</h2>
            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
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
                <figure className="min-w-0 max-w-[16rem] flex-1 basis-0">
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

          {/* Próximo producto */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo nodo-oro top-2 bg-oro" aria-hidden="true" />
            <div className="agenda max-w-[46rem] rounded-3xl border border-dashed border-oro/50 p-6 md:p-10">
              <h2 className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-2xl font-semibold md:text-[2.25rem]">
                NEXUS Agenda
                <span className="font-sans text-base font-semibold text-oro">Próximamente</span>
              </h2>
              <p className="mt-4 max-w-[36rem]">
                Lo que hicimos para Johana, listo para cualquier negocio de servicios: uñas, peluquería,
                barbería, estética o spa.
              </p>
              <p className="mt-3 max-w-[36rem] text-bruma">
                Creas la página de tu negocio en minutos, le pones tu logo, colores, servicios y horario, y tus
                clientas reservan solas desde el celular, sin crear cuenta.
              </p>
              <a href={AGENDA_URL} target="_blank" rel="noopener noreferrer" className="enlace-flecha mt-6">
                Avísame cuando salga
                <span className="sr-only"> (abre WhatsApp)</span>
              </a>
            </div>
          </section>

          {/* Proceso */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo top-2" aria-hidden="true" />
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Cómo trabajamos</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {pasos.map((p, i) => (
                <li key={p.titulo} className="border-t border-linea pt-5">
                  <span className="font-display text-sm font-semibold text-cian" aria-hidden="true">
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
            <h2 className="max-w-[40rem] text-2xl font-semibold md:text-[2.25rem]">
              Seguridad desde el primer día
            </h2>
            <p className="mt-4 max-w-[40rem] text-bruma">
              NEXUS nace de la ingeniería en ciberseguridad. Cada app se construye pensando en proteger tu
              negocio y a tus clientes.
            </p>
            <ul className="mt-8 grid max-w-[44rem] gap-5">
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
          </section>

          {/* Preguntas frecuentes */}
          <section className="relative pb-24 pl-12 md:pl-24">
            <span className="nodo top-2" aria-hidden="true" />
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Preguntas frecuentes</h2>
            <dl className="mt-10 grid max-w-[46rem] gap-8">
              {preguntas.map((p) => (
                <div key={p.pregunta}>
                  <dt className="text-base font-semibold md:text-lg">{p.pregunta}</dt>
                  <dd className="mt-2 text-bruma">{p.respuesta}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Llamado final */}
          <section className="relative pb-20 pl-12 md:pl-24">
            <span className="nodo nodo-oro top-3 bg-oro" aria-hidden="true" />
            <h2 className="max-w-[36rem] text-3xl font-semibold leading-tight md:text-5xl">
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
          </section>
        </div>
      </main>

      <Pie />
    </>
  )
}
