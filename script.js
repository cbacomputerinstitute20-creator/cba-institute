const quizData = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: 3
    },
    {
      question: "What does CSS stand for?",
      options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
      correct: 1
    },
    {
      question: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Hyperloop Machine Language", "Hypertext Markdown Language", "None of the above"],
      correct: 0
    },
    {
      question: "Which year was JavaScript created?",
      options: ["1996", "1995", "1994", "1993"],
      correct: 1
    }
  ];
  
  let shuffledQuestions = [];
  let currentQuestion = 0;
  let score = 0;
  let studentName = "";
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  const lastScoreEl = document.getElementById("last-score");
  const quizEl = document.getElementById("quiz");
  const startScreen = document.getElementById("start-screen");
  const startBtn = document.getElementById("startBtn");
  const studentNameInput = document.getElementById("studentName");
  
  startBtn.addEventListener("click", () => {
    const nameInput = studentNameInput.value.trim();
    if (!nameInput) {
      alert("Please enter your name.");
      return;
    }
  
    studentName = nameInput;
    startScreen.style.display = "none";
    quizEl.style.display = "block";
    startQuiz();
  });
  
  function startQuiz() {
    shuffledQuestions = quizData.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    showLastScore();
  }
  
  function loadQuestion() {
    const current = shuffledQuestions[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
  
    current.options.forEach((opt, i) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="option" value="${i}" />
        ${opt}
      `;
      optionsEl.appendChild(label);
    });
  }
  
  function getSelectedOption() {
    const selected = document.querySelector("input[name='option']:checked");
    return selected ? parseInt(selected.value) : null;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelectedOption();
    if (answer === null) {
      alert("Please select an answer!");
      return;
    }
  
    if (answer === shuffledQuestions[currentQuestion].correct) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < shuffledQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    questionEl.textContent = "";
    optionsEl.innerHTML = "";
    submitBtn.style.display = "none";
    resultEl.textContent = `${studentName}, you scored ${score} out of ${shuffledQuestions.length}`;
    
    // Store result
    localStorage.setItem("lastScore", `${studentName}: ${score}/${shuffledQuestions.length}`);
    showLastScore();
  }
  
  function showLastScore() {
    const saved = localStorage.getItem("lastScore");
    if (saved) {
      lastScoreEl.textContent = `Last Score - ${saved}`;
    }
  }