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
        question: "Who is director of Bahubali",
        a: "Rajamouli",
        b: "ar rahman",
        c: "koratala siva",
        d: "sanjay leela bansali",
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

totalQuestionsEl.innerText = quizData.length;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    currentQuestionEl.innerText = currentQuiz + 1;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
        answerEl.parentElement.classList.remove("selected");
    });
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

answerEls.forEach(answerEl => {
    answerEl.addEventListener("change", () => {
        deselectAnswers();
        answerEl.parentElement.classList.add("selected");
    });
});

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    console.log(document.getElementById("answer"));
    if(answer) {
        const correctAnswer = quizData[currentQuiz].correct;

        if(answer === correctAnswer) {
            score++;
        }

        answerEls.forEach(answerEl => {
            if(answerEl.id === correctAnswer) {
                answerEl.parentElement.classList.add("correct");
            } else if(answerEl.checked) {
                answerEl.parentElement.classList.add("incorrect");
            }
        });

        currentQuiz++;

        setTimeout(() => {
            if(currentQuiz < quizData.length) {
                console.log(20);
                loadQuiz();
            } else {
                quiz.innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }, 1000); // Add a delay before loading the next question or showing the result
    }
});
