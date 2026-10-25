import type { ReactNode } from 'react'
import { AGENDA_URL, CORREO, CORREO_URL, Encabezado, Pie, WHATSAPP_URL, WHATSAPP_VISIBLE } from './Marco'

// Términos y condiciones de la página y de las apps a la medida (2026-10-24). Base: Ley 1480 de 2011 (Estatuto del
// Consumidor), Ley 527 de 1999 (mensajes de datos) y Ley 1581 de 2012 (datos; ver /privacidad). Resume los términos
// que van en cada cotización (2 Clientes/TERMINOS-COTIZACIONES.md en la carpeta de la empresa): si cambian allá, se
// cambian aquí. NODRA Agenda tiene los suyos en agenda.nodrasoft.com/terminos. Pendiente: revisión de un abogado.
const VIGENCIA = '24 de octubre de 2026'

const garantiaCubre = [
  'Algo prometido en la propuesta que no funciona o funciona mal.',
  'Fallas de seguridad del código que hicimos.',
  'Ajustes si una actualización de Android, iPhone o Firebase daña algo que antes funcionaba.',
]

const garantiaNoCubre = [
  'Funciones nuevas o cambios de idea.',
  'Datos mal cargados o borrados por un usuario.',
  'Cambios hechos por otra persona al código, equipos dañados o falta de internet.',
  'Costos de servicios de terceros: Google Firebase, tiendas de apps, dominio o pasarela de pagos.',
]

const enlace = 'font-semibold text-cian underline underline-offset-4 hover:decoration-2'

function Seccion({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold md:text-2xl">{titulo}</h2>
      <div className="mt-4 grid gap-4 text-bruma">{children}</div>
    </section>
  )
}

