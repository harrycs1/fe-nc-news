import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CommentsList } from "./components/CommentsList";
import { Article } from './components/Article';
import { ArticlesPage } from './pages/ArticlesPage';
import { HomePage } from "./pages/HomePage";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles/:article_id/comments" element={<CommentsList/>}></Route>
        <Route path="/articles/:article_id" element={<Article/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/articles" element={<ArticlesPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
