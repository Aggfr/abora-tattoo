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
    'meta.title': 'Estudio de tatuajes en Lanzarote | Abora Tattoo – Costa Teguise',
    'meta.description': 'Abora Tattoo, estudio de tatuajes en Costa Teguise, Lanzarote. Realismo, fineline, tradicional, black work y japonés. Pide cita con nuestros tatuadores.',
    'ld.description': "Estudio de tatuajes en Costa Teguise, Lanzarote. Realismo, fineline, tradicional americano, black work, dotwork y japonés.",

    'nav.aria': 'Principal',
    'nav.home': 'Abora Tattoo – Inicio',
    'nav.artists': 'Tatuadores',
    'nav.gallery': 'Galería',
    'nav.contact': 'Pide cita',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',

    'whatsapp.aria': "Escríbenos por WhatsApp",
    'whatsapp.label': "WhatsApp",
    'whatsapp.message': "¡Hola Abora Tattoo! Me gustaría pedir información para hacerme un tatuaje.",
    'notFound.title': "Página no encontrada | Abora Tattoo",
    'notFound.heading': "Esta página no existe",
    'notFound.text': "Puede que el enlace esté mal escrito o que la página se haya movido. Como un tatuaje que aún no hemos hecho… todavía.",
    'notFound.home': "Volver al inicio",
    'notFound.book': "Pide cita",

    'hero.subtitle': 'Estudio de tatuajes en Costa Teguise, Lanzarote',
    'hero.video': 'Busto clásico de mármol con grafitis que se agrieta y se recompone',

    'values.aria': 'Nuestros valores',
    'values.culture.title': 'Cultura',
    'values.culture.text': 'Honramos las tradiciones del tatuaje mientras fomentamos un estudio diverso y creativo.',
    'values.excellence.title': 'Excelencia',
    'values.excellence.text': 'Buscamos el máximo nivel tanto en la calidad artística como en la experiencia del cliente.',
    'values.inspiration.title': 'Inspiración',
    'values.inspiration.text': 'Creamos un ambiente creativo que motiva tanto a los artistas como a los clientes.',


    'team.title': 'Conoce a nuestro equipo',
    'team.text': "Cuatro tatuadores, cuatro formas de entender la tinta. Cada artista de nuestro estudio en Costa Teguise domina su estilo y trabaja contigo el diseño, desde la primera idea hasta la última línea.",
    'team.kevin.aria': 'Kevin – ver ficha',
    'team.kevin.alt': 'Tatuador trabajando en el estudio',
    'team.kevin.style': 'Dotwork y anime',
    'team.kevin.bio': "Punto a punto, Kevin construye sombras y texturas con una paciencia infinita. Especialista en dotwork y en llevar a la piel personajes y escenas del anime.",
    'team.abian.aria': 'Abian Trujillo – ver ficha',
    'team.abian.alt': 'Tatuador de Abora Tattoo',
    'team.abian.style': 'Realismo',
    'team.abian.bio': "Retratos, animales y escenas con un detalle que parece fotografía. Abian trabaja el realismo cuidando cada luz, cada sombra y cada matiz.",
    'team.german.aria': 'German aka Farru – ver ficha',
    'team.german.alt': 'Tatuador con gafas trabajando',
    'team.german.style': 'Tradicional americano',
    'team.german.bio': "Líneas firmes, colores sólidos y diseños que nunca pasan de moda. Farru trae a Lanzarote el tradicional americano con todo su carácter.",
    'team.daniela.aria': 'Daniela Bryon – ver ficha',
    'team.daniela.alt': 'Tatuadora de Abora Tattoo',
    'team.daniela.style': 'Tradicional americano y japonés',
    'team.daniela.bio': "Del tradicional americano al japonés: flores, koi, dragones y piezas grandes pensadas para fluir con tu cuerpo.",
    'team.new.aria': "Alex – ver ficha",
    'team.new.alt': "Alex, tatuador de realismo",
    'team.new.name': "Alex",
    'team.new.style': "Realismo",
    'team.new.bio': "Realismo en negro y gris de contraste suave y gran profundidad. Le apasionan las estatuas clásicas, la mitología y el micro-realismo: piezas llenas de detalle, pensadas para encajar en tu anatomía.",

    'gallery.title': 'Galería de tatuajes',
    'gallery.text': "Una selección de trabajos reales hechos en nuestro estudio de Lanzarote: realismo, fineline, black work, tradicional y japonés. Inspírate y cuéntanos qué quieres llevar en la piel.",
    'gallery.alt01': "Manos y antebrazos con tatuajes tradicionales, entre ellos un ancla",
    'gallery.alt02': "Tatuaje de calaveras en línea negra en la pierna",
    'gallery.alt03': "Tatuajes realistas de retratos en el brazo",
    'gallery.alt04': "Tatuador trabajando en un brazo completo en el estudio",
    'gallery.alt05': "Torso y brazos cubiertos de tatuajes tradicionales en negro",
    'gallery.alt06': "Interior del estudio Abora Tattoo con un gran mural de grafiti",
    'gallery.alt07': "Piernas con tatuajes tradicionales en color",
    'gallery.alt08': "Tatuaje en negro de un rostro de mujer en la mano",
    'gallery.alt09': "Tatuaje de un ojo con alambre de espino en la mano",
    'gallery.alt10': "Piernas tatuadas sobre fondo naranja",
    'gallery.alt11': "Brazos con tatuajes tradicionales en color y un dragón",
    'gallery.button': 'Ver más trabajos',

    // Página de la galería (galeria.html)
    'galleryPage.title': "Galería de tatuajes | Abora Tattoo – Lanzarote",
    'galleryPage.description': "Galería de tatuajes de Abora Tattoo en Costa Teguise, Lanzarote: realismo, fineline, tradicional, japonés y más. Filtra por estilo.",
    'galleryPage.h1': "Galería de tatuajes de Abora Tattoo en Lanzarote",
    'galleryPage.filterTitle': "Filtrar por estilo",
    'galleryPage.all': "Todos",
    'galleryPage.realism': "Realismo",
    'galleryPage.anime': "Anime",
    'galleryPage.fineline': "Fineline",
    'galleryPage.traditional': "Tradicional",
    'galleryPage.japanese': "Japonés",
    'galleryPage.others': "Otros",
    'galleryPage.empty': "Muy pronto añadiremos trabajos de este estilo.",

    'story.eyebrow': 'Nuestra historia',
    'story.body': "Abora era el dios del sol para los antiguos canarios. De esa luz nace nuestro nombre y nuestra forma de trabajar: un estudio de tatuajes en Costa Teguise, Lanzarote, donde se encuentran el arte, la cultura de la isla y el respeto por la tradición del tatuaje. Cada proyecto empieza con una conversación. Escuchamos tu idea, la convertimos en un diseño único y la tatuamos con los más altos estándares de higiene y calidad. Tanto si es tu primer tatuaje como si vienes a completar una pieza grande, aquí te vas a sentir como en casa. Recibimos a gente de toda la isla, de Arrecife a Playa Blanca, y a quienes nos visitan y quieren llevarse un pedazo de Lanzarote en la piel.",
    'story.alt': 'Los tatuadores de Abora Tattoo',

    'contact.title': '¡Conectemos y creemos algo juntos!',
    'contact.text': "¿Tienes una idea en mente? Cuéntanos el estilo, el tamaño y la zona, y te responderemos con una propuesta y una cita en nuestro estudio de Costa Teguise.",
    'form.name': 'Nombre',
    'form.email': 'Email',
    'form.style': 'Estilo',
    'form.color': 'Preferencia de color',
    'form.size': 'Tamaño',
    'form.area': 'Zona del cuerpo',
    'form.slot': 'Franja horaria preferida',
    'form.message': 'Cuéntanos más sobre tu tatuaje y qué día te gustaría venir',
    'form.submit': 'Enviar mensaje',
    'form.sending': 'Enviando…',
    'form.errorSummary': "Revisa los campos marcados en rojo.",
    'error.name': "Escribe tu nombre.",
    'error.emailEmpty': "Escribe tu email.",
    'error.emailInvalid': "Escribe un email válido, por ejemplo nombre@email.com.",
    'error.style': "Elige un estilo.",
    'error.color': "Elige una preferencia de color.",
    'error.size': "Elige un tamaño aproximado.",
    'error.area': "Elige la zona del cuerpo.",
    'error.slot': "Elige una franja horaria.",
    'form.success': '¡Gracias! Hemos recibido tu solicitud y te responderemos pronto.',
    'form.error': 'Lo sentimos, algo ha fallado. Inténtalo de nuevo o escríbenos a',

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
    'visit.text': "Ven a conocer el estudio, ver nuestros trabajos y hablar de tu próximo tatuaje. Estamos en Costa Teguise, a pocos minutos de Arrecife y del aeropuerto de Lanzarote.",
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
    'meta.title': 'Tattoo Studio in Lanzarote | Abora Tattoo – Costa Teguise',
    'meta.description': 'Abora Tattoo, tattoo studio in Costa Teguise, Lanzarote. Realism, fineline, traditional, black work and Japanese styles. Book your appointment with our artists.',
    'ld.description': "Tattoo studio in Costa Teguise, Lanzarote. Realism, fineline, American traditional, black work, dotwork and Japanese.",

    'nav.aria': 'Main',
    'nav.home': 'Abora Tattoo – Home',
    'nav.artists': 'Tattoo Artists',
    'nav.gallery': 'Tattoo Gallery',
    'nav.contact': 'Book now',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',

    'whatsapp.aria': "Message us on WhatsApp",
    'whatsapp.label': "WhatsApp",
    'whatsapp.message': "Hi Abora Tattoo! I'd like some information about getting a tattoo.",
    'notFound.title': "Page not found | Abora Tattoo",
    'notFound.heading': "This page doesn't exist",
    'notFound.text': "The link may be mistyped or the page may have moved. Like a tattoo we haven't done… yet.",
    'notFound.home': "Back to home",
    'notFound.book': "Book now",

    'hero.subtitle': 'Tattoo studio in Costa Teguise, Lanzarote',
    'hero.video': 'Classic marble bust with graffiti that cracks apart and comes back together',

    'values.aria': 'Our values',
    'values.culture.title': 'Culture',
    'values.culture.text': 'We honor tattooing traditions while fostering a diverse and creative studio.',
    'values.excellence.title': 'Excellence',
    'values.excellence.text': 'Striving for the highest standards in both artistic quality and client experience.',
    'values.inspiration.title': 'Inspiration',
    'values.inspiration.text': 'Fostering a creative environment that motivates both artists and clients.',


    'team.title': 'Meet our team',
    'team.text': "Four artists, four ways of understanding ink. Each tattooer at our Costa Teguise studio masters their own style and works on the design with you, from the first idea to the last line.",
    'team.kevin.aria': 'Kevin – view profile',
    'team.kevin.alt': 'Tattoo artist working in the studio',
    'team.kevin.style': 'Dotwork & anime',
    'team.kevin.bio': "Dot by dot, Kevin builds shading and texture with endless patience. A specialist in dotwork and in bringing anime characters and scenes to life on skin.",
    'team.abian.aria': 'Abian Trujillo – view profile',
    'team.abian.alt': 'Abora Tattoo artist',
    'team.abian.style': 'Realism',
    'team.abian.bio': "Portraits, animals and scenes with photographic detail. Abian approaches realism with care for every light, every shadow and every nuance.",
    'team.german.aria': 'German aka Farru – view profile',
    'team.german.alt': 'Tattoo artist with glasses at work',
    'team.german.style': 'American traditional',
    'team.german.bio': "Bold lines, solid colors and designs that never go out of style. Farru brings American traditional to Lanzarote with all its character.",
    'team.daniela.aria': 'Daniela Bryon – view profile',
    'team.daniela.alt': 'Abora Tattoo artist',
    'team.daniela.style': 'American traditional & Japanese',
    'team.daniela.bio': "From American traditional to Japanese: flowers, koi, dragons and large pieces designed to flow with your body.",
    'team.new.aria': "Alex – view profile",
    'team.new.alt': "Alex, realism tattoo artist",
    'team.new.name': "Alex",
    'team.new.style': "Realism",
    'team.new.bio': "Black and grey realism with soft contrast and real depth. Classical statues, mythology and micro-realism are his passion: detailed pieces designed to fit your anatomy.",

    'gallery.title': 'Tattoo Gallery',
    'gallery.text': "A selection of real work done at our Lanzarote studio: realism, fineline, black work, traditional and Japanese. Get inspired and tell us what you want to wear on your skin.",
    'gallery.alt01': "Hands and forearms with traditional tattoos, including an anchor",
    'gallery.alt02': "Black linework skull tattoo on the leg",
    'gallery.alt03': "Realistic portrait tattoos on the arm",
    'gallery.alt04': "Tattoo artist working on a full sleeve at the studio",
    'gallery.alt05': "Torso and arms covered in black traditional tattoos",
    'gallery.alt06': "Inside the Abora Tattoo studio, with a large graffiti mural",
    'gallery.alt07': "Legs with colorful traditional tattoos",
    'gallery.alt08': "Black tattoo of a woman's face on the hand",
    'gallery.alt09': "Eye and barbed-wire tattoo on the hand",
    'gallery.alt10': "Tattooed legs against an orange background",
    'gallery.alt11': "Arms with colorful traditional tattoos and a dragon",
    'gallery.button': 'See more work',

    // Página de la galería (galeria.html)
    'galleryPage.title': "Tattoo Gallery | Abora Tattoo – Lanzarote",
    'galleryPage.description': "Abora Tattoo's gallery in Costa Teguise, Lanzarote: realism, fineline, traditional, Japanese and more. Filter by style.",
    'galleryPage.h1': "Abora Tattoo gallery in Lanzarote",
    'galleryPage.filterTitle': "Filter by style",
    'galleryPage.all': "All",
    'galleryPage.realism': "Realism",
    'galleryPage.anime': "Anime",
    'galleryPage.fineline': "Fineline",
    'galleryPage.traditional': "Traditional",
    'galleryPage.japanese': "Japanese",
    'galleryPage.others': "Others",
    'galleryPage.empty': "Work in this style is coming soon.",

    'story.eyebrow': 'Our Story',
    'story.body': "Abora was the sun god of the ancient Canary Islanders. Our name, and the way we work, are born from that light: a tattoo studio in Costa Teguise, Lanzarote, where art, island culture and respect for the tattoo tradition come together. Every project starts with a conversation. We listen to your idea, turn it into a one-of-a-kind design and tattoo it to the highest standards of hygiene and quality. Whether it is your first tattoo or you are coming to finish a large piece, you will feel at home here. We welcome people from all over the island, from Arrecife to Playa Blanca, as well as visitors who want to take a piece of Lanzarote home on their skin.",
    'story.alt': 'The Abora Tattoo artists',

    'contact.title': "Let's Connect and Build Together!",
    'contact.text': "Have an idea in mind? Tell us the style, size and placement, and we will get back to you with a proposal and an appointment at our Costa Teguise studio.",
    'form.name': 'Name',
    'form.email': 'Mail',
    'form.style': 'Style',
    'form.color': 'Select color preference',
    'form.size': 'Size',
    'form.area': 'Body area',
    'form.slot': 'Pick preferred time slot',
    'form.message': "Tell us more about your tattoo and which day you'd like to come in",
    'form.submit': 'Send message',
    'form.sending': 'Sending…',
    'form.errorSummary': "Please check the fields marked in red.",
    'error.name': "Please enter your name.",
    'error.emailEmpty': "Please enter your email.",
    'error.emailInvalid': "Please enter a valid email, e.g. name@email.com.",
    'error.style': "Please choose a style.",
    'error.color': "Please choose a color preference.",
    'error.size': "Please choose an approximate size.",
    'error.area': "Please choose the body area.",
    'error.slot': "Please choose a time slot.",
    'form.success': "Thanks! We've received your request and will get back to you soon.",
    'form.error': 'Sorry, something went wrong. Please try again or write to',

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
    'visit.text': "Come and see the studio, check out our work and talk about your next tattoo. We are in Costa Teguise, just a few minutes from Arrecife and Lanzarote airport.",
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

