import { useState } from "react";
import { postCommentsByArticleId } from "../api";
import { ErrorComponent } from "./ErrorComponents";

export function PostComments({ article, updateCommentCount }) {
  const initialValues = {
    username: "",
    body: "",
  };
  const [newComments, setNewComments] = useState(initialValues);
  const [error, setError] = useState(null);

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
        setError(error);
      });
  }
  if (error) {
    return <ErrorComponent message={error.message} />;
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
