import { Link } from "react-router-dom"

export const ErrorPage = ({ error }) => {
    return (
        <div className="error-page">
            <p>{error.status}</p>
            <h2>Nothing to see here</h2>
            <p>{error.message}</p>
            <Link to='/'>
                <button>Go Home</button>
            </Link>
        </div>
    )
}