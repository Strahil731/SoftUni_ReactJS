/* eslint-disable react/prop-types */
export default function KillCounter(props) {
    let title = "Kill Counter";
    if (props.count == 1) {
        return <h3>First Blood!</h3>
    }

    if (props.count == 2) {
        title = "Double Kill!";
    }
    return (
        <h2>{title}</h2>
    );
}