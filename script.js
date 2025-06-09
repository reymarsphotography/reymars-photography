document.addEventListener("DOMContentLoaded", () => {
  // Mostrar año actual en footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Menú hamburguesa responsive
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "auto";
  });

  // Cerrar menú al clicar un link en móvil
  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // Cambiar navbar al hacer scroll
  window.addEventListener("scroll", () => {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
  });

  // Construir la galería dinámicamente
  const galleryGrid = document.querySelector('.gallery-grid');
  const images = [
    "https://i.imgur.com/2a6uHVc.jpeg",
    "https://i.imgur.com/wUD71AK.jpeg",
    "https://i.imgur.com/FbBWqmg.jpeg",
    "https://i.imgur.com/4lERITz.jpeg",
    "https://i.imgur.com/TQtf2S5.jpeg",
    "https://i.imgur.com/FP5xOxH.jpeg",
    "https://i.imgur.com/X6pTVNx.jpeg",
    "https://i.imgur.com/fTUAz2K.jpeg",
    "https://i.imgur.com/8fkn88s.jpeg",
    "https://i.imgur.com/HmMPhol.jpeg"
  ];

  images.forEach(imgUrl => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    imgElement.alt = "Trabajo de Reymars Fotografía";

    galleryItem.appendChild(imgElement);
    galleryGrid.appendChild(galleryItem);
  });
});
