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
        { src: "images/Daimer_y_Marilia_mirandose_uno_al_otro_en_el_centro.webp", alt: "Daimer y Marilia - Conexión de pareja", position: "center" },
        { src: "images/Marilia_Low_key_mirando_a_la_izquierda.webp", alt: "Marilia - Retrato atmosférico", position: "center" },
        { src: "images/Dario_mirando_a_la_derecha.webp", alt: "Dario - Mirada intensa a cámara", position: "left" },
        { src: "images/Daniela_sentada_mirando_a_la_derecha.webp", alt: "Daniela - Pose natural", position: "right" },
        { src: "images/Marinalva_ventana_mirando_a_la_izquierda.webp", alt: "Marinalva - Luz de ventana", position: "left" },
        { src: "images/Daniela_Fuente_izquierda.webp", alt: "Daniela - Interacción con agua", position: "left" },
        { src: "images/Marinalva_princesa_mirando_a_la_derecha.webp", alt: "Marinalva - Elegancia real", position: "left" },
        { src: "images/Marinalva_Princesa_close_up_centro.webp", alt: "Marinalva - Detalle facial", position: "left" },
        { src: "images/Marinalva_azul_mirando_a_la_izquierda.webp", alt: "Marinalva - Estilo clásico", position: "left" },
        { src: "images/Anay_Feliz_mirando_al_frente_izquierdo.webp", alt: "Anay - Alegría espontánea", position: "left" },
        { src: "images/Mari_rosa_mirando_centro_abajo.webp", alt: "Mari - Tonos rosados", position: "center" },
        { src: "images/Steven_feliz_centro.webp", alt: "Steven - Alegría", position: "center" },
        { src: "images/Steven_leyendo_centro.webp", alt: "Steven - Concentración", position: "center" },
        { src: "images/Mari_jirasoles_centro.webp", alt: "Mari - Girasoles", position: "center" },
        { src: "images/Nino_reloj_del_lado_izquierdo.webp", alt: "Niño - Juego creativo", position: "left" },
        { src: "images/jony_y_stef_hig_key_centro.webp", alt: "Jony y Stef - Amor en alta clave", position: "center" },
        { src: "images/Embarazo_y_Juli_del_lado_izquierdo.webp", alt: "Embarazo - Momento familiar", position: "center" },
        { src: "images/Embarazo_arriba_lado_derecho.webp", alt: "Embarazo - Belleza natural", position: "right" },
        { src: "images/Juli_piano_lado_derecho.webp", alt: "Juli - Talento musical", position: "right" },
        { src: "images/Steven_Low_key_mirando_a_la_izquierda.webp", alt: "Steven - Dramatismo en claroscuro", position: "center" },
        { src: "images/Lazaro_flores_rojas_mirando_a_la_derecha.webp", alt: "Lázaro - Flores rojas (contraste)", position: "right" },
        { src: "images/Sami_bussiness_lado_derecho.webp", alt: "Sami - Actitud profesional", position: "right" },
        { src: "images/Lazaro_smoking_centro.webp", alt: "Lázaro - Estilo icónico", position: "right" },
        { src: "images/Familia_yenki_centro.webp", alt: "Familia Yenki - Unión", position: "right" },
        { src: "images/Marinalva_acostada.webp", alt: "Marinalva - Relajada", position: "center" },
        { src: "images/Rey_y_Mari_del_lado_derecho.webp", alt: "Rey y Mari - Complicidad", position: "right" }
    ];

    const galleryContainer = document.getElementById('gallery-grid');
    imageData.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        // Añadir clase destacado a una imagen específica
        if (image.src === "images/Marinalva_princesa_mirando_a_la_derecha.webp" && index === 6) {
            galleryItem.classList.add('destacado');
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
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
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

            fetch('https://formspree.io/f/xyzjedrz',  {
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
