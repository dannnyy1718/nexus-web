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
