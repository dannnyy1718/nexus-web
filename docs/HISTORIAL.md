# Historial: página de NEXUS

Qué se hizo cada día, en palabras sencillas. Lo más nuevo arriba.

## PENDIENTES PARA OPUS: acortar la portada en celular (opinión de Fable, 2026-11-12 noche)
Estudio de base: `Empresa NEXUS/4 Estudios/2026-11-12-estudio-taste-paginas-exitosas.md`. Datos: la portada mide 13,7
pantallas en celular (Servicios 2,5 · Precios 1,7 · Johana 1,6 · Agenda 1,4).

**Opinión de Fable (resumen):**
- Los números del estudio están bien, con 2 salvedades: (a) Piemse sale arriba en Google por antigüedad y reseñas, no
  por ser corta: acortar NO va a subir a NODRA en Google; (b) no hay ningún dato de que el largo esté haciendo perder
  clientes (el contador muestra pocas visitas, no gente que se va). El menú y el botón fijo de WhatsApp de hoy ya
  resuelven lo principal ("saber qué hay" y "escribir desde cualquier parte"). Acortar es pulir, no es urgente.
- Meta razonable: ~11 pantallas en celular. Bajar más obligaría a quitar cosas que venden.
- De los 8 cambios del estudio: **SÍ** el 1 (pestañas, solo en celular y con ajustes), el 2 (unir Cómo hacemos +
  Seguridad) y el 6 (pregunta "¿es para mi negocio?", si Danny da el texto). **NO por ahora:** el 3 (✓ en la primera
  pantalla: no acorta y toca el resumen que se puso para Google y las IA, decisión 34), el 4 (cifra "14 negocios": es
  pequeña, 9 de 14 están en 0 citas y puede incluir cuentas propias o de prueba; esperar a ~50 con citas), el 5 (texto
  en el botón fijo: se publicó hoy, primero medir `web-fijo` un mes; a 360 px taparía contenido) y el 8 (mapa: ahorra
  0,2, no vale el riesgo). El 7 (más trabajos reales) es el que más pesa y depende de CORISOC.
- **Agregado por Fable:** en celular, esconder la lista de 4 puntos del caso de Johana (paso 3): se puso el 2-nov para
  llenar el vacío en computador, y en celular repite lo que ya muestra el celular deslizable.
- **Considerado y descartado:** recortar la sección de Precios. Es lo que decide la compra y lo que citan las IA.
- Pestañas y público de 30 a 70: sirven SI los 4 nombres están siempre a la vista como botones grandes (así, por
  primera vez, se ven los 4 servicios sin bajar 2,5 pantallas). Nada de deslizar ni de íconos solos.

**Pasos (en orden; en cada uno: `npm run build`, revisar a 360x740 y 1366x768, y docs en el mismo commit):**

1. **Servicios con botones para elegir, solo en celular.** Archivo `src/App.tsx`, sección `#servicios` (la lista
   `servicios.map`). Sacar la lista a un componente con estado `elegido` (empieza en 0 = Páginas web).
   - Encima de la lista, 4 botones en cuadrícula de 2x2, visibles solo en celular (`md:hidden`): "Páginas web",
     "Tiendas", "Citas", "Asistente IA". Cada uno `<button type="button" aria-pressed>` de 48 px de alto mínimo; el
     elegido con borde y texto cian y además un ✓ (que no dependa solo del color).
   - Cada `<li>` no elegido lleva `max-md:hidden`. Desde `md` se ven los 4 como hoy (la cuadrícula actual NO cambia).
   - Los 4 textos y enlaces siguen en el HTML pre-armado (se esconden con clase, no se dejan de pintar).
   - Sin estilos en línea (CSP). Sin animación al cambiar.
   - **Verificar:** a 360 px la sección mide ≤ ~1,1 pantallas; al tocar cada botón cambia el ejemplo y la página no
     salta; funciona con teclado (Tab + Enter/Espacio); "Tiendas en línea" y los enlaces "qué incluyen" están en
     `dist/index.html`; a 1366 px se ve igual que antes; el enlace "Mira un ejemplo real" sigue bajando a Johana.
