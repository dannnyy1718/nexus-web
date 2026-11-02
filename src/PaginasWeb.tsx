import { BotonWhatsApp, Encabezado, enlaceWhatsApp, HORARIO_VISIBLE, MENSAJES, Pie } from './Marco'
import { DemoPagina } from './Demos'
import { antesDeContratar, COSTOS_APARTE, PRECIO_PAGINA_WEB, PRECIOS, preguntasPaginasWeb, QUE_CAMBIA_EL_PRECIO, rangoPrecio } from './negocio'

// Página "Diseño de páginas web en Ibagué" (2026-11-02, estudio de la web, semana 2).
// Por qué existe: es la búsqueda con la que sale primero la competencia en Ibagué y la portada no competía por ella.
// La frase "páginas web en Ibagué" va en la dirección, el título, el H1, el primer párrafo y un H2 (como en la página
// de citas). Responde lo que pregunta quien va a contratar ("Ellos preguntan, tú respondes"): qué incluye, cuánto
// cuesta, qué preguntar antes. Solo promesas que NODRA cumple hoy; precios desde negocio.ts (un solo lugar).

const JOHANA = 'https://johana-sanchez-nails.web.app/'

const incluye = [
  'Diseño propio con tu logo, tus colores y fotos reales de tu negocio. No es una plantilla.',
  'Tus servicios, tu horario y cómo llegar con Google Maps.',
  'Botón de WhatsApp con el mensaje ya escrito, para que te escriban de una vez.',
  'Hecha primero para celular y rápida, como esta página.',
  'Lista para Google: título, descripción y los datos de tu negocio bien puestos.',
  'Aviso de privacidad si tu página recoge datos de clientes (Ley 1581).',
]

const pasos = [
  { titulo: 'Conversamos', texto: 'Me cuentas por WhatsApp cómo es tu negocio. Sin costo.' },
  { titulo: 'Propuesta por escrito', texto: 'Qué incluye, cuánto cuesta y cuándo se entrega.' },
  { titulo: 'La hacemos', texto: 'Pagas el 50 % y ves los avances antes de terminar.' },
  { titulo: 'Te la entregamos', texto: 'Pagas el otro 50 % con la página publicada. 6 meses de garantía.' },
]

