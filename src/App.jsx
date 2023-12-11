import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Article } from './components/Article';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles/:article_id" element={<Article/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
