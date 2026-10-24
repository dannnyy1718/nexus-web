import { AGENDA_URL, Encabezado, Pie, WHATSAPP_URL } from './Marco'
import { pasosCitas, planesCitas, preguntasCitas } from './negocio'

// Página "App de citas en Ibagué" (2026-10-24, plan SEO): lleva a NODRA Agenda.
// La palabra clave "app de citas ... Ibagué" va en la dirección, el H1, el título, la descripción, el primer párrafo
// y un H2 (regla de los videos de SEO). Poco texto a la vista: listas, una tabla de precios y preguntas plegadas.
// Solo se promete lo que Agenda hace hoy y los precios reales (si cambian, se cambian en negocio.ts y en Agenda).

const negocios = ['Uñas y pestañas', 'Peluquerías y barberías', 'Estética y spa', 'Consultorios', 'Veterinarias', 'Clases']

const incluye = [
  'Tu página con tu logo, tus servicios, tus precios y tu horario.',
  'Tus clientes reservan desde el celular, sin crear cuenta ni descargar nada.',
  'Tú confirmas desde tu panel, sin cruces de horario.',
  'Servicios a domicilio, con recargo y tiempo de desplazamiento.',
  'Los nombres y celulares de tus clientes solo los ves tú.',
]

function BotonAgenda() {
  return (
    <a
      href={AGENDA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="boton-3d boton-oro inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 font-semibold text-abismo sm:px-6"
    >
      Crear mi agenda gratis
      <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only"> (se abre en otra pestaña)</span>
    </a>
  )
}

export default function AppCitas() {
  return (
    <>
      <Encabezado />

      <main id="contenido" className="mx-auto max-w-4xl px-4 pb-20 pt-8 md:px-8 md:pt-14">
        <a href="/" className="text-sm font-semibold text-cian underline underline-offset-4 hover:decoration-2">
          Volver al inicio
        </a>

        <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">App de citas para negocios en Ibagué</h1>
        <p className="mt-5 max-w-[40rem] text-lg">
          NODRA Agenda es la app de citas hecha en Ibagué: tus clientes reservan desde el celular, sin llamarte, y tú
          confirmas desde tu panel.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <BotonAgenda />
          <span className="text-sm text-bruma">Sin tarjeta de crédito.</span>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">Cómo funciona</h2>
          <ol className="mt-6 grid gap-5 md:grid-cols-3">
            {pasosCitas.map((p, i) => (
              <li key={p.titulo} className="rounded-2xl border border-linea p-5">
                <span className="font-semibold text-cian">{i + 1}.</span>{' '}
                <span className="font-semibold">{p.titulo}</span>
                <p className="mt-2 text-bruma">{p.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Qué incluye</h2>
            <ul className="mt-6 grid gap-3">
              {incluye.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-verde" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold md:text-[2.25rem]">Para qué negocios</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {negocios.map((n) => (
                <li key={n} className="rounded-full border border-contorno px-4 py-2 text-sm">
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-bruma">Y cualquier negocio que trabaje con citas.</p>
          </div>
        </section>

        {/* Precios a la vista y con sus condiciones al lado, no escondidas (regla 8.3 del manual de NODRA) */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">¿Cuánto cuesta una app de citas en Ibagué?</h2>
          {/* Sin ancho mínimo: en celular la columna "Para quién" baja de línea en vez de obligar a deslizar */}
          <div className="mt-6">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Planes de NODRA Agenda y su precio mensual</caption>
              <thead>
                <tr className="border-b border-linea text-sm text-bruma">
                  <th scope="col" className="py-3 pr-4 font-semibold">Plan</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Precio</th>
                  <th scope="col" className="py-3 font-semibold">Para quién</th>
                </tr>
              </thead>
              <tbody>
                {planesCitas.map((p) => (
                  <tr key={p.nombre} className="border-b border-linea">
                    <th scope="row" className="py-4 pr-4 font-semibold">{p.nombre}</th>
                    <td className="py-4 pr-4 whitespace-nowrap text-oro">{p.precio}</td>
                    <td className="py-4 text-bruma">{p.paraQuien}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-bruma">
            Mes a mes, sin cobro automático y sin porcentaje de tus citas. Los planes de pago se activan por WhatsApp y
            se pagan por transferencia.{' '}
            <a
              href={`${AGENDA_URL}terminos`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cian underline underline-offset-4 hover:decoration-2"
            >
              Términos y condiciones
              <span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold md:text-[2.25rem]">Preguntas frecuentes</h2>
          {/* Plegadas como en la portada: funcionan sin JavaScript y Google igual lee las respuestas */}
          <div className="mt-6 border-b border-linea">
            {preguntasCitas.map((p) => (
              <details key={p.pregunta} className="pregunta">
                <summary>{p.pregunta}</summary>
                <p className="pb-5 text-bruma">{p.respuesta}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-oro/40 p-6 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Empieza hoy, gratis</h2>
          <p className="mt-3 text-bruma">Llenas 4 datos y tu agenda queda lista, con servicios de ejemplo.</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <BotonAgenda />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="enlace-flecha">
              Tengo una duda
              <span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
          </div>
        </section>
      </main>

      <Pie />
    </>
  )
}
