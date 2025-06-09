// Galería de imágenes con nuevo orden
const gallery = document.querySelector('.gallery');
const imageUrls = [
    'images/Dario mirando a la derecha.webp',           // Izquierda
    'images/Lazaro flores rojas mirando a la derecha.webp', // Izquierda
    'images/Daniela Fuente izquierda.webp',             // Izquierda
    
    // Resto de imágenes mezcladas
    'images/Marinalva princesa mirando a la derecha.webp',
    'images/Daimer y Marilia mirandose uno al otro en el centro.webp',
    'images/Marinalva azul mirando a la izquierda.webp',
    'images/Marinalva ventana mirando a la izquierda.webp',
    'images/Mari rosa mirando centro abajo.webp',
    'images/Steven feliz centro.webp',
    'images/Steven leyendo centro.webp',
    'images/Mari jirasoles centro.webp',
    'images/Nino reloj del lado izquierdo.webp',
    'images/jony y stef hig key centro.webp',
    'images/Embarazo y Juli del lado izquierdo.webp',
    'images/Embarazo arriba lado derecho.webp',
    'images/Juli piano lado derecho.webp',
    'images/Sami bussiness lado derecho.webp',
    'images/Lazaro smoking centro.webp',
    'images/Familia yenki centro.webp',
    'images/Daniela sentada mirando a la derecha.webp',
    'images/Marinalva Princesa close up centro.webp',
    'images/Anay Feliz mirando al frente izquierdo.webp',
    'images/Marilia Low key mirando a la izquierda.webp', // Centro
    
    'images/Steven Low key mirando a la izquierda.webp'   // Derecha
];

// Cargar imágenes en la galería
imageUrls.forEach(url => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Trabajo fotográfico de Reymars';
    
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
    
    // Aquí iría la lógica de envío del formulario
    // Por ahora solo mostraremos un mensaje de éxito
    
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
        }
    });
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navUl = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', function() {
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});
