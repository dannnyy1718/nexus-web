# NEXUS — página web

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

---

Hecho por Danny Javier Díaz · NEXUS