2. **Unir "Cómo hacemos" y "Seguridad".** `src/App.tsx`: borrar la `<section>` "Apps seguras desde el primer día" y
   poner su contenido dentro de la sección "Cómo hacemos tu página web o app", debajo de `<Pasos />`: un `<h3>` "Segura
   desde el primer día" + la lista `seguridad` (los mismos 3 textos y el mismo ícono), en 3 columnas en computador.
   - **Verificar:** no queda un nodo huérfano en la línea del circuito (se va el `nodo nodo-verde` de la sección
     borrada); un solo H2 para las dos; a 360 px el conjunto mide ≤ ~1 pantalla.
3. **Caso de Johana más corto en celular.** `src/App.tsx`, sección `#johana`: en la lista `<ul>` de 4 puntos cambiar
   `grid` por `hidden lg:grid`. Nada más.
   - **Verificar:** a 360 px no sale la lista; a 1366 px se ve igual que hoy.
4. **(Solo con texto aprobado por Danny)** Pregunta nueva en `preguntas` de `src/negocio.ts`: "¿NODRA es para mi
   negocio?", respuesta de 2 frases: para quién sí y para quién no. El "para quién no" lo dice Danny (propuesta: "No,
   si necesitas la página para mañana o buscas la opción más barata del mercado").
5. **Al terminar 1-3:** medir el largo en celular a 390x844 (meta ~11 pantallas; anotar aquí el número real),
   Lighthouse celular ≥ 90 con `--blocked-url-patterns="*kaspersky-labs.com*"`, cambiar `ACTUALIZADA.inicio` en
   `negocio.ts` y el `<lastmod>` de la portada en `public/sitemap.xml` a la fecha del día (decisión 38), escribir la
   decisión 41 en `DECISIONES.md`, commit + push. **Publicar solo con el OK de Danny** y verificar en vivo.
6. **Un mes después (~12-dic):** contar los WhatsApp por canal (`docs/MEDIR.md`). Si `web-fijo` trae contactos, ahí sí
   probar el botón fijo con texto (cambio 5 del estudio).

