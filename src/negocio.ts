// Datos de NODRA en un solo lugar: los usa la página visible y la ficha para buscadores (Schema.org)
import { CORREO, HORARIO, LEMA, WHATSAPP_NUMERO } from './Marco'

export const SITIO = 'https://nodrasoft.com'
export const CIUDAD = 'Ibagué'
export const DEPARTAMENTO = 'Tolima'

// Fecha del último cambio de contenido de cada página (auditoría 2026-11-12). Sale visible al final de la página
// ("Página actualizada el…"), en la ficha para Google (dateModified) y debe ser IGUAL al <lastmod> de
// public/sitemap.xml. Cambiarla SOLO cuando cambie el contenido de esa página, no por cambiarla (sería engañar).
export const ACTUALIZADA = {
  inicio: '2026-11-12',
  paginasWeb: '2026-11-12',
  tienda: '2026-11-12',
  citas: '2026-11-12',
} as const

/*
  Precios de referencia (estudio de la web 2026-11-02, docs/DECISIONES.md). Por qué rangos y no un precio fijo: cada
  proyecto cambia (formularios, pagos en línea, cuentas de usuario…), pero quien compara precios se va si no ve
  ninguno; la competencia de Ibagué publica "desde $389.000". Cómo se calcularon:
  - Proyecto real CORISOC (oct-2026): página completa + donaciones en línea + panel de actividades = $2.600.000
    → cae dentro de "Tienda en línea o agenda a tu medida".
  - Competencia en Ibagué (sus webs, nov-2026): planes básicos $389.000-$490.000, intermedios $790.000-$960.000,
    avanzados $1.490.000-$1.600.000, casi siempre con plantilla y sin garantía. NODRA no compite por ser el más
    barato: diseño propio, panel para el dueño, seguridad y 6 meses de garantía.
  - 2026-11-02 (misma noche): Danny dijo "es muy poco"; se probó subirlos, pero decidió dejar los anteriores con un
    mínimo de $1.000.000 ("deja los precios anteriores, pero el mínimo que sea un millón"). Así la página web más
    sencilla queda por encima de los planes intermedios de la competencia de Ibagué ($790.000-$960.000).
  OJO (Ley 1480): un precio anunciado obliga. Si cambian, cambiarlos aquí (la página, la ficha para Google y la
  pregunta frecuente lo leen de aquí) y en public/llms.txt, el mismo día.
*/
export const PRECIOS = [
  {
    tipo: 'Página web para tu negocio',
    desde: 1_000_000,
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

/** "$1.000.000 a $1.500.000" o "Desde $3.500.000" */
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
        dateModified: ACTUALIZADA.inicio,
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
  // "Recibe tus primeras 20 citas sin pagar": son 20 de prueba UNA vez, no cada mes (Danny 2026-11-11), y dicho así
  // nadie entiende que se regalan 20 citas a los clientes.
  { nombre: 'Gratis', precio: '$0', paraQuien: 'Pruébala gratis: recibe tus primeras 20 citas sin pagar.' },
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
        dateModified: ACTUALIZADA.citas,
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

// ---------- Página "Diseño de páginas web en Ibagué" (2026-11-02, estudio de la web, semana 2) ----------
// Es la búsqueda con la que sale primero la competencia en Ibagué. Responde lo que pregunta quien va a contratar
// (qué incluye, cuánto cuesta, qué preguntar antes) con datos reales: el precio sale de PRECIOS[0] (un solo lugar).
export const PAGINA_WEB = `${SITIO}/paginas-web-ibague`
export const PRECIO_PAGINA_WEB = PRECIOS[0]

// Lo que se le pregunta a cualquier proveedor antes de contratar, y la respuesta de NODRA. Solo respuestas que NODRA
// cumple hoy (términos de las cotizaciones y garantía estándar): si algo cambia, cambiarlo aquí.
export const antesDeContratar = [
  {
    pregunta: '¿El dominio queda a tu nombre?',
    respuesta: 'Sí. La dirección (tunegocio.com) queda a nombre de tu negocio.',
  },
  {
    pregunta: '¿Tiene garantía?',
    respuesta: 'Sí, 6 meses. Si algo falla, lo arreglamos gratis.',
  },
  {
    pregunta: '¿Es un diseño repetido?',
    respuesta: 'No. Se hace solo para tu negocio.',
  },
  {
    pregunta: '¿Se ve bien en el celular y carga rápido?',
    respuesta: 'Sí. Se hace primero para el celular.',
  },
  {
    pregunta: '¿Quién te responde si necesitas algo?',
    respuesta: 'Danny, el fundador, por WhatsApp.',
  },
  {
    pregunta: '¿Cuánto cuesta mantenerla?',
    respuesta: 'Desde $100.000 al mes, si lo quieres. Si no, pagas solo cuando pidas un cambio.',
  },
]

export const preguntasPaginasWeb = [
  {
    pregunta: '¿Cuánto cuesta una página web en Ibagué con NODRA?',
    respuesta: `Una página web para tu negocio cuesta de ${rangoPrecio(PRECIOS[0])}, según cuántas partes tenga y si escribimos los textos por ti. El precio exacto te llega por escrito y sin costo, antes de empezar. Pagas la mitad al empezar y la otra mitad al recibirla.`,
  },
  {
    pregunta: '¿Cuánto se demora?',
    respuesta:
      'La fecha va escrita en la propuesta y empieza a contar cuando nos mandas tus fotos, textos y logo.',
  },
  {
    pregunta: '¿Necesito tener textos y fotos?',
    respuesta:
      'Lo mejor son fotos reales de tu negocio, tomadas con tu celular. Los textos los podemos escribir contigo.',
  },
  {
    pregunta: '¿Mi página va a salir en Google?',
    respuesta:
      'La dejamos lista para que Google la encuentre. Salir de primero también depende de tu perfil en Google Maps y de tus reseñas, y te enseñamos a manejarlos.',
  },
  {
    pregunta: '¿Puedo cambiar precios o fotos yo mismo?',
    respuesta:
      'En la página web, los cambios los hacemos nosotros cuando nos los pidas. Si quieres cambiarlos tú desde el celular, te sirve una tienda virtual.',
  },
  {
    pregunta: '¿Trabajan con negocios fuera de Ibagué?',
    respuesta: 'Sí. Estamos en Ibagué, pero trabajamos por WhatsApp con negocios de todo el Tolima y del resto de Colombia.',
  },
]

export function datosPaginasWeb() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGINA_WEB}#webpage`,
        url: PAGINA_WEB,
        dateModified: ACTUALIZADA.paginasWeb,
        name: 'Diseño de páginas web en Ibagué | NODRA',
        inLanguage: 'es-CO',
        isPartOf: { '@id': `${SITIO}/#website` },
        about: { '@id': `${PAGINA_WEB}#servicio` },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITIO}/` },
            { '@type': 'ListItem', position: 2, name: 'Diseño de páginas web en Ibagué', item: PAGINA_WEB },
          ],
        },
      },
      {
        '@type': 'Service',
        '@id': `${PAGINA_WEB}#servicio`,
        name: 'Diseño de páginas web para negocios',
        serviceType: 'Diseño de páginas web',
        description: PRECIOS[0].incluye,
        provider: NEGOCIO,
        areaServed: [
          { '@type': 'City', name: CIUDAD },
          { '@type': 'AdministrativeArea', name: DEPARTAMENTO },
        ],
        url: PAGINA_WEB,
        offers: {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'COP',
            minPrice: PRECIOS[0].desde,
            maxPrice: PRECIOS[0].hasta,
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGINA_WEB}#faq`,
        isPartOf: { '@id': `${PAGINA_WEB}#webpage` },
        mainEntity: preguntasPaginasWeb.map((p) => ({
          '@type': 'Question',
          name: p.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: p.respuesta },
        })),
      },
    ],
  }
}

