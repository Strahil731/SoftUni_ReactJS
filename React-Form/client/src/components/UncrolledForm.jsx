import { useState } from "react";

export default function UncrolledForm() {

    const [user, setUser] = useState({});

    function formSubmitHandler(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        setUser({
            username: formData.get("username")
        });
    }

    function logoutHandler() {
        setUser({});
    }

    return (
        <>
            <h1>Uncrolled Form</h1>
            {user.username
                ? <p>Hello {user.username}! <button onClick={logoutHandler}>Logout</button></p>
                : <form onSubmit={formSubmitHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            }
        </>
    );
}