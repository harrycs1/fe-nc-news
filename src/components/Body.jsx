import { Routes, Route } from "react-router-dom";
import { CommentsList } from "./CommentsList";
import { Article } from './Article';
import { ArticlesPage } from '../pages/ArticlesPage';
import { HomePage } from "../pages/HomePage";
import { PostArticlePage } from "../pages/PostArticlePage";
import { ErrorPage } from "../pages/ErrorPage";

export const Body = ({ topics }) => {
    return (
        <section className="main-content">
            <Routes>
                <Route path="/articles/:article_id/comments" element={<CommentsList/>}></Route>
                <Route path="/articles/:article_id" element={<Article/>}></Route>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/articles" element={<ArticlesPage/>}></Route>
                <Route path="/post" element={<PostArticlePage/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </section>
    )
}