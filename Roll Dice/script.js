// Function to roll the dice
function rollDice() {
  const dice1Elm = document.getElementById("dice1");
  const dice2Elm = document.getElementById("dice2");
  const resultText = document.getElementById("result");

  // Temporarily display the rolling animation
  dice1Elm.classList.add("fa-spin");
  dice2Elm.classList.add("fa-spin");
  resultText.textContent = "Rolling...";

  // After 1 second, show the result
  setTimeout(() => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Remove spinning animation
    dice1Elm.classList.remove("fa-spin");
    dice2Elm.classList.remove("fa-spin");

    // Update dice icons based on roll result
    dice1Elm.classList.remove(`fa-dice-${dice1 === 1 ? 'one' : dice1 === 2 ? 'two' : dice1 === 3 ? 'three' : dice1 === 4 ? 'four' : dice1 === 5 ? 'five' : 'six'}`);
    dice2Elm.classList.remove(`fa-dice-${dice2 === 1 ? 'one' : dice2 === 2 ? 'two' : dice2 === 3 ? 'three' : dice2 === 4 ? 'four' : dice2 === 5 ? 'five' : 'six'}`);

    dice1Elm.classList.add(`fa-dice-${dice1 === 1 ? 'one' : dice1 === 2 ? 'two' : dice1 === 3 ? 'three' : dice1 === 4 ? 'four' : dice1 === 5 ? 'five' : 'six'}`);
    dice2Elm.classList.add(`fa-dice-${dice2 === 1 ? 'one' : dice2 === 2 ? 'two' : dice2 === 3 ? 'three' : dice2 === 4 ? 'four' : dice2 === 5 ? 'five' : 'six'}`);

    // Determine the winner
    if (dice1 > dice2) {
      resultText.textContent = `${document.getElementById("player1-name").textContent} WINS!`;
    } else if (dice2 > dice1) {
      resultText.textContent = `${document.getElementById("player2-name").textContent} WINS!`;
    } else if (dice1 == dice2) {
      resultText.textContent = "It's a Draw!";
    }else{
      return
    }
  }, 1000);
}

// Function to edit player names
function editNames() {
  const player1 = prompt("Enter Player 1 Name:", document.getElementById("player1-name").textContent);
  const player2 = prompt("Enter Player 2 Name:", document.getElementById("player2-name").textContent);

  if (player1) document.getElementById("player1-name").textContent = player1;
  if (player2) document.getElementById("player2-name").textContent = player2;
}