**HECHO por Opus el 2026-11-12 (noche), SIN PUBLICAR:** pasos 1, 2 y 3. Medido a 390x844: la portada pasó de 13,7 a
**11,8 pantallas** (Servicios 2,5 → 1,0; Johana 1,6 → 1,3; Cómo hacemos + Seguridad 1,4 → 1,3). Los botones miden 48 px,
cambian el ejemplo sin mover la página, y los 4 servicios siguen en `dist/index.html`. En computador se ve igual
(4 ejemplos, lista de Johana). Lighthouse celular local 100/100/77 (http local)/100, CLS 0. La fecha de la portada ya
era 2026-11-12 (mismo día), no hubo que cambiarla. Decisión 41. **PUBLICADO** el mismo día con el OK de Danny ("publica
la portada más corta") y verificado en vivo a 390x844: 11,8 pantallas, los botones cambian el ejemplo, sin desborde.
**Faltan:** paso 4 (texto de Danny) y el paso 6 (~12-dic).

**Si algo se complica** (los botones hacen saltar la página, baja Lighthouse o el HTML pre-armado deja de traer los 4
servicios): parar y avisarle a Danny para volver a Fable. No improvisar.

## 2026-11-12 (noche, 5): menú publicado
- Publicado y verificado en vivo en nodrasoft.com: en celular abre los 7 enlaces, se cierra al elegir y sin desborde.

## 2026-11-12 (noche, 4): menú arriba
- **Por qué:** Danny (con captura): quien llega no sabe qué más hay en la página, y la portada crece para mostrarlo
  todo. Con un menú, la gente va directo a lo que busca.
- **Qué:** en computador, menú siempre a la vista: Servicios (despliega Páginas web, Tiendas virtuales, App de citas y
  la Guía de precios), Precios, Trabajo real y Quiénes somos. En celular y tableta, botón "Menú" que abre la misma
  lista en letra grande; el botón de WhatsApp de arriba queda solo con el ícono para que quepa. Sale en todas las páginas.
- **Revisado:** 320, 360 y 1366 px sin desborde; se cierra al elegir, al tocar fuera y con Escape; contraste 7,8 a
  13,8:1; botones de 44 px o más. Ver DECISIONES.md 40.

## 2026-11-12 (noche, 3): "NodraSoft" como otro nombre de la empresa
- **Por qué:** Danny buscó "nodrasoft" en incógnito y no salíamos; con "nodrasoft Ibagué" sí. Google no sabía que el
  dominio y la marca NODRA son la misma empresa, y hay otras "Nodra" (una S.A.S. en Bogotá, un Instagram nodra.tech).
- **Qué:** `alternateName` ("NodraSoft", "nodrasoft.com") en la ficha de la empresa y del sitio (`OTROS_NOMBRES` en
  `negocio.ts`) y en la primera línea de `llms.txt`. No cambia nada visible ni la velocidad. Ver DECISIONES.md 39.
- **Lo que más ayuda y no depende del código:** verificar el Perfil de Google (19-nov) y los directorios con el mismo
  nombre y web. Lo normal es que Google tarde 1 a 3 meses en reconocer una marca nueva.

## 2026-11-12 (noche, 2): cambios de la auditoría SEO + GEO + visual
- **Por qué:** auditoría de las 7 páginas del 12-nov (nada grave, solo ajustes). Danny pidió aplicar lo sugerido.
- **Botón de WhatsApp fijo en celular:** un botón redondo abajo a la derecha, en todas las páginas. Aparece al bajar
  (arriba ya está el botón grande). Abre WhatsApp con un mensaje propio (anotar como `web-fijo`, ver MEDIR.md).
- **Fechas:** la portada y las 3 páginas de servicio dicen "Página actualizada el…" al final; la misma fecha va en la
  ficha para Google (`dateModified`) y en `sitemap.xml`, que ahora trae fecha en las 7 direcciones.
- **Enlaces entre páginas:** portada → guía de precios (en la sección de precios); app de citas → páginas web y tienda
  virtual; tienda virtual → guía de precios.
- **Descripción de "App de citas":** de 177 a 155 letras, para que Google no la corte.
- **Pie de página:** letra más grande en celular (16 px), cada enlace en su renglón y con más alto para el dedo.
- **"Páginas web" ya no arranca con puro texto:** al lado del título va la captura real de la app de Johana.
- **Medido en local (celular):** Lighthouse 99 rendimiento, 100 accesibilidad, 100 SEO; sin desborde a 360 px.
- **No se hizo, y por qué:** TikTok sigue como `@nexus.tech.co` en la ficha hasta que Danny renombre la cuenta;
  el segundo trabajo real espera a CORISOC; los celulares en la primera pantalla del celular no caben sin sacar el
  botón de WhatsApp de esa pantalla (decisión 34); el mapa se queda (decisión de Danny del 28-oct).
- Ver DECISIONES.md 38.
- **Publicado y verificado en vivo el 12-nov (~8:15 p. m.):** las 7 páginas responden 200 y traen el botón fijo; fecha
  visible y `dateModified` en las 4 páginas; sitemap con 7 fechas; descripción nueva; enlaces nuevos; encabezados de
  seguridad activos. **Velocidad en vivo SIN medir:** Lighthouse falló en este PC (NO_NAVSTART) y PageSpeed sin cupo;
  medir en pagespeed.web.dev (en local dio 99).

## 2026-11-12 (noche): guía "¿Cuánto cuesta una página web en Ibagué?"
- **Por qué:** Danny notó que la página no sale en Google. Revisado en vivo: Google sí tiene 9 páginas de
  nodrasoft.com y con "NODRA Ibagué" salimos de primeros, pero con "páginas web Ibagué" no aparecemos: arriba van
  Maps, agencias que publican precios y un artículo de ranking.
- **Qué:** página nueva `/cuanto-cuesta-una-pagina-web-ibague` con los precios que publican 5 agencias de Ibagué
  (de $389.000 a $1.600.000, más la opción gratis de la Alcaldía con Kolau), qué se paga aparte, por qué cambia el
  precio, cuál sirve a cada negocio y cuánto cobra NODRA. Autor y fecha visibles. Enlace en el pie de todas las páginas
  y en el precio de `/paginas-web-ibague`. Ver DECISIONES.md 37.
- Ese mismo día se pidió en Search Console que Google vuelva a leer `/app-de-citas-ibague` (aún mostraba "20 citas al mes").
- Probado en local (390 y 1366 px, sin desbordes, ~435 palabras). Lighthouse celular local: rendimiento 96,
  accesibilidad 100, SEO 100 (buenas prácticas 82 solo por ser http en local). **Sin publicar** hasta el OK de Danny.
- Danny pidió una línea bajo la escalera: si la página recibe pagos o donaciones, o tiene panel para publicar, ya es
  tienda o app ($1.800.000 a $3.500.000). Así nadie compara un proyecto como CORISOC con los planes sencillos.
- **Publicada y verificada en vivo el mismo día** (Danny: "agrega esa línea y publica la guía"): las 7 direcciones dan
  200, la ficha Article y la línea nueva están en el HTML, el pie y /paginas-web-ibague enlazan la guía y siguen los
  encabezados de seguridad. Lighthouse celular en vivo: 96/100/100/100, LCP 2,3 s, CLS 0. Indexación solicitada en
  Search Console. Search Console (3 meses): 14 clics y 35 impresiones en total.

## 2026-11-12: `/app-de-citas-ibague` deja de ser puro texto
- **Por qué:** video de TikTok "Tu web no es una Biblia" (con puro texto nadie pasa de la 3.ª sección). Al contar
  palabras e imágenes por sección, esta era la única página con 4 secciones seguidas sin nada para ver, y no mostraba
  la app en ningún lado. Las de páginas web y tienda ya tenían su ejemplo tocable en la 2.ª sección.
- **Qué:** 1) junto al título, la captura de la portada de NODRA Agenda (la misma de la portada, 40 KB);
  2) en "Cómo funciona", un ejemplo por paso, hecho con HTML y CSS (0 KB): la página de "Estudio Luna" (inventado),
  el enlace compartido por WhatsApp y el panel con un botón "Confirmar" que se puede tocar (`src/Demos.tsx`).
  No se borró texto: ayuda a salir en Google.
