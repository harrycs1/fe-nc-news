import { postArticleComment } from "../../api"
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";

export const PostComment = ({comments, setComments, article_id}) => {
    const [commentInput, setCommentInput] = useState('');
    const [isCommentError, setIsCommentError] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const {user} = useContext(UserContext)

    function handleCommentInput(e) {
        setCommentInput(e.target.value)
    }

    function handlePostComment(e) {
        setIsSubmitDisabled(true);
        e.preventDefault();

        if (!commentInput) setIsCommentError('Your comment is empty')
        else {
            const newComment = {
                username: user,
                body: commentInput
            }

            setComments(() => ([newComment, ...comments]))

            setTimeout(() => {
                postArticleComment(article_id, newComment)
                .then(() => {
                    setCommentInput('');
                })
                .catch((error) => {
                    if (error.response) {
                        setIsCommentError(error.response.data.msg);
                        setComments(() => ([...comments]))
                        setTimeout(() => {
                            setIsCommentError('');   
                        }, 3000)
                    } else if (error.request) {
                        setIsCommentError('No internet connection')
                    }
                })
                .finally(() => {
                    setIsSubmitDisabled(false)
                })
            }, 1000)
        }
    }

    return (
        <form onSubmit={handlePostComment}>
            <textarea maxLength="500" placeholder="Add a comment" onChange={handleCommentInput} value={commentInput} required></textarea>
            <button disabled={isSubmitDisabled}>Submit</button>
            {isCommentError ? <p>{`Error: ${isCommentError}. Please try again.`}</p> : null}
        </form>
    )
}