// ---------- Página "Tienda virtual en Ibagué" (2026-11-04, investigación SEO + GEO §10.2) ----------
// Una página nueva solo si tiene contenido propio (regla de la investigación: nada de copiar /paginas-web-ibague
// cambiando palabras). Lo propio aquí: pedidos por WhatsApp vs. pagos en línea, si basta con WhatsApp, y lo que pide
// la ley para vender en línea en Colombia. El precio sale de PRECIOS[1] (un solo lugar). Honesto: NODRA todavía no ha
// publicado una tienda virtual, así que la página no muestra ninguna como "trabajo real".
export const PAGINA_TIENDA = `${SITIO}/tienda-virtual-ibague`
export const PRECIO_TIENDA = PRECIOS[1]

// Las dos formas de cobrar, en una línea cada una: el ejemplo visual (Demos.tsx) explica el resto.
// Regla de oro de Danny (2026-11-04): poco texto, la gente es más visual.
export const formasDeCobrar = [
  { titulo: 'Pedidos por WhatsApp', texto: 'Cobras como ya lo haces: transferencia, Nequi o al entregar.', etiqueta: 'Sin comisión' },
  { titulo: 'Pagos en línea', texto: 'Te pagan con PSE, Nequi o tarjeta a cualquier hora. La empresa de pagos cobra un pequeño porcentaje.', etiqueta: 'Abierta 24 horas' },
]

