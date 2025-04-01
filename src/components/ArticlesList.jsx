import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCards from "./ArticleCards";
import { Loading } from "../Routes/Loading";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
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
