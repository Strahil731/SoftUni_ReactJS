import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoList";
import "./style.css";

function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue === null) return [];

        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.getItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    function addTodos(title) {
        setTodos(currentTodos => {
            return [
                ...currentTodos,
                {
                    id: crypto.randomUUID(),
                    title,
                    completed: false
                }
            ]
        });
    }
    return (
        <>
            <NewTodoForm onSubmit={addTodos} />
        </>
    );
}

export default App
