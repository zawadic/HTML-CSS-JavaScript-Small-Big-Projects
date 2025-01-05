function checkHealth() {
    const symptom = document.getElementById('symptom').value.toLowerCase();
    let advice;

    if (symptom.includes('headache')) {
      advice = "Stay hydrated and rest in a quiet place.";
    } else if (symptom.includes('cough')) {
      advice = "Take 1 spoon of Basok and dont't drink water or eat any food for 30minute to 1hour";
    } else {
      advice = "Consult a doctor for a more accurate assessment.";
    }

    document.getElementById('result').textContent = advice;
  }