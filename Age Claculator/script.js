document.getElementById("calculateBtn").addEventListener("click", function() {
    const birthdateInput = document.getElementById("birthdate").value;
    const output = document.getElementById("output");
  
    if (!birthdateInput) {
      alert("Please enter a valid birthdate.");
      return;
    }
  
    const birthDate = new Date(birthdateInput);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);
  
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
  
    const ageMessage = `You are ${years} years, ${months} months, and ${days} days old.`;
  
    typeWriterEffect(ageMessage);
  });
  
  function typeWriterEffect(text) {
    const outputElement = document.getElementById("output");
    let index = 0;
    outputElement.textContent = ''; // Clear any previous output
  
    function type() {
      if (index < text.length) {
        outputElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Typing speed of 100ms
      }
    }
  
    type();
  }
  