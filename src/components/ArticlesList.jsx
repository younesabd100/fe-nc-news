import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCards from "./ArticleCards";
import { Loading } from "../Routes/Loading";
import { useSearchParams } from "react-router-dom";
import { SortBy } from "./SortBy";
import { OrderBY } from "./OrderBy";
import { ErrorComponent } from "./ErrorComponents";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  const setSortOrder = (direction) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", direction);
    setSearchParams(newParams);
  };

  const setSortBy = (sort_by) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sort_by);
    setSearchParams(newParams);
  };

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sort_by, order)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic, sort_by, order]);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && articles.length === 0) {
    return <p>No articles found.</p>;
  }

  return (
    <>
      <SortBy setSortBy={setSortBy} />
      <OrderBY setSortOrder={setSortOrder} />
      <ul className="items-list">
        {articles.map((article) => {
          return <ArticleCards article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
}
