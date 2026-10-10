import { useEffect, useRef } from 'react'

// Mapa mundial de puntos con conexiones que salen de Ibagué.
// - Los puntos se calculan al compilar (scripts/mapa-puntos.mjs) y se descargan solo cuando el mapa
//   está por aparecer en pantalla, para no frenar la carga inicial (Lighthouse).
// - Se dibuja en <canvas> con código propio: nada de librerías ni mapas de otros sitios (CSP estricta).
// - Con "reducir movimiento" activado se dibuja quieto, sin animación.
// - Es decorativo (aria-hidden): el texto de la sección dice lo mismo para lectores de pantalla.

type Datos = typeof import('./mapaPuntos')
type Arco = { ax: number; ay: number; bx: number; by: number; cx: number; cy: number; t0: number; verde: boolean }

const CIAN = '67 217 242'
const VERDE = '94 232 154'
const DURACION_TRAZO = 1400
const VIDA_ARCO = 3600
const MAX_ARCOS = 7

export default function MapaRed() {
  const caja = useRef<HTMLDivElement>(null)
  const lienzo = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const div = caja.current
    const canvas = lienzo.current
    if (!div || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let datos: Datos | null = null
    let base: HTMLCanvasElement | null = null
    let escala = 1
    let dx = 0
    let dy = 0
    let ancho = 0
    let alto = 0
    let visible = false
    let cuadro = 0
    let ultimoArco = 0
    let puntero: { x: number; y: number } | null = null
    const arcos: Arco[] = []

    // Lienzo del mapa (1000 x 372) → píxeles de pantalla. Ajuste "cubrir" centrado en Ibagué,
    // para que en el celular se vea América cerca y no un mundo diminuto.
    const aPantalla = (x: number, y: number) => [x * escala + dx, y * escala + dy] as const

    function medir() {
      if (!datos || !canvas || !ctx || !div) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      ancho = div.clientWidth
      alto = div.clientHeight
      canvas.width = Math.round(ancho * dpr)
      canvas.height = Math.round(alto * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // En pantallas angostas se acerca más (0.95) para que América se vea grande y no un mundo diminuto
      escala = Math.max(ancho / datos.ANCHO, alto / datos.ALTO, ancho < 640 ? 0.95 : 0)
      const [ix, iy] = datos.IBAGUE
      dx = Math.min(0, Math.max(ancho - datos.ANCHO * escala, ancho * 0.42 - ix * escala))
      dy = Math.min(0, Math.max(alto - datos.ALTO * escala, alto * 0.5 - iy * escala))

      // Los puntos fijos se pintan una sola vez en un lienzo aparte y luego se copian en cada cuadro
      base = document.createElement('canvas')
      base.width = canvas.width
      base.height = canvas.height
      const b = base.getContext('2d')!
      b.setTransform(dpr, 0, 0, dpr, 0, 0)
      b.fillStyle = 'rgb(74 110 154 / 0.7)'
      const r = Math.max(0.8, 1.15 * escala)
      const p = datos.PUNTOS
      for (let i = 0; i < p.length; i += 2) {
        const [x, y] = aPantalla(p[i], p[i + 1])
        if (x < -4 || y < -4 || x > ancho + 4 || y > alto + 4) continue
        b.beginPath()
        b.arc(x, y, r, 0, Math.PI * 2)
        b.fill()
      }
      if (quieto || !visible) dibujar(performance.now())
    }

    function nuevoArco(destino?: { x: number; y: number }, ahora = performance.now()) {
      if (!datos) return
      const [ax, ay] = aPantalla(datos.IBAGUE[0], datos.IBAGUE[1])
      let bx: number
      let by: number
      if (destino) {
        bx = destino.x
        by = destino.y
      } else {
        // Un punto de tierra al azar que se vea en pantalla y no esté pegado a Ibagué
        const p = datos.PUNTOS
        let intentos = 0
        do {
          const i = Math.floor(Math.random() * (p.length / 2)) * 2
          ;[bx, by] = aPantalla(p[i], p[i + 1])
          intentos++
        } while (
          intentos < 40 &&
          (bx < 12 || by < 12 || bx > ancho - 12 || by > alto - 12 || Math.hypot(bx - ax, by - ay) < 90)
        )
      }
      // Punto de control elevado: el arco se curva "por encima" del mapa
      const d = Math.hypot(bx - ax, by - ay)
      arcos.push({ ax, ay, bx, by, cx: (ax + bx) / 2, cy: (ay + by) / 2 - d * 0.35, t0: ahora, verde: arcos.length % 2 === 1 })
      if (arcos.length > MAX_ARCOS) arcos.shift()
    }

    const enCurva = (a: Arco, t: number) => {
      const u = 1 - t
      return [u * u * a.ax + 2 * u * t * a.cx + t * t * a.bx, u * u * a.ay + 2 * u * t * a.cy + t * t * a.by] as const
    }
    const suave = (t: number) => 1 - Math.pow(1 - t, 3)

    function dibujar(ahora: number) {
      if (!ctx || !base || !datos) return
      ctx.clearRect(0, 0, ancho, alto)
      ctx.drawImage(base, 0, 0, ancho, alto)

      // Luz que sigue al mouse o al dedo: los puntos cercanos se encienden
      if (puntero) {
        const radio = 110
        const p = datos.PUNTOS
        const r = Math.max(1, 1.5 * escala)
        for (let i = 0; i < p.length; i += 2) {
          const [x, y] = aPantalla(p[i], p[i + 1])
          const dist = Math.hypot(x - puntero.x, y - puntero.y)
          if (dist > radio) continue
          ctx.fillStyle = `rgb(${CIAN} / ${(1 - dist / radio) * 0.95})`
          ctx.beginPath()
          ctx.arc(x, y, r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Conexiones: se trazan, un pulso las recorre y se desvanecen
      for (const a of arcos) {
        const edad = quieto ? DURACION_TRAZO : ahora - a.t0
        if (edad > VIDA_ARCO && !quieto) continue
        const color = a.verde ? VERDE : CIAN
        const avance = suave(Math.min(1, edad / DURACION_TRAZO))
        const apagado = quieto ? 0.7 : Math.max(0, 1 - Math.max(0, edad - DURACION_TRAZO - 900) / (VIDA_ARCO - DURACION_TRAZO - 900))

        ctx.strokeStyle = `rgb(${color} / ${0.75 * apagado})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(a.ax, a.ay)
        const pasos = 40
        for (let s = 1; s <= pasos * avance; s++) {
          const [x, y] = enCurva(a, s / pasos)
          ctx.lineTo(x, y)
        }
        ctx.stroke()

        if (avance < 1) {
          // Cabeza brillante del trazo
          const [x, y] = enCurva(a, avance)
          ctx.fillStyle = `rgb(${color})`
          ctx.shadowColor = `rgb(${color})`
          ctx.shadowBlur = 12
          ctx.beginPath()
          ctx.arc(x, y, 2.6, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        } else {
          // Llegada: el destino se enciende con un anillo que se abre
          const tLlegada = quieto ? 0.6 : Math.min(1, (edad - DURACION_TRAZO) / 900)
          ctx.fillStyle = `rgb(${color} / ${apagado})`
          ctx.beginPath()
          ctx.arc(a.bx, a.by, 2.6, 0, Math.PI * 2)
          ctx.fill()
          ctx.strokeStyle = `rgb(${color} / ${(1 - tLlegada) * apagado})`
          ctx.beginPath()
          ctx.arc(a.bx, a.by, 3 + tLlegada * 14, 0, Math.PI * 2)
          ctx.stroke()
        }
      }

      // Ibagué: el nodo central, con un latido suave
      const [ix, iy] = aPantalla(datos.IBAGUE[0], datos.IBAGUE[1])
      const latido = quieto ? 0.5 : (Math.sin(ahora / 520) + 1) / 2
      ctx.fillStyle = `rgb(${CIAN} / ${0.16 + latido * 0.14})`
      ctx.beginPath()
      ctx.arc(ix, iy, 13 + latido * 6, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = `rgb(${CIAN})`
      ctx.shadowColor = `rgb(${CIAN})`
      ctx.shadowBlur = 16
      ctx.beginPath()
      ctx.arc(ix, iy, 5, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
      ctx.font = '600 13px "Instrument Sans Variable", system-ui, sans-serif'
      ctx.fillStyle = 'rgb(220 233 245)'
      ctx.fillText('Ibagué', ix + 12, iy + 22)
    }

    function bucle(ahora: number) {
      if (!visible) return
      if (ahora - ultimoArco > 900) {
        nuevoArco(undefined, ahora)
        ultimoArco = ahora
      }
      dibujar(ahora)
      cuadro = requestAnimationFrame(bucle)
    }

    function arrancar() {
      cancelAnimationFrame(cuadro)
      if (quieto) {
        dibujar(performance.now())
        return
      }
      cuadro = requestAnimationFrame(bucle)
    }

    const posicion = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      return { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const alMover = (e: PointerEvent) => {
      puntero = posicion(e)
      if (quieto) dibujar(performance.now())
    }
    const alSalir = () => {
      puntero = null
      if (quieto) dibujar(performance.now())
    }
    // Tocar o hacer clic manda una conexión desde Ibagué hasta ese lugar
    const alTocar = (e: PointerEvent) => {
      nuevoArco(posicion(e))
      if (quieto) dibujar(performance.now())
    }
    canvas.addEventListener('pointermove', alMover)
    canvas.addEventListener('pointerleave', alSalir)
    canvas.addEventListener('pointerdown', alTocar)

    const redimension = new ResizeObserver(() => medir())
    const observador = new IntersectionObserver(
      ([entrada]) => {
        visible = entrada.isIntersecting
        if (visible && !datos) {
          import('./mapaPuntos')
            .then((d) => {
              datos = d
              medir()
              if (quieto) for (let i = 0; i < 6; i++) nuevoArco()
              redimension.observe(div)
              div.dataset.listo = ''
              arrancar()
            })
            .catch((e) => console.error('El mapa no pudo cargar sus puntos:', e))
        } else if (visible && datos) {
          arrancar()
        } else {
          cancelAnimationFrame(cuadro)
        }
      },
      { rootMargin: '200px' },
    )
    observador.observe(div)

    return () => {
      cancelAnimationFrame(cuadro)
      observador.disconnect()
      redimension.disconnect()
      canvas.removeEventListener('pointermove', alMover)
      canvas.removeEventListener('pointerleave', alSalir)
      canvas.removeEventListener('pointerdown', alTocar)
    }
  }, [])

  return (
    <div ref={caja} className="mapa" aria-hidden="true">
      <canvas ref={lienzo} className="mapa-lienzo" />
    </div>
  )
}
