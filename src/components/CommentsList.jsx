import { useParams } from "react-router-dom"
import { getCommentsByArticleId } from "../../api";
import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import Loading from "./Loading";

export const CommentsList = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCommentsByArticleId(article_id)
        .then(({ data }) => {
            const comments = data.comments
            setComments(comments)
        })
        .catch((err) => {
            setIsError(true);
          })
        .finally(() => {
            setIsLoading(false);
        });
    }, [])

    if (isError) return <p>Something went wrong</p>;
    if (isLoading) return <Loading />;  

    return (
        <>
        <h1>Comments</h1>
        <ul className="comment-list">
            {comments.map((comment) => {
                return (
                    <li key={comment.comment_id} className="comment-card">
                        <CommentCard comment={comment}/>
                    </li>
                )
            })}
        </ul>
        </>
    )
}