// Inserta el HTML de cada página dentro de su archivo en dist/ después de compilar
import { readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render, datosEstructurados, datosAppCitas, datosPaginasWeb, datosTienda } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const paginas = {
  'index.html': 'inicio',
  'privacidad.html': 'privacidad',
  'terminos.html': 'terminos',
  'app-de-citas-ibague.html': 'appCitas',
  'paginas-web-ibague.html': 'paginasWeb',
  'tienda-virtual-ibague.html': 'tiendaVirtual',
  '404.html': 'noEncontrada',
}
// Ficha Schema.org de cada página que la tiene
const fichas = { inicio: datosEstructurados, appCitas: datosAppCitas, paginasWeb: datosPaginasWeb, tiendaVirtual: datosTienda }

// Letras pedidas desde el primer instante (2026-11-04, decisión 36). Sin esto el navegador las descubría tarde
// (a los ~200 ms, al leer el CSS), pintaba el título con otra letra y, al llegar la buena, el título crecía y empujaba
// la foto de /tienda-virtual-ibague: Lighthouse marcó un salto (CLS) de 0,13 y bajó a 83. Son las 2 únicas letras que
// usa la página (latín); se descargaban igual, así que no suman peso. Si se cambia de letra, cambiar estos nombres.
const letras = readdirSync(resolve('dist/assets')).filter((f) => /^(unbounded|instrument-sans)-latin-wght-normal-.*\.woff2$/.test(f))
if (letras.length !== 2) throw new Error(`Se esperaban 2 letras en dist/assets y hay ${letras.length}: ${letras.join(', ')}`)
const precargaLetras = letras
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')

for (const [archivo, pagina] of Object.entries(paginas)) {
  const ruta = resolve('dist', archivo)
  const html = readFileSync(ruta, 'utf8')
  if (!html.includes('<div id="root"></div>')) throw new Error(`No se encontró <div id="root"> en dist/${archivo}`)
  let salida = html.replace('<div id="root"></div>', `<div id="root">${render(pagina)}</div>`)
  salida = salida.replace('</head>', `  ${precargaLetras}\n  </head>`)
  if (fichas[pagina]) {
    // Ficha Schema.org para Google y las IA (es un bloque de datos: el navegador no lo ejecuta)
    // Doble barra: escribe el texto literal \u003c para que un "</script>" dentro de los datos no cierre
    // la etiqueta antes de tiempo. Con una sola barra, JavaScript lo convierte otra vez en "<" y no protege.
    const json = JSON.stringify(fichas[pagina]()).replace(/</g, '\\u003c')
    salida = salida.replace('</head>', `  <script type="application/ld+json">${json}</script>
  </head>`)
  }
  writeFileSync(ruta, salida)
  console.log(`✓ HTML pre-renderizado en dist/${archivo}`)
}
rmSync('dist-ssr', { recursive: true, force: true })