- **Arreglo:** la pregunta "¿La tienda hace la factura electrónica?" estaba por error en las preguntas de la página
  de citas desde el 4-nov (commit 1db5a40); se pasó a la de tienda virtual, que era donde iba.
- Probado en el PC (celular 390 px y computador 1366 px): sin desbordes, el botón conserva el foco del teclado.
  **Sin publicar** (Danny: "prepáralo ya, sin publicar"). Al publicar sale también el cambio del 2026-11-11.
- **Publicado y verificado en vivo el mismo día** (Danny: "publica la web"), junto con el cambio del 2026-11-11:
  "Estudio Luna" y "primeras 20 citas sin pagar" en `/app-de-citas-ibague`, la pregunta de factura solo en tienda,
  la captura de Agenda carga (40 KB) y los 4 encabezados de seguridad siguen activos. Lighthouse celular (local, sin
  Kaspersky): rendimiento 95, accesibilidad 100, buenas prácticas 100, SEO 100; LCP 2,3 s, CLS 0. PageSpeed Insights
  sin clave dio "cuota diaria agotada": medir ahí otro día.

## 2026-11-11: plan Gratis de NODRA Agenda = 20 citas de prueba una sola vez
- **Qué:** donde decía "Tu agenda gratis: recibe hasta 20 citas al mes" (planes de `/app-de-citas-ibague` y su
  descripción para Google y WhatsApp) ahora dice **"Pruébala gratis: recibe tus primeras 20 citas sin pagar"**.
- **Por qué:** decisión de Danny: las 20 citas gratis son para probar, una sola vez, no cada mes. La app NODRA Agenda
  cambió igual el mismo día (ver su `docs/DECISIONES.md`). Sin publicar hasta el OK de Danny.

## 2026-11-04 (noche): dato de confianza con fuente en "Quién está detrás"
- **Qué:** dentro del desplegable "Mi formación y cómo trabajo" se agregó una línea: Colombia fue en 2021 el tercer
  mercado de tecnología de Latinoamérica (IDC). Va plegado para no llenar la portada de texto.
- **Por qué:** se revisó la página de ProColombia sobre software y TI; casi todo es para inversionistas, pero su forma
  de escribir (cada cifra con fuente y año) ayuda a que Google y las IA citen la página. Tolima e Ibagué no aparecen
  allá: espacio libre para NODRA. Dato viejo (2021): cambiarlo si IDC publica uno más nuevo.
