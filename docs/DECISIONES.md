# Decisiones: página de NEXUS

Qué se decidió y por qué, para no repetir discusiones ni deshacer algo sin saber su razón.

## 1. Página estática pre-renderizada, sin base de datos
- **Qué:** React + Vite compila a HTML ya armado (`scripts/prerender.mjs`) y se publica en Firebase Hosting.
- **Por qué:** carga muy rápido, Google la lee sin ejecutar JavaScript y no hay datos que proteger en un servidor.

## 2. CSP estricta y todo autoalojado
- **Qué:** `firebase.json` solo permite código, estilos, fuentes e imágenes del propio sitio.
- **Por qué:** es una empresa de ciberseguridad; la página debe dar ejemplo (Mozilla Observatory A+). Por eso las fuentes vienen de `npm` (`@fontsource`) y no de Google Fonts.

## 3. Contacto solo por WhatsApp, sin formulario ni cookies
- **Por qué:** es como los clientes de Ibagué prefieren escribir, y así la página no recoge datos personales (ver `src/Privacidad.tsx`, Ley 1581 de 2012). Si algún día se agrega analítica o cookies, hay que poner banner de consentimiento y actualizar el aviso.

## 4. Textos concretos, sin cifras ni testimonios inventados (2026-10-09)
- **Qué:** se cambiaron frases genéricas ("seguras, rápidas y fáciles", "altos estándares de seguridad") por lo que la app hace de verdad.
- **Por qué:** una promesa vaga no convence y una cifra inventada daña la reputación. Regla: solo se publican números o testimonios reales y con permiso.

## 5. "Espacio propio en la nube", no "servidor propio" (2026-10-09)
- **Por qué:** cada cliente tiene su propio proyecto de Firebase, no un servidor dedicado. Para una marca de seguridad, la precisión importa.

