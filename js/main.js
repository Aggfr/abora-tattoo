document.addEventListener('DOMContentLoaded', () => {
  initLanguage();   // idioma: español por defecto, inglés con el selector (js/i18n.js)
  initHeroScrub();
  initTeamCards();
  initGalleryFilter();

  // ---------- Email del footer ----------
  // En el HTML el email está partido (data-user / data-domain) para que los
  // bots que recopilan direcciones no lo encuentren. Aquí se monta el enlace.
  document.querySelectorAll('.js-email').forEach((link) => {
    const email = `${link.dataset.user}@${link.dataset.domain}`;
    link.href = `mailto:${email}`;
    link.textContent = email;
  });

  // ---------- Año actual en el footer ----------
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Menú móvil ----------
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('mobile-menu');

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', t('nav.openMenu'));
    menu.hidden = true;
  };

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? t('nav.openMenu') : t('nav.closeMenu'));
      menu.hidden = open;
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  }

  // ---------- Formulario de cita ----------
  // Se envía con Web3Forms: el mensaje llega directamente al email del estudio.
  // La "Access Key" es pública por diseño: solo sirve para enviar mensajes a ese email.
  const WEB3FORMS_KEY = '5bd6156e-0185-43e0-bcf2-e5a71b94e2bb';
  const STUDIO_EMAIL = ['abora.tattoo.art', 'gmail.com'].join('@');  // partido para que los bots no lo lean
  const form = document.getElementById('booking-form');
  const status = form?.querySelector('.form__status');
  const submitBtn = form?.querySelector('button[type="submit"]');

  // Los <select> muestran su texto en gris mientras estén sin elegir
  form?.querySelectorAll('select').forEach((select) => {
    const sync = () => select.classList.toggle('is-empty', !select.value);
    sync();
    select.addEventListener('change', sync);
  });

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validación: todos los campos son obligatorios salvo el mensaje
    if (!validateForm()) {
      status.textContent = t('form.errorSummary');
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    const data = new FormData(form);

    // Anti-spam: si el campo trampa está marcado, es un bot → se ignora en silencio
    if (data.get('botcheck')) {
      form.reset();
      status.textContent = t('form.success');
      return;
    }

    // El email que recibe el estudio va siempre en español
    const subject = `Solicitud de tatuaje – ${data.get('name')}`;

    // Envío real con Web3Forms
    const payload = {
      access_key: WEB3FORMS_KEY,
      botcheck: false,              // Web3Forms rechaza los envíos con botcheck marcado
      subject,
      from_name: 'Abora Tattoo – Web',
      replyto: data.get('email'),   // al responder, le contestas directamente al cliente
      Nombre: data.get('name'),
      Email: data.get('email'),
      Estilo: data.get('style') || '-',
      'Preferencia de color': data.get('color') || '-',
      'Tamaño': data.get('size') || '-',
      'Zona del cuerpo': data.get('area') || '-',
      'Franja horaria': data.get('slot') || '-',
      Mensaje: data.get('message') || '-',
      'Idioma de la web': document.documentElement.lang === 'en' ? 'Inglés' : 'Español',
    };

    submitBtn.disabled = true;
    submitBtn.textContent = t('form.sending');
    status.textContent = '';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || 'Error');

      form.reset();
      form.querySelectorAll('select').forEach((sel) => sel.classList.add('is-empty'));
      status.textContent = t('form.success');
    } catch (err) {
      status.textContent = `${t('form.error')} ${STUDIO_EMAIL}.`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t('form.submit');
    }
  });

  // Al cambiar de idioma: limpia el aviso general y traduce los errores visibles
  document.addEventListener('languagechange', () => {
    if (status) status.textContent = '';
    form?.querySelectorAll('[aria-invalid="true"]').forEach((field) => showFieldError(field));
  });

  // Errores en vivo: tras el primer intento de envío, cada campo se revisa al
  // cambiarlo o al salir de él; el error desaparece en cuanto se corrige.
  form?.querySelectorAll('[required]').forEach((field) => {
    const recheck = () => { if (form.dataset.submitted) validateField(field); };
    field.addEventListener('input', recheck);
    field.addEventListener('change', recheck);
    field.addEventListener('blur', recheck);
  });

  // Mensaje de error de cada campo (clave de traducción)
  function errorKeyFor(field) {
    if (field.name === 'email') {
      return field.validity.valueMissing ? 'error.emailEmpty' : 'error.emailInvalid';
    }
    return `error.${field.name}`;
  }

  function showFieldError(field) {
    const error = document.getElementById(`err-${field.name}`);
    if (error) error.textContent = t(errorKeyFor(field));
  }

  // Valida un campo y muestra u oculta su error. Devuelve true si es correcto.
  function validateField(field) {
    if (field.type === 'email') field.value = field.value.trim();
    // El navegador acepta "a@b"; exigimos además un dominio con punto
    const emailOk = field.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value) || !field.value;
    if (field.type === 'email') field.setCustomValidity(emailOk ? '' : 'invalid');
    const ok = field.checkValidity() && (field.type !== 'text' || field.value.trim() !== '');
    const error = document.getElementById(`err-${field.name}`);
    field.classList.toggle('is-invalid', !ok);
    field.setAttribute('aria-invalid', String(!ok));
    if (error) {
      error.hidden = ok;
      if (ok) error.textContent = '';
      else showFieldError(field);
    }
    return ok;
  }

  function validateForm() {
    form.dataset.submitted = 'true';
    let allOk = true;
    form.querySelectorAll('[required]').forEach((field) => {
      if (!validateField(field)) allOk = false;
    });
    return allOk;
  }

  // Tras enviar con éxito, se limpia el estado de validación
  form?.addEventListener('reset', () => {
    delete form.dataset.submitted;
    form.querySelectorAll('[required]').forEach((field) => {
      field.classList.remove('is-invalid');
      field.removeAttribute('aria-invalid');
      const error = document.getElementById(`err-${field.name}`);
      if (error) { error.hidden = true; error.textContent = ''; }
    });
  });
});

