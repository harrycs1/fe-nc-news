import { postArticleComment } from "../../api"
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";

export const PostComment = ({comments, setComments, article_id}) => {
    const [commentInput, setCommentInput] = useState('');
    const [isCommentError, setIsCommentError] = useState('');
    const {user} = useContext(UserContext)

    function handleCommentInput(e) {
        setCommentInput(e.target.value)
    }

    function handlePostComment(e) {
        e.preventDefault();

        const newComment = {
            username: user,
            body: commentInput
        }

        setComments(() => ([newComment, ...comments]))

        postArticleComment(article_id, newComment)
        .catch(({ response }) => {
            setIsCommentError(response.data.msg);
            setTimeout(() => {
                setIsCommentError('');   
            }, 3000)
          })

        setCommentInput('')
    }

    return (
        <form onSubmit={handlePostComment}>
            <textarea maxLength="500" placeholder="Add a comment" onChange={handleCommentInput}></textarea>
            <button>Submit</button>
            {isCommentError ? <p>{`Error: ${isCommentError}. Please try again.`}</p> : null}
        </form>
    )
}