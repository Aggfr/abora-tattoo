# Abora Tattoo

Web del estudio de tatuajes **Abora Tattoo** en Costa Teguise, Lanzarote.
Hecha con HTML, CSS y JavaScript, sin librerías ni servidor. Diseño original en Figma.

## Datos del estudio

| Dato | Valor |
|---|---|
| Teléfono / WhatsApp | +34 699 847 802 |
| Email | abora.tattoo.art@gmail.com |
| Dirección | C. la Rosa, 10, 35508 Costa Teguise, Lanzarote, Las Palmas |
| Horario | Lunes a viernes 9:00–21:00 · Sábado con cita previa · Domingo cerrado |
| Instagram | https://www.instagram.com/abora.tattoo.gallery.sl/ |
| Repositorio | https://github.com/Aggfr/abora-tattoo |

Si cambia alguno, búscalo en **todos** los archivos (`index.html`, `galeria.html`, `404.html`,
`js/main.js` y los datos estructurados del `<head>` de `index.html`).

## Estructura

```
abora-tattoo/
├── index.html          → página principal
├── galeria.html        → galería completa con filtro por estilo
├── 404.html            → página de error (GitHub Pages la usa sola si una dirección no existe)
├── css/
│   └── styles.css      → estilos (variables de color y tipografía arriba del todo)
├── js/
│   ├── i18n.js         → TODOS los textos de la web en castellano y en inglés
│   └── main.js         → interacciones: menú, vídeo del hero, tarjetas, formulario, galería, WhatsApp
└── assets/
    ├── img/            → fotos (equipo, galería, historia, mapa, logo)
    ├── icons/          → iconos SVG
    ├── video/          → hero-scrub.mp4 (vídeo de la estatua)
    └── fonts/          → (vacía; para alojar las fuentes en local más adelante)
```

## Cambiar textos

Todos los textos están en **`js/i18n.js`**, cada uno en los dos idiomas (`es` y `en`).
En el HTML, cada texto tiene una clave, por ejemplo `data-i18n="team.title"`;
busca esa clave en `i18n.js` y cambia el texto ahí (en los dos idiomas).

El texto que aparece escrito dentro de `index.html` es el castellano por defecto:
si cambias un texto, cámbialo también en el HTML para que Google lo lea igual.

## Idiomas

- Por defecto la web se abre en **castellano**.
- El selector **ES / EN** del menú cambia toda la web y recuerda la elección.
- Con `?lang=en` en la dirección se abre directamente en inglés
  (lo usa el dominio `.com`, que redirige a `aboratattoo.es/?lang=en`).

## Funcionalidades

- **Hero:** el vídeo de la estatua avanza y retrocede con el scroll (`initHeroScrub` en `main.js`).
  El vídeo está codificado con todos los fotogramas completos para que no dé saltos.
  El círculo amarillo es un "sol" con degradado y brillo (Abora, dios del sol de los antiguos canarios).
  En móvil no hay círculo: título arriba y estatua debajo.
- **Equipo:** 5 tatuadores (Kevin, Abian, German, Daniela y Alex). Las fotos giran (flip) y muestran
  la ficha. Ratón: al pasar por encima. Móvil: al tocar. Teclado: Enter o espacio.
