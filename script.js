// Galería de imágenes
const gallery = document.querySelector('.gallery');
const imageFiles = [
    'Daimer y Marilia mirandose uno al otro en el centro.webp',
    'Marilia Low key mirando a la izquierda.webp',
    'Dario mirando a la derecha.webp',
    'Daniela sentada mirando a la derecha.webp',
    'Marinalva ventana mirando a la izquierda.webp',
    'Daniela Fuente izquierda.webp',
    'Marinalva princesa mirando a la derecha.webp',
    'Marinalva Princesa close up centro.webp',
    'Marinalva azul mirando a la izquierda.webp',
    'Anay Feliz mirando al frente izquierdo.webp',
    'Mari rosa mirando centro abajo.webp',
    'Steven feliz centro.webp',
    'Steven leyendo centro.webp',
    'Mari jirasoles centro.webp',
    'Nino reloj del lado izquierdo.webp',
    'jony y stef hig key centro.webp',
    'Embarazo y Juli del lado izquierdo.webp',
    'Embarazo arriba lado derecho.webp',
    'Juli piano lado derecho.webp',
    'Steven Low key mirando a la izquierda.webp',
    'Lazaro flores rojas mirando a la derecha.webp',
    'Sami bussiness lado derecho.webp',
    'Lazaro smoking centro.webp',
    'Familia yenki centro.webp'
];

// Cargar imágenes en la galería
imageFiles.forEach(file => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = `images/${file}`;
    img.alt = 'Trabajo fotográfico de Reymars';
    img.loading = 'lazy'; // Optimización de carga
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-search-plus';
    
    overlay.appendChild(icon);
    galleryItem.appendChild(img);
    galleryItem.appendChild(overlay);
    gallery.appendChild(galleryItem);
});

// Testimonials Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

function nextTestimonial() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    showTestimonial(nextIndex);
}

function prevTestimonial() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = testimonials.length - 1;
    showTestimonial(prevIndex);
}

// Event Listeners
nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
    });
});

// Auto slide
setInterval(nextTestimonial, 5000);

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulación de envío exitoso
    alert('¡Gracias por tu mensaje! Te contactaré lo antes posible.');
    contactForm.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil si está abierto
            if (navUl.style.display === 'flex') {
                navUl.style.display = 'none';
            }
        }
    });
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navUl = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', function() {
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navUl.style.display = 'none';
        }
    });
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Lazy loading para imágenes
if ('loading' in HTMLImageElement.prototype) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback para navegadores que no soportan lazy loading
    const lazyScript = document.createElement('script');
    lazyScript.src = 'https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js';
    document.body.appendChild(lazyScript);
    
    lazyScript.onload = () => {
        const observer = lozad();
        observer.observe();
    };
}
