const counter = document.querySelectorAll('.counter-box h2');

counter.forEach((num) => {
  const targetValue = parseInt(num.innerText, 10); 
  let currentValue = 0;

  const duration = 10000;
  const increment = targetValue / (duration / 500); 

  const updateNum = () => {
    if (currentValue < targetValue) {
      currentValue += increment;
      num.innerText = Math.floor(currentValue); 
      setTimeout(updateNum, 50); 
    } else {
      num.innerText = targetValue; 
    }
  };

  updateNum(); // Start the animation
});