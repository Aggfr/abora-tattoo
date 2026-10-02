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

    // Reseñas de Google (nota y nº de reseñas: actualizar de vez en cuando)
    'reviews.title': "Lo que dicen nuestros clientes",
    'reviews.rating': "5,0 · 119 reseñas en Google",
    'reviews.starsAria': "Valoración de 5 sobre 5 estrellas",
    'reviews.r1.text': "Gracias por el tatuaje a juego que nos hicimos mi esposo y yo. Muy profesionales y con un acabado impecable. Atendieron nuestras peticiones a pesar de la barrera del idioma. ¡Muchas gracias! Los recomiendo al 100%.",
    'reviews.r1.note': "Reseña de Google · traducida del francés",
    'reviews.r2.text': "Me hice dos tatuajes con Daniela. Fue una experiencia increíble; fue muy dulce y amable. Los tatuajes quedaron exactamente como los quería. ¡Perfectos! ¡La recomiendo al 10000%! 🫶",
    'reviews.r2.note': "Reseña de Google",
    'reviews.r3.text': "Fui con mi pareja para su primer tattoo y un rediseño + un tattoo para mí, el trabajo lo realizó Kevin. Nos hizo la experiencia muy amena, muy buen chico y sobre todo un muy buen trabajo. Si volvemos a Lanzarote, ¡sin duda repetiremos!",
    'reviews.r3.note': "Reseña de Google",

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
    'slot.morning': 'Mañana (10:00 – 13:00)',
    'slot.afternoon': 'Tarde (13:00 – 17:00)',
    'slot.evening': 'Última hora (17:00 – 20:00)',
    'slot.saturday': 'Sábado (10:00 – 13:00)',

    'visit.eyebrow': '¿Dónde estamos?',
    'visit.title': 'Ven a visitarnos',
    'visit.text': "Ven a conocer el estudio, ver nuestros trabajos y hablar de tu próximo tatuaje. Estamos en Costa Teguise, a pocos minutos de Arrecife y del aeropuerto de Lanzarote.",
    'visit.weekdays': 'Lunes - Viernes',
    'visit.weekdaysHours': '10:00 - 20:00',
    'visit.saturday': 'Sábado',
    'visit.byAppointment': '10:00 - 13:00',
    'visit.sunday': 'Domingo',
    'visit.closed': 'Cerrado',
    'visit.mapAria': 'Ver Abora Tattoo en Google Maps',
    'visit.mapAlt': 'Mapa de Costa Teguise con la ubicación del estudio',

    // Preguntas frecuentes (también generan los datos estructurados FAQ con build.js)
    'faq.title': "Preguntas frecuentes",
    'faq.text': "Todo lo que necesitas saber antes de tatuarte en nuestro estudio de Costa Teguise, Lanzarote.",
    'faq.q1': "¿Cuánto cuesta un tatuaje en Abora Tattoo?",
    'faq.a1': "Cada tatuaje se presupuesta por pieza, según el tamaño, la zona del cuerpo y el nivel de detalle. El precio mínimo es de 70 €. Cuéntanos tu idea y te damos presupuesto sin compromiso. El pago es siempre en efectivo.",
    'faq.q2': "¿Necesito cita o puedo ir sin reservar?",
    'faq.a2': "Puedes venir sin cita: aceptamos walk-ins para todo tipo de tatuajes, según la disponibilidad de ese día. Si prefieres asegurarte tu hueco, reserva cita; normalmente tenemos disponibilidad en pocos días, aunque depende de cada tatuador.",
    'faq.q3': "¿Hay que dejar señal para reservar?",
    'faq.a3': "Sí. Para reservar pedimos un depósito de entre 20 y 50 €, que se descuenta del precio total del tatuaje. Si cancelas con al menos 24 horas de antelación, te lo devolvemos.",
    'faq.q4': "Estoy de vacaciones en Lanzarote, ¿puedo tatuarme?",
    'faq.a4': "Sí. Si vienes de vacaciones, te recomendamos tatuarte hacia el final de tu estancia: mientras el tatuaje cicatriza no conviene bañarse ni tomar el sol, así que podrás disfrutar antes de la playa.",
    'faq.q5': "¿Puedo ir a la playa o a la piscina después de tatuarme?",
    'faq.a5': "Durante unas dos semanas, mientras cicatriza, evita bañarte en el mar, la piscina o el jacuzzi y no expongas el tatuaje al sol directo. Un tatuaje recién hecho es una herida abierta: el agua puede infectarlo y el sol, apagar los colores.",
    'faq.q6': "¿Cómo cuido el tatuaje con el sol de Lanzarote?",
    'faq.a6': "Al terminar cubrimos el tatuaje para protegerlo y, si lo prefieres, ofrecemos second skin (film protector) por 10 € más. Las primeras semanas protégelo del sol con ropa y, una vez curado, usa siempre protector solar alto: el sol de Canarias apaga los colores y difumina las líneas con el tiempo.",
    'faq.q7': "¿Puedo traer mi propio diseño?",
    'faq.a7': "Sí. Puedes traer tu diseño y, si quieres, el tatuador lo adapta. Antes de empezar siempre revisamos y aprobamos el diseño contigo.",
    'faq.q8': "¿Hacéis cover-ups?",
    'faq.a8': "Sí, hacemos cover-ups para tapar o renovar tatuajes antiguos. Envíanos una foto del tatuaje y tu idea para valorarlo.",
    'faq.q9': "¿Qué estilos de tatuaje hacéis?",
    'faq.a9': "Realismo, fineline, tradicional americano, japonés, black work, dotwork y anime, entre otros. Cada tatuador tiene su especialidad: echa un vistazo al equipo y a la galería para elegir.",
    'faq.q10': "¿Tatuáis a menores de edad?",
    'faq.a10': "Sí, con consentimiento paterno. El padre, la madre o el tutor legal tiene que venir al estudio para firmar el consentimiento, tal como exige la normativa de Canarias.",
    'faq.q11': "¿Habláis inglés?",
    'faq.a11': "Sí, en el estudio atendemos en castellano y en inglés.",
    'faq.q12': "¿Dónde está el estudio y hay aparcamiento?",
    'faq.a12': "Estamos en C. la Rosa, 10, en Costa Teguise (Lanzarote), en una zona muy accesible desde cualquier punto de Costa Teguise y de la isla. Hay aparcamiento cerca.",

    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.location': 'Lanzarote, España',
    'footer.rights': 'Todos los derechos reservados',

    // Textos legales (aviso legal, privacidad y casilla del formulario)
    'legalPage.title': "Aviso legal | Abora Tattoo",
    'privacyPage.title': "Política de privacidad | Abora Tattoo",
    'footer.legal': "Aviso legal",
    'footer.privacy': "Política de privacidad",
    'form.privacyBefore': "He leído y acepto la",
    'form.privacyLink': "política de privacidad",
    'form.legalInfo': "Responsable: Abora Tattoo. Finalidad: gestionar tu cita. No se ceden datos a terceros. Derechos: acceso, rectificación, supresión y otros.",
    'form.legalMore': "Más información",
    'error.privacy': "Para enviar la solicitud debes aceptar la política de privacidad.",
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

    // Reseñas de Google (nota y nº de reseñas: actualizar de vez en cuando)
    'reviews.title': "What our clients say",
    'reviews.rating': "5.0 · 119 Google reviews",
    'reviews.starsAria': "Rated 5 out of 5 stars",
    'reviews.r1.text': "Thank you for the matching tattoos my husband and I got. Very professional, with a flawless finish. They took care of everything we asked for despite the language barrier. Thank you so much! I recommend them 100%.",
    'reviews.r1.note': "Google review · translated from French",
    'reviews.r2.text': "I got two tattoos with Daniela. It was an incredible experience; she was so sweet and kind. The tattoos turned out exactly how I wanted them. Perfect! I recommend her 10000%! 🫶",
    'reviews.r2.note': "Google review · translated from Spanish",
    'reviews.r3.text': "I went with my partner for their first tattoo, plus a redesign and a tattoo for me — all done by Kevin. He made the whole experience really enjoyable, a great guy and, above all, great work. If we come back to Lanzarote, we'll definitely be back!",
    'reviews.r3.note': "Google review · translated from Spanish",

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
    'slot.morning': 'Morning (10am – 1pm)',
    'slot.afternoon': 'Afternoon (1pm – 5pm)',
    'slot.evening': 'Late afternoon (5pm – 8pm)',
    'slot.saturday': 'Saturday (10am – 1pm)',

    'visit.eyebrow': 'Where are we?',
    'visit.title': 'Come to visit us',
    'visit.text': "Come and see the studio, check out our work and talk about your next tattoo. We are in Costa Teguise, just a few minutes from Arrecife and Lanzarote airport.",
    'visit.weekdays': 'Monday - Friday',
    'visit.weekdaysHours': '10am - 8pm',
    'visit.saturday': 'Saturday',
    'visit.byAppointment': '10am - 1pm',
    'visit.sunday': 'Sunday',
    'visit.closed': 'Closed',
    'visit.mapAria': 'View Abora Tattoo on Google Maps',
    'visit.mapAlt': 'Map of Costa Teguise showing the studio location',

    // Preguntas frecuentes (también generan los datos estructurados FAQ con build.js)
    'faq.title': "Frequently asked questions",
    'faq.text': "Everything you need to know before getting tattooed at our studio in Costa Teguise, Lanzarote.",
    'faq.q1': "How much does a tattoo cost at Abora Tattoo?",
    'faq.a1': "Every tattoo is priced per piece, depending on size, placement and level of detail. The minimum price is €70. Tell us your idea and we'll send you a free, no-obligation quote. Payment is cash only.",
    'faq.q2': "Do I need an appointment, or can I walk in?",
    'faq.a2': "You can walk in: we accept walk-ins for all kinds of tattoos, depending on availability that day. If you'd rather secure your spot, book an appointment; we usually have availability within a few days, depending on the artist.",
    'faq.q3': "Do I need to pay a deposit to book?",
    'faq.a3': "Yes. To book we ask for a deposit of €20–50, which is deducted from the total price of the tattoo. If you cancel at least 24 hours in advance, we refund it.",
    'faq.q4': "I'm on holiday in Lanzarote. Can I get a tattoo?",
    'faq.a4': "Yes. If you're on holiday, we recommend getting tattooed towards the end of your stay: while the tattoo heals you shouldn't swim or sunbathe, so you can enjoy the beach first.",
    'faq.q5': "Can I go to the beach or the pool after getting tattooed?",
    'faq.a5': "For about two weeks, while it heals, avoid swimming in the sea, pools or hot tubs and keep the tattoo out of direct sun. A fresh tattoo is an open wound: water can infect it and the sun can fade the colours.",
    'faq.q6': "How do I look after my tattoo in the Lanzarote sun?",
    'faq.a6': "When we finish, we cover the tattoo to protect it, and if you like we offer second skin (protective film) for an extra €10. For the first few weeks, keep it covered with clothing; once healed, always use high-SPF sunscreen, as the Canary Islands sun fades colours and blurs lines over time.",
    'faq.q7': "Can I bring my own design?",
    'faq.a7': "Yes. You can bring your own design and, if you want, the artist will adapt it. Before we start, we always review and approve the design with you.",
    'faq.q8': "Do you do cover-ups?",
    'faq.a8': "Yes, we do cover-ups to hide or refresh old tattoos. Send us a photo of the tattoo and your idea so we can assess it.",
    'faq.q9': "What tattoo styles do you do?",
    'faq.a9': "Realism, fineline, American traditional, Japanese, black work, dotwork and anime, among others. Each artist has their own speciality: take a look at the team and the gallery to choose.",
    'faq.q10': "Do you tattoo minors?",
    'faq.a10': "Yes, with parental consent. A parent or legal guardian must come to the studio to sign the consent form, as required by Canary Islands regulations.",
    'faq.q11': "Do you speak English?",
    'faq.a11': "Yes, at the studio we speak both Spanish and English.",
    'faq.q12': "Where is the studio, and is there parking?",
    'faq.a12': "We're at C. la Rosa, 10, in Costa Teguise (Lanzarote), in a very accessible area from anywhere in Costa Teguise and the rest of the island. There's parking nearby.",

    'footer.services': 'Services',
    'footer.contact': 'Contact us',
    'footer.location': 'Lanzarote, Spain',
    'footer.rights': 'All rights reserved',

    // Textos legales (aviso legal, privacidad y casilla del formulario)
    'legalPage.title': "Legal notice | Abora Tattoo",
    'privacyPage.title': "Privacy policy | Abora Tattoo",
    'footer.legal': "Legal notice",
    'footer.privacy': "Privacy policy",
    'form.privacyBefore': "I have read and accept the",
    'form.privacyLink': "privacy policy",
    'form.legalInfo': "Controller: Abora Tattoo. Purpose: managing your appointment. No data is shared with third parties. Rights: access, rectification, erasure and more.",
    'form.legalMore': "More information",
    'error.privacy': "You must accept the privacy policy to send your request.",
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
