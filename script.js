const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1,
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
    answer: 0,
  },
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const homeSection = document.getElementById("home");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");

const startForm = document.getElementById("start-form");
const usernameInput = document.getElementById("username");
const greeting = document.getElementById("greeting");
const questionText = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const userNameDisplay = document.getElementById("user-name");
const scoreDisplay = document.getElementById("score");
const totalQuestionsDisplay = document.getElementById("total-questions");
const restartBtn = document.getElementById("restart-btn");

// Start Quiz
startForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  greeting.textContent = `Hello, ${username}!`;
  homeSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  loadQuestion();
});

// Load Question
function loadQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  optionsList.innerHTML = "";
  selectedOption = null;
  nextBtn.disabled = true;

  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.classList.add("option");
    li.addEventListener("click", () => selectOption(li, index));
    optionsList.appendChild(li);
  });
}

// Select Option
function selectOption(optionElement, index) {
  document.querySelectorAll(".option").forEach((opt) => opt.classList.remove("selected"));
  optionElement.classList.add("selected");
  selectedOption = index;
  nextBtn.disabled = false;
}

// Next Question
nextBtn.addEventListener("click", () => {
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Show Result
function showResult() {
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  userNameDisplay.textContent = usernameInput.value;
  scoreDisplay.textContent = score;
  totalQuestionsDisplay.textContent = questions.length;
}

// Restart Quiz
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultSection.classList.add("hidden");
  homeSection.classList.remove("hidden");
});
