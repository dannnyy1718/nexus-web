import { BotonWhatsApp, Encabezado, enlaceWhatsApp, MENSAJES, Pie } from './Marco'
import { DemoPagina } from './Demos'
import CelularJohana from './CelularJohana'
import { antesDeContratar, COSTOS_APARTE, PRECIO_PAGINA_WEB, preguntasPaginasWeb, rangoPrecio } from './negocio'

// Página "Diseño de páginas web en Ibagué" (2026-11-02, estudio de la web, semana 2).
// Por qué existe: es la búsqueda con la que sale primero la competencia en Ibagué y la portada no competía por ella.
// La frase "páginas web en Ibagué" va en la dirección, el título, el H1, el primer párrafo y un H2.
// 2026-11-04 (Danny): para dueños de negocio de 30 a 70 años y REGLA DE ORO "poco texto, la gente es más visual":
// cada idea en una frase corta, lo largo plegado y el trabajo real de Johana en un celular que se desliza (capturas
// reales, mejor prueba que cualquier foto). Solo promesas que NODRA cumple hoy; precios desde negocio.ts.

const incluye = ['Tu logo, tus colores y fotos de tu negocio', 'Tus servicios, horario y cómo llegar', 'Botón de WhatsApp para que te escriban', 'Lista para salir en Google']

const pasos = ['Hablamos por WhatsApp', 'Te mando la propuesta', 'Pagas la mitad y la hacemos', 'Pagas el resto y es tuya']

const titulo2 = 'text-2xl font-semibold md:text-[2.25rem]'

function Chulo({ color = 'text-verde' }: { color?: string }) {
  return (
    <span className={color} aria-hidden="true">
      ✓
    </span>
  )
}

export default function PaginasWeb() {
  return (
    <>
      <Encabezado />

      <main id="contenido" className="mx-auto max-w-4xl px-4 pb-20 pt-8 md:px-8 md:pt-14">
        <a href="/" className="font-semibold text-cian underline underline-offset-4 hover:decoration-2">
          Volver al inicio
        </a>

        <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">Diseño de páginas web en Ibagué</h1>
        {/* Una frase que se entienda sola (Google y las IA la citan tal cual). Sin precio aquí (Danny 2026-11-02). */}
        <p className="mt-5 max-w-[40rem] text-lg">
          En NODRA hacemos páginas web para negocios de Ibagué: te encuentran en Google, ven tus servicios en el celular y
          te escriben por WhatsApp. Con 6 meses de garantía.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <BotonWhatsApp mensaje={MENSAJES.paginasWeb} />
          <a href="#precio" className="enlace-flecha">
            Ver precio
          </a>
        </div>

        {/* En celular, primero el título y luego el ejemplo tocable; en computador, el ejemplo a la izquierda */}
        <section className="mt-16 grid items-center gap-8 md:grid-cols-[20rem_1fr]">
          <div className="max-w-[22rem] md:order-first">
            <DemoPagina />
          </div>
          <div className="order-first">
            <h2 className={titulo2}>Qué incluye tu página web</h2>
            <ul className="mt-6 grid gap-3 text-lg">
              {incluye.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <Chulo />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Precio grande y a la vista (regla 8.3 y Ley 1480); el detalle plegado para no llenar de texto */}
        <section id="precio" className="mt-16 scroll-mt-8">
          <h2 className={titulo2}>¿Cuánto cuesta una página web en Ibagué?</h2>
          <p className="mt-5 text-3xl font-semibold text-verde tabular-nums md:text-4xl">{rangoPrecio(PRECIO_PAGINA_WEB)}</p>
          <p className="mt-2 text-bruma">El precio exacto te llega por escrito y sin costo, antes de empezar.</p>
          {/* Hacia la guía de precios del mercado (decisión 37): quien compara precios encuentra la comparación aquí */}
          <a href="/cuanto-cuesta-una-pagina-web-ibague" className="enlace-flecha mt-3">
            Comparar con otros precios de Ibagué
          </a>
          <details className="pregunta mt-4 border-y border-linea">
            <summary>¿Qué cambia el precio y qué se paga aparte?</summary>
            <div className="grid gap-6 pb-5 text-bruma md:grid-cols-2">
              <ul className="grid list-disc gap-1.5 pl-5">
                <li>Cuántas partes o secciones tiene.</li>
                <li>Si escribimos los textos por ti.</li>
                <li>Formularios especiales, por ejemplo para que te manden fotos.</li>
              </ul>
              <ul className="grid list-disc gap-1.5 pl-5">
                {/* Sin el costo de las tiendas de apps: una página web no se publica en Google Play ni en la App Store */}
                {COSTOS_APARTE.filter((t) => !t.includes('tiendas')).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </details>
          <p className="mt-5 text-bruma">
            ¿Quieres vender en línea y cambiar precios desde tu celular? Mira la{' '}
            <a href="/tienda-virtual-ibague" className="font-semibold text-cian underline underline-offset-4 hover:decoration-2">
              tienda virtual
            </a>
            .
          </p>
        </section>

        {/* Lo que conviene preguntar a cualquier proveedor (útil aunque no nos contraten), con respuestas de una línea.
            Sin nombrar ni rebajar a nadie: comparación honesta (Ley 1480). */}
        <section className="mt-16">
          <h2 className={titulo2}>Qué preguntar antes de contratar una página web</h2>
          <dl className="mt-6 grid gap-x-10 border-t border-linea md:grid-cols-2">
            {antesDeContratar.map((p) => (
              <div key={p.pregunta} className="border-b border-linea py-4">
                <dt className="text-lg font-semibold">{p.pregunta}</dt>
                <dd className="mt-1 flex gap-2 text-bruma">
                  <Chulo />
                  {p.respuesta}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Trabajo real: las pantallas reales de la app de Johana, que se deslizan con el dedo */}
        <section className="mt-16 grid items-center gap-8 md:grid-cols-[1fr_20rem]">
          <div>
            <h2 className={titulo2}>Un trabajo real</h2>
            <p className="mt-4 text-lg">
              <strong>Johana Sánchez Nails</strong>, en Ibagué: sus clientas ven los servicios y precios, y agendan desde el
              celular sin llamar.
            </p>
            <a href="https://johana-sanchez-nails.web.app/" target="_blank" rel="noopener noreferrer" className="enlace-flecha mt-3">
              Ver su página en vivo
              <span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
          </div>
          <div className="mx-auto w-full max-w-[22rem]">
            <CelularJohana />
          </div>
        </section>

        {/* Cómo trabajamos: solo los 4 pasos, con número grande */}
        <section className="mt-16">
          <h2 className={titulo2}>Cómo trabajamos</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {pasos.map((p, i) => (
              <li key={p} className="flex items-center gap-4 rounded-2xl border border-linea p-4 text-lg font-semibold">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-cian/15 text-cian">{i + 1}</span>
                {p}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className={titulo2}>Preguntas frecuentes</h2>
          {/* Plegadas: no llenan la pantalla de texto, funcionan sin JavaScript y Google igual lee las respuestas */}
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
          <p className="mt-3 text-lg text-bruma">Te respondo yo, Danny. Sin compromiso.</p>
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
