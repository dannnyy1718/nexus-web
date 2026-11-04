import { BotonWhatsApp, Encabezado, enlaceWhatsApp, HORARIO_VISIBLE, MENSAJES, Pie } from './Marco'
import { DemoTienda } from './Demos'
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
// Mismo molde que /paginas-web-ibague, pero con contenido propio: cómo cobrar (WhatsApp o pagos en línea), si basta con
// WhatsApp y lo que pide la ley para vender en línea. "Tienda virtual" es como lo escribe la gente en Colombia; va en
// la dirección, el título, el H1, el primer párrafo y un H2. Solo promesas que NODRA cumple hoy.

const incluye = [
  'Catálogo con fotos, precios y categorías, con tu logo y tus colores. No es una plantilla.',
  'Carrito de compras pensado primero para el celular.',
  'Un panel para ti: cambias precios, fotos e inventario desde tu celular.',
  'Pedidos que te llegan por WhatsApp con la lista y el total, o pagos en línea si los eliges.',
  'Lista para Google y rápida, como esta página.',
  'Términos con derecho de retracto y aviso de privacidad, como pide la ley para vender en línea.',
]

const pasos = [
  { titulo: 'Conversamos', texto: 'Me cuentas por WhatsApp qué vendes y cómo cobras hoy. Sin costo.' },
  { titulo: 'Propuesta por escrito', texto: 'Qué incluye, cuánto cuesta y cuándo se entrega.' },
  { titulo: 'La hacemos', texto: 'Pagas el 50 % y ves los avances antes de terminar.' },
  { titulo: 'Te la entregamos', texto: 'Pagas el otro 50 % con la tienda funcionando. 6 meses de garantía.' },
]

export default function TiendaVirtual() {
  return (
    <>
      <Encabezado />

      <main id="contenido" className="mx-auto max-w-4xl px-4 pb-20 pt-8 md:px-8 md:pt-14">
        <a href="/" className="text-sm font-semibold text-cian underline underline-offset-4 hover:decoration-2">
          Volver al inicio
        </a>

        <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">Tienda virtual para negocios en Ibagué</h1>
        {/* Respuesta directa en el primer párrafo, que se entienda sola (Google y las IA la citan tal cual). Sin precio
            aquí, igual que en /paginas-web-ibague (Danny 2026-11-02): el precio va en su sección. */}
        <p className="mt-5 max-w-[42rem] text-lg">
          En NODRA hacemos tiendas virtuales para negocios de Ibagué y el Tolima: catálogo con fotos y precios, carrito,
          pedidos por WhatsApp o pagos con PSE, Nequi o tarjeta, y un panel para cambiar precios desde tu celular. Con 6
          meses de garantía.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <BotonWhatsApp mensaje={MENSAJES.tienda} />
          <a href="#precio" className="enlace-flecha">
            Ver precio y qué incluye
          </a>
        </div>
        <p className="mt-4 text-sm text-bruma">Te responde Danny, el fundador · {HORARIO_VISIBLE}</p>

        <section className="mt-16 grid items-start gap-10 md:grid-cols-[1fr_20rem]">
          <div>
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Qué incluye tu tienda virtual</h2>
            <ul className="mt-6 grid gap-3">
              {incluye.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-verde" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* El mismo ejemplo tocable de la portada (dice "Ejemplo" arriba: no es una tienda real) */}
          <div className="max-w-[22rem]">
            <DemoTienda />
          </div>
        </section>

        {/* Contenido propio de esta página: la decisión que de verdad tiene que tomar el dueño */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">¿Pedidos por WhatsApp o pagos en línea?</h2>
          <p className="mt-3 max-w-[42rem] text-bruma">
            Tu tienda virtual puede cobrar de dos formas, y puedes empezar con una y pasar a la otra después.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {formasDeCobrar.map((f) => (
              <div key={f.titulo} className="rounded-2xl border border-linea p-5">
                <h3 className="font-semibold">{f.titulo}</h3>
                <p className="mt-2 text-bruma">{f.texto}</p>
                <p className="mt-3 text-sm">
                  <span className="font-semibold text-verde">Te sirve:</span> {f.paraQuien}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Precio a la vista, con lo que lo cambia al lado (regla 8.3 del manual de NODRA y Ley 1480) */}
        <section id="precio" className="mt-16 scroll-mt-8">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">¿Cuánto cuesta una tienda virtual en Ibagué?</h2>
          <p className="mt-5 text-3xl font-semibold text-verde tabular-nums md:text-4xl">{rangoPrecio(PRECIO_TIENDA)}</p>
          <p className="mt-2 max-w-[40rem] text-bruma">
            Es un precio de referencia. El exacto te llega por escrito en una propuesta sin costo, antes de empezar.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Qué cambia el precio</h3>
              <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-bruma">
                <li>Si lleva pagos en línea o solo pedidos por WhatsApp.</li>
                <li>Cuántos productos cargamos nosotros al inicio.</li>
                <li>Productos con tallas, colores o sabores.</li>
                <li>Envío con precio distinto por zona o barrio.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Aparte, si lo necesitas</h3>
              <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-bruma">
                <li>Comisión de la pasarela por cada venta en línea (la cobra ella, no NODRA).</li>
                {/* Sin el costo de las tiendas de apps: la tienda virtual se abre desde un enlace, no desde Google Play */}
                {COSTOS_APARTE.filter((t) => !t.includes('tiendas')).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 max-w-[44rem] text-bruma">
            ¿Solo quieres mostrar tus productos y que te escriban, sin carrito ni panel? Te sirve una{' '}
            <a href="/paginas-web-ibague" className="font-semibold text-cian underline underline-offset-4 hover:decoration-2">
              página web para tu negocio
            </a>
            , que cuesta menos.
          </p>
        </section>

        {/* La pregunta honesta (investigación §5): a veces basta con WhatsApp, y decirlo da confianza */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">¿Necesito una tienda virtual o me basta con WhatsApp?</h2>
          <p className="mt-4 max-w-[42rem]">
            Si vendes pocos productos y contestas rápido, el catálogo gratis de WhatsApp Business te puede bastar. Una
            tienda virtual vale la pena cuando:
          </p>
          <ul className="mt-4 grid gap-3">
            {cuandoSirveTienda.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-cian" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Guía general, útil aunque no nos contraten. No es asesoría legal: lo dice al final. */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">Lo que pide la ley para vender en línea en Colombia</h2>
          <p className="mt-3 max-w-[42rem] text-bruma">Tu tienda virtual lo trae listo desde el primer día:</p>
          <ol className="mt-5 grid list-decimal gap-2 pl-5">
            {leyVenderEnLinea.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
          <p className="mt-4 max-w-[42rem] text-sm text-bruma">
            Es una guía general. Para tu caso, consulta a tu contador o abogado.
          </p>
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
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">Preguntas frecuentes</h2>
          {/* Plegadas como en la portada: funcionan sin JavaScript y Google igual lee las respuestas */}
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
          <p className="mt-3 max-w-[38rem] text-bruma">
            En una conversación corta por WhatsApp te digo qué necesita tu tienda, cómo te conviene cobrar, cuánto cuesta y
            cuándo está lista. Sin compromiso.
          </p>
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
