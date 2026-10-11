# Historial: página de NEXUS

Qué se hizo cada día, en palabras sencillas. Lo más nuevo arriba.

## 2026-10-10
- **Escudo 3D en la portada** (`src/Escudo3D.tsx`): el escudo se inclina siguiendo el mouse o el dedo, un brillo recorre su superficie y seis nodos cian y verde le giran alrededor por un anillo de luz. Si nadie lo mueve, flota solo. Idea sacada de un video de TikTok; Danny pidió ponerlo solo en esta página y no en NEXUS Agenda, para que agendar siga siendo rápido.
- **Mapa en el celular:** ahora muestra el mundo completo. Antes se acercaba a América y Danny notó que así no se veía "abierta al mundo".
- Lighthouse local igual antes y después (81 en el servidor de prueba, que no comprime los archivos): el efecto no le quita velocidad.

## 2026-10-09 (tarde): la página deja de verse plana
- Mapa mundial interactivo: Ibagué en el centro y conexiones que viajan a todo el mundo. Los puntos se encienden con el mouse y al tocar el mapa sale una conexión hasta ese lugar.
- El celular de la clienta en la sección de Johana ahora pasa solo por tres pantallas (inicio, agendar y galería), con botón de pausa.
- Botón "Ver la app en vivo" que abre los servicios reales de Johana.
- Nueva sección "NEXUS Agenda: Próximamente", con un enlace para que avisen por WhatsApp.
- Enlaces nuevos: "Mira un ejemplo real" (de Citas y reservas a Johana) y "OWASP Top 10" (a la página oficial).

## 2026-10-09
- Auditoría completa (seguridad, accesibilidad y textos). Seguridad sin problemas: encabezados activos, sin secretos en GitHub, 0 vulnerabilidades.
- Los enlaces dentro de los textos ahora siempre están subrayados, y el botón "Escríbenos" tiene un borde visible.
- Textos más concretos: la frase principal dice qué hacen tus clientes con la app; se cambió "altos estándares de seguridad" por "reglas de acceso estrictas y conexión cifrada" y "servidor propio" por "espacio propio en la nube".
- Se arregló la protección de la ficha para Google en `scripts/prerender.mjs` (la barra invertida no estaba haciendo nada).
- Se creó esta carpeta `docs/` (manual de reparación, decisiones e historial).
- Publicado y verificado en vivo: los 8 encabezados de seguridad activos y los textos nuevos visibles.

## 2026-10-08
- El README ganó la guía de cambios comunes y cómo publicar.

## 2026-10-07
- Etiqueta de verificación de Google Search Console.

## 2026-10-06
- Se creó y publicó la página en nexus-tech-co.web.app.
- Capturas de la app de Johana, aviso de privacidad (sin cookies), lema "Tu negocio, conectado y seguro.", servicio de apps con inteligencia artificial y SEO local en Ibagué.
