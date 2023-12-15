import { TopicsList } from "./TopicsList"
import { Link } from "react-router-dom"
import styles from "../style"

export const Header = () => {
    return (
        <header className={`${styles.paddingX} sticky top-0 bg-primary border-b-[1px] border-[#242424]`}>
            <TopicsList/>
        </header>
    )
}