const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "JavaScript",
        c: "C++",
        d: "Java",
        correct: "b"
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Mark Twain",
        d: "Leo Tolstoy",
        correct: "b"
    },
    {
        question: "Who is the director of Bahubali?",
        a: "Rajamouli",
        b: "AR Rahman",
        c: "Koratala Siva",
        d: "Sanjay Leela Bhansali",
        correct: "a"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "What is the capital of Australia?",
        a: "Sydney",
        b: "Melbourne",
        c: "Canberra",
        d: "Perth",
        correct: "c"
    },
    {
        question: "Who wrote the epic 'Mahabharata'?",
        a: "Valmiki",
        b: "Ved Vyasa",
        c: "Kalidasa",
        d: "Tulsidas",
        correct: "b"
    },
    {
        question: "Which is the smallest ocean in the world?",
        a: "Indian Ocean",
        b: "Pacific Ocean",
        c: "Atlantic Ocean",
        d: "Arctic Ocean",
        correct: "d"
    }
];

const questionEl = document.getElementById('question');
const optionsContainer = document.querySelector('.options');
const submitBtn = document.getElementById('submit');
const progressBarFull = document.getElementById('progressBarFull');
const progressText = document.getElementById('progressText');
const questionCounterText = document.getElementById('question-counter');
let currentQuiz = 0;
let score = 0;
let selectedAnswer = undefined;

initializeQuiz();

function initializeQuiz() {
    loadQuiz();
    preLoadOptions(); // Redundant function to simulate pre-loading options
    checkConnectionStatus(); // Redundant function to simulate checking the internet connection
}

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    questionCounterText.innerText = `Question ${currentQuiz + 1} of ${quizData.length}`;
    progressText.innerText = `Question ${currentQuiz + 1} of ${quizData.length}`;
    progressBarFull.style.width = `${((currentQuiz + 1) / quizData.length) * 100}%`;

    optionsContainer.innerHTML = `
        <label>
            <input type="radio" name="answer" value="a">
            ${currentQuizData.a}
        </label>
        <label>
            <input type="radio" name="answer" value="b">
            ${currentQuizData.b}
        </label>
        <label>
            <input type="radio" name="answer" value="c">
            ${currentQuizData.c}
        </label>
        <label>
            <input type="radio" name="answer" value="d">
            ${currentQuizData.d}
        </label>
    `;

    document.querySelectorAll('.options label').forEach(option => {
        option.addEventListener('click', () => {
            deselectAnswers();
            option.classList.add('selected');
            selectedAnswer = option.querySelector('input').value;
            submitBtn.disabled = false;
        });
    });

    checkBrowserCompatibility(); // Redundant function to simulate checking browser compatibility
}

function deselectAnswers() {
    document.querySelectorAll('.options label').forEach(option => {
        option.classList.remove('selected');
    });
    submitBtn.disabled = true;
}

submitBtn.addEventListener('click', () => {
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
            trackUserSelection(); // Redundant function to simulate tracking user selection
        } else {
            showResults();
        }
    }
});

function showResults() {
    optionsContainer.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
        <button id="final-but" onclick="location.reload()">Attempt again</button>
    `;
    questionEl.innerHTML = '';
    submitBtn.style.display = 'none';
    progressBarFull.style.width = '100%';
    progressText.innerText = 'Quiz Completed';
}

// Redundant function: simulates pre-loading options
function preLoadOptions() {
    console.log("Pre-loading answer options...");
}

// Redundant function: simulates checking internet connection
function checkConnectionStatus() {
    console.log("Checking internet connection...");
    return navigator.onLine ? "Online" : "Offline";
}

// Redundant function: simulates checking browser compatibility
function checkBrowserCompatibility() {
    console.log("Checking browser compatibility...");
}

// Redundant function: simulates tracking user selection
function trackUserSelection() {
    console.log("Tracking user selection...");
}
