import { Routes, Route } from "react-router-dom";
import { ArticlePage } from '../Pages/ArticlePage';
import { ArticlesPage } from '../pages/ArticlesPage';
import { HomePage } from "../pages/HomePage";
import { PostArticlePage } from "../pages/PostArticlePage";

export const Body = ({ topics }) => {
    return (
        <section className="main-content">
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/articles" element={<ArticlesPage/>}></Route>
                <Route path="/articles/:article_id" element={<ArticlePage/>}></Route>
                <Route path="/post" element={<PostArticlePage/>}></Route>
            </Routes>
        </section>
    )
}