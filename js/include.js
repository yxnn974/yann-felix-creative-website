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

function loadIncludes() {
  const includeElems = document.querySelectorAll("[data-include]");
  const promises = [];

  includeElems.forEach((elem) => {
    const file = elem.getAttribute("data-include");

    const p = fetch(file)
      .then(res => res.text())
      .then(html => elem.innerHTML = html)
      .catch(err => elem.innerHTML = `<p style="color:red">${err}</p>`);

    promises.push(p);
  });

  Promise.all(promises).then(() => {
    setupSlider();
    setupTyping();
  });
}


/* =======================================================
   EFFET TYPING
======================================================= */
function setupTyping() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;

  const words = ["Linux", "les réseaux", "la cybersécurité", "l'infrastructure"];
  let index = 0, char = 0, removing = false;

  function type() {
    const word = words[index];

    typingEl.textContent = word.substring(0, char);

    if (!removing && char < word.length) {
      char++;
    } else if (removing && char > 0) {
      char--;
    } else {
      removing = !removing;
      if (!removing) index = (index + 1) % words.length;
    }

    setTimeout(type, removing ? 60 : 90);
  }
  type();
}


/* =======================================================
   SLIDER HERO
======================================================= */
function setupSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const prev = document.getElementById("hero-prev");
  const next = document.getElementById("hero-next");

  if (!slides.length) return;

  let index = 0;
  let interval;

  function showSlide(i) {
    slides.forEach((s, idx) => s.classList.toggle("active", i === idx));
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlideFunc() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  next.addEventListener("click", () => {
    nextSlide();
    restart();
  });

  prev.addEventListener("click", () => {
    prevSlideFunc();
    restart();
  });

  function start() {
    interval = setInterval(nextSlide, 5000);
  }

  function restart() {
    clearInterval(interval);
    start();
  }

  showSlide(index);
  start();
}


document.addEventListener("DOMContentLoaded", () => {
  setupThemeFromStorage();
  setupThemeToggle();
  loadIncludes();
});
