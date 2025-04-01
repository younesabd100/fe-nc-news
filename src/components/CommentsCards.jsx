export function CommentCards({ comment }) {
  return (
    <>
      <div className="comments-section">
        <div className="comment">
          <div className="comment-header">
            <span className="username">{comment.author}</span>{" "}
            <span className="timestamp">{comment.created_at}</span>
          </div>
          <div className="comment-text">
            <p>{comment.body}</p>
          </div>
          <div className="article-footer">
            <button className="like-btn">
              {comment.votes}
              {comment.votes > 0 ? "❤️" : "💔"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
