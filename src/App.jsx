import "./App.css";
import ArticleList from "./components/ArticlesList";
import Header from "./components/Header";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SingleArticle from "./components/SiingleArticle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
