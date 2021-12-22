var quizStart = document.querySelector(".start");
var quizEl = document.querySelector("#qcontainer");
var resultsEl = document.querySelector(".results");

quizStart.addEventListener('click', start);

var quizQuestions = [
    {question: "Who invented javascript", answers: {
        a: "George Washington",
        b: "John Conner",
        c: "Brendan Eich",
        d: "Albert Einstein"
    }, correctAnswer: "c"
},
    {question: "Which of these is a javascript package manager", answers:{
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "Bootstrap"
    }, correctAnswer: "c"
    },
    {question: "When was javascript created", answers:{
        a: "1995",
        b: "1997",
        c: "1999",
        d: "2001"
    }, correctAnswer: "a"
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
next();
}
function next(){

}
function select(){

}