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

// Orden estratégico: ejemplo, intercalando miradas y colores
imageFiles.sort(() => Math.random() - 0.5);

imageFiles.forEach(filename => {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  const img = document.createElement('img');
  img.src = `assets/images/${filename}`;
  img.alt = filename.replace(/\.webp$/, '');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const icon = document.createElement('i');
  icon.className = 'fas fa-search-plus';
  overlay.append(icon);
  item.append(img, overlay);
  gallery.append(item);
});

// Testimonials Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  testimonials[i].classList.add('active');
  dots[i].classList.add('active');
  currentIndex = i;
}
function nextTestimonial() { showTestimonial((currentIndex + 1) % testimonials.length); }
function prevTestimonial() { showTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length); }

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);
dots.forEach((d, i) => d.addEventListener('click', () => showTestimonial(i)));
setInterval(nextTestimonial, 5000);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a =>
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  })
);

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navUl = document.querySelector('nav ul');
mobileMenuBtn.addEventListener('click', () => {
  navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
});

// Sticky header
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('sticky', window.scrollY > 100);
});
