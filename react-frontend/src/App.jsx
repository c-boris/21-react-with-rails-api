import axios from "axios";
import Articles from"./components/articles/";
import { useEffect, useState } from "react";
import './App.css'

const API_URL = "http://localhost:3000/api/v1/articles";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setArticles(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Articles articles={articles} />

    </div>
  );
}

export default App
