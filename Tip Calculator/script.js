// Select People
const peopleNum = document.querySelector('#peopleNum');

// Increment By One
const plusSum = document.querySelector('#plusSum');
let count = 1;
plusSum.addEventListener('click', () => {
  if (count < 5){
    count++;
  }
  peopleNum.innerHTML = count;
});

// Decrement By One
const minusSum = document.querySelector('#minusSum');
minusSum.addEventListener('click', () => {
  if (count > 1) {
    count--;
  }
  peopleNum.innerHTML = count;
});

// Calculate
const calculator = document.querySelector('#calculator');

calculator.addEventListener('click', () => {
  // Display Summary Tab
  document.querySelector('.total_per_person').style.display = 'block';

  // Calculating Tips
  const totalBill = Number(document.querySelector('#totalBill').value);
  const tipMain = Number(document.querySelector('#tipMain').value);
  let total = totalBill * (tipMain / 100);
  let finalPeople = peopleNum.innerHTML;

  // Display Totla Bill and Total in Summary TAB
  document.querySelector('#finalBill').innerHTML = totalBill;
  document.querySelector('#tipAmount').innerHTML = total;
  const taxAmount = (document.querySelector('#taxAmount').innerHTML =
    (totalBill + 5) / 100);

  // Final Calculation
  document.querySelector('#totalPerPerson').innerHTML = (
    (totalBill + total + taxAmount) /
    finalPeople
  ).toFixed(2);
});