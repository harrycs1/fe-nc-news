import Loading from './Loading'
import { ArticleCard } from './ArticleCard'
import { getArticles } from "../../api"
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

    function handleSortBy(e) {
        params.set('sort_by', e.target.value)
        setSearchParams(params)
    }

    function handleOrderBy(e) {
        params.set('order', e.target.value)
        setSearchParams(params)
    }

    if (isError) return <ErrorPage error={isError}/>;
    if (isLoading) return <Loading />;  

    return (
        <>
        <h1 className='mb-2 text-2xl font-bold tracking-tight'>{topicQuery ? capitaliseFirstLetter(topicQuery) : "All"}</h1>
        <div className='flex bg-secondary border border-[#404040] rounded-lg p-2'>
            <p className='w-1/6 block text-sm font-medium text-gray-200'>Sort by:</p>
            <div className='flex justify-between w-5/6'>
                <select className='bg-transparent appearance-none text-sm' onChange={handleSortBy} value={searchParams.get('sort_by') || 'created_at'}>
                    <option value='created_at'>Date</option>
                    <option value='comment_count'>Comment Count</option>
                    <option value='votes'>Votes</option>
                    <option value='author'>Author</option>
                    <option value='title'>Title</option>
                </select>
                <select className='bg-secondary text-sm appearance-none justify-self-end' onChange={handleOrderBy} value={searchParams.get('order') || 'desc'}>
                    <option value='desc'>Descending</option>
                    <option value='asc'>Ascending</option>
                </select>
            </div>
        </div>
        <ul className='list-none mt-4'>
            {articles.map((article) => {
                return (
                    <Link to={`/articles/${article.article_id}`} key={article.article_id}>
                        <li className={`${styles.paddingX} ${styles.paddingY} mb-4 border-[1px] border-[#404040] rounded-lg bg-[#242424] shadow`}>
                            <ArticleCard article={article}/>
                        </li>
                    </Link>
                )
            })}
        </ul>
        </>
    )
}