import { deleteComment } from "../../api"
import { useContext } from "react"
import { UserContext } from "../contexts/User"

export const CommentCard = ({ comment, setComments, setDeleteError }) => {
    const {user} = useContext(UserContext)

    function handleDeleteComment() {
        setComments((currentComments) => {
            return currentComments.filter((commentObj) => {
                return commentObj.comment_id !== comment.comment_id
            })
        })

        deleteComment(comment.comment_id)
        .catch(({response}) => {
            setDeleteError(response.data.msg)
            setTimeout(() => {
                setDeleteError('')
            }, 3000)
        })


    }

    return (
        <>
            <p>{comment.body}</p>
            {comment.author === user ? <button onClick={handleDeleteComment}>Delete</button> : null}
        </>
    )
}