- **Publicado y verificado en vivo (4-nov noche):** portada con el dato IDC y /paginas-web-ibague corta (275f0ef), las
  dos con 200 OK en nodrasoft.com y los encabezados de seguridad activos. Falta pedir reindexar ambas en Search Console.

## 2026-11-04 (noche): /paginas-web-ibague más corta y sencilla
- **Por qué:** mismas reglas de Danny que la tienda (público de 30 a 70 años, poco texto). Consejo de marketing: una sola
  revisión ligera y luego parar la web hasta tener datos de visitas.
- **Cambios:** de 629 a 380 palabras visibles; 4 cosas que incluye con ✓; precio grande con el detalle plegado;
  "qué preguntar antes de contratar" con respuestas de una línea; el trabajo real de Johana ahora se ve en el celular que
  se desliza (capturas reales, `CelularJohana`); enlace a /tienda-virtual-ibague. `FotoEjemplo` pasó a su propio archivo.
- **Pendiente:** la pestaña "Panel" del celular de Johana baja de línea a 360 px (igual que en la portada). OK de Danny
  para publicar.

## 2026-11-04 (tarde): fotos en la tienda virtual y letras que ya no hacen saltar la página
- **Fotos:** Danny hizo 4 imágenes con IA (3 con ChatGPT, 1 con Gemini; originales en `3 Marketing/Imagenes/Tienda Virtual`):
  dueña de tienda (arriba), pedido por WhatsApp, pago en línea y domicilio. Comprimidas a .webp (de ~2,5 MB a 22-84 KB),
  con su descripción y la etiqueta "Imagen de ejemplo" (son personas inventadas, no clientes). Reemplazan los dos
  ejemplos hechos con código de pedido y pago.
- **Problema encontrado:** con la foto arriba, Lighthouse bajó a 83: el título se pintaba con otra letra y, al llegar la
  buena, crecía y empujaba la foto (salto CLS 0,13).
- **Arreglo:** cada página pide sus 2 letras desde el primer instante (`scripts/prerender.mjs`) y la foto de arriba
  tiene versión de 720 px para celular. Resultado local: tienda 95 (salto 0, LCP 2,9 s), portada 100. Decisión 36.
- **Publicado** con OK de Danny ("publica") y verificado en vivo: las 6 páginas responden 200 y traen las 2 letras
  precargadas; las 4 fotos cargan; 4 encabezados de seguridad. Lighthouse celular en vivo: tienda 94 / 100 / 100 / 100
  (salto 0, LCP 2,9 s), portada 98 / 100 / 100 / 100 (salto 0).
- **Pendiente de Danny:** pedir indexación de /tienda-virtual-ibague en Search Console.

## 2026-11-04 (tarde): tienda virtual más corta, más sencilla y más visual
- **Por qué:** Danny pidió (1) que la entienda un dueño de negocio de 30 a 70 años y (2) la regla de oro "poco texto,
  la gente es más visual".
- **Cambios:** palabras de todos los días (sin "panel", "inventario", "plantilla"; "pasarela de pagos" explicada);
  nada en letra pequeña; de 791 a 427 palabras visibles y de 7.182 a 5.591 px de largo en celular; dos ejemplos que se
  ven en vez de explicarse (pedido que llega por WhatsApp y pantalla de pago PSE/Nequi/tarjeta, `Demos.tsx`); lo de
  "qué cambia el precio" quedó plegado; factura electrónica pasó a preguntas frecuentes.
- **Revisado en local:** 360 px sin desbordes; Lighthouse 95 / 100 / – / 100. Sin publicar.
- **Siguiente:** Danny genera con Gemini las imágenes de ejemplo (prompts en la conversación del 4-nov) y Claude las
  comprime a .webp y las pone.

