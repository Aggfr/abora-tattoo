/* =========================================================
   Abora Tattoo — traducciones (ES / EN)
   ---------------------------------------------------------
   Cada texto de la web tiene una clave (data-i18n="clave" en el HTML).
   Para cambiar un texto, edítalo aquí en los dos idiomas.

   Atributos que se traducen:
     data-i18n             → el texto del elemento
     data-i18n-placeholder → el placeholder de un campo
     data-i18n-aria        → el aria-label (lectores de pantalla)
     data-i18n-alt         → el texto alternativo de una imagen
     data-i18n-content     → el content de una <meta>
   ========================================================= */

const TRANSLATIONS = {
  es: {
    'meta.title': 'Abora Tattoo',
    'meta.description': 'Abora Tattoo – Estudio de tatuajes en Costa Teguise, Lanzarote.',

    'nav.aria': 'Principal',
    'nav.home': 'Abora Tattoo – Inicio',
    'nav.artists': 'Tatuadores',
    'nav.gallery': 'Galería',
    'nav.contact': 'Contacto',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',

    'hero.video': 'Busto clásico de mármol con grafitis que se agrieta y se recompone',

    'values.aria': 'Nuestros valores',
    'values.culture.title': 'Cultura',
    'values.culture.text': 'Honramos las tradiciones del tatuaje mientras fomentamos un estudio diverso y creativo.',
    'values.excellence.title': 'Excelencia',
    'values.excellence.text': 'Buscamos el máximo nivel tanto en la calidad artística como en la experiencia del cliente.',
    'values.inspiration.title': 'Inspiración',
    'values.inspiration.text': 'Creamos un ambiente creativo que motiva tanto a los artistas como a los clientes.',

    // Textos de relleno (sustitúyelos por los reales)
    'placeholder.long': 'Descubre una colección de diseños de tatuaje únicos que reflejan creatividad, técnica e inspiración. Cada pieza muestra la pasión y la visión que hay detrás de nuestro oficio.',
    'placeholder.bio': 'Descubre una colección de diseños de tatuaje únicos que reflejan creatividad, técnica e inspiración. Cada pieza muestra nuestra pasión.',

    'team.title': 'Conoce a nuestro equipo',
    'team.kevin.aria': 'Kevin – ver ficha',
    'team.kevin.alt': 'Tatuador trabajando en el estudio',
    'team.kevin.style': 'Dotwork y anime',
    'team.abian.aria': 'Abian Trujillo – ver ficha',
    'team.abian.alt': 'Tatuador de Abora Tattoo',
    'team.abian.style': 'Realismo',
    'team.german.aria': 'German aka Farru – ver ficha',
    'team.german.alt': 'Tatuador con gafas trabajando',
    'team.german.style': 'Tradicional americano',
    'team.daniela.aria': 'Daniela Bryon – ver ficha',
    'team.daniela.alt': 'Tatuadora de Abora Tattoo',
    'team.daniela.style': 'Tradicional americano y japonés',

    'gallery.title': 'Galería de tatuajes',
    'gallery.alt': 'Tatuaje',
    'gallery.button': 'Ir a la galería',

    'story.eyebrow': 'Nuestra historia',
    'story.body': 'Descubre una colección de diseños de tatuaje únicos que reflejan creatividad, técnica e inspiración. Cada pieza muestra la pasión y la visión que hay detrás de nuestro oficio. Descubre una colección de diseños de tatuaje únicos que reflejan creatividad, técnica e inspiración. Cada pieza muestra la pasión y la visión que hay detrás de nuestro oficio. Descubre una colección de diseños de tatuaje únicos que reflejan creatividad, técnica e inspiración.',
    'story.alt': 'Los tatuadores de Abora Tattoo',

    'contact.title': '¡Conectemos y creemos algo juntos!',
    'form.name': 'Nombre',
    'form.email': 'Email',
    'form.style': 'Estilo',
    'form.color': 'Preferencia de color',
    'form.size': 'Tamaño',
    'form.area': 'Zona del cuerpo',
    'form.slot': 'Franja horaria preferida',
    'form.message': 'Cuéntanos más sobre tu tatuaje',
    'form.submit': 'Enviar mensaje',
    'form.sending': 'Enviando…',
    'form.invalid': 'Rellena tu nombre, un email válido y el estilo.',
    'form.success': '¡Gracias! Hemos recibido tu solicitud y te responderemos pronto.',
    'form.error': 'Lo sentimos, algo ha fallado. Inténtalo de nuevo o escríbenos a',
    'form.mailtoOpened': '¡Gracias! Se abrirá tu app de correo para enviar la solicitud.',

    'style.realism': 'Realismo',
    'style.traditional': 'Tradicional',
    'style.blackwork': 'Black work',
    'style.fineline': 'Fineline',
    'style.japanese': 'Japonés',
    'color.blackgrey': 'Negro y gris',
    'color.color': 'Color',
    'color.unsure': 'Aún no lo sé',
    'size.small': 'Pequeño (< 5 cm)',
    'size.medium': 'Mediano (5–15 cm)',
    'size.large': 'Grande (> 15 cm)',
    'area.arm': 'Brazo',
    'area.forearm': 'Antebrazo',
    'area.hand': 'Mano',
    'area.leg': 'Pierna',
    'area.back': 'Espalda',
    'area.chest': 'Pecho',
    'area.neck': 'Cuello',
    'area.other': 'Otra',
    'slot.morning': 'Mañana (9:00 – 13:00)',
    'slot.afternoon': 'Tarde (13:00 – 17:00)',
    'slot.evening': 'Noche (17:00 – 21:00)',
    'slot.saturday': 'Sábado (con cita previa)',

    'visit.eyebrow': '¿Dónde estamos?',
    'visit.title': 'Ven a visitarnos',
    'visit.weekdays': 'Lunes - Viernes',
    'visit.weekdaysHours': '9:00 - 21:00',
    'visit.saturday': 'Sábado',
    'visit.byAppointment': 'Con cita previa',
    'visit.sunday': 'Domingo',
    'visit.closed': 'Cerrado',
    'visit.mapAria': 'Ver Abora Tattoo en Google Maps',
    'visit.mapAlt': 'Mapa de Costa Teguise con la ubicación del estudio',

    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.location': 'Lanzarote, España',
    'footer.rights': 'Todos los derechos reservados',
  },

  en: {
    'meta.title': 'Abora Tattoo',
    'meta.description': 'Abora Tattoo – Tattoo studio in Costa Teguise, Lanzarote.',

    'nav.aria': 'Main',
    'nav.home': 'Abora Tattoo – Home',
    'nav.artists': 'Tattoo Artists',
    'nav.gallery': 'Tattoo Gallery',
    'nav.contact': 'Contact',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',

    'hero.video': 'Classic marble bust with graffiti that cracks apart and comes back together',

    'values.aria': 'Our values',
    'values.culture.title': 'Culture',
    'values.culture.text': 'We honor tattooing traditions while fostering a diverse and creative studio.',
    'values.excellence.title': 'Excellence',
    'values.excellence.text': 'Striving for the highest standards in both artistic quality and client experience.',
    'values.inspiration.title': 'Inspiration',
    'values.inspiration.text': 'Fostering a creative environment that motivates both artists and clients.',

    // Placeholder texts (replace with the real ones)
    'placeholder.long': 'Explore a curated collection of unique tattoo designs and artwork that showcase creativity, skill, and inspiration. Each piece reflects the passion and vision behind our craft.',
    'placeholder.bio': 'Explore a curated collection of unique tattoo designs and artwork that showcase creativity, skill, and inspiration. Each piece reflects our passion.',

    'team.title': 'Meet our team',
    'team.kevin.aria': 'Kevin – view profile',
    'team.kevin.alt': 'Tattoo artist working in the studio',
    'team.kevin.style': 'Dotwork & anime',
    'team.abian.aria': 'Abian Trujillo – view profile',
    'team.abian.alt': 'Abora Tattoo artist',
    'team.abian.style': 'Realism',
    'team.german.aria': 'German aka Farru – view profile',
    'team.german.alt': 'Tattoo artist with glasses at work',
    'team.german.style': 'American traditional',
    'team.daniela.aria': 'Daniela Bryon – view profile',
    'team.daniela.alt': 'Abora Tattoo artist',
    'team.daniela.style': 'American traditional & Japanese',

    'gallery.title': 'Tattoo Gallery',
    'gallery.alt': 'Tattoo',
    'gallery.button': 'Go to gallery',

    'story.eyebrow': 'Our Story',
    'story.body': 'Explore a curated collection of unique tattoo designs and artwork that showcase creativity, skill, and inspiration. Each piece reflects the passion and vision behind our craft. Explore a curated collection of unique tattoo designs and artwork that showcase creativity, skill, and inspiration. Each piece reflects the passion and vision behind our craft. Explore a curated collection of unique tattoo designs and artwork that showcase creativity, skill, and inspiration.',
    'story.alt': 'The Abora Tattoo artists',

    'contact.title': "Let's Connect and Build Together!",
    'form.name': 'Name',
    'form.email': 'Mail',
    'form.style': 'Style',
    'form.color': 'Select color preference',
    'form.size': 'Size',
    'form.area': 'Body area',
    'form.slot': 'Pick preferred time slot',
    'form.message': 'Tell us more about your tattoo',
    'form.submit': 'Send message',
    'form.sending': 'Sending…',
    'form.invalid': 'Please fill in your name, a valid email and a style.',
    'form.success': "Thanks! We've received your request and will get back to you soon.",
    'form.error': 'Sorry, something went wrong. Please try again or write to',
    'form.mailtoOpened': 'Thanks! Your email app should open to send the request.',

    'style.realism': 'Realism tattoo',
    'style.traditional': 'Traditional',
    'style.blackwork': 'Black work',
    'style.fineline': 'Fineline',
    'style.japanese': 'Japanese',
    'color.blackgrey': 'Black & grey',
    'color.color': 'Color',
    'color.unsure': 'Not sure yet',
    'size.small': 'Small (< 5 cm)',
    'size.medium': 'Medium (5–15 cm)',
    'size.large': 'Large (> 15 cm)',
    'area.arm': 'Arm',
    'area.forearm': 'Forearm',
    'area.hand': 'Hand',
    'area.leg': 'Leg',
    'area.back': 'Back',
    'area.chest': 'Chest',
    'area.neck': 'Neck',
    'area.other': 'Other',
    'slot.morning': 'Morning (9am – 1pm)',
    'slot.afternoon': 'Afternoon (1pm – 5pm)',
    'slot.evening': 'Evening (5pm – 9pm)',
    'slot.saturday': 'Saturday (by appointment)',

    'visit.eyebrow': 'Where are we?',
    'visit.title': 'Come to visit us',
    'visit.weekdays': 'Monday - Friday',
    'visit.weekdaysHours': '9am - 9pm',
    'visit.saturday': 'Saturday',
    'visit.byAppointment': 'By appointment',
    'visit.sunday': 'Sunday',
    'visit.closed': 'Closed',
    'visit.mapAria': 'View Abora Tattoo on Google Maps',
    'visit.mapAlt': 'Map of Costa Teguise showing the studio location',

    'footer.services': 'Services',
    'footer.contact': 'Contact us',
    'footer.location': 'Lanzarote, Spain',
    'footer.rights': 'All rights reserved',
  },
};

