
// Question Bank
const questions = {
  math: {
    easy: [
      { q: "2 + 2 = ?", a: ["3", "4", "5", "6"], correct: 1 },
      { q: "10 - 7 = ?", a: ["1","2","3","4"], correct: 2 },
      { q: "5 × 3 = ?", a: ["8","15","10","12"], correct: 1 },
      { q: "12 ÷ 4 = ?", a: ["2","3","4","6"], correct: 1 },
      { q: "7 + 6 = ?", a: ["12","13","14","15"], correct: 1 },
      { q: "9 - 5 = ?", a: ["2","3","4","5"], correct: 2 },
      { q: "3 × 3 = ?", a: ["6","9","12","3"], correct: 1 },
      { q: "8 ÷ 2 = ?", a: ["2","4","6","8"], correct: 1 },
      { q: "1 + 5 = ?", a: ["5","6","7","8"], correct: 1 },
      { q: "4 × 2 = ?", a: ["6","7","8","9"], correct: 2 }
    ],
    medium: [
      { q: "12 × 8 = ?", a: ["96","84","108","112"], correct: 0 },
      { q: "3x + 2x = ?", a: ["5x","6x","3x²","2x"], correct: 0 },
      { q: "Solve: 15 ÷ 3 × 2 = ?", a: ["10","12","8","9"], correct: 0 },
      { q: "Simplify: 5x - 2x = ?", a: ["2x","3x","5x²","7x"], correct: 1 },
      { q: "Square root of 81?", a: ["7","8","9","10"], correct: 2 },
      { q: "7² - 12 = ?", a: ["37","49","43","35"], correct: 2 },
      { q: "2x + 5 = 13, x = ?", a: ["3","4","5","6"], correct: 1 },
      { q: "15 ÷ 5 + 2 = ?", a: ["3","5","2","4"], correct: 3 },
      { q: "6 × 7 = ?", a: ["41","42","43","44"], correct: 1 },
      { q: "18 ÷ 3 = ?", a: ["5","6","7","8"], correct: 1 },
      { q: "9 + 8 = ?", a: ["16","17","18","19"], correct: 1 },
      { q: "5 × 6 = ?", a: ["25","30","35","40"], correct: 1 },
      { q: "10 ÷ 2 + 3 = ?", a: ["7","8","9","6"], correct: 0 },
      { q: "8 × 4 = ?", a: ["30","32","36","34"], correct: 1 },
      { q: "11 - 3 × 2 = ?", a: ["5","6","7","8"], correct: 1 }
    ],
    hard: [
      { q: "Solve: x² - 9 = 0", a: ["x = ±3","x=9","x=-9","x=0"], correct: 0 },
      { q: "Solve: 2x² + 4x - 6 = 0", a: ["x=1,-3","x=-1,3","x=2,-3","x=-2,3"], correct: 1 },
      { q: "Integrate: ∫2x dx", a: ["x² + C","2x² + C","x + C","2x + C"], correct: 0 },
      { q: "Derivative of x²?", a: ["1","2x","x","x²"], correct: 1 },
      { q: "Factor: x² - 16", a: ["(x-4)(x+4)","(x+4)²","x²-8","(x-8)(x+2)"], correct: 0 }
    ]
  },
  english: {
    easy: [
      { q: "Choose correct spelling:", a: ["Definately","Definitely","Defanitely","Definitly"], correct: 1 },
      { q: "Which is a noun?", a: ["Run","Beautiful","Happiness","Quickly"], correct: 2 },
      { q: "Opposite of hot?", a: ["Warm","Cold","Boiling","Heat"], correct: 1 },
      { q: "Synonym of big?", a: ["Small","Tiny","Large","Little"], correct: 2 },
      { q: "Plural of 'child'?", a: ["Childs","Childes","Children","Childer"], correct: 2 },
      { q: "Past tense of go?", a: ["Goed","Went","Gone","Go"], correct: 1 },
      { q: "Antonym of happy?", a: ["Sad","Joyful","Glad","Excited"], correct: 0 },
      { q: "Synonym of quick?", a: ["Fast","Slow","Late","Small"], correct: 0 },
      { q: "Which is a verb?", a: ["Eat","Food","Beautiful","Car"], correct: 0 },
      { q: "Plural of mouse?", a: ["Mouses","Mice","Mouse","Mices"], correct: 1 }
    ],
    medium: [
      { q: "Identify verb: 'She sings beautifully.'", a: ["She","Sings","Beautifully","None"], correct: 1 },
      { q: "Pick synonym of 'rapid':", a: ["Slow","Quick","Late","Small"], correct: 1 },
      { q: "Choose correct word: 'Their/There/They’re house'", a: ["Their","There","They’re","Them"], correct: 0 },
      { q: "Antonym of 'complex'", a: ["Simple","Hard","Difficult","Complicated"], correct: 0 },
      { q: "Synonym of 'happy'?", a: ["Sad","Joyful","Angry","Tired"], correct: 1 },
      { q: "Past tense of run?", a: ["Runned","Ran","Run","Running"], correct: 1 },
      { q: "Plural of 'analysis'?", a: ["Analysises","Analyses","Analysis","Analys"], correct: 1 },
      { q: "Choose correct: 'Its/It’s raining'", a: ["Its","It’s","It","Is"], correct: 1 },
      { q: "Antonym of 'generous'", a: ["Kind","Stingy","Nice","Friendly"], correct: 1 },
      { q: "Identify noun: 'Running is fun'", a: ["Running","Fun","Is","All"], correct: 3 },
      { q: "Synonym of 'angry'?", a: ["Mad","Sad","Happy","Tired"], correct: 0 },
      { q: "Correct spelling: 'Accommodate'?", a: ["Acommodate","Accommodate","Acomodate","Accomodate"], correct: 1 },
      { q: "Choose correct: 'He ___ to school'", a: ["Go","Goes","Going","Gone"], correct: 1 },
      { q: "Antonym of 'bright'", a: ["Light","Dark","Shiny","Glowing"], correct: 1 },
      { q: "Synonym of 'difficult'?", a: ["Easy","Hard","Simple","Plain"], correct: 1 }
    ],
    hard: [
      { q: "Antonym of 'benevolent'?", a: ["Generous","Kind","Malevolent","Friendly"], correct: 2 },
      { q: "Choose correct: 'Whom/Who should I ask?'", a: ["Whom","Who","Which","That"], correct: 1 },
      { q: "Identify adjective: 'The incredibly fast runner'", a: ["Incredibly","Fast","Runner","The"], correct: 1 },
      { q: "Synonym of 'obfuscate'?", a: ["Clarify","Confuse","Explain","Help"], correct: 1 },
      { q: "Correct usage: 'Less/Fewer apples'", a: ["Less","Fewer","Both","None"], correct: 1 }
    ]
  }
};

