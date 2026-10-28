const startScreen=document.querySelector("#start-screen");
const quizScreen=document.querySelector("#quiz-screen");
const resultScreen=document.querySelector("#result-screen");
const startButton=document.getElementById("start-btn");
const questionText=document.querySelector("#question-text");
const answerContainer=document.getElementById("answer-container");
const currentQuestionSpan=document.querySelector("#current-question");
const totalQuestionSpan=document.querySelector("#total-questions");
const scoreSpan=document.querySelector("#score");
const finalScoreSpan=document.querySelector("#final-score");
const maxScoreSpan=document.querySelector("#max-score");
const resultMessage=document.querySelector("#result-message");
const restartButton=document.querySelector("#restart-btn");
const progressBar=document.querySelector("#progress");

const quizQuestions=[
    {
        question: "What is the capital of India?",
        answer:[
            {text: "Kolkata",correct: false},
            {text: "Mumbai",correct: false},
            {text: "Bihar",correct: false},
            {text: "New Delhi",correct: true},
        ],
    },
    {
        question: "What is the color of sky?",
        answer:[
            {text: "Sky-blue",correct: true},
            {text: "Blue",correct: false},
            {text: "violet",correct: false},
            {text: "Indigo",correct: false},
        ],
    },
    {
    question: "What is the currency of India?",
    answer:[
        {text: "Diram",correct: false},
        {text: "Taka",correct: false},
        {text: "Dollar",correct: false},
        {text: "Rupees",correct: true},
    ],
    },

    {
        question: "Which planet is known as the red planet?",
        answer:[
            {text: "Mercury",correct: false},
            {text: "Earth",correct: false},
            {text: "Mars",correct: true},
            {text: "Jupiter",correct: false},
        ],
    },
    {
        question: "Who is also known as the father of nation?",
        answer:[
            {text: "Mahatma Gandhi",correct: true},
            {text: "VVS Laxman",correct: false},
            {text: "Jawahar Lal Nehru",correct: false},
            {text: "Bhagat Singh",correct: false},
        ],
    }
]

//  quiz stats

let currentQuestionIndex=0;
let score=0;
let answerDiasbled=false;  // important

totalQuestionSpan.textContent=quizQuestions.length;
maxScoreSpan.textContent=quizQuestions.length;

startButton.addEventListener("click",startQuiz);
restartButton.addEventListener("click",restartQuiz);


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    scoreSpan.textContent=0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
  
}

function updateProgress(){
    const progressPercent =
    ((currentQuestionIndex)/quizQuestions.length)*100;

    progressBar.style.width = progressPercent + "%";
}

function showQuestion(){
    answerDiasbled=false;
    
    const currentQuestion=quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent=currentQuestionIndex+1;
    questionText.textContent=currentQuestion.question;

    answerContainer.innerHTML=""

    currentQuestion.answer.forEach(answer =>{
        const button=document.createElement("button");
        button.textContent=answer.text;
        button.classList.add('answer-btn');;

        button.dataset.correct=answer.correct;
        button.addEventListener("click",selectAnswer)

        answerContainer.appendChild(button)
    })
    updateProgress();
}


function selectAnswer(event){
    if(answerDiasbled===true) return
    answerDiasbled=true
    const selectedButton=event.target;
    const isCorrect=selectedButton.dataset.correct=="true"

    Array.from(answerContainer.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }else if(button===selectedButton){
            button.classList.add("incorrect");
        }
    })
    if(isCorrect){
        score++;
        scoreSpan.textContent=score

    }
    setTimeout(()=>{
        currentQuestionIndex++;

        if(currentQuestionIndex < quizQuestions.length){
            showQuestion()
        }
        else{
            showResults()
        }
    },1000)
}

function showResults(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent=score;

    const percentage=(score/quizQuestions.length)*100;

    if(percentage===100){
        resultMessage.textContent="Perfect!";
    }else if(percentage >=80){
        resultMessage.textContent="Great job!";
    }else if(percentage >=60){
        resultMessage.textContent="Good!";
    }else if(percentage >=40){
        resultMessage.textContent="Not Bad!";
    }else{
        resultMessage.textContent="Need more practice!";
    }
}

function restartQuiz(){
    resultScreen.classList.remove("active");
    
    startQuiz();
}






