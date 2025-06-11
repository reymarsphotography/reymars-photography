document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Tus imágenes
    const imageData = [
        { src: "images/Daimer_y_Marilia_mirandose_uno_al_otro_en_el_centro.webp", alt: "Daimer y Marilia - Conexión de pareja" },
        { src: "images/Marilia_Low_key_mirando_a_la_izquierda.webp", alt: "Marilia - Retrato atmosférico" },
        { src: "images/Dario_mirando_a_la_derecha.webp", alt: "Dario - Mirada intensa" },
        { src: "images/Daniela_sentada_mirando_a_la_derecha.webp", alt: "Daniela - Pose natural" },
        { src: "images/Marinalva_ventana_mirando_a_la_izquierda.webp", alt: "Marinalva - Luz de ventana" },
        { src: "images/Daniela_Fuente_izquierda.webp", alt: "Daniela - Interacción con agua" },
        { src: "images/Marinalva_princesa_mirando_a_la_derecha.webp", alt: "Marinalva - Elegancia real", destacado: true },
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
        { src: "images/Steven_Low_key_mirando_a_la_izquierda.webp", alt: "Steven - Dramatismo" },
        { src: "images/Lazaro_flores_rojas_mirando_a_la_derecha.webp", alt: "Lázaro - Flores rojas" },
        { src: "images/Sami_bussiness_lado_derecho.webp", alt: "Sami - Actitud profesional" },
        { src: "images/Lazaro_smoking_centro.webp", alt: "Lázaro - Estilo icónico" },
        { src: "images/Familia_yenki_centro.webp", alt: "Familia Yenki - Unión" },
        { src: "images/Marinalva_acostada.webp", alt: "Marinalva - Relajada" },
        { src: "images/Rey_y_Mari_del_lado_derecho.webp", alt: "Rey y Mari - Complicidad" }
    ];

    // Generar galería
    const gallery = document.querySelector('.gallery-container');
    
    imageData.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        if (index === 6) item.classList.add('destacado'); // Ítem destacado

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

    // Formulario
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        status.textContent = 'Enviando...';
        status.style.color = '#4CAF50';

        setTimeout(() => {
            status.textContent = '¡Mensaje enviado con éxito!';
            form.reset();
        }, 1500);
    });
});