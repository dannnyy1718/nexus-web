import { BotonWhatsApp, Encabezado, enlaceWhatsApp, MENSAJES, Pie } from './Marco'
import { DemoPagoEnLinea, DemoPedidoWhatsApp, DemoTienda } from './Demos'
import {
  COSTOS_APARTE,
  cuandoSirveTienda,
  formasDeCobrar,
  leyVenderEnLinea,
  PRECIO_TIENDA,
  preguntasTienda,
  rangoPrecio,
} from './negocio'

// Página "Tienda virtual en Ibagué" (2026-11-04, investigación SEO + GEO §10.2, decisión 35).
// Para dueños de negocio de 30 a 70 años (Danny): palabras de todos los días y REGLA DE ORO "poco texto, la gente es
// más visual". Por eso cada idea va en una frase corta o en un ejemplo que se ve, y lo largo queda plegado (Google lo
// lee igual). "Tienda virtual" va en la dirección, el título, el H1, el primer párrafo y un H2.

const incluye = ['Tu logo y tus colores', 'Cambias precios desde tu celular', 'Lista para salir en Google', '6 meses de garantía']

const pasos = ['Hablamos por WhatsApp', 'Te mando la propuesta', 'Pagas la mitad y la hacemos', 'Pagas el resto y es tuya']

const titulo2 = 'text-2xl font-semibold md:text-[2.25rem]'

export default function TiendaVirtual() {
  return (
    <>
      <Encabezado />

      <main id="contenido" className="mx-auto max-w-4xl px-4 pb-20 pt-8 md:px-8 md:pt-14">
        <a href="/" className="font-semibold text-cian underline underline-offset-4 hover:decoration-2">
          Volver al inicio
        </a>

        <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">Tienda virtual para negocios en Ibagué</h1>
        {/* Una frase que se entienda sola (Google y las IA la citan tal cual). Sin precio: va en su sección. */}
        <p className="mt-5 max-w-[40rem] text-lg">
          En NODRA hacemos tiendas virtuales para negocios de Ibagué: tus productos con foto y precio, y los pedidos te
          llegan por WhatsApp o ya pagados.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <BotonWhatsApp mensaje={MENSAJES.tienda} />
          <a href="#precio" className="enlace-flecha">
            Ver precio
          </a>
        </div>

        {/* Qué incluye: el ejemplo tocable muestra la tienda; al lado, 4 cosas en pocas palabras */}
        {/* En celular, primero el título y luego el ejemplo; en computador, el ejemplo a la izquierda */}
        <section className="mt-16 grid items-center gap-8 md:grid-cols-[20rem_1fr]">
          <div className="max-w-[22rem] md:order-first">
            <DemoTienda />
          </div>
          <div className="order-first">
            <h2 className={titulo2}>Qué incluye tu tienda virtual</h2>
            <ul className="mt-6 grid gap-3 text-lg">
              {incluye.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="text-verde" aria-hidden="true">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Las dos formas de cobrar se MUESTRAN (Demos.tsx) en vez de explicarse */}
        <section className="mt-16">
          <h2 className={titulo2}>¿Pedidos por WhatsApp o pagos en línea?</h2>
          <p className="mt-3 text-lg text-bruma">Escoge una. Puedes cambiar después.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {formasDeCobrar.map((f, i) => (
              <div key={f.titulo}>
                {i === 0 ? <DemoPedidoWhatsApp /> : <DemoPagoEnLinea />}
                <h3 className="mt-4 text-xl font-semibold">
                  {f.titulo} <span className="ml-1 align-middle text-base font-semibold text-verde">· {f.etiqueta}</span>
                </h3>
                <p className="mt-1 text-bruma">{f.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Precio grande y a la vista (regla 8.3 y Ley 1480); el detalle plegado para no llenar de texto */}
        <section id="precio" className="mt-16 scroll-mt-8">
          <h2 className={titulo2}>¿Cuánto cuesta una tienda virtual en Ibagué?</h2>
          <p className="mt-5 text-3xl font-semibold text-verde tabular-nums md:text-4xl">{rangoPrecio(PRECIO_TIENDA)}</p>
          <p className="mt-2 text-bruma">El precio exacto te llega por escrito y sin costo, antes de empezar.</p>
          <details className="pregunta mt-4 border-y border-linea">
            <summary>¿Qué cambia el precio y qué se paga aparte?</summary>
            <div className="grid gap-6 pb-5 text-bruma md:grid-cols-2">
              <ul className="grid list-disc gap-1.5 pl-5">
                <li>Si el cliente paga en la tienda o solo te pide por WhatsApp.</li>
                <li>Cuántos productos subimos nosotros al empezar.</li>
                <li>Productos con tallas, colores o sabores.</li>
                <li>Domicilio con precio distinto según el barrio.</li>
              </ul>
              <ul className="grid list-disc gap-1.5 pl-5">
                <li>El porcentaje que cobra la empresa de pagos por cada venta en línea (no es para NODRA).</li>
                {/* Sin el costo de las tiendas de apps: la tienda virtual se abre desde un enlace, no desde Google Play */}
                {COSTOS_APARTE.filter((t) => !t.includes('tiendas')).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </details>
          <p className="mt-5 text-bruma">
            ¿Solo quieres mostrar tus productos? Te sirve una{' '}
            <a href="/paginas-web-ibague" className="font-semibold text-cian underline underline-offset-4 hover:decoration-2">
              página web
            </a>
            , que cuesta menos.
          </p>
        </section>

        {/* La pregunta honesta (investigación §5): a veces basta con WhatsApp, y decirlo da confianza */}
        <section className="mt-16">
          <h2 className={titulo2}>¿Necesito una tienda virtual o me basta con WhatsApp?</h2>
          <p className="mt-4 text-lg">Si vendes poco y contestas rápido, te basta con WhatsApp. La tienda vale la pena si:</p>
          <ul className="mt-4 grid gap-3 text-lg">
            {cuandoSirveTienda.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="text-cian" aria-hidden="true">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Guía corta de la ley, útil aunque no nos contraten. No es asesoría legal: lo dice abajo. */}
        <section className="mt-16">
          <h2 className={titulo2}>Lo que pide la ley para vender en línea en Colombia</h2>
          <p className="mt-3 text-lg text-bruma">Tu tienda lo trae listo:</p>
          <ul className="mt-4 grid gap-3 text-lg">
            {leyVenderEnLinea.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="text-verde" aria-hidden="true">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-bruma">Es una guía general. Para tu caso, pregúntale a tu contador.</p>
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
            {preguntasTienda.map((p) => (
              <details key={p.pregunta} className="pregunta">
                <summary>{p.pregunta}</summary>
                <p className="pb-5 text-bruma">{p.respuesta}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-verde/40 p-6 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Cuéntame qué vendes</h2>
          <p className="mt-3 text-lg text-bruma">Te respondo yo, Danny. Sin compromiso.</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <BotonWhatsApp mensaje={MENSAJES.tienda} />
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
