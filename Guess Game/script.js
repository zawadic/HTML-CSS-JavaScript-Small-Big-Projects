let randomNumber = Math.floor(Math.random() * 3) + 1;

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');

  if (!guess) {
    message.textContent = 'Please enter a number!';
    message.style.color = "yellow";
  } else if (guess === randomNumber) {
    message.textContent = 'Congratulations🎉! You guessed it right!';
    message.style.color = "green";
  } else if (guess > randomNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = "red"
  } else {
    message.textContent = 'Too high! Try again.';
    message.style.color = "red"
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent = '';
}
