import { DeleteComments } from "./DeleteComments";
import { useState } from "react";

export function CommentCards({ comment, decreaseCommentCount }) {
  const [isDeleted, setIsDeleted] = useState(false);

  if (isDeleted) {
    return null;
  }
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
            <DeleteComments
              decreaseCommentCount={decreaseCommentCount}
              comment_id={comment.comment_id}
              setIsDeleted={setIsDeleted}
            />
          </div>
        </div>
      </div>
    </>
  );
}
