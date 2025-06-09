document.addEventListener("DOMContentLoaded", function () {
    // Actualizar año en el footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Menú hamburguesa para móviles
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Navbar con efecto al hacer scroll
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Galería con lazy loading y carga progresiva
    const galleryContainer = document.getElementById("gallery-container");
    const loadMoreBtn = document.getElementById("loadMore");
    let currentPage = 0;
    const imagesPerPage = 6;

    const imageUrls = [
        "https://i.imgur.com/2a6uHVc.jpeg",
        "https://i.imgur.com/wUD71AK.jpeg",
        // ... (todas las URLs de imágenes)
    ];

    function loadImages() {
        const start = currentPage * imagesPerPage;
        const end = start + imagesPerPage;
        const imagesToLoad = imageUrls.slice(start, end);

        imagesToLoad.forEach((url, index) => {
            const img = document.createElement("img");
            img.src = url;
            img.loading = "lazy";
            img.alt = `Fotografía profesional por REYMARS - ${start + index + 1}`;
            img.classList.add("gallery-item");
            
            img.addEventListener("click", () => openLightbox(url));
            galleryContainer.appendChild(img);
        });

        currentPage++;
        if (currentPage * imagesPerPage >= imageUrls.length) {
            loadMoreBtn.style.display = "none";
        }
    }

    // Lightbox
    function openLightbox(url) {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        lightboxImg.src = url;
        lightbox.style.display = "flex";
    }

    document.querySelector(".close").addEventListener("click", () => {
        document.getElementById("lightbox").style.display = "none";
    });

    // Carga inicial
    loadImages();
    loadMoreBtn.addEventListener("click", loadImages);
});
