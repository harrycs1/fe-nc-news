import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CommentsList } from "./components/CommentsList";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles/:article_id/comments" element={<CommentsList/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
