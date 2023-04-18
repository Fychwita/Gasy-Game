const questions = [
    {
        question:" Inona ary izany? Dobokelin'Andriamanitra tsy azo hilomanosana",
        answers: [
            { text: "maso",correct: true},
            { text: "Orona",correct: false},
            { text: "Vava",correct: false},
            { text: "Sofina",correct: false},
        ]
    },
    {
        question:" Inona ary izany? Faladia ambony ranjo",
        answers: [
            { text: "ravin-tsaonjo",correct: true},
            { text: "voninkazo",correct: false},
            { text: "paoma",correct: false},
            { text: "anana",correct: false},
        ]
    },
    {
        question:" Inona ary izany? Ilay mahia miankin-drindrina",
        answers: [
            { text: "Harona",correct: true},
            { text: "Fanjaitra",correct: false},
            { text: "Kifafa",correct: false},
            { text: "Antsy",correct: false},
        ]
    },
    {
        question:"Inona ary izany? Solabe minaonaona ",
        answers: [
            { text: "Aponga",correct: true},
            { text: "Fanoto",correct: false},
            { text: "Dobo",correct: false},
            { text: "Sahona",correct: false},
        ]
    },
    {
        question:"Inona ary izany? Akana vao mitombo ",
        answers: [
            { text: "Rano",correct: false},
            { text: "Afo",correct: true},
            { text: "Tany",correct: false},
            { text: "Rivotra",correct: false},
        ]
    },
    {  
        question:"Inona ary izany?Anaty rano tsy lena, an-tanety tsy malazo ",
    answers: [
        { text: "Aloka",correct: true},
        { text: "Dian-tongotra",correct: false},
        { text: "Vovoka",correct: false},
        { text: "Rivotra",correct: false},
    ]
 },
 {
    question:"Inona ary izany? Elo be tsy mipiaka",
        answers: [
            { text: "Masoandro",correct: false},
            { text: "Lanitra",correct: true},
            { text: "Volana",correct: false},
            { text: "Kintana",correct: false},
        ]
 },
 {
    question:"Inona ary izany?Hoano Aho hihinanako anao",
        answers: [
            { text: "Sakay",correct: true},
            { text: "Vary",correct: false},
            { text: "Sakamalao",correct: false},
            { text: "Tongolo gasy",correct: false},
        ]
 },
 {
    question:"Inona ary izany?Loharano antendrokazo",
        answers: [
            { text: "Paiso",correct: false},
            { text: "Voasary",correct: true},
            { text: "Ampalibe",correct: false},
            { text: "Voanio",correct: false},
        ]
 }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);        
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }  
        button.addEventListener("click", selectAnswer); 
    });
}
 
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton .children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();