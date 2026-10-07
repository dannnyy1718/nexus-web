// Inserta el HTML de la página dentro de dist/index.html después de compilar
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const ruta = resolve('dist/index.html')
const html = readFileSync(ruta, 'utf8')
if (!html.includes('<div id="root"></div>')) throw new Error('No se encontró <div id="root"> en dist/index.html')
writeFileSync(ruta, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
rmSync('dist-ssr', { recursive: true, force: true })
console.log('✓ HTML pre-renderizado en dist/index.html')
