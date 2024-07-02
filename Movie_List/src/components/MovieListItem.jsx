export default function MovieListItemOne(props) {
    return (
        <li><a href={props.url}>{props.children}</a></li>
    );
}