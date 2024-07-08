import { useEffect, useState } from "react";
import Search from "../search/Search";
import Pagination from "./pagination/Pagination";
import UserList from "./user-list/UserList";
import UserAdd from "./user-add/UserAdd";

const baseUrl = "http://localhost:3030/jsonstore";

export default function UserSection() {
    const [users, setUser] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const data = Object.values(result);

                setUser(data);
            } catch (error) {
                alert(error.message);
            }
        }

        getUsers();
    }, []);

    function addUserClickHandler() {
        setShowAddUser(true);
    }

    function addUserCloseHandler() {
        setShowAddUser(false);
    }

    async function addUserSaveHandler(e) {
        // prevent refresh
        e.preventDefault();

        // get user data
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);

        // make post request
        const response = await fetch(`${baseUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const createdUser = await response.json();

        // update local state
        setUser(oldUser => [...oldUser, createdUser]);

        // close modal
        setShowAddUser(false);
    }

    return (
        <>
            <section className="card users-container">
                <Search />
                <UserList users={users} />

                {showAddUser && (
                    <UserAdd
                        closeBtn={addUserCloseHandler}
                        onSave={addUserSaveHandler}
                    />
                )}

                <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

                <Pagination />
            </section>
        </>
    );
}