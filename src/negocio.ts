// Datos de NODRA en un solo lugar: los usa la página visible y la ficha para buscadores (Schema.org)
import { CORREO, HORARIO, LEMA, WHATSAPP_NUMERO } from './Marco'

export const SITIO = 'https://nodrasoft.com'
export const CIUDAD = 'Ibagué'
export const DEPARTAMENTO = 'Tolima'

/*
  Precios de referencia (estudio de la web 2026-11-02, docs/DECISIONES.md). Por qué rangos y no un precio fijo: cada
  proyecto cambia (formularios, pagos en línea, cuentas de usuario…), pero quien compara precios se va si no ve
  ninguno; la competencia de Ibagué publica "desde $389.000". Cómo se calcularon:
  - Proyecto real CORISOC (oct-2026): página completa + donaciones en línea + panel de actividades = $2.600.000
    → cae dentro de "Tienda en línea o agenda a tu medida".
  - Competencia en Ibagué (sus webs, nov-2026): planes básicos $389.000-$490.000, intermedios $790.000-$960.000,
    avanzados $1.490.000-$1.600.000, casi siempre con plantilla y sin garantía. NODRA no compite por ser el más
    barato: diseño propio, panel para el dueño, seguridad y 6 meses de garantía.
  OJO (Ley 1480): un precio anunciado obliga. Si cambian, cambiarlos aquí (la página, la ficha para Google y la
  pregunta frecuente lo leen de aquí) y en public/llms.txt, el mismo día.
*/
export const PRECIOS = [
  {
    tipo: 'Página web para tu negocio',
    desde: 800_000,
    hasta: 1_500_000,
    incluye: 'Tus servicios, fotos, ubicación, horario y botón de WhatsApp. Lista para celular y para salir en Google.',
  },
  {
    tipo: 'Tienda en línea o agenda a tu medida',
    desde: 1_800_000,
    hasta: 3_500_000,
    incluye: 'Lo de la página web, más catálogo o citas y un panel para cambiar precios, fotos y horarios desde tu celular.',
  },
  {
    tipo: 'App a la medida',
    desde: 3_500_000,
    hasta: null,
    incluye: 'Cuentas para tus clientes y empleados, permisos por persona y los procesos de tu negocio. Se hace por etapas.',
  },
] as const

/** "$800.000 a $1.500.000" o "Desde $3.500.000" */
export const rangoPrecio = (p: (typeof PRECIOS)[number]) => {
  const f = (n: number) => `$${n.toLocaleString('es-CO')}`
  return p.hasta ? `${f(p.desde)} a ${f(p.hasta)}` : `Desde ${f(p.desde)}`
}

// Lo que mueve el precio dentro del rango, en palabras del dueño del negocio
export const QUE_CAMBIA_EL_PRECIO = [
  'Cuántas páginas o pantallas tiene.',
  'Formularios especiales (varios pasos, subir fotos o archivos). El de contacto va incluido.',
  'Pagos en línea con tarjeta, PSE o Nequi. La pasarela cobra aparte su comisión por cada venta.',
  'Cuentas de usuario y permisos (clientes, empleados, administrador).',
  'Si escribimos los textos y preparamos las fotos por ti.',
]

// Costos que no son de NODRA: se pagan directo a cada empresa y se dicen antes de empezar (propuesta clara)
export const COSTOS_APARTE = [
  'Dominio propio (tunegocio.com): de $60.000 a $120.000 al año.',
  'Mantenimiento opcional: desde $100.000 al mes (revisión, copias de seguridad y actualizaciones).',
  'Solo si la app va a las tiendas: Google Play cobra USD 25 una vez y Apple USD 99 al año.',
]

