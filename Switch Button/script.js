const switchCheckbox = document.getElementById('theme-switch');
const toggleIcon = document.querySelector('.toggle i');

// Set the default theme to light mode
document.body.classList.add('light-mode');

// Toggle between light and dark mode
switchCheckbox.addEventListener('change', () => {
  if (switchCheckbox.checked) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
  }
});
