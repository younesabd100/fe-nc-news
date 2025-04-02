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

export function getCommentsByArticleId(article_id) {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function patchVotesByArticleId(article_id) {
  return api.patch(`/articles/${article_id}`, { inc_votes: 1 });
}
export function postCommentsByArticleId(article_id, newComment) {
  return api.post(`/articles/${article_id}/comments`, newComment);
}