// "¿Me basta con WhatsApp?" (pregunta real de los dueños, investigación §5). Respuesta honesta: a veces sí.
export const cuandoSirveTienda = [
  'Tienes muchos productos.',
  'Te escriben de noche y pierdes ventas.',
  'Quieres clientes nuevos desde Google.',
]

// Lo que pide la ley para vender en línea en Colombia, en pocas palabras. No es asesoría legal (la página lo dice).
// La factura electrónica va en las preguntas frecuentes. Si cambia una ley, cambiarla aquí.
export const leyVenderEnLinea = [
  'Quién vende y cómo contactarte (Ley 1480)',
  'El precio total antes de pagar',
  'Devoluciones dentro de 5 días hábiles (Ley 1480, art. 47)',
  'Permiso del cliente para guardar sus datos (Ley 1581)',
]

export const preguntasTienda = [
  // Estaba por error en preguntasCitas desde el 2026-11-04 (commit 1db5a40); movida aquí el 2026-11-12
  {
    pregunta: '¿La tienda hace la factura electrónica?',
    respuesta:
      'No. Si la DIAN se la exige a tu negocio, la sigues haciendo como hoy, con tu programa de facturación.',
  },
  {
    pregunta: '¿Cuánto cuesta una tienda virtual en Ibagué con NODRA?',
    respuesta: `Una tienda virtual cuesta de ${rangoPrecio(PRECIOS[1])}, según cuántos productos cargamos al inicio, si lleva pagos en línea y si los productos tienen tallas o colores. El precio exacto va por escrito en una propuesta sin costo, antes de empezar. Se paga 50 % al empezar y 50 % al recibirla funcionando.`,
  },
  {
    pregunta: '¿Puedo recibir pagos con Nequi y PSE?',
    respuesta:
      'Sí. Se hace con una empresa de pagos colombiana (pasarela de pagos), que se queda con un pequeño porcentaje de cada venta. La plata llega directo a la cuenta de tu negocio, no pasa por NODRA. Para inscribirte te piden el RUT y una certificación bancaria, y te acompañamos en ese paso.',
  },
  {
    pregunta: '¿Cuántos productos puedo tener?',
    respuesta:
      'Los que necesites: tú mismo agregas y quitas productos desde tu celular. Si quieres que nosotros subamos los primeros productos, o tienes tallas y colores, eso va en la propuesta.',
  },
  {
    pregunta: '¿La tienda maneja domicilios?',
    respuesta:
      'La tienda puede sumar el valor del domicilio según el barrio y mostrarlo antes de pagar. Las entregas las haces tú o tu mensajero: NODRA no lleva pedidos.',
  },
  {
    pregunta: '¿Mis clientes tienen que descargar algo?',
    respuesta: 'No. Abren tu tienda desde un enlace en el celular o el computador y compran ahí mismo.',
  },
  {
    pregunta: '¿Cuánto se demora?',
    respuesta:
      'La fecha de entrega va en la propuesta y empieza a contar cuando tengamos tus fotos, precios y logo. Si el material se demora, la entrega se corre los mismos días.',
  },
  {
    pregunta: '¿Trabajan con negocios fuera de Ibagué?',
    respuesta: 'Sí. Estamos en Ibagué, pero trabajamos por WhatsApp con negocios de todo el Tolima y del resto de Colombia.',
  },
]

