import { useState } from "react";
import NotificationMessage from './NotificationMessage';
import '../styles/loginPage.css';

const LoginPage = ({ sendLoginRequest, notification, isError}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        await sendLoginRequest(username, password);
        setPassword("");
    }

    return (
        <>
        {notification ? <NotificationMessage notification={notification} isError={isError} /> : <></>}
        <form className="loginForm" onSubmit={handleLogin}>
            <h2>Login</h2>
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
            <button type="submit">Log In</button>
        </form>
        </>
    )
}

export default LoginPage;