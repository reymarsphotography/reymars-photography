document.addEventListener('DOMContentLoaded', function () {
    // Efecto de navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Configuración de imágenes con orden personalizado
    const imageData = [
        { src: "images/Daniela Fuente izquierda.webp", alt: "Daniela - Interacción con agua", position: "left" },
        { src: "images/Marilia Low key mirando a la izquierda.webp", alt: "Marilia - Retrato atmosférico", position: "center" },
        { src: "images/Steven Low key mirando a la izquierda.webp", alt: "Steven - Dramatismo en claroscuro", position: "right" },

        { src: "images/Dario mirando a la derecha.webp", alt: "Dario - Mirada intensa a cámara", position: "left" },
        { src: "images/Mari jirasoles centro.webp", alt: "Mari - Girasoles", position: "center" },
        { src: "images/Lazaro flores rojas mirando a la derecha.webp", alt: "Lázaro - Flores rojas (contraste)", position: "right" },

        { src: "images/Marinalva ventana mirando a la izquierda.webp", alt: "Marinalva - Luz de ventana", position: "left" },
        { src: "images/jony y stef hig key centro.webp", alt: "Jony y Stef - Amor en alta clave", position: "center" },
        { src: "images/Familia yenki centro.webp", alt: "Familia Yenki - Unión", position: "right" },

        { src: "images/Anay Feliz mirando al frente izquierdo.webp", alt: "Anay - Alegría espontánea", position: "left" },
        { src: "images/Steven leyendo centro.webp", alt: "Steven - Concentración", position: "center" },
        { src: "images/Lazaro smoking centro.webp", alt: "Lázaro - Estilo icónico", position: "right" },

        { src: "images/Marinalva princesa mirando a la derecha.webp", alt: "Marinalva - Elegancia real", position: "left" },
        { src: "images/Daimer y Marilia mirandose uno al otro en el centro.webp", alt: "Daimer y Marilia - Conexión de pareja", position: "center" },
        { src: "images/Daniela sentada mirando a la derecha.webp", alt: "Daniela - Pose natural", position: "right" },

        { src: "images/Marinalva Princesa close up centro.webp", alt: "Marinalva - Detalle facial", position: "left" },
        { src: "images/Mari rosa mirando centro abajo.webp", alt: "Mari - Tonos rosados", position: "center" },
        { src: "images/Sami bussiness lado derecho.webp", alt: "Sami - Actitud profesional", position: "right" }
    ];

    const galleryContainer = document.querySelector('.gallery-grid');
    imageData.forEach((image) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        // Ajuste especial solo para la imagen destacada
        if (image.src === "images/Marinalva princesa mirando a la derecha.webp") {
            galleryItem.classList.add('destacado');
            galleryItem.style.height = '500px';
        }

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = "lazy";

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });

    // Scroll suave para navegación interna
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

    // Precarga de imágenes para rendimiento
    function preloadImages() {
        imageData.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }
    preloadImages();

    // Manejo del formulario de contacto
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
            .catch(error => {
                formStatus.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
                formStatus.style.color = '#f44336';
            });
        });
    }
});