export function datosTienda() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGINA_TIENDA}#webpage`,
        url: PAGINA_TIENDA,
        dateModified: ACTUALIZADA.tienda,
        name: 'Tienda virtual en Ibagué | NODRA',
        inLanguage: 'es-CO',
        isPartOf: { '@id': `${SITIO}/#website` },
        about: { '@id': `${PAGINA_TIENDA}#servicio` },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITIO}/` },
            { '@type': 'ListItem', position: 2, name: 'Tienda virtual en Ibagué', item: PAGINA_TIENDA },
          ],
        },
      },
      {
        '@type': 'Service',
        '@id': `${PAGINA_TIENDA}#servicio`,
        name: 'Tienda virtual para negocios',
        serviceType: 'Desarrollo de tiendas virtuales',
        description:
          'Catálogo con fotos y precios, carrito, pedidos por WhatsApp o pagos en línea con PSE, Nequi o tarjeta, y un panel para cambiar precios e inventario desde el celular.',
        provider: NEGOCIO,
        areaServed: [
          { '@type': 'City', name: CIUDAD },
          { '@type': 'AdministrativeArea', name: DEPARTAMENTO },
        ],
        url: PAGINA_TIENDA,
        offers: {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'COP',
            minPrice: PRECIOS[1].desde,
            maxPrice: PRECIOS[1].hasta,
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGINA_TIENDA}#faq`,
        isPartOf: { '@id': `${PAGINA_TIENDA}#webpage` },
        mainEntity: preguntasTienda.map((p) => ({
          '@type': 'Question',
          name: p.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: p.respuesta },
        })),
      },
    ],
  }
}

// ---------- Guía "¿Cuánto cuesta una página web en Ibagué?" (2026-11-12, revisión de Google con Danny) ----------
// Por qué existe: al buscar "páginas web Ibagué", Google muestra arriba a quien publica precios y el resumen con IA
// cita artículos que responden "cuánto cuesta". Esta guía responde la pregunta para TODO el mercado (no solo NODRA):
// así Google y las IA tienen una respuesta completa que citar. Distinta de /paginas-web-ibague (que vende el servicio
// de NODRA): aquí se compara, se explica qué se paga aparte y cuál sirve a cada negocio.
// HONESTIDAD (regla 8.6): los precios del mercado son los que 5 agencias y diseñadores que ofrecen páginas web en
// Ibagué publican en sus propias páginas, revisados en oct-nov 2026 (detalle y nombres en
// Empresa NEXUS/4 Estudios/2026-11-02-estudio-web-NODRA.md y docs/DECISIONES.md 37). No se nombra a ninguna agencia
// (Ley 1480: comparar sin rebajar a nadie). Si se vuelve a revisar el mercado, cambiar GUIA_ACTUALIZADA y estos rangos.
export const PAGINA_GUIA = `${SITIO}/cuanto-cuesta-una-pagina-web-ibague`
export const GUIA_PUBLICADA = '2026-11-12'
export const GUIA_ACTUALIZADA = '2026-11-12'
export const GUIA_ACTUALIZADA_VISIBLE = '12 de noviembre de 2026'

/** Escalones de precio del mercado en Ibagué. `hasta` sirve también para dibujar el largo de la barra. */
export const preciosMercado = [
  {
    nivel: 'Gratis',
    precio: '$0 para empezar',
    hasta: 0,
    trae: 'La armas tú con una plantilla. Ejemplo: el plan de digitalización de la Alcaldía de Ibagué con Kolau.',
  },
  {
    nivel: 'Básica',
    precio: '$389.000 a $650.000',
    hasta: 650_000,
    trae: 'Una sola página hecha con plantilla. Algunas traen el dominio y el alojamiento solo del primer año.',
  },
  {
    nivel: 'Intermedia',
    precio: '$789.000 a $960.000',
    hasta: 960_000,
    trae: 'Varias secciones: servicios, fotos, ubicación y contacto.',
  },
  {
    nivel: 'Avanzada',
    precio: '$1.490.000 a $1.600.000',
    hasta: 1_600_000,
    trae: 'Más páginas y funciones. Lo que incluye cambia mucho de una agencia a otra.',
  },
]

