// Arrays for random weather conditions
const weatherConditions = [
    { description: "Sunny", icon: "https://img.icons8.com/ios/80/sun.png", minTemp: 25, maxTemp: 35 },
    { description: "Cloudy", icon: "https://img.icons8.com/ios/80/cloud.png", minTemp: 20, maxTemp: 30 },
    { description: "Rainy", icon: "https://img.icons8.com/ios/80/rain.png", minTemp: 18, maxTemp: 25 },
    { description: "Stormy", icon: "https://img.icons8.com/ios/80/storm.png", minTemp: 22, maxTemp: 28 },
    { description: "Snowy", icon: "https://img.icons8.com/ios/80/snow.png", minTemp: -5, maxTemp: 5 }
  ];
  
  // Function to get a random weather condition
  function getRandomWeather() {
    const randomIndex = Math.floor(Math.random() * weatherConditions.length);
    return weatherConditions[randomIndex];
  }
  
  // Function to update weather display
  function updateWeather() {
    const randomWeather = getRandomWeather();
    const temperature = Math.floor(Math.random() * (randomWeather.maxTemp - randomWeather.minTemp + 1)) + randomWeather.minTemp;
  
    // Update the temperature and description
    document.querySelector('.temp-value').textContent = `${temperature}°C`;
    document.querySelector('.weather-description').textContent = randomWeather.description;
    
    // Update background image for the weather container
    document.querySelector('.weather-info').style.backgroundImage = `url('${randomWeather.icon}')`;
    document.querySelector('.weather-info').style.backgroundSize = '60px 60px'; // Make sure the icon is sized properly
    document.querySelector('.weather-info').style.backgroundRepeat = 'no-repeat';
  
    // Change background color based on weather type
    const body = document.body;  // Make sure body is selected
    if (randomWeather.description === "Sunny") {
      body.classList.add("sunny");
      body.classList.remove("rainy", "cloudy", "stormy", "snowy");
    } else if (randomWeather.description === "Rainy") {
      body.classList.add("rainy");
      body.classList.remove("sunny", "cloudy", "stormy", "snowy");
    } else if (randomWeather.description === "Cloudy") {
      body.classList.add("cloudy");
      body.classList.remove("sunny", "rainy", "stormy", "snowy");
    } else if (randomWeather.description === "Stormy") {
      body.classList.add("stormy");
      body.classList.remove("sunny", "rainy", "cloudy", "snowy");
    } else if (randomWeather.description === "Snowy") {
      body.classList.add("snowy");
      body.classList.remove("sunny", "rainy", "cloudy", "stormy");
    } else {
      body.classList.remove("sunny", "rainy", "cloudy", "stormy", "snowy");
    }
  }
  
  // Run the updateWeather function when the page loads
  window.onload = updateWeather;
  
  // Optionally, change weather every 10 seconds to simulate changing conditions
  setInterval(updateWeather, 1000);
  