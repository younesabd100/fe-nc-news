import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-be-quja.onrender.com/api",
});

export function getArticles(sort_by, order) {
  if (topic) {
    return api.get(`/articles?topic=${topic}`).then(({ data }) => {
      return data.article;
    });
  }
  if (sort_by) {
    return api.get(`/articles?sort_by=${sort_by}`).then(({ data }) => {
      return data.article;
    });
  }
  if (order && sort_by) {
    return api
      .get(`/articles?sort_by=${sort_by}&order=${order}`)
      .then(({ data }) => {
        return data.article;
      });
  } else {
    return api.get(`/articles`).then(({ data }) => {
      return data.article;
    });
  }
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

export function deleteCommentByCommentId(comment_id) {
  return api.delete(`/comments/${comment_id}`);
}

export function getTopics() {
  return api.get(`/topics`).then(({ data }) => {
    return data.article;
  });
}