export const preguntas = [
  {
    pregunta: '¿Dónde está NODRA?',
    respuesta:
      'NODRA es una empresa de desarrollo de software en Ibagué, Tolima (Colombia). Nos contactas por WhatsApp.',
  },
  {
    pregunta: '¿Qué hacen?',
    respuesta:
      'Páginas web, tiendas en línea, sistemas de citas y reservas y apps a la medida con panel para manejar tu negocio, en Android, iPhone y computador. Los asistentes con inteligencia artificial están en preparación.',
  },
  // Crítica 2026-10-28: las dudas reales de quien no es técnico (¿hay que descargar algo?, ¿cuánto cuesta?).
  // Precio (estudio 2026-11-02): ahora con los rangos de PRECIOS, no "depende" (quien compara se iba).
  {
    pregunta: '¿Funciona en Android y en iPhone? ¿Mis clientes tienen que descargar algo?',
    respuesta:
      'Funciona en Android, iPhone y computador. Tus clientes la abren desde un enlace, sin descargar nada; si quieren, la instalan en su celular con un toque.',
  },
  {
    pregunta: '¿Cuánto cuesta una página web o una app?',
    respuesta: `${PRECIOS.map((p) => `${p.tipo}: ${rangoPrecio(p).toLowerCase()}`).join('. ')}. Lo que más cambia el precio: formularios especiales, pagos en línea, cuentas de usuario y cuántas páginas tiene. El precio exacto va por escrito en una propuesta sin costo, antes de empezar. NODRA Agenda tiene un plan gratis.`,
  },
  {
    pregunta: '¿Cómo se paga y qué garantía tiene?',
    respuesta:
      'Pagas el 50 % para empezar y el otro 50 % al recibir la app funcionando. Incluye 6 meses de garantía: corregimos sin costo cualquier falla en las funciones acordadas en la propuesta. Las funciones nuevas o los cambios de idea se cotizan aparte.',
  },
  {
    pregunta: '¿Mis datos y los de mis clientes están seguros?',
    respuesta:
      'Sí. NODRA nace de la formación en ciberseguridad: cada negocio tiene su propio espacio en la nube, con reglas de acceso estrictas y conexión cifrada.',
  },
]

const NEGOCIO = { '@id': `${SITIO}/#negocio` }

// Ficha para Google y las IA: qué es NODRA, dónde está y qué ofrece.
// Va en un solo @graph con @id para que Google sepa que el sitio, la página, el negocio, su fundador y las
// preguntas son la misma entidad (auditoría SEO 2026-10-24). El nodo WebSite le da a Google el nombre "NODRA".
export function datosEstructurados() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITIO}/#website`,
        url: `${SITIO}/`,
        name: 'NODRA',
        inLanguage: 'es-CO',
        publisher: NEGOCIO,
      },
      {
        '@type': 'WebPage',
        '@id': `${SITIO}/#webpage`,
        url: `${SITIO}/`,
        name: 'Páginas web, tiendas en línea y apps en Ibagué | NODRA',
        inLanguage: 'es-CO',
        isPartOf: { '@id': `${SITIO}/#website` },
        about: NEGOCIO,
        primaryImageOfPage: `${SITIO}/og.jpg`,
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITIO}/#negocio`,
        name: 'NODRA',
        slogan: LEMA,
        description:
          'Páginas web, tiendas en línea, citas y reservas y apps a la medida en Ibagué, Tolima, con reglas de acceso estrictas y conexión cifrada.',
        url: `${SITIO}/`,
        logo: `${SITIO}/apple-touch-icon.png`,
        image: `${SITIO}/og.jpg`,
        telephone: `+${WHATSAPP_NUMERO}`,
        email: CORREO,
        founder: { '@id': `${SITIO}/#fundador` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: CIUDAD,
          addressRegion: DEPARTAMENTO,
          addressCountry: 'CO',
        },
        areaServed: [
          { '@type': 'City', name: CIUDAD },
          { '@type': 'AdministrativeArea', name: DEPARTAMENTO },
        ],
        // Perfiles oficiales: le confirman a Google y a las IA que la página y las redes son la misma empresa.
        // Agregar aquí Instagram cuando NODRA tenga cuenta propia.
        sameAs: ['https://www.facebook.com/profile.php?id=61595330230362', 'https://www.tiktok.com/@nexus.tech.co'],
        // Mismo horario que el pie de página y el Perfil de Empresa en Google
        openingHoursSpecification: HORARIO.map((h) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: h.dias,
          opens: h.abre,
          closes: h.cierra,
        })),
        knowsAbout: [
          'Diseño de páginas web',
          'Desarrollo de aplicaciones móviles',
          'Desarrollo web',
          'Ciberseguridad',
          'Seguridad en la nube',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios de NODRA',
          // Con su rango de precio (estudio 2026-11-02): Google y las IA pueden responder "¿cuánto cuesta?"
          itemListElement: PRECIOS.map((p) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: p.tipo, description: p.incluye, provider: NEGOCIO },
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'COP',
              minPrice: p.desde,
              ...(p.hasta ? { maxPrice: p.hasta } : {}),
            },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': `${SITIO}/#fundador`,
        name: 'Danny Javier Díaz',
        jobTitle: 'Fundador',
        worksFor: NEGOCIO,
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITIO}/#faq`,
        isPartOf: { '@id': `${SITIO}/#webpage` },
        mainEntity: preguntas.map((p) => ({
          '@type': 'Question',
          name: p.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: p.respuesta },
        })),
      },
    ],
  }
}

