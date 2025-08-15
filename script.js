const questions = [
    {
        question: "Şifre oluştururken hangisini yapman daha güvenlidir?",
        options: ["Sadece harf kullanmak", "Doğum tarihi ve ismini kullanmak", "Büyük harf, küçük harf, rakam ve özel karakter kullanmak", "Kısa ve hatırlaması kolay bir şifre kullanmak"],
        answer: "Büyük harf, küçük harf, rakam ve özel karakter kullanmak"
    },
    {
        question: "Bir çevrimiçi dolandırıcılık e-postasını nasıl tanırsın?",
        options: ["Dil bilgisi hataları ve acil bir para talebi içermesi", "Resmi bir adresten gelmesi", "Tanıdık bir kurumun logosunu kullanması", "Arkadaşından gelmesi"],
        answer: "Dil bilgisi hataları ve acil bir para talebi içermesi"
    },
    {
        question: "Bir sosyal medya hesabının gizlilik ayarlarını nasıl yapmalısın?",
        options: ["Tüm paylaşımlarımı herkese açık yaparım", "Sadece güvendiğim kişilerin görmesine izin veririm", "Varsayılan ayarları değiştirmem", "Profilimi herkese kapatırım"],
        answer: "Sadece güvendiğim kişilerin görmesine izin veririm"
    },
    {
        question: "Siber zorbalığa maruz kalan bir arkadaşına nasıl destek olursun?",
        options: ["Onu yalnız bırakırsın", "Zorbalık yapanı sen de rahatsız edersin", "Sorunu görmezden gelirsin", "Onu dinler ve güvendiği bir yetişkine haber vermesini sağlarsın"],
        answer: "Onu dinler ve güvendiği bir yetişkine haber vermesini sağlarsın"
    },
    {
        question: "Çevrimiçi bir platforma kaydolurken, kişisel bilgilerini (telefon numarası, adres vb.) ne zaman paylaşmalısın?",
        options: ["Her zaman, sorun yok", "Sadece zorunluysa ve güvenli bir platformsa", "Asla, kimseye vermemelisin", "Sadece arkadaşlarına"],
        answer: "Sadece zorunluysa ve güvenli bir platformsa"
    }
];

const quizQuestionsContainer = document.getElementById('quiz-questions');
const submitButton = document.getElementById('submit-btn');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    let output = '';
    questions.forEach((q, index) => {
        const optionsHtml = q.options.map(option => `<label><input type="radio" name="question${index}" value="${option}">${option}</label>`).join('');
        output += `<div class="question-card">
            <h3>${index + 1}. ${q.question}</h3>
            <div class="options">${optionsHtml}</div>
        </div>`;
    });
    quizQuestionsContainer.innerHTML = output;
}

function showResults() {
    const answerContainers = quizQuestionsContainer.querySelectorAll('.options');
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = quizQuestionsContainer.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            if (userAnswer === q.answer) {
                score++;
            }
        }
    });

    resultsContainer.innerHTML = `<h3>Quiz Tamamlandı!</h3><p>${questions.length} sorudan ${score} tanesini doğru bildin.</p>`;
    resultsContainer.classList.remove('hidden');
    submitButton.disabled = true; // Quiz bittikten sonra butonu devre dışı bırak
}

buildQuiz();
submitButton.addEventListener('click', showResults);