// Difficulty settings
const difficultySettings = {
  easy: { numQuestions: 10, timePerQ: 60 },
  medium: { numQuestions: 15, timePerQ: 20 },
  hard: { numQuestions: 20, timePerQ: 9 }
};

// State
let currentQuestions = [], currentIndex = 0, score = 0;
let subject = "math", difficulty = "easy";
let timerInterval, totalTime = 0, timeLeft = 0;

// Elements
const setup = document.getElementById("setup");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const questionNumber = document.getElementById("questionNumber");
const progress = document.getElementById("progress");
const timerBar = document.getElementById("timerBar");
const endModal = document.getElementById("endModal");
const finalScore = document.getElementById("finalScore");
const startBtn = document.getElementById("startQuizBtn");
const restartBtn = document.getElementById("restartBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const retryBtn = document.getElementById("retryBtn");
const setupBtn = document.getElementById("setupBtn");
const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeSettings = document.getElementById("closeSettings");
const themeToggle = document.getElementById("themeToggle");
const tipBox = document.getElementById("tipBox");

// Tips
const tips = [
  "Pace yourself!",
  "Eliminate wrong answers first.",
  "Double-check calculations.",
  "Context matters in English."
];
let tipIndex = 0;
setInterval(() => {
  tipBox.textContent = tips[tipIndex];
  tipIndex = (tipIndex + 1) % tips.length;
}, 4000);

// Subject/Difficulty selection
document.querySelectorAll(".subject-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".subject-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    subject = btn.dataset.subject;
  });
});
document.querySelectorAll(".difficulty-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".difficulty-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    difficulty = btn.dataset.difficulty;
  });
});

// Start quiz
startBtn.addEventListener("click", () => {
  currentQuestions = shuffleArray(questions[subject][difficulty]).slice(0, difficultySettings[difficulty].numQuestions);
  currentIndex = 0;
  score = 0;
  totalTime = difficultySettings[difficulty].numQuestions * difficultySettings[difficulty].timePerQ;
  timeLeft = totalTime;
  setup.style.display = "none";
  quiz.classList.remove("hidden");
  loadQuestion();
  startTimer();
});

// Timer
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerBar.style.width = (timeLeft / totalTime * 100) + "%";
    if (timeLeft <= 0) { clearInterval(timerInterval); endQuiz(); }
  }, 1000);
}

// Load Question
function loadQuestion() {
  if (currentIndex >= currentQuestions.length) { endQuiz(); return; }
  let q = currentQuestions[currentIndex];

  questionEl.classList.remove("show");
  questionNumber.classList.remove("show");
  answersEl.classList.remove("show");

  setTimeout(() => {
    questionEl.textContent = q.q;
    questionNumber.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
    questionEl.classList.add("show");
    questionNumber.classList.add("show");

    answersEl.innerHTML = "";
    q.a.forEach((ans, i) => {
      const btn = document.createElement("button");
      btn.className = "setup-btn";
      btn.textContent = ans;
      btn.onclick = () => { checkAnswer(i); };
      answersEl.appendChild(btn);
    });
    answersEl.classList.add("show");
    updateProgress();
  }, 50);
}

