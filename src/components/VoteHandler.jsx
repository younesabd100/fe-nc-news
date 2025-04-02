import { useState } from "react";
import { patchVotesByArticleId } from "../api";

export const VoteHandler = ({ article }) => {
  const [optimicVotes, setOptimicVotes] = useState(0);

  const handlePositifClick = () => {
    patchVotesByArticleId(article.article_id).catch(() => {
      setOptimicVotes((current) => {
        return current - 1;
      });
    });
    setOptimicVotes((current) => {
      return current + 1;
    });
  };
  const handleNegatifClick = () => {
    patchVotesByArticleId(article.article_id).catch(() => {
      setOptimicVotes((current) => {
        return current + 1;
      });
    });
    setOptimicVotes((current) => {
      return current - 1;
    });
  };

  return (
    <>
      <button className="like-btn" onClick={handlePositifClick}>
        👍 {article.votes + optimicVotes}
      </button>

      <button className="like-btn" onClick={handleNegatifClick}>
        👎
      </button>
    </>
  );
};
