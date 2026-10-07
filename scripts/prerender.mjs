// Inserta el HTML de cada página dentro de su archivo en dist/ después de compilar
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render, datosEstructurados } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const paginas = { 'index.html': 'inicio', 'privacidad.html': 'privacidad', '404.html': 'noEncontrada' }

for (const [archivo, pagina] of Object.entries(paginas)) {
  const ruta = resolve('dist', archivo)
  const html = readFileSync(ruta, 'utf8')
  if (!html.includes('<div id="root"></div>')) throw new Error(`No se encontró <div id="root"> en dist/${archivo}`)
  let salida = html.replace('<div id="root"></div>', `<div id="root">${render(pagina)}</div>`)
  if (pagina === 'inicio') {
    // Ficha Schema.org para Google y las IA (es un bloque de datos: el navegador no lo ejecuta)
    const json = JSON.stringify(datosEstructurados()).replace(/</g, '\u003c')
    salida = salida.replace('</head>', `  <script type="application/ld+json">${json}</script>
  </head>`)
  }
  writeFileSync(ruta, salida)
  console.log(`✓ HTML pre-renderizado en dist/${archivo}`)
}
rmSync('dist-ssr', { recursive: true, force: true })
