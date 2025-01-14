const cells = document.querySelectorAll('.cell');
const currentPlayerDisplay = document.getElementById('current-player');
const resultMessage = document.getElementById('result-message');
const playAgainButton = document.getElementById('play-again');
let currentPlayer = 'x';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Check for a winner
function checkWinner() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      highlightWinningCells(combo);
      resultMessage.textContent = `${currentPlayer.toUpperCase()} Win!`;
      playAgainButton.style.display = 'block';
      return true;
    }
  }
  return false;
}

// Highlight winning cells
function highlightWinningCells(combo) {
  combo.forEach((index) => cells[index].classList.add('winning'));
}

// Check for a draw
function checkDraw() {
  if (board.every((cell) => cell)) {
    resultMessage.textContent = "It's a Draw!";
    playAgainButton.style.display = 'block';
    return true;
  }
  return false;
}

// Handle cell clicks
function handleCellClick(event) {
  const cell = event.target;
  const index = cell.getAttribute('data-index');

  // Check if the cell is already filled or the game is over
  if (board[index] || resultMessage.textContent) return;

  // Mark the cell with the current player's symbol
  board[index] = currentPlayer;
  cell.classList.add(currentPlayer);
  cell.innerText = currentPlayer.toUpperCase(); // Display X or O

  // Check for a winner or draw
  if (checkWinner() || checkDraw()) return;

  // Switch player
  currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
  currentPlayerDisplay.textContent = currentPlayer.toUpperCase();
  currentPlayerDisplay.className = currentPlayer;
}

// Reset the game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach((cell) => {
    cell.className = 'cell';
    cell.innerText = ''; // Clear the symbols
  });
  currentPlayer = 'x';
  currentPlayerDisplay.textContent = currentPlayer.toUpperCase();
  currentPlayerDisplay.className = currentPlayer;
  resultMessage.textContent = '';
  playAgainButton.style.display = 'none';
}

// Add event listeners
cells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});
playAgainButton.addEventListener('click', resetGame);
