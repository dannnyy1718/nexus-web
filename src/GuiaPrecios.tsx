import { BotonWhatsApp, Encabezado, enlaceWhatsApp, MENSAJES, Pie } from './Marco'
import {
  COSTOS_APARTE,
  GUIA_ACTUALIZADA,
  GUIA_ACTUALIZADA_VISIBLE,
  porQueCambia,
  PRECIOS,
  preciosMercado,
  preguntasGuia,
  rangoPrecio,
} from './negocio'

// Guía "¿Cuánto cuesta una página web en Ibagué?" (2026-11-12). Por qué existe y de dónde salen los precios:
// ver el comentario de PAGINA_GUIA en negocio.ts y docs/DECISIONES.md 37.
// Regla de oro de Danny (público de 30 a 70 años, poco texto): la respuesta va en la primera frase, los precios se
// ven como una escalera (barras de CSS, 0 KB) y lo largo va plegado. Sin fotos: no hacen falta para entender precios.

const titulo2 = 'text-2xl font-semibold md:text-[2.25rem]'

// Largo de cada barra según el precio más alto de su escalón ($1.600.000 = barra completa).
// Van como clases fijas (no style="width:…") porque la CSP de firebase.json no permite estilos en línea.
const largoBarra = ['w-[3%]', 'w-[41%]', 'w-[60%]', 'w-full']

const casos = [
  {
    quiero: 'Solo quiero que me encuentren',
    sirve: 'Empieza por tu perfil de Google Maps (gratis) y una página sencilla con WhatsApp.',
    enlace: '/paginas-web-ibague',
    texto: 'Páginas web',
  },
  {
    quiero: 'Quiero vender por internet',
    sirve: 'Te sirve una tienda virtual: productos con foto y precio, y pedidos por WhatsApp o pagados.',
    enlace: '/tienda-virtual-ibague',
    texto: 'Tienda virtual',
  },
  {
    quiero: 'Quiero que me agenden citas',
    sirve: 'Te sirve una app de citas. NODRA Agenda te deja recibir tus primeras 20 citas sin pagar.',
    enlace: '/app-de-citas-ibague',
    texto: 'App de citas',
  },
]

const enlace = 'font-semibold text-cian underline underline-offset-4 hover:decoration-2'

