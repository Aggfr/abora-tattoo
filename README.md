# Abora Tattoo

Web del estudio de tatuajes **Abora Tattoo** en Costa Teguise, Lanzarote.
Hecha con HTML, CSS y JavaScript, sin librerías ni servidor. Diseño original en Figma.

## Estructura

```
abora-tattoo/
├── index.html          → página principal
├── galeria.html        → galería completa con filtro por estilo
├── css/
│   └── styles.css      → estilos (variables de color y tipografía arriba del todo)
├── js/
│   ├── i18n.js         → TODOS los textos de la web en castellano y en inglés
│   └── main.js         → interacciones: menú móvil, vídeo del hero, tarjetas del equipo, formulario
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
- **Equipo:** las fotos giran (flip) y muestran la ficha del tatuador. Ratón: al pasar por encima.
  Móvil: al tocar. Teclado: Enter o espacio.
- **Formulario de cita:** se envía con [Web3Forms](https://web3forms.com) y llega a
  abora.tattoo.art@gmail.com. Incluye un campo trampa anti-spam.

## Galería (galeria.html)

Cada foto es un `<li class="work" data-style="...">`. El valor de `data-style` decide en qué filtro aparece:
`realism`, `anime`, `fineline`, `traditional`, `japanese` u `others`.
Para añadir un trabajo, copia un `<li>`, cambia la imagen y su estilo, y añade su descripción
(`data-i18n-alt`) en `js/i18n.js`. Ahora mismo las fotos son provisionales (las de la portada).

## Añadir o cambiar un tatuador

1. Guarda la foto en `assets/img/` (ej. `team-6.jpg`, vertical, ~1000 px de ancho).
2. Copia un bloque `<article class="team-card ...">` en `index.html` y cambia foto, nombre y claves.
3. Añade sus textos (`team.xxx.name`, `.style`, `.bio`, `.alt`, `.aria`) en `js/i18n.js`.

## Seguridad

- `index.html` incluye una política de seguridad (CSP): solo se cargan recursos de la propia web,
  Google Fonts, y el formulario solo puede enviar a Web3Forms. Si añades un recurso externo
  nuevo (otra fuente, un mapa incrustado, analítica…), hay que añadir su dominio a esa regla.
- No uses estilos escritos dentro del HTML (`style="..."`): la CSP los bloquea. Usa clases en `styles.css`.

## Trabajar en local

Abre la carpeta en VS Code y usa la extensión **Live Server** (o abre `index.html` en el navegador).

## Guardar y publicar cambios

```bash
git add . && git commit -m "Describe el cambio" && git push
```

El repositorio está en GitHub (`Aggfr/abora-tattoo`). La web se publicará con GitHub Pages
y el dominio **aboratattoo.es** (pendiente de configurar).

## Pendiente

- Aviso legal, política de privacidad y casilla de aceptación en el formulario.
- Alojar las fuentes en local (ahora se cargan desde Google Fonts).
- Al publicar: añadir `url` e `image` a los datos estructurados, etiquetas Open Graph,
  `sitemap.xml`, `robots.txt`, alta en Google Search Console y limitar la clave de Web3Forms al dominio.
