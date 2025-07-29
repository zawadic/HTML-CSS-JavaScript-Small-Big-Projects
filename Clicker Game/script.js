let score = 0;

function increaseScore() {
  score++;
  updateScore();
  animateScore('increase');
}

function decreaseScore() {
  score--;
  updateScore();
  animateScore('decrease');
}

function resetScore() {
  score = 0;
  updateScore();
}

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

function animateScore(action) {
  const scoreElement = document.getElementById('score');
  if (action === 'increase') {
    scoreElement.style.animation = 'increaseScoreAnim 0.5s ease-in-out';
  } else if (action === 'decrease') {
    scoreElement.style.animation = 'decreaseScoreAnim 0.5s ease-in-out';
  }

  // Reset animation after it ends
  scoreElement.addEventListener('animationend', () => {
    scoreElement.style.animation = '';
  });
}
