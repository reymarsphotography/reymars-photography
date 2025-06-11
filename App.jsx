// React, useState y useEffect están disponibles globalmente, no necesitamos importarlos.
const App = () => {
  // Obtenemos las funciones que necesitamos del objeto global React.
  const { useState, useEffect } = React;

  // State for lightbox
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Image data
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
  
  // Lightbox handlers
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
  
  // Smooth scroll-in effect for sections
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
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-30 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span className="text-purple-500">Reymars</span> Photography
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#gallery" className="hover:text-purple-500 transition-colors duration-300">Gallery</a>
              <a href="#about" className="hover:text-purple-500 transition-colors duration-300">About</a>
              <a href="#contact" className="hover:text-purple-500 transition-colors duration-300">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 animate-fadeIn">
              <div className="flex flex-col space-y-4">
                <a href="#gallery" className="hover:text-purple-500 transition-colors duration-300 py-2" onClick={() => setMenuOpen(false)}>Gallery</a>
                <a href="#about" className="hover:text-purple-500 transition-colors duration-300 py-2" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#contact" className="hover:text-purple-500 transition-colors duration-300 py-2" onClick={() => setMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-80 z-1"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInDown">Reymars Photography</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">Elevating moments into timeless art through the lens of visual storytelling</p>
          <div className="mt-8 animate-fadeInUp animation-delay-400">
            <a href="#gallery" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">
              View Gallery
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 text-center animate-bounce z-20">
          <svg className="w-6 h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </header>
      
      {/* Main Content */}
      <main>
        {/* Gallery Section */}
        <section id="gallery" className="py-20 opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={`./images/${image}`} 
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 text-lg font-medium">View Details</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800 opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-4">About Reymars Photography</h2>
                <p className="text-gray-300 mb-6">
                  Based in Miami, Reymars Photography is a visual storytelling brand that captures life's most precious moments with artistry and emotion. Our approach combines technical excellence with creative vision to produce images that resonate deeply with viewers.
                </p>
                <p className="text-gray-300">
                  Whether it's a wedding, portrait session, or commercial project, we strive to tell authentic stories through our lens, creating images that will be cherished for generations to come.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg transform rotate-3 scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src="./images/Rey_y_Mari_del_lado_derecho.webp" 
                    alt="Photographer" 
                    className="relative rounded-lg shadow-lg w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <p>Miami, Florida</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <p>+1 786 564 8544</p>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 mt-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      <p>info@reymarsphotography.com</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="https://www.instagram.com/reymar_s_photography/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors duration-300">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                      </a>
                      <a href="https://www.facebook.com/reymarsphotography" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors duration-300">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                  <form action="https://formspree.io/f/xyzjedrz" method="POST" className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea id="message" name="message" required rows="5" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 transform hover:scale-105">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Reymars Photography</h3>
              <p className="text-gray-400">Elevating moments into timeless art</p>
            </div>
            <div className="text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Reymars Photography. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp button */}
      <a href="https://wa.me/17865648544" target="_blank" rel="noopener noreferrer" className="fixed right-6 bottom-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 z-50 animate-bounce hover:animate-none">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.031 6.172c-3.181 0-5.766 2.584-5.766 5.766 0 1.59.648 3.023 1.695 4.07l-1.125 4.102 4.219-1.102c.984.625 2.125 1 3.344 1h.008c3.18 0 5.766-2.586 5.766-5.766s-2.586-5.766-5.766-5.766zm0 10.4c-1.398 0-2.68-.46-3.7-1.258l-.265-.156-2.75 1.156.71-2.648-.172-.28a4.629 4.629 0 0 1-1.148-3.61c0-2.555 2.078-4.633 4.633-4.633 1.25 0 2.406.508 3.266 1.367s1.367 2.016 1.367 3.266c0 2.554-2.08 4.632-4.633 4.632zm2.86-3.484c-.156-.078-1.094-.54-1.266-.602s-.297-.078-.422.078c-.125.156-.477.601-.586.726-.102.125-.21.14-.39.062-.18-.078-.758-.282-1.445-.89-.53-.477-.89-1.07-.996-1.25s-.023-.195.055-.266c.07-.063.156-.172.234-.258.078-.086.102-.14.156-.242.055-.102.023-.18-.016-.258s-.422-1.016-.578-1.398c-.14-.375-.29-.32-.414-.32-.117 0-.258-.016-.39-.016s-.352.055-.532.266c-.18.21-.68.664-.68 1.625s.694 1.883.79 2.016c.101.132 1.39 2.125 3.36 2.96.476.203.85.32 1.14.414.453.14.85.125 1.17.078.35-.055 1.094-.445 1.25-.86s.156-.78.109-.86c-.047-.078-.172-.125-.328-.2z"/>
        </svg>
      </a>
      
      {/* Lightbox */}
      {lightboxVisible && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4" // <-- LÍNEA CORREGIDA (añadido p-4 para dar espacio)
            onClick={closeLightbox}>
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <img 
            src={`./images/${selectedImage}`} 
            alt="Lightbox view"
            className="max-w-full max-h-screen object-contain animate-fadeIn" // <-- LÍNEA CORREGIDA (cambiado max-h-full por max-h-screen)
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
