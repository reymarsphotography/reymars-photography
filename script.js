document.addEventListener('DOMContentLoaded', function () {
    // === 1. Navbar fija con efecto al hacer scroll ===
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    });

    // === 2. Datos de imágenes para la galería ===
    const imageData = [
        { src: "images/Daimer_y_Marilia_mirandose_uno_al_otro_en_el_centro.webp", alt: "Daimer y Marilia - Conexión de pareja" },
        { src: "images/Marilia_Low_key_mirando_a_la_izquierda.webp", alt: "Marilia - Retrato atmosférico" },
        { src: "images/Dario_mirando_a_la_derecha.webp", alt: "Dario - Mirada intensa a cámara" },
        { src: "images/Daniela_sentada_mirando_a_la_derecha.webp", alt: "Daniela - Pose natural" },
        { src: "images/Marinalva_ventana_mirando_a_la_izquierda.webp", alt: "Marinalva - Luz de ventana" },
        { src: "images/Daniela_Fuente_izquierda.webp", alt: "Daniela - Interacción con agua" },
        { src: "images/Marinalva_princesa_mirando_a_la_derecha.webp", alt: "Marinalva - Elegancia real" },
        { src: "images/Marinalva_Princesa_close_up_centro.webp", alt: "Marinalva - Detalle facial" },
        { src: "images/Marinalva_azul_mirando_a_la_izquierda.webp", alt: "Marinalva - Estilo clásico" },
        { src: "images/Anay_Feliz_mirando_al_frente_izquierdo.webp", alt: "Anay - Alegría espontánea" },
        { src: "images/Mari_rosa_mirando_centro_abajo.webp", alt: "Mari - Tonos rosados" },
        { src: "images/Steven_feliz_centro.webp", alt: "Steven - Alegría" },
        { src: "images/Steven_leyendo_centro.webp", alt: "Steven - Concentración" },
        { src: "images/Mari_jirasoles_centro.webp", alt: "Mari - Girasoles" },
        { src: "images/Nino_reloj_del_lado_izquierdo.webp", alt: "Niño - Juego creativo" },
        { src: "images/jony_y_stef_hig_key_centro.webp", alt: "Jony y Stef - Amor en alta clave" },
        { src: "images/Embarazo_y_Juli_del_lado_izquierdo.webp", alt: "Embarazo - Momento familiar" },
        { src: "images/Embarazo_arriba_lado_derecho.webp", alt: "Embarazo - Belleza natural" },
        { src: "images/Juli_piano_lado_derecho.webp", alt: "Juli - Talento musical" },
        { src: "images/Steven_Low_key_mirando_a_la_izquierda.webp", alt: "Steven - Dramatismo en claroscuro" },
        { src: "images/Lazaro_flores_rojas_mirando_a_la_derecha.webp", alt: "Lázaro - Flores rojas (contraste)" },
        { src: "images/Sami_bussiness_lado_derecho.webp", alt: "Sami - Actitud profesional" },
        { src: "images/Lazaro_smoking_centro.webp", alt: "Lázaro - Estilo icónico" },
        { src: "images/Familia_yenki_centro.webp", alt: "Familia Yenki - Unión" },
        { src: "images/Marinalva_acostada.webp", alt: "Marinalva - Relajada" },
        { src: "images/Rey_y_Mari_del_lado_derecho.webp", alt: "Rey y Mari - Complicidad" }
    ];

    const galleryContainer = document.getElementById('gallery-grid');

    // === 3. Generar galería dinámica ===
    imageData.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        if (index === 6) galleryItem.classList.add('destacado');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = 'lazy';
        img.decoding = 'async';

        img.onerror = function () {
            console.warn(`Error cargando imagen: ${image.src}`);
            this.src = 'images/placeholder.jpg';
            this.alt = 'Imagen no disponible';
        };

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });

    // === 4. Scroll suave ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // === 5. Precarga de imágenes ===
    function preloadImages() {
        imageData.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }
    preloadImages();

    // === 6. Formulario de contacto ===
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
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
                    return response.json().then(data => {
                        throw new Error(data?.message || 'Error del servidor');
                    });
                }
            })
            .catch(error => {
                formStatus.textContent = 'Hubo un error al enviar el mensaje.';
                formStatus.style.color = '#f44336';
                console.error(error);
            });
        });
    }
});