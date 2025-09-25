import { questions } from './questions.js';

console.log(questions.math.easy[0].q);      // "2 + 2 = ?"
console.log(questions.english.hard[0].q);   // "Choose the most precise word..."

// difficulty settings
const difficultySettings = {
  easy: { numQuestions: 10, timePerQ: 60 },
  medium: { numQuestions: 15, timePerQ: 20 },
  hard: { numQuestions: 20, timePerQ: 9 }
};

// state
let currentQuestions = [], currentIndex = 0, score = 0;
let subject = "math", difficulty = "easy";
let timerInterval, totalTime = 0, timeLeft = 0;

// ---------- DOM Elements ----------
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
const streakBadge = document.getElementById("streakBadge");

// ---------- Daily Streak ----------
function updateStreak() {
  const today = new Date().toDateString();
  let lastPlayed = localStorage.getItem("lastPlayed");
  let streak = parseInt(localStorage.getItem("streak")) || 0;

  if(lastPlayed !== today){
    if(lastPlayed && (new Date(today) - new Date(lastPlayed) === 86400000)){
      streak++;
    } else {
      streak = 1;
    }
    localStorage.setItem("streak", streak);
    localStorage.setItem("lastPlayed", today);
    streakBadge.classList.add("grow");
    setTimeout(()=> streakBadge.classList.remove("grow"), 500);
  }
  document.getElementById("streakCount").textContent = streak;
}
updateStreak();

// ---------- Tips ----------
const tips = ["Pace yourself!","Eliminate wrong answers first.","Double-check calculations.","Context matters in English."];
let tipIndex = 0;
setInterval(()=>{
  tipBox.textContent = tips[tipIndex];
  tipIndex = (tipIndex + 1) % tips.length;
}, 4000);

// ---------- Event Listeners ----------
// Subject/Difficulty selection
document.querySelectorAll(".subject-btn").forEach(btn => {
  btn.addEventListener("click", ()=> {
    document.querySelectorAll(".subject-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    subject = btn.dataset.subject;
  });
});
document.querySelectorAll(".difficulty-btn").forEach(btn => {
  btn.addEventListener("click", ()=> {
    document.querySelectorAll(".difficulty-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    difficulty = btn.dataset.difficulty;
  });
});

// Start Quiz
startBtn.addEventListener("click", startQuiz);
function startQuiz(){
  currentQuestions = shuffleArray(allQuestions[subject][difficulty])
    .slice(0,difficultySettings[difficulty].numQuestions);
  currentIndex = 0; score = 0;
  totalTime = difficultySettings[difficulty].numQuestions * difficultySettings[difficulty].timePerQ;
  timeLeft = totalTime;
  setup.style.display = "none";
  quiz.classList.remove("hidden");
  loadQuestion();
  startTimer();
}

// Timer
function startTimer(){
  clearInterval(timerInterval);
  timerInterval = setInterval(()=>{
    timeLeft--;
    timerBar.style.width = (timeLeft/totalTime*100) + "%";
    if(timeLeft<=0){ clearInterval(timerInterval); endQuiz(); }
  },1000);
}

// Load question
function loadQuestion(){
  if(currentIndex >= currentQuestions.length){ endQuiz(); return; }
  const q = currentQuestions[currentIndex];
  questionEl.classList.remove("show");
  questionNumber.classList.remove("show");
  answersEl.classList.remove("show");
  setTimeout(()=>{
    questionEl.textContent = q.q;
    questionNumber.textContent = `Question ${currentIndex+1} of ${currentQuestions.length}`;
    questionEl.classList.add("show");
    questionNumber.classList.add("show");
    answersEl.innerHTML = "";
    q.a.forEach((ans,i)=>{
      const btn = document.createElement("button");
      btn.className="setup-btn";
      btn.textContent = ans;
      btn.onclick=()=>checkAnswer(i);
      answersEl.appendChild(btn);
    });
    answersEl.classList.add("show");
    updateProgress();
  },50);
}

// Check answer
function checkAnswer(idx){
  const q = currentQuestions[currentIndex];
  const btns = answersEl.querySelectorAll("button");
  btns.forEach((b,i)=>{
    b.disabled=true;
    if(i===q.correct) b.classList.add("correct");
    else if(i===idx) b.classList.add("wrong");
  });
  if(idx===q.correct) score++;
  setTimeout(()=>{ currentIndex++; loadQuestion(); },500);
}

// Update Progress
function updateProgress(){ progress.style.width = (currentIndex/currentQuestions.length*100)+"%"; }

// End Quiz
function endQuiz(){
  quiz.classList.add("hidden");
  endModal.classList.add("show");
  finalScore.textContent = `Score: ${score} / ${currentQuestions.length}`;
  clearInterval(timerInterval);
}

// Retry / Setup Buttons
retryBtn.onclick = ()=>{ endModal.classList.remove("show"); currentIndex=0; score=0; loadQuestion(); quiz.classList.remove("hidden"); startTimer(); };
setupBtn.onclick = ()=>{ endModal.classList.remove("show"); quiz.classList.add("hidden"); setup.style.display="flex"; };

// Back / Next Buttons
backBtn.onclick = ()=>{ currentIndex = Math.max(0,currentIndex-1); loadQuestion(); };
nextBtn.onclick = ()=>{ currentIndex++; loadQuestion(); };

// Restart Button
restartBtn.onclick = ()=>{
  clearInterval(timerInterval);
  currentIndex=0; score=0; currentQuestions=[];
  quiz.classList.add("hidden");
  endModal.classList.remove("show");
  setup.style.display="flex";
};

// Settings
settingsBtn.onclick = ()=>{ settingsModal.classList.add("show"); };
closeSettings.onclick = ()=>{ settingsModal.classList.remove("show"); };

// Theme Toggle
themeToggle.onchange = ()=>{ document.body.classList.toggle("dark"); };

// Helpers
function shuffleArray(arr){ return arr.sort(()=>Math.random()-0.5); }
