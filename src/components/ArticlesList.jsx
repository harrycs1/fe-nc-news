import Loading from './Loading'
import { ArticleCard } from './ArticleCard'
import { getArticles } from "../../api"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

export const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isError, setIsError] = useState(false);
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
            setIsError(true);
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

    if (isError) return <p>Something went wrong</p>;
    if (isLoading) return <Loading />;  

    return (
        <>
        <h1>Articles</h1>
        <div className='dropdown-container'>
            <p>Sort by:</p>
            <select onChange={handleSortBy} value={searchParams.get('sort_by') || 'created_at'}>
                <option value='created_at'>Date</option>
                <option value='comment_count'>Comment Count</option>
                <option value='votes'>Votes</option>
                <option value='author'>Author</option>
                <option value='title'>Title</option>
            </select>
            <select onChange={handleOrderBy} value={searchParams.get('order') || 'desc'}>
                <option value='desc'>Descending</option>
                <option value='asc'>Ascending</option>
            </select>
        </div>
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