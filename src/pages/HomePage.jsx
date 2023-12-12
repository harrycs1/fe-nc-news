import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to="/articles">
                <p>Articles</p>
            </Link>
        </>
    )
}