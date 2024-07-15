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
            <section id="usernameSection">
                <label htmlFor="usernameForm">Username (min 2 characters)</label>
                <input placeholder='username' maxLength={20} id='usernameForm' type='text' value={username} name="Username" 
                onChange={(newName) => setUsername(newName.target.value) }
                />
            </section>
            <section>
                <label htmlFor="passwordForm">Password</label>
                <input placeholder="password" id='passwordForm' type='password' value={password} name="Password" 
                onChange={(newPw) => setPassword(newPw.target.value) }
                />
            </section>
            <button id="formSubmitButton" type="submit">{formAction}</button>
        </form>
    )
}

export default UserForm;