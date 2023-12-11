import Loading from './Loading'
import { ArticleCard } from './ArticleCard'
import { getArticles } from "../../api"
import { useEffect, useState } from "react"

export const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles()
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
    }, [])

    if (isError) return <p>Something went wrong</p>;
    if (isLoading) return <Loading />;  

    return (
        <>
        <h1>Articles</h1>
        <ul className='article-list'>
            {articles.map((article) => {
                return (
                    <li key={article.article_id} className='article-card'>
                        <ArticleCard article={article}/>
                    </li>
                )
            })}
        </ul>
        </>
    )
}