import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from './components/ArticleList';
import Article from './components/Article';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to='/articles' />} />
                <Route path="/articles" element={<ArticleList />} />
                <Route path="/articles/:articleId/details" element={<Article />} />
            </Routes>
        </>
    )
}

export default App
