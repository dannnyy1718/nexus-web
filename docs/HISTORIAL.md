# Historial: página de NEXUS

Qué se hizo cada día, en palabras sencillas. Lo más nuevo arriba.

## 2026-10-28 (noche): portada más cálida y ordenada como empresa de software (crítica de diseño)
- Crítica con la skill impeccable: 26/40. Faltaba gente real, todo se veía "de hackers" y las ofertas estaban revueltas.
- El inicio ahora muestra trabajo real: dos celulares (app de Johana y NODRA Agenda) a los lados del escudo, solo en
  computador. El texto del inicio nombra lo que hacemos sin "panel" ni "multiplataforma".
- Nuevo orden: Qué hacemos → **Nuestros productos** (NODRA Agenda como el primero) → Un proyecto real (Johana) →
  **Quién está detrás**, que sube y lleva la **foto real de Danny** (recortada para quitar el carnet de la Policía)
  junto al botón de WhatsApp. El mapa del mundo se queda (decisión de Danny).
- Seguridad en palabras sencillas: "Solo tú ves los datos de tus clientes." Se quitaron la imagen del candado, el
  enlace a OWASP (pasó a "Mi formación") y el anuncio de Cloud Security.
- Cierre nuevo: "Cuéntanos cómo funciona tu negocio hoy", con la foto de Danny en vez del escudo borroso.
- Preguntas nuevas: "¿Mis clientes tienen que descargar algo?" y "¿Cuánto cuesta una app?" (sin cifras inventadas).
- Mensaje de WhatsApp más natural: "tengo un negocio y quiero saber qué app me sirve".
- Menos neón: los puntos de la línea del circuito ya no brillan; el brillo queda en el logo, el escudo y los botones.
- Revisado en local en PC (1440 px) y celular (390 px): sin errores en consola y sin desplazamiento de lado.
  Falta publicar (con el OK de Danny) y medir PageSpeed en vivo.

## 2026-10-25: frase del plan Gratis más clara
- En `/app-de-citas-ibague`, el plan Gratis ahora dice "Para empezar: tu agenda recibe hasta 20 citas al mes."
  Antes decía "hasta 20 citas al mes" y se podía entender como "20 citas gratis" (servicios regalados a los clientes).
  Misma frase que el volante de diciembre y el WhatsApp Business.
- Publicado y verificado en vivo (nodrasoft.com y nexus-tech-co.web.app): la frase nueva aparece, la vieja ya no, y los encabezados de seguridad siguen activos.

## 2026-10-24 (noche): página de términos y condiciones (/terminos)
- Nueva página `/terminos` (`src/Terminos.tsx` + `terminos.html`), con el mismo diseño del aviso de privacidad:
  cómo se contrata (propuesta por escrito; "acepto" por WhatsApp o el anticipo valen como firma), pago 50/50,
  garantía de 6 meses (qué cubre y qué no), de quién es la app, datos de los clientes (NODRA como encargado),
  límite de responsabilidad, sin retracto en apps a la medida, enlace a los términos de NODRA Agenda y cómo
  resolver un desacuerdo (hablar → conciliación en Ibagué → jueces).
- Enlace "Términos y condiciones" en el pie de todas las páginas; agregada a `sitemap.xml` y `llms.txt`.
- Resume la plantilla que va en cada cotización (`2 Clientes/TERMINOS-COTIZACIONES.md`). Se basó en videos de un
  abogado de emprendedores; **falta revisión de un abogado**.
- **Publicada por Danny** (`deploy --only hosting`) y **verificada en vivo**: `/terminos` responde 200 con su título,
  canonical y encabezados de seguridad (CSP, HSTS); el pie de la portada la enlaza; está en `sitemap.xml` y `llms.txt`.
- Pendiente: pedir indexación de `https://nodrasoft.com/terminos` en Search Console (README, "Después de publicar").

## 2026-10-24 (noche): correo contacto@nodrasoft.com
- Creado en Namecheap (Lista de dominios → nodrasoft.com → Redirigir correo electrónico): `contacto` reenvía a
  avisos.nexusagenda@gmail.com. Danny lo probó y llegó.
