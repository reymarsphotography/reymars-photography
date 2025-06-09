document.addEventListener("DOMContentLoaded", () => {
  // Mostrar año actual en footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Menú hamburguesa responsive
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "auto";
  });

  // Cerrar menú al clicar un link en móvil
  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // Cambiar navbar al hacer scroll
  window.addEventListener("scroll", () => {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
  });

  // Crear modal lightbox para imágenes
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  const img = document.createElement('img');
  lightbox.appendChild(img);

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
  });

  // Abrir lightbox al clicar en una imagen
  document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.addEventListener('click', () => {
      img.src = image.src;
      lightbox.classList.add('visible');
    });
  });
});
