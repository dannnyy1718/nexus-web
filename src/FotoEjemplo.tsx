// Fotos de ejemplo hechas con IA (Danny, 2026-11-04: ChatGPT y Gemini; originales en 3 Marketing/Imagenes/).
// Las usan /tienda-virtual-ibague y /paginas-web-ibague. Son personas inventadas: por eso dicen "Imagen de ejemplo" y nunca se presentan como clientes reales
// (Ley 1480 y regla 8.6 del manual). Comprimidas a .webp con ffmpeg (de ~2,5 MB a 28-84 KB) y con ancho y alto
// puestos para que la página no salte al cargar. Solo la de arriba carga de una vez; las demás, al bajar.
type Foto = { src: string; srcSet?: string; ancho: number; alto: number; alt: string; arriba?: boolean }
export default function FotoEjemplo({ src, srcSet, ancho, alto, alt, arriba = false }: Foto) {
  return (
    <figure className="relative overflow-hidden rounded-3xl border border-linea">
      <img
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? '(min-width: 896px) 832px, calc(100vw - 2rem)' : undefined}
        width={ancho}
        height={alto}
        alt={alt}
        loading={arriba ? 'eager' : 'lazy'}
        fetchPriority={arriba ? 'high' : undefined}
        decoding="async"
        className="block h-auto w-full"
      />
      <figcaption className="absolute bottom-3 right-3 rounded-full bg-abismo/85 px-3 py-0.5 text-xs text-niebla">
        Imagen de ejemplo
      </figcaption>
    </figure>
  )
}
