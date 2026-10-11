import { useEffect, useRef } from 'react'

// Escudo del hero con efecto 3D: se inclina siguiendo el mouse (o el dedo), un brillo recorre su
// superficie y seis nodos de la red le giran alrededor, pasando por delante y por detrás.
// Es CSS 3D (perspective + preserve-3d) con un poco de JavaScript, sin librerías 3D como three.js:
// así la página sigue cargando rápido (meta Lighthouse ≥ 90).
// Los ángulos se pasan como variables CSS con style.setProperty: la CSP (style-src 'self') prohíbe
// los atributos style="" en el HTML, pero sí deja cambiar estilos desde JavaScript.

const INCLINACION_MAX = 16 // grados que se inclina como máximo
const SUAVIDAD = 0.07 // qué tanto se acerca al objetivo en cada cuadro (más bajo = más lento y suave)
const REPOSO_MS = 2500 // sin mover el mouse este tiempo, el escudo flota solo

const limitar = (v: number) => Math.max(-1, Math.min(1, v))

export default function Escudo3D() {
  const escena = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = escena.current
    // Quien pidió "reducir movimiento" en su sistema ve el escudo quieto (accesibilidad WCAG 2.3.3)
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let objetivoX = 0 // hacia dónde debe mirar, de -1 a 1
    let objetivoY = 0
    let x = 0
    let y = 0
    let ultimoMovimiento = -REPOSO_MS
    let cuadro = 0

    // El mouse se sigue en toda la ventana; la distancia se mide desde el centro del escudo
    const alMover = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      objetivoX = limitar((e.clientX - (r.left + r.width / 2)) / r.width)
      objetivoY = limitar((e.clientY - (r.top + r.height / 2)) / r.height)
      ultimoMovimiento = performance.now()
    }

    const animar = (ahora: number) => {
      if (ahora - ultimoMovimiento > REPOSO_MS) {
        // Flotar solo: así en el celular también se ve el 3D sin tocar nada
        objetivoX = Math.sin(ahora / 2300) * 0.55
        objetivoY = Math.cos(ahora / 3100) * 0.35
      }
      x += (objetivoX - x) * SUAVIDAD
      y += (objetivoY - y) * SUAVIDAD
      el.style.setProperty('--ry', `${(x * INCLINACION_MAX).toFixed(2)}deg`)
      el.style.setProperty('--rx', `${(-y * INCLINACION_MAX).toFixed(2)}deg`)
      // El brillo va al lado contrario de la inclinación, como una luz fija sobre una superficie
      el.style.setProperty('--gx', `${(50 - x * 35).toFixed(1)}%`)
      el.style.setProperty('--gy', `${(40 - y * 30).toFixed(1)}%`)
      cuadro = requestAnimationFrame(animar)
    }

    // Solo anima mientras el escudo está en pantalla: fuera de ella no gasta batería
    const observador = new IntersectionObserver(([entrada]) => {
      cancelAnimationFrame(cuadro)
      if (entrada.isIntersecting) cuadro = requestAnimationFrame(animar)
    })
    observador.observe(el)
    window.addEventListener('pointermove', alMover, { passive: true })

    return () => {
      observador.disconnect()
      cancelAnimationFrame(cuadro)
      window.removeEventListener('pointermove', alMover)
    }
  }, [])

  return (
    <div ref={escena} className="escena-3d relative order-1 mx-auto w-full max-w-[19rem] md:order-2 md:max-w-[30rem]">
      <div className="pieza-3d relative">
        <div className="halo absolute -inset-10" aria-hidden="true" />
        <img
          src="/img/escudo-560.webp"
          srcSet="/img/escudo-560.webp 560w, /img/escudo-960.webp 960w"
          sizes="(min-width: 768px) 30rem, 19rem"
          width={560}
          height={560}
          alt="Escudo de NEXUS: una N formada por nodos conectados, sobre un mapa del mundo"
          className="escudo relative w-full"
          fetchPriority="high"
        />
        <div className="brillo" aria-hidden="true" />
        <div className="orbita" aria-hidden="true">
          <div className="orbita-anillo" />
          <div className="orbita-giro">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} className="orbita-nodo">
                <span />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
