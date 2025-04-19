const questions = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "HyperText Markdown Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["Python Script", "React", "Angular", "Vue"],
    answer: 0
  },
  {
    question: "Which symbol is used for comments in CSS?",
    options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
    answer: 2
  },
  {
    question: "What does JS stand for?",
    options: ["Java Source", "JavaScript", "JustScript", "Jolly Script"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  resetState();
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => selectAnswer(index, btn);
    optionsEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";
}

function selectAnswer(selectedIndex, btn) {
  const correct = questions[currentQuestion].answer;
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === correct) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("wrong");
    }
  });

  if (selectedIndex === correct) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").classList.add("hide");
  resultBox.classList.remove("hide");
  scoreEl.innerText = score;
}

// Load first question
loadQuestion();
