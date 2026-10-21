import { useEffect, useRef, useState } from 'react'

// Un solo celular grande con las pantallas reales de la app de Johana: se desliza con el dedo
// (scroll-snap del navegador, sin librerías) o se elige con los botones de arriba.
// Reemplaza al carrusel automático de dos celulares pequeños (2026-10-21): en el celular no se leían
// y ya no se mueve solo, así que no hace falta botón de pausa (WCAG 2.2.2).

const pantallas = [
  {
    nombre: 'Inicio',
    quien: 'Lo que ve la clienta',
    src: '/img/johana-inicio.webp',
    alt: 'Pantalla de inicio de la app: logo del estudio, botón para agendar cita y lista de servicios con precios',
  },
  {
    nombre: 'Agendar',
    quien: 'Lo que ve la clienta',
    src: '/img/johana-servicios.webp',
    alt: 'Pantalla para agendar: la clienta marca uno o varios servicios, cada uno con su duración y precio',
  },
  {
    nombre: 'Galería',
    quien: 'Lo que ve la clienta',
    src: '/img/johana-galeria.webp',
    alt: 'Galería de trabajos de Johana, con filtros por servicio y fotos de uñas terminadas',
  },
  {
    nombre: 'Panel',
    quien: 'Lo que ve Johana',
    src: '/img/johana-panel.webp',
    alt: 'Panel de administración: resumen de citas del día y pestañas de citas, servicios y galería',
  },
]

export default function CelularJohana() {
  const carril = useRef<HTMLDivElement>(null)
  const [actual, setActual] = useState(0)

  // Al deslizar, se averigua qué pantalla quedó al frente (una vez por cuadro, no en cada píxel)
  useEffect(() => {
    const el = carril.current
    if (!el) return
    let cuadro = 0
    const alDeslizar = () => {
      cancelAnimationFrame(cuadro)
      cuadro = requestAnimationFrame(() => {
        if (el.clientWidth > 0) setActual(Math.round(el.scrollLeft / el.clientWidth))
      })
    }
    el.addEventListener('scroll', alDeslizar, { passive: true })
    return () => {
      el.removeEventListener('scroll', alDeslizar)
      cancelAnimationFrame(cuadro)
    }
  }, [])

  const ir = (i: number) => {
    const el = carril.current
    if (!el) return
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({ left: i * el.clientWidth, behavior: quieto ? 'auto' : 'smooth' })
    setActual(i)
  }

  return (
    <figure className="mx-auto w-full max-w-[17rem] md:max-w-[19rem] 2xl:max-w-[21rem]">
      <div className="mb-4 flex flex-wrap justify-center gap-1.5" role="group" aria-label="Pantallas de la app">
        {pantallas.map((p, i) => (
          <button
            key={p.nombre}
            type="button"
            aria-pressed={i === actual}
            onClick={() => ir(i)}
            className="pestana-pantalla"
          >
            {p.nombre}
          </button>
        ))}
      </div>
      <div className="celular">
        <div
          ref={carril}
          className="carril"
          tabIndex={0}
          aria-label="Pantallas de la app de Johana. Desliza o usa las flechas del teclado."
        >
          {pantallas.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              width={480}
              height={860}
              loading="lazy"
              decoding="async"
              alt={p.alt}
              aria-hidden={i !== actual}
              className="carril-pantalla"
            />
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-bruma" aria-live="polite">
        {pantallas[actual].quien} · <span className="md:hidden">desliza para ver más</span>
        <span className="hidden md:inline">{actual + 1} de {pantallas.length}</span>
      </figcaption>
    </figure>
  )
}
