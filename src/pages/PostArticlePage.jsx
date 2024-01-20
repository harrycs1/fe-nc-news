import styles from "../style"
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/User";
import { postArticle, getTopics } from "../../api";
import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";

export const PostArticlePage = () => {
    const {user} = useContext(UserContext)
    const [articleInput, setArticleInput] = useState({
        author: user.username,
        title: '',
        body: '',
        topic: '',
        article_img_url: ''
    });
    const [isPostError, setIsPostError] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const [topics, setTopics] = useState([])

    function handleUpdateInput (event) {
        setArticleInput(() => {
            return { ...articleInput, [event.target.name]: event.target.value }
        })
    }

    function handlePostArticle(e) {
        setIsSubmitDisabled(true);
        e.preventDefault();

        if (!articleInput) setIsPostError('Your post is empty')
        else {
            setTimeout(() => {
                postArticle(articleInput)
                .then(({data}) => {
                    setArticleInput({
                        author: user.username,
                        title: '',
                        body: '',
                        topic: '',
                        article_img_url: ''
                    });
                })
                .catch((error) => {
                    setIsPostError(error)
                })
                .finally(() => {
                    setTimeout(() => {
                        setIsPostError('');   
                    }, 3000)
                    setIsSubmitDisabled(false)
                })
            }, 1000)
        }
    }

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
        <section className="h-full">
            <div>
                <h1 className={`${styles.heading2}`}>Post an Article</h1>
            </div>
            <form className={`flex flex-col bg-[#242424] rounded shadow-md px-8 pt-6 pb-8 mb-4`} onSubmit={handlePostArticle}>
                <div className="mb-4">
                    <label className="block mb-2 text-2xl font-bold" htmlFor="title">Title</label>
                    <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="title" type="text" placeholder="Choose a title" name="title" value={articleInput.title} onChange={handleUpdateInput} required></input>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-2xl font-bold" htmlFor="topic">Topic</label>
                    <select value={articleInput.topic} name="topic" onChange={handleUpdateInput} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight" required>
                        {topics.map((topic) => {
                            return (
                                    <option key={topic.slug} value={topic.slug}>{capitaliseFirstLetter(topic.slug)}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="mb-4 overflow-hidden rounded">
                    <label className="block mb-2 text-2xl font-bold" htmlFor="body">Article</label>
                    <textarea rows="5" className="border rounded w-full py-2 px-3 text-gray-700 leading-tight h-full resize-none" id="body" type="text" placeholder="Write an article" name="body" value={articleInput.body} onChange={handleUpdateInput} required></textarea>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-2xl font-bold" htmlFor="image">Image</label>
                    <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="image" type="text" placeholder="Include an image url" name="article_img_url" value={articleInput.article_img_url} onChange={handleUpdateInput} required></input>
                </div>
                <button className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isSubmitDisabled}>Post</button>
                {isPostError ? <p>{`${isPostError.message}. Please try again.`}</p> : null}
            </form>
        </section>
    )
}