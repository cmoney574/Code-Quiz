var quizStart = document.querySelector(".start");
var quizEl = document.querySelector("#qcontainer");
var resultsEl = document.querySelector(".results");
var questEl = document.querySelector("#question");
var answerEl = document.querySelector("#answer");
var quizNext = document.querySelector(".next");
var quizSave = document.querySelector(".save");
var score = 0;

var shuffled, current, checker;

quizStart.addEventListener('click', start);
quizNext.addEventListener('click', ()=>{
    current++;
    next();
}

)

var quizQuestions = [
    {question: "Who invented javascript", answers: [
        {text: "George Washington", correct: false},
        {text: "John Conner", correct: false},
        {text: "Brendan Eich", correct: true},
        {text: "Albert Einstein", correct: false}
    ]
},
    {question: "Which of these is a javascript package manager", answers: [
        {text: "Node.js", correct: false},
        {text: "TypeScript", correct: false},
        {text: "npm", correct: true},
        {text: "Bootstrap", correct: false}
    ]
    },
    {question: "When was javascript created", answers:[
        {text: "1995", correct: true},
        {text: "1997", correct: false},
        {text: "1999", correct: false},
        {text: "2001", correct: false}
    ]
    }
]

function buildquiz(currentQuestion){
var output = [];

}

function showresults(){

}

function start(){
console.log("started");
quizStart.classList.add('hidden');
quizEl.classList.remove('hidden');
shuffled = quizQuestions.sort(() =>Math.random()-.5);
current = 0;
next();
}

function next(){
    resetForm();
    showQuestion(shuffled[current]);
}

function resetForm(){
    clearStatus(document.body);
    quizNext.classList.add("hidden");
    while(answerEl.firstChild){
        answerEl.removeChild(answerEl.firstChild)
    }
}

function showQuestion(question){
    questEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', select);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        answerEl.appendChild(button);
    });
}
function select(e){
   
    var selected = e.target;
    var correct = selected.dataset.correct;
    setStatus(document.body, correct);
    if(correct){
        score++;
    }
    Array.from(answerEl.children).forEach(button =>{
        setStatus(button, button.dataset.correct)
    })
    if(shuffled.length>current +1){
        quizNext.classList.remove("hidden");
    }
    else{
        quizEl.classList.add("hidden");
        quizSave.classList.remove("hidden");
        quizSave.innerText = "Save score of: " + score + " out of " + quizQuestions.length +"?" ;
    }
    
}
function setStatus(element, correct){
    
    clearStatus(element);
  
    if(correct){
        element.classList.add("correct");
    }
    else{
        element.classList.add("wrong");
    }
}
function clearStatus(element){
    element.classList.remove("correct");
    element.classList.remove("wrong");
}