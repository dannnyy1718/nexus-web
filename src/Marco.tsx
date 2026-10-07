// Piezas compartidas por todas las páginas: contacto, encabezado y pie de página

export const LEMA = 'Tu negocio, conectado y seguro.'

export const WHATSAPP_NUMERO = '573133655136'
export const WHATSAPP_VISIBLE = '313 365 5136'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  'Hola NEXUS, quiero una app para mi negocio.',
)}`

export function IconoWhatsApp({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.16-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.06.89.9-2.98-.2-.31a8.2 8.2 0 1 1 6.86 3.73Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.73 2.73 0 0 0-.85 2.03 4.74 4.74 0 0 0 1 2.52 10.84 10.84 0 0 0 4.15 3.67c1.54.67 2.15.72 2.92.6.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.1-.22-.17-.47-.29Z" />
    </svg>
  )
}

export function BotonWhatsApp({ grande = false }: { grande?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-full bg-verde font-semibold text-abismo shadow-[0_0_30px_-6px_var(--color-verde)] transition-colors hover:bg-[#7ff0b1] ${
        grande ? 'px-8 py-4 text-lg' : 'px-6 py-3'
      }`}
    >
      <IconoWhatsApp className={grande ? 'size-6' : 'size-5'} />
      Escribir por WhatsApp
    </a>
  )
}

export function Encabezado() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-noche focus:px-4 focus:py-2"
      >
        Ir al contenido
      </a>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-8">
        <a href="/" className="flex items-center gap-3 md:gap-4" aria-label="NEXUS, inicio">
          <img
            src="/img/escudo-mini.webp"
            alt=""
            width={64}
            height={64}
            className="size-12 rounded-xl shadow-[0_0_24px_-4px_var(--color-cian)] md:size-16"
          />
          <span className="marca marca-brillo text-2xl md:text-[2rem]">NEXUS</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-linea px-4 py-2 text-sm font-semibold transition-colors hover:border-verde hover:text-verde"
        >
          <IconoWhatsApp className="size-4" />
          <span className="hidden sm:inline">Escríbenos</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </header>
    </>
  )
}

export function Pie() {
  return (
    <footer className="mx-auto grid max-w-6xl gap-4 border-t border-linea px-4 py-8 text-sm text-bruma md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:px-8">
      <span className="flex items-center gap-3">
        <img src="/img/escudo-mini.webp" alt="" width={36} height={36} className="rounded-lg" loading="lazy" />
        <span className="grid leading-tight">
          <span className="marca text-lg">NEXUS</span>
          <span className="text-niebla">{LEMA}</span>
        </span>
      </span>
      <p>
        Esta página no usa cookies ni rastreadores.{' '}
        <a href="/privacidad" className="font-semibold text-cian underline-offset-4 hover:underline">
          Aviso de privacidad
        </a>
      </p>
      <span>© {new Date().getFullYear()} NEXUS. Software a la medida.</span>
    </footer>
  )
}
