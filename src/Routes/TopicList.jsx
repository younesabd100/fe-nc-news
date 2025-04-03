import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { TopicCards } from "../components/TopicCards";
import { Loading } from "./Loading";

export function TopicList() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then((topics) => {
        setTopics(topics);
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
        {topics.map((topic, index) => {
          return <TopicCards topic={topic} key={index} />;
        })}
      </ul>
    </>
  );
}
