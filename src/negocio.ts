// Datos de NODRA en un solo lugar: los usa la página visible y la ficha para buscadores (Schema.org)
import { LEMA, WHATSAPP_NUMERO } from './Marco'

export const SITIO = 'https://nodrasoft.com'
export const CIUDAD = 'Ibagué'
export const DEPARTAMENTO = 'Tolima'

export const preguntas = [
  {
    pregunta: '¿Dónde está NODRA?',
    respuesta:
      'NODRA es una empresa de desarrollo de software en Ibagué, Tolima (Colombia). Nos contactas por WhatsApp.',
  },
  {
    pregunta: '¿Qué tipo de apps hacen?',
    respuesta:
      'Apps móviles y web a la medida para negocios: tiendas en línea, sistemas de citas y reservas, paneles de administración y apps con inteligencia artificial.',
  },
  {
    pregunta: '¿La app funciona en Android y en iPhone?',
    respuesta:
      'Sí. Hacemos una sola app multiplataforma que se instala en Android y iPhone y también abre en el computador.',
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
        name: 'NODRA Ibagué | Apps a la medida y seguridad en la nube',
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
          'Desarrollo de apps móviles y web a la medida en Ibagué, Tolima: tiendas en línea, citas y reservas y apps con inteligencia artificial, con reglas de acceso estrictas y conexión cifrada.',
        url: `${SITIO}/`,
        logo: `${SITIO}/apple-touch-icon.png`,
        image: `${SITIO}/og.jpg`,
        telephone: `+${WHATSAPP_NUMERO}`,
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
        knowsAbout: [
          'Desarrollo de aplicaciones móviles',
          'Desarrollo web',
          'Inteligencia artificial',
          'Ciberseguridad',
          'Seguridad en la nube',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios de NODRA',
          itemListElement: [
            'Apps móviles y web a la medida',
            'Tiendas en línea',
            'Sistemas de citas y reservas',
            'Apps con inteligencia artificial',
          ].map((nombre) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: nombre, provider: NEGOCIO } })),
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
  { nombre: 'Gratis', precio: '$0', paraQuien: 'Para empezar: hasta 20 citas al mes.' },
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
