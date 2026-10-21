# Manual de reparación: página de NODRA

Cada problema tiene la misma forma: **síntoma** (lo que ves), **causa** (por qué pasa) y **arreglo** (qué hacer).
Antes de todo: `npm install` y `npm run build`. Si el build falla, el mensaje en la terminal dice el archivo y la línea.

## 1. La página se ve sin estilos, en blanco o sin imágenes

- **Causa más común:** algo se cargó "en línea" o desde otro sitio y la CSP de `firebase.json` lo bloqueó.
- **Cómo confirmarlo:** abre la página, presiona F12 → pestaña **Consola**. Si dice *"Refused to load... Content Security Policy"*, es eso.
- **Arreglo:**
  1. Nada de `<script>` ni `style="..."` dentro del HTML: todo va en archivos propios (`src/`).
  2. Fuentes, imágenes y scripts se descargan y se sirven desde el sitio (`public/` o `npm`), nunca desde otro dominio.
  3. Si de verdad hace falta un servicio externo, agregarlo a la CSP en `firebase.json` y anotarlo en `DECISIONES.md`.

## 2. Hice un cambio y en la página en vivo no aparece

- **Causa:** no se compiló, no se publicó o el navegador muestra la versión guardada (caché).
- **Arreglo:**
  1. `npm run build` y luego `npx -y firebase-tools deploy --only hosting`.
  2. Abre la página con Ctrl + Shift + R (recarga sin caché) o en una ventana de incógnito.

## 3. El botón de WhatsApp abre un número equivocado o un mensaje raro

- **Causa:** `WHATSAPP_NUMERO` en `src/Marco.tsx` debe llevar el 57 y sin espacios ni "+": `573133655136`.
- **Arreglo:** corregir `WHATSAPP_NUMERO` y `WHATSAPP_VISIBLE` (el que se lee) en `src/Marco.tsx`.

## 4. `npm run build` falla en "prerender" con "No se encontró `<div id="root">`"

- **Causa:** alguien cambió `<div id="root"></div>` en `index.html`, `privacidad.html` o `404.html`.
- **Arreglo:** dejar exactamente `<div id="root"></div>` (vacío) en los tres archivos. El script `scripts/prerender.mjs` lo busca para meter ahí el HTML ya armado.

## 5. Google muestra textos viejos o no encuentra la página

- **Causa:** Google tarda días en volver a leer la página.
- **Arreglo:** en Google Search Console → "Inspección de URLs" → pegar la dirección → "Solicitar indexación". Si agregaste una página, súmala a `public/sitemap.xml`.

## 6. Mozilla Observatory bajó de A+ o Lighthouse bajó de 90

- **Causa:** se quitó un encabezado de `firebase.json`, se agregó algo externo o una imagen muy pesada.
- **Arreglo:**
  1. Comparar `firebase.json` con el historial: `git log -p firebase.json`.
  2. Imágenes nuevas: en WebP, con `width`, `height` y `alt`.

- **Si mides desde el PC de Danny:** Kaspersky inyecta un script (gc.kis.v2.scr.kaspersky-labs.com) que baja la nota unos 10 puntos. No es la página: medir con `npx lighthouse <url> --blocked-url-patterns="*kaspersky-labs.com*"` o en pagespeed.web.dev.

## 7. Un texto o enlace se lee mal (accesibilidad)

- **Causa:** un color nuevo sin revisar el contraste.
- **Arreglo:** revisar con el calculador:
  `python "../../.claude/skills/antislop-human/contrast-check.py" "#color-texto" "#050e1f"`
  Texto normal necesita 4.5:1; bordes de botones 3:1. Los enlaces dentro de un párrafo van siempre subrayados.

## 8. Al publicar sale "npm error could not determine executable to run"

- **Causa:** `npx firebase` busca un programa llamado `firebase` que no está instalado en el proyecto ni en el equipo.
- **Arreglo:** usar el nombre completo del paquete oficial: `npx -y firebase-tools deploy --only hosting`.

## 9. El mapa mundial sale vacío (solo el recuadro oscuro)

