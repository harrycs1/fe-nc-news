import { useState } from "react"

export const ArticleCard = ({ article }) => {
    return (
        <>
            <h2 className="article-title">{article.title}</h2>
            <h3 className="article-author">{article.author}</h3>
            <h4 className="article-comments">Comments: {article.comment_count}</h4>
            <h5 className="article-created">{article.created_at}</h5>
            <p className="article-votes">Votes: {article.votes}</p>
        </>
    )
}