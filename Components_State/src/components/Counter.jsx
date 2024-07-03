import { useState } from "react";
import "./Counter.css";
import KillCounter from "./KillCaounter";

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementButtonClickHandler() {
        setCount(count + 1);
    }

    function resetButtonClickHandler() {
        setCount(0);
    }

    function decrementButtonClickHandler() {
        setCount(count - 1);
    }

    let counterText = `Positive ${count}`;
    let color = "green";
    let counterClassName = "positive-number";
    if (count < 0) {
        counterText = `Negative ${count}`;
        color = "red";
        counterClassName = "negative-number";
    }

    return (
        <>
            <h2>Counter</h2>
            <KillCounter count={count} />
            <p style={{ color }} className={counterClassName}>{counterText}</p>
            {count < 10 && <button onClick={incrementButtonClickHandler}>+</button>}
            <button onClick={resetButtonClickHandler}>0</button>
            <button onClick={decrementButtonClickHandler}>-</button>
        </>
    );
}