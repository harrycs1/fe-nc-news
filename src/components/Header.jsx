import { TopicsList } from "./TopicsList"
import { Link } from "react-router-dom"

export const Header = ({ topics}) => {
    return (
        <header>
            <Link>
                <h1>NC News</h1>
            </Link>
            <TopicsList/>
        </header>
    )
}