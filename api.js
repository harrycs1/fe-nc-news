import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://news-api-ndji.onrender.com/api"
})

export const getArticles = (params) => {
    return ncNewsApi.get(`/articles`, { params })
}

export const getCommentsByArticleId = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`)
}

export const getArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`)
}

const upvote = {"inc_votes" : 1};

export const patchArticleVotes = (article_id) => {
    return ncNewsApi.patch(`/articles/${article_id}`, upvote)
}

export const getTopics = () => {
    return ncNewsApi.get(`/topics`)
}

