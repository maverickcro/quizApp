const quizData = [
    {
        question: "What is my name?",
        a: "Marko",
        b: "Darko",
        c: "Ranko",
        d: "Žarko",
        correct: "a",
    },
    {
        question: "How old am I?",
        a: "22",
        b: "24",
        c: "26",
        d: "28",
        correct: "c",
    },
    {
        question: "Where do I live?",
        a: "Bosnia",
        b: "Croatia",
        c: "Poland",
        d: "Germany",
        correct: "d",
    },
    {
        question: "What is my favourite hobby?",
        a: "Guitar",
        b: "Youtube Music",
        c: "Gaming",
        d: "Sports",
        correct: "c",
    },
    
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const button = document.getElementById('button')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselect()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselect() {

    answerEls.forEach(answerEl => answerEl.checked = false)

}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
button.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        
        if(currentQuiz < quizData.length) {
            loadQuiz() 
        } else if(score == quizData.length){
            quiz.innerHTML = `
        <p style="margin-left: 20px;">You know everything! PS: MAJKCRO je gej 😍🎉</p>
        <p style="margin-left: 20px;">Wanna try again?</p>
        <button id="button" onClick="window.location.reload();">Try again.</button>
            `
        } else {
            quiz.innerHTML = `
            <p style="margin-left: 20px;">You managed to score ${score} out of ${quizData.length}</p>
            <p style="margin-left: 20px;">Wanna try again?</p>
            <button id="button" onClick="window.location.reload();">Try again.</button>
            `
        }
    }
   
})
