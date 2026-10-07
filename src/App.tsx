const WHATSAPP_NUMERO = '573133655136'
const WHATSAPP_VISIBLE = '313 365 5136'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  'Hola NEXUS, quiero una app para mi negocio.',
)}`

const servicios = [
  {
    titulo: 'Tiendas en línea',
    texto:
      'Catálogo, carrito y pedidos por WhatsApp o con pago en línea. Tú cambias productos, precios e inventario desde un panel.',
  },
  {
    titulo: 'Citas y reservas',
    texto:
      'Tus clientes ven los horarios libres y agendan solos, sin llamar. Tú confirmas o cancelas desde el celular.',
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
    texto: 'Pagas el 50 % para arrancar y ves los avances mientras la desarrollamos.',
  },
  {
    titulo: 'La entregamos',
    texto: 'Pagas el otro 50 % al recibirla funcionando. Incluye 6 meses de garantía.',
  },
]

const seguridad = [
  'Tus datos y los de tus clientes protegidos con reglas de acceso estrictas: cada persona ve solo lo que le corresponde.',
  'Cada negocio tiene su propio servidor. Tu información nunca se mezcla con la de otro cliente.',
  'Conexión cifrada y revisión contra las fallas de seguridad más comunes en la web (OWASP Top 10).',
]

function IconoWhatsApp({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.16-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.06.89.9-2.98-.2-.31a8.2 8.2 0 1 1 6.86 3.73Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.73 2.73 0 0 0-.85 2.03 4.74 4.74 0 0 0 1 2.52 10.84 10.84 0 0 0 4.15 3.67c1.54.67 2.15.72 2.92.6.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.1-.22-.17-.47-.29Z" />
    </svg>
  )
}

function BotonWhatsApp({ grande = false }: { grande?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-full bg-verde font-semibold text-abismo shadow-[0_0_30px_-6px_var(--color-verde)] transition-colors hover:bg-[#7ff0b1] ${
        grande ? 'px-8 py-4 text-lg' : 'px-6 py-3'
      }`}
    >
      <IconoWhatsApp className={grande ? 'size-6' : 'size-5'} />
      Escribir por WhatsApp
    </a>
  )
}

export default function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-noche focus:px-4 focus:py-2"
      >
        Ir al contenido
      </a>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="NEXUS, inicio">
          <img src="/img/escudo-mini.webp" alt="" width={40} height={40} className="rounded-lg" />
          <span className="marca text-xl">NEXUS</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-linea px-4 py-2 text-sm font-semibold transition-colors hover:border-verde hover:text-verde"
        >
          <IconoWhatsApp className="size-4" />
          <span className="hidden sm:inline">Escríbenos</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </header>

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
                Creamos aplicaciones que funcionan en Android, iPhone y computador. Seguras, rápidas y
                fáciles de usar para ti y para tus clientes.
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

            <ul className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
              {servicios.map((s) => (
                <li key={s.titulo} className="max-w-[30rem]">
                  <h3 className="text-lg font-semibold md:text-xl">{s.titulo}</h3>
                  <p className="mt-2 text-bruma">{s.texto}</p>
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
          <section className="relative pb-24 pl-12 md:pl-24">
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
              </div>
              <div className="flex justify-center gap-4 sm:gap-6">
                <figure className="w-[44%] max-w-[15rem]">
                  <img
                    src="/img/johana-inicio.webp"
                    width={480}
                    height={860}
                    loading="lazy"
                    alt="Pantalla de inicio de la app: logo del estudio, botón para agendar cita y lista de servicios con precios"
                    className="celular w-full"
                  />
                  <figcaption className="mt-3 text-center text-sm text-bruma">Lo que ve la clienta</figcaption>
                </figure>
                <figure className="mt-12 w-[44%] max-w-[15rem]">
                  <img
                    src="/img/johana-panel.webp"
                    width={480}
                    height={860}
                    loading="lazy"
                    alt="Panel de administración: resumen de citas del día y pestañas de citas, servicios y galería"
                    className="celular w-full"
                  />
                  <figcaption className="mt-3 text-center text-sm text-bruma">Lo que ve Johana</figcaption>
                </figure>
              </div>
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
            </ul>
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

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-linea px-4 py-8 text-sm text-bruma md:px-8">
        <span className="flex items-center gap-3">
          <img src="/img/escudo-mini.webp" alt="" width={28} height={28} className="rounded-md" loading="lazy" />
          <span className="marca">NEXUS</span>
        </span>
        <span>© {new Date().getFullYear()} NEXUS. Software a la medida.</span>
      </footer>
    </>
  )
}
