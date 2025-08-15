// articles.js

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

function displayArticles() {
    const articlesContainer = document.getElementById('articles-container');
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