const DEFAULT_LANG = 'es';
const LANG_STORAGE_KEY = 'abora-lang';

/* Devuelve el texto de una clave en el idioma actual */
function t(key) {
  const lang = document.documentElement.lang in TRANSLATIONS ? document.documentElement.lang : DEFAULT_LANG;
  return TRANSLATIONS[lang][key] ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
}

/* Aplica un idioma a toda la página */
function setLanguage(lang) {
  if (!(lang in TRANSLATIONS)) lang = DEFAULT_LANG;
  const dict = TRANSLATIONS[lang];
  document.documentElement.lang = lang;

  const apply = (attr, setter) => {
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      const value = dict[el.getAttribute(attr)];
      if (value !== undefined) setter(el, value);
    });
  };
  apply('data-i18n', (el, v) => { el.textContent = v; });
  apply('data-i18n-placeholder', (el, v) => { el.setAttribute('placeholder', v); });
  apply('data-i18n-aria', (el, v) => { el.setAttribute('aria-label', v); });
  apply('data-i18n-alt', (el, v) => { el.setAttribute('alt', v); });
  apply('data-i18n-content', (el, v) => { el.setAttribute('content', v); });
  document.title = dict['meta.title'];

  // Estado de los botones ES / EN
  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  // Recordar la elección para la próxima visita
  try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (e) { /* sin almacenamiento */ }

  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

function initLanguage() {
  let saved = null;
  try { saved = localStorage.getItem(LANG_STORAGE_KEY); } catch (e) { /* sin almacenamiento */ }
  setLanguage(saved || DEFAULT_LANG);

  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}
