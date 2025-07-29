function checkHealth() {
    const symptom = document.getElementById('symptom').value.toLowerCase();
    let advice;

    if (symptom.includes('headache')) {
      advice = "Stay hydrated and rest in a quiet place.";
    } else if (symptom.includes('cough')) {
      advice = "Take 1 spoon of Lemon and don't drink water or eat any food for 30 minutes to 1hour";
    }else if (symptom.includes('fever')){
      advice = "Stay hydrated and rest in a quiet place.";
    } else {
      advice = "Give accurate information for more accurate assessment.";
    }

    document.getElementById('result').textContent = advice;
  }