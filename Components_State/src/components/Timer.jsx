import { useState } from "react";

export default function Counter() {
    const [time, setTime] = useState(0);

    setTimeout(() => {
        setTime(oldState => oldState + 1);
    }, 1000);

    return (
        <>
            <h2>Timer</h2>
            <p>{time}</p>
        </>
    );
}