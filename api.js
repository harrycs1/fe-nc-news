import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://news-api-ndji.onrender.com/api"
})

export const getArticles = () => {
    return ncNewsApi.get(`/articles`)
}

export const getCommentsByArticleId = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`)
}

export const getArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`)
}

export const postArticleComment = (article_id, newComment) => {
    return ncNewsApi.post(`/articles/${article_id}/comments`, newComment)
}