## 2026-11-04 (tarde): página nueva "Tienda virtual en Ibagué"
- **Por qué:** la investigación SEO + GEO pidió una página por servicio, cada una con contenido propio (no copiada).
- **Qué tiene:** qué incluye, ejemplo tocable, "¿pedidos por WhatsApp o pagos en línea?", precio
  ($1.800.000 a $3.500.000, de `PRECIOS`), "¿me basta con WhatsApp?", lo que pide la ley para vender en línea en
  Colombia, cómo trabajamos, 7 preguntas frecuentes y botón de WhatsApp con mensaje propio (`web-tienda`).
- **Conectada en:** pie de todas las páginas, tarjeta "Tiendas en línea" de la portada, sitemap, llms.txt y README.
- **Sin "trabajo real":** NODRA aún no tiene una tienda publicada; se agrega cuando exista (decisión 35).
- **Revisado en local:** 360 px y 1366 px sin desbordes; botón de WhatsApp en la 1.ª pantalla del celular;
  Lighthouse local 100 / 100 / 77 (http y contador, normal en local) / 100.
- **Publicado** con OK de Danny ("publica") y verificado en vivo: nodrasoft.com/tienda-virtual-ibague responde 200,
  título, H1, canonical y ficha FAQ en el HTML; está en el sitemap y la portada la enlaza (tarjeta + pie); 4
  encabezados de seguridad. Lighthouse celular en vivo 98 / 100 / 100 / 100 (LCP 1,9 s).
- **Pendiente de Danny:** pedir indexación de la página en Search Console.

## 2026-11-04 (tarde): frase resumen debajo del título principal
- **Por qué:** la auditoría SEO mostró que el párrafo de arriba no decía quién es NODRA, qué hace ni dónde. Google y
  las IA (ChatGPT, Gemini) necesitan una frase que se entienda sola para poder citarla.
- **Cambio:** "NODRA es una empresa de desarrollo de software en Ibagué, Tolima: páginas web desde $1.000.000, tiendas
  en línea, citas y apps a la medida, con 6 meses de garantía." En celular se ve solo esa frase, para que el botón de
  WhatsApp siga en la primera pantalla (medido a 360x740); en computador sigue también la frase de antes. Decisión 34.
- **Revisado en local:** celular 360 px y PC 1366 px sin desbordes; Lighthouse local 99 / 100 / 77 (por http y el
  contador de visitas, que en local no conecta) / 100.
- **Publicado** por Danny con "!" (al permiso automático de Claude no le llegó respuesta) y verificado en vivo: la
  frase está en el HTML, el botón de WhatsApp queda en 724 px de 740 a 360x740. Lighthouse celular en vivo
  98 / 100 / 100 / 100 (LCP 1,9 s).
- **Pendiente de Danny:** pedir en Search Console que Google vuelva a revisar la portada.

## 2026-11-04 (tarde): menú de servicios en el pie de página
- **Por qué:** la auditoría SEO mostró que las páginas que venden recibían 1 enlace interno y las legales 5.
- **Cambio:** el pie de las 6 páginas tiene ahora "Servicios: Diseño de páginas web en Ibagué · App de citas para
  negocios" (`Marco.tsx`). Las páginas de servicio pasan de 1 a 6 enlaces internos y se enlazan entre sí. Decisión 33.
- **Publicado** con OK de Danny ("publica") y verificado en vivo: el pie trae los 2 enlaces en portada,
  /paginas-web-ibague, /app-de-citas-ibague y /privacidad; los 4 encabezados de seguridad siguen. Lighthouse celular
  en vivo: 97 / 100 / 100 / 100 (LCP 1,9 s).
- **Pendiente de Danny:** pedir en Search Console que Google vuelva a revisar la portada.

## 2026-11-04: títulos H2 de la portada que se pueden encontrar en Google
- **Por qué:** Danny notó que varios H2 no usaban palabras de búsqueda. La auditoría SEO + GEO (comparada con la
  página de AdsNet Soluciones) lo confirmó: 8 de 10 H2 eran genéricos ("Qué hacemos", "Cuánto cuesta"…).
