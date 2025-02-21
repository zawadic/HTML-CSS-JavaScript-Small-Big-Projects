let player1RandomNumber = Math.floor(Math.random() * 5) + 1;
    let player2RandomNumber;

    // Ensure Player 2's random number is different from Player 1's
    do {
      player2RandomNumber = Math.floor(Math.random() * 5) + 1;
    } while (player2RandomNumber === player1RandomNumber);

    let currentPlayer = 1;
    let player1Score = 0;
    let player2Score = 0;

    function checkGuess() {
      const guess = Number(document.getElementById('guessInput').value);
      const message = document.getElementById('message');

      if (!guess || guess < 1 || guess > 5) {
        message.textContent = 'Please enter a valid number between 1 and 5!';
        message.style.color = 'yellow';
        return;
      }

      const randomNumber = currentPlayer === 1 ? player1RandomNumber : player2RandomNumber;

      if (guess === randomNumber) {
        message.textContent = `Player ${currentPlayer} guessed correctly! 🎉`;
        message.style.color = 'green';

        if (currentPlayer === 1) {
          player1Score++;
          document.getElementById('player1Score').textContent = player1Score;
        } else {
          player2Score++;
          document.getElementById('player2Score').textContent = player2Score;
        }

        // Switch player and reset their random number
        if (currentPlayer === 1) {
          currentPlayer = 2;
        } else {
          currentPlayer = 1;
          player1RandomNumber = Math.floor(Math.random() * 5) + 1;
          do {
            player2RandomNumber = Math.floor(Math.random() * 5) + 1;
          } while (player2RandomNumber === player1RandomNumber);
        }

        document.getElementById('currentPlayer').textContent = currentPlayer;
      } else {
        message.textContent = `Player ${currentPlayer}, wrong guess! Try again.`;
        message.style.color = 'red';
      }

      document.getElementById('guessInput').value = '';
    }

    function resetGame() {
      player1RandomNumber = Math.floor(Math.random() * 5) + 1;
      do {
        player2RandomNumber = Math.floor(Math.random() * 5) + 1;
      } while (player2RandomNumber === player1RandomNumber);

      currentPlayer = 1;
      player1Score = 0;
      player2Score = 0;

      document.getElementById('player1Score').textContent = player1Score;
      document.getElementById('player2Score').textContent = player2Score;
      document.getElementById('currentPlayer').textContent = currentPlayer;
      document.getElementById('message').textContent = '';
      document.getElementById('guessInput').value = '';
    }