- Se ve en el pie de todas las páginas, en el cierre de la portada y en el aviso de privacidad (responsable y cómo
  ejercer los derechos; vigencia actualizada al 24 de octubre). También va en la ficha para Google (`email`) y en `llms.txt`.
- Dato en `src/Marco.tsx` (`CORREO`).

## 2026-10-24 (noche): horario de atención
- Horario igual al del Perfil de Empresa en Google: lunes a sábado 8 a. m.-8 p. m. y domingos 9 a. m.-5 p. m.
  Se ve en el pie de todas las páginas y va a la ficha para Google (`openingHoursSpecification`).
- Datos en `src/Marco.tsx` (`HORARIO_VISIBLE` y `HORARIO`): si cambia, cambiarlo también en el Perfil de Empresa.

## 2026-10-24 (noche): página "App de citas en Ibagué"
- Danny pidió la indexación en Search Console de la página nueva y de la portada (guía en el README).
- Nueva página `/app-de-citas-ibague` que lleva a NODRA Agenda: cómo funciona, qué incluye, para qué negocios,
  tabla de precios reales (Gratis, $20.000 y $50.000 al mes) con sus condiciones al lado, preguntas plegadas y botón.
- La palabra clave va en la dirección, el H1, el título, la descripción, el primer párrafo y un H2.
- Ficha para Google propia: página con migas (Inicio > App de citas), servicio con sus 3 planes en COP y preguntas.
- En la portada, la sección de NODRA Agenda enlaza a la página ("Ver precios y cómo funciona"). Sitemap actualizado.
- `AGENDA_URL` pasó a `Marco.tsx` para usarlo en las dos páginas.

## 2026-10-24 (noche): sección "Quién está detrás de NODRA"
- Nueva sección en la portada (antes de las preguntas): Danny, su formación (SENA y Politécnico Grancolombiano),
  cómo trabaja y el cambio de NEXUS a NODRA. Texto aprobado por Danny; sin la Policía y sin foto, por decisión suya.
- "NODRA nace de la ingeniería en ciberseguridad" pasó a "formación" (portada y preguntas), y `llms.txt` ya no dice
  "ingeniero": Danny todavía estudia la ingeniería (textos honestos, regla 8.6).
- Por pedido de Danny ("se mira mucho texto") solo la primera frase queda a la vista; la formación y cómo trabaja van en
  un desplegable "Mi formación y cómo trabajo", igual al de las preguntas frecuentes.

## 2026-10-24 (tarde): arreglos de la auditoría SEO
- Auditoría con `claude-seo-ai` (punto de partida: SEO 71 C, IA 75 C). Informe en la carpeta de datos del plugin.
- Ficha para Google en un solo bloque conectado (`@graph`): sitio (WebSite "NODRA"), página, negocio, fundador y preguntas.
- `/privacidad` tiene su propia tarjeta al compartir (antes salía la de la portada) y un título más largo.
- Etiqueta `twitter:card` en las dos páginas y descripción de la portada más corta (155 caracteres).
- "NODRA Agenda" ya no se lee "NODRA AgendaDisponible": la etiqueta quedó fuera del subtítulo.
- Se quitó la precarga repetida del escudo en `index.html` (React ya la pone con el tamaño correcto).

## 2026-10-24: SEO local, primeros pasos del plan
- El título grande (H1) ahora dice "Apps a la medida para negocios en Ibagué." (qué hacemos, para quién y dónde).
- La ficha para Google (`src/negocio.ts`) enlaza Facebook y TikTok de NODRA (`sameAs`) y suma el Tolima como zona.
- El plan completo está en `3 Marketing/Planes y guiones/2026-10-24-plan-SEO-NODRA.md`.

## 2026-10-22: la página ya se presenta como nodrasoft.com
- Candado HTTPS listo en `nodrasoft.com` y `www.nodrasoft.com` (este redirige al primero).
- Se cambió `nexus-tech-co.web.app` por `nodrasoft.com` en la etiqueta canónica, Open Graph, sitemap, robots, `llms.txt`
  y la ficha para Google (`src/negocio.ts`). El botón de NODRA Agenda ahora lleva a `agenda.nodrasoft.com`.
