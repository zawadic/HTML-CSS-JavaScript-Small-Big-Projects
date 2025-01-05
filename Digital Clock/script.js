function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const isAM = hours < 12;

    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const ampmElement = document.getElementById('ampm');

    timeElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);

    ampmElement.textContent = isAM ? 'AM' : 'PM';
  }

  setInterval(updateClock, 1000);
  updateClock(); 