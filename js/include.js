// include.js
// 1) Charge les fragments HTML (header, sections, footer)
// 2) Gère le mode clair / sombre

document.addEventListener("DOMContentLoaded", () => {
  // === 1. Appliquer le thème sauvegardé ===
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }

  // === 2. Charger tous les includes ===
  const includeElems = document.querySelectorAll("[data-include]");

  includeElems.forEach((elem) => {
    const file = elem.getAttribute("data-include");

    fetch(file)
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
  });

  // === 3. Gestion du bouton de thème (délégation d'événement) ===
  document.addEventListener("click", (event) => {
    const toggleBtn = event.target.closest("#theme-toggle");
    if (!toggleBtn) return;

    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});
