/* =========================================================
   build.js — genera la versión en inglés de la web (/en/)
   ---------------------------------------------------------
   Uso (desde la carpeta del proyecto):   node build.js

   Toma las páginas en castellano (index, galería, aviso legal, privacidad) y los textos
   de js/i18n.js, y crea en/index.html y en/galeria.html con todo el texto
   ya escrito en inglés, para que Google y las IAs lo lean directamente.

   También genera:
     - sitemap.xml  → lista de páginas para Google/Bing (con sus versiones de idioma)
     - robots.txt   → permite la entrada a buscadores y rastreadores de IA
     - llms.txt     → resumen del estudio para las IAs (datos sacados de i18n.js)

   ⚠️  No edites los archivos de /en/ a mano: se sobrescriben cada vez.
       Cambia el castellano (HTML) o los textos (js/i18n.js) y vuelve a
       ejecutar `node build.js` antes de hacer commit.
   ========================================================= */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://aboratattoo.es';        // dominio principal
const PAGES = ['index.html', 'galeria.html', 'aviso-legal.html', 'privacidad.html']; // páginas que se traducen
const SITEMAP_PAGES = ['index.html', 'galeria.html'];  // las legales llevan noindex y no van al sitemap
// Páginas cuyo contenido largo en inglés está escrito aparte (no en i18n.js):
// el bloque <!-- i18n:legal-body --> se sustituye por el archivo indicado.
const BODY_EN = { 'aviso-legal.html': 'legal/aviso-legal.en.html', 'privacidad.html': 'legal/privacidad.en.html' };
const OUT_DIR = 'en';

// ---------- Cargar los textos de js/i18n.js ----------
const sandbox = {};
vm.runInNewContext(fs.readFileSync('js/i18n.js', 'utf8') + '\nthis.T = TRANSLATIONS;', sandbox);
const ES = sandbox.T.es;
const EN = sandbox.T.en;

const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => escText(s).replace(/"/g, '&quot;');

const problems = [];
const tr = (key, file) => {
  if (!(key in EN)) { problems.push(`${file}: falta la clave "${key}" en inglés`); return null; }
  return EN[key];
};

// URLs públicas de cada página (para hreflang y canonical)
const url = (lang, page) => {
  const p = page === 'index.html' ? '' : page;
  return lang === 'en' ? `${SITE}/en/${p}` : `${SITE}/${p}`;
};
const alternatesBlock = (lang, page) => [
  '  <!-- i18n:alternates (generado por build.js) -->',
  `  <link rel="canonical" href="${url(lang, page)}">`,
  `  <link rel="alternate" hreflang="es" href="${url('es', page)}">`,
  `  <link rel="alternate" hreflang="en" href="${url('en', page)}">`,
  `  <link rel="alternate" hreflang="x-default" href="${url('es', page)}">`,
  '  <!-- /i18n:alternates -->',
].join('\n');
const setAlternates = (html, lang, page) =>
  html.replace(/  <!-- i18n:alternates[\s\S]*?<!-- \/i18n:alternates -->/, alternatesBlock(lang, page));

// Datos estructurados FAQ (FAQPage) a partir de las claves faq.qN / faq.aN de i18n.js.
// Se escriben entre los marcadores <!-- i18n:faq-ld --> de cada página que los tenga.
function faqLd(dict) {
  const nums = Object.keys(dict).map((k) => (k.match(/^faq\.q(\d+)$/) || [])[1]).filter(Boolean).map(Number).sort((a, b) => a - b);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: nums.map((n) => ({
      '@type': 'Question',
      name: dict[`faq.q${n}`],
      acceptedAnswer: { '@type': 'Answer', text: dict[`faq.a${n}`] },
    })),
  };
  const json = JSON.stringify(data, null, 2).replace(/</g, '\\u003c').split('\n').map((l) => '  ' + l).join('\n');
  return `  <!-- i18n:faq-ld (generado por build.js a partir de js/i18n.js) -->\n  <script type="application/ld+json">\n${json}\n  </script>\n  <!-- /i18n:faq-ld -->`;
}
const setFaqLd = (html, dict) =>
  html.replace(/  <!-- i18n:faq-ld[\s\S]*?<!-- \/i18n:faq-ld -->/, faqLd(dict));

const ATTRS = { 'data-i18n-placeholder': 'placeholder', 'data-i18n-aria': 'aria-label', 'data-i18n-alt': 'alt', 'data-i18n-content': 'content' };

