// quiz.js

const questions = [
    {
        category: "Siber Güvenlik",
        question: "Bilinmeyen bir numaradan gelen bağlantıya tıklamak güvenli midir?",
        options: ["Evet, çünkü güvenli olduğu söyleniyor", "Hayır, kimin gönderdiğini bilmeden tıklamak risklidir", "Sadece bir kere tıklayıp hemen kapatırsam sorun olmaz", "Telefonumun virüs koruması olduğu için güvenlidir"],
        answer: "Hayır, kimin gönderdiğini bilmeden tıklamak risklidir"
    },
    {
        category: "Dijital İtibar Yönetimi",
        question: "Sosyal medyada bir fotoğrafını silmek, o fotoğrafın internetten tamamen silindiği anlamına gelir mi?",
        options: ["Evet, bir daha kimse göremez", "Hayır, başkaları tarafından kaydedilmiş veya paylaşılmış olabilir", "Sadece kendi profilimden silinir, başka platformlarda kalabilir", "Bu konuda emin değilim"],
        answer: "Hayır, başkaları tarafından kaydedilmiş veya paylaşılmış olabilir"
    },
    {
        category: "Sosyal Medya Etiği",
        question: "Arkadaşının özel konuşmasını izinsiz olarak ekran görüntüsü alıp başkalarıyla paylaşmak ne anlama gelir?",
        options: ["Normal bir davranış", "Gizliliği ihlal etmek ve etik olmayan bir davranış", "Arkadaşlık gereği yapılabilecek bir şey", "Yasal bir suç değildir"],
        answer: "Gizliliği ihlal etmek ve etik olmayan bir davranış"
    },
    {
        category: "Duygusal Sağlık",
        question: "Çevrimiçi bir yorum seni üzdüğünde ilk olarak ne yapmalısın?",
        options: ["Öfkeyle karşılık vermek", "Yorumu yapan kişiyi engellemek ve durumu güvendiğin birine anlatmak", "Yorumu dikkate almamak ve unutmaya çalışmak", "Yorumu yapanın kim olduğunu bulmaya çalışmak"],
        answer: "Yorumu yapan kişiyi engellemek ve durumu güvendiğin birine anlatmak"
    }
];

function buildQuiz() {
    const quizQuestionsContainer = document.getElementById('quiz-questions');
    let output = '';
    questions.forEach((q, index) => {
        const optionsHtml = q.options.map(option => `<label><input type="radio" name="question${index}" value="${option}">${option}</label>`).join('');
        output += `<div class="question-card">
            <h3>${index + 1}. ${q.question}</h3>
            <p class="category">${q.category}</p>
            <div class="options">${optionsHtml}</div>
        </div>`;
    });
    quizQuestionsContainer.innerHTML = output;
}

function showQuizResults() {
    const quizQuestionsContainer = document.getElementById('quiz-questions');
    const resultsContainer = document.getElementById('results');
    const answerContainers = quizQuestionsContainer.querySelectorAll('.options');
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = quizQuestionsContainer.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    resultsContainer.innerHTML = `<h3>Quiz Tamamlandı!</h3><p>${questions.length} sorudan ${score} tanesini doğru bildin.</p>`;
    resultsContainer.classList.remove('hidden');
    document.getElementById('submit-btn').disabled = true;
}
