import { useParams } from "react-router-dom"
import { getCommentsByArticleId, postArticleComment } from "../../api";
import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { PostComment } from "./PostComment"
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
        <section>
            <h2 className="text-xl font-bold mt-3 mb-2">Comments</h2>
            <PostComment key="postComment" comments={comments} setComments={setComments} article_id={article_id}/>
            <ul className="list-none mt-4">
                {comments.map((comment) => {
                    return (
                        <li key={`comment_id:${comment.comment_id}`} className="className={`${styles.paddingX} ${styles.paddingY} mb-5 pb-5 border-b-[1px] border-[#404040]`}">
                            <CommentCard comment={comment} setComments={setComments}/>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}