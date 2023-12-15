import { useState } from "react"

export const ArticleCard = ({ article }) => {
    return (
        <>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-author">{article.author}</p>
            <p className="article-comments">{article.comment_count} comments</p>
            <p className="article-created">{article.created_at.slice(0,10)}</p>
            <p className="article-votes">Votes: {article.votes}</p>
        </>
    )
}