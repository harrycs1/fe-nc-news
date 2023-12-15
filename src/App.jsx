import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import styles from "./style"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary w-full min-h-screen text-white">
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
            <div className={`${styles.paddingX}`}>
              <Body />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
