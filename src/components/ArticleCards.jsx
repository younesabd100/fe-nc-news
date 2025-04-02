import { Link } from "react-router-dom";
import { VoteHandler } from "./VoteHandler";
import { PostComments } from "./PostComments";
import { useState } from "react";
import { CommentList } from "./CommentList";

export default function ArticleCards({ article }) {
  const [showComments, setShowComments] = useState(false);
  const [commentCount, setCommentCount] = useState(article.comment_count);
  const [showAdder, setShowAdder] = useState(false);

  function updateCommentCount() {
    setCommentCount((prevCount) => prevCount + 1);
  }
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
          <VoteHandler article={article} />
          <button className="comment-btn" onClick={() => setShowComments(true)}>
            💬 {commentCount} Comments
          </button>
          <button className="comment-btn" onClick={() => setShowAdder(true)}>
            💬 Add Comments
          </button>
          {showComments && <CommentList article_id={article.article_id} />}
          {showAdder && (
            <PostComments
              article={article}
              updateCommentCount={updateCommentCount}
              onSuccess={() => setShowAdder(false)}
            />
          )}
        </div>
      </section>
    </>
  );
}
