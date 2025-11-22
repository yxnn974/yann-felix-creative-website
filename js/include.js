document.addEventListener("DOMContentLoaded", () => {
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
});
