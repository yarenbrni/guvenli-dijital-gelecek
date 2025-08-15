// main.js

// Sayfa tamamen yüklendiğinde çalışacak olay dinleyicisi
document.addEventListener('DOMContentLoaded', () => {

    // Quiz fonksiyonunu başlat
    buildQuiz();

    // Makaleleri görüntüle
    displayArticles();

    // Senaryoları görüntüle
    displayScenarios();

    // Quiz sonuçlarını göstermek için buton tıklama olayını dinle
    document.getElementById('submit-btn').addEventListener('click', showQuizResults);

    // Senaryo butonlarının tıklama olayını dinle
    document.getElementById('scenario-container').addEventListener('click', (event) => {
        // Tıklanan öğenin bir buton olup olmadığını kontrol et
        if (event.target.tagName === 'BUTTON') {
            const scenarioId = event.target.dataset.scenarioId;
            const choice = event.target.dataset.choice;
            const feedbackContainer = document.getElementById(`scenario-feedback-${scenarioId}`);
            
            // Seçilen senaryonun geri bildirimini al
            const selectedScenario = scenarios[scenarioId];
            feedbackContainer.innerHTML = `<p>${selectedScenario.feedback[choice]}</p>`;
            feedbackContainer.classList.remove('hidden');

            // Seçenek butonlarını pasif hale getir
            const buttons = event.target.parentNode.querySelectorAll('button');
            buttons.forEach(btn => btn.disabled = true);
        }
    });
});
