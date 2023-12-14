import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
  )
}

export default App
