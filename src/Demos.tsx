import { useEffect, useState } from 'react'

// Tres ejemplos pequeños que se pueden tocar en "Qué hacemos" (pedido de Danny, 2026-10-21: menos texto,
// más cosas para ver y tocar). Están hechos con HTML y CSS, sin imágenes: no pesan nada y no frenan la página.
// Son ejemplos inventados (productos, horarios y respuesta), por eso cada uno dice "Ejemplo" arriba.

const pesos = (n: number) => `$${n.toLocaleString('es-CO')}`

function Marco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="demo">
      <div className="demo-barra">
        <span>{titulo}</span>
        <span className="demo-ejemplo">Ejemplo</span>
      </div>
      {children}
    </div>
  )
}

const productos = [
  { nombre: 'Café del Tolima 500 g', precio: 28000 },
  { nombre: 'Achiras x 12', precio: 9000 },
]

export function DemoTienda() {
  const [carrito, setCarrito] = useState<number[]>([])
  const total = carrito.reduce((s, i) => s + productos[i].precio, 0)

  return (
    <Marco titulo="Tu tienda">
      <ul className="grid gap-2">
        {productos.map((p, i) => (
          <li key={p.nombre} className="demo-fila">
            <span className="min-w-0">
              <span className="block truncate text-niebla">{p.nombre}</span>
              <span className="text-bruma">{pesos(p.precio)}</span>
            </span>
            <button type="button" className="demo-boton" onClick={() => setCarrito((c) => [...c, i])}>
              Agregar
              <span className="sr-only"> {p.nombre}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="demo-pie" aria-live="polite">
        <span>
          Carrito: <strong className="text-niebla">{carrito.length}</strong>
        </span>
        <span>
          Total <strong className="text-verde">{pesos(total)}</strong>
        </span>
      </p>
      {carrito.length > 0 && (
        <button type="button" className="demo-enlace" onClick={() => setCarrito([])}>
          Vaciar carrito
        </button>
      )}
    </Marco>
  )
}

const horas = [
  { hora: '9:00 a. m.', libre: true },
  { hora: '10:30 a. m.', libre: true },
  { hora: '2:00 p. m.', libre: false },
  { hora: '4:00 p. m.', libre: true },
]

export function DemoCitas() {
  const [elegida, setElegida] = useState<string | null>(null)

  return (
    <Marco titulo="Horarios del martes">
      <div className="grid grid-cols-2 gap-2">
        {horas.map((h) => (
          <button
            key={h.hora}
            type="button"
            disabled={!h.libre}
            aria-pressed={elegida === h.hora}
            onClick={() => setElegida(h.hora)}
            className="demo-hora"
          >
            {h.libre ? h.hora : 'Ocupado'}
          </button>
        ))}
      </div>
      <p className="demo-pie" aria-live="polite">
        {elegida ? (
          <span className="demo-listo">Cita apartada a las {elegida}</span>
        ) : (
          <span>Elige un horario libre</span>
        )}
      </p>
    </Marco>
  )
}

const PREGUNTA = '¿Tienen domicilio hasta El Salado?'
const RESPUESTA = 'Sí, todos los días hasta las 8 p. m. El domicilio cuesta $4.000.'

export function DemoIA() {
  const [letras, setLetras] = useState(0)
  const [activo, setActivo] = useState(false)

  // Escribe la respuesta letra por letra; con "reducir movimiento" aparece completa de una vez.
  // El intervalo se detiene solo al terminar y se limpia si la sección desaparece (sin ciclos sin freno).
  useEffect(() => {
    if (!activo) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLetras(RESPUESTA.length)
      return
    }
    const t = window.setInterval(() => {
      setLetras((n) => {
        if (n >= RESPUESTA.length) {
          window.clearInterval(t)
          return n
        }
        return n + 1
      })
    }, 28)
    return () => window.clearInterval(t)
  }, [activo])

  const termino = letras >= RESPUESTA.length

  return (
    <Marco titulo="Asistente de tu negocio">
      <div className="grid gap-2">
        <p className="demo-burbuja demo-cliente">{PREGUNTA}</p>
        {activo && (
          <p className="demo-burbuja demo-asistente" aria-live="polite">
            {/* Para lectores de pantalla va la frase completa; la animación es solo visual */}
            <span aria-hidden="true">{RESPUESTA.slice(0, letras)}</span>
            <span className="sr-only">{RESPUESTA}</span>
          </p>
        )}
      </div>
      <div className="demo-pie">
        {!activo ? (
          <button type="button" className="demo-boton" onClick={() => setActivo(true)}>
            Responder con IA
          </button>
        ) : (
          <button
            type="button"
            className="demo-enlace"
            disabled={!termino}
            onClick={() => {
              setActivo(false)
              setLetras(0)
            }}
          >
            Repetir
          </button>
        )}
      </div>
    </Marco>
  )
}
