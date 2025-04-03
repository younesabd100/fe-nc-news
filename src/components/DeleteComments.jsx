import { useState } from "react";
import { deleteCommentByCommentId } from "../api";

export function DeleteComments({
  comment_id,
  setIsDeleted,
  decreaseCommentCount,
}) {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleDelete() {
    setLoading(true);
    setError(null);
    deleteCommentByCommentId(comment_id)
      .then(() => {
        setIsDeleted(true);
        decreaseCommentCount();
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
        setShowConfirm(false);
      });
  }
  if (isLoading) {
    return <span>Deleting...</span>;
  }

  return (
    <>
      <div>
        {showConfirm ? (
          <div>
            <p>Delete this comment?</p>
            <button onClick={handleDelete} disabled={isLoading}>
              Confirm
            </button>
            <button onClick={() => setShowConfirm(false)}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => setShowConfirm(true)}>🗑️</button>
        )}
      </div>
    </>
  );
}
