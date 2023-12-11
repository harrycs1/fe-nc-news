import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Comments } from "./components/Comments";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles/:article_id/comments" element={<Comments/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
