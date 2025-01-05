const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const timerElement = document.getElementById('timer');
const timeLeftElement = document.getElementById('time');
const resultElement = document.getElementById('result');

let shuffledQuestions, currentQuestionIndex;
let timeLeft, timerInterval;
let score = 0;

// Questions Array
const questions = [
  {
    question: 'Which is the popular programming language?',
    answers: [
      { text: 'C++', correct: false },
      { text: 'Java', correct: false },
      { text: 'Python', correct: true },
      { text: 'Javascript', correct: false },
    ],
  },
  {
    question: 'Which is most expensive Car in the World?',
    answers: [
      { text: 'Bugatti La Voiture Noire', correct: false },
      { text: 'Lamborghini Aventador', correct: false },
      { text: 'Rolls Royce Droptail', correct: true },
      { text: 'Frarri j1', correct: false },
    ],
  },
  {
    question: 'What is 5 + 7?',
    answers: [
      { text: '10', correct: false },
      { text: '12', correct: true },
      { text: '15', correct: false },
      { text: '14', correct: false },
    ],
  },
];

// Start the game
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  questionContainer.classList.remove('hide');
  timerElement.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  startTimer();
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearInterval(timerInterval);
  timeLeftElement.innerText = 10;
  nextButton.classList.add('hide');
  resultElement.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === 'true';
  setStatusClass(selectedButton, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct === 'true');
  });
  clearInterval(timerInterval);
  if (correct) score++;
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    showResult();
  }
}

function setStatusClass(element, correct) {
  element.classList.remove('correct', 'wrong');
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function startTimer() {
  timeLeft = 10;
  timeLeftElement.innerText = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    timeLeftElement.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showResult();
    }
  }, 1000);
}

function showResult() {
  questionContainer.classList.add('hide');
  nextButton.classList.add('hide');
  timerElement.classList.add('hide');
  resultElement.classList.remove('hide');
  resultElement.innerText = `
  Congrutualations🥳!! Your score: ${score} out of ${questions.length}
  `;
  resultElement.style.background = "#dcf6d9";
  resultElement.style.color = "Green";
  resultElement.style.fontSize = "30px"
  startButton.innerText = 'Restart Quiz';
  startButton.classList.remove('hide');
}