- `nexus-tech-co.web.app` sigue abriendo igual.
- **Search Console:** propiedad tipo **Dominio** `nodrasoft.com`, verificada con un registro TXT `google-site-verification=…` en Namecheap (**no borrarlo**; convive con el TXT de Firebase). Cubre también `www` y `agenda`. Sitemaps enviados: `nodrasoft.com/sitemap.xml` (2 páginas) y `agenda.nodrasoft.com/sitemap.xml` (4), ambos "Correcto".

## 2026-10-21 (noche): dominio propio nodrasoft.com
- **Se compró `nodrasoft.com`** en Namecheap (6,68 USD el primer año con cupón; renueva a 14,98 USD/año con renovación automática). `nodra.co` ya tenía dueño. Cuenta de Namecheap con privacidad WHOIS gratis y verificación en 2 pasos (Google Authenticator). Ver `DECISIONES.md` n.º 18.
- **Conectado a Firebase Hosting** (proyecto `nexus-tech-co`): en Namecheap se borraron los dos registros de "página en construcción" y se agregaron A `@` → `199.36.158.100` y TXT `@` → `hosting-site=nexus-tech-co`. `www.nodrasoft.com` redirige a `nodrasoft.com` (CNAME `www` → `nexus-tech-co.web.app`).
- La primera verificación de Firebase falló porque todavía veía la dirección vieja de Namecheap (caché DNS de 30 min). El candado HTTPS lo crea Firebase solo; puede tardar unas horas.
- Falta: confirmar el correo de verificación de Namecheap (ICANN, 15 días) y, cuando el dominio esté "Conectado", cambiar enlaces, sitemap y la etiqueta canónica a `nodrasoft.com`.

## 2026-10-21
- **Zoom con los dedos en celular** (Danny no podía hacer zoom): el escudo del inicio y el mapa tenían `touch-action: pan-y`, que solo deja mover la página arriba y abajo; como el escudo ocupa casi toda la primera pantalla, pellizcar no hacía nada. Ahora es `pan-y pinch-zoom` en `src/index.css`.
- **Parte de abajo centrada en celular** (pedido de Danny, "se mira feo"): el llamado final ("¿Tienes una idea para tu negocio?", botón y número) y el pie (logo, aviso de privacidad, ©) van centrados en celular y tableta. En computador siguen igual (llamado a la izquierda con el escudo, pie en una fila). Publicado y verificado en vivo (commit 6b164f3): zoom permitido en escudo y mapa, final y pie centrados en celular, encabezados de seguridad activos.
- **Menos texto, más para ver y tocar** (pedido de Danny, skill `impeccable`): ejemplos que se pueden tocar en "Qué hacemos", celular de Johana que se desliza, pasos que se encienden al bajar, preguntas que se abren al tocarlas, textos más cortos y escudo más pequeño en celular. Ver `DECISIONES.md` n.º 17. También se arregló el error del mapa en la consola (lienzo de 0 px). Probado en local a 390 y 1366 px, sin barra horizontal, detector de diseño sin problemas, accesibilidad 100 en Lighthouse. Publicado y verificado en vivo (commit 2e29cd0): 3 ejemplos funcionando, celular con 4 pantallas, 5 preguntas plegables, pasos encendidos, zoom permitido, 0 errores en la consola y encabezados de seguridad activos. PageSpeed no se pudo medir ese día (la API de Google llegó a su límite diario).
- Auditoría corta: ~760 palabras y más de 10 pantallas en celular, partes sin imágenes y textos repetidos. Pendiente con Danny: preguntas que se abren al tocarlas, imágenes por servicio, pasos más cortos, escudo más pequeño en celular y quitar lo repetido. También pendiente: error en consola del mapa (`drawImage` con lienzo de tamaño 0 al cambiar de tamaño).

