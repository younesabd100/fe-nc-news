import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCards from "./ArticleCards";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);

      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p> Loading ...</p>
      </div>
    );
  }

  return (
    <>
      <ul className="items-list">
        {articles.map((article) => {
          return <ArticleCards article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
}
