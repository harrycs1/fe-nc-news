import Loading from './Loading'
import { ArticleCard } from './ArticleCard'
import { getArticles } from "../../api"
import { useEffect, useState } from "react"

export const ArticlesList = ({ articles }) => {
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