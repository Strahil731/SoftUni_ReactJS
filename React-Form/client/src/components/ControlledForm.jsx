import { useEffect, useState } from "react";

export default function ControlledForm() {

    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        email: ""
    });

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a");
            const profile = await response.json();

            // setUsername(profile.username);
        })();
    }, []);

    function formSubmitHandler(event) {
        event.preventDefault();
        console.log("Form Submitted");
    }

    function changeHandler(event) {
        setFormValues(oldValue => ({
            ...oldValue,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <>
            <h1>Crolled Form</h1>

            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={changeHandler}
                        placeholder="Strahil98"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={changeHandler}
                        placeholder="******"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={changeHandler}
                        placeholder="strahil1234@abv.bg"
                    />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </>
    );
}