/* Portfolio Yann FELIX — script unique, chargé avec "defer" (exécuté une fois la page lue).
   Langue et thème · fragments HTML · menu · slider · machine à écrire · filtres · formulaire · animations */
"use strict";

// Dossier racine du site, défini par <body data-root="..."> ("./" pour index.html, "../" pour pages/)
const ROOT = document.body.dataset.root || "./";
const REDUCED_MOTION = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Langue ──────────────────────────────────────────────────
   La langue est posée sur <html lang> par le petit script du <head> (avant l'affichage).
   Français : includes/*.html — Anglais : includes/en/*.html */
const LANG = document.documentElement.lang === "fr" ? "fr" : "en";

const TEXT = {
  fr: {
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    toLight: "Passer au thème clair",
    toDark: "Passer au thème sombre",
    loadError: (name) =>
      `Impossible de charger « ${name} ». Ouvre le site avec un serveur local (voir README) et non en double-cliquant sur le fichier.`,
    mailSubject: (name) => `Portfolio — message de ${name}`,
    mailOpening: "Votre application mail va s'ouvrir avec le message pré-rempli.",
    sending: "Envoi en cours…",
    sent: "Message envoyé, merci !",
    failed: (email) => `L'envoi a échoué. Écrivez-moi directement à ${email}.`,
  },
  en: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    loadError: (name) =>
      `Unable to load "${name}". Open the site through a local server (see README), not by double-clicking the file.`,
    mailSubject: (name) => `Portfolio — message from ${name}`,
    mailOpening: "Your mail app will open with the message filled in.",
    sending: "Sending…",
    sent: "Message sent, thank you!",
    failed: (email) => `Sending failed. Please write to me directly at ${email}.`,
  },
}[LANG];

// localStorage peut être indisponible (navigation privée, cookies bloqués) : on n'en dépend pas
const store = {
  get(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); return localStorage.getItem(key) === value; } catch (e) { return false; }
  },
};

// Titre et description de la page en anglais (attributs data-title-en / data-desc-en du <body>)
function applyPageLanguage() {
  if (LANG !== "en") return;
  const { titleEn, descEn } = document.body.dataset;
  if (titleEn) document.title = titleEn;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && descEn) meta.content = descEn;
}

/* ── Fragments ───────────────────────────────────────────────
   <div data-include="header"> est remplacé par includes/header.html (ou includes/en/header.html).
   Dans les fragments, {{root}} devient ROOT (liens et images relatifs). */
async function loadIncludes() {
  const folder = LANG === "fr" ? "includes" : "includes/en";
  await Promise.all(
    [...document.querySelectorAll("[data-include]")].map(async (slot) => {
      const url = `${ROOT}${folder}/${slot.dataset.include}.html`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        slot.innerHTML = (await response.text()).replaceAll("{{root}}", ROOT);
      } catch (error) {
        console.error(`Impossible de charger ${url}`, error);
        slot.innerHTML = `<p class="notice">${TEXT.loadError(slot.dataset.include)}</p>`;
      }
    })
  );
}

/* ── Header : thème clair/sombre et langue ───────────────── */
function initTools() {
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const themeButton = document.querySelector(".theme-toggle");

  const syncTheme = () => {
    const light = root.dataset.theme === "light";
    if (themeColor) themeColor.content = light ? "#f3f7fb" : "#060b14";
    if (themeButton) {
      const label = light ? TEXT.toDark : TEXT.toLight;
      themeButton.setAttribute("aria-label", label);
      themeButton.title = label;
    }
  };
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    syncTheme();
  };

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      setTheme(next);
      store.set("theme", next);
    });
  }
  // Tant que le visiteur n'a rien choisi, on suit le réglage de son système
  matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    if (!store.get("theme")) setTheme(e.matches ? "light" : "dark");
  });
  syncTheme();

  // Un lien partagé avec ?lang=… devient le choix du visiteur
  if (new URLSearchParams(location.search).has("lang")) store.set("lang", LANG);

  document.querySelectorAll(".lang-switch [data-lang]").forEach((button) => {
    const active = button.dataset.lang === LANG;
    button.setAttribute("aria-pressed", String(active));
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      if (lang === LANG) return;
      const saved = store.set("lang", lang);
      const url = new URL(location.href);
      if (saved && !url.searchParams.has("lang")) {
        location.reload();                      // le <head> relira le choix mémorisé
      } else {
        url.searchParams.set("lang", lang);     // pas de mémoire disponible : la langue passe dans l'adresse
        location.replace(url);
      }
    });
  });
}

