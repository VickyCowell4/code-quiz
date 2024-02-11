// var startButton = document.getElementById("start");
// var startScreen = document.getElementById("start-screen");
// var questionsPage = document.getElementById("questions");
// var questionTitleElement = document.querySelector("#question-title");
// var choicesEl = document.querySelectorAll("#choices");

// function buildQuiz() { }

// display quiz
// buildQuiz();

var questions = [
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
        question: "How do you call a function named myFunction?"
        choices: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction",
            "Call.myFunction",
        ],
        correctChoice: "myFunction()",
    },
    {
        question: "How does a for loop start?"
        choices: [
            "for (i = 0; i <= 5; i++)",
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            " for (i <= 5; i++)",
        ],
        correctChoice: "for (i = 0; i <= 5; i++)",
    },
    {
        question: "In JavaScript, which of the following is a logical operator?"
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
var questionsEl = document.getElementById("#questions");
var choicesEl = document.getElementById("#choices");
var submitBtn = document.getElementById("#submit");
var timerEl = document.getElementsByClassName(".timer");
var startBtn = document.getElementById("#start");
var initialsEl = document.getElementById("#initials");



// function showquestions(){
// questionTitleElement.textContent = questions[0].question
// choicesEl.textContent = questions[0].choices
// }

// // event listener//
// startButton.addEventListener("click", function () {
//     console.log("hello");
//     startScreen.classList.add("hide");
//     questionsPage.classList.remove("hide");
//     showquestions();
// })

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