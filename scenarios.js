// scenarios.js

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

function displayScenarios() {
    const scenariosContainer = document.getElementById('scenario-container');
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
