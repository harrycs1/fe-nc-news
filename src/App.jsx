import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getArticles } from '../api';
import { ArticlesPage } from './pages/ArticlesPage';
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
    .then(({ data }) => {
        const articles = data.articles
        setArticles(articles);
    })
}, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles" element={<ArticlesPage articles={articles}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
