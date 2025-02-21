const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const sliderImages = document.querySelector('.slider-images');
const images = document.querySelectorAll('.slider-img');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function updateSlider() {
  // Slide to the current image
  sliderImages.style.transform = `translateX(-${currentIndex * 800}px)`;

  // Update indicator states
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[currentIndex].classList.add('active');
}

function moveToNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function moveToPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

function goToImage(index) {
  currentIndex = index;
  updateSlider();
}

// Add event listeners to buttons
nextBtn.addEventListener('click', moveToNextImage);
prevBtn.addEventListener('click', moveToPrevImage);

// Add event listeners to indicators
indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    goToImage(parseInt(indicator.getAttribute('data-index')));
  });
});

// Initialize the slider
updateSlider();
