import { Link } from "react-router-dom"
import styles from "../style"
import { GetStarted } from "../components/getStarted"

export const HomePage = () => {
    return (
        <section>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">The Next<br className="sm:block"/><span className="text-gradient">Generation</span><br className="sm:block"/> of News.</h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                    <Link to="/articles">
                        <GetStarted/>
                    </Link>
                </div>
            </div>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Visit NC News for up-to-the-minute news, breaking news,  and feature stories. NC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.</p>
            <div className={`ss:hidden ${styles.flexCenter} py-10`}>
                <Link to="/articles">
                    <GetStarted/>
                </Link>
            </div>
        </section>
    )
}