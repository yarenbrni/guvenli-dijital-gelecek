// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Diğer dosyalar (quiz.js, scenarios.js, articles.js) bu fonksiyonları içeriyor
    buildQuiz();
    displayArticles();
    displayScenarios();

    // Quiz butonu için olay dinleyicisi
    document.getElementById('submit-btn').addEventListener('click', showQuizResults);

    // Senaryo butonları için olay dinleyicisi
    document.getElementById('scenario-container').addEventListener('click', (event) => {
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
