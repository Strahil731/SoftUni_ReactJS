import { useEffect, useState } from "react";
import Search from "../search/Search";
import Pagination from "./pagination/Pagination";
import UserList from "./user-list/UserList";

const baseUrl = "http://localhost:3030/jsonstore";

export default function UserSection() {
    const [users, setUser] = useState([]);

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

    return (
        <>
            <section className="card users-container">
                <Search />
                <UserList users={users} />

                <button className="btn-add btn">Add new user</button>

                <Pagination />
            </section>
        </>
    );
}