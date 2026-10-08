# NEXUS — página web

> **Tu negocio, conectado y seguro.**

Página de **NEXUS**: software a la medida (apps móviles y web multiplataforma) y, próximamente, seguridad en la nube.

**En vivo:** https://nexus-tech-co.web.app

![Vista previa de NEXUS](public/og.jpg)

## Tecnologías

- React 19 + TypeScript + Vite
- Tailwind CSS 4
- Firebase Hosting
- Fuentes autoalojadas (Unbounded e Instrument Sans) e imágenes WebP

## Calidad

| Prueba | Resultado |
|---|---|
| Mozilla Observatory (seguridad) | **A+** (140/100, 12 de 12 pruebas) |
| Lighthouse celular | Rendimiento 98 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100 |
| Lighthouse computador | 100 · 100 · 100 · 100 |

Cómo se logra:

- **Política de seguridad de contenido (CSP) estricta**: el navegador solo ejecuta código del propio sitio. Por eso el HTML no tiene estilos ni scripts en línea.
- **HSTS, X-Frame-Options, Permissions-Policy** y demás encabezados en `firebase.json`.
- **HTML pre-renderizado** al compilar (`scripts/prerender.mjs`): la página se ve antes de que cargue el JavaScript.
- `lang="es"`, textos alternativos, foco visible con teclado y respeto por "reducir movimiento".

## Cómo correrla

```bash
npm install
npm run dev        # servidor local
npm run build      # compila y pre-renderiza en dist/
npx firebase deploy --only hosting
```

## Cómo hacer cambios comunes

| Quiero cambiar… | Archivo | Qué tocar |
|---|---|---|
| Número de WhatsApp | `src/Marco.tsx` | `WHATSAPP_NUMERO` (con 57) y `WHATSAPP_VISIBLE` |
| Mensaje que llega por WhatsApp | `src/Marco.tsx` | El texto dentro de `WHATSAPP_URL` |
| Lema | `src/Marco.tsx` | `LEMA` |
| Servicios | `src/App.tsx` | La lista `servicios` (y `hasOfferCatalog` en `src/negocio.ts` para Google) |
| Pasos de trabajo | `src/App.tsx` | La lista `pasos` |
| Preguntas frecuentes | `src/negocio.ts` | La lista `preguntas` (se muestran en la página y van a Google) |
| Ciudad o dirección del sitio | `src/negocio.ts` | `CIUDAD`, `DEPARTAMENTO`, `SITIO` |
| Aviso de privacidad | `src/Privacidad.tsx` | El texto |
| Páginas que Google debe leer | `public/sitemap.xml` | Agregar una `<url>` por página nueva |
| Imágenes | `public/img/` | Usar WebP; poner siempre texto alternativo (`alt`) |

Después de cada cambio:

1. `npm run dev` y revisar en el navegador (computador y celular).
2. `npm run build` (si falla, hay un error que corregir antes de publicar).
3. `npx firebase deploy --only hosting`.
4. Verificar en vivo en https://nexus-tech-co.web.app (no basta con "Deploy complete").
5. `git add` → `git commit -m "qué cambió y para qué"` → `git push`.

**Reglas que no se rompen:**

- Nada de `<script>` ni `style="..."` dentro del HTML: la CSP lo bloquea. Todo va en archivos propios.
- Nada cargado de otros servidores (fuentes, scripts, imágenes): se descarga y se sirve desde el sitio.
- Si algún día se agrega analítica o cookies, hay que poner el banner de consentimiento y actualizar el aviso de privacidad.

---

Hecho por Danny Javier Díaz · NEXUS
