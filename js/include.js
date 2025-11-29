// include.js
// - Header/Footer includes
// - Slider auto + flèches
// - Typing effect
// - Fade animations
// - Footer year

/* --------------------- LOAD HTML INCLUDES --------------------- */
document.addEventListener("DOMContentLoaded", () => loadIncludes());

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
        .catch((err) => {
          el.innerHTML = `<p style="color:red">${err}</p>`;
        })
    );
  });

  Promise.all(promises).then(() => {
    setupSlider();
    setupTypingEffect();
    setupFadeInAnimations();
    updateFooterYear();
  });
}

/* --------------------- HERO SLIDER --------------------- */
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

/* --------------------- TYPING EFFECT --------------------- */
function setupTypingEffect() {
  const el = document.getElementById("typing");
  if (!el) return;

  const words = [
    "les systèmes satellitaires.",
    "les infrastructures télécoms.",
    "la cybersécurité.",
    "la technologie réseau."
  ];

  let i = 0,
    j = 0,
    deleting = false;

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

/* --------------------- FADE-IN-UP ANIMATIONS --------------------- */
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

/* --------------------- FOOTER YEAR --------------------- */
function updateFooterYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}
