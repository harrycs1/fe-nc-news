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

            setComments(() => ([{...newComment, author: user, comment_id: '0', created_at: new Date().toISOString()}, ...comments]))

            setTimeout(() => {
                postArticleComment(article_id, newComment)
                .then(({data}) => {
                    setCommentInput('');
                    setComments(() => ([data.comment, ...comments]))
                })
                .catch((error) => {
                    setComments(() => ([...comments]))
                    setIsCommentError(error)
                })
                .finally(() => {
                    setTimeout(() => {
                        setIsCommentError('');   
                    }, 3000)
                    setIsSubmitDisabled(false)
                })
            }, 1000)
        }
    }

    return (
        <form onSubmit={handlePostComment} className="mb-6">
            <textarea className="p-4 w-full rounded-lg border-0 focus:ring-0 focus:outline-none bg-secondary resize-none" rows="6" maxLength="500" placeholder="Add a comment" onChange={handleCommentInput} value={commentInput} required></textarea>
            <button className="bg-orange-700 rounded-lg px-4 py-1 hover:bg-orange-900 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 mt-2" disabled={isSubmitDisabled}>Submit</button>
            {isCommentError ? <p>{`${isCommentError.message}. Please try again.`}</p> : null}
        </form>
    )
}