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
`js/main.js`, los datos estructurados del `<head>` de `index.html` y la sección *Key facts* de `build.js`
— que genera `llms.txt`) y ejecuta `node build.js`.

## Estructura

```
abora-tattoo/
├── index.html          → página principal
├── galeria.html        → galería completa con filtro por estilo
├── 404.html            → página de error (GitHub Pages la usa sola si una dirección no existe)
├── en/                 → ⚙️ versión en inglés GENERADA por build.js (no editar a mano)
│   ├── index.html
│   └── galeria.html
├── build.js            → script que genera /en/, sitemap.xml, robots.txt y llms.txt
├── sitemap.xml         → ⚙️ generado por build.js (lista de páginas para Google/Bing)
├── robots.txt          → ⚙️ generado por build.js (permite buscadores y rastreadores de IA)
├── llms.txt            → ⚙️ generado por build.js (resumen del estudio para las IAs)
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
En el HTML, cada texto tiene una clave, por ejemplo `data-i18n="team.title"`.

1. Cambia el texto en `js/i18n.js` (en castellano **y** en inglés).
2. Cambia también el castellano dentro de `index.html` / `galeria.html` (es lo que lee Google en `/`).
3. Ejecuta **`node build.js`** para regenerar la versión en inglés (`/en/`).

**Preguntas frecuentes:** cada pregunta es `faq.qN` y su respuesta `faq.aN` en `i18n.js`.
Para añadir una, crea `faq.q13` / `faq.a13` en los dos idiomas, copia un `<details class="faq__item">`
en `index.html` y ejecuta `node build.js`: los datos estructurados FAQ para Google se generan solos.

`build.js` avisa si el castellano del HTML no coincide con `i18n.js` o si falta alguna traducción.

## Idiomas (castellano e inglés)

La web tiene **dos versiones reales**, cada una con su dirección:

| Idioma | Dirección | Archivos |
|---|---|---|
| Castellano (por defecto) | `aboratattoo.es/` y `/galeria.html` | `index.html`, `galeria.html` (se editan a mano) |
| Inglés | `aboratattoo.es/en/` y `/en/galeria.html` | `en/…` (los **genera** `build.js`) |

- Así Google y las IAs leen el inglés directamente (clave para búsquedas como *"tattoo studio Lanzarote"*).
- El selector **ES / EN** es un enlace a la misma página en el otro idioma.
- Cada página indica su versión en el otro idioma (`hreflang`) y su dirección oficial (`canonical`);
  `build.js` escribe esas etiquetas en las 4 páginas (dominio configurado en `SITE` dentro de `build.js`).
- Compatibilidad: `?lang=en` en la dirección, o entrar por un dominio `.com`, lleva a `/en/`.
- La página 404 está solo en castellano, con enlace a `/en/`.

**Cómo funciona `build.js`:** copia cada página en castellano y le cambia los textos y atributos
marcados con `data-i18n…` por los de `i18n.js`, pone el título y la descripción en inglés,
traduce la descripción de los datos estructurados (`ld.description`), genera los datos FAQ
(entre los marcadores `i18n:faq-ld`, en castellano y en inglés), ajusta las rutas
(`../assets/...`) y el selector de idioma. Las páginas generadas avisan arriba de que no se editan a mano.

Además genera tres archivos para buscadores e IAs (no se editan a mano):

| Archivo | Para qué sirve |
|---|---|
| `sitemap.xml` | Lista las 4 páginas (castellano e inglés) con sus versiones de idioma, para Google y Bing. |
| `robots.txt` | Permite la entrada a todos los buscadores y, de forma explícita, a los rastreadores de IA (ChatGPT, Claude, Perplexity, Gemini, Apple, Bing/Copilot, Common Crawl). Indica dónde está el sitemap. |
| `llms.txt` | Resumen del estudio en Markdown para las IAs ([llmstxt.org](https://llmstxt.org)): datos clave, tatuadores, páginas y las preguntas frecuentes en los dos idiomas (sacadas de `i18n.js`). El email no se incluye a propósito (protección anti-bots). |

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
- **Preguntas frecuentes:** 12 preguntas desplegables (`<details>`, sin JavaScript) antes del pie,
  en castellano e inglés: precio (desde 70 €, por pieza, solo efectivo), walk-ins y citas, depósito
  (20–50 €, se descuenta y se devuelve cancelando con 24 h), vacaciones, playa/piscina, cuidados con el sol
  (second skin 10 €), diseño propio, cover-ups, estilos, menores (con consentimiento paterno en el estudio),
  idiomas y ubicación/aparcamiento. Pensadas para que Google y las IAs las citen.
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
node build.js
git add . && git commit -m "Describe el cambio" && git push
```

