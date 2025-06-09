document.addEventListener('DOMContentLoaded', () => {
    const imageData = [
        { filename: "Dario mirando a la derecha.webp", position: "left" },
        { filename: "Lazaro flores rojas mirando a la derecha.webp", position: "left" },
        { filename: "Steven Low key mirando a la izquierda.webp", position: "right" },
        { filename: "Daniela Fuente izquierda.webp", position: "left" },
        { filename: "Marilia Low key mirando a la izquierda.webp", position: "center" },
        { filename: "Daimer y Marilia mirandose uno al otro en el centro.webp" },
        { filename: "Marinalva ventana mirando a la izquierda.webp" },
        { filename: "Marinalva princesa mirando a la derecha.webp" },
        { filename: "Marinalva Princesa close up centro.webp" },
        { filename: "Marinalva azul mirando a la izquierda.webp" },
        { filename: "Anay Feliz mirando al frente izquierdo.webp" },
        { filename: "Mari rosa mirando centro abajo.webp" },
        { filename: "Steven feliz centro.webp" },
        { filename: "Steven leyendo centro.webp" },
        { filename: "Mari jirasoles centro.webp" },
        { filename: "Nino reloj del lado izquierdo.webp" },
        { filename: "jony y stef hig key centro.webp" },
        { filename: "Embarazo y Juli del lado izquierdo.webp" },
        { filename: "Embarazo arriba lado derecho.webp" },
        { filename: "Juli piano lado derecho.webp" },
        { filename: "Sami bussiness lado derecho.webp" },
        { filename: "Lazaro smoking centro.webp" },
        { filename: "Familia yenki centro.webp" }
    ];

    // Separo las imágenes que tienen posición y las que no
    const fixedImages = imageData.filter(img => img.position);
    const randomImages = imageData
        .filter(img => !img.position)
        .sort(() => Math.random() - 0.5); // mezclo las que no tienen posición

    // Combino ambas listas
    const finalImages = [...fixedImages, ...randomImages];

    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    finalImages.forEach(img => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        if (img.position) {
            galleryItem.classList.add(img.position); // le añado la clase left, right, center si tiene
        }

        const imageElement = document.createElement('img');
        imageElement.src = `images/${img.filename}`;
        imageElement.alt = img.filename;

        // Opcional: agregar overlay con ícono
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-search-plus');
        overlay.appendChild(icon);

        galleryItem.appendChild(imageElement);
        galleryItem.appendChild(overlay);
        gallery.appendChild(galleryItem);
    });
});