export default function PaginasWeb() {
  return (
    <>
      <Encabezado />

      <main id="contenido" className="mx-auto max-w-4xl px-4 pb-20 pt-8 md:px-8 md:pt-14">
        <a href="/" className="text-sm font-semibold text-cian underline underline-offset-4 hover:decoration-2">
          Volver al inicio
        </a>

        <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">Diseño de páginas web en Ibagué</h1>
        {/* Respuesta directa en el primer párrafo: es lo que Google y las IA citan. Sin precio aquí (Danny 2026-11-02:
            que no sea lo primero que se ve); el precio va en su sección. */}
        <p className="mt-5 max-w-[42rem] text-lg">
          En NODRA hacemos páginas web para negocios de Ibagué y el Tolima: diseño propio, listas para el celular y para
          salir en Google, con botón de WhatsApp y 6 meses de garantía.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <BotonWhatsApp mensaje={MENSAJES.paginasWeb} />
          <a href="#precio" className="enlace-flecha">
            Ver precio y qué incluye
          </a>
        </div>
        <p className="mt-4 text-sm text-bruma">Te responde Danny, el fundador · {HORARIO_VISIBLE}</p>

        <section className="mt-16 grid items-start gap-10 md:grid-cols-[1fr_20rem]">
          <div>
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Qué incluye tu página web</h2>
            <ul className="mt-6 grid gap-3">
              {incluye.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-verde" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* El mismo ejemplo tocable de la portada: muestra lo que hace el cliente en la página de un negocio */}
          <div className="max-w-[22rem]">
            <DemoPagina />
          </div>
        </section>

        {/* Precio a la vista, con lo que lo cambia al lado (regla 8.3 del manual de NODRA y Ley 1480) */}
        <section id="precio" className="mt-16 scroll-mt-8">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">¿Cuánto cuesta una página web en Ibagué?</h2>
          <p className="mt-5 text-3xl font-semibold text-verde tabular-nums md:text-4xl">{rangoPrecio(PRECIO_PAGINA_WEB)}</p>
          <p className="mt-2 max-w-[40rem] text-bruma">
            Es un precio de referencia. El exacto te llega por escrito en una propuesta sin costo, antes de empezar.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
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
                {/* Sin el costo de las tiendas de apps: una página web no se publica en Google Play ni en la App Store */}
                {COSTOS_APARTE.filter((t) => !t.includes('tiendas')).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 max-w-[44rem] text-bruma">
            ¿Quieres vender en línea o recibir citas, y cambiar precios y fotos desde tu celular? Eso es una{' '}
            <strong className="text-niebla">{PRECIOS[1].tipo.toLowerCase()}</strong>: {rangoPrecio(PRECIOS[1]).toLowerCase()}.{' '}
            <a href="/#precios" className="font-semibold text-cian underline underline-offset-4 hover:decoration-2">
              Ver todos los precios
            </a>
          </p>
        </section>

        {/* Lo que conviene preguntar a cualquier proveedor (contenido útil aunque no nos contraten) y la respuesta de
            NODRA. Sin nombrar ni rebajar a nadie: comparación honesta (Ley 1480). */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">Qué preguntar antes de contratar una página web</h2>
          <p className="mt-3 max-w-[40rem] text-bruma">Hazle estas preguntas a quien te la vaya a hacer. Estas son las nuestras.</p>
          <dl className="mt-6 grid gap-x-10 border-t border-linea md:grid-cols-2">
            {antesDeContratar.map((p) => (
              <div key={p.pregunta} className="border-b border-linea py-4">
                <dt className="font-semibold">{p.pregunta}</dt>
                <dd className="mt-1 text-bruma">{p.respuesta}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">Cómo trabajamos</h2>
          <ol className="mt-6 grid gap-5 md:grid-cols-2">
            {pasos.map((p, i) => (
              <li key={p.titulo} className="rounded-2xl border border-linea p-5">
                <span className="font-semibold text-cian">{i + 1}.</span> <span className="font-semibold">{p.titulo}</span>
                <p className="mt-2 text-bruma">{p.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">Un trabajo real</h2>
          <p className="mt-4 max-w-[40rem]">
            <strong>Johana Sánchez Nails</strong>, estudio de belleza en Ibagué: su página muestra sus servicios y precios, y
            sus clientas agendan desde el celular sin llamar.
          </p>
          <a href={JOHANA} target="_blank" rel="noopener noreferrer" className="enlace-flecha mt-3">
            Ver su página en vivo
            <span className="sr-only"> (se abre en otra pestaña)</span>
          </a>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">Preguntas frecuentes</h2>
          {/* Plegadas como en la portada: funcionan sin JavaScript y Google igual lee las respuestas */}
          <div className="mt-6 border-b border-linea">
            {preguntasPaginasWeb.map((p) => (
              <details key={p.pregunta} className="pregunta">
                <summary>{p.pregunta}</summary>
                <p className="pb-5 text-bruma">{p.respuesta}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-verde/40 p-6 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Cuéntame de tu negocio</h2>
          <p className="mt-3 max-w-[38rem] text-bruma">
            En una conversación corta por WhatsApp te digo qué necesita tu página, cuánto cuesta y cuándo está lista. Sin
            compromiso.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <BotonWhatsApp mensaje={MENSAJES.paginasWeb} />
            <a href={enlaceWhatsApp(MENSAJES.pregunta)} target="_blank" rel="noopener noreferrer" className="enlace-flecha">
              Tengo una pregunta
              <span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
          </div>
        </section>
      </main>

      <Pie />
    </>
  )
}
