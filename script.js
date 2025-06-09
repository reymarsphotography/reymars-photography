document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
  });

  const galleryContainer = document.getElementById("gallery-container");
  const loadMoreBtn = document.getElementById("loadMore");
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
    // Agrega más si lo deseas
  ];

  function loadImages() {
    const start = currentPage * imagesPerPage;
    const end = start + imagesPerPage;
    const imagesToLoad = imageUrls.slice(start, end);

    imagesToLoad.forEach((url, index) => {
      const item = document.createElement("div");
      item.className = "gallery-item";

      const img = document.createElement("img");
      img.src = url;
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = `Foto ${start + index + 1}`;

      img.onload = () => img.classList.add("loaded");
      img.onerror = () => (img.src = "fallback.jpg");

      img.addEventListener("click", () => openLightbox(url));
      item.appendChild(img);
      galleryContainer.appendChild(item);
    });

    currentPage++;
    if (currentPage * imagesPerPage >= imageUrls.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  function openLightbox(url) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = url;
    lightbox.style.display = "flex";
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.body.style.overflow = "auto";
  }

  document.querySelector(".close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  loadImages();
  loadMoreBtn.addEventListener("click", loadImages);
});
