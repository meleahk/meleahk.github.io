const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

const slides = [
  { src: 'images/image01.jpg', alt: 'fight', caption: 'Once, you fit inside my hands and the whole world fit inside your bark' },
  { src: 'images/image07.jpg', alt: 'sleep', caption: 'The days were loud then, full of small discoveries and soft mistakes.' },
  { src: 'images/image05.jpg', alt: 'stairs', caption: 'You chased light like it was something you could keep.' },
  { src: 'images/image04.jpg', alt: 'sun', caption: 'Time crept in quietly, the way evening light fades without asking.' },
  { src: 'images/image03.jpg', alt: 'happy', caption: 'You began to listen more than run.' },
  { src: 'images/image06.jpg', alt: 'outside', caption: 'Your face changed first, then the rhythm of your breathing.' },
  { src: 'images/image09.jpg', alt: 'bed', caption: 'You found new joy in stillness, in being near instead of moving.' },
  { src: 'images/image10.jpg', alt: 'ball', caption: 'The house learned your pace, and so did I.' },
  { src: 'images/image08.jpg', alt: 'toys', caption: 'You sleep longer now, the blanket remembering every dream before.' },
  { src: 'images/image02.jpg', alt: 'food', caption: 'I don’t notice the years until I see them in your eyes.' },
];

let currentIndex = 0;
let isScrolling = false;

// Fade duration matches CSS
const fadeDuration = 1000; // 1.0 seconds

function showSlide(index) {
  const slide = slides[index];
  mainImage.style.opacity = 0;
  caption.style.opacity = 0;

  setTimeout(() => {
    mainImage.src = slide.src;
    mainImage.alt = slide.alt;
    caption.textContent = slide.caption;
    mainImage.style.opacity = 1;
    caption.style.opacity = 1;
  }, fadeDuration); // waits for fade-out before switching
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Scroll to change slides
window.addEventListener('wheel', (event) => {
  if (isScrolling) return;
  isScrolling = true;

  if (event.deltaY > 0) nextSlide();
  else prevSlide();

  // Wait for fade to finish before allowing next scroll
  setTimeout(() => {
    isScrolling = false;
  }, fadeDuration + 400); // adds a small buffer
});

// Initialize
showSlide(currentIndex);
