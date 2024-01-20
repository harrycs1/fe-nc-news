import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import styles from "./style"

function App() {
  return (
    <BrowserRouter>
      <div className={`bg-primary w-full min-h-screen text-white ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} flex flex-col justify-between min-h-screen`}>
          <Header />
          <div className={`${styles.paddingX}`}>
            <Body />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
