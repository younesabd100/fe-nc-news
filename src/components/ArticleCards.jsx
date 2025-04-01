import { Link } from "react-router-dom";

export default function ArticleCards({ article }) {
  return (
    <>
      <section className="article-card">
        <Link to={`/articles/${article.article_id}`}>
          <h2 className="article-title">{article.title}</h2>
          <p className="article-meta">
            By <span className="article-author">{article.author}</span>
            <span className="article-date">{article.created_at}</span>
          </p>
          <img src={article.article_img_url} />
        </Link>
        <div className="article-footer">
          <button className="like-btn">👍 {article.votes}</button>
          <Link to={`/articles/${article.article_id}/comments`}>
            <button className="comment-btn">
              💬 {article.comment_count} Comments
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
