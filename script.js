// Galería de imágenes
const gallery = document.querySelector('.gallery');
const imageUrls = [
    'https://i.imgur.com/wUD71AK.jpeg',
    'https://i.imgur.com/FbBWqmg.jpeg',
    'https://i.imgur.com/TQtf2S5.jpeg',
    'https://i.imgur.com/FP5xOxH.jpeg',
    'https://i.imgur.com/X6pTVNx.jpeg',
    'https://i.imgur.com/fTUAz2K.jpeg',
    'https://i.imgur.com/8fkn88s.jpeg',
    'https://i.imgur.com/HmMPhol.jpeg',
    'https://i.imgur.com/2KcEGmI.jpeg',
    'https://i.imgur.com/5XVTCgT.jpeg',
    'https://i.imgur.com/x1aFy64.jpeg',
    'https://i.imgur.com/ALnvgCM.jpeg',
    'https://i.imgur.com/f3HH7uL.jpeg',
    'https://i.imgur.com/QDwXrI8.jpeg',
    'https://i.imgur.com/rG8Jd5L.jpeg',
    'https://i.imgur.com/3YQ4AAO.jpeg',
    'https://i.imgur.com/yVqGlqd.jpeg',
    'https://i.imgur.com/3kwnRRo.jpeg',
    'https://i.imgur.com/gkiolcI.jpeg',
    'https://i.imgur.com/Mr1D5gq.jpeg',
    'https://i.imgur.com/jGaXbKY.jpeg',
    'https://i.imgur.com/JhKjtZv.jpeg',
    'https://i.imgur.com/VNg8XRe.jpeg',
    'https://i.imgur.com/7gIn9o2.jpeg'
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
