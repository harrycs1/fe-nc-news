import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import { getUsers } from "../../api"
import { UserCard } from "../components/UserCard"

export const UsersPage = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getUsers()
        .then(({ data }) => {
            const users = data.users
            setUsers(users)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    return (
        <main>
            {isLoading ? <Loading/> : null}
            <h1 className='mb-2 text-2xl font-bold tracking-tight'>Users</h1>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.username} className={`py-6 px-6 mb-4 border-[1px] border-[#404040] rounded-lg bg-[#242424] shadow`}>
                            <UserCard user={user}/>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}