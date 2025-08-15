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

const articles = [
    {
        title: "Siber Zorbalık: Belirtileri ve Çözüm Yolları",
        content: "Siber zorbalık, internet ve diğer dijital teknolojiler aracılığıyla yapılan bir tür zorbalıktır. Kendini savunmak ve başkalarına yardım etmek için bu belirtileri öğrenmelisin.",
        link: "#"
    },
    {
        title: "Gerçek ve Sahte Hesapları Nasıl Ayırt Edersin?",
        content: "Çevrimiçi dolandırıcılık ve sahte haberler genellikle sahte profillerden gelir. Bu makalede sahte hesapları tanımanı sağlayacak ipuçlarını bulabilirsin.",
        link: "#"
    }
];

const scenarios = [
    {
        title: "Tanımadığın Biriyle Sohbet",
        story: "En sevdiğin oyunla ilgili bir forumda, tanımadığın biri sana özel mesaj gönderdi. 'Selam, oyunda çok iyisin, sana birkaç özel eşya gönderebilirim. Sadece kullanıcı adını ve şifreni bana ver.' dedi. Ne yapmalısın?",
        options: ["Şifremi hemen veririm, bedava eşyayı kaçırmam", "Mesajı görmezden gelirim", "Şifremi değil, ama kullanıcı adımı veririm", "Şifremi vermem ama sohbet etmeye devam ederim"],
        answer: "Mesajı görmezden gelirim",
        feedback: {
            "Şifremi hemen veririm, bedava eşyayı kaçırmam": "Bu, hesap bilgilerinin çalınmasına neden olabilir. Dolandırıcılar genellikle bu taktikleri kullanır.",
            "Mesajı görmezden gelirim": "Doğru karar! Tanımadığın ve şüpheli talepleri olan kişilerle iletişim kurmak en güvenli yoldur.",
            "Şifremi değil, ama kullanıcı adımı veririm": "Kullanıcı adı tek başına zararlı olmasa da, bu sohbetin devam etmesine ve daha sonra şifre gibi daha hassas bilgilerin istenmesine yol açabilir.",
            "Şifremi vermem ama sohbet etmeye devam ederim": "Dolandırıcılar genellikle güvenini kazanmaya çalışır. Şifreni paylaşmasan bile, bu kişiler seni başka yollarla kandırmaya çalışabilir."
        }
    }
];

// HTML elementlerini seç
const quizContainer = document.getElementById('quiz-questions');
const submitButton = document.getElementById('submit-btn');
const resultsContainer = document.getElementById('results');
const articlesContainer = document.getElementById('articles-container');
const scenariosContainer = document.getElementById('scenario-container');

// Fonksiyonları tanımla
function buildQuiz() {
    let output = '';
    questions.forEach((q, index) => {
        const optionsHtml = q.options.map(option => `<label><input type="radio" name="question${index}" value="${option}">${option}</label>`).join('');
        output += `<div class="question-card">
            <h3>${index + 1}. ${q.question}</h3>
            <p class="category">${q.category}</p>
            <div class="options">${optionsHtml}</div>
        </div>`;
    });
    quizContainer.innerHTML = output;
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = quizContainer.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            if (userAnswer === q.answer) {
                score++;
            }
        }
    });

    resultsContainer.innerHTML = `<h3>Quiz Tamamlandı!</h3><p>${questions.length} sorudan ${score} tanesini doğru bildin.</p>`;
    resultsContainer.classList.remove('hidden');
    submitButton.disabled = true;
}

function displayArticles() {
    let output = '';
    articles.forEach(article => {
        output += `<div class="article-card">
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <a href="${article.link}">Devamını Oku</a>
        </div>`;
    });
    articlesContainer.innerHTML = output;
}

function displayScenarios() {
    let output = '';
    scenarios.forEach((scenario, index) => {
        let optionsHtml = '';
        scenario.options.forEach(option => {
            optionsHtml += `<button data-scenario-id="${index}" data-choice="${option}">${option}</button>`;
        });
        output += `<div class="scenario-card">
            <h3>${scenario.title}</h3>
            <p>${scenario.story}</p>
            <div class="scenario-options">${optionsHtml}</div>
            <div id="scenario-feedback-${index}" class="hidden"></div>
        </div>`;
    });
    scenariosContainer.innerHTML = output;
}

// Olay dinleyicilerini tanımla
document.addEventListener('DOMContentLoaded', () => {
    buildQuiz();
    displayArticles();
    displayScenarios();

    submitButton.addEventListener('click', showResults);

    scenariosContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const scenarioId = event.target.dataset.scenarioId;
            const choice = event.target.dataset.choice;
            const feedbackContainer = document.getElementById(`scenario-feedback-${scenarioId}`);
            
            const selectedScenario = scenarios[scenarioId];
            feedbackContainer.innerHTML = `<p>${selectedScenario.feedback[choice]}</p>`;
            feedbackContainer.classList.remove('hidden');

            // Seçenek butonlarını pasif hale getir
            const buttons = document.querySelectorAll(`#scenario-feedback-${scenarioId} + .scenario-options button`);
            buttons.forEach(btn => btn.disabled = true);
        }
    });
});
