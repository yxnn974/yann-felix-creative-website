/******************************************
 *  LOAD INCLUDES (header, hero, footer…)
 ******************************************/
function loadIncludes() {
  const includeElems = document.querySelectorAll("[data-include]");
  const promises = [];

  includeElems.forEach(elem => {
    const file = elem.getAttribute("data-include");

    const p = fetch(file)
      .then(res => res.text())
      .then(html => {
        elem.innerHTML = html;
      });

    promises.push(p);
  });

  Promise.all(promises).then(() => {
    setupThemeToggle();
    setupSlider();
    setupTypingEffect();
  });
}

document.addEventListener("DOMContentLoaded", loadIncludes);


/******************************************
 *  DARK / LIGHT MODE
 ******************************************/
function setupThemeToggle() {
  const btn = document.querySelector("#theme-toggle");
  if (!btn) return;

  // Charge le thème sauvegardé
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light-theme");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-theme") ? "light" : "dark"
    );
  });
}


/******************************************
 *  HERO BACKGROUND SLIDER
 ******************************************/
function setupSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const prev = document.querySelector(".hero-prev");
  const next = document.querySelector(".hero-next");

  if (!slides.length) return;

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

  // Flèches cliquables
  if (next) next.addEventListener("click", nextSlide);
  if (prev) prev.addEventListener("click", prevSlide);

  // Défilement automatique
  setInterval(nextSlide, 10000);

  // Charge la première image
  showSlide(index);
}


/******************************************
 *  TYPING EFFECT (machine à écrire)
 ******************************************/
function setupTypingEffect() {
  const el = document.getElementById("typing");
  if (!el) return;

  // Liste des mots (tu peux en ajouter autant que tu veux)
  const words = [
    "les systèmes satellitaires.",
    "les infrastructures télécoms modernes"
  ];

  let i = 0;   // mot
  let j = 0;   // caractère
  let deleting = false;

  function type() {
    const word = words[i];

    el.textContent = word.substring(0, j);

    // FIN DU MOT → pause puis suppression
    if (!deleting && j === word.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }

    // MOT SUPPRIMÉ → mot suivant
    if (deleting && j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }

    j += deleting ? -1 : 1;

    // vitesse
    const speed = deleting ? 55 : 90;
    setTimeout(type, speed);
  }

  type();
}