## 2026-10-17
- **Garantía explicada con claridad:** antes solo decía "Incluye 6 meses de garantía". Ahora la pregunta frecuente (y la ficha para Google, que sale de ahí) dice que se corrige sin costo cualquier falla en las funciones acordadas, y que lo nuevo se cotiza aparte. El paso "La entregamos" dice "garantía sobre lo acordado" y `llms.txt` tiene la versión completa. Es la garantía estándar de NODRA (`Cotizaciones/GARANTIA-ESTANDAR.md`). Publicado y verificado en vivo: texto nuevo en la página y en `llms.txt`, encabezados de seguridad activos.

## 2026-10-14
- **Imagen para compartir con el logo nuevo de Gemini:** `public/og.jpg` ahora es un recorte de `NODRA-principal.jpg` (escudo, luz, mundo y la palabra NODRA), 1200×630, 104 KB. Reemplaza la armada a mano más temprano.
- **La marca cambió de NEXUS a NODRA** (decisión de Danny). La Fuerza Aérea Colombiana pidió "NEXUS" en la SIC para software (expediente SD2025/0096428), así que seguir con ese nombre era un riesgo. Se cambiaron todos los textos visibles (encabezado, pie, preguntas, privacidad, títulos, ficha para Google, llms.txt, mensaje de WhatsApp) y la imagen para compartir (`public/og.jpg`, mismo escudo con "NODRA"). Las direcciones (nexus-tech-co.web.app y el enlace a nexus-agenda-co.web.app) siguen iguales hasta comprar el dominio nodra.co. La captura `agenda-portada.webp` ya muestra "NODRA Agenda" (480×860, 40 KB). Publicado por Danny y verificado en vivo: 0 "NEXUS" en inicio y privacidad, imagen nueva 200 OK, WhatsApp dice "Hola NODRA", encabezados de seguridad activos.
- **Preguntas frecuentes pulidas** (skill `impeccable`, pedido de Danny): debajo del título quedaba un hueco vacío. Ahora el título lleva "¿Tu pregunta no está aquí?" con el enlace "Preguntar por WhatsApp", se queda fijo al bajar en computador (sticky), cada pregunta tiene una línea arriba (como "Cómo trabajamos") y la columna del título es más angosta para que las respuestas tengan más espacio. Probado a 1920 y 375 px; detector de diseño sin problemas. Publicado por Danny y verificado en vivo (ancho 1472 px, título fijo, enlace a WhatsApp, encabezados de seguridad activos).
- **La página ahora usa todo el ancho en pantallas grandes** (pedido de Danny con captura a 1920 px): antes el contenido tenía un tope de 1152 px y quedaban franjas vacías a los lados. Ahora el tope es 1472 px (`max-w-[92rem]`) en encabezado, contenido y pie, y desde 1536 px el contenido se reparte mejor: título y escudo más grandes, celulares de Johana y Agenda más grandes, Seguridad con columna más ancha y Preguntas frecuentes en dos columnas. En celular y portátil no cambia nada. Probado en local a 375, 1366 y 1920 px, sin barra horizontal.
- **Revisión de diseño con la skill `impeccable`** (crítica guardada en `.impeccable/critique/`): 22/32, "aceptable". El contraste de los textos está bien (8.83:1 el más bajo); los problemas eran de orden y de un dato viejo.
- **NEXUS Agenda ya dice "Disponible"**: antes decía "Próximamente" y "Avísame cuando salga", aunque está publicada desde el 10 de octubre. Ahora tiene el botón "Crear mi agenda gratis", que abre nexus-agenda-co.web.app, y al lado una captura de su portada (`public/img/agenda-portada.webp`, 41 KB, sin datos de clientes).
- **Cloud Security** salió de "Qué hacemos" (era una tarjeta suelta que decía "Próximamente") y quedó como una línea en "Seguridad": "Próximo servicio".
- **Menos espacio vacío en computador:** "Seguridad" y "Preguntas frecuentes" en dos columnas (título a la izquierda), y el escudo acompaña el llamado final.
- **Pedido de Danny: menos texto y botones que resalten.** "Cómo trabajamos" tiene un dibujo por paso (SVG, no pesa) y los botones principales (WhatsApp y Agenda) tienen volumen 3D: luz arriba, sombra de color y suben al pasar el mouse.
- **Imagen de Seguridad** hecha por Danny con Gemini (escudo y candado sobre la nube): pasó de 2 MB a `seguridad-400.webp` (22 KB, celular) y `seguridad-720.webp` (48 KB, computador), con los bordes desvanecidos para que se funda con el fondo.
- Probado en local en computador y celular: nada se sale de la pantalla y el detector de diseño no encontró problemas. Publicado por Danny y verificado en vivo (textos nuevos, imágenes 200 OK, encabezados de seguridad activos).