// Check Answer
function checkAnswer(idx) {
  const q = currentQuestions[currentIndex];
  const btns = answersEl.querySelectorAll("button");
  btns.forEach((b, i) => { 
    b.disabled = true; 
    if (i === q.correct) b.classList.add("correct"); 
    else if (i === idx) b.classList.add("wrong"); 
  });
  if (idx === q.correct) score++;
  setTimeout(() => { currentIndex++; loadQuestion(); }, 500);
}

// Progress
function updateProgress() { progress.style.width = (currentIndex / currentQuestions.length * 100) + "%"; }

// End Quiz
function endQuiz() {
  clearInterval(timerInterval);
  quiz.classList.add("hidden");
  endModal.classList.add("show");
  let rawScore = Math.round(score / currentQuestions.length * 800);
  let displayedScore = 0;
  const interval = setInterval(() => {
    displayedScore += Math.ceil(rawScore / 50);
    if (displayedScore >= rawScore) { displayedScore = rawScore; clearInterval(interval); }
    finalScore.textContent = `You scored ${displayedScore} / 800`;
  }, 30);
}

// Buttons
restartBtn.onclick = () => {
  // Stop timer
  clearInterval(timerInterval);

  // Reset state
  currentIndex = 0;
  score = 0;
  currentQuestions = [];

  // Hide quiz and end modals
  quiz.classList.add("hidden");
  endModal.classList.remove("show");

  // Show setup
  setup.style.display = "flex";
};

nextBtn.onclick = () => { currentIndex++; loadQuestion(); }
backBtn.onclick = () => { currentIndex = Math.max(0, currentIndex - 1); loadQuestion(); }
retryBtn.onclick = () => { endModal.classList.remove("show"); currentIndex = 0; score = 0; loadQuestion(); quiz.classList.remove("hidden"); startTimer(); }
setupBtn.onclick = () => { endModal.classList.remove("show"); quiz.classList.add("hidden"); setup.style.display = "flex"; }

// Settings
settingsBtn.onclick = () => { settingsModal.classList.add("show"); }
closeSettings.onclick = () => { settingsModal.classList.remove("show"); }
themeToggle.onchange = e => { document.body.classList.toggle("dark", e.target.checked); }

// Keybinds
document.addEventListener("keydown", (e) => {
  if (quiz.classList.contains("hidden")) return;
  const btns = answersEl.querySelectorAll("button");
  if (["1","2","3","4"].includes(e.key)) { 
    const idx = parseInt(e.key) - 1; 
    if (btns[idx]) btns[idx].click(); 
  }
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") backBtn.click();
});

// Helpers
function shuffleArray(arr) { return arr.sort(() => Math.random() - 0.5); }
// ------------------ Persistent Stats ------------------

// Initialize stats from localStorage or defaults
let stats = JSON.parse(localStorage.getItem("quizStats")) || {
  totalQuizzes: 0,
  totalCorrect: 0,
  totalIncorrect: 0,
  totalScore: 0
};

// Create/update stats display in settings
function updateStatsDisplay() {
  let statsContainer = document.getElementById("statsContainer");
  if (!statsContainer) {
    statsContainer = document.createElement("div");
    statsContainer.id = "statsContainer";
    statsContainer.style.marginTop = "20px";
    statsContainer.style.textAlign = "left";
    statsContainer.style.padding = "10px";
    statsContainer.style.borderTop = "1px solid #888";
    settingsModal.querySelector(".content").appendChild(statsContainer);
  }

  // Ensure all stats values are numbers
  stats.totalQuizzes = stats.totalQuizzes || 0;
  stats.totalCorrect = stats.totalCorrect || 0;
  stats.totalIncorrect = stats.totalIncorrect || 0;
  stats.totalScore = stats.totalScore || 0;

  statsContainer.innerHTML = `
    <h3>Stats</h3>
    <p>Total Quizzes Taken: ${stats.totalQuizzes}</p>
    <p>Total Correct Answers: ${stats.totalCorrect}</p>
    <p>Total Incorrect Answers: ${stats.totalIncorrect}</p>
    <p>Total Score: ${stats.totalScore}</p>
  `;
}

// Update stats after quiz ends
function updateStats() {
  // Safety checks
  if (typeof score !== "number") score = 0;
  if (!Array.isArray(currentQuestions)) currentQuestions = [];

  stats.totalQuizzes += 1;
  stats.totalCorrect += score;
  stats.totalIncorrect += (currentQuestions.length - score);
  stats.totalScore += Math.round((score / currentQuestions.length) * 800);

  // Save to localStorage
  localStorage.setItem("quizStats", JSON.stringify(stats));

  // Update the display
  updateStatsDisplay();
}

// Wrap original endQuiz to update stats automatically
const originalEndQuiz = endQuiz;
endQuiz = function() {
  originalEndQuiz();
  updateStats();
};

// Update stats display immediately when opening settings
settingsBtn.onclick = () => {
  settingsModal.classList.add("show");
  updateStatsDisplay();
};
