document.addEventListener("DOMContentLoaded", function () {
    // Actualizar año en el footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Menú hamburguesa para móviles
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function() {
        this.classList.toggle("active");
        navLinks.classList.toggle("active");
        
        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll(".nav-right a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
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

    function loadImages() {
        const start = currentPage * imagesPerPage;
        const end = start + imagesPerPage;
        const imagesToLoad = imageUrls.slice(start, end);

        imagesToLoad.forEach((url, index) => {
            const galleryItem = document.createElement("div");
            galleryItem.className = "gallery-item";
            
            const img = document.createElement("img");
            img.src = url;
            img.loading = "lazy";
            img.alt = `Fotografía profesional por REYMARS - ${start + index + 1}`;
            
            img.addEventListener("click", () => openLightbox(url));
            img.addEventListener("keydown", (e) => {
                if (e.key === "Enter") openLightbox(url);
            });
            
            galleryItem.appendChild(img);
            galleryContainer.appendChild(galleryItem);
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
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        const lightbox = document.getElementById("lightbox");
        lightbox.style.display = "none";
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";
    }

    document.querySelector(".close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox").addEventListener("click", (e) => {
        if (e.target === document.getElementById("lightbox")) {
            closeLightbox();
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeLightbox();
        }
    });

    // Carga inicial
    loadImages();
    loadMoreBtn.addEventListener("click", loadImages);
    loadMoreBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter") loadImages();
    });
});
