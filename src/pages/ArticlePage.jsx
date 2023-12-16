import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getArticleById, patchArticleVotes } from "../../api";
import Loading from '../components/Loading'
import { ErrorPage } from "../pages/ErrorPage";
import { CommentsList } from "../components/CommentsList";

export const ArticlePage = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');
    const [isVotingError, setIsVotingError] = useState(false);

    useEffect(() => {
        getArticleById(article_id)
        .then(({ data }) => {
            const article = data.article;
            setArticle(article);
        })
        .catch((err) => {
            setIsError(err);
            setArticle({});
          })
        .finally(() => {
            setIsLoading(false);
        });
    }, [])

    function handleUpvote() {
        setArticle(() => ({...article, votes: article.votes + 1}))

        patchArticleVotes(article.article_id)
        .catch((err) => {
            setIsVotingError(true);
          })
        .finally(() => {
            setIsLoading(false);
            setTimeout(() => {
                setIsVotingError(false);
            }, 3000);
        });
    }

    if (isError) return <ErrorPage error={isError}/>;
    if (isLoading) return <Loading />;

    return (
        <>
            <div className="flex justify-between">
                <p className="text-sm font-normal text-gray-400">{article.author}</p>
                <p className="text-sm font-normal text-gray-400">{article.created_at.slice(0,10)}</p>
            </div>
            <h1 className="mb-4 mt-2 text-2xl font-bold tracking-tight">{article.title}</h1>
            <div className="flex align-middle justify-between mb-4">
                <button onClick={handleUpvote} className="flex justify-center bg-secondary rounded-full px-3 py-1">
                    <p className="text-lg font-normal text-gray-400 mr-1 m-0 p-0">{article.votes}</p>
                    <svg className="fill-orange-600 hover:fill-red-900 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 h-full w-5" fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"/></svg>
                    {isVotingError ? <p className="text-lg ml-4">Couldn't upvote!</p> : null}
                </button>
                <a href='#comments'>
                <p className="text-lg font-normal text-gray-400 bg-secondary rounded-full px-3 py-1">{article.comment_count} comments</p>
                </a>
            </div>
            <p className="text-lg my-4">{article.body}</p>
            <div className="flex justify-center">
                <img src={`${article.article_img_url}`} className="rounded-lg mb-3"></img>
            </div>
            <div id='comments'>
                <CommentsList/>
            </div>
        </>
    )
}