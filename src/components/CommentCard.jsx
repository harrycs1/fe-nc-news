import { deleteComment } from "../../api"
import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import deleteIcon from '../assets/delete.svg'
import deleteIconHover from '../assets/delete-hover.svg'


export const CommentCard = ({ comment, setComments }) => {
    const {user} = useContext(UserContext);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState('');
    const [toggleDelete, setToggleDelete] = useState(false)

    function handleDeleteComment() {

        setIsDeleting(true)
        setToggleDelete((prev) => !prev)

        deleteComment(comment.comment_id)
        .then(() => {
            setComments((currentComments) => {
                return currentComments.filter((commentObj) => {
                    return commentObj.comment_id !== comment.comment_id
                })
            })
        })
        .catch((error) => {
            setDeleteError(error)
        })
        .finally(() => {
            setTimeout(() => {
                setDeleteError('')
                setIsDeleting(false)
            }, 3000)
        })
    }

    return (
        <article>
            <div className="flex justify-between h-5">
                <p className="text-sm font-normal text-gray-400 pr-4">{comment.author}</p>
                <div className="flex justify-between w-full">
                    <p className="text-sm font-normal text-gray-400">{(comment.created_at).slice(0,10)}</p>
                    {comment.author === user ? 
                    <button className="h-full" onClick={handleDeleteComment} disabled={isDeleting}>
                        <img className="h-full" src={toggleDelete ? deleteIconHover : deleteIcon}></img>
                    </button> : null}
                </div>
            </div>
            {isDeleting ? (deleteError ? <p className="pt-2">{`${deleteError.message}. Please try again.`}</p> : <p className="pt-2">Deleting...</p>) : <p className="pt-2">{comment.body}</p>}
        </article>
    )
}