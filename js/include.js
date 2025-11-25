// include.js
// - Charge les fragments HTML (header, sections, footer)
// - Gère le thème clair / sombre
// - Gère le slider du hero
// - Gère l'effet "typing"
// - Active les animations .fade-in-up

// Applique le thème sauvegardé le plus tôt possible
applySavedTheme();

// Quand le DOM est prêt, on charge les includes
document.addEventListener("DOMContentLoaded", () => {
  loadIncludes();
});

/* ------------------------------------
 *  Thème : charger l'état sauvegardé
 * ------------------------------------ */
function applySavedTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light-theme");
  }
}

/* ------------------------------------
 *  Chargement des includes HTML
 * ------------------------------------ */
function loadIncludes() {
  const includeElems = document.querySelectorAll("[data-include]");

  // S'il n'y a pas d'include, on initialise quand même les fonctionnalités globales
  if (!includeElems.length) {
    setupThemeToggle();
    setupSlider();
    setupTypingEffect();
    setupFadeInAnimations();
    updateFooterYear();
    return;
  }

  const promises = [];

  includeElems.forEach((elem) => {
    const file = elem.getAttribute("data-include");
    if (!file) return;

    const p = fetch(file)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur de chargement : ${file} (${res.status})`);
        }
        return res.text();
      })
      .then((html) => {
        elem.innerHTML = html;
      })
      .catch((err) => {
        console.error(err);
        elem.innerHTML = `<p style="color:red;font-size:0.85rem;">${err.message}</p>`;
      });

    promises.push(p);
  });

  Promise.all(promises).then(() => {
    setupThemeToggle();
    setupSlider();
    setupTypingEffect();
    setupFadeInAnimations();
    updateFooterYear();
  });
}

/* ------------------------------------
 *  Bouton thème clair / sombre
 * ------------------------------------ */
function setupThemeToggle() {
  const btn = document.querySelector("#theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

/* ------------------------------------
 *  Hero : slider d’images de fond
 * ------------------------------------ */
function setupSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (!slides.length) return;

  const prev = document.querySelector(".hero-prev");
  const next = document.querySelector(".hero-next");

  let index = 0;
  const total = slides.length;

  function showSlide(i) {
    slides.forEach((s) => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % total;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + total) % total;
    showSlide(index);
  }

  if (next) next.addEventListener("click", nextSlide);
  if (prev) prev.addEventListener("click", prevSlide);

  // Défilement automatique uniquement si plusieurs images
  if (total > 1) {
    setInterval(nextSlide, 10000);
  }

  showSlide(index);
}

/* ------------------------------------
 *  Effet "machine à écrire"
 * ------------------------------------ */
function setupTypingEffect() {
  const el = document.getElementById("typing");
  if (!el) return;

  const words = [
    "les systèmes satellitaires.",
    "les infrastructures télécoms modernes"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const word = words[wordIndex];
    el.textContent = word.substring(0, charIndex);

    if (!deleting && charIndex === word.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    charIndex += deleting ? -1 : 1;
    const speed = deleting ? 55 : 90;
    setTimeout(type, speed);
  }

  type();
}

/* ------------------------------------
 *  Animations .fade-in-up
 * ------------------------------------ */
function setupFadeInAnimations() {
  const elements = document.querySelectorAll(".fade-in-up");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ------------------------------------
 *  Footer : année dynamique
 * ------------------------------------ */
function updateFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
