import { useEffect, useRef, useState } from "react";

export default function ControlledForm() {

    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        email: "",
        age: "",
        bio: "",
        occupation: "it",
        sex: "m",
        swimming: "",
        football: ""
    });

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

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
        console.log(event.target.name);
        console.log(event.target.checked);
        setFormValues(oldValue => ({
            ...oldValue,
            [event.target.name]: event.target.type
                ? event.target.checked
                : event.target.value,
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
                        ref={inputRef}
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
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        placeholder="23"
                    />
                </div>
                <div>
                    <textarea
                        name="bio"
                        id="bio"
                        value={formValues.bio}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="occuperion">Occupation</label>
                    <select
                        name="occupation"
                        id="occupation"
                        value={formValues.occupation}
                        onChange={changeHandler}
                    >
                        <option value="it">IT</option>
                        <option value="ba">BA</option>
                        <option value="ai">AI</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sex">Sex: </label>
                    <label>Male</label>
                    <input
                        type="radio"
                        name="sex"
                        id="sex"
                        value="m"
                        checked={formValues.sex === "m"}
                        onChange={changeHandler}
                    />
                    <label> Female</label>
                    <input
                        type="radio"
                        name="sex"
                        id="sex"
                        value="f"
                        checked={formValues.sex === "f"}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="swimming">Swimming</label>
                    <input
                        type="checkbox"
                        name="swimming"
                        id="swimming"
                        value={formValues.swimming}
                        onChange={changeHandler}
                    />
                    <label htmlFor="football">Football</label>
                    <input
                        type="checkbox"
                        name="football"
                        id="football"
                        value={formValues.football}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </>
    );
}