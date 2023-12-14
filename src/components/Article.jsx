import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getArticleById, patchArticleVotes } from "../../api";
import Loading from './Loading'
import { ErrorPage } from "../pages/ErrorPage";
import { CommentsList } from "./CommentsList";

export const Article = () => {
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

        patchArticleVotes(article_id)
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
            <h1>{article.title}</h1>
            <h2>{article.topic}</h2>
            <h3>Author: {article.author}</h3>
            <h4>Created at: {article.created_at}</h4>
            <h5>Comment count: {article.comment_count}</h5>
            <p>Votes: {article.votes}</p>
            <button onClick={handleUpvote}>Upvote</button>
            {isVotingError ? <p>Couldn't upvote! Please try again.</p> : null}
            <p>{article.body}</p>
            <img src={`${article.article_img_url}`} className="article-img"></img>
            <CommentsList />
        </>
    )
}