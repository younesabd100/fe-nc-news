import { useNavigate } from "react-router-dom";

export function TopicCards({ topic }) {
  const navigate = useNavigate();

  return (
    <>
      <section className="article-card">
        <h2 className="article-title">{topic.slug}</h2>
        <p>{topic.description}</p>
        <div className="article-footer">
          <button
            onClick={() => {
              navigate(`/?topic=${topic.slug}`);
            }}
            className="comment-btn"
          >
            See more
          </button>
        </div>
      </section>
    </>
  );
}
