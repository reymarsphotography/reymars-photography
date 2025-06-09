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
  lightbox.style.cssText = `
    position: fixed; top:0; left:0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex; justify-content: center; align-items: center;
    visibility: hidden; opacity: 0; transition: opacity 0.3s ease;
    z-index: 2000;
    cursor: pointer;
  `;
  const img = document.createElement('img');
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.style.borderRadius = '12px';
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    lightbox.style.visibility = 'hidden';
  });

  // Abrir lightbox al clicar en una imagen
  document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.addEventListener('click', () => {
      img.src = image.src;
      lightbox.style.visibility = 'visible';
      lightbox.style.opacity = '1';
    });
  });
});
