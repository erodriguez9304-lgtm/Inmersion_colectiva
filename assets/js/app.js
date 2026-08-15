// Galería de fotos del consultorio / espacio clínico
const fotos = [
  'consultorio-1.jpg', 'consultorio-2.jpg', 'consultorio-3.jpg', 'consultorio-4.jpg'
];

let currentIndex = 0;

/* ==========================================================
   0. TEXTOS (ES / EN)
   ========================================================== */
const texts = {
  es: {
    meta: {
      title: "Inmersión Colectiva | Terapia Psicológica",
      description: "Atrévete a experimentar la verdadera libertad. Espacio dirigido a la psicología, con acompañamiento seguro, profesional, confidencial y adaptable a tus objetivos."
    },
    header: {
      logoText: "TERAPIA<br>PSICOLÓGICA"
    },
    nav: {
      inicio: "Inicio",
      servicios: "Servicios",
      proceso: "Proceso",
      ubicacion: "Ubicación",
      blog: "Blog",
      contacto: "Contacto"
    },
    hero: {
      badge: "Ψ Consulta Clínica Especializada",
      slogan: '"Atrévete a experimentar la verdadera libertad"',
      title: 'Un espacio seguro para tu <span class="highlight">bienestar emocional</span>',
      desc: "Un espacio dirigido a la psicología, en el que te acompañaremos de principio a fin en todas esas etapas difíciles de la vida, siguiendo métodos comprobados y adaptándonos a tus objetivos.",
      btnAgendar: "📲 Agendar por WhatsApp",
      btnLlamar: "📞 Llamar ahora",
      btnEnfoques: "Ver enfoques →",
      trust1: "🛡️ Seguro",
      trust2: "🎓 Profesional",
      trust3: "🔒 Confidencial",
      trust4: "🔄 Adaptable"
    },
    services: {
      title: "Ψ Modalidades de Intervención",
      s1Title: "Terapia Individual",
      s1Desc: "Acompañamiento personal para procesar, entender y transformar tus momentos de crisis o crecimiento.",
      s2Title: "Terapia de Aprendizaje",
      s2Desc: "Herramientas y estrategias para dificultades y procesos de aprendizaje.",
      s3Title: "Terapia de Pareja",
      s3Desc: "Resolución de conflictos, reestructuración de la comunicación y acuerdos saludables.",
      s4Title: "Terapia para Neurodivergencias",
      s4Desc: "Atención adaptada a las necesidades de personas neurodivergentes.",
      s5Title: "Y mucho más",
      s5Desc: "Consulta por WhatsApp para conocer el resto de las modalidades disponibles.",
      btnConsultar: "📋 Consultar horarios y costos por WhatsApp"
    },
    process: {
      title: "¿Cómo es el proceso?",
      p1Title: "Sesiones semanales",
      p1Desc: "Aproximadamente 1 hora por sesión (podría llegar a ser un poco más).",
      p2Title: "Costo personalizado",
      p2Desc: "Se define en base a un estudio socioeconómico, mediante una llamada de aprox. 15 a 20 min.",
      p3Title: "Presencial o en línea",
      p3Desc: "Casos excepcionales de terapia a domicilio: pregunta por disponibilidad.",
      p4Title: "Metodología ecléctica",
      p4Desc: "Adaptada a tu necesidad particular, combinando distintos enfoques comprobados."
    },
    blog: {
      title: "📰 Blog y Noticias",
      placeholder: "Muy pronto compartiremos artículos y noticias sobre salud mental en este espacio."
    },
    location: {
      title: "📍 Ubicación del Consultorio",
      address: '<strong>Dirección del Consultorio:</strong><br>Av. de las Torres 35, Colonia Ciudad Labor, Tultitlán, Edo. Méx.',
      hours: '<strong>Horario de Consultas:</strong><br>Lunes a Viernes: 8:00 am - 8:00 pm<br>Sábados: 9:00 am - 2:00 pm<br>Domingo: Previa programación urgente',
      channelsLabel: "📞 Canales Directos:",
      phoneLine: "📱 Teléfono: 56 2557 2365",
      waDirecto: "WhatsApp directo",
      responsableLabel: "Responsable:",
      verMapa: "🗺️ Ver en Google Maps"
    },
    contact: {
      title: "¿Necesitas orientación clínica inmediata?",
      desc: "Escríbenos directamente para asignarte un espacio prioritario con total confidencialidad.",
      btnIniciar: "💬 ¡Iniciar Conversación por WhatsApp!",
      btnFacebook: "📘 Seguir en Facebook",
      btnInstagram: "📸 Seguir en Instagram"
    },
    footer: {
      tagline: "Acompañamiento profesional y ético para tu salud mental.",
      navTitle: "Enlaces de Navegación",
      serviciosClinicos: "Servicios Clínicos",
      contactoTitle: "Contacto",
      telefono: "📞 Teléfono: 56 2557 2365",
      rights: "© 2026 Inmersión Colectiva - Terapia Psicológica. Todos los derechos reservados.",
      avisoPrivacidad: "Aviso de privacidad"
    },
    privacy: {
      title: "Aviso de Privacidad",
      responsable: '<strong>Responsable:</strong> Inmersión Colectiva (Lic. Josué Christopher Enriquez Licea, Céd. Prof. 14058083), con consultorio en Av. de las Torres 35, Colonia Ciudad Labor, Tultitlán, Estado de México.',
      datosTitle: "Datos que recabamos",
      datosText: "Cuando agendas una sesión o nos contactas por WhatsApp, llamada o correo electrónico, podemos recibir tu nombre, número telefónico, correo electrónico y datos generales de contacto. Durante el proceso terapéutico, y únicamente con tu consentimiento expreso, también podemos recabar datos sensibles relacionados con tu salud física y mental, necesarios para brindarte una atención psicológica adecuada.",
      finalidadTitle: "Finalidad",
      finalidadText: "Usamos tus datos para agendar y dar seguimiento a tus sesiones, mantener tu expediente clínico y contactarte sobre tu proceso terapéutico. Tus datos de salud están protegidos por el secreto profesional y no se comparten con terceros, salvo obligación legal.",
      arcoTitle: "Derechos ARCO",
      arcoText: 'Puedes solicitar acceder, rectificar, cancelar u oponerte al uso de tus datos personales, incluyendo tu expediente clínico, escribiendo a <a href="mailto:contacto@inmersioncolectiva.com">contacto@inmersioncolectiva.com</a>.',
      cambiosTitle: "Cambios a este aviso",
      cambiosText: "Este aviso puede actualizarse; la versión vigente siempre estará disponible en esta página."
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
      auto: "Automático",
      toggleLabel: "Cambiar tema"
    }
  },
  en: {
    meta: {
      title: "Inmersión Colectiva | Psychological Therapy",
      description: "Dare to experience true freedom. A space devoted to psychology, with safe, professional, confidential support tailored to your goals."
    },
    header: {
      logoText: "PSYCHOLOGICAL<br>THERAPY"
    },
    nav: {
      inicio: "Home",
      servicios: "Services",
      proceso: "Process",
      ubicacion: "Location",
      blog: "Blog",
      contacto: "Contact"
    },
    hero: {
      badge: "Ψ Specialized Clinical Practice",
      slogan: '"Dare to experience true freedom"',
      title: 'A safe space for your <span class="highlight">emotional wellbeing</span>',
      desc: "A space devoted to psychology, where we'll support you from start to finish through life's difficult stages, following proven methods and adapting to your goals.",
      btnAgendar: "📲 Book on WhatsApp",
      btnLlamar: "📞 Call now",
      btnEnfoques: "See approaches →",
      trust1: "🛡️ Safe",
      trust2: "🎓 Professional",
      trust3: "🔒 Confidential",
      trust4: "🔄 Adaptable"
    },
    services: {
      title: "Ψ Intervention Approaches",
      s1Title: "Individual Therapy",
      s1Desc: "Personal support to process, understand and work through moments of crisis or growth.",
      s2Title: "Learning Therapy",
      s2Desc: "Tools and strategies for learning difficulties and processes.",
      s3Title: "Couples Therapy",
      s3Desc: "Conflict resolution, communication rebuilding and healthy agreements.",
      s4Title: "Neurodivergence Therapy",
      s4Desc: "Care adapted to the needs of neurodivergent individuals.",
      s5Title: "And much more",
      s5Desc: "Ask us on WhatsApp about the rest of the available approaches.",
      btnConsultar: "📋 Ask about schedules and rates on WhatsApp"
    },
    process: {
      title: "What does the process look like?",
      p1Title: "Weekly sessions",
      p1Desc: "About 1 hour per session (it could run a bit longer).",
      p2Title: "Personalized cost",
      p2Desc: "Set based on a socioeconomic assessment, through a roughly 15-20 min call.",
      p3Title: "In-person or online",
      p3Desc: "In-home therapy in exceptional cases: ask about availability.",
      p4Title: "Eclectic methodology",
      p4Desc: "Tailored to your particular needs, combining different proven approaches."
    },
    blog: {
      title: "📰 Blog & News",
      placeholder: "We'll soon be sharing articles and news about mental health here."
    },
    location: {
      title: "📍 Practice Location",
      address: '<strong>Practice Address:</strong><br>Av. de las Torres 35, Colonia Ciudad Labor, Tultitlán, State of Mexico.',
      hours: '<strong>Office Hours:</strong><br>Monday to Friday: 8:00 am - 8:00 pm<br>Saturday: 9:00 am - 2:00 pm<br>Sunday: By urgent appointment only',
      channelsLabel: "📞 Direct Channels:",
      phoneLine: "📱 Phone: 56 2557 2365",
      waDirecto: "Direct WhatsApp",
      responsableLabel: "Practitioner:",
      verMapa: "🗺️ View on Google Maps"
    },
    contact: {
      title: "Need immediate clinical guidance?",
      desc: "Message us directly to secure a priority spot with complete confidentiality.",
      btnIniciar: "💬 Start a Conversation on WhatsApp!",
      btnFacebook: "📘 Follow on Facebook",
      btnInstagram: "📸 Follow on Instagram"
    },
    footer: {
      tagline: "Professional, ethical support for your mental health.",
      navTitle: "Navigation Links",
      serviciosClinicos: "Clinical Services",
      contactoTitle: "Contact",
      telefono: "📞 Phone: 56 2557 2365",
      rights: "© 2026 Inmersión Colectiva - Psychological Therapy. All rights reserved.",
      avisoPrivacidad: "Privacy notice"
    },
    privacy: {
      title: "Privacy Notice",
      responsable: '<strong>Data controller:</strong> Inmersión Colectiva (Lic. Josué Christopher Enriquez Licea, License No. 14058083), located at Av. de las Torres 35, Colonia Ciudad Labor, Tultitlán, State of Mexico.',
      datosTitle: "Data we collect",
      datosText: "When you book a session or contact us via WhatsApp, phone call or email, we may receive your name, phone number, email address and general contact details. During the therapeutic process, and only with your express consent, we may also collect sensitive data related to your physical and mental health, necessary to provide you with appropriate psychological care.",
      finalidadTitle: "Purpose",
      finalidadText: "We use your data to schedule and follow up on your sessions, maintain your clinical record, and contact you about your therapeutic process. Your health data is protected by professional confidentiality and is not shared with third parties, except where legally required.",
      arcoTitle: "Data rights",
      arcoText: 'You can request to access, rectify, cancel or object to the use of your personal data, including your clinical record, by writing to <a href="mailto:contacto@inmersioncolectiva.com">contacto@inmersioncolectiva.com</a>.',
      cambiosTitle: "Changes to this notice",
      cambiosText: "This notice may be updated; the current version will always be available on this page."
    },
    theme: {
      light: "Light",
      dark: "Dark",
      auto: "Auto",
      toggleLabel: "Toggle theme"
    }
  }
};

