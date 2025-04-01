import { useParams } from "react-router-dom";
import { useApiRequest } from "./useApiRequest";
import { getArticlesByArticleId } from "../api";
import { Loading } from "../Routes/Loading";

export default function SingleArticle() {
  const { article_id } = useParams();

  const {
    data: article,
    isLoading,
    isError,
  } = useApiRequest(getArticlesByArticleId, article_id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="article-card">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-meta">
          By <span className="article-author">{article.author}</span>
          <span className="article-date">{article.created_at}</span>
        </p>
        <img src={article.article_img_url} />
        <p>{article.body}</p>
        <div className="article-footer">
          <button className="like-btn">👍 {article.votes}</button>
          <button className="comment-btn">
            💬 {article.comment_count} Comments
          </button>
        </div>
      </section>
    </>
  );
}
