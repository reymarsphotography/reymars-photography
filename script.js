document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery-container");

    const imageUrls = [
        "https://i.imgur.com/2a6uHVc.jpeg",
        "https://i.imgur.com/wUD71AK.jpeg",
        "https://i.imgur.com/FbBWqmg.jpeg",
        "https://i.imgur.com/4lERITz.jpeg",
        "https://i.imgur.com/TQtf2S5.jpeg",
        "https://i.imgur.com/FP5xOxH.jpeg",
        "https://i.imgur.com/X6pTVNx.jpeg",
        "https://i.imgur.com/fTUAz2K.jpeg",
        "https://i.imgur.com/8fkn88s.jpeg",
        "https://i.imgur.com/HmMPhol.jpeg",
        "https://i.imgur.com/2KcEGmI.jpeg",
        "https://i.imgur.com/5XVTCgT.jpeg",
        "https://i.imgur.com/x1aFy64.jpeg",
        "https://i.imgur.com/ALnvgCM.jpeg",
        "https://i.imgur.com/f3HH7uL.jpeg",
        "https://i.imgur.com/QDwXrI8.jpeg",
        "https://i.imgur.com/rG8Jd5L.jpeg",
        "https://i.imgur.com/3YQ4AAO.jpeg",
        "https://i.imgur.com/yVqGlqd.jpeg",
        "https://i.imgur.com/3kwnRRo.jpeg",
        "https://i.imgur.com/gkiolcI.jpeg",
        "https://i.imgur.com/Mr1D5gq.jpeg",
        "https://i.imgur.com/jGaXbKY.jpeg",
        "https://i.imgur.com/JhKjtZv.jpeg",
        "https://i.imgur.com/VNg8XRe.jpeg",
        "https://i.imgur.com/7gIn9o2.jpeg"
    ];

    imageUrls.forEach((url, index) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = `Foto ${index + 1}`;
        galleryContainer.appendChild(img);
    });
});
