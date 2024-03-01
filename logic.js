let questions = [
    {
        question: "Commonly used data types do NOT include?",
        choices: [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers"
        ],
        correctChoice: "choice-two",
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        choices: [
            "Node.js",
            "TypeScript",
            "npm",
            "Prettier"
        ],
        correctChoice: "choice-three",
    },
    {
        question: "Which tool can you use to ensure code quality?",
        choices: [
            "Angular",
            "jQuery",
            "RequireJS",
            "ESLint"
        ],
        correctChoice: "choice-four",
    },
    {
        question: "Who invented JavaScript?",
        choices: [
            "Sheryl Sandberg",
            "Douglas Crockford",
            "Brendan Eich",
            "Tim Berners-Lee"
        ],
        correctChoice: "choice-three",
    },
    {
        question: "The condition of an if/else statement is enclosed within______?",
        choices: [
            "Curly Brackets",
            "Parentheses",
            "Quotes",
            "Square Brackets"
        ],
        correctChoice: "choice-one",
    },
    {
        question: "How do you call a function named myFunction?",
        choices: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction",
            "Call.myFunction",
        ],
        correctChoice: "choice-two",
    },
    {
        question: "How does a for loop start?",
        choices: [
            "for (i = 0; i <= 5; i++)",
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            " for (i <= 5; i++)",
        ],
        correctChoice: "choice-one",
    },
    {
        question: "In JavaScript, which of the following is a logical operator?",
        choices: [
            "|",
            "&&",
            "%",
            "/"
        ],
        correctChoice: "choice-two",
    }
]

//printing the entire array:
console.log(questions)

//printing the first question:
console.log(questions[0])

//printing the first question message:
console.log(questions[0].question)

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
let radioLabels = document.getElementsByTagName("label");
let nextQuestion = document.getElementById("nextQuestion");
let endScreenEl = document.getElementById("end-screen");
let finalScoreEl = document.getElementById("final-score");
let score = 0;
let optionsEl = document.querySelectorAll("options");
radioButtons = [document.getElementById("choice-one"),
document.getElementById("choice-two"),
document.getElementById("choice-three"),
document.getElementById("choice-four")]

// let reStartBtn = document.querySelector("#restart");

// Inititial state of quiz:
let currentQuestionIndex = 0;
// not sure about the line below and figures 
let time = questions.length * 30;
let timerId;

// start the quiz and hide the front page:
function quizStart() {
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    let landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
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
// function questionClick() {
//     if (
//         this.value !==
//         questions[currentQuestionIndex]
//             .correctChoice
//     ) {
//         time -= 10;
//         if (time < 0) {
//             time = 0;
//         }
//         timerEl.textContent = time;
//         feedbackEl.textContent = `Wrong! The correct answer was 
//         ${questions[currentQuestionIndex].correctChoice}.`;
//         feedbackEl.style.color = "red";
//     } else {
// feedbackEl.textContent =
//     "Correct!";
// feedbackEl.style.color =
//     "green";
//     }
// feedbackEl.setAttribute(
//     "class",
//     "feedback"
// );
// setTimeout(function () {
//     feedbackEl.setAttribute(
//         "class",
//         "feedback hide"
//     );
// }, 2000);
//     currentQuestionIndex++;
//     if (
//         currentQuestionIndex ===
//         questions.length
//     ) {
//         quizEnd();
//     } else {
//         getQuestion();
//     }
// }

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

// updating question function
function updateQuestion() {
    console.log("Updating question")
    questionTitle.textContent = questions[currentQuestionIndex].question
    let choices = questions[currentQuestionIndex].choices
    for (i = 0; i < 4; i++) {
        radioButtons[i].checked = false
        radioLabels[i].innerHTML = choices[i]
    }
}

function display() {
    if (document.getElementById("choice-one").checked && questions[currentQuestionIndex].correctChoice === "choice-one") {
        score++
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
    }
    else if (document.getElementById("choice-two").checked && questions[currentQuestionIndex].correctChoice === "choice-two") {
        let label = document.getElementById("choice-two").nextElementSibling
        score++
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
    }
    else if (document.getElementById("choice-three").checked && questions[currentQuestionIndex].correctChoice === "choice-three") {
        score++
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
    }
    else if (document.getElementById("choice-four").checked && questions[currentQuestionIndex].correctChoice === "choice-four") {
        score++
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
    }
    else {
        time -= 10
        time = time - 10
        feedbackEl.textContent = `Wrong! The correct answer was ${questions[currentQuestionIndex].correctChoice}`;
        feedbackEl.style.color = "red"
    }
}

// event listeners//
startBtn.addEventListener("click", function () {
    console.log("start clicked");
    startScreen.classList.add("hide");
    updateQuestion()
    questionsPage.classList.remove("hide");
})


nextQuestion.addEventListener("click", function () {
    // for (i = 0; i < 4; i++) {
    //     var getSelectedValue = document.querySelectorAll('input[name="choices"]:checked');
    // }
    // not sure if above works and how to continue so trying something else below
    display()

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

    document.getElementById("final-score").addEventListener('submit', function (event) {
        event.preventDefault();
        let initials = document.getElementById("initials").value;
        let userData = {
            initials: initials,
            score: score
        };
        console.log("User's initials:", initials);
        console.log("User's score:", score);
        console.log("User's data:", userData);
    });
    //     {
    //     if (optionsEl[i].checked == true) {
    // let label = optionsEl[i].nextSibling.textContent
    // let currentCorrectChoice = questions[currentQuestionIndex].correctChoice
    // if (label == currentCorrectChoice) {
    //     score = score + 1
    //     feedbackEl.textContent =
    //             "Correct!";
    //         feedbackEl.style.color =
    //             "green";
    // } 
    // }
    // } 

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex += 1
        updateQuestion()
    }
    else {
        // function to submit when quiz ends
        quizEnd()
    }
})

//adding timer to the quiz:

startBtn.addEventListener("click", myFunction)
function myFunction() {
    var sec = 80;
    console.log('timer supposed to go')
    var timer = setInterval(function () {
        sec--;
        document.getElementById('time').innerHTML = '00:' + sec;
        if (sec < 0) {
            clearInterval(timer);
            alert("Time is up!")
        }
    }, 1000);
}
// document.getElementById('incorrect').addEventListener('click', function() {
//     sec -= 5;
//     document.getElementById('timerDisplay').innerHTML='00:'+sec;
// });
// startTimer();