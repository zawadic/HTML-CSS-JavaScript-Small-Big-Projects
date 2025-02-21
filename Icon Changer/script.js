// Define an array of icons to cycle through
const icons = [
  'fa-solid fa-computer',
  'fa-solid fa-robot',
  'fa-solid fa-laptop-code',
  'fa-solid fa-code',
  'fa-solid fa-atom',
  'fa-solid fa-file-code',
  'fa-solid fa-motorcycle',
  'fa-solid fa-car',
  'fas fa-biking',
  'fas fa-bicycle',
  'fa-solid fa-jet-fighter',
  'fa-solid fa-shuttle-space',
  'fa-solid fa-ambulance',
  'fa-solid fa-rocket',
  'fa-solid fa-satellite',
  'fa-solid fa-user-astronaut',
  'fa-solid fa-plane',
  'fa-solid fa-helicopter',
  'fa-solid fa-train',
  'fa-solid fa-train-subway',
  'fas fa-tram',
  'fa-solid fa-car-alt',
  'fa-solid fa-bus',
];

let currentIconIndex = 0;

const iconElement = document.getElementById('icon');
const changeIconButton = document.getElementById('changeIconButton');
const titleElement = document.querySelector('.title');

// Adding Bounce Effect on Page Load
window.addEventListener('load', () => {
  titleElement.style.transform = 'translateY(0)';
  iconElement.style.transform = 'scale(1)';
  iconElement.style.opacity = '1';
  
});

// Button click event to change icon with mind-blowing animation
changeIconButton.addEventListener('click', () => {
  // Increment the index, wrapping around if necessary
  currentIconIndex = (currentIconIndex + 1) % icons.length;

  // Add the animation classes
  iconElement.classList.add('change-icon');
  
  // Change the icon after the animation ends
  setTimeout(() => {
    iconElement.className = icons[currentIconIndex]; // Change the icon class
    iconElement.classList.remove('change-icon');
    iconElement.style.transform = 'scale(1.5)';
    iconElement.style.opacity = '0.6';
    setTimeout(() => {
      iconElement.style.transform = 'scale(1)';
      iconElement.style.opacity = '1';
    }, 300);
  }, 500);
});

// Bounce effect when the page is loaded
document.querySelector('.glassmorphism').addEventListener('animationend', () => {
  iconElement.classList.remove('bounce');
});
