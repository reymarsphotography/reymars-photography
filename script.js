document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const imageData = [
        { src: "images/Daniela Fuente izquierda.webp", position: "left" },
        { src: "images/Marilia Low key mirando a la izquierda.webp", position: "center" },
        { src: "images/Steven Low key mirando a la izquierda.webp", position: "right" },
        { src: "images/Dario mirando a la derecha.webp", position: "left" },
        { src: "images/Mari jirasoles centro.webp", position: "center" },
        { src: "images/Lazaro flores rojas mirando a la derecha.webp", position: "right" },
        { src: "images/Marinalva ventana mirando a la izquierda.webp", position: "left" },
        { src: "images/jony y stef hig key centro.webp", position: "center" },
        { src: "images/Familia yenki centro.webp", position: "right" },
        { src: "images/Anay Feliz mirando al frente izquierdo.webp", position: "left" },
        { src: "images/Steven leyendo centro.webp", position: "center" },
        { src: "images/Lazaro smoking centro.webp", position: "right" },
        { src: "images/Marinalva princesa mirando a la derecha.webp", position: "left" },
        { src: "images/Daimer y Marilia mirandose uno al otro en el centro.webp", position: "center" },
        { src: "images/Daniela sentada mirando a la derecha.webp", position: "right" },
        { src: "images/Marinalva Princesa close up centro.webp", position: "left" },
        { src: "images/Mari rosa mirando centro abajo.webp", position: "center" },
        { src: "images/Sami bussiness lado derecho.webp", position: "right" }
    ];

    const galleryContainer = document.getElementById('gallery-container');

    imageData.forEach((image) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        if (image.src.includes("Marinalva princesa mirando a la derecha")) {
            galleryItem.classList.add('destacado', 'ajuste-marinalva');
        }

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.src.split("/").pop().replace(/\.webp$/, "");
        img.loading = "lazy";

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    function preloadImages() {
        imageData.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }
    preloadImages();

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(contactForm);

            formStatus.textContent = 'Enviando mensaje...';
            formStatus.style.color = '#fff';

            fetch('https://formspree.io/f/xyzjedrz', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
                .then(response => {
                    if (response.ok) {
                        formStatus.textContent = '¡Mensaje enviado con éxito!';
                        formStatus.style.color = '#4CAF50';
                        contactForm.reset();
                    } else {
                        throw new Error('Error al enviar el mensaje');
                    }
                })
                .catch(() => {
                    formStatus.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
                    formStatus.style.color = '#f44336';
                });
        });
    }
});
