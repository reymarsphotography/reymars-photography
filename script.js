document.addEventListener("DOMContentLoaded", () => {
  // Año actual en el footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Menú hamburguesa
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "auto";
  });

  // Efecto de scroll en navbar
  window.addEventListener("scroll", () => {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
  });

  // Configuración de la galería
  const galleryContainer = document.getElementById("gallery-container");
  const loadMoreBtn = document.getElementById("loadMore");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  
  let currentPage = 0;
  const imagesPerPage = 6;
  const imageUrls = [
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

  // Carga de imágenes con paginación
  function loadImages() {
    const start = currentPage * imagesPerPage;
    const end = Math.min(start + imagesPerPage, imageUrls.length);
    const imagesToLoad = imageUrls.slice(start, end);

    imagesToLoad.forEach((url, index) => {
      const item = document.createElement("div");
      item.className = "gallery-item";

      const img = new Image();
      img.src = url;
      img.alt = `Foto ${start + index + 1}`;
      img.decoding = "async";
      img.loading = "lazy";

      img.onerror = () => {
        img.src = "https://via.placeholder.com/600x800?text=Imagen+no+disponible";
      };

      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });

      img.addEventListener("click", () => openLightbox(url));
      item.appendChild(img);
      galleryContainer.appendChild(item);
    });

    currentPage++;
    if (currentPage * imagesPerPage >= imageUrls.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  // Lightbox functions
  function openLightbox(url) {
    lightboxImg.src = url;
    lightbox.style.display = "flex";
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  }

  // Event listeners para lightbox
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // Carga inicial
  loadImages();
  loadMoreBtn.addEventListener("click", loadImages);

  // Cerrar menú al hacer clic en un enlace (para móviles)
  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });
});
