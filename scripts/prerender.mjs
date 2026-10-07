// Inserta el HTML de cada página dentro de su archivo en dist/ después de compilar
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const paginas = { 'index.html': 'inicio', 'privacidad.html': 'privacidad' }

for (const [archivo, pagina] of Object.entries(paginas)) {
  const ruta = resolve('dist', archivo)
  const html = readFileSync(ruta, 'utf8')
  if (!html.includes('<div id="root"></div>')) throw new Error(`No se encontró <div id="root"> en dist/${archivo}`)
  writeFileSync(ruta, html.replace('<div id="root"></div>', `<div id="root">${render(pagina)}</div>`))
  console.log(`✓ HTML pre-renderizado en dist/${archivo}`)
}
rmSync('dist-ssr', { recursive: true, force: true })
