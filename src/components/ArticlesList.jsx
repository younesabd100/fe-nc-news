import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCards from "./ArticleCards";
import { Loading } from "../Routes/Loading";
import { useSearchParams } from "react-router-dom";
import { SortBy } from "./SortBy";
import { OrderBY } from "./OrderBy";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const filterByQuery = searchParams.get("topic");
  const sortByquery = searchParams.get("sort_by");
  const orderBy = searchParams.get("order");

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
    getArticles(filterByQuery, sortByquery, orderBy)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [filterByQuery, sortByquery, orderBy]);

  if (isLoading) {
    return <Loading />;
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