/* ---------- Video scrubbing del hero (el fotograma sigue al scroll) ----------
   Al bajar por la página, el vídeo avanza fotograma a fotograma; al subir,
   retrocede. La animación termina un poco antes de que la estatua salga
   de la pantalla. El vídeo tiene todos los fotogramas como keyframes para
   que cada salto sea instantáneo. */
function initHeroScrub() {
  const video = document.querySelector('.hero__video-scrub');
  if (!video) return;

  const EASE = 0.15;        // suavizado del movimiento
  const END_OFFSET = 0.25;  // la animación acaba cuando el final de la estatua
                            // está al 25 % de la altura de la ventana

  let targetRatio = 0;
  let currentRatio = 0;
  let lastSeekRatio = -1;
  let metadataReady = video.readyState >= 1; // HAVE_METADATA
  let seeking = false;
  let pendingRatio = null;

  video.addEventListener('loadedmetadata', () => { metadataReady = true; });

  // No "inundar" el vídeo de seeks: si llega un objetivo nuevo mientras
  // se busca el anterior, se guarda y se aplica al terminar.
  const seekTo = (ratio) => {
    if (!metadataReady || !video.duration) return;
    const clamped = Math.min(Math.max(ratio, 0), 1);
    if (seeking) { pendingRatio = clamped; return; }
    seeking = true;
    lastSeekRatio = clamped;
    // Pequeño margen al final para no caer en "ended" con fotograma negro
    video.currentTime = clamped * Math.max(video.duration - 0.05, 0);
  };

  video.addEventListener('seeked', () => {
    seeking = false;
    if (pendingRatio !== null) {
      const next = pendingRatio;
      pendingRatio = null;
      seekTo(next);
    }
  });

  // Con movimiento reducido se queda en el primer fotograma
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Progreso del scroll: 0 arriba del todo, 1 cuando la estatua ya casi ha salido
  const updateTarget = () => {
    const rect = video.getBoundingClientRect();
    const statueBottom = rect.bottom + window.scrollY; // posición en la página
    const end = Math.max(statueBottom - window.innerHeight * END_OFFSET, 1);
    targetRatio = Math.min(Math.max(window.scrollY / end, 0), 1);
  };

  window.addEventListener('scroll', updateTarget, { passive: true });
  window.addEventListener('resize', updateTarget);
  updateTarget();
  currentRatio = targetRatio; // si se recarga a mitad de página, empieza ya en su sitio

  const animate = () => {
    currentRatio += (targetRatio - currentRatio) * EASE;
    // Solo buscar si el cambio es apreciable (ahorra trabajo con la página quieta)
    if (Math.abs(currentRatio - lastSeekRatio) > 0.002) seekTo(currentRatio);
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}

/* ---------- Tarjetas del equipo: flip al tocar / con el teclado ----------
   Con ratón, el giro lo hace el CSS al pasar por encima (:hover).
   En móvil/táctil, tocar la foto la gira y tocar otra vez la devuelve.
   Con teclado, Enter o espacio la giran. */
function initTeamCards() {
  const cards = document.querySelectorAll('.team-card');
  const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  cards.forEach((card) => {
    // aria-pressed indica a los lectores de pantalla si la tarjeta está girada
    const setFlipped = (on) => {
      card.classList.toggle('is-flipped', on);
      card.setAttribute('aria-pressed', String(on));
    };
    const toggle = () => setFlipped(!card.classList.contains('is-flipped'));

    card.addEventListener('click', () => {
      if (hasHover) return;  // con ratón ya gira con :hover
      // Al abrir una, cierra las demás
      cards.forEach((other) => {
        if (other !== card) { other.classList.remove('is-flipped'); other.setAttribute('aria-pressed', 'false'); }
      });
      toggle();
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
}

/* ---------- Galería (galeria.html): filtro por estilo ----------
   Cada foto lleva data-style="realism|anime|fineline|traditional|japanese|others".
   Al pulsar un filtro se muestran solo las fotos de ese estilo. */
function initGalleryFilter() {
  const buttons = document.querySelectorAll('.filter');
  const works = document.querySelectorAll('.work');
  const empty = document.getElementById('works-empty');
  if (!buttons.length || !works.length) return;

  const apply = (filter) => {
    let visible = 0;
    works.forEach((work) => {
      const show = filter === 'all' || work.dataset.style === filter;
      work.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible > 0;
    buttons.forEach((btn) => {
      const active = btn.dataset.filter === filter;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  };

  buttons.forEach((btn) => btn.addEventListener('click', () => apply(btn.dataset.filter)));
}
