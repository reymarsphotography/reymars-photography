import React, { useState, useEffect } from 'react';

const App = () => {
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const images = [
    "Daimer_y_Marilia_mirandose_uno_al_otro_en_el_centro.webp",
    "Marilia_Low_key_mirando_a_la_izquierda.webp",
    "Dario_mirando_a_la_derecha.webp",
    "Daniela_sentada_mirando_a_la_derecha.webp",
    "Marinalva_ventana_mirando_a_la_izquierda.webp",
    "Daniela_Fuente_izquierda.webp",
    "Marinalva_princesa_mirando_a_la_derecha.webp",
    "Marinalva_Princesa_close_up_centro.webp",
    "Marinalva_azul_mirando_a_la_izquierda.webp",
    "Anay_Feliz_mirando_al_frente_izquierdo.webp",
    "Mari_rosa_mirando_centro_abajo.webp",
    "Steven_feliz_centro.webp",
    "Steven_leyendo_centro.webp",
    "Mari_jirasoles_centro.webp",
    "Nino_reloj_del_lado_izquierdo.webp",
    "jony_y_stef_hig_key_centro.webp",
    "Embarazo_y_Juli_del_lado_izquierdo.webp",
    "Embarazo_arriba_lado_derecho.webp",
    "Juli_piano_lado_derecho.webp",
    "Steven_Low_key_mirando_a_la_izquierda.webp",
    "Lazaro_flores_rojas_mirando_a_la_derecha.webp",
    "Sami_bussiness_lado_derecho.webp",
    "Lazaro_smoking_centro.webp",
    "Familia_yenki_centro.webp",
    "Marinalva_acostada.webp",
    "Rey_y_Mari_del_lado_derecho.webp"
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navegación, Hero, Gallery, About, Contact, Footer... */}
      {/* Copia el resto del JSX que ya tenías aquí tal cual */}
      {/* Puedes pegarlo directamente sin cambios importantes */}
    </div>
  );
};

export default App;
