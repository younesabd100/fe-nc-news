import { Link, useParams } from "react-router-dom";
import { useApiRequest } from "./useApiRequest";
import { getArticlesByArticleId } from "../api";
import { Loading } from "../Routes/Loading";
import { CommentList } from "./CommentList";
import { useState } from "react";
import { VoteHandler } from "./VoteHandler";

export default function SingleArticle() {
  const [showComments, setShowComments] = useState(false);
  const { article_id } = useParams();

  const {
    data: article,
    isLoading,
    isError,
  } = useApiRequest(getArticlesByArticleId, article_id);

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
          <button className="comment-btn" onClick={() => setShowComments(true)}>
            💬 {article.comment_count} Comments
          </button>
          {showComments && <CommentList />}
        </div>
      </section>
    </>
  );
}
