import { Encabezado, Pie } from './Marco'

export default function NoEncontrada() {
  return (
    <>
      <Encabezado />
      <main id="contenido" className="mx-auto max-w-3xl px-4 pb-24 pt-12 md:px-8 md:pt-20">
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">Esta página no existe</h1>
        <p className="mt-5 max-w-[34rem] text-lg text-bruma">
          Revisa la dirección o vuelve al inicio para ver qué hacemos.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full border border-linea px-6 py-3 font-semibold transition-colors hover:border-cian hover:text-cian"
        >
          Ir al inicio
        </a>
      </main>
      <Pie />
    </>
  )
}
