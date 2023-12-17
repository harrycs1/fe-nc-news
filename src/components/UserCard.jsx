import { Link } from "react-router-dom"

export const UserCard = ({ user }) => {
    return (
        <Link to={`/users/${user.username}`} className="flex justify-between">
            <div>
                <h2 className="mb-2 mt-2 text-2xl font-bold tracking-tight">{user.username}</h2>
                <p className="text-sm font-normal text-gray-400 mr-1">{user.name}</p>
            </div>
            <div className="rounded-lg h-full w-[100px]">
                <img src={user.avatar_url}></img>
            </div>
        </Link>
    )
}