## 6. Colores revisados con el calculador de contraste (2026-10-09)
- **Qué:** `--color-linea` (#1d3a5f, 1.67:1) queda solo para líneas decorativas; los bordes de botones usan `--color-contorno` (#4a6e9a, 3.66:1). Los enlaces dentro de párrafos van siempre subrayados.
- **Por qué:** WCAG 2.2 AA pide 3:1 en bordes de controles y que un enlace no se distinga solo por el color (personas daltónicas).

## 7. Mapa mundial interactivo hecho con código propio (2026-10-09)
- **Qué:** puntos de tierra calculados al compilar (`scripts/mapa-puntos.mjs`, con world-atlas y d3-geo solo como herramientas de desarrollo) y dibujados en `<canvas>` (`src/MapaRed.tsx`). Ibagué es el nodo central y salen conexiones; al tocar el mapa se manda una conexión a ese punto.
- **Por qué:** un mapa de otro sitio (Google Maps, Mapbox) rompería la CSP y bajaría la seguridad y la velocidad. Así el navegador solo descarga unos 7 KB, y solo cuando el mapa está por aparecer. Se detiene cuando sale de la pantalla y queda quieto con "reducir movimiento".
- **Texto honesto:** el mapa no dice que NEXUS tenga clientes en otros países. Dice lo cierto: la app vive en la nube de Google y se abre desde cualquier lugar.

## 8. Carrusel de la app de Johana con pausa (2026-10-09)
- **Por qué:** WCAG 2.2.2 pide poder pausar lo que se mueve solo. Se pausa con el botón, al tocar un punto, con el mouse encima o con el teclado dentro.
- **Privacidad:** en la captura de la galería se ocultó la fila donde se veía la cara de una clienta. Las capturas nunca muestran caras, nombres ni celulares de clientas.

## 9. "Ver la app en vivo" lleva a los servicios, no a agendar (2026-10-09)
- **Por qué:** decisión de Danny. Si llevara a agendar, curiosos podrían crear citas falsas en el negocio real de Johana.

## 10. Escudo 3D con CSS, sin librerías 3D (2026-10-10)
- **Qué:** `src/Escudo3D.tsx` + estilos `.escena-3d`/`.pieza-3d`/`.orbita` en `index.css`. CSS 3D (`perspective`, `preserve-3d`) y un bucle corto que pasa la inclinación como variables CSS.
- **Por qué:** three.js o Spline pesan cientos de KB y bajarían Lighthouse de 90. Así cuesta unos 2 KB.
- **Variables por JavaScript:** la CSP (`style-src 'self'`) prohíbe `style=""` en el HTML, pero permite `style.setProperty` desde JS.
- **Solo aquí:** decisión de Danny. En NEXUS Agenda las páginas de los negocios deben cargar rápido en celulares sencillos.
- **Accesibilidad:** con "reducir movimiento" queda quieto; deja de animar cuando no está en pantalla.

## 11. Mapa: mundo completo en el celular (2026-10-10)
- **Antes:** en pantallas angostas se acercaba a América (ajuste "cubrir").
- **Ahora:** por debajo de 640 px usa ajuste "contener" y la caja es más ancha (`aspect-ratio: 2.2`). Pedido de Danny: la sección dice "abierta al mundo".

## 12. NEXUS Agenda como producto disponible, no como portada (2026-10-14)
- **Qué:** la sección de Agenda pasa de "Próximamente" a "Disponible", con un botón dorado que lleva a crear la agenda.
- **Por qué:** decisión de Danny. Lo principal de la portada siguen siendo las **apps a la medida**; Agenda queda como sección destacada después del caso de Johana.
- **Agenda es un producto propio de NEXUS**, no una versión de la app de Johana (aclaración de Danny, 2026-10-14). El texto no debe decir que se hizo "para Johana".
- **Cloud Security** se nombra como "Próximo servicio" dentro de Seguridad, para no mezclar lo que se vende hoy con lo que viene.

## 13. Botones 3D solo con CSS (2026-10-14)
- **Qué:** clase `.boton-3d` en `index.css` (con `.boton-verde` y `.boton-oro`): degradado de luz, borde interno y sombra de color. Solo en los botones principales (WhatsApp y Agenda), para que resalten sobre los enlaces normales.
- **Por qué:** pedido de Danny ("toque 3D"). Se hace con sombras y `translate`, sin imágenes ni librerías, así que no le quita velocidad a la página. Con "reducir movimiento" no se anima.
- **Dibujos de "Cómo trabajamos":** íconos SVG dentro del código (0 KB extra) en vez de fotos, por la misma razón.


## 14. Ancho máximo de 92rem y ajustes para pantallas grandes (2026-10-14)
- **Qué:** encabezado, contenido y pie con `max-w-[92rem]` (antes `max-w-6xl` = 72rem) y margen `xl:px-12`. Desde `2xl` (1536 px) crecen el título, el escudo (38rem, con su órbita en `index.css`) y las capturas, y se abren columnas.
- **Por qué:** en un monitor de 1920 px la página ocupaba solo el 60 % del ancho y se veía angosta. No se hizo con zoom ni agrandando todas las letras: se amplió el contenedor y se repartió el contenido. Los párrafos conservan su ancho máximo (`max-w-[..rem]`) porque las líneas muy largas se leen mal.
- **Ojo:** si se agrega una sección nueva, usar el mismo `max-w-[92rem]` para que quede alineada.

## 15. La marca pasa de NEXUS a NODRA (2026-10-14)
- **Qué:** todo texto visible dice NODRA; NEXUS Agenda se llama NODRA Agenda. El escudo con la N de nodos, los colores y el lema se quedan.
- **Por qué:** en la SIC, la Fuerza Aérea Colombiana pidió "NEXUS" (SD2025/0096428) en las clases 9 y 42 con "software" y "desarrollo de software". En Colombia la marca es de quien la registra primero. "NODRA" no tiene resultados en la SIC (clases 9 y 42) ni empresas de software con ese nombre en internet. NEXUSX se descartó por parecerse demasiado; NODIA porque ya la usan empresas de software (una con oficina en Cali).
- **Lo que NO cambia todavía:** las direcciones `nexus-tech-co.web.app` y `nexus-agenda-co.web.app`, el id del proyecto de Firebase (`nexus-tech-co`) y el nombre de la carpeta. Las direcciones se mudan una sola vez cuando se compre `nodra.co`; el id de Firebase no se puede cambiar.
- **Registro de la marca:** Danny decidió registrarla en la SIC cuando la empresa dé ganancias (clases 9 y 42: unos 2.021.000 COP, o 1.455.000 con tarifa MiPyme, en 2026).

## 16. La garantía dice qué cubre (2026-10-17)
- **Qué:** la página ya no dice solo "6 meses de garantía": aclara que cubre las fallas en las funciones acordadas en la propuesta, y que lo nuevo se cotiza aparte.
- **Por qué:** una garantía sin límites invita a pedir funciones nuevas gratis y genera discusiones. La Ley 1480 obliga a cumplir lo prometido, así que la garantía se amarra a la lista de funciones de cada cotización. El detalle completo (qué cubre, qué no, tiempos y diferencia con la mensualidad) está en `Empresa NEXUS/Cotizaciones/GARANTIA-ESTANDAR.md`.

## 17. Menos texto, más cosas para ver y tocar (2026-10-21)
- **Qué:** pedido de Danny ("tiene demasiado texto y a la gente no le gusta"). La página pasó de ~760 a ~510 palabras visibles en celular y de 10,6 a 9,3 pantallas de alto.
  1. **Qué hacemos:** cada servicio tiene un ejemplo que se puede tocar (`src/Demos.tsx`): tienda con carrito, horarios para apartar y un asistente que responde. Hechos con HTML y CSS, sin imágenes ni librerías (0 KB extra). Dicen "Ejemplo" arriba porque los productos, horarios y respuesta son inventados (regla de textos honestos).
  2. **Johana:** un solo celular grande que se desliza con el dedo (`src/CelularJohana.tsx`, scroll-snap del navegador) con botones Inicio / Agendar / Galería / Panel. Reemplaza el carrusel automático de dos celulares pequeños (decisión 8): ya no se mueve solo, así que no necesita botón de pausa.
  3. **Cómo trabajamos:** 4 nodos unidos por una línea que se encienden al bajar (`src/Pasos.tsx`). El texto siempre se ve; solo cambia la luz del nodo.
  4. **Preguntas frecuentes:** se abren al tocarlas (`<details>`). Google las sigue leyendo porque están en el HTML y en la ficha FAQPage.
  5. Escudo del inicio más pequeño en celular (13,5rem) para que el título se vea en la primera pantalla.
- **Velocidad:** Lighthouse en el PC de Danny dio lo mismo antes y después (83 en vivo antes, 81 en local sin compresión); el cambio no agrega descargas.

## 18. Dominio propio: nodrasoft.com (2026-10-21)
- **Qué:** la dirección de la empresa es `nodrasoft.com` (página) y será `agenda.nodrasoft.com` (NODRA Agenda). La marca sigue siendo solo "NODRA".
- **Por qué este nombre:** `nodra.co` estaba registrado desde 2024 y también `nodra.com`, `.app`, `.net`, `.dev`, `.tech`, `.org` y `getnodra.com`. Un `.com` es lo que más confianza da fuera de Colombia, y "soft" dice que hacemos software. Se descartó `.lat` (1,80 USD el primer año pero 40,98 al renovar).
- **Por qué Namecheap:** precio de renovación claro (14,98 USD/año), privacidad WHOIS gratis y sin obligar a comprar hosting. El alojamiento y el HTTPS los sigue dando Firebase gratis.
- **Por qué antes de Play Store:** la app Android (TWA) queda amarrada al dominio; si se publicaba con `.web.app` habría que rehacerla al cambiar.
- **A nombre de Danny como persona:** NODRA aún no está registrada como empresa; se cambia el titular cuando lo esté.

## 19. La dirección oficial para Google es nodrasoft.com (2026-10-22)
- **Qué:** la etiqueta canónica, el sitemap y la ficha para Google apuntan a `nodrasoft.com`. `nexus-tech-co.web.app` no se apaga ni se redirige.
- **Por qué:** la etiqueta canónica le dice a Google cuál de las dos direcciones mostrar; así Google pasa sola la página a la nueva sin perder lo ganado y sin romper enlaces viejos ya compartidos.

## 20. H1 con ciudad y redes en la ficha para Google (2026-10-24)
- **Qué:** el H1 cambió de "Apps para tu negocio, hechas a la medida." a "Apps a la medida para negocios en Ibagué.";
  la ficha Schema tiene `sameAs` (Facebook y TikTok @nexus.tech.co) y `areaServed` Ibagué + Tolima.
- **Por qué:** Google mira el H1 para saber qué es la página; debe decir qué, a quién y dónde (videos de @gu.ferrey y
  @oscarcontreras.seo). La búsqueda "apps en Ibagué" tiene poca competencia; "apps" a secas la ganan agencias grandes.
  `sameAs` confirma que la página y las redes son la misma empresa.
- **Decisión de enfoque:** el SEO de software a la medida se concentra en Ibagué y el Tolima por ahora.
- **Pendiente:** agregar Instagram a `sameAs` cuando NODRA tenga cuenta propia.

## 21. Ficha para Google en un @graph y arreglos de la auditoría SEO (2026-10-24)
- **Qué:** `datosEstructurados()` devuelve un `@graph` con WebSite, WebPage, ProfessionalService, Person (fundador) y
  FAQPage unidos por `@id`. Se quitó la precarga manual del escudo y se ajustaron metas de `/privacidad`.
- **Por qué:** lo pidió la auditoría `claude-seo-ai` (24-oct). El nodo WebSite le dice a Google el nombre del sitio
  (útil tras el cambio NEXUS → NODRA). La precarga manual bajaba siempre la imagen de 560 px aunque la pantalla
  pidiera la de 960 px (dos descargas compitiendo).
- **Qué no se puso a propósito:** precios en las ofertas, coordenadas y dirección exacta (NODRA no tiene local
  público); `sameAs` del fundador hasta tener un perfil profesional confirmado.

## 22. Sección "Quién está detrás de NODRA" en la portada (2026-10-24)
- **Qué:** una sección corta con el nombre, la formación real y la forma de trabajar de Danny, en vez de una página
  `/nosotros` aparte.
- **Por qué:** la auditoría SEO encontró que el nombre del fundador solo estaba escondido en la ficha para Google.
  Google y las IA confían más cuando se ve quién responde. En la portada se ve de inmediato y no hay que crear ruta nueva.
- **Reglas:** solo datos verdaderos; "estudio Ingeniería", nunca "ingeniero", hasta tener el título; la Policía no se
  menciona en público (decisión de Danny).

## 23. Página "App de citas en Ibagué" (2026-10-24)
- **Qué:** una página por servicio, empezando por la app de citas, en `/app-de-citas-ibague`.
- **Por qué:** con una sola página, la portada compite por todas las búsquedas a la vez (auditoría SEO, punto M10).
  "App de citas Ibagué" es una búsqueda larga y local, con poca competencia (videos de SEO de @gu.ferrey y
  @oscarcontreras.seo). Lleva a NODRA Agenda, el producto que ya está listo para vender.
- **Reglas:** precios iguales a `nexus-agenda/src/lib/planes.ts` (si cambian allá, cambiar `planesCitas`); solo se
  promete lo que Agenda hace hoy; poco texto a la vista (tabla, listas y preguntas plegadas, pedido de Danny).
- **Siguiente:** más páginas por sector (salones, consultorios, veterinarias) cada una con contenido propio, no copias.

## 24. Correo de contacto por reenvío, no buzón pagado (2026-10-24)
- **Qué:** `contacto@nodrasoft.com` es un reenvío gratis de Namecheap hacia avisos.nexusagenda@gmail.com.
- **Por qué:** la auditoría SEO marcó "solo WhatsApp de contacto"; un correo con el dominio da confianza y la ley de
  datos (Ley 1581) pide un canal claro para reclamos. El reenvío cuesta $0 y no hay otro buzón que revisar.
- **Límite:** solo recibe. Si algún día hace falta responder *como* contacto@, configurar en Gmail "Enviar como" con
  un SMTP o comprar el correo privado de Namecheap.
