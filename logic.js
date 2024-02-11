// var startButton = document.getElementById("start");
// var startScreen = document.getElementById("start-screen");
// var questionsPage = document.getElementById("questions");
// var questionTitleElement = document.querySelector("#question-title");
// var choicesEl = document.querySelectorAll("#choices");

let questions = [
    {
        question: "Commonly used data types do NOT include?",
        choices: [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers"
        ],
        correctChoice: "Booleans",
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        choices: [
            "Node.js",
            "TypeScript",
            "npm",
            "Prettier"
        ],
        correctChoice: "npm",
    },
    {
        question: "Which tool can you use to ensure code quality?",
        choices: [
            "Angular",
            "jQuery",
            "RequireJS",
            "ESLint"
        ],
        correctChoice: "ESLint",
    },
    {
        question: "Who invented JavaScript?",
        choices: [
            "Sheryl Sandberg",
            "Douglas Crockford",
            "Brendan Eich",
            "Tim Berners-Lee"
        ],
        correctChoice: "Brendan Eich",
    },
    {
        question: "The condition of an if/else statement is enclosed within______?",
        choices: [
            "Curly Brackets",
            "Parentheses",
            "Quotes",
            "Square Brackets"
        ],
        correctChoice: "Curly Brackets",
    },
    {
        question: "How do you call a function named myFunction?",
        choices: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction",
            "Call.myFunction",
        ],
        correctChoice: "myFunction()",
    },
    {
        question: "How does a for loop start?",
        choices: [
            "for (i = 0; i <= 5; i++)",
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            " for (i <= 5; i++)",
        ],
        correctChoice: "for (i = 0; i <= 5; i++)",
    },
    {
        question: "In JavaScript, which of the following is a logical operator?",
        choices: [
            "|",
            "&&",
            "%",
            "/"
        ],
        correctChoice: "&&",
    }
]

//printing the entire array:
console.log(questions)

//printing the first question:
console.log(questions[0])

//printing the first question message:
console.log(questions[0].question)

// console.log(questions[0].choices)

// console.log(questions[0].choices.a)

// Get Dom elements:
let questionsEl = document.getElementById("questions");
let choicesEl = document.getElementById("choices");
let submitBtn = document.getElementById("submit");
let timerEl = document.getElementById("time");
let startBtn = document.getElementById("start");
let initialsEl = document.getElementById("initials");
let feedbackEl = document.getElementById("feedback");
let startScreen = document.getElementById("start-screen");
let questionsPage = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
// var reStartBtn = document.querySelector("#restart");

// Inititial state of quiz:
let currentQuestionIndex = 0;
let time = questions.length * 30;
let timerId;

// start the quiz and hide the front page:
function quizStart() {
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    let landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class","hide");
    questionsEl.removeAttribute("class");
    getQuestion();
}

// Loop through the array of questions/answers and create list with buttons
function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let promptEl = document.getElementById("question-title");
    promptEl.textContent = currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(
        function (choice, i) {
            let choiceBtn = document.createElement("button");
            choiceBtn.setAttribute("value", choice);
            choiceBtn.textContent =
                i + 1 + ". " + choice;
            choiceBtn.onclick =
                questionClick;
            choicesEl.appendChild(
                choiceBtn
            );
        }
    );
}

// Check for right answers, deduct time for wrong answer then go to next question
function questionClick() {
    if (
        this.value !==
        questions[currentQuestionIndex]
            .correctChoice
    ) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textContent = `Wrong! The correct answer was 
        ${questions[currentQuestionIndex].correctChoice}.`;
        feedbackEl.style.color = "red";
    } else {
        feedbackEl.textContent =
            "Correct!";
        feedbackEl.style.color =
            "green";
    }
    feedbackEl.setAttribute(
        "class",
        "feedback"
    );
    setTimeout(function () {
        feedbackEl.setAttribute(
            "class",
            "feedback hide"
        );
    }, 2000);
    currentQuestionIndex++;
    if (
        currentQuestionIndex ===
        questions.length
    ) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// End quiz by hiding questions,stop timer and show final score
function quizEnd() {
    clearInterval(timerId);
    let endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");
    let finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute(
        "class",
        "hide"
    );
}
 
// function showquestions(){
// questionTitleElement.textContent = questions[0].question
// choicesEl.textContent = questions[0].choices
// }

// // event listener//
console.log(startBtn)
console.log(typeof startBtn)
startBtn.addEventListener("click", function () {
    console.log("hello");
    startScreen.classList.add("hide");
    questionTitle.textContent = questions[currentQuestionIndex].question
    questionsPage.classList.remove("hide");
})

// function showResults() { }

// on submit, show results:
// submitButton.addEventListener('click', showResults);

//add a timer to the quiz:
// var timeLeft = 30;
// var timer = setInterval(function () {
//     timeLeft--;
//     document.getElementById('timer').textContent = timeLeft;
//     if (timeLeft <= 0) {
//         clearInterval(timer);
//         alert('Time is up!');
//     }
// }, 1000);