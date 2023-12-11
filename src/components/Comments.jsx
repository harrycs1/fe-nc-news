import { useParams } from "react-router-dom"

export const Comments = () => {
    const { article_id } = useParams();

    return (
        <h1>Comments</h1>
    )
}