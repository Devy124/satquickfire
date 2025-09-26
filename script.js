import { questions } from "./questions.js";

// ------------------ Settings ------------------
const difficultySettings = {
    easy: { numQuestions: 10, timePerQ: 60 },
    medium: { numQuestions: 15, timePerQ: 20 },
    hard: { numQuestions: 20, timePerQ: 9 }
};

// ------------------ State ------------------
let currentQuestions = [], currentIndex = 0, score = 0;
let subject = "math", difficulty = "easy";
let timerInterval, totalTime = 0, timeLeft = 0;

// ------------------ Elements ------------------
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

// ------------------ Tips ------------------
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

// ------------------ Subject/Difficulty ------------------
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

// ------------------ Start Quiz ------------------
startBtn.addEventListener("click", () => {
    currentQuestions = shuffleArray(questions[subject][difficulty])
        .slice(0, difficultySettings[difficulty].numQuestions);
    currentIndex = 0;
    score = 0;
    totalTime = difficultySettings[difficulty].numQuestions * difficultySettings[difficulty].timePerQ;
    timeLeft = totalTime;
    showQuiz(); // particles in quiz
    loadQuestion();
    startTimer();
});

// ------------------ Timer ------------------
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerBar.style.width = (timeLeft / totalTime * 100) + "%";
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// ------------------ Load Question ------------------
function loadQuestion() {
    if (currentIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    const q = currentQuestions[currentIndex];

    questionEl.classList.remove("show");
    questionNumber.classList.remove("show");
    answersEl.classList.remove("show");

    setTimeout(() => {
        questionEl.textContent = q.q;
        questionNumber.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
        questionEl.classList.add("show");
        questionNumber.classList.add("show");

        const shuffledAnswers = q.a.map((text, i) => ({ text, originalIndex: i }));
        shuffleArray(shuffledAnswers);

        answersEl.innerHTML = "";
        shuffledAnswers.forEach(ansObj => {
            const btn = document.createElement("button");
            btn.className = "setup-btn show";
            btn.textContent = ansObj.text;
            btn.onclick = () => checkAnswer(ansObj.originalIndex);
            answersEl.appendChild(btn);
        });
        answersEl.classList.add("show");
        updateProgress();
    }, 50);
}

// ------------------ Check Answer ------------------
function checkAnswer(idx) {
    const q = currentQuestions[currentIndex];
    const btns = answersEl.querySelectorAll("button");

    btns.forEach((b, i) => {
        b.disabled = true;
        if (i === idx && idx === q.correct) b.classList.add("correct");
        else if (i === idx) b.classList.add("wrong");
        if (i === q.correct) b.classList.add("correct");
    });

    if (idx === q.correct) score++;
    setTimeout(() => {
        currentIndex++;
        loadQuestion();
    }, 500);
}

// ------------------ Progress ------------------
function updateProgress() {
    progress.style.width = (currentIndex / currentQuestions.length * 100) + "%";
}

// ------------------ End Quiz ------------------
function endQuiz() {
    clearInterval(timerInterval);
    quiz.classList.add("hidden");
    endModal.classList.add("show");

    const rawScore = Math.round(score / currentQuestions.length * 800);
    let displayedScore = 0;
    const interval = setInterval(() => {
        displayedScore += Math.ceil(rawScore / 50);
        if (displayedScore >= rawScore) {
            displayedScore = rawScore;
            clearInterval(interval);
        }
        finalScore.textContent = `You scored ${displayedScore} / 800`;
    }, 30);

    updateStats();
}

// ------------------ Buttons ------------------
restartBtn.onclick = () => {
    clearInterval(timerInterval);
    currentIndex = 0;
    score = 0;
    currentQuestions = [];
    showSetup();
};

nextBtn.onclick = () => {
    currentIndex++;
    loadQuestion();
};

backBtn.onclick = () => {
    currentIndex = Math.max(0, currentIndex - 1);
    loadQuestion();
};

retryBtn.onclick = () => {
    endModal.classList.remove("show");
    currentIndex = 0;
    score = 0;
    loadQuestion();
    quiz.classList.remove("hidden");
    startTimer();
};

setupBtn.onclick = () => {
    endModal.classList.remove("show");
    showSetup();
};

settingsBtn.onclick = () => {
    settingsModal.classList.add("show");
    updateStatsDisplay();
};

closeSettings.onclick = () => {
    settingsModal.classList.remove("show");
};

themeToggle.onchange = e => {
    document.body.classList.toggle("dark", e.target.checked);
};

// ------------------ Keybinds ------------------
document.addEventListener("keydown", e => {
    if (quiz.classList.contains("hidden")) return;

    const btns = answersEl.querySelectorAll("button");
    if (["1","2","3","4"].includes(e.key)) {
        const idx = parseInt(e.key)-1;
        if(btns[idx]) btns[idx].click();
    }
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") backBtn.click();
});

// ------------------ Helpers ------------------
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// ------------------ Persistent Stats ------------------
let stats = JSON.parse(localStorage.getItem("quizStats")) || {
    totalQuizzes:0,
    totalCorrect:0,
    totalIncorrect:0,
    totalScore:0
};

function updateStatsDisplay() {
    let container = document.getElementById("statsContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "statsContainer";
        container.style.marginTop = "20px";
        container.style.textAlign = "left";
        container.style.padding = "10px";
        container.style.borderTop = "1px solid #888";
        settingsModal.querySelector(".content").appendChild(container);
    }
    container.innerHTML = `
        <h3>Stats</h3>
        <p>Total Quizzes Taken: ${stats.totalQuizzes}</p>
        <p>Total Correct Answers: ${stats.totalCorrect}</p>
        <p>Total Incorrect Answers: ${stats.totalIncorrect}</p>
        <p>Total Score: ${stats.totalScore}</p>
    `;
}

function updateStats() {
    stats.totalQuizzes++;
    stats.totalCorrect += score;
    stats.totalIncorrect += currentQuestions.length - score;
    stats.totalScore += Math.round((score / currentQuestions.length) * 800);
    localStorage.setItem("quizStats", JSON.stringify(stats));
    updateStatsDisplay();
}

// ------------------ Particle Effects ------------------
const particleCount = 80;

function generateParticles(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.querySelectorAll(".particle").forEach(p => p.remove());

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = Math.random() * 3 + 1;
        p.style.width = p.style.height = `${size}px`;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        p.style.left = `${startX}%`;
        p.style.top = `${startY}%`;
        const dx = (Math.random() - 0.5) * 200;
        const dy = (Math.random() - 0.5) * 200;
        p.style.setProperty("--dx", `${dx}px`);
        p.style.setProperty("--dy", `${dy}px`);
        const duration = 5 + Math.random() * 10;
        p.style.animationDuration = `${duration}s`;
        container.appendChild(p);
    }
}

// ------------------ Show Screens with Particles ------------------
function showSetup() {
    setup.style.display = "flex";
    quiz.classList.add("hidden");
    generateParticles("setup");
}

function showQuiz() {
    setup.style.display = "none";
    quiz.classList.remove("hidden");
    generateParticles("quiz");
}
