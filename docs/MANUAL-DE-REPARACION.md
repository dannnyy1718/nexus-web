# Manual de reparación: página de NEXUS

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
