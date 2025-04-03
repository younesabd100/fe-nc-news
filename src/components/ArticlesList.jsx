import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCards from "./ArticleCards";
import { Loading } from "../Routes/Loading";
import { useSearchParams } from "react-router-dom";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const filterByQuery = searchParams.get("topic");

  useEffect(() => {
    setIsLoading(true);
    getArticles(filterByQuery)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [filterByQuery]);

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
