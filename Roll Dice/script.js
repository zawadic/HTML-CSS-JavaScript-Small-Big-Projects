// Function to roll the dice
function rollDice() {
    const dice1Elm = document.getElementById("dice1");
    const dice2Elm = document.getElementById("dice2");
    const resultText = document.getElementById("result");
  
    // Temporarily display the rolling GIF
    dice1Elm.src = "diceroll.gif";
    dice2Elm.src = "diceroll.gif";
    resultText.textContent = "Rolling...";
  
    // After 1 second, show the result
    setTimeout(() => {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
  
      // Update dice images
      dice1Elm.src = `dice${dice1}.png`;
      dice2Elm.src = `dice${dice2}.png`;
  
      // Determine the winner
      if (dice1 > dice2) {
        resultElm.textContent = `${document.getElementById("player1-name").textContent} WINS!`;
      } else if (dice2 > dice1) {
        resultElm.textContent = `${document.getElementById("player2-name").textContent} WINS!`;
      } else {
        resultElm.textContent = "It's a Draw!";
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
  