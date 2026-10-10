import { useEffect, useState } from 'react'

// Celular que muestra, una tras otra, las pantallas que ve la clienta en la app de Johana.
// Accesibilidad (WCAG 2.2.2): botón para pausar, se detiene al pasar el mouse o con el teclado
// encima, y no avanza solo si la persona pidió "reducir movimiento".

const pantallas = [
  {
    nombre: 'Inicio',
    src: '/img/johana-inicio.webp',
    alt: 'Pantalla de inicio de la app: logo del estudio, botón para agendar cita y lista de servicios con precios',
  },
  {
    nombre: 'Agendar',
    src: '/img/johana-servicios.webp',
    alt: 'Pantalla para agendar: la clienta marca uno o varios servicios, cada uno con su duración y precio',
  },
  {
    nombre: 'Galería',
    src: '/img/johana-galeria.webp',
    alt: 'Galería de trabajos de Johana, con filtros por servicio y fotos de uñas terminadas',
  },
]

const INTERVALO = 3800

export default function PantallasJohana() {
  const [actual, setActual] = useState(0)
  const [pausado, setPausado] = useState(false)
  const [encima, setEncima] = useState(false)
  const [quieto, setQuieto] = useState(false)

  useEffect(() => {
    setQuieto(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (pausado || encima || quieto) return
    const t = window.setTimeout(() => setActual((i) => (i + 1) % pantallas.length), INTERVALO)
    return () => window.clearTimeout(t)
  }, [actual, pausado, encima, quieto])

  const detenido = pausado

  return (
    <figure
      className="min-w-0 max-w-[16rem] flex-1 basis-0"
      onPointerEnter={() => setEncima(true)}
      onPointerLeave={() => setEncima(false)}
      onFocus={() => setEncima(true)}
      onBlur={() => setEncima(false)}
    >
      <div className="celular pantallas">
        {pantallas.map((p, i) => (
          <img
            key={p.src}
            src={p.src}
            width={480}
            height={860}
            loading="lazy"
            alt={i === actual ? p.alt : ''}
            aria-hidden={i !== actual}
            className={i === actual ? 'pantalla pantalla-activa' : 'pantalla'}
          />
        ))}
      </div>
      <figcaption className="mt-3 text-center text-sm text-bruma">Lo que ve la clienta</figcaption>

      <div className="mt-3 flex items-center justify-center gap-1">
        {pantallas.map((p, i) => (
          <button
            key={p.nombre}
            type="button"
            onClick={() => {
              setActual(i)
              setPausado(true)
            }}
            aria-pressed={i === actual}
            className="punto-pantalla"
          >
            <span className="sr-only">Ver pantalla de {p.nombre}</span>
          </button>
        ))}
        {/* Con "reducir movimiento" no avanza solo, así que no hace falta el botón de pausa */}
        {!quieto && (
        <button
          type="button"
          onClick={() => setPausado((v) => !v)}
          className="ml-1 grid size-8 place-items-center rounded-full text-bruma transition-colors hover:text-niebla"
          aria-label={detenido ? 'Reproducir las pantallas' : 'Pausar las pantallas'}
        >
          <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true" fill="currentColor">
            {detenido ? <path d="M4 2.5v11l9-5.5-9-5.5Z" /> : <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />}
          </svg>
        </button>
        )}
      </div>
    </figure>
  )
}
