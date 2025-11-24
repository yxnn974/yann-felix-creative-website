// =========================
// SLIDER HERO AVEC FLECHES
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const prev = document.querySelector(".hero-prev");
  const next = document.querySelector(".hero-next");

  if (!slides.length) return;

  let index = 0;

  function showSlide(i) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlideFunc() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  // Boutons cliquables
  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlideFunc);

  // Défilement auto (10 sec)
  setInterval(nextSlide, 10000);
});
