import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-be-quja.onrender.com/api",
});

export function getArticles() {
  return api.get("/articles").then(({ data }) => {
    return data.article;
  });
}

export function getArticlesByArticleId(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}
