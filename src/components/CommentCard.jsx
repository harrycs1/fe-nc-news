import { deleteComment } from "../../api"
import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"

export const CommentCard = ({ comment, setComments }) => {
    const {user} = useContext(UserContext);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState('');

    function handleDeleteComment() {

        setIsDeleting(true)

        deleteComment(comment.comment_id)
        .then(() => {
            setComments((currentComments) => {
                return currentComments.filter((commentObj) => {
                    return commentObj.comment_id !== comment.comment_id
                })
            })
        })
        .catch((error) => {
            if (error.response) {
                setDeleteError(error.response.data.msg)
            } else if (error.request) {
                setDeleteError('No internet connection')
            }
        })
        .finally(() => {
            setTimeout(() => {
                setDeleteError('')
                setIsDeleting(false)
            }, 3000)
        })
    }

    return (
        <>
            {isDeleting ? (deleteError ? <p>{`Error: ${deleteError}. Please try again.`}</p> : <p>Deleting...</p>) : <p>{comment.body}</p>}
            {comment.author === user ? <button onClick={handleDeleteComment} disabled={isDeleting}>Delete</button> : null}
        </>
    )
}