export default function GuiaPrecios() {
  return (
    <>
      <Encabezado />

      <main id="contenido" className="mx-auto max-w-4xl px-4 pb-20 pt-8 md:px-8 md:pt-14">
        <a href="/" className={enlace}>
          Volver al inicio
        </a>

        <article>
          <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">
            ¿Cuánto cuesta una página web en Ibagué?
          </h1>
          {/* Respuesta completa en una frase que se entiende sola: es la que Google y las IA citan tal cual */}
          <p className="mt-5 max-w-[42rem] text-lg">
            En Ibagué, una página web para un negocio cuesta entre <strong>$389.000 y $1.600.000</strong>, según el plan.
            Aparte se paga el dominio, de $60.000 a $120.000 al año. También hay opciones gratis para empezar.
          </p>
          <p className="mt-4 text-sm text-bruma">
            Por Danny Javier Díaz, fundador de NODRA · Actualizado el{' '}
            <time dateTime={GUIA_ACTUALIZADA}>{GUIA_ACTUALIZADA_VISIBLE}</time>
          </p>

          {/* La escalera de precios: se entiende de un vistazo, sin leer párrafos */}
          <section className="mt-14">
            <h2 className={titulo2}>Precios de páginas web en Ibagué en 2026</h2>
            <ol className="mt-6 grid gap-4">
              {preciosMercado.map((p, i) => (
                <li key={p.nivel} className="rounded-2xl border border-linea p-4 md:p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="text-lg font-semibold">{p.nivel}</span>
                    <span className="text-xl font-semibold text-verde tabular-nums md:text-2xl">{p.precio}</span>
                  </div>
                  <div className="mt-3 h-2.5 rounded-full bg-linea" aria-hidden="true">
                    <div className={`h-full min-w-2.5 rounded-full bg-verde ${largoBarra[i]}`} />
                  </div>
                  <p className="mt-3 text-bruma">{p.trae}</p>
                </li>
              ))}
            </ol>
            {/* Danny 2026-11-12: que nadie compare una página que recibe pagos o tiene panel (p. ej. CORISOC) con
                los planes de arriba, que son solo para mostrar el negocio. El rango sale de PRECIOS[1] (un solo lugar). */}
            <p className="mt-4 rounded-2xl border border-cian/40 p-4 text-lg">
              Si tu página <strong>recibe pagos o donaciones</strong>, o tiene un <strong>panel para publicar tú mismo</strong>,
              ya es una tienda o app: de {rangoPrecio(PRECIOS[1])}.
            </p>
            <details className="pregunta mt-4 border-y border-linea">
              <summary>¿De dónde salen estos precios?</summary>
              <p className="pb-5 text-bruma">
                Son los precios que publican en sus propias páginas 5 agencias y diseñadores que hacen páginas web en
                Ibagué, revisados en octubre y noviembre de 2026. Son precios “desde”: lo que trae cada plan cambia de
                una agencia a otra, así que pide siempre la lista por escrito antes de pagar.
              </p>
            </details>
          </section>

          <section className="mt-16">
            <h2 className={titulo2}>Lo que se paga aparte</h2>
            <ul className="mt-6 grid gap-3 text-lg">
              {/* Dominio y mantenimiento salen de COSTOS_APARTE (un solo lugar); sin el de las tiendas de apps */}
              {COSTOS_APARTE.filter((t) => !t.includes('tiendas')).map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-verde" aria-hidden="true">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
              <li className="flex gap-3">
                <span className="text-verde" aria-hidden="true">
                  ✓
                </span>
                Si el plan trae el alojamiento solo el primer año: su renovación.
              </li>
            </ul>
          </section>

          <section className="mt-16">
            <h2 className={titulo2}>¿Por qué una cuesta $400.000 y otra $1.500.000?</h2>
            <dl className="mt-6 grid gap-x-10 border-t border-linea md:grid-cols-2">
              {porQueCambia.map((p) => (
                <div key={p.que} className="border-b border-linea py-4">
                  <dt className="text-lg font-semibold">{p.que}</dt>
                  <dd className="mt-1 text-bruma">{p.explica}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-16">
            <h2 className={titulo2}>¿Cuál le sirve a tu negocio?</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {casos.map((c) => (
                <li key={c.quiero} className="grid content-start gap-2 rounded-2xl border border-linea p-5">
                  <span className="text-lg font-semibold">{c.quiero}</span>
                  <span className="text-bruma">{c.sirve}</span>
                  <a href={c.enlace} className={`${enlace} mt-1`}>
                    {c.texto}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* NODRA al final y sin rebajar a nadie: la guía primero ayuda, luego dice cuánto cobramos nosotros */}
          <section id="nodra" className="mt-16 scroll-mt-8">
            <h2 className={titulo2}>Cuánto cuesta en NODRA</h2>
            <p className="mt-4 max-w-[40rem] text-lg">
              No somos los más baratos de Ibagué. Hacemos diseño propio, con 6 meses de garantía, y te responde el
              fundador.
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {PRECIOS.map((p) => (
                <li key={p.tipo} className="grid content-start gap-2 rounded-2xl border border-linea p-5">
                  <span className="font-semibold">{p.tipo}</span>
                  <span className="text-xl font-semibold text-verde tabular-nums">{rangoPrecio(p)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <BotonWhatsApp mensaje={MENSAJES.guia} />
              <a href="/paginas-web-ibague" className="enlace-flecha">
                Ver qué incluye
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className={titulo2}>Preguntas frecuentes</h2>
            {/* Plegadas: no llenan la pantalla de texto, funcionan sin JavaScript y Google igual lee las respuestas */}
            <div className="mt-6 border-b border-linea">
              {preguntasGuia.map((p) => (
                <details key={p.pregunta} className="pregunta">
                  <summary>{p.pregunta}</summary>
                  <p className="pb-5 text-bruma">{p.respuesta}</p>
                </details>
              ))}
            </div>
            <a href={enlaceWhatsApp(MENSAJES.pregunta)} target="_blank" rel="noopener noreferrer" className="enlace-flecha mt-5">
              Tengo otra pregunta
              <span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
          </section>
        </article>
      </main>

      <Pie />
    </>
  )
}