/* ── Menu : lien actif + burger mobile ───────────────────── */
function initNav() {
  const nav = document.getElementById("main-nav");
  if (!nav) return;

  const normalize = (path) => path.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/";
  const here = normalize(location.pathname);
  nav.querySelectorAll("a").forEach((link) => {
    if (normalize(new URL(link.href).pathname) === here) link.setAttribute("aria-current", "page");
  });

  const toggle = document.querySelector(".nav-toggle");
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? TEXT.menuClose : TEXT.menuOpen);
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  document.addEventListener("click", (e) => { if (!e.target.closest(".site-header")) setOpen(false); });
}

/* ── Hero : slider ───────────────────────────────────────── */
function initSlider() {
  const slides = [...document.querySelectorAll(".hero-slide")];
  if (!slides.length) return;

  const prev = document.querySelector(".hero-prev");
  const next = document.querySelector(".hero-next");
  let index = 0;
  let timer;

  const show = (i) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, k) => slide.classList.toggle("active", k === index));
  };
  const stop = () => clearInterval(timer);
  const start = () => {
    stop();
    if (!REDUCED_MOTION && slides.length > 1) timer = setInterval(() => show(index + 1), 8000);
  };

  // Un clic manuel relance le décompte de 8 s
  next.addEventListener("click", () => { show(index + 1); start(); });
  prev.addEventListener("click", () => { show(index - 1); start(); });
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

  start();
}

/* ── Hero : machine à écrire (mots dans data-words, séparés par |) ── */
function initTyping() {
  const el = document.getElementById("typing");
  if (!el || REDUCED_MOTION) return;      // le texte statique est déjà dans le HTML

  const words = el.dataset.words.split("|").filter(Boolean);
  let w = 0;
  let c = 0;
  let deleting = false;

  const tick = () => {
    const word = words[w];
    el.textContent = word.slice(0, c);

    if (!deleting && c === word.length) {       // mot complet : pause
      deleting = true;
      return setTimeout(tick, 1400);
    }
    if (deleting && c === 0) {                  // mot effacé : mot suivant
      deleting = false;
      w = (w + 1) % words.length;
      return setTimeout(tick, 300);
    }
    c += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 35 : 80);
  };
  tick();
}

/* ── Projets : filtres (data-category peut contenir plusieurs mots) ── */
function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  if (!buttons.length) return;

  const cards = document.querySelectorAll(".pcard");
  const empty = document.getElementById("projects-empty");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((b) => {
        b.classList.toggle("active", b === button);
        b.setAttribute("aria-pressed", String(b === button));
      });

      let visible = 0;
      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.category.split(" ").includes(filter);
        card.hidden = !match;
        if (match) visible++;
      });
      empty.hidden = visible > 0;
    });
  });
}

/* ── Contact ─────────────────────────────────────────────────
   data-endpoint renseigné (Formspree, Getform…) : envoi par fetch.
   Sinon : ouverture du client mail avec le message pré-rempli. */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const button = form.querySelector("button[type='submit']");
  const endpoint = form.dataset.endpoint.trim();
  const email = form.dataset.email;

  const say = (message, kind) => {
    status.textContent = message;
    status.className = kind ? `form-status is-${kind}` : "form-status";
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();                       // le navigateur a déjà validé les champs
    if (form.elements.website.value) return;      // piège à robots rempli : on ignore

    const data = new FormData(form);
    data.delete("website");

    if (!endpoint) {
      const subject = encodeURIComponent(TEXT.mailSubject(data.get("name")));
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
      location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      say(TEXT.mailOpening, "ok");
      return;
    }

    button.disabled = true;
    say(TEXT.sending);
    try {
      const response = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      say(TEXT.sent, "ok");
    } catch (error) {
      console.error(error);
      say(TEXT.failed(email), "error");
    } finally {
      button.disabled = false;
    }
  });
}

/* ── Divers ──────────────────────────────────────────────── */
// Apparition en fondu quand l'élément entre dans l'écran
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
}

// Le bouton CV n'apparaît que si documents/cv_yann_felix.pdf existe
function initCvButton() {
  const link = document.getElementById("cv-link");
  if (!link) return;
  fetch(link.href, { method: "HEAD" })
    .then((r) => { link.hidden = !r.ok; })
    .catch(() => { link.hidden = true; });
}

/* ── Démarrage ───────────────────────────────────────────── */
(async () => {
  applyPageLanguage();
  await loadIncludes();
  initTools();
  initNav();
  initSlider();
  initTyping();
  initFilters();
  initContactForm();
  initReveal();
  initCvButton();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
