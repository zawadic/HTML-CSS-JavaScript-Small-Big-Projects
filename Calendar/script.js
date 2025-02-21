// Function to format the date in "dd" format and the day
function formatDate(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    
    document.getElementById("date").textContent = day;
    document.getElementById("day").textContent = dayOfWeek;
  }
  
  // Function to format the month and year
  function formatMonthYear(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    document.getElementById("month-year").textContent = `${month} ${year}`;
  }
  
  // Get current date
  const currentDate = new Date();
  
  // Display the current date, day, month, and year
  formatDate(currentDate);
  formatMonthYear(currentDate);
  