/* Devuelve el texto de una clave en el idioma de la página */
function t(key) {
  const lang = document.documentElement.lang in TRANSLATIONS ? document.documentElement.lang : DEFAULT_LANG;
  return TRANSLATIONS[lang][key] ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
}

/* Aplica los textos de un idioma a la página.
   Las páginas ya vienen escritas en su idioma (castellano en /, inglés en /en/),
   así que esto solo asegura que todo coincide y avisa al resto del código. */
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
  // Cada página puede tener su propio título (atributo data-title-key en <body>)
  document.title = dict[document.body.dataset.titleKey || 'meta.title'];

  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

/* Compatibilidad con enlaces antiguos y con el dominio .com:
   ?lang=en (o entrar por un dominio .com) lleva a la versión /en/;
   ?lang=es lleva a la versión en castellano. Usa el enlace del selector ES/EN. */
function redirectIfOtherLanguageRequested() {
  const param = new URLSearchParams(window.location.search).get('lang');
  const current = document.documentElement.lang;
  let wanted = param in TRANSLATIONS ? param : null;
  if (!wanted && window.location.hostname.endsWith('.com')) wanted = 'en';
  if (!wanted || wanted === current) return false;
  const link = document.querySelector(`.lang-switch__btn[data-lang="${wanted}"]`);
  if (!link) return false;
  window.location.replace(link.href + window.location.hash);
  return true;
}

function initLanguage() {
  if (redirectIfOtherLanguageRequested()) return;
  setLanguage(document.documentElement.lang);
}
