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

  // Crear modal lightbox para imágenes
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.cssText = `
    position: fixed; top:0; left:0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.9);
    display: flex; justify-content: center; align-items: center;
    visibility: hidden; opacity: 0; transition: opacity 0.3s ease;
    z-index: 2000;
    cursor: pointer;
  `;
  const img = document.createElement('img');
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.style.borderRadius = '8px';
  img.style.boxShadow = '0 0 40px rgba(255,255,255,0.1)';
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === img) {
      lightbox.style.opacity = '0';
      lightbox.style.visibility = 'hidden';
    }
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
    "https://i.imgur.com/HmMPhol.jpeg",
    "https://i.imgur.com/2KcEGmI.jpeg",
    "https://i.imgur.com/5XVTCgT.jpeg",
    "https://i.imgur.com/x1aFy64.jpeg",
    "https://i.imgur.com/ALnvgCM.jpeg",
    "https://i.imgur.com/f3HH7uL.jpeg",
    "https://i.imgur.com/QDwXrI8.jpeg",
    "https://i.imgur.com/rG8Jd5L.jpeg",
    "https://i.imgur.com/3YQ4AAO.jpeg",
    "https://i.imgur.com/yVqGlqd.jpeg",
    "https://i.imgur.com/3kwnRRo.jpeg",
    "https://i.imgur.com/gkiolcI.jpeg",
    "https://i.imgur.com/Mr1D5gq.jpeg",
    "https://i.imgur.com/jGaXbKY.jpeg",
    "https://i.imgur.com/JhKjtZv.jpeg",
    "https://i.imgur.com/VNg8XRe.jpeg",
    "https://i.imgur.com/7gIn9o2.jpeg"
  ];

  images.forEach(imgUrl => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    imgElement.alt = "Trabajo de Reymars Fotografía";

    galleryItem.appendChild(imgElement);
    galleryGrid.appendChild(galleryItem);

    // Agregar evento para abrir lightbox
    imgElement.addEventListener('click', () => {
      img.src = imgUrl;
      lightbox.style.visibility = 'visible';
      lightbox.style.opacity = '1';
    });
  });
});
