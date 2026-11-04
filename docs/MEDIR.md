# Medir qué trae clientes (sin cookies ni rastreadores)

Creado el 2026-11-02 (estudio de la web: `Empresa NEXUS/4 Estudios/2026-11-02-estudio-web-NODRA.md`).

La página promete "no usa cookies ni rastreadores de publicidad". Por eso se mide de 3 formas que no siguen a nadie:

## 1. El primer mensaje de WhatsApp dice de dónde vino
Cada botón de la portada abre WhatsApp con un mensaje distinto (`MENSAJES` en `src/Marco.tsx`). Al recibir un
mensaje, anotar en `Empresa NEXUS/3 Marketing/Planes y guiones/contactos-diarios.csv` la columna "canal" según esta
tabla:

| El mensaje empieza con… | Botón (dónde está) | Anotar como |
|---|---|---|
| "Hola NODRA, vi su página y quiero saber qué le sirve a mi negocio." | Primera pantalla (arriba) | web-inicio |
| "Hola NODRA, vi los precios y quiero una propuesta para mi negocio." | Sección "Cuánto cuesta" | web-precios |
| "Hola Danny, vi tu página y quiero hablar de mi negocio." | "Quién está detrás de NODRA" | web-danny |
| "Hola NODRA, tengo una pregunta: …" | Preguntas frecuentes | web-preguntas |
| "Hola NODRA, así funciona mi negocio hoy: …" | Cierre de la página (botón y número) | web-cierre |
| "Hola NODRA, me interesa el asistente con inteligencia artificial…" | Tarjeta de IA (en preparación) | web-ia |
| "Hola NODRA, vi la página de páginas web y quiero una para mi negocio." | Página /paginas-web-ibague | web-paginas |
| "Hola NODRA, vi la página de tiendas virtuales y quiero vender en línea." | Página /tienda-virtual-ibague | web-tienda |
| "Hola NODRA, tengo un negocio y quiero saber qué me sirve." | Encabezado y páginas internas | web-general |
La persona puede borrar el mensaje antes de enviarlo: entonces anotar "desconocido". Es una pista, no una cuenta exacta.

## 2. Contador de visitas (Cloudflare Web Analytics)
dash.cloudflare.com → Observability → Analytics → Web analytics → nodrasoft.com. Cuenta visitas sin cookies.
Para saber qué publicación trae gente, compartir el enlace con `?ref=`: `nodrasoft.com/?ref=tiktok`,
`nodrasoft.com/?ref=grupo-ibague`, etc.

## 3. Search Console
Qué buscan en Google las personas que llegan (por ejemplo, "páginas web ibagué") y cuántas veces sale NODRA.

## Revisión
Cada domingo (5 minutos): mensajes por botón, visitas, búsquedas. A las 4 semanas, decidir qué repetir o cambiar.
Si un botón no trae a nadie en un mes, moverlo o cambiar su texto.