- **Caché de la página:** Danny no veía la imagen nueva porque el navegador guardaba la página 1 hora. Ahora `firebase.json` le pide al navegador revisar en cada visita si hay versión nueva (`no-cache`). Publicado por Danny y verificado en vivo.

- **Texto de Agenda corregido** (aclaración de Danny): decía "Lo que hicimos para Johana…", pero NEXUS Agenda es un emprendimiento propio de NEXUS. Ahora dice "La app de citas propia de NEXUS, lista para cualquier negocio que trabaje con citas…".

## 2026-10-10
- **Escudo 3D en la portada** (`src/Escudo3D.tsx`): el escudo se inclina siguiendo el mouse o el dedo, un brillo recorre su superficie y seis nodos cian y verde le giran alrededor por un anillo de luz. Si nadie lo mueve, flota solo. Idea sacada de un video de TikTok; Danny pidió ponerlo solo en esta página y no en NEXUS Agenda, para que agendar siga siendo rápido.
- **Mapa en el celular:** ahora muestra el mundo completo. Antes se acercaba a América y Danny notó que así no se veía "abierta al mundo".
- Lighthouse local igual antes y después (81 en el servidor de prueba, que no comprime los archivos): el efecto no le quita velocidad.
- Publicado y verificado en vivo: escudo 3D presente, encabezados de seguridad activos, Lighthouse celular 94 / accesibilidad 100 / buenas prácticas 100 / SEO 100. Ojo al medir desde el PC de Danny: Kaspersky mete un script de 172 KB en cada página y baja la nota a ~85; medir con `--blocked-url-patterns="*kaspersky-labs.com*"` o con PageSpeed Insights.

## 2026-10-09 (tarde): la página deja de verse plana
- Mapa mundial interactivo: Ibagué en el centro y conexiones que viajan a todo el mundo. Los puntos se encienden con el mouse y al tocar el mapa sale una conexión hasta ese lugar.
- El celular de la clienta en la sección de Johana ahora pasa solo por tres pantallas (inicio, agendar y galería), con botón de pausa.
- Botón "Ver la app en vivo" que abre los servicios reales de Johana.
- Nueva sección "NEXUS Agenda: Próximamente", con un enlace para que avisen por WhatsApp.
- Enlaces nuevos: "Mira un ejemplo real" (de Citas y reservas a Johana) y "OWASP Top 10" (a la página oficial).

## 2026-10-09
- Auditoría completa (seguridad, accesibilidad y textos). Seguridad sin problemas: encabezados activos, sin secretos en GitHub, 0 vulnerabilidades.
- Los enlaces dentro de los textos ahora siempre están subrayados, y el botón "Escríbenos" tiene un borde visible.
- Textos más concretos: la frase principal dice qué hacen tus clientes con la app; se cambió "altos estándares de seguridad" por "reglas de acceso estrictas y conexión cifrada" y "servidor propio" por "espacio propio en la nube".
- Se arregló la protección de la ficha para Google en `scripts/prerender.mjs` (la barra invertida no estaba haciendo nada).
- Se creó esta carpeta `docs/` (manual de reparación, decisiones e historial).
- Publicado y verificado en vivo: los 8 encabezados de seguridad activos y los textos nuevos visibles.

## 2026-10-08
- El README ganó la guía de cambios comunes y cómo publicar.

## 2026-10-07
- Etiqueta de verificación de Google Search Console.

## 2026-10-06
- Se creó y publicó la página en nexus-tech-co.web.app.
- Capturas de la app de Johana, aviso de privacidad (sin cookies), lema "Tu negocio, conectado y seguro.", servicio de apps con inteligencia artificial y SEO local en Ibagué.