const LANG_STORAGE_KEY = "ic_lang";

/* ==========================================================
   1. GESTIÓN DE IDIOMA
   ========================================================== */
function changeLanguage(lang) {
  if (!texts[lang]) lang = "es";

  document.querySelectorAll("[data-section]").forEach((element) => {
    const section = element.dataset.section;
    const value = element.dataset.value;
    const entry = texts[lang][section] && texts[lang][section][value];
    if (entry === undefined) return;

    if (element.tagName === "META") {
      element.setAttribute("content", entry);
    } else {
      element.innerHTML = entry;
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (err) {
    /* almacenamiento no disponible: no es crítico */
  }

  updateThemeButtons();
}

function getInitialLanguage() {
  // El público principal es de habla hispana (México), así que el idioma
  // por defecto siempre es español. Solo respetamos una elección explícita
  // previa del propio visitante (guardada al usar el selector ES/EN).
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && texts[saved]) return saved;
  } catch (err) {
    /* almacenamiento no disponible */
  }
  return "es";
}

function initLang() {
  changeLanguage(getInitialLanguage());

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => changeLanguage(btn.dataset.lang));
  });
}

/* ==========================================================
   1.5 GESTIÓN DE TEMA (claro / oscuro / automático)
   ========================================================== */
// El propio <head> del documento ya aplica el tema guardado (o el del
// sistema, si está en "automático") antes de que se pinte la página, para
// evitar un parpadeo claro→oscuro. Aquí solo conectamos el botón y
// mantenemos todo sincronizado si el usuario cambia el tema del sistema
// operativo mientras tiene la pestaña abierta.
const THEME_STORAGE_KEY = "ic_theme";
const THEME_ORDER = ["light", "dark", "auto"];

