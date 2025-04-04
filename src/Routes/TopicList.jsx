import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { TopicCards } from "../components/TopicCards";
import { Loading } from "./Loading";

export function TopicList() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ul className="items-list">
        {topics.map((topic, index) => {
          return <TopicCards topic={topic} key={index} />;
        })}
      </ul>
    </>
  );
}