export default function Terminos() {
  return (
    <>
      <Encabezado />

      <main id="contenido" className="mx-auto max-w-3xl px-4 pb-20 pt-8 md:px-8 md:pt-14">
        <a href="/" className={enlace}>
          Volver al inicio
        </a>
        <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">Términos y condiciones</h1>
        <p className="mt-4 text-bruma">Vigentes desde el {VIGENCIA}.</p>

        <Seccion titulo="Quiénes somos">
          <p>
            NODRA, emprendimiento de Danny Javier Díaz, con domicilio en Ibagué, Tolima (Colombia). Hacemos apps móviles
            y web a la medida para negocios. Contacto: WhatsApp{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-niebla hover:text-verde">
              {WHATSAPP_VISIBLE}
            </a>{' '}
            o correo{' '}
            <a href={CORREO_URL} className="font-semibold text-niebla hover:text-verde">
              {CORREO}
            </a>
            .
          </p>
        </Seccion>

        <Seccion titulo="Esta página es informativa">
          <p>
            Aquí contamos qué hacemos y cómo trabajamos. Lo que se incluye en tu app y su precio final quedan por escrito
            en la propuesta que te enviamos, y esa propuesta es la que vale si hay diferencias con esta página.
          </p>
        </Seccion>

        <Seccion titulo="Cómo se contrata una app a la medida">
          <ol className="grid list-decimal gap-2 pl-5">
            <li>Nos cuentas tu idea por WhatsApp o correo.</li>
            <li>
              Te enviamos una propuesta por escrito con <span className="text-niebla">cada función incluida</span>, el precio, la
              forma de pago, los plazos y sus términos.
            </li>
            <li>
              La aceptas firmándola, respondiendo “acepto” por WhatsApp o correo, o pagando el anticipo. Cualquiera de esas
              formas vale como una firma (Ley 527 de 1999), y desde ahí la propuesta es nuestro contrato.
            </li>
            <li>
              Pagas el 50 % para empezar y el otro 50 % al recibir la app funcionando, salvo que la propuesta diga otra cosa.
            </li>
          </ol>
          <p>
            Lo que no esté en la propuesta no está incluido y lo cotizamos aparte antes de hacerlo. Tú te comprometes a
            enviarnos a tiempo los textos, fotos y accesos que hagan falta, y a revisar cada avance.
          </p>
        </Seccion>

        <Seccion titulo="Garantía de 6 meses">
          <p>Desde la entrega, corregimos sin costo:</p>
          <ul className="grid list-disc gap-2 pl-5">
            {garantiaCubre.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>Si la app se cae del todo, respondemos en 24 a 48 horas; si es un error menor, en 3 a 5 días hábiles. No cubre:</p>
          <ul className="grid list-disc gap-2 pl-5">
            {garantiaNoCubre.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>
            Después de la garantía, la mensualidad de mantenimiento (opcional) cubre los arreglos, las copias de seguridad
            y el soporte. Se puede cancelar avisando con 30 días.
          </p>
        </Seccion>

        <Seccion titulo="De quién es la app">
          <p>
            Cuando pagas el total, son tuyos tu contenido, tu marca, los datos de tus clientes, tu dominio y lo que hicimos
            especialmente para ti, y puedes usarlo y modificarlo sin límite de tiempo. NODRA conserva sus herramientas y su
            código base reutilizable. Mientras no se pague el total, el trabajo sigue siendo de NODRA.
          </p>
          <p>
            Podemos mostrar tu proyecto en nuestro portafolio, siempre con datos de prueba y nunca con los de tus clientes.
            Si prefieres que no aparezca, nos lo dices por escrito.
          </p>
          <p>
            Los textos, el logo y las imágenes de esta página son de NODRA. Puedes compartir el enlace, pero no copiarlos
            para usarlos en otro negocio sin nuestro permiso.
          </p>
        </Seccion>

        <Seccion titulo="Datos de tus clientes">
          <p>
            En la app que hacemos para ti, tú eres el responsable de los datos de tus clientes y NODRA los maneja por
            encargo tuyo (Ley 1581 de 2012): solo para que la app funcione, sin venderlos ni compartirlos. Si el contrato
            termina, te los entregamos y los borramos de nuestros equipos en máximo 30 días. Los datos de quienes visitan
            esta página se explican en el{' '}
            <a href="/privacidad" className={enlace}>
              aviso de privacidad
            </a>
            .
          </p>
        </Seccion>

        <Seccion titulo="Límite de responsabilidad">
          <p>
            Respondemos por las fallas de lo que hicimos, según la garantía. En todo caso, nuestra responsabilidad total no
            supera lo que pagaste por el proyecto (o, en mensualidades, lo pagado en los últimos 12 meses). No respondemos
            por ganancias dejadas de recibir, por fallas de servicios de terceros (Google, pasarelas de pago, proveedores
            de internet o de dominio), por cambios hechos por otras personas ni por el contenido que cargue el cliente.
            Este límite no aplica si hay dolo o culpa grave, y no reduce los derechos que la ley te da como consumidor.
          </p>
        </Seccion>

        <Seccion titulo="Retracto">
          <p>
            Una app a la medida se hace según tus indicaciones, así que no tiene derecho de retracto (Ley 1480 de 2011,
            artículo 47). Si cancelas después de empezar, el anticipo cubre el trabajo hecho y te entregamos lo avanzado
            hasta esa fecha.
          </p>
        </Seccion>

        <Seccion titulo="NODRA Agenda">
          <p>
            Nuestra app de citas por suscripción tiene sus propios términos, con precios, renovación y retracto de 5 días
            hábiles:{' '}
            <a href={`${AGENDA_URL}terminos`} target="_blank" rel="noopener noreferrer" className={enlace}>
              términos de NODRA Agenda
              <span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
            .
          </p>
        </Seccion>

        <Seccion titulo="Si no estamos de acuerdo">
          <p>
            Primero lo hablamos directamente, por WhatsApp o correo, durante 15 días hábiles. Si no se resuelve, intentamos
            una conciliación en un centro de conciliación de Ibagué y, si tampoco funciona, decidirán los jueces de Ibagué,
            Colombia. Estos términos se rigen por las leyes de Colombia. Como consumidor, también puedes acudir a la
            Superintendencia de Industria y Comercio (SIC).
          </p>
        </Seccion>

        <Seccion titulo="Cambios a estos términos">
          <p>
            Si los cambiamos, publicaremos la nueva versión en esta misma página con su fecha. Los proyectos ya
            contratados siguen con los términos de su propuesta, salvo que ambos aceptemos el cambio por escrito.
          </p>
        </Seccion>
      </main>

      <Pie />
    </>
  )
}
