import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
  )
}

export default App
