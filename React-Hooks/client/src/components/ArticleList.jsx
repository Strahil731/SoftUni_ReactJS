import { useFetch } from "../hooks/useFetch";

import ArticleCard from './ArticleCard';
import style from '../App.module.css';
import Button from 'react-bootstrap/Button';
import SpinnerFn from "../components/Spinner";

export default function ArticleList() {

    const {
        data: articles,
        isFetching,
        refetch
    } = useFetch("http://localhost:3030/jsonstore/advanced/articles/list", []);

    return (
        <>
            {
                isFetching
                    ? <SpinnerFn />
                    : (
                        <div className={style['article-list']}>
                            {articles.map(article => <ArticleCard key={article._id} {...article} />)}
                        </div>
                    )
            }
            <Button variant="primary" onClick={() => refetch()}>Refresh</Button>
        </>
    );
}