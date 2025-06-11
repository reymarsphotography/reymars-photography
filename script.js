document.addEventListener('DOMContentLoaded', function() {
    // 1. NAVBAR SCROLL
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.backgroundColor = window.scrollY > 50 ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.9)';
    });

    // 2. GALERÍA DINÁMICA
    const gallery = document.querySelector('.gallery-container');
    const imageData = [
        // Tu lista completa de imágenes
        { src: "images/Daimer_y_Marilia_mirandose_uno_al_otro_en_el_centro.webp", alt: "Daimer y Marilia" },
        { src: "images/Marilia_Low_key_mirando_a_la_izquierda.webp", alt: "Marilia" },
        // ... todas tus imágenes ...
        { src: "images/Rey_y_Mari_del_lado_derecho.webp", alt: "Rey y Mari", destacado: true }
    ];

    imageData.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        if (image.destacado) item.classList.add('destacado');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = 'lazy';

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `<p>${image.alt}</p>`;

        item.append(img, overlay);
        gallery.appendChild(item);
    });

    // 3. FORMULARIO
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const status = document.getElementById('form-status');
            status.textContent = 'Enviando...';
            
            setTimeout(() => {
                status.textContent = 'Mensaje enviado!';
                form.reset();
            }, 1500);
        });
    }
});