// Página "App de citas en Ibagué" (AppCitas.tsx). Precios iguales a los de NODRA Agenda
// (nexus-agenda/src/lib/planes.ts): si cambian allá, se cambian aquí también.
export const PAGINA_CITAS = `${SITIO}/app-de-citas-ibague`

export const pasosCitas = [
  { titulo: 'Creas tu página', texto: 'Tu nombre, tus servicios, tus precios y tu horario. Viene con servicios de ejemplo.' },
  { titulo: 'Compartes tu enlace', texto: 'Por WhatsApp, en Instagram o en tus estados. Tus clientes lo abren en el celular.' },
  { titulo: 'Te llegan las citas', texto: 'Eligen servicio, día y hora libres. Tú confirmas desde tu panel.' },
]

export const planesCitas = [
  // "Tu agenda recibe…": dicho así nadie entiende que se regalan 20 citas a los clientes.
  { nombre: 'Gratis', precio: '$0', paraQuien: 'Para empezar: tu agenda recibe hasta 20 citas al mes.' },
  { nombre: 'Independiente', precio: '$20.000 al mes', paraQuien: 'Quien trabaja sola o solo: citas sin límite.' },
  { nombre: 'Salón', precio: '$50.000 al mes', paraQuien: 'Hasta 10 profesionales; tus clientes eligen con quién.' },
]

export const preguntasCitas = [
  {
    pregunta: '¿Mis clientes tienen que descargar algo?',
    respuesta: 'No. Abren tu enlace en el celular y reservan ahí mismo, sin crear cuenta.',
  },
  {
    pregunta: '¿Necesito tarjeta de crédito?',
    respuesta: 'No. El plan Gratis no pide tarjeta y los planes de pago se pagan por transferencia, mes a mes.',
  },
  {
    pregunta: '¿Sirve si tengo varias profesionales?',
    respuesta: 'Sí. En el plan Salón tus clientes eligen con quién, y cada profesional ve solo sus citas.',
  },
  {
    pregunta: '¿Quién ve los datos de mis clientes?',
    respuesta: 'Solo tú. Cada negocio tiene su propio espacio en la nube, con reglas de acceso estrictas.',
  },
]

// Ficha para Google de esta página: el servicio NODRA Agenda, con sus planes reales, unido al negocio por @id
export function datosAppCitas() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGINA_CITAS}#webpage`,
        url: PAGINA_CITAS,
        name: 'App de citas en Ibagué | NODRA Agenda',
        inLanguage: 'es-CO',
        isPartOf: { '@id': `${SITIO}/#website` },
        about: { '@id': `${PAGINA_CITAS}#servicio` },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITIO}/` },
            { '@type': 'ListItem', position: 2, name: 'App de citas en Ibagué', item: PAGINA_CITAS },
          ],
        },
      },
      {
        '@type': 'Service',
        '@id': `${PAGINA_CITAS}#servicio`,
        name: 'NODRA Agenda: app de citas',
        serviceType: 'Sistema de citas y reservas en línea',
        provider: NEGOCIO,
        areaServed: [
          { '@type': 'City', name: CIUDAD },
          { '@type': 'AdministrativeArea', name: DEPARTAMENTO },
        ],
        url: 'https://agenda.nodrasoft.com/',
        offers: planesCitas.map((p) => ({
          '@type': 'Offer',
          name: `Plan ${p.nombre}`,
          price: p.precio === '$0' ? '0' : p.precio.replace(/\D/g, ''),
          priceCurrency: 'COP',
          description: p.paraQuien,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGINA_CITAS}#faq`,
        isPartOf: { '@id': `${PAGINA_CITAS}#webpage` },
        mainEntity: preguntasCitas.map((p) => ({
          '@type': 'Question',
          name: p.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: p.respuesta },
        })),
      },
    ],
  }
}
