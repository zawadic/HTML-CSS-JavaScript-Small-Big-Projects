//Function to show an alert when the 'Get Started' button is clicked                                              
function showAlert() {
    alert("Welcome to Our Interactive mobile web page!");
  }
// Function to update the time every second
function updateTime() {
  const timeElement = document.querySelector('.time');
  const ampmElement = document.querySelector('.ampm');

  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, make it 12
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  ampmElement.textContent = ampm;
}

// Function to simulate battery percentage (change the class based on battery level)
let batteryLevel = 100; // Start battery level at 100%

function updateBattery() {
  const batteryIcons = document.querySelectorAll('.percentage i');
  
  // Decrease battery level by 10% every 2 seconds
  batteryLevel -= 5;

  // Reset all icons
  batteryIcons.forEach(icon => {
    icon.classList.remove('fa-battery-empty', 'fa-battery-quarter', 'fa-battery-half', 'fa-battery-full', 'fa-battery-three-quarters');
  });

  // Update the battery icons based on the current level
  if (batteryLevel <= 15) {
    batteryIcons[0].classList.add('fa-battery-empty');
    if (batteryLevel == 15) {
      if (!window.alertShown) {
        alert('Battery Level: ' + batteryLevel + ', Watch will be automatically Closed');
        window.alertShown = true;
      }
    }
  } else if (batteryLevel <= 25) {
    batteryIcons[0].classList.add('fa-battery-quarter');
  } else if (batteryLevel <= 50) {
    batteryIcons[0].classList.add('fa-battery-half');
  } else if (batteryLevel <= 75) {
    batteryIcons[0].classList.add('fa-battery-three-quarters');
  } else {
    batteryIcons[0].classList.add('fa-battery-full');
  }
}

// Update battery level every 2 seconds
setInterval(updateBattery, 1000);
// Update time every second
setInterval(updateTime, 
100);
