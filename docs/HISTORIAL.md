# Historial: página de NEXUS

Qué se hizo cada día, en palabras sencillas. Lo más nuevo arriba.

## 2026-10-24: SEO local, primeros pasos del plan
- El título grande (H1) ahora dice "Apps a la medida para negocios en Ibagué." (qué hacemos, para quién y dónde).
- La ficha para Google (`src/negocio.ts`) enlaza la página de Facebook de NODRA (`sameAs`) y suma el Tolima como zona.
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
