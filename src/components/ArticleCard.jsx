export const ArticleCard = ({ article }) => {
    return (
        <>
            <div className="flex justify-between">
                <p className="text-xs font-normal text-gray-400">{article.author}</p>
                <p className="text-xs font-normal text-gray-400">{article.created_at.slice(0,10)}</p>
            </div>
            <h2 className="mb-2 mt-2 text-2xl font-bold tracking-tight">{article.title}</h2>
            <div className="flex justify-between">
                <div className="flex align-middle justify-center h-5">
                    <p className="text-sm font-normal text-gray-400 mr-1">{article.votes}</p>
                    <svg className="fill-orange-600 h-5 w-5" fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"/></svg>
                </div>
            <p className="text-sm font-normal text-gray-400">{article.comment_count} comments</p>
            </div>
        </>
    )
}