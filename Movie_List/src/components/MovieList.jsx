import MovieListItemOne from "./MovieListItem";

export default function MovieList(props) {
    return (
        <>
            <h1>Movie List</h1>

            <ul>
                <MovieListItemOne url="https://www.imdb.com/title/tt7238392/">{props.movies[0]}</MovieListItemOne>
                <MovieListItemOne url="https://www.imdb.com/title/tt1596343/">{props.movies[1]}</MovieListItemOne>
            </ul>
        </>
    );
}