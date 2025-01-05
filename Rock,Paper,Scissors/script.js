function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = document.getElementById('result');
  
    if (playerChoice === computerChoice) {
      result.textContent = `It's a draw! Both chose ${playerChoice}.`;
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
      result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
  }
  
  function resetGame() {
    document.getElementById('result').textContent = '';
  }
  