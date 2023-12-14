import Loading from './Loading'
import { ArticleCard } from './ArticleCard'
import { getArticles } from "../../api"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";
import { ErrorPage } from '../pages/ErrorPage';

export const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isError, setIsError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get('topic');

    const params = new URLSearchParams(searchParams);

    useEffect(() => {
        getArticles(params)
        .then(({ data }) => {
            const articles = data.articles
            setArticles(articles);
        })
        .catch((err) => {
            setIsError(err);
          })
        .finally(() => {
            setIsLoading(false);
        });
    }, [topicQuery]);

    if (isError) return <ErrorPage error={isError}/>;
    if (isLoading) return <Loading />;  

    return (
        <>
        <h1>Articles</h1>
        <ul className='article-list'>
            {articles.map((article) => {
                return (
                    <Link to={`/articles/${article.article_id}`} key={article.article_id}>
                        <li className='article-card'>
                            <ArticleCard article={article}/>
                        </li>
                    </Link>
                )
            })}
        </ul>
        </>
    )
}