import { Link } from "react-router-dom";
import { getTopics } from "../../api"
import { useState, useEffect } from "react"
import { capitaliseFirstLetter } from '../../utils/capitaliseFirstLetter'

export const TopicsList = () => {
    const [topics, setTopics] = useState([])

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
        <>
            <ul className="topic-list">
                <Link to='/articles'>
                    <li className="topic-card">All</li>
                </Link>
                {topics.map((topic) => {
                    return (
                        <Link to={`articles?topic=${topic.slug}`} key={topic.slug}>
                            <li className="topic-card">{capitaliseFirstLetter(topic.slug)}</li>
                        </Link>
                    )
                })}
            </ul>
        </>
    )
}