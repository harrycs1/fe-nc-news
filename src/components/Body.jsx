import { Routes, Route } from "react-router-dom";
import { ArticlePage } from '../Pages/ArticlePage';
import { ArticlesPage } from '../pages/ArticlesPage';
import { HomePage } from "../pages/HomePage";
import { PostArticlePage } from "../pages/PostArticlePage";
import { ErrorPage } from "../pages/ErrorPage";
import { UsersPage } from "../pages/UsersPage";
import { UserPage } from "../pages/UserPage";

export const Body = ({ topics }) => {
    return (
        <main className="pt-4 mb-10">
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/articles" element={<ArticlesPage/>}></Route>
                <Route path="/articles/:article_id" element={<ArticlePage/>}></Route>
                <Route path="/post" element={<PostArticlePage/>}></Route>
                <Route path="/users" element={<UsersPage/>}></Route>
                <Route path="/users/:username" element={<UserPage/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </main>
    )
}