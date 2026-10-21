import { useEffect, useRef } from 'react'

// "Cómo trabajamos" en una línea de 4 nodos (como el circuito del logo). Cada nodo se enciende cuando
// el paso llega a la pantalla. El texto siempre está visible: solo cambia la luz del nodo, así que sin
// JavaScript o con "reducir movimiento" la sección se lee igual.

const pasos = [
  { titulo: 'Conversamos', texto: 'Nos cuentas por WhatsApp qué necesitas. Sin costo.' },
  {
    titulo: 'Propuesta clara',
    texto: 'Qué incluye, cuánto cuesta y cuándo se entrega, con los costos externos (dominio, tiendas de apps) dichos antes.',
  },
  { titulo: 'La construimos', texto: 'Pagas el 50 % para arrancar y ves los avances.' },
  { titulo: 'La entregamos', texto: 'Pagas el otro 50 % con la app funcionando. 6 meses de garantía sobre lo acordado.' },
]

export default function Pasos() {
  const lista = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const el = lista.current
    if (!el) return
    const items = [...el.querySelectorAll('li')]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((li) => (li.dataset.visto = ''))
      return
    }
    // Se enciende una sola vez por paso y se deja de observar: no queda nada corriendo
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue
          ;(e.target as HTMLElement).dataset.visto = ''
          obs.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -30% 0px' },
    )
    items.forEach((li) => obs.observe(li))
    return () => obs.disconnect()
  }, [])

  return (
    <ol ref={lista} className="pasos mt-10">
      {pasos.map((p, i) => (
        <li key={p.titulo} className="paso">
          <span className="paso-nodo" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="text-base font-semibold md:text-lg">{p.titulo}</h3>
          <p className="mt-1 text-[0.98rem] text-bruma">{p.texto}</p>
        </li>
      ))}
    </ol>
  )
}