- **Galería:** botón "Ver más trabajos" → `galeria.html`, con filtro por estilo.
- **Formulario de cita:** se envía con [Web3Forms](https://web3forms.com) y llega a
  abora.tattoo.art@gmail.com (el email que recibe el estudio va siempre en castellano).
  Todos los campos son obligatorios salvo el mensaje; cada campo muestra su propio error.
  Incluye un campo trampa anti-spam (`botcheck`).
- **WhatsApp:** botón flotante abajo a la derecha con un mensaje inicial según el idioma
  (número en `initWhatsApp`, `main.js`).
- **Email protegido:** en el HTML el email del pie está partido (`data-user` / `data-domain`)
  y se monta con JavaScript, para que los bots no lo recopilen.
- **Página 404:** usa rutas desde la raíz (`/css/...`), así funciona en cualquier dirección
  con el dominio propio. Antes de conectar el dominio se vería sin estilos (normal).

## Galería (galeria.html)

Cada foto es un `<li class="work" data-style="...">`. El valor de `data-style` decide en qué filtro aparece:
`realism`, `anime`, `fineline`, `traditional`, `japanese` u `others`.
Para añadir un trabajo, copia un `<li>`, cambia la imagen, su estilo, `width`/`height` y el `alt`
(descripción en castellano), y añade la descripción en los dos idiomas (`data-i18n-alt`) en `js/i18n.js`. Ahora mismo las fotos son provisionales (las de la portada).

## Añadir o cambiar un tatuador

1. Guarda la foto en `assets/img/` (ej. `team-6.jpg`, vertical, ~1000 px de ancho).
2. Copia un bloque `<article class="team-card ...">` en `index.html` y cambia foto, nombre y claves.
3. Añade sus textos (`team.xxx.name`, `.style`, `.bio`, `.alt`, `.aria`) en `js/i18n.js`.

## Seguridad

- `index.html` incluye una política de seguridad (CSP): solo se cargan recursos de la propia web,
  Google Fonts, y el formulario solo puede enviar a Web3Forms. Si añades un recurso externo
  nuevo (otra fuente, un mapa incrustado, analítica…), hay que añadir su dominio a esa regla.
- No uses estilos escritos dentro del HTML (`style="..."`): la CSP los bloquea. Usa clases en `styles.css`.
- Formulario: campo trampa anti-spam + validación. Email del pie ocultado a los bots.
- Imágenes con `width`/`height` (sin saltos al cargar), descripciones (`alt`) en todas
  y colores de texto con contraste suficiente (≥ 4.5).

## Trabajar en local

Abre la carpeta en VS Code y usa la extensión **Live Server** (o abre `index.html` en el navegador).

## Guardar y publicar cambios

```bash
git add . && git commit -m "Describe el cambio" && git push
```

El repositorio está en GitHub (`Aggfr/abora-tattoo`). La web se publicará con GitHub Pages
y el dominio **aboratattoo.es** (pendiente de configurar).

## Revisión de calidad (2 oct 2026)

✅ Hecho: meta títulos y descripciones · datos estructurados (TattooParlor) · favicon · textos alternativos ·
imágenes comprimidas (mapa en WebP) · carga optimizada · contraste de colores · responsive (móvil, tablet, ordenador) ·
página 404 · enlaces internos sin errores · formulario anti-spam y con validación · botón de WhatsApp ·
web bilingüe ES/EN · SEO local (Lanzarote, Costa Teguise).

## Pendiente

**Antes de publicar (obligatorio)**
- [ ] Aviso legal (faltan datos del titular: nombre o razón social, NIF y dirección fiscal).
- [ ] Política de privacidad.
- [ ] Casilla "He leído y acepto la política de privacidad" en el formulario.
- [ ] Aviso de cookies: **no hace falta** mientras la web no use cookies (sin Google Analytics ni píxeles).

**Al publicar con el dominio (aboratattoo.es + aboratattoo.com)**
- [ ] Activar GitHub Pages, archivo `CNAME` y DNS en Hostinger.
- [ ] Forzar HTTPS ("Enforce HTTPS" en GitHub Pages).
- [ ] `aboratattoo.com` → redirigir a `https://aboratattoo.es/?lang=en` (en Hostinger).
- [ ] `sitemap.xml` y `robots.txt`.
- [ ] Etiquetas Open Graph (vista previa en WhatsApp/redes) y `canonical`.
- [ ] Añadir `url` e `image` a los datos estructurados.
- [ ] Google Search Console: alta de la web y envío del sitemap.
- [ ] Analítica sin cookies: Cloudflare Web Analytics (+ añadir su dominio a la CSP).
- [ ] Limitar la clave de Web3Forms al dominio.

**Fuera de la web**
- [ ] Ficha de Google Business Profile (business.google.com) — lo que más pesa para salir en Google Maps.

**Contenido y mejoras**
- [ ] Fotos reales de la galería con su estilo (ahora son provisionales).
- [ ] Revisar las fichas de los tatuadores y los textos (higiene, distancias, etc.).
- [ ] Alojar las fuentes en local (ahora se cargan desde Google Fonts) y simplificar la CSP.
