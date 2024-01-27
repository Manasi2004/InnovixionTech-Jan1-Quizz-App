const quizForm = document.getElementById('quizForm');
const questionContainer = document.getElementById('questionContainer');
const resultContainer = document.getElementById('resultContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

const questions = [
    
    {
        question: 'What is the capital of Japan?',
        options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
        correctAnswer: 'Tokyo'
    },
    {
        question: 'Which programming language is known for building web pages?',
        options: ['Java', 'Python', 'HTML', 'C++'],
        correctAnswer: 'HTML'
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Pacific Ocean'],
        correctAnswer: 'Pacific Ocean'
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
        correctAnswer: 'William Shakespeare'
    },
    {
        question: 'What is the capital of Australia?',
        options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'],
        correctAnswer: 'Canberra'
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the currency of Brazil?',
        options: ['Peso', 'Euro', 'Real', 'Dollar'],
        correctAnswer: 'Real'
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
        correctAnswer: 'Leonardo da Vinci'
    },
    {
        question: 'What is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
        correctAnswer: 'Blue Whale'
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'Japan', 'South Korea', 'Vietnam'],
        correctAnswer: 'Japan'
    },
];

let userAnswers = new Array(questions.length).fill('');

let currentQuestionIndex = 0;

function generateQuestionHTML(question) {
    const optionsHTML = question.options.map(option => `<label><input type="radio" name="question" value="${option}" ${userAnswers[currentQuestionIndex] === option ? 'checked' : ''}>${option}</label>`).join('');
    return `<div class="question">${question.question}</div><div class="options">${optionsHTML}</div>`;
}

function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = generateQuestionHTML(currentQuestion);
}

function showResult() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] && userAnswers[i].toLowerCase() === questions[i].correctAnswer.toLowerCase()) {
            score++;
        }
    }

    const resultHTML = `<h2>Your Result</h2><p>You scored ${score} out of ${questions.length} questions correctly.</p>`;
    resultContainer.innerHTML = resultHTML;


    submitBtn.style.display = 'none';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}

function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayCurrentQuestion();
    } else {
        showResult();
    }
}

function moveToPreviousQuestion() {
    currentQuestionIndex--;
    if (currentQuestionIndex >= 0) {
        displayCurrentQuestion();
    }
}

function initializeQuiz() {
    currentQuestionIndex = 0;
    displayCurrentQuestion();
}

prevBtn.addEventListener('click', moveToPreviousQuestion);
nextBtn.addEventListener('click', moveToNextQuestion);
submitBtn.addEventListener('click', showResult);

quizForm.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    userAnswers[currentQuestionIndex] = selectedOption;
});

initializeQuiz();
