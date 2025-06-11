document.addEventListener('DOMContentLoaded', function() {
    // ===== 1. Efecto Navbar =====
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.background = window.scrollY > 50 ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.9)';
    });

    // ===== 2. Datos de imágenes =====
    const imageData = [
        { src: "images/Daimer_y_Marilia_mirandose_uno_al_otro_en_el_centro.webp", alt: "Daimer y Marilia - Conexión de pareja" },
        { src: "images/Marilia_Low_key_mirando_a_la_izquierda.webp", alt: "Marilia - Retrato atmosférico" },
        { src: "images/Dario_mirando_a_la_derecha.webp", alt: "Dario - Mirada intensa" },
        { src: "images/Daniela_sentada_mirando_a_la_derecha.webp", alt: "Daniela - Pose natural" },
        { src: "images/Marinalva_ventana_mirando_a_la_izquierda.webp", alt: "Marinalva - Luz de ventana" },
        { src: "images/Daniela_Fuente_izquierda.webp", alt: "Daniela - Interacción con agua" },
        { src: "images/Marinalva_princesa_mirando_a_la_derecha.webp", alt: "Marinalva - Elegancia real", destacado: true },
        { src: "images/Marinalva_Princesa_close_up_centro.webp", alt: "Marinalva - Detalle facial" },
        // ... Añade aquí el resto de tus imágenes ...
        { src: "images/Rey_y_Mari_del_lado_derecho.webp", alt: "Rey y Mari - Complicidad" }
    ];

    // ===== 3. Generar Galería =====
    const gallery = document.querySelector('.gallery-container');
    
    imageData.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        if (image.destacado) {
            item.classList.add('destacado');
        }

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = 'lazy';

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `<p>${image.alt}</p>`;

        item.appendChild(img);
        item.appendChild(overlay);
        gallery.appendChild(item);
    });

    // ===== 4. Formulario =====
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            status.textContent = 'Enviando mensaje...';
            status.style.color = '#4CAF50';
            
            // Simulación de envío (reemplazar con código real)
            setTimeout(() => {
                status.textContent = '¡Mensaje enviado con éxito!';
                form.reset();
            }, 1500);
        });
    }

    // ===== 5. Scroll Suave =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
});