function getStoredThemePref() {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (THEME_ORDER.includes(saved)) return saved;
  } catch (err) {
    /* almacenamiento no disponible */
  }
  return "auto";
}

function systemPrefersLight() {
  return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches);
}

function effectiveTheme(pref) {
  return pref === "auto" ? (systemPrefersLight() ? "light" : "dark") : pref;
}

function updateThemeButtons() {
  const lang = document.documentElement.lang || "es";
  const labels = (texts[lang] && texts[lang].theme) || texts.es.theme;
  const pref = document.documentElement.getAttribute("data-theme-pref") || "auto";

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.setAttribute("data-theme-state", pref);
    const label = labels[pref] || pref;
    btn.setAttribute("aria-label", `${labels.toggleLabel} (${label})`);
    btn.setAttribute("title", `${labels.toggleLabel}: ${label}`);
  });
}

function applyTheme(pref) {
  document.documentElement.setAttribute("data-theme", effectiveTheme(pref));
  document.documentElement.setAttribute("data-theme-pref", pref);
  updateThemeButtons();
  try {
    localStorage.setItem(THEME_STORAGE_KEY, pref);
  } catch (err) {
    /* no crítico */
  }
}

function initTheme() {
  applyTheme(getStoredThemePref());

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme-pref") || "auto";
      const next = THEME_ORDER[(THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length];
      applyTheme(next);
    });
  });

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
      if ((document.documentElement.getAttribute("data-theme-pref") || "auto") === "auto") {
        applyTheme("auto");
      }
    });
  }
}

