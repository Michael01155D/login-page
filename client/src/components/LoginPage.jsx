import { useState } from "react";
import NotificationMessage from './NotificationMessage';

const LoginPage = ({ sendLoginRequest, notification, isError}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
            await sendLoginRequest(username, password);
    }

    return (
        <>
        {notification ? <NotificationMessage notification={notification} isError={isError} /> : <></>}
        <form onSubmit={handleLogin}>
             <label htmlFor="username-form">Username</label>
            <input id='username-form' type='text' value={username} name="Username" 
                onChange={(newName) => setUsername(newName.target.value) }
            />
            <label htmlFor="password-form">Password</label>
            <input id='password-form' type='text' value={password} name="Password" 
                onChange={(newPw) => setPassword(newPw.target.value) }
            />
            <button type="submit">Log In</button>
        </form>
        </>
    )
}

export default LoginPage;