import { TopicsList } from "./TopicsList"

export const Header = ({ topics}) => {
    return (
        <header>
            <h1>NC News</h1>
            <TopicsList/>
        </header>
    )
}