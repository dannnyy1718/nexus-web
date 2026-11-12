import { useEffect, useState } from 'react'

// Ejemplos pequeños que se pueden tocar en "Qué hacemos" (pedido de Danny, 2026-10-21: menos texto,
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

// Página web (estudio de la web 2026-11-02): lo que más busca un negocio de Ibagué es "página web". El ejemplo muestra
// lo que la gente hace en la página de un negocio: ver si está abierto, cómo llegar y escribirle.
const ACCIONES_PAGINA = {
  llegar: 'Se abre Google Maps con la ruta hasta tu local.',
  escribir: 'Se abre WhatsApp con el mensaje ya escrito para ti.',
} as const

export function DemoPagina() {
  const [accion, setAccion] = useState<keyof typeof ACCIONES_PAGINA | null>(null)
  return (
    <Marco titulo="Tu página">
      <div className="demo-fila">
        <span className="min-w-0">
          <span className="block truncate text-niebla">Panadería del Barrio</span>
          <span className="text-verde">Abierto hoy · 6 a. m. a 8 p. m.</span>
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="demo-boton" aria-pressed={accion === 'llegar'} onClick={() => setAccion('llegar')}>
          Cómo llegar
        </button>
        <button type="button" className="demo-boton" aria-pressed={accion === 'escribir'} onClick={() => setAccion('escribir')}>
          Escribir
        </button>
      </div>
      <p className="demo-pie" aria-live="polite">
        {accion ? ACCIONES_PAGINA[accion] : 'Toca un botón, como lo haría tu cliente.'}
      </p>
    </Marco>
  )
}

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

// Los 3 pasos de "Cómo funciona" en /app-de-citas-ibague (2026-11-12). Esa página tenía 4 secciones seguidas de solo
// texto (lección del video "Tu web no es una Biblia": con puro texto nadie pasa de la 3.ª sección). Mismo estilo que
// los ejemplos de la portada: HTML y CSS, sin imágenes. "Estudio Luna" y sus precios son inventados (dice "Ejemplo").
const serviciosEjemplo = [
  { nombre: 'Manicure tradicional', precio: 25000 },
  { nombre: 'Pestañas pelo a pelo', precio: 80000 },
]

export function DemoPasoPagina() {
  return (
    <Marco titulo="Tu página">
      <p className="font-semibold text-niebla">Estudio Luna</p>
      <ul className="mt-2 grid gap-2">
        {serviciosEjemplo.map((s) => (
          <li key={s.nombre} className="demo-fila">
            <span className="min-w-0 truncate">{s.nombre}</span>
            <span className="text-bruma">{pesos(s.precio)}</span>
          </li>
        ))}
      </ul>
      <p className="demo-pie text-bruma">Lunes a sábado · 9 a. m. a 7 p. m.</p>
    </Marco>
  )
}

export function DemoPasoEnlace() {
  return (
    <Marco titulo="Tu WhatsApp">
      <div className="grid gap-2">
        <p className="demo-burbuja demo-cliente">Ya puedes agendar tu cita desde el celular</p>
        {/* No es un enlace de verdad: "estudio-luna" no existe. Se ve como enlace, pero es solo texto.
            <wbr /> deja partir la línea después de la barra y no en mitad de una palabra. */}
        <p className="demo-burbuja demo-cliente text-cian underline underline-offset-4">
          agenda.nodrasoft.com/<wbr />estudio-luna
        </p>
      </div>
      <p className="demo-pie text-bruma">También en Instagram o con tu código QR.</p>
    </Marco>
  )
}

export function DemoPasoConfirmar() {
  const [confirmada, setConfirmada] = useState(false)
  return (
    <Marco titulo="Tu panel">
      <div className="demo-fila">
        <span className="min-w-0">
          <span className="block truncate text-niebla">Nueva cita · Manicure</span>
          <span className="text-bruma">Martes · 10:30 a. m.</span>
        </span>
      </div>
      <div className="demo-pie">
        <span aria-live="polite">
          {confirmada ? <span className="demo-listo">Cita confirmada</span> : <span>Por confirmar</span>}
        </span>
        {/* Un solo botón que cambia de texto: si se cambiara por otro, el teclado perdería el foco */}
        <button
          type="button"
          className={confirmada ? 'demo-enlace' : 'demo-boton'}
          onClick={() => setConfirmada((c) => !c)}
        >
          {confirmada ? 'Deshacer' : 'Confirmar'}
        </button>
      </div>
    </Marco>
  )
}
