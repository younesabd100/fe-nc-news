import { useState } from "react";
import { postCommentsByArticleId } from "../api";

export function PostComments({ article, updateCommentCount }) {
  const initialValues = {
    username: "",
    body: "",
  };
  const [newComments, setNewComments] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewComments((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();

    postCommentsByArticleId(article.article_id, newComments)
      .then(() => {
        setNewComments(initialValues);
        updateCommentCount();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to post comment. Please try again.");
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="comment-box">
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={newComments.username}
        />
        <textarea
          placeholder="Add a comment..."
          name="body"
          onChange={handleChange}
          value={newComments.body}
        ></textarea>

        <div className="actions">
          <button onClick={handleSubmit}>Comment</button>
        </div>
      </form>
    </>
  );
}
