/* =========================================================
   build.js — genera la versión en inglés de la web (/en/)
   ---------------------------------------------------------
   Uso (desde la carpeta del proyecto):   node build.js

   Toma las páginas en castellano (index.html, galeria.html) y los textos
   de js/i18n.js, y crea en/index.html y en/galeria.html con todo el texto
   ya escrito en inglés, para que Google y las IAs lo lean directamente.

   ⚠️  No edites los archivos de /en/ a mano: se sobrescriben cada vez.
       Cambia el castellano (HTML) o los textos (js/i18n.js) y vuelve a
       ejecutar `node build.js` antes de hacer commit.
   ========================================================= */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://aboratattoo.es';        // dominio principal
const PAGES = ['index.html', 'galeria.html']; // páginas que se traducen
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

  // 8. Aviso de archivo generado + hreflang/canonical
  html = html.replace('<!DOCTYPE html>', '<!DOCTYPE html>\n<!-- ⚠️ ARCHIVO GENERADO por build.js a partir de ../' + page + ' y js/i18n.js — no lo edites a mano -->');
  return setAlternates(html, 'en', page);
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
  const esUpdated = setAlternates(es, 'es', page);
  if (esUpdated !== es) fs.writeFileSync(page, esUpdated);

  const en = translate(esUpdated, page);
  fs.writeFileSync(path.join(OUT_DIR, page), en);
  console.log(`✔ ${OUT_DIR}/${page}`);
}

if (problems.length) {
  console.log('\n⚠️  Revisa esto:');
  problems.forEach((p) => console.log('   - ' + p));
  process.exitCode = 1;
} else {
  console.log('\nTodo correcto: versión en inglés actualizada.');
}
