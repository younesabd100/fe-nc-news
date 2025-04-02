import { Link, useParams } from "react-router-dom";
import { useApiRequest } from "./useApiRequest";
import { getArticlesByArticleId } from "../api";
import { Loading } from "../Routes/Loading";
import { CommentList } from "./CommentList";
import { use, useState } from "react";
import { VoteHandler } from "./VoteHandler";
import { PostComments } from "./PostComments";

export default function SingleArticle() {
  const [showComments, setShowComments] = useState(false);
  const [showAdder, setShowAdder] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const { article_id } = useParams();

  const {
    data: article,
    isLoading,
    isError,
  } = useApiRequest(getArticlesByArticleId, article_id);

  useState(() => {
    if (article) {
      setCommentCount(article.comment_count);
    }
  }, [article]);

  function updateCommentCount() {
    setCommentCount((prevCount) => prevCount + 1);
  }

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
          <VoteHandler article={article} />
          <button className="comment-btn" onClick={() => setShowAdder(true)}>
            💬 Add Comment
          </button>
          <button
            className="comment-btn"
            onClickCapture={() => setShowComments(true)}
          >
            💬 {commentCount} Comments
          </button>

          {showComments && <CommentList article_id={article_id} />}
          {showAdder && (
            <PostComments
              article={article}
              onSuccess={() => setShowAdder(false)}
              updateCommentCount={updateCommentCount}
            />
          )}
        </div>
      </section>
    </>
  );
}
