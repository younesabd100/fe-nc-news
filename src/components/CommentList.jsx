import { getCommentsByArticleId } from "../api";
import { CommentCards } from "./CommentsCards";
import { useApiRequest } from "./useApiRequest";
import { Loading } from "../Routes/Loading";

export function CommentList({ article_id }) {
  const {
    data: comments,
    isLoading,
    isError,
  } = useApiRequest(getCommentsByArticleId, article_id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ul className="items-list">
        {comments.map((comment) => {
          return <CommentCards comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </>
  );
}
