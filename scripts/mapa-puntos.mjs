// Genera src/mapaPuntos.ts: los puntos de los continentes para el mapa de la página.
// Se corre a mano (npm run mapa) solo si se quiere cambiar la densidad o el recorte del mapa.
// Así el navegador no descarga librerías de mapas: recibe una lista corta de números.
import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { feature } from 'topojson-client'
import { geoContains } from 'd3-geo'

const require = createRequire(import.meta.url)
const mundo = JSON.parse(readFileSync(require.resolve('world-atlas/land-110m.json'), 'utf8'))
const tierra = feature(mundo, mundo.objects.land)

// Recorte: sin la Antártida ni el extremo norte, que solo ocupan espacio
const LON = [-170, 190]
const LAT = [78, -56]
const ANCHO = 1000
const ALTO = Math.round((ANCHO * (LAT[0] - LAT[1])) / (LON[1] - LON[0]))
const PASO = 2.25 // grados entre puntos

const xDe = (lon) => ((lon - LON[0]) / (LON[1] - LON[0])) * ANCHO
const yDe = (lat) => ((LAT[0] - lat) / (LAT[0] - LAT[1])) * ALTO

const puntos = []
let fila = 0
for (let lat = LAT[0]; lat >= LAT[1]; lat -= PASO, fila++) {
  // Filas alternadas corridas medio paso: la trama queda en panal, no en cuadrícula
  const corrimiento = fila % 2 ? PASO / 2 : 0
  for (let lon = LON[0] + corrimiento; lon <= LON[1]; lon += PASO) {
    const lonReal = lon > 180 ? lon - 360 : lon
    if (geoContains(tierra, [lonReal, lat])) puntos.push(Math.round(xDe(lon)), Math.round(yDe(lat)))
  }
}

const ibague = [Math.round(xDe(-75.23)), Math.round(yDe(4.44))]

writeFileSync(
  'src/mapaPuntos.ts',
  `// Archivo generado por scripts/mapa-puntos.mjs. No editar a mano.
// Pares x,y de los puntos de tierra en un lienzo de ${ANCHO}x${ALTO}.
export const ANCHO = ${ANCHO}
export const ALTO = ${ALTO}
export const IBAGUE = [${ibague}] as const
export const PUNTOS = new Int16Array([${puntos}])
`,
)
console.log(`✓ ${puntos.length / 2} puntos, lienzo ${ANCHO}x${ALTO}, Ibagué en ${ibague}`)
