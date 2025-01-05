let timerInterval;

    function startTimer() {
      clearInterval(timerInterval);

      const endTimeInput = document.getElementById("endTime").value;
      const alarm = document.getElementById("alarm");

      if (!endTimeInput) {
        alert("Please enter a valid time (e.g., 3:30 PM).");
        return;
      }

      // Parse the end time
      const now = new Date();
      const [time, period] = endTimeInput.split(" ");
      const [hours, minutes] = time.split(":").map(Number);

      let endHour = period.toLowerCase() === "pm" && hours !== 12 ? hours + 12 : hours;
      if (period.toLowerCase() === "am" && hours === 12) endHour = 0;

      const endTime = new Date();
      endTime.setHours(endHour);
      endTime.setMinutes(minutes);
      endTime.setSeconds(0);

      if (endTime <= now) {
        alert("The time you entered has already passed today!");
        return;
      }

      // Calculate and display countdown
      function updateTimer() {
        const currentTime = new Date();
        const timeDiff = endTime - currentTime;

        if (timeDiff <= 0) {
          clearInterval(timerInterval);
          document.getElementById("timer").textContent = "00:00";
          alarm.play();
          alert("Time is up!");
        } else {
          const mins = String(Math.floor((timeDiff / 1000 / 60) % 60)).padStart(2, "0");
          const secs = String(Math.floor((timeDiff / 1000) % 60)).padStart(2, "0");
          document.getElementById("timer").textContent = `${mins}:${secs}`;
        }
      }

      updateTimer();
      timerInterval = setInterval(updateTimer, 1000);
    }