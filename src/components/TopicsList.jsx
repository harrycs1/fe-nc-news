import { Link } from "react-router-dom";
import { getTopics } from "../../api"
import { useState, useEffect } from "react"
import { capitaliseFirstLetter } from '../../utils/capitaliseFirstLetter'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'

export const TopicsList = () => {
    const [topics, setTopics] = useState([
        {slug: 'coding', description: 'Code is love, code is life'},
        {slug: 'football', description: 'FOOTIE!'},
        {slug: 'cooking', description: 'Hey good looking, what you got cooking?'}
    ])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        getTopics()
        .then(({ data }) => {
            const topics = data.topics
            setTopics(topics)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <Link to="/">
                <h1 className="text-2xl font-bold">NC News</h1>
            </Link>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                <Link to='/articles'>
                    <li className={`font-poppins font-normal cursor pointer text-[16px] text-white mr-10`}>All</li>
                </Link>
                {topics.map((topic) => {
                    return (
                        <Link to={`articles?topic=${topic.slug}`} key={topic.slug} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}>
                            <li>{capitaliseFirstLetter(topic.slug)}</li>
                        </Link>
                    )
                })}
                <Link to="/post" className="hidden lg:flex">
                    <li className=" border px-2 py-1 rounded-xl">Add Article</li>
                </Link>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img 
                    src={toggle ? close : menu} 
                    alt="menu" 
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-r to-primary from-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex-col justify-end items-center flex-1">
                        <Link to='/articles'>
                            <li className={`font-poppins font-normal cursor pointer text-[16px] text-white mr-10`}>All</li>
                        </Link>
                        {topics.map((topic) => {
                            return (
                                <Link to={`articles?topic=${topic.slug}`} key={topic.slug} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}>
                                    <li>{capitaliseFirstLetter(topic.slug)}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}