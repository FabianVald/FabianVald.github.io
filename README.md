# Sitio personal: Fabian Valderrama

Sitio estático (HTML, CSS y JavaScript sin dependencias externas) para GitHub Pages.

- Español (por defecto): `index.html`
- Inglés: `en.html`

## Estructura

| Archivo | Uso |
|---|---|
| `index.html`, `en.html` | Contenido. Cualquier cambio de texto se hace en **ambos** archivos. |
| `style.css`, `script.js`, `init.js` | Estilos, interacción (filtros, animaciones, copiar correo) y marca `js`. |
| `src/` | Imágenes optimizadas (WebP). Los originales NO se versionan. |
| `og-image.png`, `favicon.*`, `apple-touch-icon.png` | Imagen para redes sociales e íconos. |
| `robots.txt`, `sitemap.xml` | Rastreo e indexación. |
| `404.html`, `.nojekyll` | Página de error y publicación sin Jekyll. |

## Publicación

1. Crear el repositorio público `FabianVald.github.io` (sin README inicial).
2. `git remote add origin https://github.com/FabianVald/FabianVald.github.io.git`
3. `git push -u origin publish:main` (la rama `publish` tiene historial limpio, sin las fotos originales)
4. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
5. Settings → Pages → activar **Enforce HTTPS**.

Autenticación: Git Credential Manager o un Personal Access Token con permiso mínimo (solo ese repo). Nunca se versionan tokens ni claves.

## Seguridad (resumen)

- Sin scripts ni estilos de terceros; sin CDN, fuentes externas ni formularios.
- Política CSP por `<meta>` (GitHub Pages no permite cabeceras propias): solo recursos del mismo origen.
- Enlaces externos con `rel="noopener noreferrer"` y política `referrer` restrictiva.
- Sin datos sensibles: no se publican teléfono, dirección ni referencias del CV.
- Limitación conocida: no se pueden enviar `X-Frame-Options`, `frame-ancestors` ni HSTS propios desde GitHub Pages.
- El correo es visible en texto (por decisión de diseño) y puede recibir spam.

## Después de publicar

1. Verificar `https://fabianvald.github.io/`, `/en.html`, `/robots.txt` y `/sitemap.xml`.
2. Google Search Console: agregar la propiedad y enviar `sitemap.xml`.
3. Bing Webmaster Tools: importar desde Search Console.
4. Probar la vista previa social (LinkedIn Post Inspector) y el rendimiento (PageSpeed Insights).
5. Enlazar el sitio desde LinkedIn, GitHub (perfil) y la firma de correo.
