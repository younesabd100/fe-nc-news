export default function ArticleCards({ article }) {
  return (
    <>
      <section className="article-card">
        <h2 className="article-title">
          <a href="/article/">{article.title} </a>
        </h2>
        <p className="article-meta">
          By <span className="article-author">{article.author}</span>
          <span className="article-date">{article.created_at}</span>
        </p>
        <img src={article.article_img_url} />
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
