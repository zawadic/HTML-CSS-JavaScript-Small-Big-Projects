       let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        // Update calendar when month changes
        function updateCalendar() {
            let daysList = document.getElementById('daysList');
            let monthName = document.getElementById('monthName');
            let yearElement = document.getElementById('year');

            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            monthName.textContent = `${months[currentMonth]}`;
            yearElement.textContent = currentYear;

            // Get first day of the month
            let firstDay = new Date(currentYear, currentMonth).getDay();
            firstDay = firstDay === 0 ? 7 : firstDay; // Adjust for Sunday being 0

            // Get the number of days in the month
            let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

            // Clear previous days
            daysList.innerHTML = '';

            // Generate empty days before the first day of the month
            for (let i = 1; i < firstDay; i++) {
                let emptyLi = document.createElement('li');
                daysList.appendChild(emptyLi);
            }

            // Generate actual days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                let dayLi = document.createElement('li');
                dayLi.textContent = day;

                // Add classes for Sunday and Friday
                if ((firstDay + day - 1) % 7 === 0) {
                    dayLi.classList.add('sun');
                } else if ((firstDay + day - 1) % 7 === 5) {
                    dayLi.classList.add('fri');
                }

                dayLi.onclick = function () {
                    let activeDays = document.querySelectorAll('.days li');
                    activeDays.forEach(d => d.classList.remove('active'));
                    dayLi.classList.add('active');
                };

                daysList.appendChild(dayLi);
            }
        }

// Change the month
function changeMonth(offset) {
currentMonth += offset;
if (currentMonth < 0) {
currentMonth = 11;
currentYear--;
} else if (currentMonth > 11) {
currentMonth = 0;
currentYear++;
}
updateCalendar();
}

// Initialize the calendar on page load
updateCalendar();