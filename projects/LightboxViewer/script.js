const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const galleryItem = document.querySelectorAll('.gallery-item');
const closeButton = document.querySelector('#close-btn');

function openLightbox(imageSrc) {
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxImage.src = '';
};

galleryItem.forEach(function (item) {
    item.addEventListener('click', function () {
        const imgSrc = item.src;
        if (imgSrc) {
            const fullSizeSrc = imgSrc.replace('-thumbnail', '');
            openLightbox(fullSizeSrc);
        }
    })
});

lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

closeButton.addEventListener('click', closeLightbox);

