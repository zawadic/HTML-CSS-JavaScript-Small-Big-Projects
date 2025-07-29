const emojis   = ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯"];
const grid     = document.getElementById("grid");
const scoreD   = document.getElementById("score");
const timerD   = document.getElementById("timer");
const alertBox = document.getElementById("alert-box");
const msg      = document.getElementById("alert-message");
const sum      = document.getElementById("summary");
const btn      = document.getElementById("restart-btn");

let level = 1,
    score = 0,
    time  = 10,
    countdown,
    startTime;

// Restart button resets everything
btn.addEventListener("click", () => {
  clearInterval(countdown);
  level = 1;
  score = 0;
  startTime = null;
  scoreD.innerText = `Score: ${score}`;
  alertBox.style.display = "none";
  startGame();
});

// Show end‐game summary
function endGame(text) {
  clearInterval(countdown);
  grid.style.display = "none";

  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  msg.innerText = text;
  sum.innerHTML = `⏱ Total Time: ${elapsed}s<br>✅ Correct Answers: ${score}`;
  alertBox.style.display = "block";
}

// Start or restart the 10s timer
function startTimer() {
  time = 10;
  timerD.innerText = `Time Left: ${time}s`;
  clearInterval(countdown);
  countdown = setInterval(() => {
    time--;
    timerD.innerText = `Time Left: ${time}s`;
    if (time <= 0) {
      clearInterval(countdown);
      if (level === 10) {
        endGame("⏰ Time's up on level 10! Game Over!");
      } else {
        // Levels 1–9: ignore timeout, restart timer
        startTimer();
      }
    }
  }, 1000);
}

// Main game loop
function startGame() {
  // record start time once
  if (!startTime) startTime = Date.now();

  alertBox.style.display = "none";
  grid.style.display = "grid";
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${level + 1}, 60px)`;

  startTimer();

  // pick emojis
  const base = emojis[Math.floor(Math.random() * emojis.length)];
  let odd;
  do { odd = emojis[Math.floor(Math.random() * emojis.length)]; }
  while (odd === base);

  const totalCells = (level + 1) * (level + 1);
  const oddIdx     = Math.floor(Math.random() * totalCells);

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.className = "grid-item";
    cell.innerText = (i === oddIdx ? odd : base);

    cell.addEventListener("click", () => {
      if (i === oddIdx) {
        // correct click
        clearInterval(countdown);
        score++;
        scoreD.innerText = `Score: ${score}`;

        if (level === 10) {
          endGame("🎉 You found the odd emoji on level 10! Game Over!");
        } else {
          level++;
          setTimeout(startGame, 600);
        }

      } else {
        // wrong click
        if (level === 10) {
          clearInterval(countdown);
          endGame("❌ Wrong on level 10! Game Over!");
        }
        // levels 1–9: do nothing
      }
    });

    grid.appendChild(cell);
  }
}

// start the very first round
startGame();