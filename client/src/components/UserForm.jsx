import { useState } from "react";

const UserForm = ({requestHandler, formAction}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRequest = async (e) => {
        e.preventDefault();
        await requestHandler(username, password);
        setPassword("");
    }

    return (
        <form className="userForm" onSubmit={handleRequest}>
            <h2>{formAction}</h2>
            <section id="username-section">
                <label htmlFor="username-form">Username</label>
                <input placeholder='username' id='username-form' type='text' value={username} name="Username" 
                onChange={(newName) => setUsername(newName.target.value) }
                />
            </section>
            <section>
                <label htmlFor="password-form">Password</label>
                <input placeholder="password" id='password-form' type='password' value={password} name="Password" 
                onChange={(newPw) => setPassword(newPw.target.value) }
                />
            </section>
            <button type="submit">{formAction}</button>
        </form>
    )
}

export default UserForm;