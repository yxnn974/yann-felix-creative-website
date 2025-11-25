// include.js
// - Header / Footer includes
// - Mode clair / sombre
// - Slider auto
// - Typing effect
// - Fade animations
// - Footer year

applySavedTheme();
document.addEventListener("DOMContentLoaded", () => loadIncludes());

function applySavedTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light-theme");
}

/* --------------------- LOAD INCLUDES --------------------- */
function loadIncludes() {
  const includes = document.querySelectorAll("[data-include]");
  const promises = [];

  includes.forEach((el) => {
    const file = el.getAttribute("data-include");
    if (!file) return;

    const p = fetch(file)
      .then((res) => res.text())
      .then((html) => (el.innerHTML = html))
      .catch((err) => (el.innerHTML = `<p>${err}</p>`));

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

/* --------------------- THEME --------------------- */
function setupThemeToggle() {
  const btn = document.querySelector("#theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-theme") ? "light" : "dark"
    );
  });
}

/* --------------------- SLIDER --------------------- */
function setupSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length === 0) return;

  const prev = document.querySelector(".hero-prev");
  const next = document.querySelector(".hero-next");

  let index = 0;

  function show(i) {
    slides.forEach((s) => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    show(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
  }

  if (next) next.addEventListener("click", nextSlide);
  if (prev) prev.addEventListener("click", prevSlide);

  // Auto défilement
  setInterval(nextSlide, 8000);

  show(index);
}

/* --------------------- TYPING --------------------- */
function setupTypingEffect() {
  const el = document.getElementById("typing");
  if (!el) return;

  const words = [
    "les réseaux.",
    "la cybersécurité.",
    "les systèmes satellitaires.",
    "la téléphonie moderne."
  ];

  let i = 0, j = 0, del = false;

  function type() {
    el.textContent = words[i].slice(0, j);

    if (!del && j === words[i].length) {
      del = true;
      return setTimeout(type, 1200);
    }
    if (del && j === 0) {
      del = false;
      i = (i + 1) % words.length;
    }

    j += del ? -1 : 1;

    setTimeout(type, del ? 45 : 90);
  }

  type();
}

/* --------------------- FADES --------------------- */
function setupFadeInAnimations() {
  const els = document.querySelectorAll(".fade-in-up");
  if (!els.length) return;

  const obs =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("is-visible");
                obs.unobserve(e.target);
              }
            });
          },
          { threshold: 0.15 }
        )
      : null;

  els.forEach((el) =>
    obs ? obs.observe(el) : el.classList.add("is-visible")
  );
}

/* --------------------- YEAR --------------------- */
function updateFooterYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}
// include.js
// - Header/Footer includes
// - Dark/Light mode
// - Slider auto + flèches
// - Typing effect
// - Fade animations
// - Footer year

applySavedTheme();
document.addEventListener("DOMContentLoaded", () => loadIncludes());

function applySavedTheme() {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
  }
}

/*********** LOAD HTML INCLUDES ***********/
function loadIncludes() {
  const parts = document.querySelectorAll("[data-include]");
  const promises = [];

  parts.forEach((el) => {
    const file = el.getAttribute("data-include");
    if (!file) return;

    promises.push(
      fetch(file)
        .then((r) => r.text())
        .then((html) => (el.innerHTML = html))
    );
  });

  Promise.all(promises).then(() => {
    setupThemeToggle();
    setupSlider();
    setupTypingEffect();
    setupFadeInAnimations();
    updateFooterYear();
  });
}

/*********** THEME TOGGLE ***********/
function setupThemeToggle() {
  const btn = document.querySelector("#theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-theme") ? "light" : "dark"
    );
  });
}

/*********** HERO SLIDER ***********/
function setupSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (!slides.length) return;

  const prev = document.querySelector(".hero-prev");
  const next = document.querySelector(".hero-next");

  let index = 0;

  function show(i) {
    slides.forEach((s) => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    show(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
  }

  // Auto défilement
  setInterval(nextSlide, 8000);

  if (next) next.addEventListener("click", nextSlide);
  if (prev) prev.addEventListener("click", prevSlide);

  show(index);
}

/*********** TYPING ***********/
function setupTypingEffect() {
  const el = document.getElementById("typing");
  if (!el) return;

  const words = [
    "les systèmes satellitaires.",
    "les infrastructures télécoms.",
    "la cybersécurité.",
    "la technologie réseau."
  ];

  let i = 0, j = 0, deleting = false;

  function type() {
    el.textContent = words[i].slice(0, j);

    if (!deleting && j === words[i].length) {
      deleting = true;
      return setTimeout(type, 1000);
    }

    if (deleting && j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }

    j += deleting ? -1 : 1;

    setTimeout(type, deleting ? 40 : 90);
  }

  type();
}

/*********** FADE ANIMATIONS ***********/
function setupFadeInAnimations() {
  const els = document.querySelectorAll(".fade-in-up");
  if (!els.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  els.forEach((el) => obs.observe(el));
}

/*********** FOOTER YEAR ***********/
function updateFooterYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}
