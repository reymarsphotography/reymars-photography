document.addEventListener('DOMContentLoaded', function() {
    // Efecto de navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Configuración de imágenes con orden personalizado
    const imageData = [
        // Fila 1
        { 
            src: "images/Daniela Fuente izquierda.jpg", 
            alt: "Daniela - Interacción con agua",
            position: "left"
        },
        { 
            src: "images/Marilia Low key mirando a la izquierda.jpg", 
            alt: "Marilia - Retrato atmosférico",
            position: "center"
        },
        { 
            src: "images/Steven Low key mirando a la izquierda.jpg", 
            alt: "Steven - Dramatismo en claroscuro",
            position: "right"
        },
        
        // Fila 2
        { 
            src: "images/Dario mirando a la derecha.jpg", 
            alt: "Dario - Mirada intensa a cámara",
            position: "left"
        },
        { 
            src: "images/Mari jirasoles centro.jpg", 
            alt: "Mari - Girasoles",
            position: "center"
        },
        { 
            src: "images/Lazaro flores rojas mirando a la derecha.jpg", 
            alt: "Lázaro - Flores rojas (contraste)",
            position: "right"
        },
        
        // Fila 3
        { 
            src: "images/Marinalva ventana mirando a la izquierda.jpg", 
            alt: "Marinalva - Luz de ventana",
            position: "left"
        },
        { 
            src: "images/jony y stef hig key centro.jpg", 
            alt: "Jony y Stef - Amor en alta clave",
            position: "center"
        },
        { 
            src: "images/Familia yenki centro.jpg", 
            alt: "Familia Yenki - Unión",
            position: "right"
        },
        
        // Fila 4
        { 
            src: "images/Anay Feliz mirando al frente izquierdo.jpg", 
            alt: "Anay - Alegría espontánea",
            position: "left"
        },
        { 
            src: "images/Steven leyendo centro.jpg", 
            alt: "Steven - Concentración",
            position: "center"
        },
        { 
            src: "images/Lazaro smoking centro.jpg", 
            alt: "Lázaro - Estilo icónico",
            position: "right"
        },
        
        // Fila 5
        { 
            src: "images/Marinalva princesa mirando a la derecha.jpg", 
            alt: "Marinalva - Elegancia real",
            position: "left"
        },
        { 
            src: "images/Daimer y Marilia mirandose uno al otro en el centro.jpg", 
            alt: "Daimer y Marilia - Conexión de pareja",
            position: "center"
        },
        { 
            src: "images/Daniela sentada mirando a la derecha.jpg", 
            alt: "Daniela - Pose natural",
            position: "right"
        },
        
        // Fila 6
        { 
            src: "images/Marinalva Princesa close up centro.jpg", 
            alt: "Marinalva - Detalle facial",
            position: "left"
        },
        { 
            src: "images/Mari rosa mirando centro abajo.jpg", 
            alt: "Mari - Tonos rosados",
            position: "center"
        },
        { 
            src: "images/Sami bussiness lado derecho.jpg", 
            alt: "Sami - Actitud profesional",
            position: "right"
        }
    ];

    // Cargar imágenes en la galería
    const galleryContainer = document.getElementById('gallery-container');
    
    imageData.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.loading = "lazy";
        
        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });

    // Scroll suave en navegación
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

    // Precarga de imágenes para mejor performance
    function preloadImages() {
        imageData.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }
    preloadImages();
});