// Lo que hace que una página cueste $400.000 y otra $1.500.000, en palabras del dueño del negocio
export const porQueCambia = [
  { que: 'Plantilla o diseño propio', explica: 'Una plantilla es más barata, pero otros negocios pueden tener la misma.' },
  { que: 'Quién pone textos y fotos', explica: 'Si los escriben por ti o toman las fotos, sube el precio.' },
  { que: 'Funciones extra', explica: 'Pagos en línea, citas o formularios especiales cuestan más que un botón de WhatsApp.' },
  { que: 'Garantía y quién te responde', explica: 'Pregunta qué pasa si algo falla después de entregada, y por cuánto tiempo.' },
]

export const preguntasGuia = [
  {
    pregunta: '¿Se puede tener una página web gratis?',
    respuesta:
      'Sí. Hay programas gratis, como el de la Alcaldía de Ibagué con Kolau, y constructores donde la armas tú. Sirven para empezar; el costo es tu tiempo, y el dominio propio o las funciones extra suelen ser pagos.',
  },
  {
    pregunta: '¿Cuánto cuesta el dominio (tunegocio.com) en Colombia?',
    respuesta:
      'Entre $60.000 y $120.000 al año, según la terminación (.com, .co). Pide que quede a nombre de tu negocio, no del diseñador.',
  },
  {
    pregunta: '¿Hay que pagar todos los años?',
    respuesta:
      'Casi siempre sí: el dominio se renueva cada año. Si el plan trae el alojamiento solo el primer año, pregunta cuánto cuesta renovarlo antes de pagar.',
  },
  {
    pregunta: '¿Me basta con Facebook, Instagram o el perfil de Google?',
    respuesta:
      'Para empezar, sí ayudan, y el perfil de Google Maps es gratis. La página web suma cuando quieres mostrar precios, recibir pedidos o citas, y que el contenido sea tuyo y no de una red social.',
  },
  {
    pregunta: '¿Cuánto se demora hacer una página web?',
    respuesta:
      'Algunas agencias de Ibagué entregan las sencillas con plantilla en 3 a 7 días. Las de diseño propio toman más. Pide la fecha por escrito y desde cuándo cuenta.',
  },
]

export function datosGuia() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGINA_GUIA}#webpage`,
        url: PAGINA_GUIA,
        name: '¿Cuánto cuesta una página web en Ibagué? | NODRA',
        inLanguage: 'es-CO',
        isPartOf: { '@id': `${SITIO}/#website` },
        mainEntity: { '@id': `${PAGINA_GUIA}#guia` },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITIO}/` },
            { '@type': 'ListItem', position: 2, name: '¿Cuánto cuesta una página web en Ibagué?', item: PAGINA_GUIA },
          ],
        },
      },
      {
        // Artículo con autor y fechas: Google y las IA prefieren guías con quién las escribió y cuándo se revisaron
        '@type': 'Article',
        '@id': `${PAGINA_GUIA}#guia`,
        headline: '¿Cuánto cuesta una página web en Ibagué? Precios de 2026',
        inLanguage: 'es-CO',
        datePublished: GUIA_PUBLICADA,
        dateModified: GUIA_ACTUALIZADA,
        // Mismo @id que en la portada; el nombre se repite para que la guía se entienda sola
        author: { '@type': 'Person', '@id': `${SITIO}/#fundador`, name: 'Danny Javier Díaz' },
        publisher: NEGOCIO,
        image: `${SITIO}/og.jpg`,
        about: { '@type': 'Thing', name: 'Precio de una página web en Ibagué' },
        contentLocation: { '@type': 'City', name: CIUDAD },
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGINA_GUIA}#faq`,
        isPartOf: { '@id': `${PAGINA_GUIA}#webpage` },
        mainEntity: preguntasGuia.map((p) => ({
          '@type': 'Question',
          name: p.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: p.respuesta },
        })),
      },
    ],
  }
}
