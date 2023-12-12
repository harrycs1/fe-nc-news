import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticlesPage } from './pages/ArticlesPage';
import { HomePage } from "./pages/HomePage";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/articles" element={<ArticlesPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
