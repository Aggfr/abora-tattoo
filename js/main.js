document.addEventListener('DOMContentLoaded', () => {
  initHeroScrub();

  // ---------- Año actual en el footer ----------
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Menú móvil ----------
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('mobile-menu');

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    menu.hidden = true;
  };

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
      menu.hidden = open;
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  }

  // ---------- Formulario de cita ----------
  // No hay servidor todavía: al enviar se abre el correo del usuario
  // con los datos ya rellenados, dirigido al email del estudio.
  const STUDIO_EMAIL = 'AleDiazFoto@gmail.com';
  const form = document.getElementById('booking-form');
  const status = form?.querySelector('.form__status');

  // Los <select> muestran su texto en gris mientras estén sin elegir
  form?.querySelectorAll('select').forEach((select) => {
    const sync = () => select.classList.toggle('is-empty', !select.value);
    sync();
    select.addEventListener('change', sync);
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach((field) => {
      const ok = field.checkValidity();
      field.classList.toggle('is-invalid', !ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      status.textContent = 'Please fill in your name, a valid email and a style.';
      form.querySelector('.is-invalid')?.focus();
      return;
    }

    const data = new FormData(form);
    const line = (label, key) => `${label}: ${data.get(key) || '-'}`;
    const body = [
      line('Name', 'name'),
      line('Mail', 'email'),
      line('Style', 'style'),
      line('Color preference', 'color'),
      line('Size', 'size'),
      line('Body area', 'area'),
      line('Preferred time slot', 'slot'),
      '',
      data.get('message') || '',
    ].join('\n');

    const subject = `Tattoo request – ${data.get('name')}`;
    window.location.href =
      `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.textContent = 'Thanks! Your email app should open to send the request.';
  });

  form?.querySelectorAll('[required]').forEach((field) => {
    field.addEventListener('input', () => field.classList.remove('is-invalid'));
    field.addEventListener('change', () => field.classList.remove('is-invalid'));
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
