import { useEffect, useState } from "react";
import Search from "../search/Search";
import Pagination from "./pagination/Pagination";
import UserList from "./user-list/UserList";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-details/UserDetails";
import UserDeleteModal from "./user-delete-modal/UserDeleteModal";

const baseUrl = "http://localhost:3030/jsonstore";

export default function UserSection() {
    const [users, setUser] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsByID, setShowUserDetailsByID] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);

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
        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

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

    function userDetailsClickHandler(user) {
        setShowUserDetailsByID(user);
    }

    function deleteUserClickHandler(user) {
        setShowUserDeleteById(user._id);
    }

    async function userDeleteHandler() {
        const response = await fetch(`${baseUrl}/users/${showUserDeleteById}`, {
            method: "DELETE"
        });

        setUser(oldUser => oldUser.filter((u) => u._id !== showUserDeleteById));
        setShowUserDeleteById(null);
    }

    return (
        <>
            <section className="card users-container">
                <Search />
                <UserList
                    users={users}
                    onUserDetails={userDetailsClickHandler}
                    onDeleteUser={deleteUserClickHandler}
                />

                {showAddUser && (
                    <UserAdd
                        closeBtn={addUserCloseHandler}
                        onSave={addUserSaveHandler}
                    />
                )}

                {showUserDetailsByID && (
                    <UserDetails
                        user={showUserDetailsByID}
                        onClose={() => setShowUserDetailsByID(null)}
                    />
                )}

                {showUserDeleteById && (
                    <UserDeleteModal
                        onClose={() => setShowUserDeleteById(null)}
                        onUserDelete={userDeleteHandler}
                    />
                )}

                <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

                <Pagination />
            </section>
        </>
    );
}