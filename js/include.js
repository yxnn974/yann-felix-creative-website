// include.js
// Chargement des includes + thème + animations + typing

/* =============================
   1. Restaurer le thème sauvegardé
   ============================= */
function setupThemeFromStorage() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }
}

/* =============================
   2. Mode clair / sombre
   ============================= */
function setupThemeToggle() {
  document.addEventListener("click", (event) => {
    const toggleBtn = event.target.closest("#theme-toggle");
    if (!toggleBtn) return;

    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

/* =============================
   3. Animation fade-in-up
   ============================= */
function setupFadeInAnimations() {
  const elements = document.querySelectorAll(".fade-in-up");

  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* =============================
   4. Chargement des includes
   ============================= */
function loadIncludes() {
  const includeElems = document.querySelectorAll("[data-include]");
  const promises = [];

  includeElems.forEach((elem) => {
    const file = elem.getAttribute("data-include");

    const p = fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error(`Impossible de charger : ${file}`);
        return response.text();
      })
      .then((data) => (elem.innerHTML = data))
      .catch(
        (err) =>
          (elem.innerHTML = `<p style="color:red;">Erreur : ${err.message}</p>`)
      );

    promises.push(p);
  });

  Promise.all(promises).then(() => {
    setupFadeInAnimations();
    setupTypingEffect(); // important !
  });
}

/* =============================
   5. Effet typing
   ============================= */
function setupTypingEffect() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;

  const words = [
    "les réseaux",
    "les télécommunications",
    "la cybersécurité",
    "Linux",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = words[wordIndex];

    if (!deleting) {
      charIndex++;
      if (charIndex >= current.length) {
        deleting = true;
        setTimeout(type, 1300);
        typingEl.textContent = current;
        return;
      }
    } else {
      charIndex--;
      if (charIndex <= 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    typingEl.textContent = current.slice(0, charIndex);
    setTimeout(type, deleting ? 60 : 90);
  }

  type();
}

/* =============================
   6. Initialisation globale
   ============================= */
document.addEventListener("DOMContentLoaded", () => {
  setupThemeFromStorage();
  setupThemeToggle();
  loadIncludes();
});

/* ============================
   Parallax effect on hero image
   ============================ */

function setupParallax() {
  const heroImage = document.querySelector(".hero-bg-image");
  if (!heroImage) return;

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const offset = scrolled * 0.25; // vitesse du parallax
    heroImage.style.setProperty("--parallax-offset", `${offset}px`);
    heroImage.classList.add("parallax-active");
  });
}

// Activation du parallax après chargement
setupParallax();
