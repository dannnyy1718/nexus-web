// Datos de NEXUS en un solo lugar: los usa la página visible y la ficha para buscadores (Schema.org)
import { LEMA, WHATSAPP_NUMERO } from './Marco'

export const SITIO = 'https://nexus-tech-co.web.app'
export const CIUDAD = 'Ibagué'
export const DEPARTAMENTO = 'Tolima'

export const preguntas = [
  {
    pregunta: '¿Dónde está NEXUS?',
    respuesta:
      'NEXUS es una empresa de desarrollo de software en Ibagué, Tolima (Colombia). Nos contactas por WhatsApp.',
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
      'Pagas el 50 % para empezar y el otro 50 % al recibir la app funcionando. Incluye 6 meses de garantía.',
  },
  {
    pregunta: '¿Mis datos y los de mis clientes están seguros?',
    respuesta:
      'Sí. NEXUS nace de la ingeniería en ciberseguridad: cada negocio tiene su propio espacio en la nube, con reglas de acceso estrictas y conexión cifrada.',
  },
]

// Ficha para Google y las IA: qué es NEXUS, dónde está y qué ofrece
export function datosEstructurados() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITIO}/#negocio`,
      name: 'NEXUS',
      slogan: LEMA,
      description:
        'Desarrollo de apps móviles y web a la medida en Ibagué, Tolima: tiendas en línea, citas y reservas y apps con inteligencia artificial, con reglas de acceso estrictas y conexión cifrada.',
      url: `${SITIO}/`,
      logo: `${SITIO}/apple-touch-icon.png`,
      image: `${SITIO}/og.jpg`,
      telephone: `+${WHATSAPP_NUMERO}`,
      founder: { '@type': 'Person', name: 'Danny Javier Díaz' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: CIUDAD,
        addressRegion: DEPARTAMENTO,
        addressCountry: 'CO',
      },
      areaServed: { '@type': 'City', name: CIUDAD },
      knowsAbout: [
        'Desarrollo de aplicaciones móviles',
        'Desarrollo web',
        'Inteligencia artificial',
        'Ciberseguridad',
        'Seguridad en la nube',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de NEXUS',
        itemListElement: [
          'Apps móviles y web a la medida',
          'Tiendas en línea',
          'Sistemas de citas y reservas',
          'Apps con inteligencia artificial',
        ].map((nombre) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: nombre } })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: preguntas.map((p) => ({
        '@type': 'Question',
        name: p.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: p.respuesta },
      })),
    },
  ]
}