- **Causa:** no cargó el archivo de puntos (`mapaPuntos`), o el navegador no soporta `canvas`.
- **Cómo confirmarlo:** F12 → Consola. Si dice *"El mapa no pudo cargar sus puntos"*, falló la descarga.
- **Arreglo:**
  1. `npm run build` de nuevo y publicar: el archivo `assets/mapaPuntos-*.js` debe estar en `dist/`.
  2. Si se borró `src/mapaPuntos.ts`, se vuelve a generar con `npm run mapa`.
- **Ojo:** el mapa es decorativo. Si falla, el resto de la página sigue funcionando igual.

## 10. Las pantallas de Johana no cambian solas

- **Causa normal:** la persona tiene activado "reducir movimiento" en su equipo, el mouse está encima del celular o alguien tocó un punto (eso pausa). Es a propósito (accesibilidad).
- **Arreglo:** si no es ninguna de esas, revisar la Consola (F12) y `src/PantallasJohana.tsx`.

## 11. "Ver la app en vivo" abre la app de Johana pero no baja a los servicios

- **Causa:** la app de Johana tiene que tener publicado el cambio de `/#servicios` (en `app-johana/src/pages/Home.tsx`).
- **Arreglo:** publicar la app de Johana. Si se cambia su dirección, actualizar `JOHANA_SERVICIOS` en `src/App.tsx`.

## 12. El escudo de la portada se ve plano, cortado o no se mueve
- **No se mueve:** el sistema tiene "reducir movimiento" activado (es a propósito) o hay un error de JavaScript: F12 → Consola.
- **Se ve plano (sin profundidad):** alguien puso `overflow`, `opacity` o `filter` en `.pieza-3d` o en `.orbita`; esas propiedades aplanan el 3D. Quitarlas.
- **El anillo se corta a los lados:** bajar `--radio` de `.orbita` en `src/index.css` (10.5rem celular, 15.5rem computador).
- **Se mueve brusco o muy lento:** ajustar `SUAVIDAD` e `INCLINACION_MAX` arriba de `src/Escudo3D.tsx`.

## 13. El botón "Crear mi agenda gratis" no abre NEXUS Agenda, o la captura sale vacía
- **No abre o abre otra página:** revisar `AGENDA_URL` arriba de `src/App.tsx` (debe ser `https://nexus-agenda-co.web.app/`).
- **Captura vacía:** debe existir `public/img/agenda-portada.webp` (480 × 860). Si la portada de Agenda cambia, tomar una captura nueva del celular **sin datos de clientes** y convertirla a webp.

## 14. Los botones verdes o dorados se ven planos
- Les falta la clase `boton-3d` junto a `boton-verde` o `boton-oro` (ver `BotonWhatsApp` en `src/Marco.tsx`). Los estilos están en `src/index.css`.

## 15. Publiqué pero sigo viendo la versión vieja
- **Causa:** el navegador guardó la página en caché. Antes del 2026-10-14 Firebase la guardaba 1 hora (`max-age=3600`).
- **Arreglo ya aplicado:** en `firebase.json`, las páginas (`/`, `/privacidad` y los `.html`) llevan `Cache-Control: no-cache`. El navegador pregunta en cada visita si hay versión nueva; si no la hay, el servidor responde "sin cambios" sin volver a enviar la página. Los archivos de `/assets/` sí se guardan un año porque su nombre cambia en cada publicación.
- **Para ver ya la versión nueva:** Ctrl + Shift + R en el computador, o abrir la página en una pestaña de incógnito en el celular.


## 16. En el celular no se puede hacer zoom con los dedos
- **Causa:** una zona grande tiene `touch-action: pan-y` (solo deja desplazar arriba/abajo) o el `viewport` de `index.html` tiene `user-scalable=no` o `maximum-scale`.
- **Arreglo:** usar `touch-action: pan-y pinch-zoom` (así está el escudo y el mapa en `src/index.css`) y dejar el viewport en `width=device-width, initial-scale=1.0`. Bloquear el zoom va contra la accesibilidad (WCAG).