Ejecuta siempre `node build.js` antes del commit si has tocado HTML o textos,
para que la versión en inglés quede al día. Buena práctica: **un cambio = un commit**.

El repositorio está en GitHub (`Aggfr/abora-tattoo`). La web se publicará con GitHub Pages
y el dominio **aboratattoo.es** (pendiente de configurar).

## Revisión de calidad (2 oct 2026)

✅ Hecho: meta títulos y descripciones · datos estructurados (TattooParlor con precio mínimo y pago, y FAQPage) · favicon · textos alternativos ·
imágenes comprimidas (mapa en WebP) · carga optimizada · contraste de colores · responsive (móvil, tablet, ordenador) ·
página 404 · enlaces internos sin errores · formulario anti-spam y con validación · botón de WhatsApp ·
web bilingüe ES/EN con páginas reales en inglés (`/en/`, hreflang y canonical) · SEO local (Lanzarote, Costa Teguise).

## Pendiente

**Antes de publicar (obligatorio)**
- [ ] Aviso legal (faltan datos del titular: nombre o razón social, NIF y dirección fiscal).
- [ ] Política de privacidad.
- [ ] Casilla "He leído y acepto la política de privacidad" en el formulario.
- [ ] Aviso de cookies: **no hace falta** mientras la web no use cookies (sin Google Analytics ni píxeles).

**Al publicar con el dominio (aboratattoo.es + aboratattoo.com)**
- [ ] Activar GitHub Pages, archivo `CNAME` y DNS en Hostinger.
- [ ] Forzar HTTPS ("Enforce HTTPS" en GitHub Pages).
- [ ] `aboratattoo.com` → redirigir a `https://aboratattoo.es/en/` (en Hostinger).
- [x] `sitemap.xml` y `robots.txt` (generados por `build.js`; listos para cuando el dominio funcione).
- [ ] Enviar `https://aboratattoo.es/sitemap.xml` en Google Search Console y Bing Webmaster Tools.
- [ ] Etiquetas Open Graph (vista previa en WhatsApp/redes) y `canonical`.
- [ ] Añadir `url` e `image` a los datos estructurados.
- [ ] Google Search Console: alta de la web y envío del sitemap.
- [ ] Analítica sin cookies: Cloudflare Web Analytics (+ añadir su dominio a la CSP).
- [ ] Limitar la clave de Web3Forms al dominio.

**Optimización para IAs (GEO)**
- [x] Página en inglés real (`/en/`).
- [x] Sección de preguntas frecuentes (ES/EN) con datos estructurados FAQ.
- [ ] Textos más "citables" (idiomas, walk-ins, tiempos de cita, zonas de la isla).
- [x] `llms.txt` con un resumen del estudio y `robots.txt` abierto a los rastreadores de IA.
- [ ] Más datos estructurados: nota media de reseñas cuando las haya (idiomas, precio mínimo y pago ✅).
- [ ] Alta en Bing Webmaster Tools (ChatGPT se apoya en Bing).

**Fuera de la web**
- [ ] Ficha de Google Business Profile (business.google.com) — lo que más pesa para salir en Google Maps.
- [ ] Pedir reseñas a cada cliente (Google y TripAdvisor) mencionando Lanzarote / Costa Teguise.
- [ ] Aparecer en directorios de tatuajes, guías de Lanzarote y blogs de viajes, con el mismo nombre, dirección y teléfono.

**Contenido y mejoras**
- [ ] Fotos reales de la galería con su estilo (ahora son provisionales).
- [ ] Revisar las fichas de los tatuadores y los textos (higiene, distancias, etc.).
- [ ] Alojar las fuentes en local (ahora se cargan desde Google Fonts) y simplificar la CSP.