/* ==========================================================
   2. MENÚ MÓVIL
   ========================================================== */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Cierra el menú al hacer clic fuera de él (fuera del botón y de la lista)
  document.addEventListener('click', (e) => {
    if (!links.classList.contains('is-open')) return;
    if (links.contains(e.target) || toggle.contains(e.target)) return;
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // Cierra el menú con la tecla Escape, y regresa el foco al botón
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !links.classList.contains('is-open')) return;
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  });
}

/* ==========================================================
   3. MODAL DE AVISO DE PRIVACIDAD
   ========================================================== */
function initPrivacyModal() {
  const privacyModal = document.getElementById('privacyModal');
  const openPrivacyBtn = document.getElementById('openPrivacyModal');
  const closePrivacyBtn = document.getElementById('closePrivacyModal');
  if (!privacyModal || !closePrivacyBtn) return;

  let lastFocusedBeforePrivacy = null;

  function openPrivacyModal() {
    lastFocusedBeforePrivacy = document.activeElement;
    privacyModal.style.display = 'flex';
    closePrivacyBtn.focus();
  }

  function closePrivacyModal() {
    privacyModal.style.display = 'none';
    if (lastFocusedBeforePrivacy) lastFocusedBeforePrivacy.focus();
  }

  if (openPrivacyBtn) openPrivacyBtn.addEventListener('click', openPrivacyModal);
  closePrivacyBtn.addEventListener('click', closePrivacyModal);
  privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) closePrivacyModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && privacyModal.style.display === 'flex') {
      closePrivacyModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initMobileNav();
  initPrivacyModal();

  // Renderizar galería de fotos de forma dinámica en el grid
  // (actualmente desactivada en el HTML hasta que existan fotos reales)
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) {
    galleryGrid.innerHTML = fotos.map((foto, index) => `
      <img src="assets/img/${foto}" alt="Espacio Clínico Inmersión Colectiva" loading="lazy" onclick="openLightbox(${index})">
    `).join('');
  }
});

// Funciones lógicas del Lightbox
function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');

  img.src = `assets/img/${fotos[currentIndex]}`;
  counter.textContent = `${currentIndex + 1} / ${fotos.length}`;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = fotos.length - 1;
  if (currentIndex >= fotos.length) currentIndex = 0;

  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');
  img.src = `assets/img/${fotos[currentIndex]}`;
  counter.textContent = `${currentIndex + 1} / ${fotos.length}`;
}

// Navegación rápida con teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') changeImage(-1);
  if (e.key === 'ArrowRight') changeImage(1);
});
