import { Link } from 'react-router-dom'
import add from '../assets/add.svg'
import styles from '../style'
import linkedIn from '../assets/linkedin.svg'
import profilePic from '../assets/profile-picture.svg'
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export const Footer = () => {
    const {user} = useContext(UserContext)
    return (
        <footer className={`${styles.flexCenter} py-1 sticky bottom-0 flex-col bg-[#181818] p-0 m-0 pb-2 pt-2 h-20 border-t-[#3f3e45] shadow-[0_0_1000px_50px_rgba(64,64,64,1)] rounded-t-lg`}>
            <div className={`${styles.flexCenter} mb-8 w-full h-full z-10 top-[0px] absolute lg:hidden`}>
                <Link to='/post' className={`flex justify-center items-center h-[50px] w-[50px] bg-secondary rounded-lg hover:scale-110`}>
                    <img src={add}></img>
                </Link>
            </div>
            <div className='h-10 w-10 self-end mr-10 bg-secondary rounded-lg overflow-hidden hover:scale-110 cursor-pointer z-10 lg:hidden'>
                <Link to="/users">
                    <img src={user.avatar_url || profilePic}></img>
                </Link>
            </div>

            <div className="w-full mx-auto max-w-screen-xl p-4 lg:flex items-center justify-between hidden z-10">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">NC News™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https:www.harrydaniels.com" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}