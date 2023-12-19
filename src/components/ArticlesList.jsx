import Loading from './Loading'
import { ArticleCard } from './ArticleCard'
import { getArticles } from "../../api"
import { SortBy } from './SortBy'
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";
import { ErrorPage } from '../pages/ErrorPage';
import {capitaliseFirstLetter} from '../../utils/capitaliseFirstLetter'
import styles from '../style'

export const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isError, setIsError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get('topic');
    const sortQuery = searchParams.get('sort_by');
    const orderQuery = searchParams.get('order');

    const params = new URLSearchParams(searchParams);

    useEffect(() => {
        getArticles(searchParams)
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
    }, [topicQuery, sortQuery, orderQuery]);

    if (isError) return <ErrorPage error={isError}/>;
    if (isLoading) return <div className='h-screen'><Loading/></div>;  

    return (
        <>
        <h1 className='mb-2 text-2xl font-bold tracking-tight'>{topicQuery ? capitaliseFirstLetter(topicQuery) : "All"}</h1>
        <SortBy params={params} searchParams={searchParams} setSearchParams={setSearchParams}/>
        <ul className='list-none mt-4'>
            {articles.map((article) => {
                return (
                    <Link to={`/articles/${article.article_id}`} key={article.article_id}>
                        <li className={`py-6 px-6 mb-4 border-[1px] border-[#404040] rounded-lg bg-[#242424] shadow`}>
                            {isLoading ? <Loading/>  : <ArticleCard article={article}/>}
                        </li>
                    </Link>
                )
            })}
        </ul>
        </>
    )
}