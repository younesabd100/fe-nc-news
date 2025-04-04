import "./App.css";
import ArticleList from "./components/ArticlesList";
import Header from "./components/Header";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
import { CommentList } from "./components/CommentList";
import { TopicList } from "./Routes/TopicList";
import { ErrorComponent } from "./components/ErrorComponents";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<ErrorComponent />} />
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route
            path="/articles/:article_id/comments"
            element={<CommentList />}
          />
          <Route path="/Topics" element={<TopicList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
