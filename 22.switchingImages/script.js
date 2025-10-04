// Select the image by its ID
const mainImage = document.getElementById('mainImage');
// Array of slides (3 images)
const slides = [
{ src: 'images/2024-12-22_17.22.56.jpg', alt: 'lookingAtSunset' },
{ src: 'images/image02.jpg', alt: 'second' },
{ src: 'images/image03.jpg', alt: 'third' }
];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);