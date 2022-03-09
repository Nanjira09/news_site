import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [content, setContent] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = () => {
    const value = search.toLowerCase();
    setContent(value);
  };
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (!content) {
      (async () => {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );
        const { articles } = response.data;
        setArticles(articles);
      })();
    }
    (async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${content}&apiKey=${API_KEY}`
      );
      const { articles } = response.data;
      setArticles(articles);
    })();
  }, [content, API_KEY]);

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar
        search={search}
        handleSearch={handleSearch}
        handleForm={handleSubmit}
      />
      {articles.length === 0 ? (
        <p className="text-center font-bold">Loading articles...</p>
      ) : (
        <>
          <Banner article={articles[0]} />
          <Main articles={articles} />
        </>
      )}
    </div>
  );
}

export default App;
