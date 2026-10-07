import type { ReactNode } from 'react'
import { Encabezado, Pie, WHATSAPP_URL, WHATSAPP_VISIBLE } from './Marco'

// Aviso de privacidad según la Ley 1581 de 2012 y el Decreto 1377 de 2013 (Colombia)
const VIGENCIA = '6 de octubre de 2026'

const derechos = [
  'Conocer, actualizar y corregir tus datos.',
  'Pedir prueba de la autorización que nos diste.',
  'Saber para qué hemos usado tus datos.',
  'Retirar tu autorización o pedir que borremos tus datos, cuando no exista una obligación legal o contractual de conservarlos.',
  'Consultar gratis tus datos.',
  'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).',
]

function Seccion({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold md:text-2xl">{titulo}</h2>
      <div className="mt-4 grid gap-4 text-bruma">{children}</div>
    </section>
  )
}

export default function Privacidad() {
  return (
    <>
      <Encabezado />

      <main id="contenido" className="mx-auto max-w-3xl px-4 pb-20 pt-8 md:px-8 md:pt-14">
        <a href="/" className="text-sm font-semibold text-cian underline-offset-4 hover:underline">
          Volver al inicio
        </a>
        <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">Aviso de privacidad</h1>
        <p className="mt-4 text-bruma">Vigente desde el {VIGENCIA}.</p>

        <Seccion titulo="Quién es el responsable">
          <p>
            NEXUS, emprendimiento de Danny Javier Díaz, con domicilio en Ibagué, Tolima (Colombia). Puedes contactarnos por WhatsApp al{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-niebla hover:text-verde">
              {WHATSAPP_VISIBLE}
            </a>
            .
          </p>
        </Seccion>

        <Seccion titulo="Qué datos recoge esta página">
          <p>
            Ninguno. Esta página no usa cookies, no tiene formularios y no usa herramientas de estadísticas ni
            rastreadores. Las fuentes y las imágenes se cargan desde nuestro propio servidor.
          </p>
          <p>
            Nuestro proveedor de alojamiento (Firebase Hosting, de Google) puede registrar datos técnicos de
            cada visita, como la dirección IP, para mantener el servicio funcionando y seguro.
          </p>
        </Seccion>

        <Seccion titulo="Si nos escribes por WhatsApp">
          <p>
            Al escribirnos, recibimos tu nombre, tu número de celular y lo que nos cuentes sobre tu negocio.
            Escribirnos es tu autorización para usar esos datos solo para:
          </p>
          <ul className="grid list-disc gap-2 pl-5">
            <li>Responder tus preguntas.</li>
            <li>Enviarte una propuesta y su precio.</li>
            <li>Coordinar el desarrollo y la garantía de tu proyecto, si decides contratarnos.</li>
          </ul>
          <p>
            No vendemos, alquilamos ni compartimos tus datos con terceros. Los guardamos mientras dure la
            conversación o el proyecto, y el tiempo que exija la ley.
          </p>
          <p>
            WhatsApp es un servicio de Meta y maneja tus mensajes según su propia{' '}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cian underline-offset-4 hover:underline"
            >
              política de privacidad
            </a>
            .
          </p>
        </Seccion>

        <Seccion titulo="Los datos de las apps que construimos">
          <p>
            Cuando creamos una app para tu negocio, los datos de tus clientes son tuyos. Cada app vive en su
            propio servidor, separado de los demás clientes, y nosotros solo accedemos para darle soporte.
          </p>
        </Seccion>

        <Seccion titulo="Tus derechos">
          <p>Según la Ley 1581 de 2012, puedes:</p>
          <ul className="grid list-disc gap-2 pl-5">
            {derechos.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </Seccion>

        <Seccion titulo="Cómo ejercerlos">
          <p>
            Escríbenos por WhatsApp al {WHATSAPP_VISIBLE} diciendo qué necesitas. Respondemos las consultas
            en máximo 10 días hábiles y los reclamos en máximo 15 días hábiles, como indica la ley.
          </p>
        </Seccion>

        <Seccion titulo="Cambios a este aviso">
          <p>
            Si cambiamos este aviso, publicaremos la nueva versión en esta misma página con su fecha de
            vigencia.
          </p>
        </Seccion>
      </main>

      <Pie />
    </>
  )
}
