import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://news-api-ndji.onrender.com/api"
})

export const getArticles = () => {
    return ncNewsApi.get(`/articles`)
}

