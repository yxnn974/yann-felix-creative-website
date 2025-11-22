// include.js
// 1) Charge les fragments HTML (header, sections, footer)
// 2) Gère le mode clair / sombre
// 3) Active les animations .fade-in-up

function setupThemeFromStorage() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }
}

function setupThemeToggle() {
  document.addEventListener("click", (event) => {
    const toggleBtn = event.target.closest("#theme-toggle");
    if (!toggleBtn) return;

    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

function setupFadeInAnimations() {
  const elements = document.querySelectorAll(".fade-in-up");

  if (!elements.length) return;

  // Si le navigateur ne supporte pas IntersectionObserver → tout visible
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
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => observer.observe(el));
}

function loadIncludes() {
  const includeElems = document.querySelectorAll("[data-include]");
  const promises = [];

  includeElems.forEach((elem) => {
    const file = elem.getAttribute("data-include");
    const p = fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur de chargement : ${file}`);
        }
        return response.text();
      })
      .then((data) => {
        elem.innerHTML = data;
      })
      .catch((err) => {
        elem.innerHTML = `<p style="color:red;">${err}</p>`;
      });

    promises.push(p);
  });

  // Quand tous les includes sont chargés → on active les animations
  Promise.all(promises).then(() => {
    setupFadeInAnimations();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupThemeFromStorage();
  setupThemeToggle();
  loadIncludes();
});
