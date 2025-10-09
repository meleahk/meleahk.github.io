// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
{ src: 'images/2024-12-22_17.22.56.jpg',
alt: 'shadow',
caption: 'Nostalgia'
},
{ src: 'images/image02.jpg',
alt: 'second',
caption: 'Its a funny feeling'
},
{ src: 'images/image03.jpg',
alt: 'third',
caption: 'because in this moment'
},
{ src: 'images/image04.jpg',
alt: 'fourth',
caption: 'I did not know how good it was'
},
{ src: 'images/image05.jpg',
alt: 'fifth',
caption: 'I wish I appreciated it more than I did'
},
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
mainImage.src = slide.src; // replaces the image
mainImage.alt = slide.alt; // replaces the alt of the image
caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);