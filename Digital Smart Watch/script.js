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
    if (batteryLevel == 15 || batteryLevel == 10) {
      if (!window.alertShown) {
        alert('Battery Level: ' + batteryLevel + ', Phone will be automatically Closed');
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
setInterval(updateTime, 100);

// List of app names
const appNames = ["Google Play Store", "Facebook", "Youtube", "Calculator", "Phone", "Free Fire"];

// Function to generate random colors
function getRandomColor() {
  const letters = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to create app elements dynamically
function createApps() {
  const appsContainer = document.querySelector('.apps');
  
  appNames.forEach(app => {
    const appDiv = document.createElement('div');
    appDiv.classList.add('app');
    appDiv.style.backgroundColor = getRandomColor();
    appDiv.textContent = app;

    // Click event to switch to the call app interface
    if (app === "Phone") {
      appDiv.addEventListener('click', () => {
        document.querySelector('.apps').style.display = 'none';
        document.querySelector('.call-interface').style.display = 'block';
      });
    }

    // Add app to the container
    appsContainer.appendChild(appDiv);
  });
}

// Call function to generate apps when page loads
createApps();
