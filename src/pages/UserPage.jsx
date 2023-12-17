import { useEffect, useState, useContext } from "react";
import { getUserByUsername } from "../../api";
import { useParams } from "react-router-dom";
import { ErrorPage } from "./ErrorPage"
import Loading from "../components/Loading"
import { UserCard } from "../components/UserCard";
import { UserContext } from "../contexts/User";

export const UserPage = () => {
    const { username } = useParams();
    const [userProfile, setUserProfile] = useState({});
    const [apiError, setApiError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUser } = useContext(UserContext)

    useEffect(() => { 
        getUserByUsername(username)
        .then(({ data }) => {
            setUserProfile(data.user)
        })
        .catch((err) => {
            setApiError(err)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    function handleChangeUser() {
        setUser(userProfile)
        console.log(user)
    }

    if (apiError) return <ErrorPage error={apiError}/>;
    if (isLoading) return <Loading />;

    return (
        <main>
            <UserCard user={userProfile}/>
            <button onClick={handleChangeUser} className="bg-orange-700 rounded-lg px-4 py-1 hover:bg-orange-900 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 mt-2">Sign In</button>
        </main>
    )
}