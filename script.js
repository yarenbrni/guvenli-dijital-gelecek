const quizQuestions = [
    {
        question: "15-18 yaş grubunda birinin en çok kullandığı sosyal medya platformu hangisi olabilir?",
        options: ["Facebook", "Instagram", "LinkedIn", "MySpace"],
        answer: "Instagram"
    },
    {
        question: "Bir çevrimiçi dolandırıcılık e-postasını nasıl tanırsın?",
        options: ["Dil bilgisi hataları ve acil bir talep içermesi", "Resmi bir adresten gelmesi", "Doğru logoları kullanması", "Tanıdık birinden gelmesi"],
        answer: "Dil bilgisi hataları ve acil bir talep içermesi"
    },
    {
        question: "Siber zorbalığa maruz kalan bir arkadaşına nasıl destek olursun?",
        options: ["Onu yalnız bırakırsın", "Zorbalık yapanı sen de rahatsız edersin", "Sorunu görmezden gelirsin", "Onu dinler, güvendiği bir yetişkine haber vermesini sağlarsın"],
        answer: "Onu dinler, güvendiği bir yetişkine haber vermesini sağlarsın"
    }
];

const quizContainer = document.getElementById('quiz-section');
const submitButton = document.getElementById('submit-btn');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    let output = '';
    quizQuestions.forEach((q, index) => {
        output += `<div class="question-card">
            <h3>${index + 1}. ${q.question}</h3>
            <div class="options">`;
        q.options.forEach(option => {
            output += `<label>
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            </label>`;
        });
        output += `</div></div>`;
    });
    quizContainer.innerHTML = output;
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');
    let score = 0;

    quizQuestions.forEach((q, index) => {
        const selectedOption = quizContainer.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            if (userAnswer === q.answer) {
                score++;
            }
        }
    });

    resultsContainer.innerHTML = `<h3>Quiz Tamamlandı!</h3><p>${quizQuestions.length} sorudan ${score} tanesini doğru bildin.</p>`;
    resultsContainer.classList.remove('hidden');
}

buildQuiz();
submitButton.addEventListener('click', showResults);