- **Cambios (solo texto, sin tocar el diseño ni la velocidad):**
  1. Qué hacemos → **Desarrollo de software para negocios**; su párrafo ahora dice "Páginas web, tiendas en línea y
     apps a la medida, hechas en Ibagué."
  2. Cuánto cuesta → **Precios de páginas web y apps**; el párrafo de abajo ya trae las cifras (desde $1.000.000,
     $1.800.000 y $3.500.000, leídas de `PRECIOS`).
  3. Nuestros productos → **Apps listas para usar en tu negocio**; tarjeta: **NODRA Agenda: app de citas para negocios**.
  4. Un proyecto real → **Caso real: la app de un estudio de uñas en Ibagué**.
  5. **Hecha en Ibagué, Tolima. Abierta al mundo.** · Cómo trabajamos → **Cómo hacemos tu página web o app** ·
     **Apps seguras desde el primer día** · **Preguntas frecuentes sobre páginas web y apps**.
- Reglas para los próximos títulos en `docs/DECISIONES.md` (32).
- **Publicado** el 4-nov con OK de Danny y verificado en vivo (nodrasoft.com y nexus-tech-co.web.app): los 10 H2
  nuevos, la tarjeta de NODRA Agenda y el párrafo con precios salen en el HTML; ya no aparecen los títulos viejos; las
  otras páginas responden 200 y siguen los 4 encabezados de seguridad. Revisado antes a 360 px y 1366 px (nada se
  sale de la pantalla). Falta: pedir reindexación de la portada en Search Console.

## 2026-11-02 (noche): mínimo de $1.000.000 y sin precio al comienzo
- Danny: "es muy poco" → se probó subir todo, pero decidió "deja los precios anteriores, pero el mínimo que sea un
  millón". Precios (en `negocio.ts`, `llms.txt` y la ficha para Google): página web $1.000.000 a $1.500.000; tienda
  en línea o agenda a la medida $1.800.000 a $3.500.000; app a la medida desde $3.500.000.
- **Publicado** el 2-nov con OK de Danny junto con la página nueva `/paginas-web-ibague`, y verificado en vivo: la
  página responde, precios con mínimo de $1.000.000 en portada, página nueva, ficha y `llms.txt`; ya no aparece
  $800.000 ni "Plan Gratis hasta 20 citas"; 4 encabezados de seguridad. Lighthouse celular de la página nueva en vivo:
  98 / 100 / 100 / 100. Danny solicitó su indexación en Search Console el mismo 2-nov.
- El precio ya no va en el primer párrafo de `/paginas-web-ibague` (Danny: "solo quita el precio de ese texto"). Sí
  sigue en el título y la descripción de Google (con los precios nuevos) y en las secciones de precio.

## 2026-11-02: página nueva "Diseño de páginas web en Ibagué" (/paginas-web-ibague)
- **Por qué:** semana 2 del estudio de la web: "diseño de páginas web Ibagué" es la búsqueda con la que sale primero
  la competencia, y la portada no competía por ella.
- **Qué tiene:** respuesta directa arriba (qué hacemos, para quién; el precio se quitó de ahí después), qué incluye
  con el ejemplo tocable, precio con lo que lo cambia, **"Qué preguntar antes de contratar una página web"** (6
  preguntas con la respuesta de NODRA, sin nombrar a nadie), cómo trabajamos, el trabajo real de Johana, 6
  preguntas frecuentes y cierre con WhatsApp propio (`MENSAJES.paginasWeb`, anotar como "web-paginas").
- **Para Google y las IA:** ficha Service con rango de precio + preguntas frecuentes + migas, en el mapa del sitio,
  en `llms.txt` y con enlace desde la tarjeta "Páginas web" de la portada.
- **Arreglo de paso:** la descripción de `/app-de-citas-ibague` decía "Plan Gratis hasta 20 citas" (frase prohibida:
  se entiende como citas regaladas). Ahora: "Tu agenda gratis: recibe hasta 20 citas al mes".
- **Verificado** en vista previa local (360 px): nada se sale de lo ancho; Lighthouse celular 99 / 100 / 81 / 100 (el
  81 es solo por ser http en el PC; en nodrasoft.com va por https).
- **Después de publicar:** pedir indexación de la página en Search Console (Inspección de URLs → Solicitar
  indexación), como se hizo con la de citas.

## 2026-11-02: cambios del estudio de la web (precios, "páginas web", IA en preparación)
- **Por qué:** estudio experto (`Empresa NEXUS/4 Estudios/2026-11-02-estudio-web-NODRA.md`): la página no usaba las
  palabras que busca la gente ("páginas web"), no mostraba precios (la competencia de Ibagué sí) y anunciaba IA que
  NODRA aún no entrega.
