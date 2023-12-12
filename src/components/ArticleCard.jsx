import { useState } from "react"

export const ArticleCard = ({ article }) => {
    return (
        <>
            <h2>{article.title}</h2>
            <p>Votes: {article.votes}</p>
        </>
    )
}