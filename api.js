import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://news-api-ndji.onrender.com/api"
})

export const getArticles = (params) => {
    return ncNewsApi
    .get(`/articles`, { params })
    .catch((error) => {
        return Promise.reject({status: error.response.status, message: error.response.data.msg})
    })
}

export const getCommentsByArticleId = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`)
}

export const getArticleById = (article_id) => {
    return ncNewsApi
    .get(`/articles/${article_id}`)
    .catch((error) => {
        return Promise.reject({status: error.response.status, message: error.response.data.msg})
    })
}

export const postArticleComment = (article_id, newComment) => {
    return ncNewsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .catch((error) => {
        if (error.response) {
            return Promise.reject({status: error.response.status, message: error.response.data.msg})
        } else if (error.request) {
            return Promise.reject({ message: error.message })
        }
    })
}

const upvote = {"inc_votes" : 1};

export const patchArticleVotes = (article_id) => {
    return ncNewsApi.patch(`/articles/${article_id}`, upvote)
}

export const deleteComment = (comment_id) => {
    return ncNewsApi
    .delete(`/comments/${comment_id}`)
    .catch((error) => {
        if (error.response) {
            return Promise.reject({status: error.response.status, message: error.response.data.msg})
        } else if (error.request) {
            return Promise.reject({ message: error.message })
        }
    })
}

export const getTopics = () => {
    return ncNewsApi.get(`/topics`)
}

export const getUsers = () => {
    return ncNewsApi
    .get('/users')
}

export const getUserByUsername = (username) => {
    return ncNewsApi
    .get(`/users/${username}`)
    .catch((error) => {
        if (error.response) {
            return Promise.reject({status: error.response.status, message: error.response.data.msg})
        } else if (error.request) {
            return Promise.reject({ message: error.message })
        }
    })
}