- **Cambios:**
  1. Título de Google y H1: "Páginas web y apps para negocios en Ibagué".
  2. Sección nueva **"Cuánto cuesta"** con rangos de referencia: página web $800.000 a $1.500.000 (esa noche el mínimo
     subió a $1.000.000, ver arriba); tienda en línea o
     agenda a la medida $1.800.000 a $3.500.000; app a la medida desde $3.500.000. Plegado: qué cambia el precio y
     qué se paga aparte. Los mismos precios en la ficha para Google (`priceSpecification`), la pregunta frecuente y
     `llms.txt`. Cómo se calcularon: comentario de `PRECIOS` en `src/negocio.ts`.
  3. "Qué hacemos" con un 4.º ejemplo tocable: **Páginas web** (`DemoPagina`). La IA pasó a "Asistentes con
     inteligencia artificial · En preparación", con "Avísame cuando esté listo" (decisión de Danny: todavía no se
     hace nada con IA).
  4. El **mapa bajó** de la 2.ª pantalla a después de "Un proyecto real" (Danny: "sí, bájalo").
  5. Primera pantalla del celular: escudo de 216 a 160 px; ahora el botón de WhatsApp y "Ver precios" entran en
     la primera pantalla, con "Te responde Danny, el fundador · horario" debajo.
  6. Cada botón de WhatsApp manda un mensaje distinto para saber qué parte trae clientes (`docs/MEDIR.md`).
  7. Cierre con oferta más concreta ("una conversación corta… sin compromiso, 6 meses de garantía"); sin "OWASP".
- **Verificado** en la vista previa local a 360 px y 1280 px: nada se sale de lo ancho, 8 enlaces de WhatsApp con su
  mensaje, ficha con los 3 precios. La página pasó de ~8.700 a ~10.700 px de alto en celular (precios + 4.º ejemplo).
- **Publicada** el 2-nov con OK de Danny ("PUBLICALO") y verificada en vivo en nodrasoft.com: título, precios,
  "En preparación", ficha con `minPrice`, mensajes de WhatsApp, `llms.txt` y 4 encabezados de seguridad. Lighthouse
  celular contra la página en vivo: 98 / 100 / 100 / 100 (LCP 1,9 s, CLS 0). PageSpeed API sin cupo ese día.

## 2026-11-02: contador de visitas sin cookies (Cloudflare Web Analytics)
- Danny preguntó cómo saber cuántas personas entran a la página. Se creó la cuenta gratis de Cloudflare
  (con el Gmail avisos.nexusagenda) y se activó Web Analytics para nodrasoft.com sin tocar el DNS de Namecheap.
- El contador va al final de las 5 páginas (inicio, app de citas, privacidad, términos y 404). No usa cookies, así
  que no hace falta el aviso de consentimiento.
- La CSP ahora permite el script de Cloudflare. La política de privacidad lo explica (vigencia 2 de noviembre) y el
  pie dice "no usa cookies ni rastreadores de publicidad", que es lo exacto.
- PUBLICADO con el OK de Danny y verificado en vivo: contador en las páginas, sin errores de CSP, encabezados activos.
  PageSpeed Insights con el contador puesto: **100/100/100/100 en celular y en computador** (celular: carga 0,9 s,
  bloqueo 0 ms). El contador no le quitó velocidad.

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
- PUBLICADO con el OK de Danny y verificado en vivo (nodrasoft.com y nexus-tech-co.web.app): textos nuevos, foto y
  encabezados de seguridad activos. Lighthouse en el PC de Danny: computador 99; celular 86 con Kaspersky (mete un
  script de 180 KB en cada página del PC) y **94 sin Kaspersky**, que es lo que ven los visitantes. Accesibilidad,
  buenas prácticas y SEO: 100. PageSpeed en línea no respondió (cupo diario agotado).
- Las capturas de la vitrina ahora van en `<picture>` con `media`: el celular baja un GIF vacío y no 40 KB de más.
- Lo tradicional del Tolima (tamales, lechona) quedó para después: Danny lo quiere pensar mejor.

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