function translate(html, page) {
  // 1. Idioma del documento
  html = html.replace('<html lang="es">', '<html lang="en">');

  // 2. Textos: <etiqueta ... data-i18n="clave">texto</etiqueta>
  html = html.replace(/<(\w+)((?:\s[^>]*?)?\sdata-i18n="([^"]+)"[^>]*)>([^<]*)<\/\1>/g, (m, tag, attrs, key, text) => {
    const v = tr(key, page);
    return v === null ? m : `<${tag}${attrs}>${escText(v)}</${tag}>`;
  });

  // 3. Atributos traducibles (placeholder, aria-label, alt, content)
  html = html.replace(/<[a-zA-Z][^>]*>/g, (tag) => {
    for (const [dataAttr, attr] of Object.entries(ATTRS)) {
      const m = tag.match(new RegExp(`\\s${dataAttr}="([^"]+)"`));
      if (!m) continue;
      const v = tr(m[1], page);
      if (v === null) continue;
      const re = new RegExp(`(\\s${attr}=")[^"]*(")`);
      tag = re.test(tag) ? tag.replace(re, `$1${escAttr(v)}$2`) : tag.replace(/(\/?>)$/, ` ${attr}="${escAttr(v)}"$1`);
    }
    return tag;
  });

  // 4. Título de la pestaña
  const titleKey = (html.match(/<body[^>]*data-title-key="([^"]+)"/) || [])[1] || 'meta.title';
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escText(EN[titleKey])}</title>`);

  // 5. Datos estructurados: descripción en inglés
  html = html.split(JSON.stringify(ES['ld.description'])).join(JSON.stringify(EN['ld.description']));

  // 6. Rutas: los recursos están un nivel por encima (../); las páginas traducidas se quedan en /en/
  html = html.replace(/(\s(?:href|src|poster)=")([^"]+)"/g, (m, pre, ref) => {
    if (/^(https?:|mailto:|tel:|#|\/|data:|\.\.\/)/.test(ref)) return m;
    const file = ref.split(/[?#]/)[0];
    if (PAGES.includes(file)) return m;
    return `${pre}../${ref}"`;
  });

  // 7. Selector de idioma: ES → página en castellano, EN (actual) → esta página
  html = html.replace(/<a class="lang-switch__btn" data-lang="(es|en)" href="[^"]*"([^>]*)>/g, (m, lang, rest) => {
    rest = rest.replace(/\saria-current="true"/, '');
    const href = lang === 'es' ? `../${page}` : page;
    return `<a class="lang-switch__btn" data-lang="${lang}" href="${href}"${rest}${lang === 'en' ? ' aria-current="true"' : ''}>`;
  });

  // 7b. Contenido largo en inglés escrito aparte (páginas legales)
  if (BODY_EN[page]) {
    const body = fs.readFileSync(BODY_EN[page], 'utf8').replace(/^<!--[\s\S]*?-->\n/, '');
    const re = /(<!-- i18n:legal-body[^>]*-->\n)[\s\S]*?(\n\s*<!-- \/i18n:legal-body -->)/;
    if (!re.test(html)) problems.push(`${page}: falta el bloque i18n:legal-body`);
    html = html.replace(re, (m, a, b) => a + body.replace(/\n$/, '') + b);
  }

  // 8. Aviso de archivo generado + hreflang/canonical
  html = html.replace('<!DOCTYPE html>', '<!DOCTYPE html>\n<!-- ⚠️ ARCHIVO GENERADO por build.js a partir de ../' + page + ' y js/i18n.js — no lo edites a mano -->');
  return setFaqLd(setAlternates(html, 'en', page), EN);
}

// ---------- Generar ----------
fs.mkdirSync(OUT_DIR, { recursive: true });
for (const page of PAGES) {
  let es = fs.readFileSync(page, 'utf8');
  // Comprobar que el castellano del HTML coincide con i18n.js (aviso, no error)
  es.replace(/<(\w+)(?:\s[^>]*?)?\sdata-i18n="([^"]+)"[^>]*>([^<]*)<\/\1>/g, (m, tag, key, text) => {
    const plain = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    if (key in ES && ES[key] !== plain) problems.push(`${page}: el texto de "${key}" en el HTML no coincide con i18n.js`);
    return m;
  });
  // Actualizar hreflang/canonical también en la versión en castellano
  const esUpdated = setFaqLd(setAlternates(es, 'es', page), ES);
  if (esUpdated !== es) fs.writeFileSync(page, esUpdated);

  const en = translate(esUpdated, page);
  fs.writeFileSync(path.join(OUT_DIR, page), en);
  console.log(`✔ ${OUT_DIR}/${page}`);
}

// ---------- sitemap.xml ----------
const today = new Date().toISOString().slice(0, 10);
const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>',
  '<!-- Generado por build.js -->',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
