document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const imageData = [
        // (MISMO contenido, sin cambios en orden ni estructura)
        // ...
        {
            src: "images/Marinalva princesa mirando a la derecha.webp",
            alt: "Marinalva - Elegancia real",
            position: "left"
        },
        // ...
    ];

    const galleryContainer = document.getElementById('gallery-container');

    imageData.forEach((image) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        if (image.src === "images/Marinalva princesa mirando a la derecha.webp") {
            galleryItem.classList.add('destacado', 'ajuste-marinalva');
        }

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = "lazy";

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        contactForm.addEventListener('submit', function(e) {
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
