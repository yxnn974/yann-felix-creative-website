// Load includes
function loadIncludes() {
  const includeElems = document.querySelectorAll("[data-include]");
  const promises = [];

  includeElems.forEach(elem => {
    const file = elem.getAttribute("data-include");
    const p = fetch(file)
      .then(res => res.text())
      .then(html => elem.innerHTML = html);
    promises.push(p);
  });

  Promise.all(promises).then(() => {
    setupSlider();
    setupThemeToggle();
    setupTypingEffect();
  });
}

document.addEventListener("DOMContentLoaded", loadIncludes);

// =========================
// DARK MODE
// =========================

function setupThemeToggle() {
  const btn = document.querySelector("#theme-toggle");
  if (!btn) return;

  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light-theme");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme",
      document.body.classList.contains("light-theme") ? "light" : "dark"
    );
  });
}

// =========================
// HERO SLIDER
// =========================

function setupSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const prev = document.querySelector(".hero-prev");
  const next = document.querySelector(".hero-next");

  let index = 0;
  const total = slides.length;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
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

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  // Auto Play
  setInterval(nextSlide, 10000);
}

// =========================
// TYPING EFFECT
// =========================

function setupTypingEffect() {
  const el = document.getElementById("typing");
  if (!el) return;

  const words = ["les réseaux", "les télécommunications", "la cybersécurité", "Linux"];
  let i = 0, j = 0, deleting = false;

  function type() {
    const word = words[i];

    el.textContent = word.substring(0, j);

    if (!deleting && j === word.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
    if (deleting && j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }

    j += deleting ? -1 : 1;
    setTimeout(type, deleting ? 50 : 90);
  }

  type();
}