for (const page of SITEMAP_PAGES) for (const lang of ['es', 'en']) {
  sitemap.push('  <url>',
    `    <loc>${url(lang, page)}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <xhtml:link rel="alternate" hreflang="es" href="${url('es', page)}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${url('en', page)}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('es', page)}"/>`,
    '  </url>');
}
sitemap.push('</urlset>', '');
fs.writeFileSync('sitemap.xml', sitemap.join('\n'));
console.log('✔ sitemap.xml');

// ---------- robots.txt ----------
// Se permite todo. Los rastreadores de IA se nombran a propósito para dejar clara la intención.
const AI_BOTS = [
  ['OpenAI (ChatGPT)', ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User']],
  ['Anthropic (Claude)', ['ClaudeBot', 'Claude-SearchBot', 'Claude-User']],
  ['Perplexity', ['PerplexityBot', 'Perplexity-User']],
  ['Google (Gemini / AI Overviews)', ['Google-Extended']],
  ['Apple (Apple Intelligence)', ['Applebot', 'Applebot-Extended']],
  ['Microsoft (Bing / Copilot)', ['Bingbot']],
  ['Common Crawl (lo usan muchos modelos)', ['CCBot']],
];
const robots = ['# robots.txt — Abora Tattoo (generado por build.js)',
  '# Todos los buscadores y asistentes de IA pueden leer la web.', '',
  'User-agent: *', 'Allow: /', ''];
for (const [who, bots] of AI_BOTS) {
  robots.push(`# ${who}`);
  for (const bot of bots) robots.push(`User-agent: ${bot}`);
  robots.push('Allow: /', '');
}
robots.push(`Sitemap: ${SITE}/sitemap.xml`, '');
fs.writeFileSync('robots.txt', robots.join('\n'));
console.log('✔ robots.txt');

// ---------- llms.txt ----------
// Formato propuesto en llmstxt.org: Markdown con un resumen y enlaces clave.
const faq = (dict) => Object.keys(dict).map((k) => (k.match(/^faq\.q(\d+)$/) || [])[1]).filter(Boolean)
  .map(Number).sort((a, b) => a - b).map((n) => `- **${dict[`faq.q${n}`]}** ${dict[`faq.a${n}`]}`);
const TEAM = [['Kevin', 'kevin'], ['Abian Trujillo', 'abian'], ['German aka Farru', 'german'], ['Daniela Bryon', 'daniela'], [EN['team.new.name'], 'new']];
const llms = [
  '# Abora Tattoo',
  '',
  `> ${EN['ld.description']} Five resident artists, walk-ins welcome, English and Spanish spoken.`,
  `> ${ES['ld.description']} Cinco tatuadores, se aceptan walk-ins, se habla castellano e inglés.`,
  '',
  '## Key facts',
  '',
  '- Name: Abora Tattoo (tattoo studio / estudio de tatuajes)',
  '- Address: C. la Rosa, 10, 35508 Costa Teguise, Lanzarote, Las Palmas, Spain',
  '- Opening hours: Monday–Friday 10:00–20:00 · Saturday 10:00–13:00 · Sunday closed',
  '- Phone / WhatsApp: +34 648 43 99 77 (also via the booking form on the website)',
  '- Google Maps: https://maps.app.goo.gl/VyJC3PeeKh3jGMiT8 (rated 5.0 by 100+ customers)',
  '- Instagram: https://www.instagram.com/abora.tattoo.gallery.sl/',
  '- Prices: priced per piece, minimum €70, free quote · cash only',
  '- Booking: walk-ins accepted; appointments usually within a few days; deposit €20–50 (deducted, refundable with 24 h notice)',
  '- Languages: Spanish and English',
  '- Name origin: Abora was the sun god of the ancient Canary Islanders',
  '',
  '## Artists',
  '',
  ...TEAM.map(([name, key]) => `- ${name}: ${EN[`team.${key}.style`]}`),
  '',
  '## Pages',
  '',
  `- [Home (English)](${url('en', 'index.html')}): studio, team, values, booking form, location and FAQ`,
  `- [Gallery (English)](${url('en', 'galeria.html')}): tattoo work filterable by style`,
  `- [Inicio (castellano)](${url('es', 'index.html')}): estudio, equipo, formulario de cita, ubicación y preguntas frecuentes`,
  `- [Galería (castellano)](${url('es', 'galeria.html')}): trabajos filtrados por estilo`,
  '',
  '## FAQ (English)',
  '',
  ...faq(EN),
  '',
  '## Preguntas frecuentes (castellano)',
  '',
  ...faq(ES),
  '',
];
fs.writeFileSync('llms.txt', llms.join('\n'));
console.log('✔ llms.txt');

if (problems.length) {
  console.log('\n⚠️  Revisa esto:');
  problems.forEach((p) => console.log('   - ' + p));
  process.exitCode = 1;
} else {
  console.log('\nTodo correcto: versión en inglés, sitemap, robots y llms.txt actualizados.');
}
