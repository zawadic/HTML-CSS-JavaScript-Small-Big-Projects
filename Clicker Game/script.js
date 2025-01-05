let score = 0;

function increaseScore() {
  score++;
  updateScore();
}

function decreaseScore() {
  score--;
  updateScore();
}

function resetScore() {
  score = 0;
  updateScore();
}

function updateScore() {
  document.getElementById('score').textContent = score;
}
