var xhr = new XMLHttpRequest();
var url = './news_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
var news_articles = xhr.response.news_articles;
var newsArticlesDiv = document.getElementById('news_articles');

news_articles.forEach(function(news_article) {
      var newsArticleDiv = document.createElement('div');
      newsArticleDiv.classList.add('news_article');

      var title = document.createElement('h2');
      title.textContent = news_article.title;

      var description = document.createElement('p');
      description.textContent = news_article.description;

      var contentHeader = document.createElement('h3');
      contentHeader.textContent = 'Content:';

      var contentList = document.createElement('ul');
      news_article.content.forEach(function(con) {
        var listItem = document.createElement('li');
        listItem.textContent = con;
        contentList.appendChild(listItem);
      });

      newsArticleDiv.appendChild(title);
      newsArticleDiv.appendChild(description);
      newsArticleDiv.appendChild(contentHeader);
      newsArticleDiv.appendChild(contentList);

      newsArticlesDiv.appendChild(newsArticleDiv);

      var newsArticleDiv = document.createElement('div');
      newsArticleDiv.classList.add('news_article');
      newsArticleDiv.appendChild(title);
    });
}
xhr.send();