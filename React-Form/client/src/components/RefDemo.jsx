import { useEffect, useRef, useState } from "react";

export default function RefDemo() {
    const [counter, setCounter] = useState(0);
    const initialRenderRef = useRef(true);

    useEffect(() => {
        if (initialRenderRef.current) {
            console.log("Initial rendly");
            initialRenderRef.current = false;
        }
        else {
            console.log("Update only");
        }
    }, [counter]);

    function incrementCounter() {
        setCounter(c => c + 1);
    }

    function resetRef() {
        initialRenderRef.current = true;
        setCounter(0);
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={incrementCounter}>Add 1</button>
            <button onClick={resetRef}>Reset</button>
        </>
    );
}